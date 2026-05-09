import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Web Development, SEO, AI Automation, and Data Analytics — enterprise-grade digital solutions powered by AI.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPageContent />
      </main>
      <Footer />
    </>
  );
}
