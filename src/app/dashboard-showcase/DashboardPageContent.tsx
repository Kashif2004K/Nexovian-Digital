"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   DASHBOARD SHOWCASE PAGE
   ============================================ */

const DASHBOARDS = [
  {
    title: "Executive Revenue Dashboard",
    description: "Real-time revenue tracking across all channels with predictive forecasting.",
    metrics: [
      { label: "Monthly Revenue", value: "$847K" },
      { label: "MoM Growth", value: "+18.3%" },
      { label: "Forecast Accuracy", value: "94%" },
    ],
    color: "#00d4ff",
  },
  {
    title: "AI Agent Performance Monitor",
    description: "Track AI chatbot interactions, resolution rates, and customer satisfaction in real-time.",
    metrics: [
      { label: "Daily Conversations", value: "2,341" },
      { label: "Resolution Rate", value: "87%" },
      { label: "Avg. Response", value: "1.2s" },
    ],
    color: "#8b5cf6",
  },
  {
    title: "SEO Analytics Command Center",
    description: "Keyword rankings, organic traffic, and competitor analysis on a single screen.",
    metrics: [
      { label: "Keywords Tracked", value: "4,200" },
      { label: "Top 3 Rankings", value: "342" },
      { label: "Organic Traffic", value: "128K" },
    ],
    color: "#00ff88",
  },
  {
    title: "Sales Pipeline Automation",
    description: "Visual pipeline with AI-scored leads, automated follow-ups, and revenue projections.",
    metrics: [
      { label: "Active Leads", value: "1,847" },
      { label: "Win Rate", value: "34%" },
      { label: "Pipeline Value", value: "$2.1M" },
    ],
    color: "#ff6b35",
  },
];

export default function DashboardPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.06)_0%,transparent_50%)]" />
        <div className="container-default relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-caption mb-4 block">
            // Dashboard Suite
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display max-w-4xl mx-auto mb-6"
          >
            Your <span className="text-gradient">Command Center</span> for Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-body-lg max-w-2xl mx-auto"
          >
            We build custom Power BI and Next.js dashboards that give you total visibility into your business.
          </motion.p>
        </div>
      </section>

      {/* Dashboard Previews */}
      <section className="section-padding">
        <div className="container-default">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-8"
          >
            {DASHBOARDS.map((dashboard, idx) => (
              <motion.div key={dashboard.title} variants={staggerItem}>
                <div className="glass-card !p-0 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Dashboard preview */}
                    <div
                      className={`min-h-[300px] relative overflow-hidden ${idx % 2 !== 0 ? "lg:order-2" : ""}`}
                      style={{ background: `linear-gradient(135deg, ${dashboard.color}08 0%, ${dashboard.color}02 100%)` }}
                    >
                      {/* Fake dashboard UI */}
                      <div className="absolute inset-4 bg-[#0a0a0f] border border-white/[0.06] rounded-xl overflow-hidden">
                        {/* Title bar */}
                        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/[0.04]">
                          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                          <div className="w-2 h-2 rounded-full bg-[#28ca41]" />
                        </div>
                        {/* Metrics row */}
                        <div className="p-4 grid grid-cols-3 gap-3">
                          {dashboard.metrics.map((m) => (
                            <div key={m.label} className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-3">
                              <p className="text-[9px] text-[#6b7280] mb-1">{m.label}</p>
                              <p className="text-sm font-bold text-white font-[family-name:var(--font-heading)]">{m.value}</p>
                            </div>
                          ))}
                        </div>
                        {/* Fake chart */}
                        <div className="px-4 pb-4">
                          <div className="h-24 bg-white/[0.02] border border-white/[0.04] rounded-lg overflow-hidden relative">
                            <svg viewBox="0 0 300 80" className="w-full h-full" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id={`grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor={dashboard.color} stopOpacity="0.2" />
                                  <stop offset="100%" stopColor={dashboard.color} stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              <path
                                d={idx === 0
                                  ? "M0,60 C50,55 80,30 120,35 C160,40 180,20 220,15 C260,10 280,12 300,8"
                                  : idx === 1
                                  ? "M0,70 C40,60 70,40 110,45 C150,50 170,25 210,20 C250,15 275,18 300,10"
                                  : idx === 2
                                  ? "M0,50 C30,55 60,35 100,30 C140,25 170,40 210,25 C250,10 280,15 300,5"
                                  : "M0,65 C40,55 80,45 120,40 C160,35 200,20 240,15 C270,12 285,10 300,6"
                                }
                                fill="none"
                                stroke={dashboard.color}
                                strokeWidth="1.5"
                              />
                              <path
                                d={idx === 0
                                  ? "M0,60 C50,55 80,30 120,35 C160,40 180,20 220,15 C260,10 280,12 300,8 L300,80 L0,80 Z"
                                  : idx === 1
                                  ? "M0,70 C40,60 70,40 110,45 C150,50 170,25 210,20 C250,15 275,18 300,10 L300,80 L0,80 Z"
                                  : idx === 2
                                  ? "M0,50 C30,55 60,35 100,30 C140,25 170,40 210,25 C250,10 280,15 300,5 L300,80 L0,80 Z"
                                  : "M0,65 C40,55 80,45 120,40 C160,35 200,20 240,15 C270,12 285,10 300,6 L300,80 L0,80 Z"
                                }
                                fill={`url(#grad-${idx})`}
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                      <span className="text-caption mb-3 block">Dashboard {String(idx + 1).padStart(2, "0")}</span>
                      <h3 className="text-title text-white mb-4">{dashboard.title}</h3>
                      <p className="text-body-lg mb-6">{dashboard.description}</p>

                      <div className="flex flex-wrap gap-4">
                        {dashboard.metrics.map((m) => (
                          <div key={m.label}>
                            <span className="text-xl font-bold font-[family-name:var(--font-heading)]" style={{ color: dashboard.color }}>
                              {m.value}
                            </span>
                            <span className="text-xs text-[#6b7280] block mt-0.5">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
