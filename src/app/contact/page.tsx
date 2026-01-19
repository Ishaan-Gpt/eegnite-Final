import type { Metadata } from "next";
import ContactPageContent from "@/components/page-content/ContactPageContent";

export const metadata: Metadata = {
    title: "Contact EEGNITE | Start Your Growth Journey",
    description: "Ready to scale? Connect with EEGNITE, Kolkata's premium digital marketing agency. Book a free strategy call today.",
    alternates: {
        canonical: 'https://eegnite.com/contact',
    },
};

export default function ContactPage() {
    return <ContactPageContent />;
}
