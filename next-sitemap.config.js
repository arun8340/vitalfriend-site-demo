/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vitalfriend.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/_next/"] },
    ],
    additionalSitemaps: [],
  },
  exclude: ["/404"],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
};
