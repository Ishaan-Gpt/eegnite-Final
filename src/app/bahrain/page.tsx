import { Metadata } from "next";
import BahrainLandingPageContent from "@/components/page-content/BahrainLandingPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "ROI-Focused Digital Marketing Agency for Bahrain Businesses | EEGNITE",
    description: "EEGNITE helps Bahrain businesses grow with ROI-focused SEO, Google Ads, social media marketing, and conversion-driven digital strategies built for long-term business growth.",
    alternates: {
        canonical: "https://www.eegnite.com/bahrain/",
    },
    openGraph: {
        title: "ROI-Focused Digital Marketing Agency for Bahrain Businesses | EEGNITE",
        description: "EEGNITE helps Bahrain businesses grow with ROI-focused SEO, Google Ads, social media marketing, and conversion-driven digital strategies built for long-term business growth.",
        url: "https://www.eegnite.com/bahrain/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Digital Marketing Agency for Bahrain Businesses"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "ROI-Focused Digital Marketing Agency for Bahrain Businesses | EEGNITE",
        description: "EEGNITE helps Bahrain businesses grow with ROI-focused SEO, Google Ads, social media marketing, and conversion-driven digital strategies built for long-term business growth.",
        images: ["/eegnite-logo.png"]
    }
};

const bahrainFaqs = [
    {
        question: "What Digital Marketing Services Does EEGNITE Offer In Bahrain?",
        answer: "EEGNITE offers 360 degree digital marketing services in Bahrain including SEO, Google Ads and PPC, social media marketing, email marketing and automation, web design and development, and performance marketing strategy. All services are managed under one integrated strategy built specifically for the Bahraini market. We serve businesses across Manama, Seef, Riffa, and across the Kingdom with campaigns grounded in Bahrain-specific market intelligence."
    },
    {
        question: "Does EEGNITE Specialise In Marketing For Bahrain's Financial Services And Fintech Sector?",
        answer: "Yes. EEGNITE has specific experience building digital marketing strategies for financial services, banking, fintech, Islamic finance, and wealth management firms. We understand the compliance constraints, trust-first content approach, and long buying cycles that define financial services marketing in Bahrain. Our campaigns generate qualified client enquiries while maintaining the credibility standards that regulated financial businesses require."
    },
    {
        question: "How Is EEGNITE Different From Other Digital Marketing Agencies In Bahrain?",
        answer: "Most digital marketing agencies in Bahrain are either creative-first without performance attribution, or regional players applying Saudi strategies to a market with its own distinct buyer behaviour and business culture. EEGNITE builds Bahrain-first performance marketing strategies tied to measurable revenue outcomes. We are not a Saudi agency with a Bahrain office. We build genuine Bahrain strategies from the ground up."
    },
    {
        question: "How Long Does Digital Marketing Take To Produce Results In Bahrain?",
        answer: "Google Ads campaigns begin generating leads within 7 to 14 days of going live. Meta campaigns need 10 to 21 days for the learning phase before performance stabilises. SEO builds meaningful organic visibility within 4 to 6 months. EEGNITE sets channel-specific timelines at the start of every engagement so your expectations are grounded in realistic, achievable outcomes from day one."
    },
    {
        question: "What Industries Does EEGNITE Serve In Bahrain?",
        answer: "EEGNITE serves businesses across Bahrain's key commercial sectors including financial services and fintech, real estate, hospitality, retail and e-commerce, professional services, B2B and lead generation, and healthcare. We understand the buyer behaviour, platform usage, and content approach specific to each industry in Bahrain's market. Whether you are a Manama fintech startup or an established hospitality group, we have experience in your sector."
    },
    {
        question: "How Does EEGNITE Report On Digital Marketing Performance For Bahrain Businesses?",
        answer: "We build complete attribution tracking infrastructure before any campaign launches - connecting Google Ads, Meta, your website, and CRM through conversion events and UTM parameters. Fortnightly updates keep you informed on active performance. Monthly reports cover cost per lead, ROAS, qualified pipeline generated, and revenue attributed to digital marketing. You always know what your investment is producing in measurable business terms."
    }
];

export default function BahrainPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/bahrain/"
                pageTitle="ROI-Focused Digital Marketing Agency for Bahrain Businesses | EEGNITE"
                pageDescription="EEGNITE helps Bahrain businesses grow with ROI-focused SEO, Google Ads, social media marketing, and conversion-driven digital strategies built for long-term business growth."
                pageType="location"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Bahrain", url: "https://www.eegnite.com/bahrain/" }
                ]}
                faqs={bahrainFaqs}
            />
            <BahrainLandingPageContent />
        </>
    );
}
