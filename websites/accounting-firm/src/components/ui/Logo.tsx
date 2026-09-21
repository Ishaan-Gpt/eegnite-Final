import Link from "next/link";

type LogoProps = {
    variant?: "dark" | "light";
    showWordmark?: boolean;
    className?: string;
    onClick?: () => void;
};

/**
 * Three ascending bars (growth) with a trendline node marking the peak —
 * a finance-legible mark, deliberately not a generic initials badge.
 */
export default function Logo({ variant = "dark", showWordmark = true, className = "", onClick }: LogoProps) {
    const ink = variant === "dark" ? "#0F2A3D" : "#FAF7F1";
    const frame = variant === "dark" ? "rgba(15,42,61,0.12)" : "rgba(250,247,241,0.18)";
    const accent = "#C9A34E";

    return (
        <Link href="/" onClick={onClick} className={`inline-flex items-center gap-3 group ${className}`} aria-label="Meridian & Hale — Home">
            <svg width="38" height="38" viewBox="0 0 44 44" fill="none" className="shrink-0">
                <rect x="1" y="1" width="42" height="42" rx="13" stroke={frame} strokeWidth="1.5" />
                <rect x="10" y="24" width="5" height="11" rx="1.5" fill={ink} opacity="0.55" />
                <rect x="19.5" y="17" width="5" height="18" rx="1.5" fill={ink} opacity="0.8" />
                <rect x="29" y="9" width="5" height="26" rx="1.5" fill={accent} />
                <circle cx="31.5" cy="9" r="3" fill="none" stroke={accent} strokeWidth="1.4" />
                <circle cx="31.5" cy="9" r="1.1" fill={accent} />
            </svg>
            {showWordmark && (
                <span className="flex flex-col leading-none">
                    <span
                        className="font-display text-lg tracking-tight"
                        style={{ color: ink }}
                    >
                        Meridian &amp; Hale
                    </span>
                    <span
                        className="text-[10px] font-medium tracking-[0.2em] uppercase mt-1"
                        style={{ color: variant === "dark" ? "#4C5A64" : "rgba(250,247,241,0.55)" }}
                    >
                        Accounting &amp; Advisory
                    </span>
                </span>
            )}
        </Link>
    );
}
