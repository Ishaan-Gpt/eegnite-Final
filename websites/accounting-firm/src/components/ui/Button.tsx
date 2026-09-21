import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    external?: boolean;
    className?: string;
};

const variants: Record<string, string> = {
    primary:
        "bg-navy text-cream hover:bg-navy-700 shadow-soft",
    secondary:
        "bg-transparent border border-navy/20 text-navy hover:border-navy/60",
    ghost:
        "bg-gold/15 text-navy-900 hover:bg-gold/25",
};

export default function Button({ href, children, variant = "primary", external, className = "" }: ButtonProps) {
    const classes = `inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm md:text-base transition-colors duration-300 ${variants[variant]} ${className}`;

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}
