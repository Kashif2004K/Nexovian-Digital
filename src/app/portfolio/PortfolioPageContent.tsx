"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   PORTFOLIO PAGE CONTENT — Filterable grid
   ============================================ */

const CATEGORIES = ["All", "Web Application", "AI Automation", "Data Intelligence", "E-Commerce"];

const EXTENDED_PORTFOLIO = [
  ...PORTFOLIO_ITEMS,
  {
    id: "synthwave",
    title: "Synthwave Studio",
    category: "Web Application",
    description: "Creative portfolio platform with immersive 3D WebGL experience.",
    tags: ["Three.js", "Next.js", "WebGL"],
    color: "#ff00ff",
  },
  {
    id: "datastream",
    title: "DataStream Pipeline",
    category: "Data Intelligence",
    description: "Real-time ETL pipeline processing 1M+ events per hour.",
    tags: ["Python", "Kafka", "BigQuery"],
    color: "#00ff88",
  },
];

export default function PortfolioPageContent() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? EXTENDED_PORTFOLIO
    : EXTENDED_PORTFOLIO.filter((p) => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.04)_0%,transparent_50%)]" />
        <div className="container-default relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-caption mb-4 block">
            // Deployments
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display max-w-4xl mx-auto mb-6"
          >
            Engineered for <span className="text-gradient">Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-body-lg max-w-2xl mx-auto"
          >
            Every project is a mission-critical deployment designed to generate measurable results.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding">
        <div className="container-default">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                  filter === cat
                    ? "border-[#00d4ff]/40 bg-[#00d4ff]/10 text-[#00d4ff]"
                    : "border-white/[0.06] bg-white/[0.02] text-[#6b7280] hover:text-white hover:border-white/[0.12]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="group glass-card p-0 overflow-hidden cursor-pointer h-full">
                    <div
                      className="h-44 relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${item.color}12 0%, ${item.color}04 100%)` }}
                    >
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                          backgroundSize: "30px 30px",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-16 h-16 rounded-xl border flex items-center justify-center opacity-25 group-hover:opacity-50 transition-all duration-500"
                          style={{ borderColor: `${item.color}40`, backgroundColor: `${item.color}10` }}
                        >
                          <span className="text-xl font-bold font-[family-name:var(--font-heading)]" style={{ color: item.color }}>
                            {item.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="text-[9px] px-2.5 py-1 rounded-full bg-black/40 border border-white/[0.08] text-white/60 backdrop-blur-sm font-[family-name:var(--font-mono)] uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-white mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#00d4ff] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#6b7280] mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-[#9ca3af] border border-white/[0.04]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
