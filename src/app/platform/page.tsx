import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PlatformFAQ from "./PlatformFAQ";
import s from "./platform.module.css";

export const metadata: Metadata = {
  title: "The VitalFriend Platform",
  description:
    "The only health data platform that connects patients, doctors, care facilities and families, all enhanced with AI and covered by insurance.",
  alternates: { canonical: "https://vitalfriend.com/platform" },
  openGraph: { url: "https://vitalfriend.com/platform" },
};

const professionalPoints = [
  "BUDDI is FDA-cleared and reimbursable under the Medicare RPM program",
  "24/7 monitoring of 10+ key vitals automatic, shared in a HIPAA-secure cloud environment",
  "VitalInsights provides AI-powered reporting and analysis",
  "Easy to onboard and maintain - unlike usual medical equipment",
  "Data platform integrity and integrations Device neutral",
  "Tens of thousands of data points - Aggregating over 1,000 data points every day, with predictive AI models to give an unparalleled, holistic picture of a loved one's health.",
  "VitalFriend individually benchmarks every data point contextually, including custom measurements not typically associated with vitals monitoring. Clinicians can set individual limits and alerts for each patient.",
  "VitalInsights collects millions of data points, allowing medical professionals to observe trends and correlations, and take proactive, data-driven action.",
];

export default function PlatformPage() {
  return (
    <>
      {/* ── Hero + BUDDI share one blob background wrapper ── */}
      <div className={s.heroBuddiWrapper}>
        {/* Pink blob — top right */}
        <div className={s.blobPinkTopRight} />
        {/* Green blob — right side, below pink */}
        <div className={s.blobGreenRight} />
        {/* Green blob — left side */}
        <div className={s.blobGreenLeft} />

        {/* ── Hero ── */}
        <section className={s.heroSection}>
          <div className={s.heroInner}>
            <h1 className={s.heroTitle}>Platform</h1>
            <p className={s.heroSubtitle}>
              The only health data platform that connects patients, doctors, care
              facilities and families, all enhanced with AI and covered by
              insurance.
            </p>
            <Link href="/scheduleDemo" className={s.heroBtn}>
              Watch How to Use
            </Link>
          </div>
        </section>

        {/* ── BUDDI Wearable ── */}
        <section className={s.buddiSection}>
          <div className={s.buddiInner}>
            <div className={s.watchCol}>
              <div className={s.watchWrapper}>
                <Image
                  src="/images/buddi-no-bg.png"
                  alt="BUDDI FDA-Cleared Vitals Wearable"
                  width={560}
                  height={560}
                  style={{ objectFit: "contain", display: "block", maxWidth: "100%" }}
                />
              </div>
            </div>
            <div>
              <h2 className={s.buddiHeading}>
                Meet BUDDI<br />
                The Only FDA-Cleared<br />
                Vitals Wearable
              </h2>
              <p className={s.buddiSubtitle}>
                Medical-Grade Vitals Monitoring Has Never Been This Comfortable
              </p>
              <p className={s.buddiBody}>
                BUDDI, the first FDA-cleared medical watch, monitors blood
                pressure, heart rate, HRV, SPo2 and 6 other vitals automatically
                throughout the day and night. Continuous monitoring enables
                proactive, intelligent care management.
              </p>
              <Link href="/buddi" className={s.discoverBtn}>
                Discover more
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── VitalInsights ── */}
      <section className={s.sectionGray}>
        <div className={s.sectionInner}>
          <div>
            <h2 className={s.buddiHeading}>
              Vital Insights: The Real-Time Senior Monitoring Platform
            </h2>
            <p className={s.buddiSubtitle}>
              Smart Vitals Tracking. All Metrics Monitored.
            </p>
            <p className={s.vitalBody}>
              The VitalInsights platform captures 1,000+ data points/patient/day,
              analyzing them with proprietary AI and certified clinicians to detect
              issues early. Timely detection of changes in key vitals lets clinicians
              act quickly and alert the entire care team to take action.
            </p>
            <Link href="/physicians" className={s.discoverBtn}>
              Discover more
            </Link>
          </div>
          <div className={s.imageCol}>
            <Image
              src="/images/platform-desktop.png"
              alt="VitalInsights real-time monitoring platform dashboard"
              width={480}
              height={380}
              style={{ objectFit: "contain", maxWidth: "100%", borderRadius: 12 }}
            />
          </div>
        </div>
      </section>

      {/* ── Device Compatibility ── */}
      <section className={s.sectionWhite}>
        <div className={s.sectionInner}>
          <div className={s.imageColRight}>
            <Image
              src="/images/platform-ipadd.png"
              alt="VitalFriend device compatibility across tablets and wearables"
              width={460}
              height={420}
              style={{ objectFit: "contain", maxWidth: "100%" }}
            />
          </div>
          <div>
            <h2 className={s.buddiHeading}>
              VitalFriend® Device Compatibility
            </h2>
            <p className={s.buddiSubtitle}>
              Smart Vitals Tracking. All Metrics Monitored.
            </p>
            <p className={s.vitalBody}>
              Intelligent Vitals Tracking. Monitor Every Metric.
              VitalFriend&apos;s Gen AI platform connects with top wearables,
              including BUDDI®, providing care teams and families a clearer view
              of resident health.
            </p>
            <Link href="/devices-vitals" className={s.discoverBtn}>
              Discover more
            </Link>
          </div>
        </div>
      </section>

      {/* ── Securely Sharing ── */}
      <section className={s.sectionGray}>
        <div className={s.sectionInnerPhone}>
          <div>
            <h2 className={s.sharingHeading}>
              Securely Sharing Key Vitals<br />
              With Clinicians and Family<br />
              Every Day
            </h2>
            <p className={s.buddiSubtitle}>
              Smart Vitals Tracking. All Metrics Monitored.
            </p>
            <p className={s.vitalBody}>
              VitalFriend simultaneously solves wearability, data quality and billing
              complexity to deliver proactive care and better outcomes.
            </p>
            <Link href="/families" className={s.discoverBtn}>
              Discover more
            </Link>
          </div>
          <div className={s.phoneWrapper}>
            <Image
              src="/images/platform-iphn.png"
              alt="Securely sharing vitals with clinicians and family"
              width={350}
              height={450}
              style={{ objectFit: "contain", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── Healthcare Professionals ── */}
      <section className={s.sectionWhite}>
        <div className={s.proSectionInner}>
          <div className={s.proImageWrapper}>
            <Image
              src="/images/platform-professionals.png"
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
              {professionalPoints.map((point, i) => (
                <li key={i} className={s.proItem}>
                  <svg
                    className={s.proCheckIcon}
                    width="22" height="22" viewBox="0 0 22 22" fill="none"
                  >
                    <defs>
                      <linearGradient id={`cg${i}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="14.29%" stopColor="#6E70FF" />
                        <stop offset="85.29%" stopColor="#D393F1" />
                      </linearGradient>
                    </defs>
                    <circle cx="11" cy="11" r="10" stroke={`url(#cg${i})`} strokeWidth="1.5" />
                    <path d="M7 11.5l2.5 2.5 5.5-6" stroke={`url(#cg${i})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={s.faqSection}>
        <div className={s.faqInner}>
          <div className={s.faqLeft}>
            <h2 className={s.faqTitle}>FAQ</h2>
            <p className={s.faqSubtext}>HAVE A QUESTION? Ask here to get answer</p>
            <Link href="/support" className={s.faqReadMore}>
              Read More
            </Link>
            <div className={s.faqImageWrapper}>
              <Image
                src="/images/aboutUs-faqs.png"
                alt="FAQ support"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={s.faqRight}>
            <PlatformFAQ />
          </div>
        </div>
      </section>
    </>
  );
}
