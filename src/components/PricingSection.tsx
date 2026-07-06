"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "4,999",
    desc: "Perfect for startups needing a quick explainer.",
    features: [
      "Up to 60 Seconds",
      "Custom Illustrations",
      "Professional Voice Over",
      "Background Music",
      "2 Revisions",
      "14-Day Delivery"
    ],
    highlighted: false,
    color: "bg-secondary"
  },
  {
    name: "Business",
    price: "8,999",
    desc: "Our most popular package for brand storytelling.",
    features: [
      "Up to 120 Seconds",
      "Premium Animation",
      "Top-Tier Voice Actor",
      "Custom Sound Design",
      "Unlimited Revisions",
      "Source Files Included",
      "21-Day Delivery"
    ],
    highlighted: true,
    color: "bg-primary"
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large scale campaigns and series.",
    features: [
      "Custom Duration",
      "Dedicated Creative Director",
      "Multi-format Exports",
      "Priority Rendering",
      "Dedicated Slack Channel",
      "Expedited Delivery"
    ],
    highlighted: false,
    color: "bg-accent"
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden border-t-4 border-foreground">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase text-foreground"
          >
            Transparent <span className="bg-primary px-2 border-2 border-foreground text-white hard-shadow inline-block transform rotate-1">Pricing</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center max-w-6xl mx-auto mt-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative p-8 bg-surface border-4 border-foreground hard-shadow flex flex-col ${
                plan.highlighted ? "lg:-translate-y-4 shadow-[8px_8px_0_0_#1A1A1A]" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-accent border-4 border-foreground text-foreground text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_0_#1A1A1A] z-20">
                  Most Popular
                </div>
              )}
              
              <div className={`w-16 h-16 ${plan.color} border-4 border-foreground flex items-center justify-center mb-6`}>
                <span className="font-heading font-black text-2xl">{i + 1}</span>
              </div>

              <h3 className="text-2xl font-heading font-black text-foreground mb-2 uppercase tracking-wide">{plan.name}</h3>
              <p className="text-sm text-muted mb-6 h-10 font-medium">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-black text-foreground">{typeof plan.price === 'string' && plan.price !== 'Custom' ? '$' : ''}{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-muted font-bold uppercase tracking-widest text-xs ml-2">/project</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 ${plan.color} border-2 border-foreground flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-foreground font-bold" strokeWidth={4} />
                    </div>
                    <span className="text-sm text-foreground font-bold">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 font-black uppercase tracking-widest transition-all border-4 border-foreground mt-auto ${
                  plan.highlighted
                    ? "bg-primary text-white shadow-[4px_4px_0_0_#1A1A1A] active:translate-y-1 active:shadow-none"
                    : "bg-white text-foreground shadow-[4px_4px_0_0_#1A1A1A] hover:bg-surface active:translate-y-1 active:shadow-none"
                }`}
              >
                {plan.price === 'Custom' ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
