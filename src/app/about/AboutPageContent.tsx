"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   ABOUT PAGE CONTENT
   ============================================ */

const TEAM = [
  { name: "Alex Chen", role: "Founder & Lead Architect", initials: "AC" },
  { name: "Priya Sharma", role: "AI Engineering Lead", initials: "PS" },
  { name: "Marcus Rivera", role: "Head of Growth & SEO", initials: "MR" },
  { name: "Sophie Laurent", role: "Senior UX Engineer", initials: "SL" },
  { name: "David Kim", role: "Full-Stack Developer", initials: "DK" },
  { name: "Aisha Patel", role: "Data & Analytics Lead", initials: "AP" },
];

const VALUES = [
  { title: "Engineering-First", description: "We solve problems with architecture, not band-aids. Every system is built for scale.", icon: "⚡" },
  { title: "Data-Driven", description: "No guesswork. Every decision is backed by metrics, analytics, and measurable outcomes.", icon: "📊" },
  { title: "AI-Native", description: "We don't bolt on AI as an afterthought. It's embedded into everything we build.", icon: "🤖" },
  { title: "Radical Transparency", description: "Real-time dashboards, sprint updates, and open communication — always.", icon: "🔍" },
];

export default function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
        <div className="container-default relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-caption mb-4 block"
          >
            // About Nexovian Digital
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display max-w-4xl mx-auto mb-6"
          >
            We&apos;re Not an Agency.<br />
            We&apos;re <span className="text-gradient">Architects</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-body-lg max-w-2xl mx-auto"
          >
            Born from a belief that businesses deserve engineering teams, not just designers.
            We build systems that think, scale, and generate revenue autonomously.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.7 }}
            >
              <span className="text-caption mb-3 block">// Our Mission</span>
              <h2 className="text-headline text-white mb-6">
                Democratize Enterprise-Grade Technology
              </h2>
              <p className="text-body-lg mb-4">
                The same AI, automation, and data infrastructure that Fortune 500 companies use shouldn&apos;t
                cost millions. We package it into accessible, scalable solutions for ambitious companies.
              </p>
              <p className="text-body">
                Every line of code we write, every AI agent we deploy, and every dashboard we build
                is designed with one goal: give our clients an unfair competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.7 }}
              className="glass-card !p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2021", label: "Founded" },
                  { value: "150+", label: "Projects" },
                  { value: "12", label: "Team Members" },
                  { value: "98%", label: "Retention" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[#00d4ff] font-[family-name:var(--font-heading)]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#6b7280] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="container-default">
          <SectionHeading
            label="// Core Values"
            title="What We Stand For"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {VALUES.map((value) => (
              <motion.div key={value.title} variants={staggerItem} className="glass-card text-center">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2 font-[family-name:var(--font-heading)]">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="container-default">
          <SectionHeading
            label="// The Engineers"
            title="Meet the Team"
            description="A diverse team of engineers, designers, and strategists building the future."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {TEAM.map((member) => (
              <motion.div key={member.name} variants={staggerItem} className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00d4ff]/15 to-[#8b5cf6]/15 border border-white/[0.08] flex items-center justify-center mx-auto mb-4 group-hover:border-[#00d4ff]/30 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-500">
                  <span className="text-lg font-bold text-white/40 group-hover:text-white/70 transition-colors font-[family-name:var(--font-heading)]">
                    {member.initials}
                  </span>
                </div>
                <p className="text-sm text-white font-medium mb-1">{member.name}</p>
                <p className="text-xs text-[#6b7280]">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
