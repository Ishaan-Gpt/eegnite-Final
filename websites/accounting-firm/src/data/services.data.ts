export type Service = {
    slug: string;
    name: string;
    shortDesc: string;
    description: string;
    icon: "calculator" | "book" | "wallet" | "shield-check" | "trending-up" | "briefcase";
    highlights: string[];
    idealFor: string;
};

export const SERVICES: Service[] = [
    {
        slug: "tax-preparation",
        name: "Tax Preparation",
        shortDesc: "Accurate, on-time filing with proactive planning to minimize what you owe.",
        description:
            "Our tax team prepares and files federal, state, and local returns for individuals, partnerships, and corporations — while building a year-round tax strategy so April never brings surprises.",
        icon: "calculator",
        highlights: ["Individual & business returns", "Quarterly estimated tax planning", "IRS correspondence & audit support", "Multi-state filing"],
        idealFor: "Founders, freelancers, and businesses who want a proactive tax strategy, not just a once-a-year filing.",
    },
    {
        slug: "bookkeeping",
        name: "Bookkeeping",
        shortDesc: "Clean, reconciled books delivered monthly so you always know where you stand.",
        description:
            "We manage your day-to-day books — categorization, reconciliation, and monthly close — using the accounting platform you already run on, so your financials are always current and audit-ready.",
        icon: "book",
        highlights: ["Monthly reconciliation & close", "Cash flow & P&L reporting", "QuickBooks & Xero support", "Clean-up of historical books"],
        idealFor: "Small businesses that want dependable, up-to-date books without hiring in-house.",
    },
    {
        slug: "payroll",
        name: "Payroll Management",
        shortDesc: "Accurate, compliant payroll runs and filings, every pay period.",
        description:
            "From onboarding new hires to filing quarterly payroll taxes, we run payroll end-to-end so your team gets paid correctly and on time — with full compliance across every state you operate in.",
        icon: "wallet",
        highlights: ["Multi-state payroll processing", "W-2 & 1099 filing", "Benefits & PTO tracking", "New-hire compliance"],
        idealFor: "Growing teams that need payroll handled correctly without a dedicated HR department.",
    },
    {
        slug: "audit-assurance",
        name: "Audit & Assurance",
        shortDesc: "Independent reviews that build trust with lenders, investors, and boards.",
        description:
            "We conduct financial statement audits, reviews, and compilations that meet lender, investor, and regulatory requirements — delivered with the rigor of a big firm and the responsiveness of a boutique one.",
        icon: "shield-check",
        highlights: ["Financial statement audits", "Reviews & compilations", "Internal control assessments", "Nonprofit & grant compliance"],
        idealFor: "Companies preparing for a raise, loan, acquisition, or annual compliance requirement.",
    },
    {
        slug: "business-advisory",
        name: "Business Advisory",
        shortDesc: "Strategic guidance on structure, growth, and major financial decisions.",
        description:
            "Our advisory team acts as a thinking partner for entity structuring, budgeting, forecasting, and major financial decisions — helping you make the right call before it's made for you.",
        icon: "trending-up",
        highlights: ["Entity structuring & formation", "Budgeting & forecasting", "M&A financial due diligence", "KPI & margin analysis"],
        idealFor: "Business owners navigating growth, restructuring, or a major transaction.",
    },
    {
        slug: "cfo-services",
        name: "Fractional CFO Services",
        shortDesc: "Executive-level financial leadership, without the full-time salary.",
        description:
            "Get a seasoned financial executive on your leadership team — driving fundraising readiness, board reporting, and long-range planning — at a fraction of the cost of a full-time hire.",
        icon: "briefcase",
        highlights: ["Investor & board reporting", "Fundraising readiness", "Financial modeling", "Cash runway management"],
        idealFor: "Scaling companies that need strategic financial leadership before they need a full-time CFO.",
    },
];
