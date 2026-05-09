import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPageContent from "./BlogPageContent";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AI automation, web development, SEO strategy, and data analytics from the Nexovian Digital engineering team.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main><BlogPageContent /></main>
      <Footer />
    </>
  );
}
