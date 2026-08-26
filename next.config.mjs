import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;

    return {
        output: 'export',
        trailingSlash: true,
        // Dev-only: `next dev`'s public/ passthrough serves exact files only (no
        // directory-index fallback), so a bare `/samples/<site>/<path>/` request
        // 404s even though `.../<path>/index.html` exists. This maps those
        // requests to their index.html so sample sites are browsable locally
        // without a full `npm run build`. Omitted from every other phase because
        // `output: 'export'` does not support rewrites() (and warns if defined).
        ...(isDev && {
            async rewrites() {
                return {
                    beforeFiles: [],
                    afterFiles: [],
                    fallback: [
                        { source: '/samples/:site', destination: '/samples/:site/index.html' },
                        { source: '/samples/:site/', destination: '/samples/:site/index.html' },
                        { source: '/samples/:site/:path*', destination: '/samples/:site/:path*/index.html' },
                    ],
                };
            },
        }),
        typescript: {
            // Temporarily ignore TypeScript errors during build
            ignoreBuildErrors: true,
        },
        eslint: {
            // Temporarily ignore ESLint errors during build
            ignoreDuringBuilds: true,
        },
        images: {
            unoptimized: true,
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'images.unsplash.com',
                },
                {
                    protocol: 'https',
                    hostname: 'ui-avatars.com',
                },
            ],
        },
        // Security Headers

    };
};

export default nextConfig;
