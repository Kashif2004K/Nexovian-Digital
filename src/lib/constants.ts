/* ============================================
   CONSTANTS — Site-wide data
   Services, navigation, stats, testimonials
   ============================================ */

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "web-development",
    title: "Digital Architecture",
    subtitle: "Web Development",
    description: "We engineer high-performance web applications and platforms that scale. From custom Next.js apps to enterprise portals — pixel-perfect, blazing fast.",
    icon: "code",
    features: ["Custom Web Apps", "WordPress & CMS", "E-commerce Platforms", "Business Portals", "Landing Pages", "Progressive Web Apps"],
    stats: { metric: "99.9%", label: "Uptime Guarantee" },
    color: "#00d4ff",
  },
  {
    id: "seo-services",
    title: "Algorithmic Growth",
    subtitle: "SEO Services",
    description: "Data-driven SEO that doesn't guess — it calculates. We reverse-engineer search algorithms to position your brand at the top of every relevant query.",
    icon: "search",
    features: ["Technical SEO", "On-Page Optimization", "Local SEO", "SEO Audits", "Speed Optimization", "Keyword Intelligence"],
    stats: { metric: "312%", label: "Avg. Traffic Increase" },
    color: "#8b5cf6",
  },
  {
    id: "ai-automation",
    title: "Neural Automation",
    subtitle: "AI Automation",
    description: "We deploy intelligent AI agents that automate your entire business workflow. From lead generation to customer support — your AI workforce never sleeps.",
    icon: "cpu",
    features: ["AI Chatbots & Agents", "Workflow Automation", "CRM Automation", "Lead Generation AI", "Zapier & Make.com", "Custom AI Solutions"],
    stats: { metric: "40hrs", label: "Saved Per Week" },
    color: "#00ff88",
  },
  {
    id: "data-analytics",
    title: "Data Intelligence",
    subtitle: "Power BI & Analytics",
    description: "Transform raw data into strategic decisions. We build real-time dashboards and business intelligence systems that give you complete visibility into performance.",
    icon: "chart",
    features: ["Power BI Dashboards", "KPI Tracking", "Automated Reports", "Sales Analytics", "Business Intelligence", "Predictive Analytics"],
    stats: { metric: "10x", label: "Faster Decisions" },
    color: "#ff6b35",
  },
] as const;

export const STATS = [
  { value: "150+", label: "Projects Deployed" },
  { value: "98%", label: "Client Retention" },
  { value: "50M+", label: "Revenue Generated" },
  { value: "24/7", label: "AI Systems Active" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Nexovian Digital didn't just build our website — they engineered an entire digital ecosystem that automated 70% of our operations.",
    author: "Sarah Chen",
    role: "CEO, TechScale Inc.",
    avatar: "SC",
  },
  {
    quote: "The AI chatbot they deployed handles 85% of our customer inquiries autonomously. Our support costs dropped by 60% in three months.",
    author: "Marcus Rivera",
    role: "CTO, CloudFlow Systems",
    avatar: "MR",
  },
  {
    quote: "Their Power BI dashboards gave us visibility we never had before. We make decisions in minutes now instead of weeks.",
    author: "Aisha Patel",
    role: "VP Data, NovaBridge",
    avatar: "AP",
  },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: "techscale",
    title: "TechScale Platform",
    category: "Web Application",
    description: "Enterprise SaaS platform with AI-powered analytics dashboard.",
    tags: ["Next.js", "AI", "Supabase"],
    color: "#00d4ff",
  },
  {
    id: "cloudflow",
    title: "CloudFlow AI Agent",
    category: "AI Automation",
    description: "Autonomous customer support agent handling 10K+ queries daily.",
    tags: ["OpenAI", "LangChain", "Python"],
    color: "#8b5cf6",
  },
  {
    id: "novabridge",
    title: "NovaBridge Analytics",
    category: "Data Intelligence",
    description: "Real-time Power BI ecosystem tracking $50M in revenue streams.",
    tags: ["Power BI", "SQL", "Python"],
    color: "#00ff88",
  },
  {
    id: "meridian",
    title: "Meridian Commerce",
    category: "E-Commerce",
    description: "High-conversion e-commerce platform with AI product recommendations.",
    tags: ["Shopify", "Next.js", "AI"],
    color: "#ff6b35",
  },
] as const;

export const FAQS = [
  {
    question: "What makes Nexovian Digital different from other agencies?",
    answer: "We don't just design — we engineer. Every project is built with AI-powered automation, enterprise-grade architecture, and data-driven strategy. We're a technology company that happens to offer agency services.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Most web projects are deployed within 4-8 weeks. AI automation systems take 2-4 weeks. SEO campaigns show measurable results within 90 days. We operate on sprint-based delivery with weekly progress updates.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes. We offer monthly retainer packages that include hosting, monitoring, updates, AI system optimization, and dedicated technical support. Our systems are built for long-term scalability.",
  },
  {
    question: "What industries do you serve?",
    answer: "We primarily work with SaaS companies, tech startups, e-commerce brands, and enterprise firms. Our sweet spot is companies doing $1M-$50M in revenue that need to scale their digital infrastructure.",
  },
  {
    question: "Can you integrate AI into our existing systems?",
    answer: "Absolutely. We specialize in AI integration with existing CRMs, ERPs, and business tools. Whether it's adding a chatbot to your website or automating your entire sales pipeline — we build custom solutions.",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Launch",
    price: "$4,997",
    period: "one-time",
    description: "Perfect for startups and small businesses ready to establish a premium digital presence.",
    features: [
      "Custom Next.js Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "3 Pages Included",
      "1 Month Support",
    ],
    highlighted: false,
    cta: "Deploy System",
  },
  {
    name: "Growth",
    price: "$2,497",
    period: "/month",
    description: "For scaling companies that need ongoing SEO, automation, and technical optimization.",
    features: [
      "Everything in Launch",
      "Advanced SEO Campaign",
      "AI Chatbot Deployment",
      "Monthly Analytics Reports",
      "CRM Automation Setup",
      "Priority Support",
      "Dedicated Account Manager",
    ],
    highlighted: true,
    cta: "Initialize Growth",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    description: "Full-stack AI infrastructure for enterprises requiring custom architecture and dedicated teams.",
    features: [
      "Everything in Growth",
      "Custom AI Agent Development",
      "Power BI Dashboard Suite",
      "Multi-Platform Automation",
      "Dedicated Engineering Team",
      "SLA Guarantee",
      "24/7 Monitoring",
      "Architecture Consulting",
    ],
    highlighted: false,
    cta: "Request Architecture Review",
  },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "SEO Services", href: "/services#seo-services" },
    { label: "AI Automation", href: "/services#ai-automation" },
    { label: "Data Analytics", href: "/services#data-analytics" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
