import Link from "next/link";
import { faqs, type BahrainServiceData } from "./bahrain-service.types";

// /bahrain/seo-services/ — copy verbatim from the "EEGNITE_New Content_Bahrain_SEO" Google Doc.
// The doc's buttons ("Discuss Your SEO Priorities", "Book an SEO Discovery Call") render as the site-wide
// "Get your growth plan" CTA to the on-page form, as agreed for all service pages.

const linkCls = "text-[#FF6105] underline hover:text-[#C44800]";

export const BAHRAIN_SEO: BahrainServiceData = {
    meta: {
        url: "https://www.eegnite.com/bahrain/seo-services/",
        title: "SEO & AEO Agency for Bahrain Businesses | EEGNITE",
        description: "Improve search visibility for your Bahrain business with technical SEO, AI search optimization, and useful content. Book an EEGNITE strategy call.",
        serviceName: "SEO Services for Bahrain Businesses",
        serviceDescription: "Technical SEO, service-page content, local search, product and category SEO, digital PR, and AI-assisted answer engine optimization for Bahrain businesses.",
        serviceCategory: "SEO Services",
        crumb: "SEO Services",
    },
    hero: {
        eyebrow: "Search visibility for Bahrain businesses",
        title: <>SEO Agency for Bahrain Businesses <br className="hidden md:inline" />That Need More Qualified Inquiries</>,
        statement: "A visitor who reads one article and leaves is different from a buyer comparing providers. Your SEO plan should account for that difference.",
        description: "EEGNITE helps Bahrain businesses improve the pages, technical foundations, and content that support buying decisions. Our team works with a search strategy based on your customers, your service coverage, and the questions that hold up a sale.",
    },
    pain: {
        eyebrow: "Where organic growth gets stuck",
        title: "Why Is Your Website Visible but",
        accent: "Your Sales Pipeline Quiet",
        image: "/images/services/bahrain-seo-pain-points.webp",
        imageAlt: "Website analytics showing traffic that is not turning into sales inquiries",
        items: [
            { title: "People Find Advice But Miss Your Services", desc: "A useful blog can attract readers without explaining what you sell. We check whether informational pages lead to a relevant service, clear qualification details, and an easy next step." },
            { title: "Your Most Important Pages Are Difficult To Find", desc: "A service may be hidden behind weak navigation, duplicate URLs, or content search engines cannot reliably access. We investigate the page itself before adding more articles around it." },
            { title: "Bahrain Buyers Reach A Generic Regional Page", desc: "A page that says GCC may leave practical questions unanswered. Can you deliver to Bahrain? Which services are available? What happens after an inquiry? We help make those answers explicit without inventing an office or local track record." },
            { title: "The Report Shows Rankings Without Explaining Business Value", desc: "We separate branded discovery, broader research traffic, and visits to commercial pages. Where your systems allow, we connect inquiries to their landing pages and review which ones sales accepts." },
        ],
    },
    bring: {
        eyebrow: "Start with the next useful fix",
        title: "What We Bring",
        accent: "to the Table",
        intro: "Every SEO strategy should start with understanding what your website needs most. EEGNITE focuses on practical improvements, clear priorities, and search opportunities aligned with your target market in Bahrain.",
        items: [
            { title: "Prioritise Existing Opportunities", desc: "We assess your current website against buyer search intent to identify pages that need improvement before recommending new content.", img: "/images/services/bahrain-seo-prioritise.webp", alt: "Reviewing an existing website for SEO opportunities" },
            { title: "Get a Clear Action Plan", desc: "Receive a prioritised plan covering affected URLs, required changes, and their purpose, from technical fixes and service-page updates to internal linking and missing content.", img: "/images/services/bahrain-seo-action-plan.webp", alt: "A prioritised SEO action plan mapped out on a board" },
            { title: "Target Bahrain Search Intent", desc: "We analyse country-specific search results and inquiry data, assessing English and Arabic opportunities separately. Arabic content includes a qualified language review before publication.", img: "/images/services/bahrain-seo-search-intent.webp", alt: "Bahrain World Trade Center in Manama at sunrise" },
        ],
    },
    breakdown: {
        eyebrow: "SEO service breakdown",
        title: "What Your SEO Engagement",
        accent: "Can Include",
        items: [
            { icon: "cpu", title: "Technical Seo That Gives Important Pages A Fair Chance", desc: "We check crawling, indexing, canonical URLs, redirects, mobile rendering, and loading issues. The fix list identifies which problems affect a buying journey and which can wait." },
            { icon: "page", title: "Service Pages and Content Built Around Decisions", desc: "We map searches about the problem, available solutions, provider comparisons, cost factors, and next steps to the right page. Your team supplies the service facts and subject expertise; we turn them into clear content and internal links." },
            { icon: "pin", title: "Local Search For Your Real Business Locations", desc: "For eligible client businesses, we improve Business Profile details, location pages, and relevant citations. An actual Bahrain outlet can support local search work. A made-up address cannot." },
            { icon: "bag", title: "Product and Category Seo", desc: "For stores, we review product information, categories, filters, availability details, and the path to checkout. Priorities follow your commercial needs and the demand we can verify." },
            { icon: "megaphone", title: "Digital PR Outreach That Builds Online Visibility", desc: "We pitch relevant business stories, industry insights, and original research to suitable publishers, focusing on audience relevance and editorial opportunities." },
            { icon: "spark", title: "AI-assisted SEO and answer engine optimization", desc: "AI tools can help cluster queries and organize research. People check the sources, interpret the findings, and approve the work. We also make service answers easy to find and support claims with evidence your business can stand behind." },
        ],
    },
    industries: {
        image: "/images/services/bahrain-seo-industries.webp",
        imageAlt: "Industries EEGNITE serves with SEO in Bahrain",
        eyebrow: "Different buyers need different answers",
        items: [
            { title: "E-commerce", href: "/industries/e-commerce/", desc: "Make category and product pages answer questions about availability, specifications, delivery coverage, and purchase options. Prioritize pages that can support profitable orders." },
            { title: "B2B and Lead Generation", href: "/industries/b2b-lead-generation/", desc: "Build service and comparison pages around buyer requirements, then carry the inquiry source into your sales follow-up where tracking allows." },
            { title: "Medical and healthcare", href: "/industries/medical-healthcare/", desc: "Help patients find clearly described services and practitioner information. Your clinical team reviews treatment claims before publication." },
            { title: "Retail Businesses", href: "/industries/retail-business/", desc: "Improve store and product discovery using accurate location information for your actual outlets and useful pages for the areas you serve." },
            { title: "Manufacturing and Logistics", href: "/industries/manufacturing-logistics/", desc: "Give procurement teams searchable specifications, applications, and service coverage. Connect those pages to a practical request-for-quote form." },
            { title: "Professional Services", href: "/industries/professional-services/", desc: "Explain who each service helps, what the engagement involves, and which questions a prospect should resolve before booking a consultation." },
        ],
    },
    why: {
        image: "/images/services/bahrain-seo-why-eegnite.webp",
        imageAlt: "Why Choose EEGNITE for SEO for your Bahrain Business",
        orbit: ["search", "chart", "page", "pin", "spark"],
        eyebrow: "A practical working relationship",
        subtitle: "EEGNITE combines practical SEO expertise, transparent communication, and a structured approach to help Bahrain businesses grow online.",
        reasons: [
            { title: "Connected Digital Marketing Services", desc: "SEO, paid media, email, social media, and web services can be coordinated under one strategy when required." },
            { title: "Clear Priorities and Recommendations", desc: "Every recommendation comes with a clear explanation of why it matters and what it aims to improve." },
            { title: "Transparent Progress Tracking", desc: "A shared plan keeps track of completed changes, affected pages, ongoing activities, and upcoming priorities." },
            { title: "Your Business Retains Ownership", desc: "Your team maintains control of its website, analytics accounts, and key digital assets." },
            { title: "Remote Support for Bahrain Businesses", desc: "EEGNITE works remotely with Bahrain businesses through agreed meetings, approval processes, and reporting schedules, with strategies aligned to the local market." },
        ],
    },
    process: {
        eyebrow: "From diagnosis to review",
        title: "Our SEO Process",
        accent: "for Bahrain Brands",
        steps: [
            { icon: "clipboard", title: "Understand the Business and Establish the Baseline", desc: "We discuss your services, margins, best-fit customers, sales cycle, and existing inquiries. With authorized access, we review search and analytics data alongside the site's current condition." },
            { icon: "search", title: "Map Questions To Pages", desc: "We identify which buying questions are already answered, which need a better page, and which do not justify new content. Bahrain search checks help set the market scope." },
            { icon: "flag", title: "Agree On The First Priorities", desc: "You receive a work plan with page targets, technical dependencies, content inputs, and approval responsibilities. Forecasts are assumptions to test, not promised rankings." },
            { icon: "check", title: "Implement and Verify", desc: "We complete the agreed fixes and content changes, then check links, tracking, page access, and published accuracy. Your subject expert reviews specialist claims." },
            { icon: "loop", title: "Review Inquiries and Adjust", desc: "We discuss completed work, search movement, inquiry quality, and the next priorities. A page attracting unsuitable visitors may need a different message or target query." },
        ],
    },
    tools: {
        service: "SEO",
        items: [
            { name: "SE Ranking", src: "/images/icons/se-ranking.webp" },
            { name: "Google Search Console", src: "/images/icons/google-search-console.svg" },
            { name: "Google Analytics (GA4)", src: "/images/icons/google-analytics.png" },
            { name: "SEMrush", src: "/images/icons/semrush.png" },
            { name: "Ahrefs", src: "/images/icons/ahrefs.png" },
            { name: "Moz", src: "/images/icons/moz.webp" },
            { name: "Screaming Frog", src: "/images/icons/screaming-frog.webp" },
        ],
    },
    agency: {
        eyebrow: "A dedicated agency for your digital growth",
        title: "Your Business",
        accent: "Sets the Plan",
        image: "/images/services/bahrain-seo-dedicated-agency.webp",
        imageAlt: "An agency team planning work around a client's commercial priorities",
        paragraphs: [
            "A template becomes a problem when it decides your strategy. We use repeatable checks for reliable delivery, but choose the work around your commercial priorities.",
            "A distributor with a small catalog may need specification pages and quote forms. A retailer may need category visibility and better delivery information. Your scope should explain which approach fits and what evidence will change it.",
            <>For coordinated, cross-channel support, explore EEGNITE as a{" "}<Link href="/bahrain/" className="text-[#FF6105] font-semibold underline hover:text-[#C44800]">results-oriented digital marketing agency for Bahrain businesses</Link>.</>,
        ],
    },
    faq: {
        eyebrow: "Questions before you appoint an agency",
        title: "SEO Questions From",
        accent: "Bahrain Business Owners",
        items: faqs([
            { q: "How should I choose an SEO agency for Bahrain businesses?", text: "Ask how the agency will assess Bahrain search results, prioritize commercial pages, handle language review, and measure inquiry quality. A useful proposal names the work and dependencies before offering a target." },
            { q: "How long will SEO take to produce inquiries?", text: "There is no reliable date for every website. Technical repairs may be observed before commercial growth, while competitive service pages can need sustained work. We establish a baseline and agree on review milestones after examining your site." },
            { q: "How much will the work cost?", text: "Cost depends on the website's condition, number of priority services, content requirements, implementation access, and language scope. We quote the agreed work separately from optional development or additional content. The initial review helps identify a sensible starting scope." },
            { q: "Do we need an AI-powered SEO agency for Bahrain?", text: "The useful question is what the tools will change. AI-assisted research can speed up organization, but your strategy still needs verified facts, technical checks, and commercial judgment. Ask for the workflow and review process, not an AI label alone." },
            { q: "What does an AEO agency do for a Bahrain business?", text: "Answer engine optimization helps make your services and supporting evidence understandable when buyers research questions through search and AI tools. It includes clear answers, accessible pages, consistent business information, and ongoing checks. It cannot guarantee inclusion in an answer." },
            { q: "Can you guarantee first place on Google or an AI recommendation?", text: "No. Search engines and AI platforms decide what appears. We commit to the agreed work, clear reporting, and decisions based on evidence rather than a placement guarantee." },
            { q: "Is Arabic SEO necessary for every Bahrain company?", text: "No. Review the language used by your customers, sales team, existing inquiries, and relevant search results. If Arabic is commercially important, plan separate research and a qualified review. A translated keyword list alone is not a complete language strategy." },
            {
                q: "Should we stop PPC once SEO starts improving?",
                text: "That depends on demand, profitability, and how each channel contributes to sales. Review paid and organic performance together before moving budget. Our PPC service can be considered alongside SEO where a paid test is useful.",
                a: <>That depends on demand, profitability, and how each channel contributes to sales. Review paid and organic performance together before moving budget. <Link href="/services/ppc/" className={linkCls}>Our PPC service</Link> can be considered alongside SEO where a paid test is useful.</>,
            },
        ]),
    },
    final: {
        eyebrow: "Bring the page that is underperforming",
        title: "Find the SEO Work Your Business Needs Next",
        text: "Share your website, your priority service, and the kind of inquiry you want more of. We will discuss the likely obstacles and what needs checking before you commit to a scope.",
        secondary: { label: "See Our Complete SEO Services", href: "/services/seo/" },
    },
};
