import type { Metadata } from "next";
import { Inter, Manrope, Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });

export const metadata: Metadata = {
  title: {
    default: "VitalFriend | Remote Health Monitoring for Senior Care",
    template: "%s | VitalFriend",
  },
  description:
    "VitalFriend is an AI-powered vitals monitoring platform built for Assisted Living Facilities. Real-time insights for better senior care outcomes.",
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
  icons: {
    icon: [
      { url: "/images/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/images/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vitalfriend.com",
    siteName: "VitalFriend",
    title: "VitalFriend | Remote Health Monitoring for Senior Care",
    description:
      "AI-powered vitals monitoring platform built for Assisted Living Facilities.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "VitalFriend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VitalFriend | Remote Health Monitoring for Senior Care",
    description:
      "AI-powered vitals monitoring platform built for Assisted Living Facilities.",
    images: ["/images/og-image.png"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VitalFriend, Inc",
  url: "https://vitalfriend.com",
  logo: "/images/full-logo.svg",
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
        className={`${inter.variable} ${manrope.variable} ${plusJakartaSans.variable} ${workSans.variable} ${inter.className} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1 pt-[73.134px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
