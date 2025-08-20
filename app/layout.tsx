import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import UniversalPreloader from "@/components/UniversalPreloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TEDxIEM Salt Lake 2025 - CTRL+ALT+DEL: Redefining Possibilities",
    template: "%s | TEDxIEM Salt Lake 2025"
  },
  description: "Join TEDxIEM Salt Lake 2025 on August 22nd for an inspiring day of ideas worth spreading. Our theme CTRL+ALT+DEL challenges conventional thinking and redefines possibilities. Experience transformative talks from innovative speakers at Institute of Engineering & Management, Kolkata.",
  keywords: [
    "TEDx",
    "TEDxIEM",
    "TEDx Salt Lake",
    "TEDx Kolkata",
    "CTRL ALT DEL",
    "ideas worth spreading",
    "innovation",
    "technology conference",
    "IEM Kolkata",
    "August 2025",
    "inspiring talks",
    "transformative ideas",
    "student conference",
    "engineering conference"
  ],
  authors: [{ name: "TEDxIEM Salt Lake Organizing Committee" }],
  creator: "TEDxIEM Salt Lake Team",
  publisher: "Institute of Engineering & Management, Salt Lake",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tedxiemsaltlake.com",
    title: "TEDxIEM Salt Lake 2025 - CTRL+ALT+DEL: Redefining Possibilities",
    description: "Join us for an inspiring day of ideas worth spreading. Experience transformative talks from innovative speakers on August 22, 2025 at IEM Salt Lake, Kolkata.",
    siteName: "TEDxIEM Salt Lake",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TEDxIEM Salt Lake 2025 - CTRL+ALT+DEL"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TEDxIEM Salt Lake 2025 - CTRL+ALT+DEL",
    description: "Join us for an inspiring day of ideas worth spreading on August 22, 2025",
    images: ["/images/twitter-card.jpg"],
    creator: "@TEDxIEMSaltLake"
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
  alternates: {
    canonical: "https://tedxiemsaltlake.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "TEDxIEM Salt Lake 2025",
    "description": "An inspiring day of ideas worth spreading with the theme CTRL+ALT+DEL: Redefining Possibilities",
    "startDate": "2025-08-22T10:30:00+05:30",
    "endDate": "2025-08-22T13:40:00+05:30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Institute of Engineering & Management",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector V, Salt Lake",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "postalCode": "700091",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.5735",
        "longitude": "88.4333"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "TEDxIEM Salt Lake",
      "url": "https://tedxiemsaltlake.com"
    },
    "performer": {
      "@type": "Organization",
      "name": "TEDxIEM Salt Lake Speakers"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://forms.gle/oFF2hszfpt3vicYH8",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01"
    },
    "image": "https://tedxiemsaltlake.com/images/logo/TED Event Logo.png"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://tedxiemsaltlake.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#E62B1E" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional meta tags for better indexing */}
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata" />
        <meta name="geo.position" content="22.5735;88.4333" />
        <meta name="ICBM" content="22.5735, 88.4333" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UniversalPreloader />
        <Header />
        {children}
        
      </body>
    </html>
  );
}
