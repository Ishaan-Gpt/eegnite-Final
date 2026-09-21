"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-navy/[0.06]">
            <div className="mh-container flex items-center justify-between h-20">
                <Logo variant="dark" onClick={() => setOpen(false)} />

                <nav className="hidden lg:flex items-center gap-9">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <a href={CONTACT.phoneHref} className="text-sm font-medium text-navy/70 hover:text-navy transition-colors">
                        {CONTACT.phone}
                    </a>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 bg-navy text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-navy-700 transition-colors shadow-soft"
                    >
                        Book a Consultation <ArrowUpRight size={15} />
                    </Link>
                </div>

                <button
                    className="lg:hidden text-navy"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden border-t border-navy/[0.06] bg-cream">
                    <nav className="mh-container flex flex-col py-6 gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="py-3 text-base font-medium text-navy border-b border-navy/[0.05] last:border-0"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="mt-4 inline-flex items-center justify-center gap-1.5 bg-navy text-cream px-5 py-3 rounded-full text-sm font-medium"
                        >
                            Book a Consultation <ArrowUpRight size={15} />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
