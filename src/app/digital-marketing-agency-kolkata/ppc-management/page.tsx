import type { Metadata } from "next";
import KolkataPpcPageContent from "@/components/page-content/KolkataPpcPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "ROI-Focused PPC Management Services in Kolkata | EEGNITE",
    description: "EEGNITE manages PPC campaigns in Kolkata across Google Ads and Meta, with full conversion tracking and weekly optimisation. Get your free PPC audit today.",
    alternates: {
        canonical: 'https://www.eegnite.com/digital-marketing-agency-kolkata/ppc-management/',
    },
    openGraph: {
        title: "ROI-Focused PPC Management Services in Kolkata | EEGNITE",
        description: "EEGNITE manages PPC campaigns in Kolkata across Google Ads and Meta, with full conversion tracking and weekly optimisation. Get your free PPC audit today.",
        url: "https://www.eegnite.com/digital-marketing-agency-kolkata/ppc-management/",
        type: "website",
        images: [
            {
                url: "/images/logos/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Kolkata PPC Management"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "ROI-Focused PPC Management Services in Kolkata | EEGNITE",
        description: "EEGNITE manages PPC campaigns in Kolkata across Google Ads and Meta, with full conversion tracking and weekly optimisation. Get your free PPC audit today.",
        images: ["/images/logos/eegnite-logo.png"]
    }
};

const PPC_FAQS = [
    { q: "How much should I budget for PPC in Kolkata?", a: "Most Kolkata businesses start seeing meaningful results with a monthly ad spend starting from INR 30,000, depending on industry competitiveness. EEGNITE recommends a starting budget after reviewing your goals and category, rather than suggesting a fixed figure upfront." },
    { q: "How quickly will I see leads from PPC?", a: "Google Search campaigns can begin generating leads within 7 to 14 days of launch. Meta campaigns typically need 10 to 14 days for the platform's learning phase before performance stabilises and leads become more consistent." },
    { q: "Can EEGNITE manage PPC if I already have an active campaign?", a: "Yes. We frequently take over existing campaigns, audit what is currently running, identify wasted spend and tracking gaps, and restructure the account for better performance without losing existing campaign history where it is useful." },
    { q: "Do you manage both Google Ads and Meta Ads?", a: "Yes. EEGNITE manages Google Search, Shopping, and Display campaigns alongside Meta campaigns on Facebook and Instagram, choosing the right mix based on where your Kolkata audience is most likely to convert." },
    { q: "What makes EEGNITE's PPC management different from other Kolkata agencies?", a: "Most agencies report on clicks and impressions. EEGNITE builds full conversion tracking into every campaign from the start, so reporting reflects actual leads, sales, and cost per acquisition, the numbers that determine whether PPC is working for your business." }
];

export default function KolkataPPCPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/digital-marketing-agency-kolkata/ppc-management/"
                pageTitle="ROI-Focused PPC Management Services in Kolkata | EEGNITE"
                pageDescription="EEGNITE manages PPC campaigns in Kolkata across Google Ads and Meta, with full conversion tracking and weekly optimisation. Get your free PPC audit today."
                pageType="service"
                serviceName="Kolkata PPC Management Services"
                serviceDescription="EEGNITE manages PPC campaigns for Kolkata businesses across Google Ads, Meta, and beyond with intent targeting and weekly optimisation."
                serviceCategory="PPC Advertising & Paid Acquisition Services"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Kolkata", url: "https://www.eegnite.com/kolkata/" },
                    { position: 3, name: "PPC Management", url: "https://www.eegnite.com/digital-marketing-agency-kolkata/ppc-management/" }
                ]}
                faqs={PPC_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <KolkataPpcPageContent />
        </>
    );
}
