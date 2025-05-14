import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    // Basic Metadata
    title: "Grind Dev | Leading Software Development Company in Ethiopia",
    description: "Grind Dev delivers enterprise-grade software solutions, AI-powered development tools, and digital transformation services for businesses across Africa. Based in Ethiopia, we specialize in custom software development, mobile applications, and cloud solutions.",
    
    // Keywords and categorization
    keywords: ["software development Ethiopia", "enterprise software solutions", "custom software Ethiopia", "AI development tools", "digital transformation Africa", "Ethiopian tech company", "mobile app development", "cloud solutions Africa", "software consulting Ethiopia", "Grind Dev", "tech innovation Addis Ababa", "African software experts", "business automation Ethiopia"],
    
    // Open Graph metadata for social sharing
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://grinddev.com",
        siteName: "Grind Dev",
        title: "Grind Dev | Enterprise Software Solutions in Ethiopia",
        description: "Ethiopia's premier software development company specializing in enterprise solutions, AI tools, and digital transformation services across Africa.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Grind Dev - Leading Software Development in Ethiopia",
            },
        ],
    },
    
    // Twitter card metadata
    twitter: {
        card: "summary_large_image",
        site: "@GrindDevEthiopia",
        creator: "@GrindDevEthiopia",
        title: "Grind Dev | Enterprise Software Solutions",
        description: "Transforming businesses across Africa with cutting-edge software solutions. Ethiopia's leading software development company.",
        images: ["/images/twitter-image.jpg"],
    },
    
    // Additional metadata
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    
    // Canonical URL
    alternates: {
        canonical: "https://grinddev.com",
        languages: {
            'en': "https://grinddev.com",
            'am': "https://grinddev.com/am", // Amharic version
        },
    },
    
    // Verification for search engines
    verification: {
        google: "google-site-verification-code",
        yandex: "yandex-verification-code",
      
    },
    
    // Region and language
    category: "technology",
    applicationName: "Grind Dev",
    referrer: "origin-when-cross-origin",
    creator: "Grind Dev Team",
    publisher: "Grind Dev",
    formatDetection: {
        telephone: true,
        date: true,
        address: true,
        email: true,
        url: true,
    },
    
    // Geo tags
    // Additional industry-specific metadata
    other: {
        "geo.region": "ET",
        "geo.placename": "Addis Ababa",
        "geo.position": "9.0222;38.7468",
        "ICBM": "9.0222, 38.7468",
        "industry": "Software Development, Information Technology",
        "target:audience": "Businesses, Enterprises, Startups, Government Agencies",
        "business:contact_data:country_name": "Ethiopia",
        "business:contact_data:locality": "Addis Ababa",
        "business:contact_data:region": "Addis Ababa",
        "business:contact_data:email": "contact@grinddev.com",
        "business:contact_data:phone_number": "+251-11-123-4567",
        "og:locale:alternate": "am_ET",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Structured data for rich results */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Grind Dev",
                            "url": "https://grinddev.com",
                            "logo": "https://grinddev.com/images/logo.png",
                            "sameAs": [
                                "https://www.facebook.com/grinddevethiopia",
                                "https://www.twitter.com/grinddevethiopia",
                                "https://www.linkedin.com/company/grinddev",
                                "https://www.instagram.com/grinddevethiopia"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+251-11-123-4567",
                                "contactType": "customer service",
                                "availableLanguage": ["English", "Amharic"]
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Bole Road, Friendship Building",
                                "addressLocality": "Addis Ababa",
                                "addressRegion": "Addis Ababa",
                                "postalCode": "1000",
                                "addressCountry": "ET"
                            },
                            "description": "Ethiopia's leading software development company specializing in enterprise solutions, AI tools, and digital transformation services across Africa.",
                            "foundingDate": "2018",
                            "foundingLocation": "Addis Ababa, Ethiopia",
                            "areaServed": ["Ethiopia", "East Africa", "Africa"],
                            "award": "Top Tech Innovator in East Africa 2023",
                            "knowsLanguage": ["English", "Amharic"],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Software Development Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Custom Software Development"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Mobile App Development"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "AI Solutions"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
                
                {/* Additional schema for software application */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "url": "https://grinddev.com/",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://grinddev.com/search?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />
                
                {/* Preconnect to important domains */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                
                {/* Favicon and app icons */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#eab308" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="theme-color" content="#000000" />
                
                {/* Hreflang tags for language/region targeting */}
                <link rel="alternate" hrefLang="en" href="https://grinddev.com" />
                <link rel="alternate" hrefLang="am" href="https://grinddev.com/am" />
                <link rel="alternate" hrefLang="x-default" href="https://grinddev.com" />
            </head>
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
            >
                {children}
            </body>
        </html>
    );
}
