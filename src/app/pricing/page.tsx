import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingPageContent from "./PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, value-based pricing for web development, SEO, AI automation, and data analytics.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingPageContent />
      </main>
      <Footer />
    </>
  );
}
