"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { defaultViewport } from "@/lib/animations";

/* ============================================
   CONTACT PAGE CONTENT — Multi-step form
   with glassmorphism inputs
   ============================================ */

const SERVICES_OPTIONS = [
  "Web Development",
  "SEO Services",
  "AI Automation",
  "Data Analytics",
  "Full-Stack Solution",
];

const BUDGET_OPTIONS = [
  "$2K - $5K",
  "$5K - $10K",
  "$10K - $25K",
  "$25K+",
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.06)_0%,transparent_50%)]" />
        <div className="container-default relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-caption mb-4 block"
          >
            // Initialize
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display max-w-4xl mx-auto mb-6"
          >
            Let&apos;s Build <span className="text-gradient">Something Extraordinary</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-body-lg max-w-2xl mx-auto"
          >
            Tell us about your project and we&apos;ll respond within 24 hours with a custom architecture proposal.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-default max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="glass-card text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-title text-white mb-3">Transmission Received</h3>
                <p className="text-body max-w-md mx-auto">
                  Our team is reviewing your project requirements. Expect a detailed response within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#9ca3af] mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-[#6b7280]"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#9ca3af] mb-2 font-medium">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-[#6b7280]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm text-[#9ca3af] mb-2 font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-[#6b7280]"
                    placeholder="Acme Corp"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm text-[#9ca3af] mb-3 font-medium">
                    What do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: opt })}
                        className={`px-4 py-2 rounded-lg text-sm border transition-all duration-300 ${
                          formData.service === opt
                            ? "border-[#00d4ff]/40 bg-[#00d4ff]/10 text-[#00d4ff]"
                            : "border-white/[0.08] bg-white/[0.02] text-[#9ca3af] hover:border-white/[0.15]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm text-[#9ca3af] mb-3 font-medium">
                    Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: opt })}
                        className={`px-4 py-2 rounded-lg text-sm border transition-all duration-300 ${
                          formData.budget === opt
                            ? "border-[#00d4ff]/40 bg-[#00d4ff]/10 text-[#00d4ff]"
                            : "border-white/[0.08] bg-white/[0.02] text-[#9ca3af] hover:border-white/[0.15]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm text-[#9ca3af] mb-2 font-medium">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm outline-none focus:border-[#00d4ff]/40 focus:bg-white/[0.05] transition-all duration-300 resize-none placeholder:text-[#6b7280]"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full justify-center text-base !py-4" id="contact-submit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Submit Project Brief
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: "Email", value: "hello@nexoviandigital.agency", icon: "✉️" },
              { label: "Response Time", value: "Under 24 hours", icon: "⚡" },
              { label: "Availability", value: "Mon - Fri, 9am - 6pm", icon: "🕐" },
            ].map((info) => (
              <div key={info.label} className="glass-card text-center !p-5">
                <div className="text-xl mb-2">{info.icon}</div>
                <p className="text-xs text-[#6b7280] mb-1">{info.label}</p>
                <p className="text-sm text-white font-medium">{info.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
