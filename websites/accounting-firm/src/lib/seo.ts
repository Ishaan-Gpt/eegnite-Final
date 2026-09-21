import type { Metadata } from "next";
import { SITE_NAME } from "./constants";

export function buildMetadata(opts: {
    title: string;
    description: string;
    path?: string;
}): Metadata {
    const fullTitle = `${opts.title} | ${SITE_NAME}`;
    return {
        title: fullTitle,
        description: opts.description,
        openGraph: {
            title: fullTitle,
            description: opts.description,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description: opts.description,
        },
    };
}
