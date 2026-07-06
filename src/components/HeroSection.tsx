"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
      {/* 2D Background Pattern (Dots) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1A1A 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text Content */}
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent border-2 border-foreground mb-6 hard-shadow transform -rotate-2"
          >
            <span className="text-xs font-black tracking-widest text-foreground uppercase">Award-Winning Animation</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] mb-6 text-foreground uppercase tracking-tight"
          >
            We Turn Ideas Into <br className="hidden lg:block" />
            <span className="text-primary underline decoration-8 decoration-secondary underline-offset-4">Stunning</span> 2D.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            Elevate your brand with premium explainer videos, motion graphics, and character animation crafted by world-class artists.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-black uppercase tracking-wider border-2 border-foreground hard-shadow hover:hard-shadow-hover transition-all text-center"
            >
              Start Project
            </Link>
            <Link
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-surface text-foreground font-black uppercase tracking-wider border-2 border-foreground hard-shadow hover:hard-shadow-hover transition-all flex items-center justify-center gap-2"
            >
              <div className="w-6 h-6 bg-accent border-2 border-foreground flex items-center justify-center">
                <Play fill="currentColor" className="w-3 h-3 ml-0.5" />
              </div>
              Portfolio
            </Link>
          </motion.div>
        </div>
        
        {/* Visual Content (Vertical Video) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center w-full mx-auto lg:mx-0 py-8 lg:py-0"
        >
          {/* Wrapper for video to handle aspect ratio and floating badge */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] aspect-[9/16]">
            {/* Abstract 2D neo-brutalist container */}
            <div className="absolute inset-0 bg-secondary border-4 border-foreground hard-shadow overflow-hidden flex items-center justify-center rounded-sm">
              <video 
                src="/intro%20video.mp4" 
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                playsInline
                title="Traditional Intro Video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-accent border-4 border-foreground p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hard-shadow z-30 transform rotate-3"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-foreground flex items-center justify-center text-xl shadow-[2px_2px_0_0_#1A1A1A]">
                ⭐
              </div>
              <div>
                <p className="text-sm sm:text-base font-black text-foreground uppercase leading-none mb-1">Top Rated</p>
                <p className="text-xs font-bold text-foreground/70 uppercase tracking-widest leading-none">Agency 2026</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
