import { Metadata } from "next";
import KolkataLandingPageContent from "@/components/page-content/KolkataLandingPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Revenue Driven Digital Marketing Agency in Kolkata | EEGNITE",
    description: "Looking for the best digital marketing agency in Kolkata? EEGNITE delivers SEO, PPC, social media, and performance marketing built for real business growth. Book your free strategy call.",
    alternates: {
        canonical: "https://www.eegnite.com/kolkata/",
    },
    openGraph: {
        title: "Revenue Driven Digital Marketing Agency in Kolkata | EEGNITE",
        description: "Looking for the best digital marketing agency in Kolkata? EEGNITE delivers SEO, PPC, social media, and performance marketing built for real business growth. Book your free strategy call.",
        url: "https://www.eegnite.com/kolkata/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Digital Marketing Agency in Kolkata"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Revenue Driven Digital Marketing Agency in Kolkata | EEGNITE",
        description: "Looking for the best digital marketing agency in Kolkata? EEGNITE delivers SEO, PPC, social media, and performance marketing built for real business growth. Book your free strategy call.",
        images: ["/eegnite-logo.png"]
    }
};

const kolkataFaqs = [
    {
        question: "What Digital Marketing Services Does EEGNITE Offer In Kolkata?",
        answer: "EEGNITE offers 360 degree digital marketing in Kolkata including SEO, Google Ads and PPC, social media marketing, email marketing and automation, web design and development, and performance marketing strategy. All services are managed by one dedicated team under one integrated strategy - so every channel works together. We serve businesses across Kolkata from our base in the city."
    },
    {
        question: "Why Should I Choose EEGNITE Over Other Digital Marketing Agencies In Kolkata?",
        answer: "Most digital marketing agencies in Kolkata sell packages and send monthly reports full of metrics that do not connect to your revenue. EEGNITE builds integrated revenue-tied strategies, holds itself accountable to real business outcomes, and operates with complete transparency on budget and performance. We have experience in the Kolkata market across retail, B2B, healthcare, and professional services."
    },
    {
        question: "How Long Before I See Results From Digital Marketing In Kolkata?",
        answer: "Google Ads and Meta campaigns begin generating leads within 7 to 14 days of launch. SEO in Kolkata's competitive market builds meaningful organic traffic within 3 to 5 months. Email automation flows produce results from the week they go live. EEGNITE sets channel-specific timelines at the start of every engagement so your expectations are grounded from day one."
    },
    {
        question: "Does EEGNITE Work With Businesses Outside Kolkata As Well?",
        answer: "Yes. EEGNITE is based in Kolkata and manages digital marketing campaigns for clients across India including Mumbai, Delhi, Bangalore, and Hyderabad, as well as internationally across the United States, Europe, and the Middle East. Our Kolkata base gives us deep local market expertise while our team structure allows us to manage campaigns effectively in any market."
    },
    {
        question: "What Industries Does EEGNITE Serve In Kolkata?",
        answer: "EEGNITE serves e-commerce, B2B and lead generation, medical and healthcare, retail, manufacturing and logistics, and professional services including law firms, financial advisors, and management consultants. We have built campaigns for Kolkata businesses ranging from single-location retailers to multi-market B2B manufacturers. If your business needs digital marketing, we have experience in your sector."
    },
    {
        question: "How Does EEGNITE Measure And Report Results?",
        answer: "We build full attribution tracking before any campaign launches - connecting ad platforms, your website analytics, and CRM through conversion events and UTM parameters. Fortnightly updates keep you informed on active performance. Monthly reports cover cost per lead, ROAS, organic traffic growth, and revenue attributed to digital marketing. You always know exactly what your investment is delivering."
    }
];

export default function KolkataPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/kolkata/"
                pageTitle="Revenue Driven Digital Marketing Agency in Kolkata | EEGNITE"
                pageDescription="Looking for the best digital marketing agency in Kolkata? EEGNITE delivers SEO, PPC, social media, and performance marketing built for real business growth. Book your free strategy call."
                pageType="location"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Kolkata", url: "https://www.eegnite.com/kolkata/" }
                ]}
                faqs={kolkataFaqs}
            />
            <KolkataLandingPageContent />
        </>
    );
}
