import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with VitalFriend to learn how we can help transform senior care at your facility.",
  alternates: { canonical: "https://vitalfriend.com/contact" },
  openGraph: { url: "https://vitalfriend.com/contact" },
};

const inputClass =
  "w-full border border-[--color-border] rounded-[var(--radius-sm)] px-4 py-2.5 text-[15px] bg-white text-[--color-dark] placeholder:text-[--color-muted] focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-shadow";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section background="surface" className="py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[--color-dark] mb-5">
            Get in Touch
          </h1>
          <p className="text-lg text-[--color-muted] leading-relaxed">
            Ready to transform senior care? Reach out — our team is happy to
            answer questions, walk you through the platform, or simply point you
            in the right direction.
          </p>
        </div>
      </Section>

      {/* Two-column: form + contact info */}
      <Section background="white" className="py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: contact form */}
          <div className="flex-[1.4] w-full">
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-[--color-dark] mb-1">
                Send us a message
              </h2>
              <p className="text-sm text-[--color-muted] mb-7">
                We typically respond within one business day.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Jane"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Smith"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@facility.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                  >
                    Facility / Organization
                  </label>
                  <input
                    id="organization"
                    type="text"
                    placeholder="Sunrise Senior Living"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[--color-dark] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full mt-2">
                  Send Message
                </Button>

                <p className="text-xs text-center text-[--color-muted] pt-1">
                  By submitting, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    className="underline hover:text-[--color-primary]"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>

          {/* Right: contact info */}
          <div className="flex-1 w-full space-y-4">
            {/* Email card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-[var(--radius-sm)] bg-[--color-surface] flex items-center justify-center text-[--color-primary]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 5.5C2.5 4.67 3.17 4 4 4h12c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H4c-.83 0-1.5-.67-1.5-1.5v-9zm1.5 0v.79l6 3.71 6-3.71V5.5H4zm12 1.94l-5.47 3.38a1 1 0 01-1.06 0L4 7.44V14.5h12V7.44z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[--color-muted] uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:care@vitalfrnd.com"
                    className="text-[--color-primary] font-semibold hover:underline"
                  >
                    care@vitalfrnd.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-[var(--radius-sm)] bg-[--color-surface] flex items-center justify-center text-[--color-primary]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.38 4a.5.5 0 00-.47.33L3.96 7.07C5.14 9.93 7.07 12.3 9.5 14.04l2.65-.95a.5.5 0 01.6.25l1.5 3a.5.5 0 01-.22.67l-2 1A.5.5 0 0112 18C6.48 18 2 13.52 2 8a.5.5 0 01.5-.5l3-.5a.5.5 0 01.54.36l.75 3a.5.5 0 01-.28.57L5.38 4z" fill="currentColor"/>
                    <path d="M3 8C3 13 7 17 12 17l1.5-.75-1.12-2.25-2.64.95A.5.5 0 019.2 14.8C6.6 12.9 4.6 10.4 3.4 7.5L4.5 4.5 3.17 7.55A9.97 9.97 0 003 8z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[--color-muted] uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+18557427300"
                    className="text-[--color-primary] font-semibold hover:underline"
                  >
                    1 (855) 742-7300
                  </a>
                </div>
              </div>
            </div>

            {/* Address card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-[var(--radius-sm)] bg-[--color-surface] flex items-center justify-center text-[--color-primary]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6zm0 2a4 4 0 00-4 4c0 2.9 3.5 7.1 4 7.7.5-.6 4-4.8 4-7.7a4 4 0 00-4-4zm0 2a2 2 0 110 4 2 2 0 010-4z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[--color-muted] uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <address className="not-italic text-[--color-dark] font-medium leading-relaxed text-[15px]">
                    VitalFriend, Inc
                    <br />
                    1218 Mateo Miller Cir
                    <br />
                    San Ramon, CA 94583
                    <br />
                    United States
                  </address>
                </div>
              </div>
            </div>

            {/* Book demo nudge */}
            <div className="rounded-[var(--radius-md)] bg-[--color-surface] border border-[--color-border] p-6">
              <p className="text-sm font-semibold text-[--color-dark] mb-1">
                Want a product walkthrough?
              </p>
              <p className="text-sm text-[--color-muted] mb-4">
                Schedule a free, no-pressure demo and see VitalFriend® in
                action.
              </p>
              <Button variant="primary" size="sm" href="/demo">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
