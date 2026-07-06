"use client";

import { motion } from "framer-motion";
import VideoGrid from "./VideoGrid";

interface YoutubeSectionProps {
  channelHandle: string;
  title: string;
  subtitle: string;
  id?: string;
}

export default function YoutubeSection({ channelHandle, title, subtitle, id = "youtube-section" }: YoutubeSectionProps) {
  return (
    <section id={id} className="py-24 bg-background relative overflow-hidden">
      {/* 2D Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1A1A 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent border-2 border-foreground mb-6 hard-shadow transform rotate-1"
          >
            <span className="text-xs font-black tracking-widest text-foreground uppercase">{subtitle}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-black text-foreground uppercase tracking-tight max-w-3xl"
          >
            {title}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <VideoGrid channelHandle={channelHandle} />
        </motion.div>
      </div>
    </section>
  );
}
