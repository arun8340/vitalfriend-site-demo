import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FacilitiesTabs from "./FacilitiesTabs";
import s from "./facilities.module.css";
import { testimonials, certPoints, deploySteps } from "./data";

export const metadata: Metadata = {
  title: "For Senior Care Facilities | VitalFriend",
  description:
    "Continuous vitals monitoring for every level of care. FDA-cleared, Medicare reimbursable, and zero cost to residents.",
  alternates: { canonical: "https://vitalfriend.com/facilities" },
  openGraph: { url: "https://vitalfriend.com/facilities" },
};

export default function FacilitiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={s.heroSection}>
        <div className={s.heroBlobRight} />
        <div className={s.heroBlobLeft} />
        <div className={s.heroInner}>
          <div className={s.heroBadge}>
            <span className={s.heroBadgeText}>For Senior Care Facilities</span>
          </div>
          <h1 className={s.heroTitle}>
            <span className={s.heroTitleGradient}>Continuous Health Monitoring</span>
            <br />
            <span className={s.heroTitleGradient}>Across Senior Care</span>
          </h1>
          <p className={s.heroSubtitle}>
            The Vital Buddy wearable monitors vitals across all levels of senior care, giving staff, families, and physicians timely visibility into resident health data.
          </p>
          <div className={s.heroBtns}>
            <Link href="/contact" className={s.heroBtnPrimary}>
              Schedule a Free Demo
            </Link>
          </div>
          <p className={s.heroFinePrint}>
            Eligible for reimbursement under Medicare RPM codes
          </p>
          <div className={s.heroImageWrapper}>
            <Image
              src="/images/facilities_sleepingWomen.png"
              alt="Senior resident using Vital Buddy wearable"
              width={1024}
              height={440}
              className={s.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── BUDDI Works Across ── */}
      <section className={s.tabsSection} id="care-levels">
        <div className={s.tabsInner}>
          <div className={s.tabsBadgeWrapper}>
            <span className={s.tabsBadge}>Find Your Facility Type</span>
          </div>
          <h2 className={s.tabsHeading}>
            <span className={s.tabsHeadingGradient}>BUDDI works across</span><span className={s.tabsHeadingBlack}> every</span>
            <br />
            <span className={s.tabsHeadingBlack}> level of care.</span>
          </h2>
          <FacilitiesTabs />
        </div>
      </section>



      {/* ── Testimonials ── */}
      <section className={s.testimonialsSection}>
        <div className={s.testimonialsInner}>
          <div className={s.testimonialsHeaderLeft}>
            <span className={s.testimonialsBadge}>What Care Teams Are Saying</span>
            <h2 className={s.testimonialsHeading}>
              Real words from the people<br />who use it every day
            </h2>
          </div>
          <div className={s.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={`${s.testimonialCard} ${i === 0 ? s.testimonialCardGreen : i === 2 ? s.testimonialCardPink : s.testimonialCardNeutral}`}>
                <p className={s.testimonialQuote}>{t.quote}</p>
                <div className={s.testimonialAuthor}>
                  <div className={s.testimonialAvatar}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" fill="#fff" opacity="0.9"/>
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.9"/>
                    </svg>
                  </div>
                  <div>
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

      {/* ── Certification Section ── */}
      <section className={s.certSection}>
        <div className={s.certInner}>
          {/* Left: VF Certified image + feature tabs */}
          <div className={s.certLeft}>
            <div className={s.certImageWrapper}>
              <Image
                src="/images/vitalfriend-badge.png"
                alt="VF Certified™"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={s.certPointsList}>
              {certPoints.map((point, i) => (
                <div key={i} className={s.certPointItem}>
                  <div className={s.certPointIcon}>{point.icon}</div>
                  <p className={s.certPointText}>{point.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: heading + body */}
          <div className={s.certRight}>
            <h2 className={s.certHeading}>
              <span className={s.certHeadingGradient}>Turn technology into a</span>
              <br />
              <strong>competitive advantage</strong>
            </h2>
            <p className={s.certBody}>
              Families searching for senior care want proof of quality, not just a promise. VitalFriend Certified
              is a trusted, recognized signal that your facility invests in the health and safety of every resident.
            </p>
            <p className={s.certBody}>
              Whether you&apos;re an Assisted Living, Independent Living, or Residential Home Facility, early adopters
              gain a meaningful boost in reputation and occupancy by highlighting the program.
            </p>
          </div>
        </div>
      </section>

      {/* ── Deployment Steps ── */}
      <section className={s.deploySection}>
        <div className={s.deployInner}>
          <div className={s.deployBadgeWrapper}>
            <span className={s.deployBadge}>Getting Started</span>
          </div>
          <h2 className={s.deployHeading}>
            <span className={s.deployHeadingGradient}>From demo to deployment in days,</span>
            <br />
            <strong>not months</strong>
          </h2>
          <div className={s.deploySteps}>
            {deploySteps.map((step, i) => (
              <div key={i} className={s.deployStep}>
                <div
                  className={s.deployStepRing}
                  style={{ background: step.ringGradient }}
                >
                  <div className={s.deployStepRingInner}>
                    <div
                      className={s.deployStepColorCircle}
                      style={{ background: step.circleColor }}
                    >
                      <div
                        className={s.deployStepWhiteCircle}
                        style={{ boxShadow: `0px 10px 6px 0px ${step.shadowColor}` }}
                      >
                        <p className={s.deployStepNumber}>{step.step}</p>
                        <p className={s.deployStepLabel}>STEP</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className={s.deployStepTitle}>{step.title}</h3>
                <p className={s.deployStepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={s.finalCtaSection}>
        <div className={s.finalCtaBadgeWrapper}>
          <span className={s.finalCtaBadge}>Take the Next Step</span>
        </div>
        <h2 className={s.finalCtaHeading}>
          Ready to give your residents
          <br />
          the care they <strong className={s.finalCtaHeadingBlack}>deserve?</strong>
        </h2>
        <p className={s.finalCtaSubtitle}>
          Schedule a 20-minute demo with a VitalFriend specialist. We&apos;ll walk you through the Vital Buddy
          experience, tailored to your facility type, and answer every question your team has.
        </p>
        <div className={s.finalCtaBtns}>
          <Link href="/contact" className={s.finalCtaBtnPrimary}>
            Schedule a Free Demo
          </Link>
        </div>
        <div className={s.finalCtaFinePrint}>
          <span>No commitment required</span>
          <span>Insurance qualification included</span>
          <span>Onboarding in days</span>
        </div>
      </section>
    </>
  );
}
