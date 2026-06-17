import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import s from "./platform.module.css";

export const metadata: Metadata = {
  title: "The VitalFriend Platform",
  description:
    "A health data platform that connects patients, doctors, care facilities and families through continuous vital signs monitoring and clinician review.",
  alternates: { canonical: "https://vitalfriend.com/platform" },
  openGraph: { url: "https://vitalfriend.com/platform" },
};

const professionalPoints: { text: string; italic?: boolean }[] = [
  {
    text: "Vital Buddy is FDA-cleared and eligible for reimbursement under applicable Medicare RPM codes.",
  },
  {
    text: "24/7 automatic monitoring of 10+ physiological parameters, shared in a HIPAA-compliant cloud environment.",
  },
  {
    text: "Vital Insights provides trend review reporting to support clinician review.",
  },
  { text: "Designed for straightforward onboarding and ongoing support." },
  {
    text: "We aggregate 1,000+ data points per patient per day, with automated modeling that organizes vital signs into a comprehensive view for clinician review.",
  },
  {
    text: "VitalFriend displays each data point, allowing medical professionals to identify trends and correlations to inform their clinical decisions. Clinicians configure the limits and notification thresholds for each patient.",
  },
  {
    text: "Medication, hydration, sleep and mobility reminders and tracking help residents and patients maintain healthy habits.",
  },
  {
    text: "Vital Buddy is intended for use by healthcare professionals as an aid in patient monitoring. It is not intended to diagnose, treat, cure, or prevent any disease, and is not a substitute for clinical judgment.",
    italic: true,
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className={s.heroBuddiWrapper}>
        <div className={s.blobPinkTopRight} />
        <div className={s.blobGreenLeft} />

        <section className={s.heroSection}>
          <div className={s.heroInner}>
            <h1 className={s.heroTitle}>
              The Remote Senior
              <br />
              Monitoring Platform
            </h1>
            <p className={s.heroSubtitle}>
              A health data platform that connects patients, doctors, care
              facilities and families through continuous vital signs monitoring
              and clinician review.
            </p>
          </div>
        </section>
      </div>

      {/* ── Data Flow ── */}
      <section className={s.dataFlowSection}>
        <div className={s.dataFlowInner}>
          {/* Badge */}
          <div className={s.techBadge}>
            <span className={s.techBadgeText}>Technology</span>
          </div>

          <h2 className={s.dataFlowTitle}>
            Data flows from Vital Buddy to all who need it
          </h2>
          <p className={s.dataFlowSubtitle}>
            From bedside data to clinical insight, a complete connected
            ecosystem
          </p>

          <div className={s.flowDiagram}>
            {/* Row 1: three top cards with horizontal arrows */}
            <div className={s.flowRow1}>
              {/* Vital Buddy */}
              <div className={s.flowCol}>
                <div className={s.stepBadge}>
                  <span className={s.stepDot} />
                  <span className={s.stepLabel}>STEP 1: DATA CAPTURE</span>
                </div>
                <div className={s.flowCard}>
                  <div className={s.cardIconBox}>
                    <img
                      src="/images/platform/Data-flows-svg/vital-buddy.svg"
                      width={32}
                      height={32}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className={s.cardTitle}>Vital Buddy</h3>
                    <p className={s.cardBody}>
                      Comfortable wearable device that continuously monitors
                      vitals
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow → */}
              <div className={s.arrowWrap}>
                <div className={s.arrowLine} />
                <div className={s.arrowTipRight} />
              </div>

              {/* Vital Link */}
              <div className={s.flowCol}>
                <div className={s.stepBadge}>
                  <span className={s.stepDot} />
                  <span className={s.stepLabel}>STEP 2: TRANSMISSION</span>
                </div>
                <div className={s.flowCard}>
                  <div className={s.cardIconBox}>
                    <img
                      src="/images/platform/Data-flows-svg/vital-link.svg"
                      width={32}
                      height={32}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className={s.cardTitle}>Vital Link</h3>
                    <p className={s.cardBody}>
                      An app that provides secure, HIPAA-compliant data
                      transmission
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow → */}
              <div className={s.arrowWrap}>
                <div className={s.arrowLine} />
                <div className={s.arrowTipRight} />
              </div>

              {/* Integrations */}
              <div className={s.flowCol}>
                <div className={s.stepBadge}>
                  <span className={s.stepDot} />
                  <span className={s.stepLabel}>STEP 4: INTEGRATION</span>
                </div>
                <div className={s.flowCard}>
                  <div className={s.cardIconBox}>
                    <img
                      src="/images/platform/Data-flows-svg/integrations.svg"
                      width={32}
                      height={32}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className={s.cardTitle}>Integrations</h3>
                    <p className={s.cardBody}>
                      The VitalFriend platform integrates with 250
                      medical/wearable devices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connectors: Vital Link (unchanged) + Integrations → Vital Insights */}
            <div className={s.connectorsSection}>
              {/* Vital Link → Vital Insights — position unchanged */}
              <div className={s.vArrowCenter}>
                <div className={s.vArrowLine} />
                <div className={s.vArrowTipDown} />
              </div>
              {/* Integrations → Vital Insights right side (absolutely overlaid, extends 220px
                  past connector area so horizontal lands at VI card mid-height ~y=185). */}
              <svg
                className={s.intConnSvg}
                viewBox="0 0 1520 220"
                width="1520"
                height="220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="intg"
                    x1="0"
                    y1="0"
                    x2="1520"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#00D5BE" />
                    <stop offset="100%" stopColor="#00BBA7" />
                  </linearGradient>
                </defs>
                {/* Vertical drop from Integrations down to VI card middle height (~187px) */}
                <rect
                  x="1326"
                  y="0"
                  width="4"
                  height="187"
                  rx="2"
                  fill="url(#intg)"
                />
                {/* Horizontal left to VI right edge at VI card middle */}
                <rect
                  x="960"
                  y="183"
                  width="366"
                  height="4"
                  rx="2"
                  fill="url(#intg)"
                />
                {/* Left-pointing arrow at VI right edge, middle height */}
                <polygon points="952,185 960,177 960,193" fill="#BAD1CE" />
              </svg>
            </div>

            {/* Row 2: Vital Insights centered */}
            <div className={s.flowRow2}>
              <div className={s.flowInsightsCol}>
                <div className={s.stepBadge}>
                  <span className={s.stepDot} />
                  <span className={s.stepLabel}>STEP 3: CLINICAL ANALYSIS</span>
                </div>
                <div className={s.flowCard}>
                  <div className={s.cardIconBox}>
                    <img
                      src="/images/platform/Data-flows-svg/vital-insights.svg"
                      width={32}
                      height={32}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className={s.cardTitle}>Vital Insights</h3>
                    <p className={s.cardBody}>
                      Vital trend review tools for physicians, caregivers and
                      families
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* T-connector: Vital Insights → Physicians / Caregivers / Family
                viewBox 1200×80 — card centers: x=192, x=600, x=1008. VI center: x=600. */}
            <svg
              className={s.tConnSvg}
              viewBox="0 0 1200 80"
              width="1200"
              height="80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="tcg"
                  x1="0"
                  y1="0"
                  x2="1200"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#00D5BE" />
                  <stop offset="100%" stopColor="#00BBA7" />
                </linearGradient>
              </defs>
              {/* Stem */}
              <rect
                x="598"
                y="0"
                width="4"
                height="32"
                rx="2"
                fill="url(#tcg)"
              />
              {/* T-bar */}
              <rect
                x="192"
                y="30"
                width="816"
                height="4"
                rx="2"
                fill="url(#tcg)"
              />
              {/* Left drop */}
              <rect
                x="190"
                y="34"
                width="4"
                height="26"
                rx="2"
                fill="url(#tcg)"
              />
              {/* Center drop */}
              <rect
                x="598"
                y="34"
                width="4"
                height="26"
                rx="2"
                fill="url(#tcg)"
              />
              {/* Right drop */}
              <rect
                x="1006"
                y="34"
                width="4"
                height="26"
                rx="2"
                fill="url(#tcg)"
              />
              {/* Arrow tips */}
              <polygon points="192,60 184,52 200,52" fill="#BAD1CE" />
              <polygon points="600,60 592,52 608,52" fill="#BAD1CE" />
              <polygon points="1008,60 1000,52 1016,52" fill="#BAD1CE" />
            </svg>

            {/* Row 3: Bottom blue cards */}
            <div className={s.flowRow3}>
              <div className={s.blueCard}>
                <div className={s.blueCardIcon}>
                  <img
                    src="/images/platform/Data-flows-svg/physicians.svg"
                    width={36}
                    height={36}
                    alt=""
                  />
                </div>
                <h3 className={s.blueCardTitle}>Physicians</h3>
                <p className={s.blueCardSub}>
                  Real-time clinical notifications
                </p>
              </div>

              <div className={s.blueCard}>
                <div className={s.blueCardIcon}>
                  <img
                    src="/images/platform/Data-flows-svg/caregivers.svg"
                    width={36}
                    height={36}
                    alt=""
                  />
                </div>
                <h3 className={s.blueCardTitle}>Caregivers</h3>
                <p className={s.blueCardSub}>
                  Helpful reminders &amp; notifications
                </p>
              </div>

              <div className={s.blueCard}>
                <div className={s.blueCardIcon}>
                  <img
                    src="/images/platform/Data-flows-svg/family.svg"
                    width={36}
                    height={36}
                    alt=""
                  />
                </div>
                <h3 className={s.blueCardTitle}>Family</h3>
                <p className={s.blueCardSub}>Peace of mind updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Next-Level Care ── */}
      <section className={s.nextLevelSection}>
        <div className={s.nextLevelInner}>
          <div className={s.nextLevelText}>
            <h2 className={s.nextLevelTitle}>
              A Platform That Enables Next-Level Care
            </h2>
            <p className={s.nextLevelBody}>
              Our platform doesn&apos;t just collect data. It learns the
              user&apos;s unique baselines. Tools help clinicians review vital
              sign trends and data deviations from an established baseline, and
              can send customizable notifications to clinicians, caregivers and
              family.
            </p>
          </div>
          <Image
            src="/images/platform/devices.png"
            alt="VitalFriend platform across tablet, watch and phone"
            width={1116}
            height={866}
            style={{ objectFit: "contain", maxWidth: "100%", display: "block" }}
          />
        </div>
      </section>

      {/* ── How Vital Buddy Works ── */}
      <section className={s.howSection}>
        <div className={s.howInner}>
          {/* Header */}
          <div className={s.howHeader}>
            <h2 className={s.howTitle}>How Vital Buddy Works</h2>
            <p className={s.howSubtitle}>
              Data flows automatically from Vital Buddy through our platform
              where it is reviewed by our clinicians using vital trend review
              tools.
              <br />
              It provides real-time updates to physicians, caregivers and family
              members, who can act early.
            </p>
          </div>

          {/* Step cards */}
          <div className={s.howCards}>
            {/* Step 1 */}
            <div className={s.howCard}>
              <div
                className={s.howIconBox}
                style={{
                  background:
                    "linear-gradient(135deg, #2B7FFF 0%, #00B8DB 100%)",
                }}
              >
                <img
                  src="/images/platform/Vital-Buddy-Works/vital-buddy-captures.svg"
                  width={32}
                  height={32}
                  alt=""
                />
              </div>
              <span className={s.howStep}>STEP 1</span>
              <h3 className={s.howCardTitle}>Vital Buddy captures</h3>
              <p className={s.howCardBody}>
                Key vital signs and physiological measurements, continuously on
                the wrist.
              </p>
            </div>

            <div className={s.howConnector} />

            {/* Step 2 */}
            <div className={s.howCard}>
              <div
                className={s.howIconBox}
                style={{
                  background:
                    "linear-gradient(135deg, #00B8DB 0%, #00BBA7 100%)",
                }}
              >
                <img
                  src="/images/platform/Vital-Buddy-Works/data-uploads.svg"
                  width={32}
                  height={32}
                  alt=""
                />
              </div>
              <span className={s.howStep}>STEP 2</span>
              <h3 className={s.howCardTitle}>Data uploads</h3>
              <p className={s.howCardBody}>
                Via VitalLink, our HIPAA-compliant data layer.
              </p>
            </div>

            <div className={s.howConnector} />

            {/* Step 3 */}
            <div className={s.howCard}>
              <div
                className={s.howIconBox}
                style={{
                  background:
                    "linear-gradient(135deg, #AD46FF 0%, #F6339A 100%)",
                }}
              >
                <img
                  src="/images/platform/Vital-Buddy-Works/clinicians-interpret.svg"
                  width={32}
                  height={32}
                  alt=""
                />
              </div>
              <span className={s.howStep}>STEP 3</span>
              <h3 className={s.howCardTitle}>Clinicians Review</h3>
              <p className={s.howCardBody}>
                Vital trend review tools help clinicians review vital signs
                trends and data deviations.
              </p>
            </div>

            <div className={s.howConnector} />

            {/* Step 4 */}
            <div className={s.howCard}>
              <div
                className={s.howIconBox}
                style={{
                  background:
                    "linear-gradient(135deg, #F6339A 0%, #FF2056 100%)",
                }}
              >
                <img
                  src="/images/platform/Vital-Buddy-Works/caregivers-notified.svg"
                  width={32}
                  height={32}
                  alt=""
                />
              </div>
              <span className={s.howStep}>STEP 4</span>
              <h3 className={s.howCardTitle}>Caregivers notified</h3>
              <p className={s.howCardBody}>
                Notifications go to key players on the care team.
              </p>
            </div>

            <div className={s.howConnector} />

            {/* Step 5 */}
            <div className={s.howCard}>
              <div
                className={s.howIconBox}
                style={{
                  background:
                    "linear-gradient(135deg, #F6339A 0%, #7920FF 100%)",
                }}
              >
                <img
                  src="/images/platform/Vital-Buddy-Works/care-provided.svg"
                  width={32}
                  height={32}
                  alt=""
                />
              </div>
              <span className={s.howStep}>STEP 5</span>
              <h3 className={s.howCardTitle}>Care provided</h3>
              <p className={s.howCardBody}>
                Documented in EHR; CPT code billed.
              </p>
            </div>
          </div>

          {/* Outcomes banner */}
          <div className={s.howBanner}>
            <p className={s.howBannerLabel}>
              Median time, sensor → clinician acknowledgment:
            </p>
            <p className={s.howBannerHighlight}>
              Fewer surprises and better outcomes
            </p>
          </div>

          {/* CTA */}
          <div className={s.howCta}>
            <h2 className={s.howCtaTitle}>Ready to transform patient care?</h2>
            <p className={s.howCtaBody}>
              Join healthcare providers who are catching critical events before
              they <br />
              become emergencies
            </p>
            <Link href="/contactUs" className={s.howCtaBtn}>
              Chat with Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Meet Vital Buddy ── */}
      <section className={s.meetBuddySection}>
        <div className={s.meetBuddyInner}>
          {/* Left image */}
          <div className={s.meetBuddyImageCol}>
            <Image
              src="/images/platform/buddies.png"
              alt="Vital Buddy FDA-Cleared Vitals Wearable"
              width={599}
              height={452}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                display: "block",
              }}
            />
          </div>

          {/* Right content */}
          <div className={s.meetBuddyContent}>
            <h2 className={s.meetBuddyTitle}>
              Meet Vital Buddy
              <br />
              The FDA-Cleared Vitals
              <br />
              Wearable
            </h2>
            <p className={s.meetBuddySubtitle}>
              Medical-Grade Vitals Monitoring Has Never Been This Comfortable
            </p>
            <p className={s.meetBuddyBody}>
              Vital Buddy, an FDA-cleared medical watch, monitors blood
              pressure, heart rate, SpO2 and multiple vital signs automatically.
              Data from Vital Buddy flows to authorized recipients including
              doctors, care providers and families.
            </p>
            <Link href="/contactUs" className={s.meetBuddyBtn}>
              Discover more
            </Link>
          </div>
        </div>
      </section>

      {/* ── VitalInsights ── */}
      <section className={s.vitalInsightsSection}>
        <div className={s.vitalInsightsInner}>
          {/* Left image */}
          <div className={s.vitalInsightsImageCol}>
            <Image
              src="/images/platform/Monitoring-Platform.png"
              alt="Vital Insights remote senior health monitoring platform"
              width={468}
              height={337}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                display: "block",
              }}
            />
          </div>

          {/* Right content */}
          <div className={s.vitalInsightsContent}>
            <h2 className={s.vitalInsightsTitle}>
              <span className={s.vitalInsightsGradient}>Vital Insights: </span>
              The Remote Senior Health Monitoring Platform
            </h2>
            <p className={s.vitalInsightsSubtitle}>
              Smart Health Tracking Across Hours, Days, Weeks and Months
            </p>
            <p className={s.vitalInsightsBody}>
              Our HIPAA-compliant platform captures 1,000+ data points per
              patient per day. Automated data aggregation and licensed clinician
              review surface changes in monitored vitals and share them with the
              care team to support clinical decision-making.
            </p>
            <Link href="/scheduleDemo" className={s.vitalInsightsBtn}>
              Get a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Healthcare Professionals ── */}
      <section className={s.proSection}>
        <div className={s.proInner}>
          {/* Left image */}
          <div className={s.proImgCol}>
            <Image
              src="/images/platform-professionals.png"
              alt="Healthcare professionals using VitalFriend"
              width={606}
              height={999}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>

          {/* Right content */}
          <div className={s.proContentCol}>
            <h2 className={s.proTitle}>
              A Holistic View for
              <br />
              Healthcare Professionals
            </h2>
            <ul className={s.proList}>
              {professionalPoints.map((point, i) => (
                <li key={i} className={s.proItem}>
                  <svg
                    className={s.proCheckIcon}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`cg${i}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="14.29%" stopColor="#6E70FF" />
                        <stop offset="85.29%" stopColor="#D393F1" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="11"
                      cy="11"
                      r="10"
                      stroke={`url(#cg${i})`}
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 11.5l2.5 2.5 5.5-6"
                      stroke={`url(#cg${i})`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={point.italic ? s.proItemItalic : undefined}>
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Vital Link Connection ── */}
      <section className={s.vitalLinkSection}>
        <div className={s.vitalLinkInner}>
          {/* Left text */}
          <div className={s.vitalLinkContent}>
            <h2 className={s.vitalLinkTitle}>Vital Link Connection</h2>
            <p className={s.vitalLinkSubtitle}>
              Smart Vitals Tracking. Important Metrics Monitored.
            </p>
            <div className={s.vitalLinkPoints}>
              <p className={s.vitalLinkIntro}>
                In addition to core connectivity, we provide:
              </p>
              {[
                "Monthly reports for residents, facilities and physicians.",
                "Easy to upload medications via OCR technology for managing medication reminders.",
                "Enables simple messaging communication between residents and families.",
              ].map((point, i) => (
                <div key={i} className={s.vitalLinkItem}>
                  <svg
                    className={s.proCheckIcon}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`vlcg${i}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="14.29%" stopColor="#6E70FF" />
                        <stop offset="85.29%" stopColor="#D393F1" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="11"
                      cy="11"
                      r="10"
                      stroke={`url(#vlcg${i})`}
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 11.5l2.5 2.5 5.5-6"
                      stroke={`url(#vlcg${i})`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={s.vitalLinkItemText}>{point}</span>
                </div>
              ))}
            </div>
            <Link href="/scheduleDemo" className={s.meetBuddyBtn}>
              Discover more
            </Link>
          </div>

          {/* Right image */}
          <div className={s.vitalLinkImageCol}>
            <Image
              src="/images/platform/iphone-medication_1-removebg-preview.png"
              alt="Vital Link medication reminder app on iPhone"
              width={345}
              height={708}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Take the Next Step ── */}
      <section className={s.nextStepSection}>
        <div className={s.nextStepInner}>
          {/* Badge */}
          <div className={s.nextStepBadge}>
            <span className={s.nextStepBadgeText}>Take the Next Step</span>
          </div>

          {/* Title */}
          <h2 className={s.nextStepTitle}>
            Are you a MedTech, RPM or Device vendor
            <br />
            looking to partner with VitalFriend?
          </h2>

          {/* Description */}
          <p className={s.nextStepBody}>
            Schedule a meeting with a VitalFriend partner specialist. We&apos;ll
            walk you through the Vital Buddy
            <br />
            experience, tailored to your facility type, and answer every
            question your team has.
          </p>

          {/* CTA button */}
          <Link href="/contactUs" className={s.nextStepBtn}>
            Let&apos;s Chat
          </Link>

          {/* Trust badges */}
          <div className={s.nextStepTrust}>
            <span className={s.nextStepTrustItem}>No commitment required</span>
            <span className={s.nextStepTrustItem}>
              Insurance verification included
            </span>
            <span className={s.nextStepTrustItem}>Onboarding in days</span>
          </div>
        </div>
      </section>
    </>
  );
}
