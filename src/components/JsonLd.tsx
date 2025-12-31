// JSON-LD Structured Data for SEO
// This helps Google understand your business and show rich snippets in search results

export function OrganizationJsonLd() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'EEGNITE',
        description: 'Senior-led digital marketing agency in India helping brands grow through data-driven SEO, web design, social media, and content strategies.',
        url: 'https://eegnite.com',
        logo: 'https://eegnite.com/eegnite-logo.png',
        sameAs: [
            // Add your social media URLs here
            // 'https://www.linkedin.com/company/eegnite',
            // 'https://twitter.com/eegnite',
            // 'https://www.instagram.com/eegnite',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: ['English', 'Hindi'],
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
        },
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        founder: {
            '@type': 'Person',
            name: 'EEGNITE Team',
        },
        foundingDate: '2024',
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: '10-50',
        },
        slogan: 'Strategy. Design. Results.',
        knowsAbout: [
            'Digital Marketing',
            'SEO',
            'Web Design',
            'Social Media Marketing',
            'Content Strategy',
            'Brand Development',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}

export function WebsiteJsonLd() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'EEGNITE',
        url: 'https://eegnite.com',
        description: 'Digital Marketing Agency in India | Value-driven Solution | EEGNITE',
        publisher: {
            '@type': 'Organization',
            name: 'EEGNITE',
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://eegnite.com/?s={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}

export function LocalBusinessJsonLd() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'EEGNITE - Digital Marketing Agency',
        description: 'Senior-led digital marketing agency helping brands grow through data-driven strategies.',
        url: 'https://eegnite.com',
        logo: 'https://eegnite.com/eegnite-logo.png',
        image: 'https://eegnite.com/eegnite-logo.png',
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            // Add your coordinates if you have a physical location
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
        serviceArea: {
            '@type': 'Country',
            name: 'India',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Digital Marketing Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'SEO Services',
                        description: 'Data-driven SEO strategies for organic growth',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Web Design',
                        description: 'Modern, responsive web design and development',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Social Media Marketing',
                        description: 'Strategic social media management and advertising',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Content Strategy',
                        description: 'Content creation and marketing strategies',
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
