import Link from "next/link";
import { faqs, type BahrainServiceData } from "./bahrain-service.types";

// /bahrain/ppc-management/ — copy verbatim from the "EEGNITE_New Content_Bahrain_PPC" Google Doc.
// The doc's buttons ("Review Your PPC Priorities", "Book a PPC Discovery Call") render as the site-wide
// "Get your growth plan" CTA to the on-page form, as agreed for all service pages.

const linkCls = "text-[#FF6105] underline hover:text-[#C44800]";

export const BAHRAIN_PPC: BahrainServiceData = {
    meta: {
        url: "https://www.eegnite.com/bahrain/ppc-management/",
        title: "PPC Agency for Bahrain Businesses | EEGNITE",
        description: "PPC for Bahrain businesses that need better leads. EEGNITE manages paid campaigns around suitable inquiries, booked consultations, and completed orders.",
        serviceName: "PPC Management for Bahrain Businesses",
        serviceDescription: "Google Search, paid social and B2B campaigns, landing-page improvements, lead quality feedback, tracking and attribution, and retargeting for Bahrain businesses.",
        serviceCategory: "PPC Advertising",
        crumb: "PPC Management",
    },
    hero: {
        eyebrow: "Paid campaigns for Bahrain businesses",
        title: <>PPC Agency for Bahrain Businesses <br className="hidden md:inline" />That Need Better Leads</>,
        statement: "If your sales team keeps rejecting the inquiries your ads generate, a lower cost per lead will not solve the problem.",
        description: "EEGNITE manages paid campaigns around the action your business needs: a suitable inquiry, a booked consultation, or a completed order. We check the targeting, offer, landing page, and measurement together.",
    },
    pain: {
        eyebrow: "Before you increase the budget",
        title: "Where Your Ad Spend",
        accent: "May Be Losing Value",
        image: "/images/services/bahrain-ppc-pain-points.webp",
        imageAlt: "Ad campaign analytics on a laptop, reviewed before increasing the budget",
        items: [
            { title: "The Inquiries Do Not Match What You Sell", desc: "Broad searches, unclear copy, or a weak form can invite the wrong people. We review actual search terms, audience settings, and the reasons sales reject a lead." },
            { title: "People Click But Leave Before Contacting You", desc: "A landing page may hide the price factors, service coverage, or next step. We compare the promise in the ad with what the visitor sees on mobile." },
            { title: "The Account Reports Conversions Your Team Cannot Find", desc: "A button click can be counted without a message being sent. We distinguish actions such as WhatsApp clicks from verified conversations, valid inquiries, and booked appointments." },
            { title: "Several Services Compete For A Budget That Cannot Test Them Properly", desc: "Spreading spend across too many offers can leave each one with little useful evidence. We agree on a starting priority and expand when the data supports it." },
        ],
    },
    bring: {
        eyebrow: "A commercial definition of a lead",
        title: "What We Bring",
        accent: "to the Table",
        intro: "Before launching, EEGNITE identifies your ideal customers and what makes an inquiry valuable. For Bahrain businesses, campaigns are built around local demand and measurable business goals.",
        items: [
            { title: "Define Quality Leads", desc: "Identify valuable inquiries based on service requirements, delivery areas, company type, and purchase potential.", img: "/images/services/bahrain-ppc-quality-leads.webp", alt: "A sales team handling inquiries on headsets" },
            { title: "Target Buyer Intent", desc: "Align search terms, ad copy, landing pages, and qualification questions with customer needs. Use recurring feedback to refine campaigns.", img: "/images/services/bahrain-ppc-buyer-intent.webp", alt: "A dart in the centre of a target" },
            { title: "Maintain Budget Clarity", desc: "Separate advertising spend, management, and additional creative costs. Expansion into Saudi Arabia or other markets requires a separate assessment of demand, language, coverage, and budget.", img: "/images/services/bahrain-ppc-budget-clarity.webp", alt: "Working out a campaign budget on a calculator" },
        ],
    },
    breakdown: {
        eyebrow: "PPC service breakdown",
        title: "Paid Media Support Built Around",
        accent: "the Buying Journey",
        items: [
            { icon: "search", title: "Google Search Campaigns", desc: "We group searches by intent and match them to a relevant offer. Search-term reviews, exclusions, ad testing, and location checks help reduce spend on unsuitable demand." },
            { icon: "users", title: "Paid Social and B2b Campaigns Where They Fit", desc: "Meta can help demonstrate a product or offer, while LinkedIn may suit a defined B2B audience. Channel choice follows your buyers and budget. We do not assume every business needs every platform." },
            { icon: "layout", title: "Landing Pages and Conversion Improvements", desc: "We review message matches, service details, mobile usability, forms, and confirmation steps. Larger design or development changes are scoped separately so you can see the cost and dependency." },
            { icon: "funnel", title: "Lead Generation and Sales Feedback", desc: "We plan how source details and lead status will be captured. Your sales team records whether an inquiry is valid, suitable, and progressing. Those outcomes help us judge which campaigns deserve more budget." },
            { icon: "chart", title: "Tracking and Attribution", desc: "We test key events, document what each conversion means, and compare platform reporting with analytics and your sales records. Consent choices, cross-device journeys, and attribution windows can create differences. The report explains those limits." },
            { icon: "cart", title: "Retargeting and E-Commerce Campaigns", desc: "Where audience eligibility, permissions, and platform support allow, we scope follow-up campaigns or product-led advertising. Product data, stock, delivery coverage, and purchase tracking need checking before launch." },
        ],
    },
    industries: {
        eyebrow: "Match the campaign to the sale",
        items: [
            { title: "E-Commerce", href: "/industries/e-commerce/", desc: "Match campaigns to available products, delivery coverage, and contribution margin. Review orders and cancellations alongside attributed purchase value." },
            { title: "B2b and Lead Generation", href: "/industries/b2b-lead-generation/", desc: "Qualify by service need, company fit, and sales readiness. Pass useful context to the sales team and review whether inquiries become opportunities." },
            { title: "Medical and Healthcare", href: "/industries/medical-healthcare/", desc: "Connect service searches to accurate treatment information and a clear inquiry path. Your clinical or compliance reviewer approves claims and targeting constraints." },
            { title: "Retail Businesses", href: "/industries/retail-business/", desc: "Build campaigns around products, offers, and the locations customers can actually use. Separate online purchases from store-visit proxies." },
            { title: "Manufacturing and Logistics", href: "/industries/manufacturing-logistics/", desc: "Reach buyers researching specifications, applications, and service routes. Make quote forms useful for procurement without making them unnecessarily long." },
            { title: "Professional Services", href: "/industries/professional-services/", desc: "Address the prospect's specific issue and explain who the service fits. Route consultation requests to the right person with source details where available." },
        ],
    },
    why: {
        eyebrow: "Decisions you can inspect",
        subtitle: "EEGNITE takes a structured approach to lead generation for Bahrain businesses, connecting campaign performance with sales feedback, landing-page behaviour and the quality of inquiries received.",
        reasons: [
            { title: "Track What Happens After Submission", desc: "Review what happens after a prospect submits a form, from initial response to sales follow-up." },
            { title: "Include Sales Feedback", desc: "Use feedback from your sales team to understand lead quality, recurring objections, and missed opportunities." },
            { title: "Coordinate Across Channels", desc: "Connect paid media, content, and website improvements when lead generation challenges involve multiple channels." },
            { title: "Fix the Underlying Problems", desc: "Identify issues such as weak offers, ineffective landing pages, or broken enquiry forms instead of relying solely on increased advertising spend." },
            { title: "Maintain Clear Ownership", desc: "Work through your business-owned accounts with authorised access, agreed responsibilities, review dates and approval processes." },
        ],
    },
    process: {
        eyebrow: "Establish the test before spending",
        title: "Our PPC Process",
        accent: "for Bahrain Brands",
        steps: [
            { icon: "clipboard", title: "Review The Account and The Offer", desc: "We discuss current results, rejected leads, target customers, service coverage, and sales capacity. Existing account history helps reveal what has already been tested." },
            { icon: "coins", title: "Agree On A Testable Budget", desc: "We consider demand, expected click costs, conversion assumptions, and customer value. If the budget cannot support several offers, we narrow the test. Assumptions remain visible in the plan." },
            { icon: "page", title: "Prepare Ads and The Inquiry Route", desc: "We build the campaign structure and copy, agree on language review, and check the destination page. Your team approves the offer and any specialist claims." },
            { icon: "check", title: "Verify Tracking and Launch", desc: "We submit test inquiries, confirm where they arrive, and check the events recorded. Campaigns go live after the agreed account, page, and approval checks." },
            { icon: "loop", title: "Review Lead Quality and Refine", desc: "We review search terms, spending, creative, and sales feedback at the agreed cadence. Budget changes follow evidence and your approval limits." },
        ],
    },
    agency: {
        eyebrow: "A dedicated agency for your digital growth",
        title: "A Campaign Plan That Changes",
        accent: "When the Evidence Changes",
        image: "/images/services/bahrain-ppc-dedicated-agency.webp",
        imageAlt: "A team reviewing campaign findings at a whiteboard",
        paragraphs: [
            "A campaign can be technically correct and commercially wrong. Perhaps buyers need a different offer, your team cannot service the inquiries, or the landing page attracts the wrong customer type. Those findings should change the plan.",
            "We keep the work focused on the constraint. That may mean narrowing a campaign, repairing one page, or pausing an offer while your team resolves availability. A standard reporting format supports the work; your business priorities decide the strategy.",
            <>See EEGNITE&apos;s broader support as a{" "}<Link href="/bahrain/" className="text-[#FF6105] font-semibold underline hover:text-[#C44800]">results-oriented digital marketing agency for Bahrain businesses</Link>.</>,
        ],
    },
    faq: {
        eyebrow: "Budget and lead quality questions",
        title: "PPC Questions From",
        accent: "Bahrain Business Owners",
        items: faqs([
            { q: "What should I ask a PPC agency before appointing it?", text: "Ask how it defines a conversion, reviews rejected leads, selects a starting budget, and reports costs. Request clarity on account ownership, language review, landing-page work, and which tasks require your approval." },
            { q: "How much should a Bahrain business spend on Google Ads?", text: "There is no useful fixed amount for every business. Start with your service, expected search demand, customer value, and a realistic test. We explain the assumptions and separate ad spend from management and other work in the proposal." },
            { q: "Can you guarantee a number of leads?", text: "No. Demand, competition, the offer, the website, and sales follow-up affect outcomes. We agree on what will be tested and how lead quality will be judged. A forecast is a planning estimate, not a guaranteed result." },
            { q: "Why does Google Ads show more conversions than our CRM?", text: "The account may count different actions, repeat events, or use a different attribution window. Some reporting may include modeled outcomes. We reconcile event definitions and compare the systems before treating the difference as lost sales." },
            { q: "Do you offer Arabic campaigns?", text: "Language requirements are agreed during scoping. For Arabic, the research, copy, and destination page need a qualified reviewer familiar with your audience. We do not treat an automatic translation as an approved campaign." },
            {
                q: "Should we choose Google Ads or social advertising?",
                text: "Search can capture existing demand; social can demonstrate an offer to selected audiences. Choose according to the customer's buying journey and the budget available to test it. Our social media service covers wider content and community work.",
                a: <>Search can capture existing demand; social can demonstrate an offer to selected audiences. Choose according to the customer&apos;s buying journey and the budget available to test it. Our <Link href="/services/social-media-marketing/" className={linkCls}>social media service</Link> covers wider content and community work.</>,
            },
            { q: "Can Bahrain and Saudi Arabia share one campaign?", text: "Sometimes a shared structure is appropriate, but pooling markets can hide different costs, intent, or fulfillment needs. We review coverage and reporting before deciding whether to separate budgets and campaigns." },
            { q: "How do you measure lead quality?", text: "We agree on a definition with your sales team and record accepted and rejected inquiries with reasons. Cost per accepted lead is then reviewed alongside opportunity progress. A form submission alone is not evidence of a good prospect." },
        ]),
    },
    final: {
        eyebrow: "Start with the leads you are getting now",
        title: "Find Out What Your PPC Budget Needs to Fix",
        text: "Share your main service, current campaign concern, and website. If you have examples of unsuitable inquiries, bring them to the discussion without sharing unnecessary personal details.",
        secondary: { label: "Explore Our Complete PPC Management", href: "/services/ppc/" },
    },
};
