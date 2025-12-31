import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://eegnite.com/sitemap.xml', // Assuming eegnite.com is the domain, update if different
    }
}
