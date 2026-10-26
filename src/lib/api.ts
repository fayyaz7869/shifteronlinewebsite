const CONFIGURED_API_URL = (import.meta.env.VITE_API_URL as string | undefined)?.trim();
const LOCAL_API_URL = 'http://localhost:4000';
const LIVE_BACKEND_URL = 'https://shifteronline-backend.onrender.com';

const API_URL = CONFIGURED_API_URL || LOCAL_API_URL;

async function requestWithFallback(path: string, options: RequestInit = {}): Promise<Response> {
  const isLocal = API_URL.includes('localhost') || API_URL.includes('127.0.0.1');

  if (!isLocal || API_URL === LIVE_BACKEND_URL) {
    return await fetch(`${API_URL}${path}`, options);
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 1800);
    const res = await fetch(`${API_URL}${path}`, {
      ...options,
      signal: options.signal || controller.signal,
    });
    clearTimeout(timer);
    return res;
  } catch {
    return await fetch(`${LIVE_BACKEND_URL}${path}`, options);
  }
}

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('shifter_token');

  let res: Response;
  try {
    res = await requestWithFallback(path, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Network error';
    throw new ApiError(`Unable to connect to server (${msg}).`, 503);
  }

  const isJson = res.headers.get('content-type')?.includes('application/json');
  const body = isJson ? await res.json() : undefined;

  if (!res.ok) {
    throw new ApiError(body?.message ?? body?.msg ?? 'Something went wrong. Please try again.', res.status);
  }

  return body as T;
}

export interface AuthUser {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  status?: string;
  createdAt?: string;
  lastLoginAt?: string | null;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export interface SignupPayload {
  name: string;
  mobile: string;
  email?: string;
  password: string;
}

export interface LoginPayload {
  identifier: string;
  password: string;
}

export const api = {
  signup: (data: SignupPayload) =>
    request<AuthResponse>('/api/auth/signup', { method: 'POST', body: JSON.stringify(data) }),

  login: (data: LoginPayload | { identifier?: string; email?: string; mobile?: string; password: string }) =>
    request<AuthResponse>('/api/auth/login', { method: 'POST', body: JSON.stringify(data) }),

  me: () => request<{ user: AuthUser }>('/api/auth/me'),

  sendContactMessage: (data: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
  }) => request<{ message: string }>('/api/contact', { method: 'POST', body: JSON.stringify(data) }),
};
