"use client";

import { motion } from "framer-motion";

/* ============================================
   SECTION HEADING — Reusable section header
   with label, headline, and description
   ============================================ */

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ label, title, description, align = "center", className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""} ${className}`}
    >
      {label && (
        <span className="text-caption mb-4 block">{label}</span>
      )}
      <h2 className="text-headline text-white mb-4">{title}</h2>
      {description && (
        <p className="text-body-lg max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}
