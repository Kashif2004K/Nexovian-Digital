import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DashboardPageContent from "./DashboardPageContent";

export const metadata: Metadata = {
  title: "Dashboard Showcase",
  description: "Preview the AI-powered dashboards and analytics platforms we build for our clients.",
};

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main><DashboardPageContent /></main>
      <Footer />
    </>
  );
}
