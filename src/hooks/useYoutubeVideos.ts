import { useState, useEffect } from 'react';

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount: string;
  duration: string;
}

export function useYoutubeVideos(handle: string) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        setError(null);
        
        // Remove @ if it was included in the handle
        const cleanHandle = handle.startsWith('@') ? handle.substring(1) : handle;
        
        const response = await fetch(`/api/youtube?handle=@${cleanHandle}`);
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch videos');
        }
        
        setVideos(data.videos || []);
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    }

    if (handle) {
      fetchVideos();
    }
  }, [handle]);

  return { videos, loading, error };
}
