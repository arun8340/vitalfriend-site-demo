import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  workSteps,
  audienceSections,
  comparisonRows,
  differenceItems,
} from "./data";
import styles from "./homepage.module.css";
import HeroCarousel from "./hero_carousel";

export const metadata: Metadata = {
  title: "Continuous Vitals Intelligence for Better Senior Care",
  description:
    "VitalFriend is an FDA-cleared consumer wearable platform that continuously monitors blood pressure and 10+ vital signs, shifting senior care from reactive treatment to proactive, continuous care.",
  alternates: { canonical: "https://vitalfriend.com" },
  openGraph: { url: "https://vitalfriend.com" },
};

/* ─── Reusable CheckIcon ─── */
function CheckIcon({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <span
        className={`${styles["hp-compare__check-icon"]} ${styles["hp-compare__check-icon--yes"]}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="rgba(77,154,241,0.4)"
            stroke="#4D9AF1"
            strokeWidth="1.5"
          />
          <path
            d="M8 12l2.5 2.5L16 9"
            stroke="#4D9AF1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  return (
    <span
      className={`${styles["hp-compare__check-icon"]} ${styles["hp-compare__check-icon--no"]}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="rgba(176,176,176,0.4)"
          stroke="#B0B0B0"
          strokeWidth="1.5"
        />
        <path
          d="M9 9l6 6M15 9l-6 6"
          stroke="#B0B0B0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/* ─── Feature check icon (audience sections) ─── */
function FeatureCheck() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="rgba(110,112,255,0.15)"
        stroke="url(#check-grad)"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 12l2.5 2.5L15.5 9"
        stroke="url(#check-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="check-grad"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E70FF" />
          <stop offset="1" stopColor="#D393F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className={styles["hp-root"]}>
      {/* ═══════════════════════════════
          HERO
      ═══════════════════════════════ */}
      <section className={styles["hp-hero"]}>
        {/* Decorative blobs */}
        <div
          className={`${styles["hp-hero__blob"]} ${styles["hp-hero__blob--blue"]}`}
          aria-hidden="true"
        />
        <div
          className={`${styles["hp-hero__blob"]} ${styles["hp-hero__blob--green"]}`}
          aria-hidden="true"
        />
        <div
          className={`${styles["hp-hero__blob"]} ${styles["hp-hero__blob--lightgreen"]}`}
          aria-hidden="true"
        />
        <div
          className={`${styles["hp-hero__blob"]} ${styles["hp-hero__blob--peach"]}`}
          aria-hidden="true"
        />

        <div className={styles["hp-hero__inner"]}>
          {/* Text column */}
          <div className={styles["hp-hero__content"]}>
            <span className={styles["hp-hero__badge"]}>
              FDA-Cleared (510(k)) | Eligible for Medicare & Most Private
              Insurance*
            </span>

            <div>
              <h1 className={styles["hp-hero__heading-gradient"]}>
                The Era of Continuous Care is Here
              </h1>
              <h2 className={styles["hp-hero__heading-black"]}>
                Smarter Care.
              </h2>
              <h2 className={styles["hp-hero__heading-black"]}>
                Safer Patients.
              </h2>
              <h2 className={styles["hp-hero__heading-black"]}>
                Always Connected.
              </h2>
            </div>

            <p className={styles["hp-hero__description"]}>
              Vital Buddy is a wearable monitoring device that tracks blood pressure
              and selected vital signs for review by care teams.
              Vital Buddy supports ongoing vital signs tracking for
              seniors and individuals managing chronic health conditions.
            </p>
            <p className={styles["hp-hero__description"]}>
              Clinicians can review daily health data, vital sign trends,
              and deviations from personal baselines through the VitalFriend platform.
              Care teams and families get a real-time picture of each
              senior&apos;s health, so they know what&apos;s happening and can
              step in early.
            </p>
            <p className={styles["hp-hero__description"]}>
              Automated Continuous Monitoring. Support timely care with ongoing
              vital signs tracking.
            </p>

            <div className={styles["hp-hero__ctas"]}>
              <Link href="/scheduleDemo" className={styles["hp-btn-primary"]}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <path
                    d="M8 4V2M16 4V2M3 9h18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Schedule a Demo
              </Link>
              <Link href="/platform" className={styles["hp-btn-outline"]}>
                Explore Platform
              </Link>
            </div>
          </div>
          <HeroCarousel />
        </div>
      </section>

      {/* ═══════════════════════════════
          Medical Equipment Has Never Been This Comfortable (and Fun)
      ═══════════════════════════════ */}

      <section
        className={`${styles["hp-section"]} ${styles["hp-section--white-bg"]} ${styles["hp-section--no-pb"]}`}
      >
        <div className={styles["hp-section__inner"]}>
          <div className={styles["hp-section-header"]}>
            <h2 className={styles["hp-section-header__title-gradient"]}>
              Comfortable Enough to Wear All Day. <br /> Smart Enough to Make a Difference.
            </h2>
            <p className={styles["hp-section-header__subtitle"]}>
              Designed for all-day wear, Vital Buddy stands out among
              traditional monitoring devices. Vital Buddy is lightweight,
              comfortable, and effortless to wear day and night. No cuffs, no
              buttons, no readings to remember. Simply wear the device for
              automatic tracking of blood pressure and heart rate, with data
              shared to keep caregivers informed of vital signs changes.
            </p>
            <p className={styles["hp-section-header__subtitle"]}>
              Beneath its simple design lies professional medical technology:
              FDA-cleared (510(k)) monitoring functions and wrist-worn sensor technology, plus a platform enabling communication between caregivers
              and users. May be eligible for reimbursement through Medicare RPM programs and certain private insurance plans when applicable requirements are met.
            </p>
            <div className={styles["hp-buddi__image-wrap"]}>
              <Image
                src="images/buddy-hippa.png"
                alt="VitalFriend platform product snapshot"
                width={693}
                height={525}
                style={{ maxWidth: "100%", height: "auto", borderRadius: 12 }}
                unoptimized
              />
            </div>
            <div className={styles["hp-buddi__cta-row"]}>
              <Link href="/contactUs" className={styles["hp-buddi__btn"]}>
                Get a Vital Buddy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          HOW VITAL BUDDY WORKS
      ═══════════════════════════════ */}
      <section className={styles["howSection"]}>
        <div className={styles["hp-how__inner"]}>
          <div className={styles["hp-how__header"]}>
            <h2 className={styles["hp-how__title"]}>How Vital Buddy Works</h2>
            <p className={styles["hp-how__subtitle"]}>
              Clear, five-step process: From Vital Buddy on the wrist to care
              delivered, it&apos;s completely managed by our teams to
              streamline the process and close the loop on care.
            </p>
          </div>

          <div className={styles["hp-how__cards"]}>
            {workSteps.map((step, index) => (
              <Fragment key={step.step}>
                <div className={styles["hp-how__card"]}>
                  <div
                    className={styles["hp-how__icon-box"]}
                    style={{
                      background: `linear-gradient(135deg, ${step.gradientFrom} 0%, ${step.gradientTo} 100%)`,
                    }}
                  >
                    <Image
                      src={step.iconSrc}
                      width={24}
                      height={24}
                      alt=""
                      unoptimized
                    />
                  </div>
                  <span className={styles["hp-how__step"]}>{step.step}</span>
                  <h3 className={styles["hp-how__card-title"]}>{step.title}</h3>
                  <p className={styles["hp-how__card-body"]}>
                    {step.description}
                  </p>
                </div>
                {index < workSteps.length - 1 && (
                  <div className={styles["hp-how__connector"]} />
                )}
              </Fragment>
            ))}
          </div>

          <div className={styles["hp-how__banner"]}>
            <p className={styles["hp-how__banner-label"]}>
              Integrated monitoring platform delivers
            </p>
            <p className={styles["hp-how__banner-highlight"]}>
              More Organized Data + Ongoing Review = Greater Health Data
              Transparency
            </p>
          </div>

          <div className={styles["hp-how__cta"]}>
            <h2 className={styles["hp-how__cta-title"]}>
              Ready to enhance senior care?
            </h2>
            <p className={styles["hp-how__cta-body"]}>
              Supporting ongoing review of vital sign changes by healthcare providers.
            </p>
            <Link href="/contactUs" className={styles["hp-how__cta-btn"]}>
              Get Started with Vital Buddy
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          AUDIENCE SECTIONS
      ═══════════════════════════════ */}
      {audienceSections.map((section, idx) => (
        <section
          key={idx}
          className={styles["hp-section"]}
          style={{ background: section.bgColor }}
        >
          <div className={styles["hp-section__inner"]}>
            <div
              className={`${styles["hp-audience"]}${section.imageLeft ? ` ${styles["hp-audience--reverse"]}` : ""}`}
            >
              {/* Image */}
              <div className={styles["hp-audience__image"]}>
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className={styles["hp-audience__content"]}>
                <span
                  className={styles["hp-audience__badge"]}
                  style={{ background: section.badgeGradient }}
                >
                  {section.badge}
                </span>

                <div className={styles["hp-audience__text-group"]}>
                  <div className={styles["hp-audience__heading"]}>
                    <h2 className={styles["hp-audience__heading-gradient"]}>
                      {section.headingGradient}
                    </h2>
                    <h3 className={styles["hp-audience__heading-black"]}>
                      {section.headingBlack}
                    </h3>
                  </div>

                  <p className={styles["hp-audience__description"]}>
                    {section.description}
                  </p>

                  <ul className={styles["hp-audience__features"]}>
                    {section.features.map((f, fi) => (
                      <li key={fi} className={styles["hp-audience__feature"]}>
                        <span className={styles["hp-audience__feature-icon"]}>
                          <FeatureCheck />
                        </span>
                        <span className={styles["hp-audience__feature-text"]}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href={section.href} className={styles["hp-audience__btn"]}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════
          COMPARISON TABLE
      ═══════════════════════════════ */}
      <section
        className={`${styles["hp-section"]} ${styles["hp-section--white-bg"]} ${styles["hp-compare"]}`}
      >
        <div className={styles["hp-section__inner"]}>
          <div className={styles["hp-section-header"]}>
            <span className={styles["hp-compare__badge"]}>
              Vital Buddy vs. Conventional Monitoring Equipment
            </span>
            <h2 className={styles["hp-section-header__title-black"]}>
              All-in-One Design
            </h2>
            <h2 className={styles["hp-section-header__title-black"]}>
              Side-by-Side Comparison
            </h2>
            <p className={styles["hp-section-header__subtitle"]}>
              Vital Buddy replaces a cart of single-purpose instruments with one
              connected stream of vitals so staff, families, and physicians get
              the visibility they need, exactly when they need it.
            </p>
          </div>

          <div className={styles["hp-compare__table"]}>
            {/* Header row */}
            <div className={styles["hp-compare__thead-row"]}>
              <div
                className={`${styles["hp-compare__th"]} ${styles["hp-compare__th--feature"]}`}
              >
                <div className={styles["hp-compare__th-value"]}>Dimension</div>
              </div>
              <div
                className={`${styles["hp-compare__th"]} ${styles["hp-compare__th--vf"]}`}
              >
                <div className={styles["hp-compare__th-label"]}>Featured</div>
                <div className={styles["hp-compare__th-value"]}>
                  <Image
                    src="/images/watch-02.svg"
                    alt="Watch icon representing Vital Buddy"
                    width={28}
                    height={46}
                  />
                  <span>Vital Buddy</span>
                </div>
              </div>
              <div
                className={`${styles["hp-compare__th"]} ${styles["hp-compare__th--competitors"]}`}
              >
                <div className={styles["hp-compare__th-label"]}>Baseline</div>
                <div className={styles["hp-compare__th-value"]}>
                  <Image
                    src="/images/cardiogram-01.svg"
                    alt="Cardiogram icon representing conventional medical equipment"
                    width={23}
                    height={22}
                  />
                  <span>Conventional Medical Equipment</span>
                </div>
              </div>
            </div>

            {/* Data rows */}
            {comparisonRows.map((row, i) => (
              <div className={styles["hp-compare__tbody-row"]} key={i}>
                <div
                  className={`${styles["hp-compare__td"]} ${styles["hp-compare__td--feature"]}`}
                >
                  <span className={styles["hp-compare__td-feature-label"]}>
                    {row.feature}
                  </span>
                </div>
                <div
                  className={`${styles["hp-compare__td"]} ${styles["hp-compare__td--vf"]}`}
                >
                  <CheckIcon checked={true} />
                  <span className={styles["hp-compare__td-text"]}>
                    {row.vitalBuddy === true
                      ? "Included"
                      : (row.vitalBuddy as string)}
                  </span>
                </div>
                <div
                  className={`${styles["hp-compare__td"]} ${styles["hp-compare__td--competitors"]}`}
                >
                  <CheckIcon checked={false} />
                  <span
                    className={`${styles["hp-compare__td-text"]} ${styles["hp-compare__td-text--no"]}`}
                  >
                    {row.competitors === false
                      ? "Not available"
                      : (row.competitors as string)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          THE VITALFRIEND DIFFERENCE
      ═══════════════════════════════ */}
      <section
        className={`${styles["hp-section"]} ${styles["hp-section--green-bg"]} ${styles["hp-section--difference"]}`}
      >
        <div className={styles["hp-section__inner"]}>
          <div className={styles["hp-section-header"]}>
            <h2 className={styles["hp-section-header__title-gradient"]}>
              The VitalFriend Difference
            </h2>
            <p className={styles["hp-section-header__subtitle"]}>
              The only platform with all the pieces for next-level senior care.
            </p>
          </div>

          <div className={styles["hp-difference__grid"]}>
            {differenceItems.map((item) => (
              <div className={styles["hp-difference__card"]} key={item.number}>
                <div className={styles["hp-difference__number-badge"]}>
                  {item.number}
                </div>
                <p className={styles["hp-difference__text"]}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          PLATFORM / PRODUCT SNAPSHOT
      ═══════════════════════════════ */}
      <section
        className={`${styles["hp-section"]} ${styles["hp-section--white-bg"]} ${styles["hp-section--platform"]}`}
      >
        <div className={styles["hp-section__inner"]}>
          <div className={styles["hp-section-header"]}>
            <h2 className={styles["hp-section-header__title-gradient"]}>
              A Platform to Keep Seniors Healthy &amp; Connected
            </h2>
            <p className={styles["hp-section-header__subtitle"]}>
              VitalFriend&apos;s unique ability to collect a steady stream of
              real-time vitals, day and night, is unparalleled in its ability to
              provide a comprehensive health picture of a senior or patient
              anywhere in the world.
            </p>
            {/* <Link href="/scheduleDemo" className={styles["hp-btn-outline"]}>
              Watch a Demo
            </Link> */}
          </div>

          <div className={styles["hp-platform__image-wrap"]}>
            <Image
              src="/images/product-snapshot.jpg"
              alt="VitalFriend platform product snapshot"
              width={1200}
              height={800}
              className={styles["hp-platform__main-image"]}
              unoptimized
            />
            <Image
              src="/images/hipaa-badge.png"
              alt="HIPAA Compliant"
              width={160}
              height={96}
              className={styles["hp-platform__hipaa-badge"]}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CTA BANNER
      ═══════════════════════════════ */}

      <section
        className={`${styles["hp-section"]} ${styles["hp-section--green-bg"]} ${styles["hp-section--cta"]}`}
      >
        <div className={styles["hp-section__inner"]}>
          <div className={styles["hp-section-header"]}>
            <h2 className={styles["hp-section-header__title-gradient"]}>
              Ready to Transform Senior Care?
            </h2>
            <p className={styles["hp-section-header__subtitle"]}>
              Discover how VitalFriend can help your facility deliver better
              care with less effort and risk.
            </p>
            <Link href="/platform" className={styles["hp-btn-outline"]}>
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
