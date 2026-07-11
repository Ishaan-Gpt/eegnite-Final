import type { Metadata } from "next";
import KolkataWebdevPageContent from "@/components/page-content/KolkataWebdevPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Web Design and Development Services in Kolkata | EEGNITE",
    description: "EEGNITE builds high-converting websites for Kolkata businesses - custom design, WordPress, e-commerce, landing pages, and speed optimisation. Free audit available.",
    alternates: {
        canonical: "https://www.eegnite.com/digital-marketing-agency-kolkata/web-design-development/",
    },
    openGraph: {
        title: "Web Design and Development Services in Kolkata | EEGNITE",
        description: "EEGNITE builds high-converting websites for Kolkata businesses - custom design, WordPress, e-commerce, landing pages, and speed optimisation. Free audit available.",
        url: "https://www.eegnite.com/digital-marketing-agency-kolkata/web-design-development/",
        type: "website",
        images: [
            {
                url: "/images/logos/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Kolkata Web Design & Development"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Design and Development Services in Kolkata | EEGNITE",
        description: "EEGNITE builds high-converting websites for Kolkata businesses - custom design, WordPress, e-commerce, landing pages, and speed optimisation. Free audit available.",
        images: ["/images/logos/eegnite-logo.png"]
    }
};

const WEBDEV_FAQS = [
    { q: "How much does a website cost in Kolkata?", a: "Website projects start at INR 25,000 for focused landing pages. For full business websites, pricing typically starts from INR 40,000, with the final cost depending on the number of pages, required functionality, CMS setup, and overall project scope." },
    { q: "How long does it take to build a website?", a: "A standard business website usually takes 3 to 6 weeks from planning and design to final launch. More complex e-commerce websites or custom builds can take 6 to 12 weeks depending on features and integrations." },
    { q: "Will my website be optimised for SEO from day one?", a: "Yes. Every website is built with technical SEO fundamentals in place, including clean site structure, proper heading hierarchy, mobile responsiveness, and a search-friendly meta setup from the start." },
    { q: "Can EEGNITE redesign my existing Kolkata business website?", a: "Yes. We begin with an audit of your current website to identify issues in design, speed, SEO, and conversion performance, then redesign it to improve both user experience and business results." },
    { q: "Do you provide ongoing support after the website launches?", a: "Yes. We offer ongoing support for website maintenance, security updates, performance checks, and content updates to keep your website secure, fast, and functioning properly after launch." }
];

export default function KolkataWebdevPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/digital-marketing-agency-kolkata/web-design-development/"
                pageTitle="Web Design and Development Services in Kolkata | EEGNITE"
                pageDescription="EEGNITE builds high-converting websites for Kolkata businesses - custom design, WordPress, e-commerce, landing pages, and speed optimisation. Free audit available."
                pageType="service"
                serviceName="Kolkata Web Design & Development Services"
                serviceDescription="EEGNITE builds high-converting websites for Kolkata businesses including custom design, WordPress, e-commerce, landing pages, and page speed optimization."
                serviceCategory="Web Design & Development Services"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Kolkata", url: "https://www.eegnite.com/digital-marketing-agency-kolkata/" },
                    { position: 3, name: "Web Design & Development", url: "https://www.eegnite.com/digital-marketing-agency-kolkata/web-design-development/" }
                ]}
                faqs={WEBDEV_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <KolkataWebdevPageContent />
        </>
    );
}
