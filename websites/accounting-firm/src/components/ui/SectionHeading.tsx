type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
    const alignment = align === "center" ? "text-center mx-auto" : "text-left";

    return (
        <div className={`max-w-2xl ${alignment} mb-12 md:mb-16`}>
            {eyebrow && (
                <span className="block text-emerald text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-display font-medium text-navy leading-[1.1] mb-4">
                {title}
            </h2>
            {description && (
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">{description}</p>
            )}
        </div>
    );
}
