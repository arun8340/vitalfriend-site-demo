import type { Metadata } from "next";
import { getPageContent } from "@/lib/content";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Notice for VitalFriend, Inc — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://vitalfriend.com/privacy-policy" },
  openGraph: { url: "https://vitalfriend.com/privacy-policy" },
};

export default async function PrivacyPolicyPage() {
  const page = await getPageContent("privacy-policy-old");

  return (
    <Section background="white" className="pt-16">
      <div
        className="prose prose-lg max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{ __html: page.contentHtml }}
      />
    </Section>
  );
}
