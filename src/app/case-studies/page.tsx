import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "In-depth mission briefs showcasing how we've helped companies scale with AI, automation, and intelligent web architecture.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main><CaseStudiesContent /></main>
      <Footer />
    </>
  );
}
