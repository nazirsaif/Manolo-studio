"use client";

import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-surface border-y-4 border-foreground overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-md mx-auto w-full lg:max-w-none"
          >
            {/* Background Accent Box */}
            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 border-4 border-foreground" />
            
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] bg-white border-4 border-foreground flex flex-col items-center justify-center overflow-hidden z-10 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/founder.jpeg" alt="The Founder" className="w-full h-full object-cover relative z-20 group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            {/* Little decorative badge */}
            <div className="absolute -left-6 top-10 bg-primary border-4 border-foreground px-4 py-2 z-20 transform -rotate-6 hard-shadow">
              <span className="text-white font-black uppercase tracking-widest text-sm">The Founder</span>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <div className="inline-block bg-white border-2 border-foreground px-4 py-1 mb-6 hard-shadow transform rotate-2">
              <span className="text-sm font-black uppercase tracking-widest">About Us</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground uppercase tracking-tight mb-6 leading-tight">
              Driven by <span className="text-primary underline decoration-8 underline-offset-4 decoration-accent">Passion</span> & Creativity.
            </h2>
            
            <p className="text-lg text-muted font-medium mb-6 leading-relaxed">
              Hi, I am the founder of Manolo Studio. We started this journey with a simple mission: to help innovative brands tell their stories through premium, hand-crafted 2D animation.
            </p>
            
            <p className="text-lg text-muted font-medium mb-10 leading-relaxed">
              Every project we take on is a true collaboration. We don't just create videos; we build visual experiences that capture your unique voice and drive real results for your business.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white font-black uppercase tracking-wider border-2 border-foreground hard-shadow hover:hard-shadow-hover hover:bg-primary transition-all group"
            >
              Let's Create Together
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
