"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { FOOTER_LINKS } from "@/lib/constants";

/* ============================================
   FOOTER — Premium dark footer with glow accents
   ============================================ */

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#030303]" id="site-footer">
      {/* Glow accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

      <div className="container-default section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center">
                <span className="text-black font-bold text-sm font-[family-name:var(--font-heading)]">N</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight font-[family-name:var(--font-heading)]">
                Nexovian Digital<span className="text-[#00d4ff]">.</span>
              </span>
            </Link>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-sm mb-6">
              We engineer intelligent digital ecosystems for companies that refuse to settle for ordinary. AI-powered. Data-driven. Future-proof.
            </p>
            {/* Status Indicator */}
            <div className="flex items-center gap-2 text-xs text-[#6b7280]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
              All Systems Operational
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold text-sm mb-5 font-[family-name:var(--font-heading)]">Services</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#6b7280] hover:text-[#00d4ff] text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold text-sm mb-5 font-[family-name:var(--font-heading)]">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#6b7280] hover:text-[#00d4ff] text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold text-sm mb-5 font-[family-name:var(--font-heading)]">Resources</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#6b7280] hover:text-[#00d4ff] text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#6b7280] text-xs">
            © {new Date().getFullYear()} Nexovian Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[#6b7280] hover:text-white text-xs transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#6b7280] hover:text-white text-xs transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="text-[#6b7280] hover:text-white text-xs transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
