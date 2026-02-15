import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Glamour Girls Cleaning Company | Professional House Cleaning in Orlando, FL",
  description:
    "Two best friends delivering superb-quality residential cleaning in Orlando & Central Florida. Standard cleaning, deep cleaning, move in/out. Call (786) 239-9932 for a free quote.",
  keywords: [
    "house cleaning Orlando",
    "cleaning services Orlando FL",
    "residential cleaning Orlando",
    "deep cleaning Orlando",
    "move out cleaning Orlando",
    "maid service Orlando",
    "house cleaning near me",
    "cleaning company Orlando",
    "home cleaning Central Florida",
    "Glamour Girls Cleaning",
    "eco-friendly cleaning Orlando",
    "professional cleaning Orlando",
    "cleaning services Kissimmee",
    "cleaning services Winter Park",
    "cleaning services Lake Nona",
  ],
  authors: [{ name: "Glamour Girls Cleaning Company" }],
  creator: "Glamour Girls Cleaning Company",
  publisher: "Glamour Girls Cleaning Company",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glammourgirlscleaning.com",
    siteName: "Glamour Girls Cleaning Company",
    title:
      "Glamour Girls Cleaning Company | Professional House Cleaning in Orlando, FL",
    description:
      "Two best friends delivering superb-quality residential cleaning in Orlando & Central Florida. Free quotes — call (786) 239-9932.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glamour Girls Cleaning Company | Orlando House Cleaning",
    description:
      "Professional residential cleaning in Orlando & Central Florida. Free quotes — call (786) 239-9932.",
  },
  alternates: {
    canonical: "https://glammourgirlscleaning.com",
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Orlando",
    "geo.position": "28.5383;-81.3792",
    ICBM: "28.5383, -81.3792",
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://glammourgirlscleaning.com",
  name: "Glamour Girls Cleaning Company",
  description:
    "Professional residential cleaning services in Orlando and Central Florida. Standard cleaning, deep cleaning, and move in/move out services.",
  url: "https://glammourgirlscleaning.com",
  telephone: "+1-786-239-9932",
  email: "glamourgirlscleaningcompany@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Orlando",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5383,
    longitude: -81.3792,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: [
    { "@type": "City", name: "Orlando" },
    { "@type": "City", name: "Winter Park" },
    { "@type": "City", name: "Lake Nona" },
    { "@type": "City", name: "Kissimmee" },
    { "@type": "City", name: "Windermere" },
    { "@type": "City", name: "Oviedo" },
    { "@type": "City", name: "Winter Garden" },
    { "@type": "City", name: "Altamonte Springs" },
    { "@type": "City", name: "Maitland" },
    { "@type": "City", name: "Celebration" },
    { "@type": "City", name: "Dr. Phillips" },
    { "@type": "City", name: "Baldwin Park" },
  ],
  serviceType: [
    "Standard House Cleaning",
    "Deep Cleaning",
    "Move In / Move Out Cleaning",
  ],
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Ads Global Site Tag — Replace GA_TRACKING_ID and AW_CONVERSION_ID with your actual IDs */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-XXXXXXXXXX');
        `}} />
        */}

        {/* Facebook Pixel — Replace PIXEL_ID with your actual Pixel ID */}
        {/*
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />
        </noscript>
        */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
