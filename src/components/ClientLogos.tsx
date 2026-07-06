import { Building2, Laptop, Code, Rocket, Landmark, Flame } from "lucide-react";

const logos = [
  { name: "TECHFLOW", icon: Laptop },
  { name: "INNOVATE", icon: Rocket },
  { name: "FINANCE CO", icon: Landmark },
  { name: "SAAS BUILDER", icon: Code },
  { name: "MEGA CORP", icon: Building2 },
  { name: "IGNITE", icon: Flame },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-surface border-y-4 border-foreground overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-6">
        <p className="text-center text-sm font-black text-muted uppercase tracking-widest">
          Trusted by Innovative Brands Worldwide
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden whitespace-nowrap flex group cursor-pointer">
        {/* Flat fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee flex gap-16 items-center w-max group-hover:[animation-play-state:paused] transition-all">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => {
            const Icon = logo.icon;
            return (
              <div key={i} className="flex items-center gap-3 text-muted opacity-50 hover:opacity-100 hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 grayscale hover:grayscale-0">
                <Icon className="w-8 h-8 stroke-[3]" />
                <span className="text-2xl font-heading font-black tracking-widest">{logo.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
