"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Manolo Studio completely transformed how we explain our product. The 2D animation was flawless, and the turnaround time was unbelievable.",
    author: "Sarah Jenkins",
    role: "CMO at TechFlow",
    color: "bg-primary"
  },
  {
    quote: "Working with them was a breeze. They handled everything from script to sound design, and the final video increased our conversions by 40%.",
    author: "David Chen",
    role: "Founder of InnovateApp",
    color: "bg-secondary"
  },
  {
    quote: "The character animation brought so much personality to our brand. We've received endless compliments on the new explainer video.",
    author: "Elena Rodriguez",
    role: "Marketing Director",
    color: "bg-accent"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase text-foreground"
          >
            Client <span className="text-secondary underline decoration-8 decoration-primary underline-offset-4">Love</span>
          </motion.h2>
        </div>

        <div className="relative bg-background border-4 border-foreground p-8 md:p-16 hard-shadow">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-foreground/10" fill="currentColor" />

          <div className="h-[300px] md:h-[200px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center relative z-10"
              >
                <p className="text-lg sm:text-xl md:text-3xl font-medium leading-relaxed text-foreground mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className={`w-12 h-12 rounded-full border-4 border-foreground ${testimonials[currentIndex].color}`} />
                  <div className="text-center sm:text-left">
                    <h4 className="font-black text-foreground uppercase tracking-wide">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-muted font-bold">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-white border-4 border-foreground flex items-center justify-center hover:bg-accent transition-colors shadow-[4px_4px_0_0_#1A1A1A] active:translate-y-1 active:shadow-none"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white border-4 border-foreground flex items-center justify-center hover:bg-accent transition-colors shadow-[4px_4px_0_0_#1A1A1A] active:translate-y-1 active:shadow-none"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
