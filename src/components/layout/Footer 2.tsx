import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Platform: [
    { href: "/platform", label: "Overview" },
    { href: "/devices-vitals", label: "BUDDI\u00AE Device" },
    { href: "/demo", label: "Book a Demo" },
  ],
  Solutions: [
    { href: "/alfs", label: "Senior Care Facilities" },
    { href: "/physicians", label: "Physicians" },
    { href: "/families", label: "Families" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/support", label: "Support" },
    { href: "/blog", label: "Insights" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[--color-dark] text-white mt-auto">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="http://vitalfriend.com/wp-content/uploads/2025/07/cropped-Group-561.png"
                alt="VitalFriend"
                width={150}
                height={34}
                unoptimized
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered continuous vitals monitoring platform built for senior
              care facilities, physicians, and families.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+18557427300"
                className="block text-white/50 hover:text-white transition-colors"
              >
                1 (855) 742-7300
              </a>
              <a
                href="mailto:care@vitalfrnd.com"
                className="block text-white/50 hover:text-white transition-colors"
              >
                care@vitalfrnd.com
              </a>
              <p className="text-white/40 pt-1">
                1218 Mateo Miller Cir
                <br />
                San Ramon, CA 94583
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm text-white/90 mb-5 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} VitalFriend, Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/support"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
