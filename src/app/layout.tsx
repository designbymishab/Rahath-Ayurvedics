import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SchemaMarkup from "@/components/SchemaMarkup";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahathayurvedic.vercel.app"),
  title: "Rahath Ayurvedic | Herbal Medicines in Mannarkkad, Kerala",
  description:
    "Authentic Ayurvedic herbal medicines in Mannarkkad, Palakkad. Raw herbs, piles care & postnatal support. Visit Rahath Ayurvedic near Hospital Junction.",
  keywords:
    "Ayurvedic herbal medicines Mannarkkad, Ayurvedic shop Mannarkkad, herbal medicine Kerala, Rahath Ayurvedic, raw herbal medicines Palakkad, piles care Ayurvedic Mannarkkad, postnatal care herbs Kerala, traditional herbal medicine Palakkad, best Ayurvedic shop Mannarkkad",
  authors: [{ name: "Rahath Ayurvedic" }],
  creator: "Rahath Ayurvedic",
  publisher: "Rahath Ayurvedic",
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
  alternates: {
    canonical: "https://rahathayurvedic.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rahathayurvedic.vercel.app",
    siteName: "Rahath Ayurvedic",
    title: "Rahath Ayurvedic | Herbal Medicines in Mannarkkad, Kerala",
    description:
      "Authentic Ayurvedic herbal medicines in Mannarkkad, Palakkad. Raw herbs, piles care & postnatal support. Visit us at Hospital Junction.",
    images: [
      {
        url: "/Logo/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Rahath Ayurvedic - Traditional Herbal Medicines in Mannarkkad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahath Ayurvedic | Herbal Medicines in Mannarkkad",
    description:
      "Authentic Ayurvedic herbal medicines in Mannarkkad, Palakkad. Raw herbs, piles care & postnatal support.",
    images: ["/Logo/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/Logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/Logo/apple-touch-icon.png",
  },
  manifest: "/Logo/site.webmanifest",
  verification: {
    google: "FfzVsyaS2M5ojeVmNI3qwKlkP6yqjM7mHMN9lL-_twA",
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
        {/* Preconnect to Google Fonts for faster LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Geo meta tags for Local SEO */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Mannarkkad, Palakkad" />
        <meta name="geo.position" content="10.9947286;76.4651452" />
        <meta name="ICBM" content="10.9947286, 76.4651452" />
      </head>
      <body className={outfit.className}>
        <SchemaMarkup />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
