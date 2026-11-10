import Link from "next/link";
import { faqs, type BahrainServiceData } from "./bahrain-service.types";

// /bahrain/social-media-marketing/ — copy verbatim from the "EEGNITE_New Content_Bahrain_Social Media Marketing"
// Google Doc. The doc's buttons ("Discuss Your Social Media Plan", "Book a Social Media Discovery Call") render as the
// site-wide "Get your growth plan" CTA to the on-page form, as agreed for all service pages.

const linkCls = "text-[#FF6105] underline hover:text-[#C44800]";

export const BAHRAIN_SMM: BahrainServiceData = {
    meta: {
        url: "https://www.eegnite.com/bahrain/social-media-marketing/",
        title: "Social Media Marketing Agency for Bahrain Businesses | EEGNITE",
        description: "Connect with Bahrain customers through useful social content, targeted campaigns, and clear inquiry follow-up. Book a strategy call with EEGNITE.",
        serviceName: "Social Media Marketing for Bahrain Businesses",
        serviceDescription: "Channel and profile strategy, content planning and copy, creative and short video, publishing and community workflows, paid social campaigns, and reporting for Bahrain businesses.",
        serviceCategory: "Social Media Marketing",
        crumb: "Social Media Marketing",
    },
    hero: {
        eyebrow: "Social media support for Bahrain businesses",
        title: <>Social Media Marketing Agency <br className="hidden md:inline" />for Bahrain Businesses With More to Say</>,
        titleClassName: "md:text-4xl lg:text-[2.75rem] xl:text-5xl",
        statement: "Your next customer may look at your profile before asking a question. Can they see what you offer, who it is for, and how to take the next step?",
        description: "EEGNITE plans social content and campaigns around those decisions. We help turn the questions your team hears into useful posts, clearer profiles, and better inquiry routes.",
    },
    pain: {
        eyebrow: "When posting does not resolve the problem",
        title: "What Is Holding Your",
        accent: "Social Media Back",
        image: "/images/services/bahrain-smm-pain-points.webp",
        imageAlt: "A business social media feed on a phone",
        items: [
            { title: "Posts Look Consistent But Leave Buying Questions Unanswered", desc: "A polished feed can still omit service details, delivery coverage, product use, or pricing factors. We identify what a potential customer needs to know before making contact." },
            { title: "Content Arrives Late Because Nobody Owns Approval", desc: "If factual review and image supply are unclear, the calendar slips. We agree on who provides information, who approves it, and what happens when an item is delayed." },
            { title: "Messages Receive Replies But Do Not Reach Sales", desc: "An inquiry may need a stock check, a quote, or specialist advice. We define where routine responses end and who takes responsibility for the next step." },
            { title: "Paid and Organic Results Are Mixed Together", desc: "A promoted post can make reach rise while normal content remains unchanged. We report the two separately and explain what the available data can tell you about inquiries." },
        ],
    },
    bring: {
        eyebrow: "Useful content starts with useful questions",
        title: "What We Bring",
        accent: "to the Table",
        intro: "EEGNITE develops social media content around the questions your customers ask and the information they need before making a decision. Each format is chosen to serve a clear purpose.",
        items: [
            { title: "Choose Relevant Content Formats", desc: "Identify useful topics and formats, from product demonstrations and service comparisons to graphics and short videos.", img: "/images/services/bahrain-smm-formats.webp", alt: "Filming short video content for social media" },
            { title: "Plan Content and Deliverables", desc: "Define channels, formats, creative requirements, approval processes, and reporting. Keep ongoing content separate from paid ads, production, and creator partnerships.", img: "/images/services/bahrain-smm-plan.webp", alt: "A monthly content plan open on a desk" },
            { title: "Connect with Bahrain Audiences", desc: "Align language, cultural references, and Arabic content with your actual audience, including a local review where required.", img: "/images/services/bahrain-smm-audience.webp", alt: "Bahrain Bay in Manama" },
        ],
    },
    breakdown: {
        eyebrow: "Social media service breakdown",
        title: "The Work Behind a More Useful",
        accent: "Social Presence",
        items: [
            { icon: "users", title: "Channel and Profile Strategy", desc: "We review which platforms support the way your customers research, compare, and contact businesses. Profile details, contact options, and key service information need to be accurate before publishing more content." },
            { icon: "calendar", title: "Content Planning and Copy", desc: "We organize topics around customer questions, offers, proof, and product or service explanations. The calendar identifies each item's purpose and the information needed to create it." },
            { icon: "camera", title: "Creative and Short Video", desc: "We design platform-appropriate graphics and edit agreed footage into useful content. Remote production depends on suitable assets. If a Bahrain shoot is needed, we agree on responsibilities and local production costs separately." },
            { icon: "chat", title: "Publishing and Community Workflows", desc: "We manage the agreed publishing schedule and response scope. Routine questions can follow approved answers; complaints, sensitive issues, and sales conversations are routed to your nominated team." },
            {
                icon: "target",
                title: "Paid Social Campaigns",
                desc: <>When paid activity fits the brief, we test audiences, offers, and creative against a defined goal. Media spend is separate. For broader acquisition planning, explore our <Link href="/services/ppc/" className={linkCls}>PPC services</Link>.</>,
            },
            { icon: "chart", title: "Reporting That Informs the Next Month", desc: "We review content performance, profile actions, website visits, and traceable inquiries alongside your team's feedback. Reach and engagement help explain attention; they do not establish sales by themselves." },
        ],
    },
    industries: {
        image: "/images/services/bahrain-smm-industries.webp",
        imageAlt: "Industries EEGNITE serves with Social Media Marketing in Bahrain",
        eyebrow: "Content shaped by the buying decision",
        items: [
            { title: "E-Commerce", href: "/industries/e-commerce/", desc: "Show how products are used, answer common purchase objections, and connect content to accurate product pages. Use paid campaigns only within the agreed scope." },
            { title: "B2b and Lead Generation", href: "/industries/b2b-lead-generation/", desc: "Help decision-makers understand a problem through practical posts, demonstrations, and useful sales content. Give relevant inquiries a clear route to your team." },
            { title: "Medical and Healthcare", href: "/industries/medical-healthcare/", desc: "Publish educational content with your clinical team's approval. Set a clear boundary between public information and individual medical advice." },
            { title: "Retail Businesses", href: "/industries/retail-business/", desc: "Give customers current product, outlet, and offer information. Plan content around stock and service capacity so promoted items are actually available." },
            { title: "Manufacturing and Logistics", href: "/industries/manufacturing-logistics/", desc: "Use real product applications, facility footage, and operational explanations that your technical team approves. Direct sourcing questions to a quote request." },
            { title: "Professional Services", href: "/industries/professional-services/", desc: "Turn recurring consultation questions into clear explanations and practitioner-led content. Use real expertise and approved experience rather than generic advice." },
        ],
    },
    why: {
        image: "/images/services/bahrain-smm-why-eegnite.webp",
        imageAlt: "Why Choose EEGNITE for Social Media Marketing for your Bahrain Business",
        orbit: ["camera", "chat", "calendar", "users", "megaphone"],
        eyebrow: "Planning that includes the handoff",
        subtitle: "EEGNITE approaches social media marketing as part of your wider customer journey, connecting content, engagement and follow-up with clear business objectives.",
        reasons: [
            { title: "Plan Beyond Content Publishing", desc: "Define what happens when someone comments, sends a message, or responds to your content." },
            { title: "Connect Related Marketing Channels", desc: "Coordinate social media with paid advertising, SEO, email and website activities where needed." },
            { title: "Create a Clear Working Process", desc: "Use shared briefs, scheduled reviews, and agreed approval processes to keep activities organised." },
            { title: "Combine Local Knowledge with Creative Execution", desc: "Your team provides product expertise and Bahrain market insights, while EEGNITE handles planning and content execution." },
            { title: "Track Activity and Learnings", desc: "Maintain a clear record of published content, audience responses, and insights to guide future improvements." },
        ],
    },
    process: {
        eyebrow: "Clear inputs and clear responsibilities",
        title: "Our Social Media Marketing Process",
        accent: "for Bahrain Brands",
        steps: [
            { icon: "chat", title: "Listen To The Customer Questions", desc: "We review your profiles, existing content, competitors, and the questions your team receives. We identify the audience and the business outcome the work should support." },
            { icon: "target", title: "Choose The Channels and Define The Scope", desc: "We agree on platforms, formats, content quantities, approval responsibilities, response coverage, and any paid activity. Each choice has a purpose." },
            { icon: "page", title: "Prepare The First Content Cycle", desc: "We write and design from approved information. Your reviewer checks factual claims, local references, and any required Arabic version before scheduling." },
            { icon: "megaphone", title: "Publish and Route Conversations", desc: "We publish approved items and manage the agreed response scope. Buying questions and issues needing a specialist go to the named contact on your team." },
            { icon: "loop", title: "Review What Customers Did", desc: "We compare the content's purpose with the response it received. Questions, visits, and inquiries help shape the next cycle, including what should be explained more clearly." },
        ],
    },
    tools: {
        service: "Social Media Marketing",
        items: [
            { name: "Meta Business Suite", src: "/images/icons/meta.png" },
            { name: "Canva", src: "/images/icons/canva.webp" },
            { name: "Buffer", src: "/images/icons/buffer.svg" },
        ],
    },
    agency: {
        eyebrow: "A dedicated agency for your digital growth",
        title: "Your Calendar Should Reflect",
        accent: "What Your Customers Need",
        image: "/images/services/bahrain-smm-dedicated-agency.webp",
        imageAlt: "Recording real product footage on a phone",
        paragraphs: [
            "A fixed grid of generic posts cannot tell you when a buyer needs a demonstration or a clearer answer. We use customer questions and business priorities to decide what earns a place in the calendar.",
            "That may mean fewer formats used well, more real product footage, or a practical guide your sales team can share. The plan can change when your stock, offer, or customer questions change.",
            <>Explore coordinated support from EEGNITE as a{" "}<Link href="/bahrain/" className="text-[#FF6105] font-semibold underline hover:text-[#C44800]">results-oriented digital marketing agency for Bahrain businesses</Link>.</>,
        ],
    },
    faq: {
        eyebrow: "Questions about content and delivery",
        title: "Social Media Questions From",
        accent: "Bahrain Business Owners",
        items: faqs([
            { q: "Which platforms should our Bahrain business use?", text: "Choose according to your customers, offer, available assets, and how the purchase happens. A B2B service may need a different approach from a retailer. We review evidence from your audience and existing channels before recommending the mix." },
            { q: "How many posts do we need each month?", text: "The useful number depends on the questions to answer and the assets your team can support. Your proposal specifies quantities and formats. Posting volume is a delivery measure, not a reliable forecast of inquiries." },
            { q: "Can you create Arabic and English content?", text: "We define the language scope at the start. English copy is included as agreed; Arabic content requires a qualified reviewer and an approval route. Review and production costs are made clear before the work begins." },
            { q: "Who answers our messages and comments?", text: "The scope names the response coverage and the questions we can answer using approved information. Sales, complaints, account issues, and specialist advice are routed to your nominated team. We do not assume round-the-clock support." },
            { q: "Can social media guarantee sales?", text: "No. The offer, audience, content, website, availability, and follow-up all affect sales. We define the intended outcomes and measurement before starting, then review the evidence instead of promising a fixed return." },
            { q: "Are paid ads included in social media management?", text: "Only when the proposal includes them. Organic planning and publishing, ad management, production, and media spend are separate items so you can compare scope clearly." },
            { q: "How will you show whether social media helps our business?", text: "We use tagged links, relevant website events, inquiry records, and customer feedback where available. Platform attribution and your sales records may differ. Reports distinguish observed activity from outcomes we cannot directly trace." },
            { q: "Can we keep our accounts and content if the engagement ends?", text: "Your business retains its social accounts. The agreement specifies ownership and handover of final creative, source files, licensed assets, and account access. Those terms should be clear before work begins." },
        ]),
    },
    final: {
        eyebrow: "Start with the question your customers keep asking",
        title: "Give Your Social Content a Clearer Job",
        text: "Share your profiles, the audience you want to reach, and the question your team answers most often. We will discuss a practical starting plan and the assets it will need.",
        secondary: { label: "See Our Complete SMM Services", href: "/services/social-media-marketing/" },
    },
};
