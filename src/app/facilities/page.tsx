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
            <span className={s.heroTitleGradient}>Seniors deserve care</span>
            <br />
            <span className={s.heroTitleGradient}>that</span> never sleeps.
          </h1>
          <p className={s.heroSubtitle}>
            The BUDDI wearable continuously monitors vitals across all levels of senior care,<br />
            giving staff, families, and physicians the visibility they need, exactly when they need it.
          </p>
          <div className={s.heroBtns}>
            <Link href="/contact" className={s.heroBtnPrimary}>
              Schedule a Free Demo
            </Link>
            <Link href="#care-levels" className={s.heroBtnOutline}>
              Find Your Facility Type
            </Link>
          </div>
          <p className={s.heroFinePrint}>
            Covered by insurance · FDA-cleared · HIPAA-secure · No upfront cost
          </p>
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


      {/* ── Demonstrated Value (Stats) ── */}
      <section className={s.statsSection}>
        <h2 className={s.statsHeading}>Demonstrated Value</h2>
        <p className={s.statsSubtitle}>
          VitalFriend® unites care teams, physicians, and families on one platform, transforming data into insights that simplify care and improve outcomes.
        </p>
        <div className={s.statsInner}>
          <div className={s.statItem}>
            <p className={s.statNumber}>94%</p>
            <p className={s.statLabel}>of facilities report improved resident safety in 90 days</p>
          </div>
          <div className={s.statItem}>
            <p className={s.statNumber}>68%</p>
            <p className={s.statLabel}>fewer after-hours emergency calls</p>
          </div>
          <div className={s.statItem}>
            <p className={s.statNumber}>4.9★</p>
            <p className={s.statLabel}>average family satisfaction rating on care quality</p>
          </div>
          <div className={s.statItem}>
            <p className={s.statNumber}>2 hrs</p>
            <p className={s.statLabel}>saved per nurse per shift through automation</p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={s.testimonialsSection}>
        <div className={s.testimonialsInner}>
          <div className={s.testimonialsHeader}>
            <div className={s.testimonialsHeaderLeft}>
              <span className={s.testimonialsBadge}>What Care Teams Are Saying</span>
              <h2 className={s.testimonialsHeading}>
                Real words from the people<br />who use it every day.
              </h2>
            </div>
            <Link href="/contact" className={s.testimonialsBtn}>
              Read More Stories
            </Link>
          </div>
          <div className={s.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={`${s.testimonialCard}${i === 0 ? ` ${s.testimonialCardFirst}` : ""}`}>
                <p className={s.testimonialQuote}>{t.quote}</p>
                <div className={s.testimonialAuthor}>
                  <div className={s.testimonialAvatar}>
                    {t.avatar ? (
                      <Image src={t.avatar} alt={t.name} width={48} height={48} style={{ objectFit: "cover", borderRadius: "50%" }} />
                    ) : (
                      t.name.split(" ").map(w => w[0]).slice(0, 2).join("")
                    )}
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
                src="/images/VFCertified.png"
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
          {/* Right: badge + heading + body + button */}
          <div>
            <div className={s.certBadge}>
              <span className={s.certBadgeText}>VitalFriend Certified™</span>
            </div>
            <h2 className={s.certHeading}>
              <span className={s.certHeadingGradient}>Turn technology into a</span>
              <br />
              competitive
              <br />
              advantage.
            </h2>
            <p className={s.certBody}>
              Families searching for senior care want proof of quality — not just a promise. VitalFriend
              Certified™ is a trusted, recognized signal that your facility invests in the health and safety of every resident.
            </p>
            <p className={s.certBody} style={{ marginBottom: 32 }}>
              Whether you&apos;re an ALF, ILF, or SNF, early adopters gain a meaningful head start in reputation
              and occupancy as more facilities adopt BUDDI.
            </p>
            <Link href="/contact" className={s.certBtn}>
              Learn About Certification
            </Link>
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
            <span className={s.deployHeadingGradient}>From signup to full deployment</span>
            <br />
            <span className={s.deployHeadingGradient}>in</span>{" "}days, not months.
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
          the care they <span className={s.finalCtaHeadingBlack}>deserve?</span>
        </h2>
        <p className={s.finalCtaSubtitle}>
          Schedule a 20-minute demo with a VitalFriend specialist. We&apos;ll walk you through the BUDDI
          experience, tailored to your facility type, and answer every question your team has.
        </p>
        <div className={s.finalCtaBtns}>
          <Link href="/contact" className={s.finalCtaBtnPrimary}>
            Schedule a Free Demo
          </Link>
          <Link href="/contact" className={s.finalCtaBtnOutline}>
            Download the Facility Overview
          </Link>
        </div>
        <div className={s.finalCtaFinePrint}>
          <span>No commitment required</span>
          <span>Insurance verification included</span>
          <span>Onboarding in days</span>
        </div>
      </section>
    </>
  );
}
