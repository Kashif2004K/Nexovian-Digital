"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/lib/animations";

/* ============================================
   CTA SECTION — Final conversion block
   with gradient background and glow effects
   ============================================ */

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden" id="cta">
      <div className="container-default relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-[#0a0a0f] to-[#8b5cf6]/10" />
          <div className="absolute inset-0 bg-[#0a0a0f]/80" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d4ff]/[0.06] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b5cf6]/[0.06] rounded-full blur-[150px]" />

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-white/[0.08]" />

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8">
            <span className="text-caption mb-4 block">// Initialize</span>
            <h2 className="text-headline text-white mb-4 max-w-3xl mx-auto">
              Ready to Deploy Your{" "}
              <span className="text-gradient">Next-Gen</span>{" "}
              Digital Infrastructure?
            </h2>
            <p className="text-body-lg max-w-xl mx-auto mb-10">
              Book a free architecture review and discover how AI-powered systems can transform your business operations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base !py-4 !px-8" id="cta-section-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Start Your Project
              </Link>
              <Link href="/pricing" className="btn-secondary text-base !py-4 !px-8" id="cta-section-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
