import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: {
    default: "VitalFriend® | Remote Health Monitoring for Senior Care",
    template: "%s | VitalFriend®",
  },
  description:
    "VitalFriend® is an AI-powered vitals monitoring platform built for Assisted Living Facilities. Real-time insights for better senior care outcomes.",
  keywords: [
    "remote health monitoring",
    "vitals monitoring",
    "senior care",
    "assisted living",
    "RPM platform",
    "remote patient monitoring",
  ],
  authors: [{ name: "VitalFriend, Inc" }],
  creator: "VitalFriend, Inc",
  metadataBase: new URL("https://vitalfriend.com"),
  alternates: { canonical: "https://vitalfriend.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vitalfriend.com",
    siteName: "VitalFriend®",
    title: "VitalFriend® | Remote Health Monitoring for Senior Care",
    description:
      "AI-powered vitals monitoring platform built for Assisted Living Facilities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitalFriend® | Remote Health Monitoring for Senior Care",
    description:
      "AI-powered vitals monitoring platform built for Assisted Living Facilities.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VitalFriend, Inc",
  url: "https://vitalfriend.com",
  logo: "https://vitalfriend.com/wp-content/uploads/2025/07/cropped-Group-561.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-855-742-7300",
    contactType: "customer support",
    email: "care@vitalfrnd.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1218 Mateo Miller Cir",
    addressLocality: "San Ramon",
    addressRegion: "CA",
    postalCode: "94583",
    addressCountry: "US",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${inter.className} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1 pt-27">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
