import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
<<<<<<< HEAD
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
=======
import LogoCloud from "@/components/sections/LogoCloud";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
>>>>>>> d017d29d323ae0bb118946b995f50fbb95329544
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
<<<<<<< HEAD
        <ServicesSection />
        <ProcessSection />
        <TechStackSection />
=======
        <LogoCloud />
        <StatsSection />
        <ServicesSection />
        <DashboardShowcase />
        <ProcessSection />
        <PortfolioSection />
        <TechStackSection />
        <TestimonialsSection />
>>>>>>> d017d29d323ae0bb118946b995f50fbb95329544
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
