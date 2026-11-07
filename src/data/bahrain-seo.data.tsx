import Link from "next/link";
import type { ReactNode } from "react";

// Buyer questions for /bahrain/seo-services/, verbatim from the Bahrain SEO doc (section 11).
// Lives outside the "use client" page component so the route can also emit FAQPage schema from it:
// `a` is what the page renders (may hold links), `text` is the plain answer for the schema.
export const BAHRAIN_SEO_FAQS: { q: string; a: ReactNode; text: string }[] = [
    { q: "How should I choose an SEO agency for Bahrain businesses?", text: "Ask how the agency will assess Bahrain search results, prioritize commercial pages, handle language review, and measure inquiry quality. A useful proposal names the work and dependencies before offering a target." },
    { q: "How long will SEO take to produce inquiries?", text: "There is no reliable date for every website. Technical repairs may be observed before commercial growth, while competitive service pages can need sustained work. We establish a baseline and agree on review milestones after examining your site." },
    { q: "How much will the work cost?", text: "Cost depends on the website's condition, number of priority services, content requirements, implementation access, and language scope. We quote the agreed work separately from optional development or additional content. The initial review helps identify a sensible starting scope." },
    { q: "Do we need an AI-powered SEO agency for Bahrain?", text: "The useful question is what the tools will change. AI-assisted research can speed up organization, but your strategy still needs verified facts, technical checks, and commercial judgment. Ask for the workflow and review process, not an AI label alone." },
    { q: "What does an AEO agency do for a Bahrain business?", text: "Answer engine optimization helps make your services and supporting evidence understandable when buyers research questions through search and AI tools. It includes clear answers, accessible pages, consistent business information, and ongoing checks. It cannot guarantee inclusion in an answer." },
    { q: "Can you guarantee first place on Google or an AI recommendation?", text: "No. Search engines and AI platforms decide what appears. We commit to the agreed work, clear reporting, and decisions based on evidence rather than a placement guarantee." },
    { q: "Is Arabic SEO necessary for every Bahrain company?", text: "No. Review the language used by your customers, sales team, existing inquiries, and relevant search results. If Arabic is commercially important, plan separate research and a qualified review. A translated keyword list alone is not a complete language strategy." },
    {
        q: "Should we stop PPC once SEO starts improving?",
        text: "That depends on demand, profitability, and how each channel contributes to sales. Review paid and organic performance together before moving budget. Our PPC service can be considered alongside SEO where a paid test is useful.",
        a: <>That depends on demand, profitability, and how each channel contributes to sales. Review paid and organic performance together before moving budget. <Link href="/services/ppc/" className="text-[#FF6105] underline hover:text-[#C44800]">Our PPC service</Link> can be considered alongside SEO where a paid test is useful.</>,
    },
].map((f) => ({ ...f, a: f.a ?? f.text }));
