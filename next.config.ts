import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vitalfriend.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: "vitalfriend.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      // WordPress page slug → new Next.js routes (permanent 301)
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/demo-page",
        destination: "/demo",
        permanent: true,
      },
      {
        source: "/demo-page/",
        destination: "/demo",
        permanent: true,
      },
      // WordPress home page slug was "vital-friend"
      {
        source: "/vital-friend",
        destination: "/",
        permanent: true,
      },
      {
        source: "/vital-friend/",
        destination: "/",
        permanent: true,
      },
      // Trailing slashes on current routes → canonical without slash
      {
        source: "/devices-vitals/",
        destination: "/devices-vitals",
        permanent: true,
      },
      {
        source: "/support/",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/privacy-policy/",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/blog",
        permanent: true,
      },
      // WordPress RSS feed → blog
      {
        source: "/feed",
        destination: "/blog",
        permanent: false,
      },
      {
        source: "/feed/",
        destination: "/blog",
        permanent: false,
      },
      // WordPress admin pages → gone
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
