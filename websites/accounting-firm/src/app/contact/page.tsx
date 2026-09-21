import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CONTACT } from "@/lib/constants";

const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), {
    loading: () => <div className="min-h-[520px] rounded-xl2 bg-white border border-navy/[0.06] animate-pulse" />,
});

export const metadata = buildMetadata({
    title: "Contact Us",
    description: "Get in touch with Meridian & Hale for a free consultation about your accounting, tax, or advisory needs.",
    path: "/contact",
});

const DETAILS = [
    { icon: MapPin, label: "Office", value: CONTACT.address },
    { icon: Phone, label: "Phone", value: CONTACT.phone },
    { icon: Mail, label: "Email", value: CONTACT.email },
    { icon: Clock, label: "Hours", value: "Mon–Fri, 8:30am–5:30pm PT" },
];

export default function ContactPage() {
    return (
        <main>
            <PageHero
                eyebrow="Contact"
                title="Let's start with a conversation."
                description="Tell us a bit about your business and we'll follow up within one business day to schedule your free consultation."
            />

            <section className="py-16 md:py-24 bg-cream">
                <div className="mh-container grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
                    <div>
                        <RevealGroup className="space-y-6 mb-10" stagger={0.08}>
                            {DETAILS.map((d) => (
                                <RevealItem key={d.label} className="flex items-start gap-4">
                                    <span className="w-11 h-11 rounded-full bg-navy/[0.05] flex items-center justify-center text-navy shrink-0">
                                        <d.icon size={18} />
                                    </span>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide uppercase text-slate-400 mb-1">{d.label}</p>
                                        <p className="text-navy">{d.value}</p>
                                    </div>
                                </RevealItem>
                            ))}
                        </RevealGroup>

                        <Reveal delay={0.15}>
                            <div className="relative rounded-xl2 overflow-hidden border border-navy/[0.06] h-56 bg-navy/[0.04] flex items-center justify-center">
                                <div
                                    className="absolute inset-0 opacity-40"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(15,42,61,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,42,61,0.08) 1px, transparent 1px)",
                                        backgroundSize: "28px 28px",
                                    }}
                                />
                                <span className="relative z-10 flex items-center gap-2 text-navy/60 text-sm font-medium">
                                    <MapPin size={16} /> 148 Bush Street, San Francisco
                                </span>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.1}>
                        <ContactForm />
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
