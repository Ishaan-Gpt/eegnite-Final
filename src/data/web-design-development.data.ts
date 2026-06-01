import {
    LayoutDashboard,
    Code,
    ShoppingCart,
    FileText,
    Zap,
    Settings,
    Gauge,
    ShieldCheck,
    Search,
    PieChart,
    Map,
} from "lucide-react";

export const WEB_DESIGN_SERVICES = [
    {
        title: "UI/UX DESIGN",
        icon: LayoutDashboard,
        description: "Intuitive, visually compelling interfaces designed around how your users actually think and behave. Every screen is designed to reduce friction, build trust, and guide visitors towards conversion."
    },
    {
        title: "WEBSITE DEVELOPMENT",
        icon: Code,
        description: "Clean, fast, and scalable code built on the right stack for your business. Whether HTML, PHP, WordPress, or a custom build - every EEGNITE website is fast, secure, and built to last."
    },
    {
        title: "E-COMMERCE DEVELOPMENT",
        icon: ShoppingCart,
        description: "Online stores built to sell, not just display. Product pages, checkout flows, and payment integrations optimised for conversion at every stage of the buying journey."
    },
    {
        title: "LANDING PAGE DESIGN",
        icon: FileText,
        description: "High-converting landing pages built around a single, clear objective. Aligned to your ad campaigns, designed around your offer, and tested to improve conversion rates over time."
    },
    {
        title: "CRO-FOCUSED DESIGN",
        icon: Zap,
        description: "We identify where visitors drop off and redesign those moments to convert better. Heatmaps, A/B tests, and data-led changes that turn more of your existing traffic into revenue."
    },
    {
        title: "WORDPRESS DEVELOPMENT",
        icon: Settings,
        description: "Custom WordPress builds that go far beyond themes. Performance-optimised, SEO-ready, and built for your team to manage with ease. Fast, secure, and built to grow with your business."
    },
    {
        title: "SPEED AND PERFORMANCE OPTIMISATION",
        icon: Gauge,
        description: "A one-second delay reduces conversions by 7%. We audit and optimise Core Web Vitals, server response, image compression, and caching for maximum speed and search performance."
    },
    {
        title: "WEBSITE MAINTENANCE AND SUPPORT",
        icon: ShieldCheck,
        description: "Monthly maintenance covering security updates, plugin management, uptime monitoring, and performance checks so your site never falls behind. Your website is a live asset."
    }
];

export const WEB_DESIGN_PROCESS_STEPS = [
    { id: "01", title: "DISCOVERY AND STRATEGY", desc: "Understand your brand, goals, audience, and competition.", icon: Search },
    { id: "02", title: "WIREFRAME AND STRUCTURE", desc: "Sitemap, page hierarchy, and user journey mapped.", icon: PieChart },
    { id: "03", title: "DESIGN", desc: "Visual concepts reviewed, refined, and approved by you.", icon: LayoutDashboard },
    { id: "04", title: "DEVELOPMENT", desc: "Clean, fast, tested build. Mobile and SEO-ready from day one.", icon: Code },
    { id: "05", title: "TESTING AND QA", desc: "Cross-browser, cross-device checks before anything goes live.", icon: Settings },
    { id: "06", title: "LAUNCH AND SUPPORT", desc: "Go live. Monitored, maintained, and optimised after launch.", icon: ShieldCheck }
];

export const WEB_DESIGN_TIMELINE_STEPS = [
    { t: "Build Experience", d: "Years of designing and developing websites focused on user experience, conversions, and business growth." },
    { t: "Development Consistency", d: "Structured design systems, development workflows, and quality checks that keep every project reliable and scalable." },
    { t: "Project Transparency", d: "Clear timelines, milestone updates, revision tracking, and communication throughout the entire build process." },
    { t: "Conversion ROI Protection", d: "Every website is built to improve usability, strengthen trust, and turn visitors into leads, sales, or inquiries." },
    { t: "Shared Technical Knowledge", d: "We explain design decisions, development structure, and growth opportunities so your team stays informed and empowered." }
];

export const WEB_DESIGN_CHOOSE_REASONS = [
    { id: "01", title: "Designed Around User Experience", desc: "We create fast, modern, and intuitive websites that make it easier for visitors to engage, trust your brand, and take action." },
    { id: "02", title: "Performance-Driven Development", desc: "From speed optimization to mobile responsiveness and SEO-friendly architecture, every website is built for performance and scalability." },
    { id: "03", title: "Built for Business Growth", desc: "Whether you need a service website, eCommerce platform, or landing page system, we develop solutions aligned with your business goals." },
    { id: "04", title: "Optimized for Conversions", desc: "Every section, button, and layout decision is designed to improve engagement, generate leads, and increase conversions." }
];

export const WEB_DESIGN_INDUSTRIES = [
    { title: "E-commerce", desc: "Conversion-focused stores built to sell.", href: "/industries/e-commerce" },
    { title: "B2B and Lead Gen", desc: "Lead generation websites that convert.", href: "/industries/b2b-lead-generation" },
    { title: "Medical and Healthcare", desc: "Trust-driven websites for patient enquiries.", href: "/industries/medical-healthcare" },
    { title: "Retail Business", desc: "User-friendly websites that boost local engagement.", href: "/industries/retail-business" },
    { title: "Manufacturing and Logistics", desc: "Professional websites that showcase expertise.", href: "/industries/manufacturing-logistics" },
    { title: "Professional Services", desc: "Authority-focused websites that attract clients.", href: "/industries/professional-services" }
];

export const WEB_DESIGN_VALUES = [
    { title: "INTEGRITY", desc: "We tell you what works, what does not, and what your brand truly needs. Transparent communication and honest strategies are at the core of every decision we make." },
    { title: "TEAMWORK", desc: "Strategists, designers, creators, and specialists working as one dedicated team for your brand. Every campaign is built through collaboration, consistency, and shared goals." },
    { title: "EXCELLENCE", desc: "Average is never the target. Every strategy, campaign, and deliverable is crafted to create impact, drive results, and set a higher standard for your brand." }
];

export const WEB_DESIGN_FAQS = [
    { q: "How Much Does A Website Cost With EEGNITE?", a: "Website pricing depends on scope, complexity, and functionality. A professional brochure site typically starts from $1,500. E-commerce and custom web applications vary significantly based on features. EEGNITE does not quote from a price list. We understand your goals first and then propose a scope and investment that makes sense for your business." },
    { q: "How Long Does It Take To Build A Website?", a: "A standard business website typically takes 3 to 6 weeks from strategy to launch. E-commerce and custom builds take 6 to 12 weeks depending on scope. EEGNITE provides a clear project timeline before work begins and keeps you updated at every stage. When delays happen on our side, we communicate them immediately." },
    { q: "What Is Cro And Why Does It Matter For My Website?", a: "Conversion Rate Optimisation (CRO) is the process of improving your website so more visitors take the action you want - a form submission, purchase, or booked call. CRO means more results from the same traffic without spending more on ads. EEGNITE embeds CRO thinking into every page we design from the start." },
    { q: "Do You Build Websites On Wordpress?", a: "Yes. EEGNITE builds custom WordPress websites that go well beyond off-the-shelf themes. Bespoke designs, speed-optimised, SEO-ready, and structured so your team can manage content independently. We also work with Shopify, WooCommerce, and custom-coded builds depending on your requirements." },
    { q: "Will My Website Be Mobile-Friendly And Seo-Ready?", a: "Every EEGNITE website is built mobile-first and SEO-ready from day one. Responsive design, fast-loading pages, clean URL structures, heading hierarchy, meta tags, image optimisation, and Core Web Vitals compliance. A website that is not mobile-friendly and SEO-ready is a draft, not a finished product." },
    { q: "Do You Offer Website Maintenance After Launch?", a: "Yes. Monthly maintenance covers security updates, plugin and CMS updates, uptime monitoring, and performance checks. We recommend all clients on a maintenance plan because websites are live digital assets that require regular attention to stay secure, fast, and functional. We do not build websites and disappear." },
    { q: "Can EEGNITE Redesign My Existing Website?", a: "Absolutely. We audit your existing site first: design, speed, SEO health, and conversion performance. Then we redesign with a clear brief - fix what is underperforming, keep what is working, and build a site that does significantly more for your business. No redesign for aesthetics alone." },
    { q: "Do You Work With Businesses Outside India?", a: "Yes. EEGNITE builds websites for clients across India, the United States, Europe, and the Middle East. We work remotely and collaboratively across time zones with structured review processes. Whether you are in Kolkata, New York, or Dubai, we build websites that work for your market." }
];
