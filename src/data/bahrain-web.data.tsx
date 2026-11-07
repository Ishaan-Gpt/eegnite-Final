import Link from "next/link";
import { faqs, type BahrainServiceData } from "./bahrain-service.types";

// /bahrain/web-design-development/ — copy verbatim from the "EEGNITE_New Content_Bahrain_Web Design & Developement"
// Google Doc. The doc's buttons ("Discuss Your Website Requirements", "Book a Website Discovery Call") render as the
// site-wide "Get your growth plan" CTA to the on-page form, as agreed for all service pages.
// The doc's service breakdown has seven items; the template lays them out as a row of 4 and a centred row of 3.

export const BAHRAIN_WEB: BahrainServiceData = {
    meta: {
        url: "https://www.eegnite.com/bahrain/web-design-development/",
        title: "Web Design Agency for Bahrain Businesses | EEGNITE",
        description: "Web design and development for Bahrain businesses that need a clearer path to inquiries. EEGNITE builds sites around the decisions your customers make.",
        serviceName: "Web Design and Development for Bahrain Businesses",
        serviceDescription: "Site structure and content planning, UI design and mobile usability, CMS and website development, e-commerce and payments, English and Arabic scope, SEO migration, and launch support for Bahrain businesses.",
        serviceCategory: "Web Design & Development",
        crumb: "Web Design & Development",
    },
    hero: {
        eyebrow: "Web design and development for Bahrain businesses",
        title: <>Web Design Agency for Bahrain Businesses <br className="hidden md:inline" />That Need a Clearer Path to Inquiries</>,
        titleClassName: "md:text-4xl lg:text-[2.75rem] xl:text-5xl",
        statement: "A customer should not have to call just to find out whether you offer the service they need. Your website should answer that question and make the next step easy.",
        description: "EEGNITE designs and develops websites around the decisions your customers need to make. We connect page structure, content, mobile usability, and inquiry or checkout paths.",
    },
    pain: {
        eyebrow: "Find the friction before choosing a redesign",
        title: "Where Your Website",
        accent: "May Be Losing Business",
        image: "/images/services/bahrain-web-pain-points.webp",
        imageAlt: "A visitor browsing a business website on a smartphone",
        items: [
            { title: "Visitors Cannot Tell Whether the Service Fits", desc: "Broad claims leave the buyer to work out the details. We organize the offer around who it helps, what is included, where it is available, and how to ask about the next step." },
            { title: "The Mobile Journey Breaks At The Point Of Contact", desc: "A form may be awkward to complete, a button may obscure content, or the confirmation may never arrive. We test the complete inquiry route rather than judging a screenshot alone." },
            { title: "Updates Depend On Someone Who Is No Longer Available", desc: "Your team needs to change content without risking the site. We scope an editing setup around the tasks you actually perform and include an editor check before handover." },
            { title: "A Redesign Could Lose The Pages That Already Bring Inquiries", desc: "Changing URLs and content without a migration plan can disrupt useful search traffic. We review the existing pages, redirects, and tracking before replacing them." },
        ],
    },
    bring: {
        eyebrow: "Start with the visitor's task",
        title: "What We Bring",
        accent: "to the Table",
        intro: "EEGNITE plans websites around what your visitors need to achieve, whether that means inquiring, requesting a quote, or completing a purchase.",
        items: [
            { title: "Define the Website's Purpose", desc: "Identify the actions your visitors should take, based on your business model and customer needs.", img: "/images/services/bahrain-web-purpose.webp", alt: "Wireframe sketches of website page layouts" },
            { title: "Plan Before Development", desc: "Align the sitemap, content, design, and development with clear requirements, responsibilities, and pre-launch testing.", img: "/images/services/bahrain-web-plan.webp", alt: "Website code in a development editor" },
            { title: "Improve Before Rebuilding", desc: "Assess your existing website and recommend targeted improvements where possible. A complete rebuild should have a clear business reason beyond visual changes.", img: "/images/services/bahrain-web-improve.webp", alt: "Sketching improvements to an existing website layout" },
        ],
    },
    breakdown: {
        eyebrow: "Web development service breakdown",
        title: "What Your Website Project",
        accent: "Can Include",
        items: [
            { icon: "layout", title: "Structure and Page Content Planning", desc: "We map services, products, customer questions, and contact routes into a clear page hierarchy. Important business information stays in readable page text rather than being embedded only in images." },
            { icon: "phone", title: "UI Design and Mobile Usability", desc: "We design around realistic content and the actions visitors need to complete. Navigation, typography, form labels, error messages, and keyboard access are included in the review." },
            { icon: "code", title: "Cms and Website Development", desc: "We choose the platform and integrations against the agreed requirements. EEGNITE's services include WordPress, e-commerce, and custom development. Your proposal names the actual stack, responsibilities, and handover materials." },
            { icon: "cart", title: "E-Commerce and Payment Integrations", desc: "We review products, delivery, stock, taxes supplied by your advisers, and the checkout route. Any proposed Bahrain payment integration is checked for platform compatibility and merchant eligibility before it is committed to the build." },
            { icon: "chat", title: "English and Arabic Website Scope", desc: "If both languages are required, we plan the page versions, switching behavior, content review, and right-to-left layouts. Arabic copy needs a qualified reviewer. The language scope is defined before design approval." },
            { icon: "search", title: "Seo Migration and Measurement", desc: "For a replacement site, we map existing URLs to their new destinations, preserve useful content where appropriate, and test redirects. We also review metadata, indexability, internal links, and inquiry or purchase events." },
            { icon: "rocket", title: "Launch and Agreed Ongoing Support", desc: "We test the defined journeys before release and document access, editing, and maintenance responsibilities. Hosting, licenses, backups, updates, and further optimization are identified in the proposal so the ongoing cost is clear." },
        ],
    },
    industries: {
        eyebrow: "A different task for each business",
        items: [
            { title: "E-Commerce", href: "/industries/e-commerce/", desc: "Make product details, delivery information, payment steps, and returns easy to understand. Test the path from a category page to a completed order." },
            { title: "B2b and Lead Generation", href: "/industries/b2b-lead-generation/", desc: "Explain the offer for each buyer type and capture enough detail for a useful sales conversation. Connect forms to the agreed lead-handling system." },
            { title: "Medical and Healthcare", href: "/industries/medical-healthcare/", desc: "Present practitioner information and service details with clinical approval. Make inquiries simple while limiting unnecessary sensitive data collection." },
            { title: "Retail Businesses", href: "/industries/retail-business/", desc: "Help visitors find outlets, products, opening information, and the right contact route. Use accurate details for each real location." },
            { title: "Manufacturing and Logistics", href: "/industries/manufacturing-logistics/", desc: "Organize technical catalogs, specifications, applications, and quote requests so procurement teams can compare what they need." },
            { title: "Professional Services", href: "/industries/professional-services/", desc: "Give prospects clear service scope, practitioner experience, and a credible consultation route. Keep qualifications and memberships accurate and current." },
        ],
    },
    why: {
        eyebrow: "Content and development considered together",
        subtitle: "EEGNITE approaches website design as a complete customer journey, bringing together visual presentation, service information and clear conversion paths. Every design decision considers how visitors interact with your business.",
        reasons: [
            { title: "Design Around Customer Needs", desc: "Review service content, form questions and contact processes together to create a practical user journey." },
            { title: "Connect Design with Marketing", desc: "Align website development with SEO, paid media, social media and email requirements." },
            { title: "Plan for Lead Generation", desc: "Ensure landing pages, enquiry forms and follow-up requirements support your wider marketing activities." },
            { title: "Review Before Launch", desc: "Your team reviews the approved website structure, design and testing outcomes before launch." },
            { title: "Maintain Clear Ownership", desc: "Record website ownership, account access and ongoing support arrangements so your team understands what is included." },
        ],
    },
    process: {
        eyebrow: "From requirements to a working handover",
        title: "Our Web Design & Development Process",
        accent: "for Bahrain Brands",
        steps: [
            { icon: "clipboard", title: "Audit The Current Site and Define The Task", desc: "We discuss the audience, offer, existing search traffic, required functions, and the actions visitors should complete. This establishes whether repairs or a new build make sense." },
            { icon: "layout", title: "Agree On The Structure and Scope", desc: "You review the sitemap, page requirements, platform, integrations, content responsibilities, and acceptance criteria. Costs and dependencies are visible before design begins." },
            { icon: "page", title: "Review the Design With Real Content", desc: "We develop page layouts using approved or review-ready copy. Mobile behavior, forms, and any language versions are considered during design rather than added at the end." },
            { icon: "check", title: "Build and Test the Journeys", desc: "We test navigation, forms, notifications, checkout where relevant, key redirects, and editing tasks. The agreed acceptance criteria determine what must be resolved before launch." },
            { icon: "rocket", title: "Launch and Hand Over", desc: "We coordinate release, verify live journeys, and provide the agreed access and documentation. The support scope defines what happens next and who is responsible for routine upkeep." },
        ],
    },
    agency: {
        eyebrow: "A dedicated agency for your digital growth",
        title: "The Website Should Fit",
        accent: "the Way Your Business Works",
        image: "/images/services/bahrain-web-dedicated-agency.webp",
        imageAlt: "A team shaping a website around how the business works",
        paragraphs: [
            "Reusable components can make a site easier to maintain. They should not dictate your offer, page structure, or sales process.",
            "We shape the experience around your customer tasks and your team's ability to keep the content accurate. A technical catalog, a booking journey, and an online store need different decisions. Your project scope explains those decisions before the build starts.",
            <>Explore EEGNITE&apos;s wider services as a{" "}<Link href="/bahrain/" className="text-[#FF6105] font-semibold underline hover:text-[#C44800]">results-oriented digital marketing agency for Bahrain businesses</Link>.</>,
        ],
    },
    faq: {
        eyebrow: "Questions before the build",
        title: "Web Design Questions From",
        accent: "Bahrain Business Owners",
        items: faqs([
            { q: "Should we repair our website or rebuild it?", text: "Start with the problems, current platform, useful content, and required functions. If targeted fixes can resolve the main issues, a full rebuild may be unnecessary. We review the evidence before recommending the scope." },
            { q: "How much does web development for a Bahrain business cost?", text: "Cost depends on page types, content, language versions, integrations, catalog size, migration, and support requirements. The proposal separates the build from hosting, licenses, maintenance, and additional production. We do not invent a package price before understanding the work." },
            { q: "How long will the website take?", text: "The schedule follows the agreed scope and dependencies, including content supply, reviews, integrations, and testing. We provide milestones after discovery. A quoted launch date should make those assumptions clear." },
            { q: "Can you build an Arabic and English website?", text: "Yes, when included in the agreed scope with qualified Arabic review. Both versions need usable layouts, clear switching, and accurate content. Right-to-left behavior is tested as part of the Arabic version rather than assumed from a translation plugin." },
            { q: "Can you integrate payment methods used by Bahrain customers?", text: "We assess the requested gateway, platform, merchant eligibility, fees, and settlement requirements with you and the provider. Integration is committed only after compatibility is confirmed. We do not promise support for every gateway on every platform." },
            { q: "Will a redesign affect our SEO?", text: "It can, particularly if URLs, content, or indexability change. We plan redirects, review important existing pages, and test the new site. Migration planning reduces avoidable problems but cannot guarantee unchanged rankings." },
            { q: "Will our team be able to update the site?", text: "That is a requirement we can include in the scope. We identify the tasks your team needs to perform, configure the editing approach, and test an agreed example before handover. Training and documentation are specified in the proposal." },
            { q: "Who owns the website and what happens after launch?", text: "The agreement defines ownership of the final build, source materials, and licensed components. Your business should control its domain and key accounts. Hosting, maintenance, support, and further development are listed separately so responsibilities remain clear." },
        ]),
    },
    final: {
        eyebrow: "Bring the task your website cannot handle",
        title: "Plan a Website Your Customers Can Use",
        text: "Share your current site, the main problem, and what a successful visit should achieve. We will discuss what needs reviewing before you decide on a repair or rebuild.",
        secondary: { label: "Explore Our Complete Web Design and Development", href: "/services/web-development/" },
    },
};
