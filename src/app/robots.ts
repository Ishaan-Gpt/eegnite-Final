import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    const isProduction = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : true;

    if (!isProduction) {
        return {
            rules: {
                userAgent: '*',
                allow: '/', // Allow crawling so Google sees 'noindex' meta tag
                disallow: '/private/',
            }
        }
    }

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/blog-staging/'],
        },
        sitemap: 'https://eegnite.com/sitemap.xml',
    }
}
