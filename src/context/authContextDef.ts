import { createContext } from 'react';
import type { AuthUser, SignupPayload } from '../lib/api';

export interface AuthContextValue {
  user: AuthUser | null;
  isLoading: boolean;
  login: (identifier: string, password: string) => Promise<void>;
  signup: (payload: SignupPayload) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
export const TOKEN_KEY = 'shifter_token';
