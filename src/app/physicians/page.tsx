import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import s from "./physicians.module.css";
import HolisticTabs from "./HolisticTabs";
import {
  proPoints,
  stats,
  comparisonRows,
  virtualAssistantItems,
  testimonials,
  reimbursementItems,
  dataReportingItems,
  insightCards,
  episodicListItems,
  traditionalLimitations,
  vitalBuddyBenefits,
  dashboardTabs,
  importantTrends,
} from "./data";

export const metadata: Metadata = {
  title: "For Physicians & Clinicians | VitalFriend",
  description:
    "Continuous vitals visibility between visits. Early alerts for faster intervention. Better data, earlier action, less noise.",
  alternates: { canonical: "https://vitalfriend.com/physicians" },
  openGraph: { url: "https://vitalfriend.com/physicians" },
};

/* ─── Gradient check icon ─── */
function GradientCheck({ id }: { id: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6E70FF" />
          <stop offset="100%" stopColor="#D393F1" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={`url(#${id})`}
        strokeWidth="1.5"
        fill="rgba(110,112,255,0.08)"
      />
      <path
        d="M7.5 12l3 3 6-6"
        stroke={`url(#${id})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Red X icon ─── */
function RedX() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="#FB2C36"
        strokeWidth="1.5"
        fill="rgba(251,44,54,0.08)"
      />
      <path
        d="M7 7l6 6M13 7l-6 6"
        stroke="#FB2C36"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── Green Check icon ─── */
function GreenCheck() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="#00A63E"
        strokeWidth="1.5"
        fill="rgba(0,166,62,0.08)"
      />
      <path
        d="M6 10.5l2.5 2.5L14 7"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PhysiciansPage() {
  return (
    <>
      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section className={s.heroSection}>
        <div
          className={`${s["hero__blob"]} ${s["hero__blob--green"]}`}
          aria-hidden="true"
        />
        <div
          className={`${s["hero__blob"]} ${s["hero__blob--blue"]}`}
          aria-hidden="true"
        />
        <div
          className={`${s["hero__blob"]} ${s["hero__blob--lightgreen"]}`}
          aria-hidden="true"
        />
        <div className={s.heroInner}>
          <div className={s.heroTopGroup}>
            <div className={s.heroBadge}>
              <span className={s.heroBadgeText}>
                For Healthcare Professionals
              </span>
            </div>
            <h1 className={s.heroTitleGradient}>Physicians &amp; Clinicians</h1>
            <p className={s.heroSubtitleSm}>
              Clinical Intelligence for Automatic Patient Monitoring
            </p>
          </div>
          <div className={s.heroBottomGroup}>
            <div className={s.heroDescGroup}>
              <p className={s.heroSubtitleSm}>
                VitalFriend&apos;s continuous healthcare monitoring platform
                combines scheduled blood pressure measurements, heart rate,
                SpO₂, temperature, sleep, activity, and intelligent
                notifications to provide 24/7 visibility into patient health.
              </p>
              <p className={s.heroSubtitleSm}>
                Our FDA-cleared Vital Buddy wearable provides data that helps
                physicians improve outcomes, engage patients between visits, and
                supports reimbursable RPM/RTM programs.
              </p>
            </div>
            <div className={s.heroCtaGroup}>
              <Link href="/scheduleDemo" className={s.heroBtn}>
                Schedule a Free Demo
              </Link>
              <p className={s.heroCaveat}>
                Covered by most major insurance plans · FDA-cleared BP + HR
                monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          HERO IMAGE
      ══════════════════════════ */}
      <section className={s.heroImageSection}>
        <div className={s.heroImageInner}>
          <Image
            src="/images/doctor-visit-senior.png"
            alt="VitalFriend physician dashboard"
            width={768}
            height={429}
            style={{ width: "100%", maxWidth: 768, height: "auto", borderRadius: 18 }}
            unoptimized
          />
        </div>
      </section>

      {/* ══════════════════════════
          EPISODIC → CONTINUOUS
      ══════════════════════════ */}
      <section className={s.episodicSection}>
        <div className={s.episodicInner}>
          <div className={s.episodicImageWrapper}>
            <Image
              src="/images/buddi-bp.png"
              alt="Vital Buddy wearable"
              width={225}
              height={426}
              style={{ objectFit: "cover", width: "100%", maxWidth: 225.75, height: "auto" }}
              unoptimized
            />
          </div>
          <div className={s.episodicContent}>
            <span className={s.episodicBadge}>
              Revolutionary Health Monitoring
            </span>
            <h2 className={s.episodicHeading}>
              Healthcare is Moving from Episodic to Continuous Care
            </h2>
            <p className={s.episodicDesc}>
              Vitals monitoring hasn&apos;t changed materially in decades.
              Patients have to visit doctors offices and/or use bulky,
              single-purpose devices to take vitals, intermittently. Physicians
              currently make decisions based on:
            </p>
            <ul className={s.episodicList}>
              {episodicListItems.map((item, i) => (
                <li key={i} className={s.episodicListItem}>
                  <GradientCheck id={`ep-${i}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              <span className={s.episodicBold}>The problem: </span>
              <span className={s.episodicText}>
                Most disease progression happens between visits. Hypertension,
                CHF, diabetes, post-op deterioration, anxiety, medication
                non-adherence, sleep dysfunction, and cardiometabolic decline
                all evolve outside the clinic.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          VITAL Buddy CLOSES THE GAP
      ══════════════════════════ */}
      <section className={s.gapSection}>
        <div className={s.gapInner}>
          <h2 className={s.gapHeading}>
            Vital Buddy Closes the Gap Between Visits
          </h2>
          <div className={s.gapCards}>
            {/* Traditional */}
            <div className={s.gapCardTraditional}>
              {/* Header */}
              <div className={s.gapCardHeader}>
                <div
                  className={s.gapCardTag}
                  style={{ background: "#F3F4F6", color: "#4A5565" }}
                >
                  TRADITIONAL METHOD
                </div>
                <h3 className={s.gapCardTitle}>Spot checks</h3>
                <div className={s.gapCardStat}>
                  <span
                    className={s.gapCardStatNum}
                    style={{ color: "#4A5565" }}
                  >
                    2–3
                  </span>
                  <span className={s.gapCardStatUnit}>readings/week</span>
                </div>
              </div>

              {/* Week timeline visualization */}
              <div className={s.gapCardTimeline}>
                <div className={s.gapCardTimelineDots}>
                  {["Week 1", "Week 2", "Week 3"].map((week) => (
                    <div key={week} className={s.gapCardTimelineDot}>
                      <div className={s.gapCardTimelineDotCircle} />
                      <span className={s.gapCardTimelineDotLabel}>{week}</span>
                    </div>
                  ))}
                </div>
                <div className={s.gapCardTimelineBar} />
                <p className={s.gapCardTimelineCaption}>
                  Only 2-3 data points per week
                </p>
              </div>

              {/* Limitations */}
              <div className={s.gapCardLimitations}>
                <p className={s.gapCardLimitTitle}>Limitations:</p>
                {traditionalLimitations.map((l, i) => (
                  <div
                    key={i}
                    className={`${s.gapCardLimitItem} ${s.gapCardLimitItemRed}`}
                  >
                    <RedX />
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vital Buddy */}
            <div className={s.gapCardVB}>
              {/* Header row: left (tag+title+stat) | divider | right (week stat) */}
              <div className={s.gapCardVBHeaderRow}>
                <div className={s.gapCardVBHeaderLeft}>
                  <div
                    className={s.gapCardTag}
                    style={{ background: "#FCE7F3", color: "#C6005C" }}
                  >
                    ADVANCED SOLUTION
                  </div>
                  <h3 className={s.gapCardTitle}>Vital Buddy</h3>
                  <div className={s.gapCardStat}>
                    <span
                      className={s.gapCardStatNum}
                      style={{
                        background: "linear-gradient(90deg,#E60076,#EC003F)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      1,440
                    </span>
                    <span
                      className={s.gapCardStatUnit}
                      style={{ color: "#364153", fontWeight: 500 }}
                    >
                      readings/day
                    </span>
                  </div>
                </div>
                <div className={s.gapCardVBDivider} />
                <div className={s.gapCardWeekStat}>
                  <span className={s.gapCardWeekStatLabel}>
                    Vital Buddy 24/7
                  </span>
                  <span className={s.gapCardWeekStatNum}>10,080</span>
                  <span className={s.gapCardWeekStatUnit}>readings/week</span>
                </div>
              </div>

              {/* Dot-matrix chart
                  Pattern: 20 cols = [5 red dots] [4 gray] [4 gray] [4 gray] × 5
                  Labels: 12 AM (0%), 6 AM (25%), 12 PM (50%), 6 PM (75%), 12 AM (100%)
              */}
              <div className={s.gapCardDotChart}>
                {/* Time axis labels — positioned proportionally */}
                <div className={s.gapCardDotChartTimeLabels}>
                  {[
                    { label: "12 AM", pct: "0%" },
                    { label: "6 AM", pct: "25%" },
                    { label: "12 PM", pct: "50%" },
                    { label: "6 PM", pct: "75%" },
                    { label: "", pct: "100%" },
                  ].map(({ label, pct }) => (
                    <span
                      key={pct}
                      className={s.gapCardDotChartTimeLabel}
                      style={{ left: pct }}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Dot grid: 5 groups × [1 BP col (5 dots) + 3 gray cols (4 dots)] */}
                <div className={s.gapCardDotChartGrid}>
                  {Array.from({ length: 5 }).flatMap((_, groupIdx) => [
                    /* BP column — 5 red dots */
                    <div
                      key={`bp-${groupIdx}`}
                      className={`${s.gapCardDotCol} ${s["gapCardDotCol--bp"]}`}
                    >
                      {Array.from({ length: 5 }).map((_, d) => (
                        <div key={d} className={s.gapCardDot} />
                      ))}
                    </div>,
                    /* 3 gray columns — 4 gray dots each */
                    ...Array.from({ length: 3 }).map((_, grayIdx) => (
                      <div
                        key={`bio-${groupIdx}-${grayIdx}`}
                        className={`${s.gapCardDotCol} ${s["gapCardDotCol--bio"]}`}
                      >
                        {Array.from({ length: 4 }).map((_, d) => (
                          <div key={d} className={s.gapCardDot} />
                        ))}
                      </div>
                    )),
                  ])}
                </div>

                {/* Legend */}
                <div className={s.gapCardDotChartLegend}>
                  <div className={s.gapCardDotChartLegendItem}>
                    <div className={s["gapCardDotChartLegendDot--bio"]} />
                    Continuous vital signs
                  </div>
                  <div className={s.gapCardDotChartLegendItem}>
                    <div className={s["gapCardDotChartLegendDot--bp"]} />
                    Blood pressure
                  </div>
                </div>
                <p className={s.gapCardDotChartCaption}>
                  1,440 data points per day—continuous 24/7 monitoring
                </p>
              </div>

              {/* Key Benefits */}
              <div className={s.gapCardLimitations}>
                <p className={s.gapCardLimitTitle}>Key Benefits:</p>
                {vitalBuddyBenefits.map((b, i) => (
                  <div
                    key={i}
                    className={`${s.gapCardLimitItem} ${s.gapCardLimitItemGreen}`}
                  >
                    <GreenCheck />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          COMPARISON TABLE
      ══════════════════════════ */}
      <section className={s.compareSection}>
        <div className={s.compareInner}>
          <div className={s.compareHeadingGroup}>
            <h2 className={s.compareHeading}>
              Most Monitoring Solutions Create Noise,
              <br />
              Friction, or Poor Adherence
            </h2>
            <p className={s.compareSubtitle}>
              Vital Buddy is unlike any other traditional RPM program as it is
              comfortable and convenient to use every day. It&apos;s also a
              medical-grade device that provides clinically-relevant data streams
              to care teams throughout the day and night. There&apos;s never been
              anything like it available to a broad population of patients.
            </p>
          </div>
          <div className={s.compareTable}>
            <div className={s.compareThead}>
              <div className={`${s.compareTh} ${s.compareThFeature}`}>
                Capability
              </div>
              <div className={s.compareTh}>Consumer Wearables</div>
              <div className={s.compareTh}>Traditional RPM</div>
              <div className={`${s.compareTh} ${s.compareThVF}`}>
                Vital Buddy
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className={s.compareTr}>
                <div className={`${s.compareTd} ${s.compareTdFeature}`}>
                  {row.feature}
                </div>
                {[row.consumer, row.rpm, row.vf].map((val, j) => (
                  <div
                    key={j}
                    className={`${s.compareTd}${j === 3 ? ` ${s.compareTdVF}` : ""}`}
                  >
                    {val === true ? (
                      <GreenCheck />
                    ) : val === false ? (
                      <RedX />
                    ) : (
                      <span className={s.comparePartial}>{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CONTINUOUS INSIGHTS
      ══════════════════════════ */}

      <section className={s.featSection}>
        <div className={s.featInner}>
          {/* Heading + subtitle */}
          <div className={s.featHeader}>
            <h2 className={s.featHeading}>
              Vital Buddy Delivers Continuous Clinical Insight from
              Intelligently Timed Measurements
            </h2>
            <p className={s.featSubtitle}>
              Vital Buddy captures physiologic measurements at optimized
              intervals, producing clear, actionable trends physicians and
              caregivers can meaningfully use. This is especially important for:
            </p>
          </div>

          {/* Two-column row */}
          <div className={s.featRow}>
            {/* Left: image with asymmetric radius */}
            <div className={s.featImageWrapper}>
              <Image
                src="/images/physician-care.png"
                alt="Vital Buddy clinical features"
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </div>

            {/* Right: feature list + footnote */}
            <div className={s.featContent}>
              <ul className={s.episodicList}>
                {importantTrends.map((item, i) => (
                  <li key={i} className={s.episodicListItem}>
                    <GradientCheck id={`ep-${i}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={s.featFootnote}>
                <span className={s.episodicBold}>
                  Clinical differentiation:
                </span>{" "}
                <br />
                Oscillometric BP (major differentiator) vs many cuffless
                estimation approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          HOLISTIC / TABS
      ══════════════════════════ */}
      <section className={s.holisticSection}>
        <div className={s.holisticHeader}>
          <h2 className={s.holisticHeading}>Holistic Picture of Health</h2>
          <p className={s.holisticSubtitle}>
            Beyond vitals, Vital Buddy encourages healthier habits with
            automated hydration and medication reminders, ensuring nothing falls
            through the cracks. Vital Buddy collects more than 1,000 data points
            per day.
          </p>
        </div>
        <HolisticTabs tabs={dashboardTabs} />
      </section>

      {/* ══════════════════════════
          VIRTUAL CARE ASSISTANT
      ══════════════════════════ */}
      <section className={s.virtualSection}>
        <div className={s.virtualInner}>
          <div className={s.virtualHeader}>
            <h2 className={s.virtualHeading}>
              A Virtual Care Assistant Between Visits
            </h2>
            <p className={s.virtualSubtitle}>
              VitalFriend helps the physician stay informed with the latest
              data. <br /> Vital Buddy simply helps them see important
              developments and patterns that they could otherwise miss.
            </p>
          </div>
          <div className={s.virtualGrid}>
            {virtualAssistantItems.map((item, i) => (
              <div key={i} className={s.virtualCard}>
                <div className={s.virtualCardIconWrap}>
                  <Image
                    src={item.imageSrc}
                    alt={item.desc}
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className={s.virtualCardTitle}>{item.title}</h3>
              </div>
            ))}
          </div>
          {/* CTA Banner */}
          <div className={s.virtualCta}>
            <p className={s.virtualCtaLabel}>
              Important from a regulatory perspective:
            </p>
            <h3 className={s.virtualCtaHeading}>
              Threshold-based prioritization, not diagnosis
            </h3>
            <p className={s.virtualCtaDesc}>
              Vital Buddy does not replace clinical judgment or make diagnoses.
              It is a <br /> workflow tool to guide clinical focus.
            </p>
            <div className={s.virtualCtaBtns}>
              <Link href="/scheduleDemo" className={s.virtualCtaBtnPrimary}>
                Schedule a 10-Minute Demo
              </Link>
              <Link href="/platform" className={s.virtualCtaBtnOutline}>
                See How it Integrates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          REIMBURSABLE CARE MODEL
      ══════════════════════════ */}
      <section className={s.reimbSection}>
        <div className={s.reimbInner}>
          <div className={s.reimbImageWrapper}>
            <Image
              src="/images/physicians-reimbursement.png"
              alt="Reimbursable care model"
              fill
              className={s.reimbImage}
              unoptimized
            />
          </div>
          <div className={s.reimbContent}>
            <h2 className={s.reimbHeading}>
              <span className={s.reimbHeadingGrad}>
                Vital Buddy isn&apos;t simply vitals monitoring
              </span>
              <span className={s.reimbHeadingBlack}>
                It&apos;s a reimbursable care model
              </span>
            </h2>
            <p className={s.reimbDesc}>
              VitalFriend handles all clinical monitoring and insurance billing,
              delivering reimbursements without operational burden:
            </p>
            <ul className={s.reimbList}>
              {reimbursementItems.map((item, i) => (
                <li key={i} className={s.reimbItem}>
                  <GradientCheck id={`re-${i}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          DATA & REPORTING
      ══════════════════════════ */}
      <section className={s.dataSection}>
        <div className={s.dataInner}>
          <div className={s.dataContent}>
            <h2 className={s.dataHeading}>Data &amp; Reporting</h2>
            <ul className={s.dataList}>
              {dataReportingItems.map((item, i) => (
                <li key={i} className={s.dataItem}>
                  <GradientCheck id={`da-${i}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.dataImageWrapper}>
            <Image
              src="/images/physicians-data-reporting.png"
              alt="Data and reporting dashboard"
              width={603}
              height={461}
              style={{ width: "100%", height: "auto", borderRadius: 16 }}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          TESTIMONIALS
      ══════════════════════════ */}
      <section className={s.testimonialSection}>
        <div className={s.testimonialInner}>
          <div className={s.testimonialHeader}>
            <span className={s.testimonialBadge}>
              What Care Teams Are Saying
            </span>
            <h2 className={s.testimonialHeading}>
              Real words from the people who use it every day
            </h2>
          </div>
          <div className={s.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={s.testimonialCard}>
                <p className={s.testimonialQuote}>{t.quote}</p>
                <div className={s.testimonialProfile}>
                  <div className={s.testimonialAvatar}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle
                        cx="20"
                        cy="20"
                        r="20"
                        fill="rgba(77,154,241,0.4)"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="20"
                        stroke="#4D9AF1"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle
                        cx="20"
                        cy="15"
                        r="5"
                        stroke="#4D9AF1"
                        strokeWidth="1.5"
                        fill="white"
                      />
                      <path
                        d="M8.5 35c0-6.3 5.2-10 11.5-10s11.5 3.7 11.5 10"
                        stroke="#4D9AF1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div className={s.testimonialMeta}>
                    <p className={s.testimonialName}>{t.name}</p>
                    <p className={s.testimonialRole}>{t.role}</p>
                    <p className={s.testimonialLocation}>{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          HEALTHCARE PROFESSIONALS PREFER VF
      ══════════════════════════ */}
      <section className={s.proSection}>
        <div className={s.proInner}>
          <div className={s.proImageWrapper}>
            <Image
              src="/images/physicians-points.png"
              alt="Healthcare professionals using VitalFriend"
              fill
              className={s.proImage}
              unoptimized
            />
          </div>
          <div className={s.proContent}>
            <h2 className={s.proHeading}>
              Healthcare Professionals Prefer VitalFriend
            </h2>
            <ul className={s.proList}>
              {proPoints.map((point, i) => (
                <li key={i} className={s.proItem}>
                  <GradientCheck id={`pro-${i}`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          STATS BANNER
      ══════════════════════════ */}
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

      {/* ══════════════════════════
          CRITICAL INSIGHTS
      ══════════════════════════ */}
      <section className={s.insightsSection}>
        <div className={s.insightsInner}>
          <h2 className={s.insightsHeading}>
            Critical Insights <br /> Without Clinical Overload
          </h2>
          <p className={s.insightsSubtitle}>
            Get continuous vitals data for patients with chronic conditions
          </p>
          {/* <div className={s.insightsCta}>
            <Link href="/contact" className={s.insightsCtaPrimary}>
              Download Product Sheet
            </Link>
          </div> */}
          <div className={s.insightsGrid}>
            {insightCards.map((card, i) => (
              <div key={i} className={s.insightCard}>
                <div className={s.insightCardIcon}>{card.icon}</div>
                <h3 className={s.insightCardTitle}>{card.title}</h3>
                <p className={s.insightCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CTA
      ══════════════════════════ */}
      <section className={s.ctaSection}>
        <h2 className={s.ctaHeading}>Ready to Transform Patient Care?</h2>
        <p className={s.ctaSubtitle}>
          Join thousands of healthcare professionals who trust VitalFriend for
          continuous patient monitoring
        </p>
        <div className={s.ctaBtns}>
          <Link href="/scheduleDemo" className={s.ctaBtnPrimary}>
            Schedule a Demo
          </Link>
          <Link href="/contactUs" className={s.ctaBtnOutline}>
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}
