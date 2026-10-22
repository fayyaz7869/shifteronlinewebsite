import { createContext } from 'react';
import type { SiteMediaItem } from '../lib/adminApi';

export interface SiteMediaContextType {
  mediaList: SiteMediaItem[];
  mediaMap: Record<string, string>;
  getMediaUrl: (key: string, fallback: string) => string;
  refreshMedia: () => Promise<void>;
  isLoading: boolean;
}

export const SiteMediaContext = createContext<SiteMediaContextType | null>(null);
