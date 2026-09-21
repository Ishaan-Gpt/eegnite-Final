export type Industry = {
    slug: string;
    name: string;
    summary: string;
    challenges: string[];
    stat: { value: string; label: string };
};

export const INDUSTRIES: Industry[] = [
    {
        slug: "small-business",
        name: "Small Business",
        summary: "From single-location shops to multi-unit operators, we handle the books so you can run the business.",
        challenges: ["Inconsistent cash flow visibility", "Owner doing bookkeeping after hours", "No clear read on true profitability"],
        stat: { value: "240+", label: "small businesses supported" },
    },
    {
        slug: "real-estate",
        name: "Real Estate",
        summary: "Property managers, investors, and brokerages rely on us for trust accounting and portfolio-level reporting.",
        challenges: ["Trust account compliance", "Multi-property P&L tracking", "1031 exchange and depreciation planning"],
        stat: { value: "$640M+", label: "in managed property assets" },
    },
    {
        slug: "healthcare",
        name: "Healthcare Practices",
        summary: "Clinics and private practices trust us with payer-mix reporting, payroll, and provider compensation models.",
        challenges: ["Complex payer reimbursement cycles", "Provider compensation structuring", "Practice valuation for partnership buy-ins"],
        stat: { value: "60+", label: "clinics & practices served" },
    },
    {
        slug: "nonprofits",
        name: "Nonprofits",
        summary: "Grant compliance, fund accounting, and board-ready financials for mission-driven organizations.",
        challenges: ["Restricted vs. unrestricted fund tracking", "Grant reporting deadlines", "Form 990 preparation"],
        stat: { value: "$38M+", label: "grant funds tracked annually" },
    },
    {
        slug: "e-commerce",
        name: "E-commerce",
        summary: "Multi-channel sellers get inventory-aware bookkeeping and sales tax nexus management across states.",
        challenges: ["Multi-state sales tax nexus", "Inventory costing (COGS) accuracy", "Marketplace fee reconciliation"],
        stat: { value: "35+", label: "e-commerce brands supported" },
    },
    {
        slug: "construction",
        name: "Construction & Trades",
        summary: "Job-costing, WIP schedules, and bonding-ready financials for contractors and specialty trades.",
        challenges: ["Job costing across multiple projects", "Work-in-progress (WIP) reporting", "Bonding & surety financial requirements"],
        stat: { value: "45+", label: "contractors & trades served" },
    },
];
