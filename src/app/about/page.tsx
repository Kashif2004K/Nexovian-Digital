import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the engineering team behind Nexovian Digital — architects of intelligent digital ecosystems.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
