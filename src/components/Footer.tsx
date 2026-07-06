import Link from "next/link";

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Dribbble = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center group relative h-16 w-auto bg-white border-2 border-foreground hard-shadow hover:hard-shadow-hover transition-all overflow-hidden mb-6 inline-flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.jpeg" alt="Manolo Studio Logo" className="h-full w-auto object-contain" />
            </Link>
            <p className="text-muted font-bold text-sm leading-relaxed mb-8 max-w-sm">
              An award-winning 2D animation agency helping innovative brands tell their stories through premium motion design.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Dribbble].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border-2 border-foreground flex items-center justify-center text-foreground hover:bg-primary hover:text-white hard-shadow hover:translate-y-1 hover:shadow-none transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-foreground font-black uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/#about" },
                { name: "Services", href: "/#services" },
                { name: "Portfolio", href: "/#portfolio" },
                { name: "Process & Pricing", href: "/process" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-bold text-muted hover:text-primary transition-colors uppercase">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-foreground font-black uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4">
              {["Explainer Videos", "Character Animation", "Motion Graphics", "Storyboarding", "Illustration"].map((link) => (
                <li key={link}>
                  <Link href="#services" className="text-sm font-bold text-muted hover:text-primary transition-colors uppercase">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-foreground font-black uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-sm font-bold text-muted mb-4">Get the latest animation trends and studio news.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white border-2 border-foreground px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-foreground hover:bg-primary text-white text-sm font-black uppercase tracking-widest py-3 border-2 border-foreground hard-shadow active:translate-y-1 active:shadow-none transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-4 border-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-muted uppercase">
            &copy; {new Date().getFullYear()} Manolo Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-bold text-muted uppercase">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
