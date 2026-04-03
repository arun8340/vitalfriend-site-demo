import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import s from "./physicians.module.css";
import { featureCards, proPoints, stats } from "./data";

export const metadata: Metadata = {
  title: "For Physicians & Clinicians | VitalFriend",
  description:
    "Continuous vitals visibility between visits. Early alerts for faster intervention. Better data, earlier action, less noise.",
  alternates: { canonical: "https://vitalfriend.com/physicians" },
  openGraph: { url: "https://vitalfriend.com/physicians" },
};

export default function PhysiciansPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={s.heroSection}>
        <div className={s.heroInner}>
          <div className={s.heroBadge}>
            <span className={s.heroBadgeText}>For Healthcare Professionals</span>
          </div>
          <h1 className={s.heroTitle}>
            <span className={s.heroTitleBlack}>Physicians/</span>
            <span className={s.heroTitleGradient}>Clinician</span>
          </h1>
          <p className={s.heroSubtitle}>
            The only health data platform that connects patients, doctors, care
            facilities and families, all enhanced with AI and covered by insurance
          </p>
          <Link href="/contact" className={s.heroBtn}>
            Watch How It Works
          </Link>
        </div>
      </section>

      {/* ── Why Clinicians Choose VitalFriend ── */}
      <section className={s.whySection}>
        <div className={s.whyInner}>
          <h2 className={s.sectionHeading}>Why Clinicians Choose VitalFriend</h2>
          <p className={s.sectionSubtitle}>Better data. Earlier action. Less noise.</p>
          <div className={s.cardsGrid}>
            {featureCards.map((card, i) => (
              <div key={i} className={`${s.card}${card.last ? ` ${s.cardLast}` : ""}`}>
                <div className={s.cardIcon}>{card.icon}</div>
                <h3 className={s.cardTitle}>{card.title}</h3>
                <p className={s.cardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Healthcare Professionals Prefer VitalFriend ── */}
      <section className={s.proSection}>
        <div className={s.proInner}>
          <div className={s.proImageWrapper}>
            <Image
              src="/images/physicians-points.png"
              alt="Healthcare professionals using VitalFriend"
              fill
              className={s.proImage}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 className={s.proHeading}>
              Healthcare<br />
              Professionals Prefer<br />
              VitalFriend
            </h2>
            <ul className={s.proList}>
              {proPoints.map((point, i) => (
                <li key={i} className={s.proItem}>
                  <svg className={s.proCheckIcon} width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <defs>
                      <linearGradient id={`pg${i}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="14.29%" stopColor="#6E70FF" />
                        <stop offset="85.29%" stopColor="#D393F1" />
                      </linearGradient>
                    </defs>
                    <circle cx="11" cy="11" r="10" stroke={`url(#pg${i})`} strokeWidth="1.5" />
                    <path d="M7 11.5l2.5 2.5 5.5-6" stroke={`url(#pg${i})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className={s.statsSection}>
        <div className={s.statsInner}>
          {stats.map((stat, i) => (
            <div key={i} className={s.statItem}>
              <p className={s.statNumber}>{stat.number}</p>
              <p className={s.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={s.ctaSection}>
        <h2 className={s.ctaHeading}>Ready to Transform Patient Care?</h2>
        <p className={s.ctaSubtitle}>
          Join thousands of healthcare professionals who trust VitalFriend for continuous patient monitoring
        </p>
        <div className={s.ctaBtns}>
          <Link href="/contact" className={s.ctaBtnPrimary}>Schedule a Demo</Link>
          <Link href="/platform" className={s.ctaBtnOutline}>Learn More</Link>
        </div>
      </section>
    </>
  );
}
