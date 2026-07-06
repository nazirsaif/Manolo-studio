import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import YoutubeSection from "@/components/YoutubeSection";
import TiktokSection from "@/components/TiktokSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <ServicesSection />
      <YoutubeSection 
        channelHandle="@naya-coco" 
        title="Naya Coco" 
        subtitle="Featured Work" 
        id="naya-coco-videos"
      />
      <TiktokSection />
      <YoutubeSection 
        channelHandle="@SeerahStories-ALWK" 
        title="Seerah Stories" 
        subtitle="Latest Videos" 
        id="seerah-stories-videos"
      />
      <FeaturesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <FAQSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
