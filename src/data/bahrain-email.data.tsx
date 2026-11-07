import Link from "next/link";
import { faqs, type BahrainServiceData } from "./bahrain-service.types";

// /bahrain/email-marketing/ — copy verbatim from the "EEGNITE_New Content_Bahrain_Email Marketing" Google Doc.
// The doc's buttons ("Discuss Your Email Program", "Book an Email Discovery Call") render as the site-wide
// "Get your growth plan" CTA to the on-page form, as agreed for all service pages.
// Note: the doc's pain-points H2 ("People Find Advice But Miss Your Services") is kept as written.

export const BAHRAIN_EMAIL: BahrainServiceData = {
    meta: {
        url: "https://www.eegnite.com/bahrain/email-marketing/",
        title: "ROI-Focused Email Marketing Agency for Bahrain Businesses | EEGNITE",
        description: "Nurture leads and encourage repeat purchases with email marketing for Bahrain businesses. EEGNITE plans campaigns and automation. Book a strategy call.",
        serviceName: "Email Marketing for Bahrain Businesses",
        serviceDescription: "List review and segmentation, welcome and inquiry follow-up, e-commerce and retention journeys, campaign copy and design, deliverability, and CRM measurement for Bahrain businesses.",
        serviceCategory: "Email Marketing",
        crumb: "Email Marketing",
    },
    hero: {
        eyebrow: "Email marketing for Bahrain businesses",
        title: <>Email Marketing for Bahrain Businesses <br className="hidden md:inline" />That Need Better Follow-Up</>,
        titleClassName: "md:text-4xl lg:text-[2.75rem] xl:text-5xl",
        statement: "A prospect asked for information last week. A customer bought once and has not returned. Sending both the same promotion is unlikely to answer what either person needs.",
        description: "EEGNITE builds email campaigns and automated journeys around the next useful conversation. We help Bahrain businesses organize contacts, improve follow-up, and measure the outcomes that matter.",
    },
    pain: {
        eyebrow: "When another newsletter is not the answer",
        title: "People Find Advice But",
        accent: "Miss Your Services",
        image: "/images/services/bahrain-email-pain-points.webp",
        imageAlt: "An email inbox open on a laptop",
        items: [
            { title: "Every Contact Receives The Same Message", desc: "A new subscriber, recent buyer, and active sales prospect have different needs. We review what you know about each group and which distinctions will make a message more useful." },
            { title: "The Automation Continues After The Customer Has Acted", desc: "A buyer should not keep receiving an abandoned-cart reminder for a completed order. We define triggers, delays, exit conditions, and suppression before a flow goes live." },
            { title: "Delivery Problems Are Hidden Behind A Creative Refresh", desc: "Poor list quality, sending practices, and authentication issues can affect delivery. We review those foundations with your platform or technical contact instead of assuming a new subject line will fix them." },
            { title: "Open Rates Look Healthy But Business Outcomes Remain Unclear", desc: "An open is not a purchase or a qualified reply, and privacy features can affect open tracking. We prioritize useful clicks, replies, orders, and sales progress where your systems can record them." },
        ],
    },
    bring: {
        eyebrow: "Plan the next useful message",
        title: "What We Bring",
        accent: "to the Table",
        intro: "EEGNITE plans email journeys around key customer moments, from initial interest and purchase decisions to retention and repeat business. The focus is on relevant communication that supports your business goals.",
        items: [
            { title: "Identify Valuable Customer Journeys", desc: "Map opportunities for welcome emails, inquiry follow-ups, post-purchase guidance, and customer retention.", img: "/images/services/bahrain-email-journeys.webp", alt: "A team mapping customer journeys with sticky notes" },
            { title: "Define Each Journey Clearly", desc: "Set the target audience, message, trigger, desired action, required data, approval process, and journey completion conditions.", img: "/images/services/bahrain-email-define-journey.webp", alt: "Drawing an email journey as a flowchart on a whiteboard" },
            { title: "Align with Your Audience", desc: "Review your existing email platform before suggesting changes. For Bahrain audiences, consider language preferences, send timings, and relevant local reviews.", img: "/images/services/bahrain-email-audience.webp", alt: "A customer reading a message on a smartphone" },
        ],
    },
    breakdown: {
        eyebrow: "Email marketing service breakdown",
        title: "Build the Program Around",
        accent: "the Customer Journey",
        items: [
            { icon: "users", title: "List Review and Segmentation", desc: "We review how contacts were collected, the permissions recorded, inactive segments, and suppression lists. We plan meaningful groups using available data instead of adding complexity for its own sake." },
            { icon: "mail", title: "Welcome and Inquiry Follow-Up", desc: "New subscribers and service prospects receive information relevant to what they asked for. Your team approves the timing and the point where a personal sales response takes over." },
            { icon: "cart", title: "E-Commerce and Retention Journeys", desc: "Where the store and email platform support the required events, we scope cart, post-purchase, replenishment, or re-engagement messages. Purchase and unsubscribe events must stop inappropriate follow-up." },
            { icon: "layout", title: "Campaign Copy and Email Design", desc: "We write clear subjects, useful body copy, and a focused next step. Templates are tested for mobile reading, accessible structure, working links, and an obvious way to unsubscribe from marketing." },
            { icon: "shield", title: "Deliverability and Technical Coordination", desc: "We review sending-domain authentication, including SPF, DKIM, and DMARC as appropriate to your setup and provider requirements. We check the sending approach, list health, and required unsubscribe handling. Authentication helps establish identity; it does not guarantee inbox placement." },
            { icon: "chart", title: "Crm Connections and Measurement", desc: "We scope which fields and events move between systems, how duplicates are handled, and who owns errors. Reports distinguish campaign activity from attributed orders, qualified replies, and sales outcomes." },
        ],
    },
    industries: {
        eyebrow: "Different reasons to stay in touch",
        items: [
            { title: "E-Commerce", href: "/industries/e-commerce/", desc: "Guide subscribers from product interest to purchase and appropriate follow-up. Stop cart reminders when an order is placed, and respect recorded preferences." },
            { title: "B2b and Lead Generation", href: "/industries/b2b-lead-generation/", desc: "Send useful information aligned with the prospect's stage and interests. Move the conversation to sales when the person replies or reaches an agreed qualification point." },
            { title: "Medical and Healthcare", href: "/industries/medical-healthcare/", desc: "Keep general marketing separate from patient-specific communication. Your team approves messaging and the data that can be used in each workflow." },
            { title: "Retail Businesses", href: "/industries/retail-business/", desc: "Build relevant opt-in promotions around customer interests, product availability, and useful reasons to return. Review offer uptake alongside unsubscribes." },
            { title: "Manufacturing and Logistics", href: "/industries/manufacturing-logistics/", desc: "Support longer procurement decisions with application guides, specifications, and agreed follow-up. Route quote responses to the correct sales owner." },
            { title: "Professional Services", href: "/industries/professional-services/", desc: "Help prospects understand your engagement and prepare for a consultation. Use approved expertise without exposing confidential client information." },
        ],
    },
    why: {
        eyebrow: "A program your team can understand",
        subtitle: "EEGNITE builds email programmes around clear communication, customer actions and business objectives. Each workflow is planned to connect with the wider customer journey and remain manageable for your team.",
        reasons: [
            { title: "Define the Purpose of Every Email", desc: "Document why each message is sent, who receives it, and what action it should encourage." },
            { title: "Plan for Customer Actions", desc: "Establish how the workflow responds when someone replies, makes an inquiry, or completes a purchase." },
            { title: "Connect Related Channels", desc: "Integrate email with signup forms, lead sources, landing pages, and other relevant web or marketing activities." },
            { title: "Keep Data and Account Ownership Clear", desc: "Your business retains ownership of its email accounts and contact data. EEGNITE works through authorised access." },
            { title: "Agree on Responsibilities and Handover", desc: "Define roles, approval processes, and handover requirements. Our team supports Bahrain businesses through reviews and clear communication." },
        ],
    },
    process: {
        eyebrow: "Check the logic before the first send",
        title: "Our Email Marketing Process",
        accent: "for Bahrain Brands",
        steps: [
            { icon: "clipboard", title: "Understand The List and The Business Goal", desc: "We review current campaigns, contact sources, customer questions, and the outcome the program should support. Access is limited to the systems and data required for the work." },
            { icon: "target", title: "Choose The First Journeys", desc: "We identify the audience, triggers, timing, exclusions, and next step. The initial plan prioritizes useful journeys your current data can support." },
            { icon: "page", title: "Write and Build For Review", desc: "We prepare the copy, design, and automation rules. Your nominated reviewers approve facts, language, offers, and any specialist claims." },
            { icon: "check", title: "Test The Full Path", desc: "Test contacts go through entry, delay, reply, purchase, and unsubscribe scenarios as relevant. We verify links, personalization fallbacks, suppression, and sales handoff before launch." },
            { icon: "loop", title: "Monitor and Refine", desc: "We review delivery issues, clicks, responses, orders, and audience health. Changes follow the customer's behavior and the available evidence, not an open-rate target alone." },
        ],
    },
    tools: {
        service: "Email Marketing",
        items: [
            { name: "Klaviyo", src: "/images/icons/klaviyo.png" },
            { name: "MailChimp", src: "/images/icons/mailchimp.png" },
            { name: "Brevo", src: "/images/icons/brevo.svg" },
        ],
    },
    agency: {
        eyebrow: "A dedicated agency for your digital growth",
        title: "Your Customer Journey",
        accent: "Decides What We Build",
        image: "/images/services/bahrain-email-dedicated-agency.webp",
        imageAlt: "A store owner checking repeat orders on a tablet",
        paragraphs: [
            "A store with repeat purchases needs different follow-up from a consultancy with a long decision cycle. We use that difference to choose the work, the message, and the measurement.",
            "You may need a small set of reliable journeys before a large campaign calendar. We explain that choice and review it as the audience and business change.",
            <>Explore EEGNITE&apos;s connected services as a{" "}<Link href="/bahrain/" className="text-[#FF6105] font-semibold underline hover:text-[#C44800]">results-oriented digital marketing agency for Bahrain businesses</Link>.</>,
        ],
    },
    faq: {
        eyebrow: "Questions before the first campaign",
        title: "Email Marketing Questions From",
        accent: "Bahrain Business Owners",
        items: faqs([
            { q: "Is email marketing useful if we already use social media?", text: "It can be useful when people have chosen to hear from you and there is relevant follow-up to send. Social can introduce a business; email can continue a specific conversation. The right mix depends on your audience and offer." },
            { q: "Can you use our existing contact list?", text: "We first review where the contacts came from, the permissions recorded, and the condition of the list. Purchased or unexplained lists are not a sound basis for the proposed program. Your business must approve the permitted use of its data." },
            { q: "Why do our emails go to spam?", text: "Possible causes include authentication, sender reputation, list quality, complaint levels, or sending patterns. We review the evidence available in your platform and coordinate technical changes where needed. No agency can guarantee placement in every inbox." },
            { q: "Which automation should we build first?", text: "Choose a journey with a clear customer need and reliable data. A welcome sequence may suit a growing subscriber list; inquiry follow-up may matter more to a service business. We prioritize after reviewing your current gaps." },
            { q: "Can you work with our current email platform?", text: "We review the platform, account access, available events, and integration requirements first. EEGNITE's site references tools including Mailchimp, Klaviyo, and HubSpot. The proposal specifies the actual platform and work included; it does not assume a migration." },
            { q: "Can you manage Arabic and English emails?", text: "The language scope and review responsibilities are agreed before production. Arabic requires a qualified reviewer, including checks on layout and meaning. Messages should reflect the recipient's recorded preference where that information is available." },
            { q: "How much does email marketing management cost?", text: "Cost depends on list condition, campaign volume, number of journeys, integrations, design, and language review. Platform subscriptions and additional technical work are identified separately. We quote after defining the program rather than promising a universal return." },
            { q: "How do you measure sales from email?", text: "We agree on the events, attribution window, and source of truth before launch. Attributed orders and qualified replies are reviewed alongside other activity. Attribution shows a defined connection; it does not prove that email alone caused every sale." },
        ]),
    },
    final: {
        eyebrow: "Begin with the follow-up you are missing",
        title: "Build a More Useful Email Program",
        text: "Tell us which platform you use, who you want to follow up with, and what happens after an inquiry or purchase today. We will discuss the first journeys worth reviewing.",
        secondary: { label: "Explore Our Complete Email Marketing Services", href: "/services/email-marketing/" },
    },
};
