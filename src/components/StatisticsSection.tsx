"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Videos Delivered", color: "text-primary" },
  { value: "150+", label: "Happy Clients", color: "text-secondary" },
  { value: "15", label: "Industry Awards", color: "text-accent" },
  { value: "50M+", label: "Views Generated", color: "text-foreground" }
];

export default function StatisticsSection() {
  return (
    <section className="py-24 bg-background border-y-4 border-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center justify-center p-6 border-4 border-foreground bg-surface hard-shadow"
            >
              <div className={`text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-2 ${stat.color} drop-shadow-[2px_2px_0_rgba(26,26,26,1)]`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base font-bold text-foreground uppercase tracking-widest mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
