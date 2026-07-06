"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden border-y-4 border-foreground">
      {/* 2D Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white border-4 border-foreground rounded-full opacity-20" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent border-4 border-foreground rotate-45 opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-surface border-4 border-foreground p-12 md:p-24 text-center hard-shadow relative overflow-hidden"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 text-foreground uppercase tracking-tight leading-tight">
            Ready to Bring Your <br className="hidden md:block"/>
            <span className="text-primary underline decoration-8 decoration-accent underline-offset-4">Story to Life?</span>
          </h2>
          
          <p className="text-xl text-muted font-bold mb-12 max-w-2xl mx-auto">
            Let's collaborate to create a premium animation that elevates your brand and captivates your audience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-black uppercase tracking-widest border-4 border-foreground shadow-[6px_6px_0_0_#1A1A1A] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 group"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-foreground font-black uppercase tracking-widest border-4 border-foreground shadow-[6px_6px_0_0_#1A1A1A] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" strokeWidth={3} />
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
