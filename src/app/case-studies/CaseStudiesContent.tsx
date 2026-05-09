"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   CASE STUDIES PAGE
   ============================================ */

const CASE_STUDIES = [
  {
    id: "techscale-platform",
    title: "TechScale: 312% Traffic Growth in 6 Months",
    category: "SEO + Web Development",
    challenge: "TechScale's legacy website was slow, not ranking, and failing to convert visitors into demo requests.",
    result: "312% organic traffic increase, 2.5x demo conversion rate, 0.8s page load time.",
    metrics: [
      { label: "Traffic Increase", value: "312%" },
      { label: "Conversion Rate", value: "2.5x" },
      { label: "Load Time", value: "0.8s" },
    ],
    color: "#00d4ff",
  },
  {
    id: "cloudflow-ai",
    title: "CloudFlow: AI Agent Handles 85% of Support",
    category: "AI Automation",
    challenge: "CloudFlow's support team was overwhelmed with 500+ daily tickets, leading to 48-hour response times.",
    result: "AI agent resolves 85% of queries autonomously. Support costs dropped 60%. CSAT improved to 94%.",
    metrics: [
      { label: "Automated Resolution", value: "85%" },
      { label: "Cost Reduction", value: "60%" },
      { label: "CSAT Score", value: "94%" },
    ],
    color: "#8b5cf6",
  },
  {
    id: "novabridge-analytics",
    title: "NovaBridge: Real-Time BI for $50M Revenue",
    category: "Data Intelligence",
    challenge: "NovaBridge had data scattered across 12 tools with no unified view. Decisions took weeks.",
    result: "Unified Power BI ecosystem tracking all revenue streams. Decision time reduced from weeks to minutes.",
    metrics: [
      { label: "Data Sources Unified", value: "12" },
      { label: "Decision Speed", value: "10x" },
      { label: "Revenue Tracked", value: "$50M" },
    ],
    color: "#00ff88",
  },
];

export default function CaseStudiesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
        <div className="container-default relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-caption mb-4 block">
            // Mission Briefs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display max-w-4xl mx-auto mb-6"
          >
            Results That <span className="text-gradient">Speak Volumes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-body-lg max-w-2xl mx-auto"
          >
            Deep dives into how we've transformed businesses through engineering, AI, and data-driven strategy.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-default">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-8"
          >
            {CASE_STUDIES.map((cs, idx) => (
              <motion.div key={cs.id} variants={staggerItem}>
                <div className="glass-card !p-0 overflow-hidden group cursor-pointer">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Visual */}
                    <div
                      className="lg:col-span-2 min-h-[250px] relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${cs.color}10 0%, ${cs.color}03 100%)` }}
                    >
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                          backgroundSize: "30px 30px",
                        }}
                      />
                      {/* Metrics overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-5xl font-bold font-[family-name:var(--font-heading)]" style={{ color: cs.color }}>
                            {cs.metrics[0].value}
                          </span>
                          <p className="text-xs text-[#6b7280] mt-2">{cs.metrics[0].label}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-8">
                      <span className="text-[10px] text-[#6b7280] uppercase tracking-[0.15em] font-[family-name:var(--font-mono)]">
                        {cs.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white mt-2 mb-4 font-[family-name:var(--font-heading)] group-hover:text-[#00d4ff] transition-colors">
                        {cs.title}
                      </h3>

                      <div className="space-y-4 mb-6">
                        <div>
                          <span className="text-xs text-[#00d4ff] font-semibold uppercase tracking-wider">Challenge</span>
                          <p className="text-sm text-[#9ca3af] mt-1">{cs.challenge}</p>
                        </div>
                        <div>
                          <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Result</span>
                          <p className="text-sm text-[#9ca3af] mt-1">{cs.result}</p>
                        </div>
                      </div>

                      {/* Metric pills */}
                      <div className="flex flex-wrap gap-3">
                        {cs.metrics.map((m) => (
                          <div key={m.label} className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                            <span className="text-sm font-bold text-white font-[family-name:var(--font-heading)]">{m.value}</span>
                            <span className="text-xs text-[#6b7280] ml-2">{m.label}</span>
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
