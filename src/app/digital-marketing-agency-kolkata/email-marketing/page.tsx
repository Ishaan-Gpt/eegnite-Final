import type { Metadata } from "next";
import KolkataEmailPageContent from "@/components/page-content/KolkataEmailPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "ROI-Focused Email Marketing Services in Kolkata | EEGNITE",
    description: "Email marketing services in Kolkata designed to increase engagement, nurture leads, and drive repeat sales - powered by EEGNITE with automation, and CRM integration.",
    alternates: {
        canonical: "https://www.eegnite.com/digital-marketing-agency-kolkata/email-marketing/",
    },
    openGraph: {
        title: "ROI-Focused Email Marketing Services in Kolkata | EEGNITE",
        description: "Email marketing services in Kolkata designed to increase engagement, nurture leads, and drive repeat sales - powered by EEGNITE with automation, and CRM integration.",
        url: "https://www.eegnite.com/digital-marketing-agency-kolkata/email-marketing/",
        type: "website",
        images: [
            {
                url: "/images/logos/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Kolkata Email Marketing"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "ROI-Focused Email Marketing Services in Kolkata | EEGNITE",
        description: "Email marketing services in Kolkata designed to increase engagement, nurture leads, and drive repeat sales - powered by EEGNITE with automation, and CRM integration.",
        images: ["/images/logos/eegnite-logo.png"]
    }
};

const EMAIL_FAQS = [
    { q: "How much do email marketing services cost in Kolkata?", a: "Our email marketing services in Kolkata start from INR 25,000 per month for a managed email engagement covering strategy, campaign planning, content creation, and performance reporting. The investment varies based on the level of automation required, number of campaigns per month, and CRM integration complexity." },
    { q: "Which email marketing platforms does EEGNITE work with?", a: "We work with Mailchimp, Klaviyo, HubSpot, ActiveCampaign, Brevo, ConvertKit, and other leading platforms. We can manage your existing platform or recommend the best option based on your business goals" },
    { q: "How long does email marketing take to show results?", a: "Promotional campaigns can generate engagement within 24-48 hours. Automation flows often start producing results immediately after launch, while list growth and optimisation efforts typically show stronger impact within 4-8 weeks." },
    { q: "Can email marketing work for a small business in Kolkata?", a: "Absolutely. Email marketing is one of the most cost-effective channels for small and medium-sized businesses, helping generate repeat sales, improve customer retention, and maximise the value of existing leads." },
    { q: "What is the difference between email marketing and marketing automation?", a: "Email marketing includes newsletters, promotions, and regular customer communications. Marketing automation uses trigger-based workflows that send emails automatically based on user actions. Together, they create a scalable system for engagement and revenue growth." }
];

export default function KolkataEmailPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/digital-marketing-agency-kolkata/email-marketing/"
                pageTitle="ROI-Focused Email Marketing Services in Kolkata | EEGNITE"
                pageDescription="Email marketing services in Kolkata designed to increase engagement, nurture leads, and drive repeat sales - powered by EEGNITE with automation, and CRM integration."
                pageType="service"
                serviceName="Kolkata Email Marketing Services"
                serviceDescription="EEGNITE delivers email marketing services for Kolkata businesses designed to increase engagement, nurture leads, and drive repeat sales through automation and CRM integration."
                serviceCategory="Email Marketing Services"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Kolkata", url: "https://www.eegnite.com/digital-marketing-agency-kolkata/" },
                    { position: 3, name: "Email Marketing", url: "https://www.eegnite.com/digital-marketing-agency-kolkata/email-marketing/" }
                ]}
                faqs={EMAIL_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <KolkataEmailPageContent />
        </>
    );
}
