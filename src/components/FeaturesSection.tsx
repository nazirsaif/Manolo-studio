"use client";

import { motion } from "framer-motion";
import { Zap, Target, Heart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    desc: "Our streamlined pipeline ensures you get high-quality animation faster than traditional studios.",
    color: "bg-primary"
  },
  {
    icon: Target,
    title: "Conversion Focused",
    desc: "We don't just make things look pretty. Every frame is designed to keep viewers engaged and drive action.",
    color: "bg-secondary"
  },
  {
    icon: Heart,
    title: "100% Custom Artwork",
    desc: "No stock vectors here. Every character and environment is custom illustrated for your brand.",
    color: "bg-accent"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-background relative border-b-4 border-foreground overflow-hidden">
      {/* 2D Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1A1A 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase text-foreground"
          >
            Why Choose <span className="text-primary underline decoration-8 decoration-secondary underline-offset-4">Us?</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 bg-surface border-4 border-foreground hard-shadow group relative overflow-hidden"
              >
                <div className={`w-16 h-16 ${feature.color} border-4 border-foreground flex items-center justify-center mb-8 shadow-[4px_4px_0_0_#1A1A1A] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform`}>
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                
                <h3 className="text-xl font-heading font-black text-foreground mb-4 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-muted font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
