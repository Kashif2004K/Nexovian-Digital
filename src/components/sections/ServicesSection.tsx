"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

/* ============================================
   SERVICES SECTION — Bento-grid service cards
   with hover glows and feature lists
   ============================================ */

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  code: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  search: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  ),
  cpu: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
    </svg>
  ),
  chart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
};

export default function ServicesSection() {
  return (
    <section className="section-padding relative" id="services">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff]/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="container-default relative z-10">
        <SectionHeading
          label="// Core Services"
          title="Four Pillars of Digital Transformation"
          description="We don't just deliver projects — we deploy systems that generate revenue, automate operations, and scale your business autonomously."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={staggerItem}>
              <Link href={`/services#${service.id}`} className="block group">
                <div className="glass-card h-full p-8 relative overflow-hidden">
                  {/* Top glow */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: `${service.color}10` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${service.color}10`,
                      color: service.color,
                      boxShadow: `0 0 0 1px ${service.color}20`,
                    }}
                  >
                    {SERVICE_ICONS[service.icon]}
                  </div>

                  {/* Content */}
                  <span className="text-xs text-[#6b7280] uppercase tracking-[0.1em] font-[family-name:var(--font-mono)]">
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-1 mb-3 font-[family-name:var(--font-heading)]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">{service.description}</p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="text-xs px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-[#9ca3af]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Bottom stat */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <div>
                      <span className="text-2xl font-bold font-[family-name:var(--font-heading)]" style={{ color: service.color }}>
                        {service.stats.metric}
                      </span>
                      <span className="text-xs text-[#6b7280] ml-2">{service.stats.label}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-[#00d4ff]/40 group-hover:bg-[#00d4ff]/10 transition-all duration-300">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
