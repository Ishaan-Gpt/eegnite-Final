import type { Metadata } from "next";
import ContactPageContent from "@/components/page-content/ContactPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Contact EEGNITE | Start Your Growth Journey",
    description: "Ready to scale? Connect with EEGNITE, Kolkata's premium digital marketing agency. Book a free strategy call today.",
    alternates: {
        canonical: 'https://www.eegnite.com/contact/',
    },
    openGraph: {
        title: "Contact EEGNITE | Start Your Growth Journey",
        description: "Ready to scale? Connect with EEGNITE, Kolkata's premium digital marketing agency. Book a free strategy call today.",
        url: "https://www.eegnite.com/contact/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "Contact EEGNITE"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact EEGNITE | Start Your Growth Journey",
        description: "Ready to scale? Connect with EEGNITE, Kolkata's premium digital marketing agency. Book a free strategy call today.",
        images: ["/eegnite-logo.png"]
    }
};

export default function ContactPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/contact/"
                pageTitle="Contact EEGNITE | Start Your Growth Journey"
                pageDescription="Ready to scale? Connect with EEGNITE, Kolkata's premium digital marketing agency. Book a free strategy call today."
                pageType="contact"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Contact", url: "https://www.eegnite.com/contact/" }
                ]}
            />
            <ContactPageContent />
        </>
    );
}
