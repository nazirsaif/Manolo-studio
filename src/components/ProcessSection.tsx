"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Script",
    desc: "We learn about your brand, goals, and target audience to craft a compelling script."
  },
  {
    number: "02",
    title: "Storyboard & Style",
    desc: "We create a visual roadmap and styleframes so you know exactly how it will look."
  },
  {
    number: "03",
    title: "Animation & Sound",
    desc: "Our artists bring the frames to life, paired with premium voiceover and sound design."
  },
  {
    number: "04",
    title: "Final Delivery",
    desc: "After revision rounds to ensure perfection, we deliver the final broadcast-ready video."
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase text-foreground"
          >
            Our <span className="bg-primary px-2 border-2 border-foreground text-white hard-shadow rotate-2 inline-block">Process</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-foreground -translate-y-1/2 hidden lg:block" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-background border-4 border-foreground p-8 hard-shadow flex flex-col items-center text-center group hover:hard-shadow-hover transition-all mt-8 lg:mt-0"
              >
                {/* Number Badge */}
                <div className="absolute -top-8 bg-accent border-4 border-foreground w-16 h-16 flex items-center justify-center font-heading font-black text-2xl text-foreground shadow-[4px_4px_0_0_#1A1A1A] group-hover:-translate-y-2 transition-transform">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-heading font-black text-foreground mt-8 mb-4 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-muted font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
