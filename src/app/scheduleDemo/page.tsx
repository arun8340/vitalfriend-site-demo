import type { Metadata } from "next";
import s from "./demo.module.css";

export const metadata: Metadata = {
  title: "Schedule a Demo | VitalFriend",
  description:
    "See VitalFriend in action. Schedule a personalized demo with our team and discover how we can help you provide better care.",
  alternates: { canonical: "https://vitalfriend.com/scheduleDemo" },
  openGraph: { url: "https://vitalfriend.com/scheduleDemo" },
};

const reasons = [
  "Built for elder care management and traceability",
  "Seamless device integration and simple insurance submission",
  "Actionable data your team can trust",
  "Happier staff, connected care teams, safer residents",
];

const CheckIcon = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path
      d="M1 4L3.5 6.5L9 1"
      stroke="url(#checkGrad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="checkGrad" x1="0" y1="0" x2="10" y2="8" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6E70FF" />
        <stop offset="100%" stopColor="#D393F1" />
      </linearGradient>
    </defs>
  </svg>
);

export default function DemoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={s.heroSection}>
        <div className={s.heroBadge}>
          <span className={s.heroBadgeText}>Schedule Your Demo</span>
        </div>
        <h1 className={s.heroTitle}>
          Watch our product with the VitalFriend team.
        </h1>
        <p className={s.heroSubtitle}>
          See VitalFriend in action. Schedule a personalized demo with our team and discover how we can help you provide better care.
        </p>
      </section>

      {/* ── Booking Card ── */}
      <div className={s.bookingOuter}>
        <div className={s.bookingCard}>
          {/* Left: pitch */}
          <div className={s.bookingLeft}>
            <h2 className={s.bookingTitle}>Schedule Your Free Demo</h2>
            <p className={s.bookingSubtitle}>
              No pressure. No long forms. Just a quick walkthrough tailored to your needs.
            </p>
            <p className={s.bookingReasonsTitle}>Why Facilities Choose VitalFriend®</p>
            <ul className={s.bookingReasonsList}>
              {reasons.map((reason, i) => (
                <li key={i} className={s.bookingReasonItem}>
                  <div className={s.reasonIconWrapper}>
                    <CheckIcon />
                  </div>
                  <p className={s.reasonText}>{reason}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Calendly embed */}
          <div className={s.bookingRight}>
            <iframe
              src="https://calendly.com/welcomevitalfriend/30min"
              title="Schedule a Demo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
