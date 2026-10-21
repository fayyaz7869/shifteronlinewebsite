import { createContext } from 'react';
import type { AdminUser } from '../lib/adminApi';

export interface AdminAuthContextValue {
  admin: AdminUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AdminAuthContext = createContext<AdminAuthContextValue | undefined>(undefined);
