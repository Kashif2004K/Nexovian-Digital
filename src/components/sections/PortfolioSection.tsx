"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

/* ============================================
   PORTFOLIO SECTION — Featured case studies
   with tilt hover and glow effects
   ============================================ */

export default function PortfolioSection() {
  return (
    <section className="section-padding relative" id="portfolio">
      <div className="container-default">
        <SectionHeading
          label="// Recent Deployments"
          title="Engineered for Scale"
          description="Every project is a mission. Every deployment is an ecosystem designed to generate measurable results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <div className="group glass-card p-0 overflow-hidden cursor-pointer h-full">
                {/* Image placeholder with gradient */}
                <div
                  className="h-56 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%)`,
                  }}
                >
                  {/* Grid overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-2xl border flex items-center justify-center opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"
                      style={{ borderColor: `${item.color}40`, backgroundColor: `${item.color}10` }}
                    >
                      <span className="text-2xl font-bold font-[family-name:var(--font-heading)]" style={{ color: item.color }}>
                        {item.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] px-3 py-1 rounded-full bg-black/40 border border-white/[0.08] text-white/70 backdrop-blur-sm font-[family-name:var(--font-mono)] uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 font-[family-name:var(--font-heading)] group-hover:text-[#00d4ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 rounded-md bg-white/[0.04] text-[#9ca3af] border border-white/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
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
