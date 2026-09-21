import type { ReactNode } from "react";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <div className={`bg-white rounded-xl2 border border-navy/[0.06] shadow-card p-8 ${className}`}>
            {children}
        </div>
    );
}
