import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const isProduction = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : true;
    if (!isProduction) return [];

    const baseUrl = 'https://eegnite.com' // Replace with your actual domain

    // You can add more dynamic routes here if needed
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        // Add other relevant pages like /services, /about, /contact if they exist as separate routes
    ]
}
