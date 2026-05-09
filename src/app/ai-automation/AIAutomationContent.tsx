"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   AI AUTOMATION PAGE
   ============================================ */

const AI_SOLUTIONS = [
  {
    title: "AI Customer Support Agent",
    description: "Deploy an intelligent chatbot that resolves 85% of customer queries autonomously, 24/7.",
    features: ["Natural language understanding", "Multi-language support", "Seamless human handoff", "Learning from interactions"],
    metric: "85%",
    metricLabel: "Resolution Rate",
    color: "#00d4ff",
  },
  {
    title: "Lead Qualification AI",
    description: "Automatically score, qualify, and route inbound leads to your sales team — instantly.",
    features: ["Behavioral scoring", "CRM auto-update", "Smart routing", "Conversation intelligence"],
    metric: "3x",
    metricLabel: "More Qualified Leads",
    color: "#8b5cf6",
  },
  {
    title: "Workflow Automation Engine",
    description: "Connect 500+ apps and eliminate manual tasks with intelligent automation flows.",
    features: ["Zapier & Make.com", "Custom API integrations", "Error handling", "Real-time monitoring"],
    metric: "40hrs",
    metricLabel: "Saved Weekly",
    color: "#00ff88",
  },
  {
    title: "CRM Automation Suite",
    description: "Automate your entire sales pipeline — from lead capture to follow-up to closed deal.",
    features: ["Auto follow-ups", "Pipeline automation", "Email sequences", "Activity tracking"],
    metric: "60%",
    metricLabel: "Faster Close Rate",
    color: "#ff6b35",
  },
  {
    title: "Content Generation AI",
    description: "Generate SEO-optimized blog posts, social media content, and email campaigns at scale.",
    features: ["Brand voice training", "SEO optimization", "Multi-format output", "Human review workflow"],
    metric: "10x",
    metricLabel: "Content Output",
    color: "#00d4ff",
  },
  {
    title: "Custom AI Agents",
    description: "Bespoke AI agents built for your specific use case — data analysis, research, or operations.",
    features: ["Custom training", "Proprietary data", "API integration", "Continuous learning"],
    metric: "∞",
    metricLabel: "Possibilities",
    color: "#8b5cf6",
  },
];

export default function AIAutomationContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
        <div className="container-default relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_8px_rgba(0,212,255,0.6)] animate-pulse" />
            <span className="text-xs text-[#00d4ff] font-[family-name:var(--font-mono)]">Neural Automation Suite</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display max-w-5xl mx-auto mb-6"
          >
            Your <span className="text-gradient">AI Workforce</span> Is Ready to Deploy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-body-lg max-w-2xl mx-auto mb-10"
          >
            Intelligent agents that work around the clock — automating support, qualifying leads, and scaling your operations without increasing headcount.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Link href="/contact" className="btn-primary text-base !py-4 !px-8">
              Deploy Your AI Workforce
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container-default">
          <SectionHeading
            label="// AI Solutions"
            title="Intelligent Systems for Every Challenge"
            description="From chatbots to custom agents — we build AI that transforms how you do business."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {AI_SOLUTIONS.map((solution) => (
              <motion.div key={solution.title} variants={staggerItem}>
                <div className="glass-card h-full group">
                  {/* Metric */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-bold font-[family-name:var(--font-heading)]" style={{ color: solution.color }}>
                      {solution.metric}
                    </span>
                    <span className="text-[10px] text-[#6b7280] font-[family-name:var(--font-mono)] uppercase tracking-wider">
                      {solution.metricLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 font-[family-name:var(--font-heading)] group-hover:text-[#00d4ff] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed mb-5">{solution.description}</p>

                  <ul className="space-y-2">
                    {solution.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#9ca3af]">
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: solution.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Automation Workflow Visual */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="container-default">
          <SectionHeading
            label="// How It Works"
            title="From Data to Decision in Milliseconds"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7 }}
            className="glass-card !p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {[
                { step: "Input", desc: "Data, query, or trigger", color: "#00d4ff" },
                { step: "Process", desc: "AI analysis & routing", color: "#8b5cf6" },
                { step: "Decide", desc: "Intelligent decision", color: "#00ff88" },
                { step: "Execute", desc: "Automated action", color: "#ff6b35" },
                { step: "Learn", desc: "Continuous improvement", color: "#00d4ff" },
              ].map((item, i) => (
                <div key={item.step} className="text-center relative">
                  {/* Connector */}
                  {i < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-white/10 to-transparent" />
                  )}
                  <div
                    className="w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-3"
                    style={{ borderColor: `${item.color}30`, backgroundColor: `${item.color}10` }}
                  >
                    <span className="text-xs font-bold font-[family-name:var(--font-mono)]" style={{ color: item.color }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white font-[family-name:var(--font-heading)]">{item.step}</p>
                  <p className="text-[11px] text-[#6b7280] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
