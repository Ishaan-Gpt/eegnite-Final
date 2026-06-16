import { Metadata } from "next";
import QatarLandingPageContent from "@/components/page-content/QatarLandingPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Growth-Focused Digital Marketing Agency for Qatar Businesses | EEGNITE",
    description: "EEGNITE helps Qatar businesses grow through SEO, Google Ads, social media marketing, and performance-driven digital strategies focused on leads, visibility, and measurable ROI.",
    alternates: {
        canonical: "https://www.eegnite.com/qatar/",
    },
    openGraph: {
        title: "Growth-Focused Digital Marketing Agency for Qatar Businesses | EEGNITE",
        description: "EEGNITE helps Qatar businesses grow through SEO, Google Ads, social media marketing, and performance-driven digital strategies focused on leads, visibility, and measurable ROI.",
        url: "https://www.eegnite.com/qatar/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Digital Marketing Agency for Qatar Businesses"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Growth-Focused Digital Marketing Agency for Qatar Businesses | EEGNITE",
        description: "EEGNITE helps Qatar businesses grow through SEO, Google Ads, social media marketing, and performance-driven digital strategies focused on leads, visibility, and measurable ROI.",
        images: ["/eegnite-logo.png"]
    }
};

const qatarFaqs = [
    {
        question: "What Digital Marketing Services Does EEGNITE Offer In Qatar?",
        answer: "EEGNITE offers 360 degree digital marketing services in Qatar including SEO, Google Ads and PPC, social media marketing, email marketing and automation, web design and development, and performance marketing strategy. All services are managed under one integrated strategy in both Arabic and English. We serve businesses across Doha and Qatar with campaigns built specifically for the Qatari market and consumer landscape."
    },
    {
        question: "Does EEGNITE Manage Digital Marketing Campaigns In Arabic?",
        answer: "Yes. EEGNITE manages bilingual campaigns in Arabic and English for Qatar-based clients. This covers Arabic ad copy, Arabic social media content, Arabic landing pages, and keyword strategies targeting Arabic-language search queries in the Qatari market. We ensure cultural accuracy and message quality in both languages rather than relying on translated content that loses its effectiveness across audiences."
    },
    {
        question: "How Does EEGNITE Understand Qatar's Market Specifically?",
        answer: "EEGNITE's Qatar strategy is built around the country's bilingual, multicultural audience, Qatar National Vision 2030 business priorities, and the specific industries driving Doha's economy including real estate, hospitality, F&B, financial services, and retail. We do not apply UAE or Saudi strategies to the Qatari market. Every campaign is built for Qatar's distinct consumer behaviour, platform usage patterns, and business environment."
    },
    {
        question: "How Long Does Digital Marketing Take To Produce Results In Qatar?",
        answer: "Google Ads campaigns in Qatar typically begin generating leads within 7 to 14 days of launch. Meta campaigns need 10 to 21 days for the algorithm's learning phase before performance stabilises. SEO builds meaningful organic visibility within 4 to 6 months in Qatar's competitive market. EEGNITE sets specific channel timelines at the start of every engagement so your expectations are grounded in realistic outcomes."
    },
    {
        question: "What Industries Does EEGNITE Serve In Qatar?",
        answer: "EEGNITE serves businesses across real estate, F&B, hospitality, retail, e-commerce, financial services, professional services, and B2B sectors in Qatar. We understand the buyer journey, platform behaviour, and content approach specific to each industry in the Qatari market. Whether you are a Doha restaurant group, a property developer, or a management consulting firm, we have experience building digital strategies for your sector."
    },
    {
        question: "How Does EEGNITE Measure Digital Marketing Roi For Qatar Businesses?",
        answer: "We install attribution tracking infrastructure before any campaign launches - connecting Google Ads, Meta, your website analytics, and CRM through conversion events and UTM parameters. Monthly reports cover cost per lead, ROAS, qualified pipeline generated, and revenue attributed to digital marketing. You always know exactly which channels and campaigns are producing real business outcomes for your Qatar operation."
    }
];

export default function QatarPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/qatar/"
                pageTitle="Growth-Focused Digital Marketing Agency for Qatar Businesses | EEGNITE"
                pageDescription="EEGNITE helps Qatar businesses grow through SEO, Google Ads, social media marketing, and performance-driven digital strategies focused on leads, visibility, and measurable ROI."
                pageType="location"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Qatar", url: "https://www.eegnite.com/qatar/" }
                ]}
                faqs={qatarFaqs}
            />
            <QatarLandingPageContent />
        </>
    );
}
