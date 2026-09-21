export type TeamMember = {
    name: string;
    role: string;
    bio: string;
    initials: string;
    credential: string;
    photo: string;
};

const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

export const TEAM: TeamMember[] = [
    {
        name: "Eleanor Hale",
        role: "Managing Partner, CPA",
        bio: "Eleanor co-founded Meridian & Hale after a decade in audit at a national firm, focused on making CPA-level guidance accessible to small businesses.",
        initials: "EH",
        credential: "CPA, CFF",
        photo: IMG("1573164713988-8665fc963095"),
    },
    {
        name: "James Meridian",
        role: "Partner, Tax Strategy",
        bio: "James leads the tax practice, specializing in multi-state filings and entity structuring for founders and family-owned businesses.",
        initials: "JM",
        credential: "CPA, MST",
        photo: IMG("1519244703995-f4e0f30006d5"),
    },
    {
        name: "Sofia Reyes",
        role: "Director of Bookkeeping",
        bio: "Sofia oversees the bookkeeping team, building the monthly close process that keeps 200+ clients audit-ready year-round.",
        initials: "SR",
        credential: "QuickBooks ProAdvisor",
        photo: IMG("1580489944761-15a19d654956"),
    },
    {
        name: "Daniel Okafor",
        role: "Fractional CFO Lead",
        bio: "Daniel spent eight years as an in-house finance leader before joining Meridian & Hale to run the fractional CFO practice.",
        initials: "DO",
        credential: "CPA, CMA",
        photo: IMG("1472099645785-5658abf4ff4e"),
    },
    {
        name: "Priya Chandrasekaran",
        role: "Payroll & Compliance Manager",
        bio: "Priya ensures every client stays compliant across state payroll and labor requirements as they grow into new markets.",
        initials: "PC",
        credential: "CPP",
        photo: IMG("1500648767791-00dcc994a43e"),
    },
    {
        name: "Marcus Webb",
        role: "Audit & Assurance Manager",
        bio: "Marcus leads financial statement audits and reviews, with a focus on lender- and investor-ready reporting.",
        initials: "MW",
        credential: "CPA, CIA",
        photo: IMG("1519085360753-af0119f7cbe7"),
    },
];
