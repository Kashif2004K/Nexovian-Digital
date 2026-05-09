import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LogoCloud from "@/components/sections/LogoCloud";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   HOMEPAGE — Full conversion-optimized flow
   ============================================ */

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoCloud />
        <StatsSection />
        <ServicesSection />
        <DashboardShowcase />
        <ProcessSection />
        <PortfolioSection />
        <TechStackSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
