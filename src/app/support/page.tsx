import type { Metadata } from "next";
import Section from "@/components/ui/Section";

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
  "Ensure your app is updated to the latest version",
  "Restart the app or your device",
  "Check internet or cellular connectivity",
  "Re-pair your monitoring device if needed",
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="pt-16 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          We&apos;re here to help you every step of the way.
        </h1>
        <p className="text-lg text-[--color-muted] max-w-2xl mx-auto">
          VitalFriend is designed to make remote care simple, reliable, and
          secure for patients, caregivers, and healthcare providers. If you need
          help getting started, troubleshooting an issue, or understanding a
          feature, you&apos;re in the right place.
        </p>
      </Section>

      {/* Contact */}
      <Section background="surface">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
          <p className="text-[--color-muted] mb-4">
            Our support team is available to assist you with technical issues,
            account questions, and general inquiries.
          </p>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@vitalfriend.com"
                className="text-[--color-primary] hover:underline"
              >
                support@vitalfriend.com
              </a>
            </p>
            <p>
              <strong>Support Hours:</strong> Monday – Friday, 9:00 AM – 6:00
              PM (EST)
            </p>
          </div>
          <p className="text-sm text-[--color-muted] mt-4">
            For urgent clinical or device-related issues, please contact your
            healthcare provider directly.
          </p>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h3 className="text-xl font-bold text-[--color-primary] mb-4">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.q}>
                    <p className="font-semibold mb-1">{item.q}</p>
                    <p className="text-[--color-muted]">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Troubleshooting */}
      <Section background="surface">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <ul className="space-y-2">
            {troubleshooting.map((tip) => (
              <li key={tip} className="flex gap-3">
                <span className="text-[--color-primary] font-bold">•</span>
                <span className="text-[--color-muted]">{tip}</span>
              </li>
            ))}
          </ul>
          <p className="text-[--color-muted] mt-4">
            If problems persist, please contact our support team.
          </p>
        </div>
      </Section>

      {/* Feedback */}
      <Section background="white" className="text-center">
        <h2 className="text-2xl font-bold mb-3">Feedback</h2>
        <p className="text-[--color-muted]">
          We&apos;re always improving VitalFriend. If you have suggestions or
          feedback, email us at{" "}
          <a
            href="mailto:care@vitalfriend.com"
            className="text-[--color-primary] hover:underline"
          >
            care@vitalfriend.com
          </a>
          .
        </p>
        <p className="text-[--color-muted] mt-4">
          Thank you for trusting VitalFriend as your partner in proactive,
          connected care.
        </p>
      </Section>
    </>
  );
}
