// JSON-LD Structured Data for SEO
// This helps Google understand your business and show rich snippets in search results.
// Strictly compliant with: eegnite_schema_prompt.md

import React from 'react';

// ─── STATIC: Organisation ─────────────────────────────────────────────────────
export const STATIC_ORGANISATION = {
  "@type": "Organization",
  "@id": "https://www.eegnite.com/#organization",
  "name": "EEGNITE",
  "legalName": "EEGNITE Digital Marketing Agency",
  "url": "https://www.eegnite.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.eegnite.com/eegnite-logo.png",
    "width": 390,
    "height": 400
  },
  "description": "EEGNITE is a senior-led digital marketing agency in India that helps brands scale with performance-driven SEO, conversion-focused web design, strategic content marketing, and impactful social media campaigns. Backed by data, creativity, and real industry expertise, EEGNITE builds digital strategies that drive visibility, engagement, and measurable business growth.",
  "founder": {
    "@type": "Person",
    "@id": "https://www.eegnite.com/#founder",
    "name": "Anish Kumar",
    "jobTitle": "Founder & CEO",
    "url": "https://www.linkedin.com/in/anish-kr/",
    "image": "https://www.eegnite.com/anish-founder.png"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rajarhat Chowmatha",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "postalCode": "700135",
    "addressCountry": "IN"
  },
  "knowsAbout": [
    "E-commerce Marketing",
    "B2B & Lead Generation",
    "Medical & Healthcare Marketing",
    "Retail Business Marketing",
    "Manufacturing & Logistics Marketing",
    "Professional Services Marketing"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+91-6289-753-474",
    "contactType": "customer service",
    "email": "anish@eegnite.com",
    "availableLanguage": ["English", "Hindi"],
    "areaServed": ["IN","US","GB","AE","DE","FR","SA","EU","BH","QA","HU","CA"]
  }],
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "Hungary" },
    { "@type": "Country", "name": "Canada" }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/eegnite",
    "https://www.instagram.com/eegnite/",
    "https://www.youtube.com/@EEGNITE",
    "https://wa.me/916289753474"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC Advertising" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design & Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "11",
    "bestRating": "5",
    "worstRating": "4"
  }
};

// ─── STATIC: LocalBusiness / ProfessionalService ──────────────────────────────
export const STATIC_LOCAL_BUSINESS = {
  "@type": "ProfessionalService",
  "@id": "https://www.eegnite.com/#localbusiness",
  "name": "EEGNITE",
  "url": "https://www.eegnite.com/",
  "logo": "https://www.eegnite.com/eegnite-logo.png",
  "description": "EEGNITE is a performance-driven full-service digital marketing agency providing data-driven SEO, PPC advertising, social media marketing, web design & development, and email marketing.",
  "telephone": "+91-6289-753-474",
  "email": "anish@eegnite.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rajarhat Chowmatha",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "postalCode": "700135",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.6146,
    "longitude": 88.4673
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "10:30",
      "closes": "19:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday","Sunday"],
      "opens": "00:00",
      "closes": "00:00"
    }
  ],
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "Hungary" },
    { "@type": "Country", "name": "Canada" }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/eegnite",
    "https://medium.com/@eegnite",
    "https://www.youtube.com/@EEGNITE"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC Advertising" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design & Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing" } }
    ]
  }
};

// ─── INTERFACES ─────────────────────────────────────────────────────────────
export interface BreadcrumbItem {
  position: number;
  name: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface UnifiedSchemaProps {
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
  pageType: 'generic' | 'service' | 'industry' | 'blog' | 'article' | 'about' | 'contact' | 'location';
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  
  // Service details
  serviceName?: string;
  serviceDescription?: string;
  serviceCategory?: string;

  // Blog/Article details
  datePublished?: string;
  dateModified?: string;
  featuredImageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
}

// ─── UNIFIED DYNAMIC SCHEMA GENERATOR ─────────────────────────────────────────
export function UnifiedSchemaJsonLd({
  pageUrl,
  pageTitle,
  pageDescription,
  pageType,
  breadcrumbs = [],
  faqs = [],
  serviceName,
  serviceDescription,
  serviceCategory,
  datePublished,
  dateModified,
  featuredImageUrl,
  imageWidth,
  imageHeight,
  imageAlt
}: UnifiedSchemaProps) {
  
  // 1. Determine WebPage specific @type
  let webPageType = "WebPage";
  if (pageType === "about") webPageType = "AboutPage";
  else if (pageType === "contact") webPageType = "ContactPage";
  else if (pageType === "industry") webPageType = "CollectionPage";

  // 2. Base dynamic nodes
  const dynamicNodes: any[] = [
    // WebSite Node
    {
      "@type": "WebSite",
      "@id": "https://www.eegnite.com/#website",
      "url": "https://www.eegnite.com/",
      "name": "EEGNITE",
      "description": "Digital Marketing Agency in India | Value-driven Solution | EEGNITE",
      "publisher": {
        "@id": "https://www.eegnite.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.eegnite.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en"
    },
    // WebPage Node
    {
      "@type": webPageType,
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": pageTitle,
      "isPartOf": {
        "@id": "https://www.eegnite.com/#website"
      },
      "description": pageDescription,
      "inLanguage": "en",
      "breadcrumb": breadcrumbs.length > 0 ? {
        "@id": `${pageUrl}#breadcrumb`
      } : undefined
    }
  ];

  // 3. Breadcrumb Node
  if (breadcrumbs.length > 0) {
    dynamicNodes.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      "itemListElement": breadcrumbs.map((b) => ({
        "@type": "ListItem",
        "position": b.position,
        "name": b.name,
        "item": b.url
      }))
    });
  }

  // 4. FAQ Node
  if (faqs.length > 0) {
    dynamicNodes.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  // 5. Service Node
  if (pageType === "service" && serviceName) {
    dynamicNodes.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      "name": serviceName,
      "description": serviceDescription || pageDescription,
      "provider": {
        "@id": "https://www.eegnite.com/#organization"
      },
      "category": serviceCategory || "Digital Marketing Services",
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Germany" },
        { "@type": "Country", "name": "United Arab Emirates" }
      ]
    });
  }

  // 6. BlogPosting Node
  if (pageType === "blog") {
    dynamicNodes.push({
      "@type": "BlogPosting",
      "@id": `${pageUrl}#blogposting`,
      "headline": pageTitle,
      "description": pageDescription,
      "datePublished": datePublished || new Date().toISOString(),
      "dateModified": dateModified || datePublished || new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": pageUrl
      },
      "author": {
        "@type": "Person",
        "@id": "https://www.eegnite.com/#founder",
        "name": "Anish Kumar",
        "url": "https://www.linkedin.com/in/anish-kr/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "EEGNITE",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.eegnite.com/eegnite-logo.png"
        }
      },
      "image": featuredImageUrl ? {
        "@type": "ImageObject",
        "url": featuredImageUrl,
        "width": imageWidth || 1200,
        "height": imageHeight || 630,
        "caption": imageAlt || pageTitle
      } : undefined
    });
  }

  // 7. Article Node
  if (pageType === "article") {
    dynamicNodes.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      "headline": pageTitle,
      "description": pageDescription,
      "datePublished": datePublished || new Date().toISOString(),
      "dateModified": dateModified || datePublished || new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": pageUrl
      },
      "author": {
        "@type": "Person",
        "@id": "https://www.eegnite.com/#founder",
        "name": "Anish Kumar",
        "url": "https://www.linkedin.com/in/anish-kr/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "EEGNITE",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.eegnite.com/eegnite-logo.png"
        }
      },
      "image": featuredImageUrl ? {
        "@type": "ImageObject",
        "url": featuredImageUrl,
        "width": imageWidth || 1200,
        "height": imageHeight || 630,
        "caption": imageAlt || pageTitle
      } : undefined
    });
  }

  // 8. Static Node Injection Logic (All pages except blog pages get static nodes)
  const isBlog = pageType === "blog";
  const fullGraph = isBlog
    ? [...dynamicNodes]
    : [STATIC_ORGANISATION, STATIC_LOCAL_BUSINESS, ...dynamicNodes];

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": fullGraph
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
    />
  );
}

// ─── BACKWARDS COMPATIBILITY STATIC LOGICS ──────────────────────────────────
export function OrganizationJsonLd() {
  const schemaJson = {
    "@context": "https://schema.org",
    ...STATIC_ORGANISATION
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
    />
  );
}

export function WebsiteJsonLd() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.eegnite.com/#website",
    "url": "https://www.eegnite.com/",
    "name": "EEGNITE",
    "description": "Digital Marketing Agency in India | Value-driven Solution | EEGNITE",
    "publisher": {
      "@id": "https://www.eegnite.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.eegnite.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en"
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schemaJson = {
    "@context": "https://schema.org",
    ...STATIC_LOCAL_BUSINESS
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
    />
  );
}
