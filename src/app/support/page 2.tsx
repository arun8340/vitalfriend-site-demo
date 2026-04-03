import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Support",
  description:
    "VitalFriend support resources. Get help with your account, devices, and app.",
  alternates: { canonical: "https://vitalfriend.com/support" },
  openGraph: { url: "https://vitalfriend.com/support" },
};

const faqs = [
  {
    category: "Getting Started",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1 12H9v-2h2v2zm0-4H9V6h2v4z" fill="currentColor"/>
      </svg>
    ),
    items: [
      {
        q: "How do I create a VitalFriend account?",
        a: "Your account is typically created by your healthcare provider or care organization. Once enrolled, you'll receive an email or SMS with instructions to download the app and log in.",
      },
      {
        q: "Which devices does VitalFriend support?",
        a: "VitalFriend supports FDA-cleared remote monitoring devices including blood pressure monitors, pulse oximeters, weight scales, and other connected health devices, depending on your care plan.",
      },
    ],
  },
  {
    category: "Using the App",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2H7a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2zm-3 14a1 1 0 110-2 1 1 0 010 2zm3-4H7V4h6v8z" fill="currentColor"/>
      </svg>
    ),
    items: [
      {
        q: "How do I add or pair a device?",
        a: "Open the VitalFriend mobile app, go to Devices, and follow the step-by-step pairing instructions. Make sure Bluetooth is enabled on your phone.",
      },
      {
        q: "What if my vitals are not syncing?",
        a: "Check that Bluetooth is turned on, your device is charged, and the app is up to date. If the issue continues, contact support.",
      },
      {
        q: "Can caregivers or family members access my data?",
        a: "Yes. With your consent, caregivers and family members can be granted limited access to view vitals and receive alerts.",
      },
    ],
  },
  {
    category: "Data, Privacy & Security",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2L3 5v5c0 4.55 3.84 8.74 7 9.93C13.16 18.74 17 14.55 17 10V5l-7-3zm-1 11l-3-3 1.41-1.41L9 10.17l4.59-4.58L15 7l-6 6z" fill="currentColor"/>
      </svg>
    ),
    items: [
      {
        q: "Is my health data secure?",
        a: "Yes. VitalFriend is HIPAA-compliant and uses industry-standard encryption to protect your personal and health information.",
      },
      {
        q: "Who can see my health data?",
        a: "Only you, authorized caregivers, and your healthcare team can access your data, based on permissions you approve.",
      },
    ],
  },
];

const troubleshooting = [
  {
    tip: "Ensure your app is updated to the latest version",
    detail: "Outdated app versions are the most common cause of sync issues.",
  },
  {
    tip: "Restart the app or your device",
    detail: "A fresh start resolves most temporary connectivity problems.",
  },
  {
    tip: "Check internet or cellular connectivity",
    detail: "VitalFriend requires an active internet connection to sync data.",
  },
  {
    tip: "Re-pair your monitoring device if needed",
    detail: "Go to Devices in the app, remove the device, and pair it again.",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <Section background="surface" className="py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="pill mb-5 inline-block">Support Center</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[--color-dark] mb-5">
            We&apos;re here to help
          </h1>
          <p className="text-lg text-[--color-muted] leading-relaxed">
            VitalFriend is designed to make remote care simple, reliable, and
            secure. If you need help getting started, troubleshooting an issue,
            or understanding a feature, you&apos;re in the right place.
          </p>
        </div>
      </Section>

      {/* Contact support card */}
      <Section background="white" className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="card p-8 flex flex-col sm:flex-row gap-8 items-start">
            {/* Icon */}
            <div className="flex-shrink-0 w-14 h-14 rounded-[var(--radius-md)] bg-[--color-surface] flex items-center justify-center text-[--color-primary]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
              </svg>
            </div>
            {/* Content */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[--color-dark] mb-1">
                Contact Support
              </h2>
              <p className="text-[--color-muted] mb-5 leading-relaxed">
                Our support team is available to assist with technical issues,
                account questions, and general inquiries.
              </p>
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[--color-muted] uppercase tracking-wider w-16">
                    Email
                  </span>
                  <a
                    href="mailto:support@vitalfriend.com"
                    className="text-[--color-primary] font-semibold hover:underline"
                  >
                    support@vitalfriend.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[--color-muted] uppercase tracking-wider w-16">
                    Hours
                  </span>
                  <span className="text-[--color-dark] font-medium text-[15px]">
                    Monday – Friday, 9:00 AM – 6:00 PM EST
                  </span>
                </div>
              </div>
              <p className="text-sm text-[--color-muted] bg-[--color-surface] rounded-[var(--radius-sm)] px-4 py-3 border border-[--color-border]">
                For urgent clinical or device-related issues, please contact
                your healthcare provider directly.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="surface" className="py-16 lg:py-24">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl font-bold text-[--color-dark] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[--color-muted]">
            Quick answers to the questions we hear most often.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((section) => (
            <div key={section.category} className="card p-8">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[--color-border]">
                <span className="text-[--color-primary]">{section.icon}</span>
                <h3 className="text-lg font-bold text-[--color-dark]">
                  {section.category}
                </h3>
              </div>
              {/* FAQ items */}
              <div className="space-y-6">
                {section.items.map((item, index) => (
                  <div
                    key={item.q}
                    className={
                      index < section.items.length - 1
                        ? "pb-6 border-b border-[--color-border]"
                        : ""
                    }
                  >
                    <p className="font-semibold text-[--color-dark] mb-2">
                      {item.q}
                    </p>
                    <p className="text-[--color-muted] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Troubleshooting */}
      <Section background="white" className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[--color-dark] mb-3">
              Troubleshooting Tips
            </h2>
            <p className="text-[--color-muted]">
              Try these steps before contacting support — they resolve most
              common issues.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {troubleshooting.map((item, index) => (
              <div key={item.tip} className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[--color-surface] border border-[--color-border] flex items-center justify-center text-xs font-bold text-[--color-primary]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-[--color-dark] mb-1">
                      {item.tip}
                    </p>
                    <p className="text-sm text-[--color-muted] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[--color-muted] mt-6 text-sm">
            If issues persist after trying these steps, please{" "}
            <a
              href="mailto:support@vitalfriend.com"
              className="text-[--color-primary] font-semibold hover:underline"
            >
              contact our support team
            </a>
            .
          </p>
        </div>
      </Section>

      {/* Feedback CTA */}
      <Section background="surface" className="py-16 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[--color-dark] mb-4">
            Have feedback?
          </h2>
          <p className="text-[--color-muted] mb-8 leading-relaxed">
            We&apos;re always improving VitalFriend. If you have suggestions,
            ideas, or spotted something we can do better — we&apos;d love to
            hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="mailto:care@vitalfrnd.com"
            >
              Share Feedback
            </Button>
            <Button variant="outline" size="lg" href="/demo">
              Book a Demo
            </Button>
          </div>
          <p className="text-sm text-[--color-muted] mt-8">
            Thank you for trusting VitalFriend as your partner in proactive,
            connected care.
          </p>
        </div>
      </Section>
    </>
  );
}
