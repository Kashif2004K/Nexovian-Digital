"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

/* ============================================
   TESTIMONIALS SECTION — Client quotes
   with glassmorphism cards and avatars
   ============================================ */

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative" id="testimonials">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-default">
        <SectionHeading
          label="// Client Transmissions"
          title="Trusted by Industry Leaders"
          description="Don't take our word for it — hear from the companies we've helped transform."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.author} variants={staggerItem}>
              <div className="glass-card h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#00d4ff" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#d1d5db] leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-white/[0.08] flex items-center justify-center">
                    <span className="text-xs font-bold text-white/70">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">{t.author}</p>
                    <p className="text-xs text-[#6b7280]">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
