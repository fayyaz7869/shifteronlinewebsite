import { useContext } from 'react';
import { SiteMediaContext, type SiteMediaContextType } from './siteMediaContextDef';

export function useSiteMedia(): SiteMediaContextType {
  const context = useContext(SiteMediaContext);
  if (!context) {
    return {
      mediaList: [],
      mediaMap: {},
      getMediaUrl: (_key: string, fallback: string) => fallback,
      refreshMedia: async () => {},
      isLoading: false,
    };
  }
  return context;
}
