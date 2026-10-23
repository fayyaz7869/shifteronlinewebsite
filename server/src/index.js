import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authRouter } from './routes.js';
import { adminRouter } from './adminRoutes.js';
import { routeRouter } from './routeCalculation.js';
import { geocodeRouter } from './geocode.js';
import { SiteMedia } from './models/SiteMedia.js';
import { Inquiry } from './models/Inquiry.js';
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

// Public inquiry submission endpoint
app.post('/api/inquiries', async (req, res) => {
  try {
    const {
      type = 'customer',
      name,
      mobile,
      vehicleType,
      pickupLocation,
      dropLocation,
      cargoType,
      needHelper,
      vehicleNumber,
      preferredHub,
      hasDocuments,
      notes,
    } = req.body || {};

    if (!name || !String(name).trim()) {
      return res.status(400).json({ message: 'Name is required.' });
    }
    if (!mobile || !String(mobile).trim()) {
      return res.status(400).json({ message: 'Mobile number is required.' });
    }

    const cleanMobile = String(mobile).replace(/\D/g, '').slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      return res.status(400).json({ message: 'Please enter a valid 10-digit Indian mobile number.' });
    }

    const inquiry = await Inquiry.create({
      type: type === 'driver' ? 'driver' : 'customer',
      name: String(name).trim(),
      mobile: cleanMobile,
      vehicleType: vehicleType ? String(vehicleType).trim() : '',
      pickupLocation: pickupLocation ? String(pickupLocation).trim() : '',
      dropLocation: dropLocation ? String(dropLocation).trim() : '',
      cargoType: cargoType ? String(cargoType).trim() : '',
      needHelper: Boolean(needHelper),
      vehicleNumber: vehicleNumber ? String(vehicleNumber).trim() : '',
      preferredHub: preferredHub ? String(preferredHub).trim() : '',
      hasDocuments: Boolean(hasDocuments),
      notes: notes ? String(notes).trim() : '',
      status: 'New',
    });

    return res.status(201).json({
      message: 'Inquiry submitted successfully! Our Indore operations desk will contact you shortly.',
      inquiry,
    });
  } catch (err) {
    console.error('Error saving inquiry:', err);
    return res.status(500).json({ message: 'Failed to submit inquiry. Please try again or WhatsApp us.' });
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
