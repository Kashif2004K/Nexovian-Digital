"use client";

import { motion } from "framer-motion";
import { defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

/* ============================================
   TECH STACK SECTION — Technology showcase
   with animated floating icons
   ============================================ */

const TECH_ITEMS = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind", category: "Styling" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "OpenAI", category: "AI" },
  { name: "LangChain", category: "AI" },
<<<<<<< HEAD
  { name: "n8n", category: "Automation" },
=======
>>>>>>> d017d29d323ae0bb118946b995f50fbb95329544
  { name: "Power BI", category: "Analytics" },
  { name: "Zapier", category: "Automation" },
  { name: "Make.com", category: "Automation" },
  { name: "Vercel", category: "Deploy" },
  { name: "Python", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Framer", category: "Animation" },
  { name: "Figma", category: "Design" },
];

export default function TechStackSection() {
  return (
    <section className="section-padding relative" id="tech-stack">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container-default">
        <SectionHeading
          label="// Tech Infrastructure"
          title="Built on Industry-Leading Technology"
          description="We use the most powerful, scalable, and modern tools in the ecosystem."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto"
        >
          {TECH_ITEMS.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -4, borderColor: "rgba(0, 212, 255, 0.4)" }}
              className="px-6 py-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-[#00d4ff]/[0.05] transition-all duration-300 cursor-default group hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="text-sm font-semibold text-[#d1d5db] group-hover:text-white transition-colors relative z-10">
                {tech.name}
              </span>
              <span className="text-[10px] text-[#6b7280] block font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] mt-1 relative z-10 group-hover:text-[#00d4ff]/80 transition-colors">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
