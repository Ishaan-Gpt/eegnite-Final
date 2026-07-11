import type { Metadata } from "next";
import KolkataSmmPageContent from "@/components/page-content/KolkataSmmPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Top Social Media Marketing Services in Kolkata | EEGNITE",
    description: "Social media marketing services in Kolkata across Instagram, Facebook, and LinkedIn - delivered by EEGNITE with content strategy, campaigns, and community management.",
    alternates: {
        canonical: "https://www.eegnite.com/digital-marketing-agency-kolkata/social-media-marketing/",
    },
    openGraph: {
        title: "Top Social Media Marketing Services in Kolkata | EEGNITE",
        description: "Social media marketing services in Kolkata across Instagram, Facebook, and LinkedIn - delivered by EEGNITE with content strategy, campaigns, and community management.",
        url: "https://www.eegnite.com/digital-marketing-agency-kolkata/social-media-marketing/",
        type: "website",
        images: [
            {
                url: "/images/logos/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Kolkata Social Media Marketing"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Social Media Marketing Services in Kolkata | EEGNITE",
        description: "Social media marketing services in Kolkata across Instagram, Facebook, and LinkedIn - delivered by EEGNITE with content strategy, campaigns, and community management.",
        images: ["/images/logos/eegnite-logo.png"]
    }
};

const SMM_FAQS = [
    { q: "How much do social media marketing services cost in Kolkata?", a: "Our social media marketing services in Kolkata start from INR 25,000 per month for a focused content management engagement. The final investment depends on the number of platforms, content volume, paid social budget, and level of community management required. EEGNITE recommends a scope and investment after an initial audit of your current presence and growth goals." },
    { q: "Which social media platforms should my Kolkata business focus on?", a: "Platform selection depends on your industry and target audience. Retail, food and beverage, and lifestyle brands in Kolkata typically see strong results on Instagram and Facebook. B2B brands and professional services firms perform better on LinkedIn. EEGNITE evaluates platform fit based on where your specific audience spends time and where your competitors are or are not present." },
    { q: "How often should my Kolkata business post on social media?", a: "Consistency matters more than frequency. Most Kolkata businesses see strong engagement and audience growth, posting 3 to 5 times per week on key platforms, supported by daily stories and regular community engagement. EEGNITE builds a posting frequency into your content calendar that is sustainable, strategic, and aligned to the behaviour patterns of your specific audience." },
    { q: "Can social media marketing actually generate leads and sales for my business?", a: "Yes, when the right strategy is in place. Organic social builds brand trust and awareness. Paid social campaigns on Meta, built around conversion objectives with proper pixel tracking and targeted landing pages, generate direct enquiries, bookings, and sales that are fully attributable to your social media investment. EEGNITE builds both working together as one system." },
    { q: "What is the difference between EEGNITE and a freelance social media manager?", a: "A freelance social media manager typically handles content posting. EEGNITE provides a full social media marketing system, including audience strategy, content pillar development, monthly calendars, content creation, paid social campaign management, community management, and performance reporting. Everything is managed by a dedicated team and integrated with your wider SEO and PPC strategy, not isolated from the rest of your marketing." }
];

export default function KolkataSmmPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/digital-marketing-agency-kolkata/social-media-marketing/"
                pageTitle="Top Social Media Marketing Services in Kolkata | EEGNITE"
                pageDescription="Social media marketing services in Kolkata across Instagram, Facebook, and LinkedIn - delivered by EEGNITE with content strategy, campaigns, and community management."
                pageType="service"
                serviceName="Kolkata Social Media Marketing Services"
                serviceDescription="EEGNITE manages social media marketing for Kolkata businesses across Instagram, Facebook, and LinkedIn with audience strategy, campaigns, and community management."
                serviceCategory="Social Media Marketing Services"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Kolkata", url: "https://www.eegnite.com/kolkata/" },
                    { position: 3, name: "Social Media Marketing", url: "https://www.eegnite.com/digital-marketing-agency-kolkata/social-media-marketing/" }
                ]}
                faqs={SMM_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <KolkataSmmPageContent />
        </>
    );
}
