import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    // Staging deploys (SITE_ENV=staging) block all crawlers.
    if (process.env.SITE_ENV === 'staging') {
        return { rules: { userAgent: '*', disallow: '/' } };
    }

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://www.eegnite.com/sitemap.xml',
    }
}
