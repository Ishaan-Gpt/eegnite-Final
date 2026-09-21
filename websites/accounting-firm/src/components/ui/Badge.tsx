import type { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald/10 text-emerald text-xs font-semibold tracking-wide uppercase">
            {children}
        </span>
    );
}
