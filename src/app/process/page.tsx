import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-20">
      <Navbar />
      <ProcessSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
