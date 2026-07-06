"use client";

import { motion } from "framer-motion";
import { Video, Sparkles, PenTool, Layers, BookOpen } from "lucide-react";

const services = [
  {
    title: "Explainer Videos",
    description: "Clear, engaging animations that explain your complex product in seconds.",
    icon: Video,
    color: "bg-primary"
  },
  {
    title: "Motion Graphics",
    description: "Sleek, modern graphics to elevate your brand's digital presence.",
    icon: Sparkles,
    color: "bg-secondary"
  },
  {
    title: "Character Animation",
    description: "Custom characters that bring personality to your brand and resonate with your audience.",
    icon: PenTool,
    color: "bg-accent"
  },
  {
    title: "Storyboarding",
    description: "Visual roadmaps ensuring your narrative is perfect before we animate a single frame.",
    icon: Layers,
    color: "bg-white"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden border-y-4 border-foreground">
      {/* 2D Background Pattern (Grid) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1A1A1A 2px, transparent 2px), linear-gradient(90deg, #1A1A1A 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-black mb-6 text-foreground uppercase"
            >
              Our <span className="text-primary underline decoration-8 decoration-accent underline-offset-4">Expertise</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted font-medium"
            >
              We cover the entire pipeline, from script to final render, delivering pixel-perfect 2D animation.
            </motion.p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 bg-surface border-4 border-foreground hard-shadow group relative overflow-hidden hover:hard-shadow-hover transition-all cursor-crosshair"
              >
                {/* Hover overlay shape */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 ${service.color} rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 scale-0 group-hover:scale-150 border-4 border-foreground`} />
                
                <div className={`w-14 h-14 border-4 border-foreground ${service.color} flex items-center justify-center mb-8 relative z-10 shadow-[4px_4px_0_0_#1A1A1A] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[0px_0px_0_0_#1A1A1A] transition-all`}>
                  <Icon className={`w-7 h-7 ${service.color === 'bg-white' ? 'text-foreground' : 'text-foreground'}`} />
                </div>
                
                <h3 className="text-xl font-heading font-black text-foreground mb-4 relative z-10 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted relative z-10 font-medium">
                  {service.description}
                </p>
                
                {/* Arrow */}
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
                  Learn more
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
