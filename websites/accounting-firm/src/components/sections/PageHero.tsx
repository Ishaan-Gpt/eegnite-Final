import { RevealText, Reveal } from "@/components/motion/Reveal";

type PageHeroProps = {
    eyebrow: string;
    title: string;
    description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
    return (
        <section className="bg-white pt-16 pb-14 md:pt-24 md:pb-20 border-b border-navy/[0.06]">
            <div className="mh-container max-w-3xl">
                <Reveal as="span" className="inline-block text-emerald text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                    {eyebrow}
                </Reveal>
                <RevealText as="h1" text={title} className="font-display text-4xl md:text-6xl text-navy leading-[1.1] mb-6" />
                {description && (
                    <Reveal delay={0.15}>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl">{description}</p>
                    </Reveal>
                )}
            </div>
        </section>
    );
}
