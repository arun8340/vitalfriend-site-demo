import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { benefitCards, stayConnectedContent, simpleTechnologyContent, testimonials } from "./data";
import s from "./families.module.css";

export const metadata: Metadata = {
  title: "For Patients & Families",
  description:
    "24/7 monitoring keeps everyone informed. Peace of mind even when you're not there. Know sooner so you can act faster.",
  alternates: { canonical: "https://vitalfriend.com/families" },
  openGraph: { url: "https://vitalfriend.com/families" },
};

export default function FamiliesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={s.heroSection}>
        <div className={s.heroBlobRight} />
        <div className={s.heroBlobLeft} />
        <div className={s.heroInner}>
          <div className={s.heroTextGroup}>
            <div className={s.heroBadge}>
              <span className={s.heroBadgeText}>For Families & Caregivers</span>
            </div>
            <h1 className={s.heroTitle}>
              <span className={s.heroTitleGradient}>Families</span>
            </h1>
            <p className={s.heroSubtitle}>
              Loving someone from a distance is hard. When they&apos;re managing
              health issues, that distance can feel even greater. Having your
              loved one wearing Vital Buddy closes that gap and gives the whole
              family peace of mind.
            </p>
          </div>
          <Link href="/physicians" className={s.heroBtnPrimary}>
            See How It Works
          </Link>
          <div className={s.heroImageWrapper}>
            <Image
              src="/images/families/hero-section.png"
              alt="Family using VitalFriend"
              width={768}
              height={429}
              className={s.heroImage}
              priority
            />
          </div>
        </div>
      </section>
      <div className={s.remainingBody}>
      {/* ── Data-Driven Peace of Mind ── */}
      <section className={s.dataDrivenSection}>
        <div className={s.dataDrivenInner}>
          <Image
            src="/images/families/Patients-Family.png"
            alt="Families accessing loved one vitals"
            width={430}
            height={330}
            className={s.dataDrivenImage}
          />
          <div className={s.dataDrivenContent}>
            <div className={s.dataDrivenBadge}>
              <span className={s.dataDrivenBadgeText}>
                For Patients &amp; Family
              </span>
            </div>
            <div className={s.dataDrivenContentGroup}>
              <h2 className={s.dataDrivenHeading}>
                <span className={s.dataDrivenHeadingGradient}>
                  Data-Driven Peace of Mind
                </span>
              </h2>
              <p className={s.dataDrivenSubheading}>
                Even When You&apos;re Miles Away
              </p>
              <p className={s.dataDrivenBody}>
                Families of residents or patients wearing Vital Buddy can access
                their loved one&apos;s real-time vitals through the Family
                Dashboard. Having up to date, accurate information lets them:
              </p>
              <ul className={s.dataDrivenList}>
                {stayConnectedContent.map((point, i) => (
                  <li key={i} className={s.dataDrivenItem}>
                    <svg
                      className={s.dataDrivenCheckIcon}
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <defs>
                        <linearGradient
                          id={`ddcg${i}`}
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="14.29%" stopColor="#6E70FF" />
                          <stop offset="85.29%" stopColor="#D393F1" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="11"
                        cy="11"
                        r="10"
                        stroke={`url(#ddcg${i})`}
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7 11.5l2.5 2.5 5.5-6"
                        stroke={`url(#ddcg${i})`}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/physicians" className={s.dataDrivenLearnBtn}>
              Learn more
            </Link>
          </div>
        </div>
      </section>
      {/* ── Continuously Monitor ── */}
      <section className={s.vitalsSection}>
        <div className={s.vitalsBlobLeft} />
        <div className={s.vitalsBlobRight} />
        <div className={s.vitalsInner}>
          <div className={s.vitalsHeadingGroup}>
            <h2 className={s.vitalsHeading}>
              Continuously Monitor
              <br />
              Critical Physiological Parameters
            </h2>
            <p className={s.vitalsSubtitle}>
              Vital Buddy automatically monitors multiple vitals and bio markers
              while providing critical health reminders and alerts:
            </p>
          </div>
          <div className={s.vitalsGrid}>
            {[
              {
                label: "Blood Pressure",
                src: "/images/facilities/critical-vitals/blood-pressure.svg",
              },
              {
                label: "Heart Rate",
                src: "/images/facilities/critical-vitals/heart-rate.svg",
              },
              {
                label: "Blood Oxygen",
                src: "/images/facilities/critical-vitals/blood-oxygen.svg",
              },
              {
                label: "Pulse",
                src: "/images/facilities/critical-vitals/pulse.svg",
              },
              {
                label: "Sleep Monitoring",
                src: "/images/facilities/critical-vitals/sleep-monitoring.svg",
              },
              {
                label: "Daily Steps",
                src: "/images/facilities/critical-vitals/daily-steps.svg",
              },
              {
                label: "Sedentary Alerts",
                src: "/images/facilities/critical-vitals/sedentary-alerts.svg",
              },
              {
                label: "Calories",
                src: "/images/facilities/critical-vitals/calories.svg",
              },
              {
                label: "Hydration Reminders",
                src: "/images/facilities/critical-vitals/hydration-reminders.svg",
              },
              {
                label: "Heart Rate Variability\n(Coming soon)",
                src: "/images/facilities/critical-vitals/heart-rate-variablility.svg",
                comingSoon: true,
              },
              {
                label: "Temperature\n(Coming soon)",
                src: "/images/facilities/critical-vitals/temperature.svg",
                comingSoon: true,
              },
            ].map((vital, i) => (
              <div key={i} className={s.vitalItem}>
                <div
                  className={`${s.vitalIconRing}${vital.comingSoon ? ` ${s.vitalIconRingMuted}` : ""}`}
                >
                  <div className={s.vitalIconCircle}>
                    <Image
                      src={vital.src}
                      alt={vital.label}
                      width={36}
                      height={36}
                    />
                  </div>
                </div>
                <p
                  className={`${s.vitalLabel}${vital.comingSoon ? ` ${s.vitalLabelMuted}` : ""}`}
                >
                  {vital.label.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < vital.label.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Stay Connected ── */}
      <section className={s.stayConnectedSection}>
        <div className={s.stayConnectedInner}>
          <div className={s.stayConnectedLeft}>
            <h2 className={s.stayConnectedHeading}>
              Stay Connected to What Matters Most
            </h2>
            <div className={s.stayConnectedDescGroup}>
              <p className={s.stayConnectedBody}>
                Doctor visits are tough to coordinate, updates are sporadic, and
                too often you&apos;re left wondering how they&apos;re really
                doing. Vital Buddy changes the game. When your loved one wears
                their Vital Buddy, you see their vital health information in real
                time, and so do their doctors and care team. Everyone stays
                connected and informed.
              </p>
              <p className={s.stayConnectedBody}>
                Peace of mind for you. Better care for the person you love.
              </p>
            </div>
            <ul className={s.stayConnectedList}>
              {[
                {
                  text: "Activity and check-in updates and notifications sent to your phone",
                },
                { text: "Easy-to-understand health dashboards" },
                { text: "Share access with multiple family members" },
                { text: "HIPAA-compliant" },
                {
                  text: "Vital Buddy provides information to help families stay connected to their loved one’s wellbeing. It is not intended for medical diagnosis or emergency response. In a medical emergency, call 911.",
                  italic: true,
                },
              ].map((item, i) => (
                <li key={i} className={s.stayConnectedItem}>
                  <svg
                    className={s.stayConnectedCheckIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`sccg${i}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="14.29%" stopColor="#6E70FF" />
                        <stop offset="85.29%" stopColor="#D393F1" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="11"
                      cy="11"
                      r="10"
                      stroke={`url(#sccg${i})`}
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 11.5l2.5 2.5 5.5-6"
                      stroke={`url(#sccg${i})`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className={item.italic ? s.stayConnectedItemItalic : ""}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/families/Stay-Connected.png"
            alt="Family staying connected through VitalFriend"
            width={616}
            height={590}
            className={s.stayConnectedImage}
          />
        </div>
      </section>
      {/* ── Always Know How They Are Doing ── */}
      <section className={s.alwaysKnowSection}>
        <div className={s.alwaysKnowInner}>
          <div className={s.alwaysKnowHeadingGroup}>
            <h2 className={s.alwaysKnowHeading}>
              Always Know How They Are Doing
            </h2>
            <p className={s.alwaysKnowSubtitle}>
              Family Dashboard lets you view your loved one&apos;s health in real time,
              so you can see how they&apos;re doing without having to call or visit.
            </p>
          </div>
          <Image
            src="/images/families/familiy-dashboard.jpg"
            alt="Family Dashboard showing patient health data"
            width={748}
            height={572}
            className={s.alwaysKnowImage}
          />
        </div>
      </section>
      {/* ── Effortless Health Confidence ── */}
      <section className={s.effortlessSection}>
        <div className={s.whyInner}>
          <div className={s.effortlessHeadingGroup}>
            <h2 className={s.effortlessHeading}>Effortless Health Confidence</h2>
            <p className={s.effortlessSubtitle}>
              With VitalFriend you get a level of information and knowledge that
              no other care platform can deliver.
            </p>
          </div>
          <div className={s.cardsGrid}>
            {benefitCards.map((card, i) => (
              <div key={i} className={s.card}>
                <div className={s.cardContentGroup}>
                  <div className={s.cardIcon}>{card.icon}</div>
                  <div className={s.cardTextGroup}>
                    <h3 className={s.cardTitle}>{card.title}</h3>
                    <p className={s.cardDesc}>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Simple Technology, Profound Impact ── */}
      <section className={s.simpleTechSection}>
        <div className={s.simpleTechInner}>
          <Image
            src="/images/families/All-hands.png"
            alt="Vital Buddy wearable on multiple wrists"
            width={462}
            height={442}
            className={s.simpleTechImage}
          />
          <div className={s.simpleTechContent}>
            <h2 className={s.simpleTechHeading}>
              Simple Technology,
              <br />
              Profound Impact
            </h2>
            <p className={s.simpleTechBody}>
              Vital Buddy is designed with seniors in mind, comfortable,
              discreet, and requiring minimal effort. Your loved one can go
              about their day while you stay informed about their well-being.
            </p>
            <ul className={s.simpleTechList}>
              {simpleTechnologyContent.map((point, i) => (
                <li key={i} className={s.simpleTechItem}>
                  <svg
                    className={s.simpleTechCheckIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`stcg${i}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="14.29%" stopColor="#6E70FF" />
                        <stop offset="85.29%" stopColor="#D393F1" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="11"
                      cy="11"
                      r="10"
                      stroke={`url(#stcg${i})`}
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 11.5l2.5 2.5 5.5-6"
                      stroke={`url(#stcg${i})`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* ── Testimonials ── */}
      <section className={s.testimonialsSection}>
        <div className={s.testimonialsInner}>
          <div className={s.testimonialsHeaderLeft}>
            <span className={s.testimonialsBadge}>
              What Care Teams Are Saying
            </span>
            <h2 className={s.testimonialsHeading}>
              Real words from the people
              <br />
              who use it every day
            </h2>
          </div>
          <div className={s.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${s.testimonialCard} ${i === 0 ? s.testimonialCardGreen : i === 2 ? s.testimonialCardPink : s.testimonialCardNeutral}`}
              >
                <p className={s.testimonialQuote}>{t.quote}</p>
                <div className={s.testimonialAuthor}>
                  <div className={s.testimonialAvatar}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" fill="#fff" opacity="0.9" />
                      <path
                        d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                        stroke="#fff"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.9"
                      />
                    </svg>
                  </div>
                  <div className={s.testimonialNameGroup}>
                    <p className={s.testimonialName}>{t.name}</p>
                    <p className={s.testimonialRole}>{t.role}</p>
                    <p className={s.testimonialFacility}>{t.facility}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={s.ctaSection}>
        <div className={s.ctaSectionInner}>
          <div className={s.ctaHeadingGroup}>
            <h2 className={s.ctaHeading}>Ready to Protect Your Loved One?</h2>
            <p className={s.ctaSubtitle}>
              Join hundreds of families who trust VitalFriend to keep their loved ones safe and healthy
            </p>
          </div>
          <Button href="/physicians" className={s.dataDrivenLearnBtn}>
            Learn More
          </Button>
        </div>
      </section>
      </div>
    </>
  );
}
