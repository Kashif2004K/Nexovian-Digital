"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/lib/constants";

/* ============================================
   FAQ SECTION — Accordion-style FAQ
   with smooth animations
   ============================================ */

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative" id="faq">
      <div className="container-default max-w-3xl">
        <SectionHeading
          label="// Knowledge Base"
          title="Frequently Asked Questions"
          description="Everything you need to know before we initialize your project."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`glass-panel overflow-hidden transition-all duration-500 ${
                openIndex === i ? "border-[#00d4ff]/20" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                id={`faq-toggle-${i}`}
              >
                <span className="text-sm font-medium text-white pr-4">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[#6b7280] shrink-0"
                >
                  <path d="M12 5v14M5 12h14" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm text-[#9ca3af] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
