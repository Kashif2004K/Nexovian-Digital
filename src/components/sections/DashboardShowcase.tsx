"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { defaultViewport } from "@/lib/animations";

/* ============================================
   DASHBOARD SHOWCASE — Fake AI Dashboard
   preview with glowing elements to sell
   the AI and data capabilities
   ============================================ */

export default function DashboardShowcase() {
  return (
    <section className="section-padding relative overflow-hidden" id="dashboard-showcase">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04)_0%,transparent_60%)]" />

      <div className="container-default relative z-10">
        <SectionHeading
          label="// AI Dashboard"
          title="Your Command Center for Growth"
          description="Real-time analytics, AI agent status, and performance metrics — all in one intelligent interface."
        />

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={defaultViewport}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow behind dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00d4ff]/10 via-[#8b5cf6]/10 to-[#00d4ff]/10 rounded-3xl blur-xl opacity-50" />

          {/* Main dashboard frame */}
          <div className="relative bg-[#0a0a0f] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
              </div>
              <span className="text-[10px] text-[#6b7280] font-[family-name:var(--font-mono)]">
                nexovian-dashboard.app
              </span>
              <div className="w-12" />
            </div>

            {/* Dashboard content */}
            <div className="p-6 grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-3 hidden md:block space-y-3">
                {["Overview", "Analytics", "AI Agents", "Reports", "Settings"].map((item, i) => (
                  <div
                    key={item}
                    className={`px-3 py-2 rounded-lg text-xs transition-all ${
                      i === 0 ? "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20" : "text-[#6b7280] hover:text-white"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div className="col-span-12 md:col-span-9 space-y-4">
                {/* Top metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Revenue", value: "$127.4K", change: "+12.5%", color: "#00d4ff" },
                    { label: "Visitors", value: "48.2K", change: "+8.3%", color: "#8b5cf6" },
                    { label: "Conversions", value: "3.24%", change: "+2.1%", color: "#00ff88" },
                    { label: "AI Queries", value: "12.8K", change: "+34%", color: "#ff6b35" },
                  ].map((metric) => (
                    <div key={metric.label} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                      <p className="text-[10px] text-[#6b7280] mb-1">{metric.label}</p>
                      <p className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">{metric.value}</p>
                      <span className="text-[10px] font-medium" style={{ color: metric.color }}>
                        {metric.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 h-48 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-white font-medium">Revenue Analytics</span>
                    <span className="text-[10px] text-[#6b7280] font-[family-name:var(--font-mono)]">Last 30 days</span>
                  </div>
                  {/* Fake chart lines */}
                  <svg viewBox="0 0 400 100" className="w-full h-24" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 C30,75 60,60 100,55 C140,50 160,65 200,40 C240,15 280,30 320,20 C360,10 380,15 400,5"
                      fill="none"
                      stroke="#00d4ff"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,80 C30,75 60,60 100,55 C140,50 160,65 200,40 C240,15 280,30 320,20 C360,10 380,15 400,5 L400,100 L0,100 Z"
                      fill="url(#chartGrad)"
                    />
                  </svg>
                </div>

                {/* AI Agent status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)] animate-pulse" />
                      <span className="text-xs text-white font-medium">AI Agent Status</span>
                    </div>
                    <div className="space-y-2">
                      {["Support Bot", "Lead Qualifier", "SEO Monitor"].map((agent) => (
                        <div key={agent} className="flex items-center justify-between">
                          <span className="text-[11px] text-[#9ca3af]">{agent}</span>
                          <span className="text-[10px] text-emerald-400 font-[family-name:var(--font-mono)]">ACTIVE</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                    <span className="text-xs text-white font-medium block mb-3">Recent Activity</span>
                    <div className="space-y-2">
                      {[
                        "Lead captured from LinkedIn",
                        "SEO report generated",
                        "Chatbot resolved 23 queries",
                      ].map((activity) => (
                        <div key={activity} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#00d4ff]" />
                          <span className="text-[11px] text-[#6b7280]">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
