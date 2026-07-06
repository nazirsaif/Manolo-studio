"use client";

import { useYoutubeVideos } from "@/hooks/useYoutubeVideos";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import { useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";

interface VideoGridProps {
  channelHandle: string;
}

export default function VideoGrid({ channelHandle }: VideoGridProps) {
  const { videos, loading, error } = useYoutubeVideos(channelHandle);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="w-full py-24 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-foreground/20">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
        <p className="text-muted font-medium font-heading uppercase tracking-widest text-sm">
          Loading Videos...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-16 flex flex-col items-center justify-center gap-4 bg-accent/10 border-2 border-accent hard-shadow">
        <AlertCircle className="w-10 h-10 text-accent" />
        <p className="text-foreground font-bold text-center px-4">
          Failed to load videos for {channelHandle}.
          <br />
          <span className="text-sm font-normal text-muted mt-2 block">{error}</span>
        </p>
      </div>
    );
  }

  if (!videos || videos.length === 0) {
    return (
      <div className="w-full py-24 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-foreground/20">
        <p className="text-muted font-medium font-heading uppercase tracking-widest text-sm">
          No public videos found.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {videos.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            onClick={(id) => setActiveVideoId(id)} 
          />
        ))}
      </div>
      
      <VideoModal 
        videoId={activeVideoId} 
        isOpen={!!activeVideoId} 
        onClose={() => setActiveVideoId(null)} 
      />
    </>
  );
}
