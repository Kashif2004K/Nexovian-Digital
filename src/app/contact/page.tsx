import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start your project with Nexovian Digital. Book a free architecture review and discover how AI can transform your business.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
