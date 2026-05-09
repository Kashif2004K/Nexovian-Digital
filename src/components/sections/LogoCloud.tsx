"use client";

import { motion } from "framer-motion";
import { defaultViewport } from "@/lib/animations";

/* ============================================
   LOGO CLOUD — Scrolling client logos
   Social proof & trust-building section
   ============================================ */

const CLIENTS = [
  "TechScale", "CloudFlow", "NovaBridge", "Meridian", "Apex Systems",
  "DataVault", "QuantumSoft", "NeuralPath", "CyberGrid", "FusionCore",
];

export default function LogoCloud() {
  return (
    <section className="py-16 border-y border-white/[0.04] relative overflow-hidden" id="clients">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <p className="text-xs text-[#6b7280] uppercase tracking-[0.2em] font-[family-name:var(--font-mono)]">
          Trusted by Industry Leaders
        </p>
      </motion.div>

      {/* Scrolling logos */}
      <div className="flex animate-[scroll_25s_linear_infinite] whitespace-nowrap">
        {[...CLIENTS, ...CLIENTS].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center justify-center mx-12 text-xl font-bold text-white/10 hover:text-white/25 transition-colors duration-500 font-[family-name:var(--font-heading)] tracking-tight select-none shrink-0"
          >
            {name}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
