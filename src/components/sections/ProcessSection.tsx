"use client";

import { motion } from "framer-motion";
import { defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

/* ============================================
   PROCESS SECTION — How We Work
   Step-by-step timeline with glowing connectors
   ============================================ */

const STEPS = [
  {
    number: "01",
    title: "Discovery & Architecture",
    description: "We deep-dive into your business, audit existing systems, and design a technical blueprint tailored to your growth objectives.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sprint-Based Development",
    description: "Our engineering team builds in rapid 2-week sprints with continuous demos, ensuring transparency and velocity at every stage.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI Integration & Automation",
    description: "We deploy intelligent agents, connect your tools via Zapier/Make, and automate repetitive workflows to save 40+ hours per week.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "We deploy to production, activate monitoring, and transition into a growth retainer — continuously optimizing performance and ROI.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding relative" id="process">
      <div className="container-default">
        <SectionHeading
          label="// Execution Protocol"
          title="How We Deploy Your Vision"
          description="A battle-tested 4-phase process that eliminates guesswork and delivers measurable results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-[-24px] h-px bg-gradient-to-r from-[#00d4ff]/20 to-transparent" />
              )}

              <div className="glass-card text-center relative">
                {/* Step number */}
                <div className="text-4xl font-bold text-white/[0.04] font-[family-name:var(--font-heading)] absolute top-4 right-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mx-auto mb-5 text-[#00d4ff] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-shadow duration-500">
                  {step.icon}
                </div>

                <h3 className="text-base font-semibold text-white mb-3 font-[family-name:var(--font-heading)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
