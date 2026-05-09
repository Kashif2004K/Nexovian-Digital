import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioPageContent from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our recent deployments — enterprise web apps, AI automation systems, and data intelligence platforms.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main><PortfolioPageContent /></main>
      <Footer />
    </>
  );
}
