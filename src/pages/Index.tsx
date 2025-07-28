import HeroSection from "@/components/sections/HeroSection";
import MobileHero from "@/components/sections/MobileHero";
import HeroCarousel from "@/components/sections/HeroCarousel";
import Navigation from "@/components/layout/Navigation";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto h-full">
      <HeroSection />
      
      <main className="w-full md:w-2/3 h-screen overflow-y-scroll p-6 md:p-10 space-y-16">
        <Navigation />
        <MobileHero />
        <HeroCarousel />
        <BenefitsSection />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
