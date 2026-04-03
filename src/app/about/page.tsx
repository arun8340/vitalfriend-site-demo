import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import FAQAccordion from "./FAQAccordion";
import SocialIcons from "@/components/ui/SocialIcons";
import { executiveTeam, advisors } from "./data";
import s from "./about.module.css";

export const metadata: Metadata = {
  title: "About VitalFriend - Our Team",
  description:
    "Meet the seasoned technologists, operators, and entrepreneurs behind VitalFriend — a team ready to transform senior care.",
  alternates: { canonical: "https://vitalfriend.com/about" },
  openGraph: { url: "https://vitalfriend.com/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero + Tech with heart ── */}
      <section className={s.heroSection}>
        <div className={s.blobTopRight} />
        <div className={s.blobBottomLeft} />

        <div className={s.heroText}>
          <div className="max-w-3xl mx-auto px-4">
            <h1 className={s.heroTitle}>About Us</h1>
            <p className={s.heroSubtitle}>Delivering The Future of Connected Care Together</p>
          </div>
        </div>

        <div className={s.techSection}>
          <div className={s.techInner}>
            <div className={s.techTextCol}>
              <h2 className={s.techHeading}>Tech with heart, built for impactful care.</h2>
              <p className={s.techBody}>
                At VitalFriend®, we believe every senior deserves thoughtful, proactive, and
                personalized care — and that the people providing that care deserve tools that
                make their work easier, not harder.
              </p>
              <Button href="/platform" variant="pill">Learn More</Button>
            </div>
            <div className={s.techImageCol}>
              <Image src="/images/aboutUs-hero.png" alt="VitalFriend care technology" width={420} height={420} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Vision ── */}
      <Section background="white" className="py-8!">
        <div className={s.sectionInner}>
          <h2 className={s.sectionHeading}>Our Vision</h2>
          <p className={s.sectionBody}>
            We&apos;re all about making life simpler for seniors and their caregivers. Aging can
            come with its own set of challenges, like forgetting things. That&apos;s where good
            tech comes in to help out. We design tools that support daily routines and make
            caregiving a breeze.
          </p>
        </div>
      </Section>

      {/* ── Our Mission ── */}
      <Section background="white" className="py-8!">
        <div className={s.sectionInner}>
          <h2 className={s.sectionHeading}>Our Mission</h2>
          <p className={s.sectionBody}>
            We aim to make life easier for seniors and caregivers. Aging brings challenges like
            memory lapses. Good technology should ease these issues. We create tools that
            support routines and enhance care.
          </p>
        </div>
      </Section>

      {/* ── Executive Team ── */}
      <Section background="surface">
        <div className="text-center">
          <p className={s.teamEyebrow}>WE ARE</p>
          <h2 className={s.teamHeading}>Our Executive Team</h2>
          <p className={s.teamDesc}>
            From our founders, to our executives, to our technical and domain specialists,
            meet the seasoned team that guides our growth and advances our solutions.
          </p>
        </div>
        <div className={s.teamGrid}>
          {executiveTeam.map((member) => (
            <div key={member.name} className={s.teamCard}>
              <div className={s.teamPhotoWrapper}>
                <Image src={member.image} alt={member.name} width={400} height={400} className={s.teamPhoto} />
              </div>
              <div className={s.teamCardBody}>
                <p className={s.teamName}>{member.name}</p>
                <p className={s.teamRole}>{member.role}</p>
                <SocialIcons linkedin={member.linkedin} facebook={member.facebook} twitter={member.twitter} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Strategic Advisors ── */}
      <Section background="white">
        <div className="text-center">
          <h2 className={s.advisorsHeading}>Our Strategic Advisors</h2>
          <p className={s.advisorsDesc}>
            We&apos;re guided by an elite group of experts in business, engineering, product
            management, healthcare delivery, and more.
          </p>
        </div>
        <div className={s.advisorsGrid}>
          {advisors.map((advisor) => (
            <div key={advisor.name} className={s.advisorCard}>
              <Image src={advisor.image} alt={advisor.name} width={160} height={160} className={s.advisorPhoto} />
              <div className={s.advisorInfo}>
                <p className={s.advisorName}>{advisor.name}</p>
                <p className={s.advisorRole}>{advisor.role}</p>
              </div>
              <SocialIcons linkedin={advisor.linkedin} twitter={advisor.twitter} />
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA Banner ── */}
      <section className={s.ctaSection}>
        <div className={s.ctaCard}>
          <Image src="/images/aboutUs-talkUs.png" alt="Senior care" fill className={s.ctaBgImage} />
          <div className={s.ctaOverlay} />
          <div className={s.ctaInner}>
            <p className={s.ctaEyebrow}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8CC6F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Talk to an Expert
            </p>
            <h2 className={s.ctaHeading}>Ready to bring smarter care to your facility?</h2>
            <p className={s.ctaSubtext}>Join 50+ care centers improving outcomes with VitalFriend.</p>
            <Link href="/demo" className={s.ctaButton}>
              Book a Free Demo
              <span className={s.ctaButtonIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E15D77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={s.faqSection}>
        <div className={s.faqInner}>
          <div className={s.faqLeft}>
            <h2 className={s.faqTitle}>FAQ</h2>
            <p className={s.faqSubtext}>HAVE A QUESTION? Ask here to get answer</p>
            <Button href="/support" variant="pill" className="w-fit">Read More</Button>
            <div className={s.faqImageWrapper}>
              <Image src="/images/aboutUs-faqs.png" alt="Support" fill className={s.faqImage} />
            </div>
          </div>
          <div className={s.faqRight}>
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
