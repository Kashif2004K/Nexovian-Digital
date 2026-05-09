"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

/* ============================================
   BLOG PAGE CONTENT
   ============================================ */

const BLOG_POSTS = [
  {
    slug: "ai-agents-2026",
    title: "The Rise of AI Agents: Why Every Business Needs One in 2026",
    excerpt: "AI agents are no longer experimental. They're handling sales, support, and operations — here's how to deploy yours.",
    category: "AI Automation",
    readTime: "8 min",
    date: "May 5, 2026",
    color: "#00d4ff",
  },
  {
    slug: "nextjs-performance",
    title: "Next.js 15 Performance Optimization: The Complete Guide",
    excerpt: "From server components to edge caching — every technique we use to build sub-second websites.",
    category: "Web Development",
    readTime: "12 min",
    date: "Apr 28, 2026",
    color: "#8b5cf6",
  },
  {
    slug: "seo-programmatic",
    title: "Programmatic SEO: How to Generate 1000 Landing Pages That Rank",
    excerpt: "The automated approach to SEO that's helping SaaS companies capture long-tail traffic at scale.",
    category: "SEO",
    readTime: "10 min",
    date: "Apr 15, 2026",
    color: "#00ff88",
  },
  {
    slug: "power-bi-real-time",
    title: "Building Real-Time Power BI Dashboards for SaaS Metrics",
    excerpt: "Stop looking at yesterday's data. Here's how to build dashboards that update in real-time.",
    category: "Data Analytics",
    readTime: "7 min",
    date: "Apr 2, 2026",
    color: "#ff6b35",
  },
  {
    slug: "automation-stack",
    title: "The Ultimate Automation Stack: Zapier vs Make.com vs n8n",
    excerpt: "A deep-dive comparison of the three leading automation platforms and when to use each one.",
    category: "AI Automation",
    readTime: "9 min",
    date: "Mar 20, 2026",
    color: "#00d4ff",
  },
  {
    slug: "saas-landing-pages",
    title: "High-Converting SaaS Landing Pages: Anatomy of a $10M Page",
    excerpt: "We reverse-engineered 50 top SaaS landing pages. Here are the patterns that convert.",
    category: "Web Development",
    readTime: "11 min",
    date: "Mar 8, 2026",
    color: "#8b5cf6",
  },
];

export default function BlogPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.04)_0%,transparent_50%)]" />
        <div className="container-default relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-caption mb-4 block">
            // Knowledge Base
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-display max-w-4xl mx-auto mb-6"
          >
            Insights from the <span className="text-gradient">Engineering Floor</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-body-lg max-w-2xl mx-auto"
          >
            Technical deep-dives, strategies, and blueprints from our engineering and growth teams.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-default">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {BLOG_POSTS.map((post) => (
              <motion.div key={post.slug} variants={staggerItem}>
                <article className="glass-card h-full flex flex-col group cursor-pointer p-0 overflow-hidden">
                  {/* Top color band */}
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[10px] px-2.5 py-1 rounded-full border font-[family-name:var(--font-mono)] uppercase tracking-wider"
                        style={{ borderColor: `${post.color}30`, color: post.color, backgroundColor: `${post.color}10` }}
                      >
                        {post.category}
                      </span>
                      <span className="text-[11px] text-[#6b7280]">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-white mb-3 font-[family-name:var(--font-heading)] leading-snug group-hover:text-[#00d4ff] transition-colors flex-1">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-[#6b7280] leading-relaxed mb-4">{post.excerpt}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                      <span className="text-xs text-[#6b7280]">{post.date}</span>
                      <span className="text-xs text-[#00d4ff] group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                        Read More
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
