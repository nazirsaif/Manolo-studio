import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Manolo Studio",
  description: "Get in touch with Manolo Studio for your next 2D animation or motion graphics project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-primary border-b-4 border-foreground">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 3px, transparent 3px)', backgroundSize: '24px 24px' }} />
        
        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-block bg-white border-2 border-foreground hard-shadow px-4 py-2 mb-6 transform -rotate-1">
            <span className="font-heading font-black text-foreground uppercase tracking-wider text-sm">Start Your Project</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight mb-6" style={{ textShadow: '4px 4px 0px #1A1A1A' }}>
            Let's Create Together
          </h1>
          <p className="text-xl font-medium text-white max-w-2xl mx-auto">
            Ready to bring your ideas to life? Fill out the form below and our team will get back to you with a custom quote.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 px-6 relative flex-grow">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
