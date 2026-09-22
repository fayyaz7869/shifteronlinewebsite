import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminProtectedRoute } from './components/admin/AdminProtectedRoute';

function App() {
  return (
    <AdminAuthProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Website Routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>

            {/* Admin Authentication & Protected Dashboard Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AdminAuthProvider>
  );
}

export default App;
