"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const categories = ["All", "Explainer", "SaaS", "Brand Promo", "Character"];

const portfolioItems = [
  { id: 1, title: "Fintech App Promo", category: "SaaS", color: "bg-primary" },
  { id: 2, title: "Startup Brand Story", category: "Brand Promo", color: "bg-secondary" },
  { id: 3, title: "Healthcare Explainer", category: "Explainer", color: "bg-accent" },
  { id: 4, title: "Mascot Animation", category: "Character", color: "bg-white" },
  { id: 5, title: "Cybersecurity Platform", category: "SaaS", color: "bg-primary" },
  { id: 6, title: "E-learning Course Intro", category: "Explainer", color: "bg-secondary" },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = portfolioItems.filter(
    item => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase text-foreground"
          >
            Featured <span className="bg-accent px-2 border-2 border-foreground hard-shadow -rotate-2 inline-block">Work</span>
          </motion.h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all border-2 border-foreground ${
                activeCategory === cat
                  ? "bg-foreground text-background hard-shadow"
                  : "bg-surface text-foreground hover:bg-background hard-shadow"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group cursor-pointer"
              >
                <div className={`relative w-full aspect-video ${item.color} border-4 border-foreground hard-shadow overflow-hidden mb-4 group-hover:hard-shadow-hover transition-all`}>
                  {/* Flat Thumbnail Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity">
                    <div className="w-24 h-24 rounded-full border-4 border-foreground" />
                    <div className="w-16 h-16 bg-foreground absolute rotate-45" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary border-4 border-foreground flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-[4px_4px_0_0_#FFD600]">
                      <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-heading font-black text-foreground uppercase tracking-wide">{item.title}</h3>
                    <p className="text-sm text-muted font-bold tracking-widest uppercase mt-1">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-background border-4 border-foreground text-foreground font-black uppercase tracking-widest hard-shadow hover:hard-shadow-hover transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
