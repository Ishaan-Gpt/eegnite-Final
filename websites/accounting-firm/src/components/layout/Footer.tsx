import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE, CONTACT, FOOTER_LINKS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Footer() {
    return (
        <footer className="bg-navy text-cream/80 pt-20 pb-10">
            <div className="mh-container">
                <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-16 border-b border-cream/10">
                    <div>
                        <Logo variant="light" className="mb-5" />
                        <p className="text-sm leading-relaxed max-w-xs text-cream/60">{SITE_TAGLINE}</p>
                    </div>

                    <FooterCol title="Firm" links={FOOTER_LINKS.firm} />
                    <FooterCol title="Services" links={FOOTER_LINKS.services} />

                    <div>
                        <h4 className="text-cream text-sm font-semibold tracking-wide uppercase mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-cream/60">
                            <li>{CONTACT.address}</li>
                            <li>
                                <a href={CONTACT.phoneHref} className="hover:text-cream transition-colors">
                                    {CONTACT.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${CONTACT.email}`} className="hover:text-cream transition-colors">
                                    {CONTACT.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40">
                    <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        {FOOTER_LINKS.legal.map((l) => (
                            <Link key={l.href} href={l.href} className="hover:text-cream/70 transition-colors">
                                {l.label}
                            </Link>
                        ))}
                    </div>
                    <p className="text-cream/30">Sample project by EEGNITE — for demonstration purposes only.</p>
                </div>
            </div>
        </footer>
    );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
    return (
        <div>
            <h4 className="text-cream text-sm font-semibold tracking-wide uppercase mb-4">{title}</h4>
            <ul className="space-y-3 text-sm text-cream/60">
                {links.map((l) => (
                    <li key={l.href}>
                        <Link href={l.href} className="hover:text-cream transition-colors">
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
