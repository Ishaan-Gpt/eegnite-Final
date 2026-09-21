export type Article = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    image: string;
    content: string[];
};

const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

export const ARTICLES: Article[] = [
    {
        slug: "quarterly-tax-estimates-guide",
        title: "A Founder's Guide to Quarterly Tax Estimates",
        excerpt: "Missing a quarterly estimate can trigger penalties even if you pay in full come April. Here's how to calculate and time them correctly.",
        category: "Tax Strategy",
        readTime: "6 min read",
        date: "2026-06-12",
        image: IMG("1554224155-6726b3ff858f"),
        content: [
            "If your business doesn't have taxes withheld from a paycheck, the IRS expects you to pay estimated taxes four times a year — not once at filing time. Missing or underpaying these can trigger penalties even if your full tax bill is eventually paid.",
            "The safest approach for most growing businesses is the 'safe harbor' method: pay at least 100% of last year's tax liability (110% if your income was above $150,000) spread across the four due dates. This protects you from underpayment penalties regardless of how this year performs.",
            "Quarterly due dates typically fall in mid-April, mid-June, mid-September, and mid-January of the following year. Because Q2's deadline sits only two months after Q1's, it's easy to lose track — we set calendar reminders for every client 10 days ahead of each due date.",
            "If your income is highly seasonal, the 'annualized income installment method' can reduce what you owe in slower quarters — though it requires more detailed recordkeeping. This is exactly the kind of calculation we build into quarterly planning calls with clients.",
        ],
    },
    {
        slug: "clean-books-before-tax-season",
        title: "5 Signs Your Books Need a Clean-Up Before Tax Season",
        excerpt: "Messy books don't just make tax season stressful — they can cost you real money in missed deductions and inaccurate filings.",
        category: "Bookkeeping",
        readTime: "5 min read",
        date: "2026-05-28",
        image: IMG("1554469384-e58fac16e23a"),
        content: [
            "Uncategorized transactions piling up in a 'to review' bucket is the most common sign we see. If your bookkeeping software has hundreds of unclassified line items, your P&L is not telling you the truth about your business.",
            "A second red flag: your bank and book balances don't match. If reconciliation hasn't happened in months, errors compound quietly — duplicate entries, missed deposits, and forgotten fees all hide in the gap.",
            "Third, if you can't answer 'what's our profit margin this month' without pulling data from three different places, your reporting isn't doing its job. Clean books should give you that answer in under a minute.",
            "Fourth: commingled personal and business expenses. This is one of the fastest ways to lose legitimate deductions and create audit risk. Fifth: if last year's tax preparer had to 'make assumptions' to file your return, that's a clear signal a clean-up is overdue before this year's filing.",
        ],
    },
    {
        slug: "hiring-first-employee-payroll-checklist",
        title: "Hiring Your First Employee: A Payroll Compliance Checklist",
        excerpt: "Going from contractor-only to your first W-2 hire opens up a set of compliance requirements many founders miss.",
        category: "Payroll",
        readTime: "7 min read",
        date: "2026-04-15",
        image: IMG("1521791055366-0d553872125f"),
        content: [
            "Before your first employee's start date, you'll need an Employer Identification Number (EIN), state unemployment insurance registration, and — depending on your state — workers' compensation coverage. Missing any of these can create liability from day one.",
            "New hires require a completed Form W-4 and I-9 within their first few days, and most states require new-hire reporting to a state directory within 20 days of the hire date.",
            "Decide on a pay schedule early — weekly, biweekly, or semi-monthly — since some states mandate minimum pay frequency by industry. Whatever you choose, payroll tax deposits (federal and state) run on their own separate schedule that doesn't always match payday.",
            "Finally, don't forget benefits compliance: even a simple health stipend can trigger ACA reporting requirements once you cross certain employee-count thresholds. We run a compliance check for every client the moment headcount changes.",
        ],
    },
];
