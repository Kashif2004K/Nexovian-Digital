"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   SERVICES PAGE CONTENT — Detailed view
   of all four service pillars
   ============================================ */

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  code: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  search: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  ),
  cpu: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
    </svg>
  ),
  chart: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
};

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden" id="services-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.06)_0%,transparent_50%)]" />
        <div className="container-default relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-caption mb-4 block"
          >
            // Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display max-w-4xl mx-auto mb-6"
          >
            Four Pillars of <span className="text-gradient">Digital Dominance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body-lg max-w-2xl mx-auto"
          >
            Enterprise-grade solutions engineered to generate revenue, automate operations, and scale your business autonomously.
          </motion.p>
        </div>
      </section>

      {/* Service Deep Dives */}
      {SERVICES.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className="section-padding relative border-t border-white/[0.04]"
        >
          {/* Background glow */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none opacity-[0.03]"
            style={{
              backgroundColor: service.color,
              left: idx % 2 === 0 ? "-10%" : "auto",
              right: idx % 2 !== 0 ? "-10%" : "auto",
            }}
          />

          <div className="container-default relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.7 }}
                className={idx % 2 !== 0 ? "lg:order-2" : ""}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}15`, color: service.color, boxShadow: `0 0 0 1px ${service.color}25` }}
                >
                  {SERVICE_ICONS[service.icon]}
                </div>

                <span className="text-xs text-[#6b7280] uppercase tracking-[0.15em] font-[family-name:var(--font-mono)] block mb-2">
                  {service.subtitle}
                </span>
                <h2 className="text-headline text-white mb-4">{service.title}</h2>
                <p className="text-body-lg mb-8">{service.description}</p>

                {/* Metric */}
                <div className="glass-panel inline-flex items-center gap-4 px-6 py-4 mb-8">
                  <span className="text-3xl font-bold font-[family-name:var(--font-heading)]" style={{ color: service.color }}>
                    {service.stats.metric}
                  </span>
                  <span className="text-sm text-[#6b7280]">{service.stats.label}</span>
                </div>

                <div>
                  <Link href="/contact" className="btn-primary" id={`service-cta-${service.id}`}>
                    Get Started
                  </Link>
                </div>
              </motion.div>

              {/* Features grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className={`grid grid-cols-2 gap-4 ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                {service.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    variants={staggerItem}
                    className="glass-card !p-5 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-3 group-hover:border-[#00d4ff]/30 transition-colors">
                      <span className="text-xs font-bold text-[#6b7280] font-[family-name:var(--font-mono)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-sm text-[#d1d5db] font-medium">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
