export type PricingTier = {
    name: string;
    tagline: string;
    monthly: number;
    annualMonthly: number;
    features: string[];
    highlight?: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
    {
        name: "Essentials",
        tagline: "For solo founders and freelancers",
        monthly: 349,
        annualMonthly: 299,
        features: ["Monthly bookkeeping & reconciliation", "Quarterly tax estimates", "Annual tax return filing", "Email support"],
    },
    {
        name: "Growth",
        tagline: "For established small businesses",
        monthly: 749,
        annualMonthly: 649,
        features: ["Everything in Essentials", "Payroll for up to 10 employees", "Monthly financial reporting", "Quarterly strategy calls", "Priority support"],
        highlight: true,
    },
    {
        name: "Scale",
        tagline: "For multi-entity & growing teams",
        monthly: 1450,
        annualMonthly: 1250,
        features: ["Everything in Growth", "Fractional CFO advisory", "Custom board & investor reporting", "Unlimited payroll", "Dedicated account partner"],
    },
];
