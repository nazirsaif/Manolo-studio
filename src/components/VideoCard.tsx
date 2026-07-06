"use client";

import { Play, Eye, Clock } from "lucide-react";
import type { Video } from "@/hooks/useYoutubeVideos";

interface VideoCardProps {
  video: Video;
  onClick: (id: string) => void;
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <div 
      className="group flex flex-col bg-surface border-2 border-foreground hard-shadow hover:hard-shadow-hover transition-all cursor-pointer h-full"
      onClick={() => onClick(video.id)}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video border-b-2 border-foreground overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 flex items-center gap-1 border border-foreground/50">
          <Clock className="w-3 h-3" />
          {video.duration}
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 bg-primary border-2 border-foreground rounded-full flex items-center justify-center hard-shadow transform group-hover:scale-110 transition-transform">
            <Play fill="currentColor" className="w-6 h-6 text-white ml-1" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="font-heading font-black text-lg sm:text-xl text-foreground line-clamp-2 leading-tight mb-3">
          {video.title}
        </h3>
        
        <div className="mt-auto flex items-center text-xs sm:text-sm text-muted font-medium">
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            <span>{video.viewCount} views</span>
          </div>
        </div>
      </div>
    </div>
  );
}
