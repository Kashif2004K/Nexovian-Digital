"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { PRICING_TIERS } from "@/lib/constants";
import FAQSection from "@/components/sections/FAQSection";

/* ============================================
   PRICING PAGE CONTENT
   ============================================ */

export default function PricingPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.06)_0%,transparent_50%)]" />
        <div className="container-default relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-caption mb-4 block"
          >
            // Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display max-w-4xl mx-auto mb-6"
          >
            Invest in <span className="text-gradient">Infrastructure</span>,
            <br />Not Just Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-body-lg max-w-2xl mx-auto"
          >
            Transparent pricing for enterprise-grade solutions.
            Every package is designed to generate measurable ROI.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="container-default">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {PRICING_TIERS.map((tier) => (
              <motion.div key={tier.name} variants={staggerItem}>
                <div
                  className={`glass-card h-full flex flex-col relative ${
                    tier.highlighted
                      ? "border-[#00d4ff]/30 shadow-[0_0_40px_rgba(0,212,255,0.08)]"
                      : ""
                  }`}
                >
                  {/* Highlighted badge */}
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="text-[10px] px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-black font-bold uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-heading)] mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                        {tier.price}
                      </span>
                      <span className="text-sm text-[#6b7280]">{tier.period}</span>
                    </div>
                    <p className="text-sm text-[#6b7280] leading-relaxed">{tier.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#d1d5db]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" className="mt-0.5 shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={tier.highlighted ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                    id={`pricing-cta-${tier.name.toLowerCase()}`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
