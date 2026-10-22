import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authRouter } from './routes.js';
import { adminRouter } from './adminRoutes.js';
import { routeRouter } from './routeCalculation.js';
import { geocodeRouter } from './geocode.js';
import { SiteMedia } from './models/SiteMedia.js';
import { connectDB, disconnectDB } from './db.js';

if (!process.env.JWT_SECRET) {
  if (process.env.NODE_ENV === 'production') {
    console.error('Missing required environment variable JWT_SECRET. Set it in server/.env — see server/.env.example.');
    process.exit(1);
  } else {
    console.warn('[NOTICE] JWT_SECRET not found in server/.env. Using development fallback secret.');
    process.env.JWT_SECRET = 'shifter_online_development_fallback_jwt_secret_key_2026';
  }
}

const app = express();
const port = process.env.PORT ?? 4000;
const corsOrigin = process.env.CORS_ORIGIN
  ? (process.env.CORS_ORIGIN.includes(',') ? process.env.CORS_ORIGIN.split(',').map(s => s.trim()) : process.env.CORS_ORIGIN)
  : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'];

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/routes', routeRouter);
app.use('/api/geocode', geocodeRouter);

// Public media mapping endpoint
app.get('/api/media', async (_req, res) => {
  try {
    const list = await SiteMedia.find().select('key title url width height format updatedAt');
    const map = {};
    for (const item of list) {
      map[item.key] = item.url;
    }
    return res.status(200).json({ media: list, map });
  } catch {
    return res.status(200).json({ media: [], map: {} });
  }
});

app.get('/health', (_req, res) => res.json({ ok: true }));

async function start() {
  const server = app.listen(port, () => {
    console.log(`Shifter Online server listening on http://localhost:${port}`);
  });

  // Connect to DB in background
  connectDB().catch((err) => {
    console.error('Initial MongoDB connection error:', err.message);
  });

  const shutdown = async (signal) => {
    console.log(`\n${signal} received, shutting down gracefully...`);
    server.close(async () => {
      await disconnectDB();
      process.exit(0);
    });
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

start();
