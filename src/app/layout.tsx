import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

// Default to production URL if not set
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eegnite.com';

// Prevent indexing on staging/preview environments
// We only index if:
// 1. We are in a production environment (or environment is unknown/manual)
// 2. AND the site URL strictly matches the main production domain
const isEnvironmentProduction = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : true;
const isMainDomain = siteUrl === 'https://eegnite.com' || siteUrl === 'https://www.eegnite.com';

const shouldIndex = isEnvironmentProduction && isMainDomain; // Enable indexing for production

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Digital Marketing Agency in India | Value-driven Solution | EEGNITE",
        template: "%s | EEGNITE"
    },
    description: "EEGNITE is a senior-led digital marketing agency in India helping brands grow through data-driven SEO, web design, social media, and content strategies. Let's connect now.",
    keywords: ["Digital Marketing Agency", "SEO India", "Web Design", "Social Media Marketing", "Content Strategy", "Growth Engine", "Digital Marketing India", "EEGNITE"],
    authors: [{ name: "EEGNITE" }],
    creator: "EEGNITE",
    publisher: "EEGNITE",
    robots: {
        index: shouldIndex,
        follow: shouldIndex,
        googleBot: {
            index: shouldIndex,
            follow: shouldIndex,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/eegnite-logo.png', type: 'image/png' },
        ],
        apple: '/eegnite-logo.png',
    },
    openGraph: {
        title: "EEGNITE | Digital Marketing Agency in India",
        description: "Strategy. Design. Results. All In One Place. Senior-led digital marketing agency helping brands grow.",
        url: siteUrl,
        siteName: "EEGNITE",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: '/eegnite-logo.png',
                width: 1200,
                height: 630,
                alt: 'EEGNITE - Digital Marketing Agency',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "EEGNITE | Digital Marketing Agency in India",
        description: "Strategy. Design. Results. All In One Place.",
        images: ['/eegnite-logo.png'],
    },
    alternates: {
        canonical: siteUrl,
    },
    verification: {
        // Add your verification codes here when you have them
        // google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} lenis lenis-smooth`} suppressHydrationWarning>
            <head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-N45F5Q93');`
                    }}
                />
                {/* End Google Tag Manager */}

                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-KJBKSLHHEX"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-KJBKSLHHEX');
                        `
                    }}
                />

                {/* Meta Pixel Code */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1484480639285174');
                        fbq('track', 'PageView');
                        `
                    }}
                />
                <noscript>
                    <img height="1" width="1" style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=1484480639285174&ev=PageView&noscript=1"
                    />
                </noscript>
                {/* End Meta Pixel Code */}

                {/* Apollo Tracker */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"677a1e61a3f01001b1ebeca8"})},
document.head.appendChild(o)}initApollo();`
                    }}
                />
                {/* End Apollo Tracker */}
            </head>
            <body className="antialiased font-sans" suppressHydrationWarning>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-N45F5Q93"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                {children}
            </body>
        </html >
    );
}
