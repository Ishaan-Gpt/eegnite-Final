/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
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

export default nextConfig;
