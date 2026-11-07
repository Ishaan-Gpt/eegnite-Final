import type { ReactNode } from "react";

// Shape of one Bahrain service page (see components/page-content/BahrainServicePage.tsx).
// A heading is split into `title` + `accent`; the accent renders in orange.

export type BahrainIcon =
    | "cpu" | "page" | "pin" | "bag" | "megaphone" | "spark" | "clipboard" | "search" | "flag" | "check" | "loop"
    | "target" | "users" | "layout" | "funnel" | "chart" | "cart" | "coins" | "mail" | "code" | "phone" | "gauge"
    | "shield" | "chat" | "camera" | "calendar" | "rocket" | "refresh";

type Split = { title: string; accent: string };
type Item = { title: string; desc: string };

export type BahrainFaq = { q: string; a: ReactNode; text: string };

export type BahrainServiceData = {
    meta: { url: string; title: string; description: string; serviceName: string; serviceDescription: string; serviceCategory: string; crumb: string };
    hero: { eyebrow: string; title: ReactNode; statement: string; description: string };
    pain: Split & { eyebrow: string; image: string; imageAlt: string; items: Item[] };
    bring: Split & { eyebrow: string; intro: string; items: (Item & { img: string; alt: string })[] };
    breakdown: Split & { eyebrow: string; items: (Item & { icon: BahrainIcon })[] };
    industries: { eyebrow: string; items: (Item & { href: string })[] };
    why: { eyebrow: string; subtitle: string; reasons: Item[] };
    process: Split & { eyebrow: string; steps: (Item & { icon: BahrainIcon })[] };
    agency: Split & { eyebrow: string; paragraphs: ReactNode[]; image: string; imageAlt: string };
    faq: Split & { eyebrow: string; items: BahrainFaq[] };
    final: { eyebrow: string; title: string; text: string; secondary: { label: string; href: string } };
};

/** Fills `a` from `text` for answers without links. */
export const faqs = (items: { q: string; text: string; a?: ReactNode }[]): BahrainFaq[] =>
    items.map((f) => ({ ...f, a: f.a ?? f.text }));
