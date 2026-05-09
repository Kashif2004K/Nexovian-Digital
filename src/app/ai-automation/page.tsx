import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIAutomationContent from "./AIAutomationContent";

export const metadata: Metadata = {
  title: "AI Automation Solutions",
  description: "Custom AI chatbots, workflow automation, CRM automation, and AI agents — deploy your AI workforce with Nexovian Digital.",
};

export default function AIAutomationPage() {
  return (
    <>
      <Navbar />
      <main><AIAutomationContent /></main>
      <Footer />
    </>
  );
}
