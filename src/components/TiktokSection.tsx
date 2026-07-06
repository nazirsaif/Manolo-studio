"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function TiktokSection() {
  return (
    <section id="tiktok-section" className="py-24 bg-surface border-y-4 border-foreground relative overflow-hidden">
      {/* 2D Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1A1A 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FE2C55] border-2 border-foreground mb-6 hard-shadow transform rotate-1"
          >
            <span className="text-xs font-black tracking-widest text-white uppercase">TikTok Feed</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-black text-foreground uppercase tracking-tight max-w-3xl"
          >
            Latest from <span className="text-primary underline decoration-8 underline-offset-4 decoration-accent">@i.am.pimsy</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center min-h-[400px]"
        >
          {/* Elfsight TikTok Feed */}
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-8b7aa73b-1514-42fc-8718-02d306679f8f w-full" data-elfsight-app-lazy></div>
        </motion.div>
      </div>
    </section>
  );
}
