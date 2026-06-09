import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import AdvisorsPaginated from "./AdvisorsPaginated";
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
      {/* ── Hero ── */}
      <section className={s.heroSection}>
        <div className={s.blobTopRight} />
        <div className={s.blobBottomLeft} />

        <div className={s.heroInner}>
          <div className={s.heroContent}>
            <div className={s.heroBadge}>
              <span className={s.heroBadgeText}>About Us</span>
            </div>
            <h1 className={s.heroHeading}>Technology Designed to Make Life Better</h1>
            <p className={s.heroBody}>
              At VitalFriend, we believe everyone deserves thoughtful, proactive, and personalized care,
              and that the people providing that care deserve tools that make their work easier, not harder.
            </p>
            <p className={s.heroBody}>
              Our platform revolutionizes the process of delivering care for people of all ages and
              situations, and especially seniors. Vital Buddy is a sophisticated medical device disguised as
              an attractive smart watch, and unlocks a care team&apos;s ability to deliver real-time, proactive
              care that generates better outcomes for everyone. Our Vital Insights platform delivers data to
              clinical experts with AI-assisted tools to make better decisions. We&apos;re revolutionizing senior
              health and we&apos;re just getting started.
            </p>
            <Link href="/scheduleDemo" className={s.heroButton}>Learn More</Link>
          </div>
          <div className={s.heroImageCol}>
            <Image
              src="/images/about-us/hero-buddy.png"
              alt="VitalFriend Vital Buddy"
              width={335}
              height={502}
              className={s.heroImage}
            />
          </div>
        </div>
      </section>

      {/* ── Our Vision ── */}
      <Section background="white" className="pt-16! pb-24!">
        <div className={s.sectionInner}>
          <h2 className={s.sectionHeading}>Our Vision</h2>
          <p className={s.sectionBody}>
            We envision a world where technology, thoughtfully applied, transforms the health experience across every stage of
            life. Continuous insight helps people live longer, healthier, and more independently, giving care teams the clarity to act
            when it matters most and families the confidence that their loved ones are supported every step of the way.
          </p>
        </div>
      </Section>

      {/* ── Our Mission ── */}
      <Section background="white" className="pt-8! pb-24!">
        <div className={s.sectionInner}>
          <h2 className={s.sectionHeading}>Our Mission</h2>
          <p className={s.sectionBody}>
            To bridge the gap between clinical precision and daily life by providing clinicians, facilities and families with
            continuous, medical-grade insights. We empower proactive care through reliable technology that protects patient
            independence and simplifies health management.
          </p>
        </div>
      </Section>

      {/* ── Stats Banner ── */}
      <section className={s.statsSection}>
        <div className={s.statsInner}>
          <div className={s.statsHeadingBlock}>
            <h2 className={s.statsHeading}>Senior Care is at a Breaking Point</h2>
            <p className={s.statsSubtitle}>The need to provide more effective and efficient care solutions is more urgent than ever.</p>
          </div>
          <div className={s.statsGrid}>
            <div className={s.statItem}>
              <span className={s.statNumber}>80M</span>
              <span className={s.statLabel}>US seniors by 2040</span>
              <span className={s.statSub}>up from 58M today</span>
            </div>
            <div className={s.statDivider} />
            <div className={s.statItem}>
              <span className={s.statNumber}>12K</span>
              <span className={s.statLabel}>Americans turning 65</span>
              <span className={s.statSub}>every single day</span>
            </div>
            <div className={s.statDivider} />
            <div className={s.statItem}>
              <span className={s.statNumber}>$400B</span>
              <span className={s.statLabel}>Annual elderly care</span>
              <span className={s.statSub}>$50B + in RPM alone</span>
            </div>
            <div className={s.statDivider} />
            <div className={s.statItem}>
              <span className={s.statNumber}>3.5x</span>
              <span className={s.statLabel}>Seniors grow faster</span>
              <span className={s.statSub}>than skilled-care workers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Executive Team ── */}
      <Section background="white">
        <div className="text-center">
          <p className={s.teamEyebrow}>WHO WE ARE</p>
          <h2 className={s.teamHeading}>The Team</h2>
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
                <SocialIcons linkedin={member.linkedin} />
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
        <AdvisorsPaginated advisors={advisors} />
      </Section>

      {/* ── Early Access CTA ── */}
      <section className={s.earlyAccessSection}>
        <div className={s.earlyAccessInner}>
          <div className={s.earlyAccessBadge}>
            <span className={s.earlyAccessBadgeText}>Take the Next Step, Stay tuned.</span>
          </div>
          <h2 className={s.earlyAccessHeading}>
            Shaping the future of health.<br />Vitalfriend Device preview.
          </h2>
          <p className={s.earlyAccessBody}>
            We are revolutionizing health monitoring with a wearable device that captures vital data. Explore
            our vision and upcoming products.
          </p>
          <Link className={s.earlyAccessButton} href="/contactUs">Get Early Access &amp; Updates</Link>
          <div className={s.earlyAccessEmailWrapper}>
            <input type="email" placeholder="Enter your email address" className={s.earlyAccessInput} />
            <p className={s.earlyAccessEmailNote}>Be the first to see our device prototypes</p>
          </div>
        </div>
      </section>

      {/* ── Talk to an Expert ── */}
      <section className={s.talkSection}>
        <div className={s.talkCard}>
          <Image src="/images/about-us/talk-to-expert.png" alt="Talk to an expert" fill className={s.talkBgImage} />
          <div className={s.talkOverlay} />
          <div className={s.talkInner}>
            <p className={s.talkEyebrow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="12" r="1" fill="white"/>
                <circle cx="12" cy="12" r="1" fill="white"/>
                <circle cx="16" cy="12" r="1" fill="white"/>
              </svg>
              Talk to an Expert
            </p>
            <h2 className={s.talkHeading}>Ready to bring smarter care to your facility?</h2>
            <p className={s.talkSubtext}>Join 50+ care centers improving outcomes with VitalFriend.</p>
            <Link href="/scheduleDemo" className={s.talkButton}>
              Book a Demo
              <span className={s.talkButtonIcon}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E15D77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
