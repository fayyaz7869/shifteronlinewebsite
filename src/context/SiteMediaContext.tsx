import { useEffect, useState, type ReactNode } from 'react';
import { getPublicMedia, type SiteMediaItem } from '../lib/adminApi';
import { SiteMediaContext } from './siteMediaContextDef';

export function SiteMediaProvider({ children }: { children: ReactNode }) {
  const [mediaList, setMediaList] = useState<SiteMediaItem[]>([]);
  const [mediaMap, setMediaMap] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchMedia = async () => {
    try {
      const data = await getPublicMedia();
      setMediaList(data.media || []);
      setMediaMap(data.map || {});
    } catch {
      // Graceful fallback to default assets
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const getMediaUrl = (key: string, fallback: string): string => {
    return mediaMap[key] || fallback;
  };

  return (
    <SiteMediaContext.Provider
      value={{
        mediaList,
        mediaMap,
        getMediaUrl,
        refreshMedia: fetchMedia,
        isLoading,
      }}
    >
      {children}
    </SiteMediaContext.Provider>
  );
}
