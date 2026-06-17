"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { tabs } from "./data";
import s from "./facilities.module.css";

export default function FacilitiesTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <>
      {/* Tab pills */}
      <div className={s.tabPills}>
        {tabs.map((t, i) => (
          <button
            key={i}
            className={`${s.tabPill}${active === i ? ` ${s.tabPillActive}` : ""}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className={s.tabCardsGrid}>
        {tab.cards.map((card, i) => (
          <div
            key={i}
            className={`${s.tabCard}${i === tab.cards.length - 1 ? ` ${s.tabCardLast}` : ""}`}
          >
            <div className={s.tabCardIcon}>
              {card.iconSrc ? (
                <Image
                  src={card.iconSrc}
                  alt={card.title}
                  width={40}
                  height={40}
                />
              ) : (
                card.icon
              )}
            </div>
            <h3 className={s.tabCardTitle}>{card.title}</h3>
            <p className={s.tabCardDesc}>{card.desc}</p>
            <div className={s.tabCardTagWrapper}>
              <span
                className={`${s.tabCardTag}${i === tab.cards.length - 1 ? ` ${s.tabCardTagGreen}` : ""}`}
              >
                {card.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner — changes per tab */}
      <div className={s.ctaBannerOuter} style={{ padding: "40px 0 40px" }}>
        <div className={s.ctaBannerCard}>
          <div className={s.ctaBannerLeft}>
            <p className={s.ctaBannerQuote}>&ldquo;{tab.ctaQuote}&rdquo;</p>
            <p className={s.ctaBannerAuthor}>• {tab.ctaAuthor}</p>
          </div>
          <Link href="/contactUs" className={s.ctaBannerBtn}>
            {tab.ctaButtonText}
          </Link>
        </div>
      </div>

      {/* Vitals Grid Section */}
      <div className={s.vitalsSection}>
        <div className={s.vitalsBlobLeft} />
        <div className={s.vitalsBlobRight} />
        <div className={s.vitalsInner}>
          <h2 className={s.vitalsHeading}>
            Critical Vitals are Automatically
            <br />
            Monitored Every Day &amp; Night
          </h2>
          <p className={s.vitalsSubtitle}>
            Vital Buddy automatically monitors multiple vital signs and health
            data while providing health reminders and threshold-based
            notifications:
          </p>
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
                    {vital.src && (
                      <Image
                        src={vital.src}
                        alt={vital.label}
                        width={36}
                        height={36}
                      />
                    )}
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
      </div>

      {/* Insurance Section — changes per tab */}
      <div className={s.insuranceOuter} style={{ padding: "80px 0 40px" }}>
        <div className={s.insuranceCard}>
          <div className={s.insuranceContent}>
            <div className={s.insuranceBadge}>
              <span className={s.insuranceBadgeText}>
                Reimbursement Eligibility
              </span>
            </div>
            <h2 className={s.insuranceHeading}>
              <span className={s.insuranceHeadingGradient}>
                Vital Buddy may be eligible for reimbursement{" "}
              </span>
            </h2>
            <p className={s.insuranceBody}>{tab.insuranceBody}</p>
            <Link href="/contactUs" className={s.insuranceBtn}>
              {tab.insuranceButtonText}
            </Link>
          </div>
          <div className={s.insuranceImageWrapper}>
            <Image
              src={tab.insuranceImage}
              alt="Senior resident using VitalFriend"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom right" }}
            />
          </div>
        </div>
      </div>

      {/* Stats Section — changes per tab */}
      <div className={s.statsSection}>
        <h2 className={s.statsHeading}>Demonstrated Value</h2>
        <p className={s.statsSubtitle}>{tab.statsSubtitle}</p>
        <div className={s.statsInner}>
          {tab.stats.map((stat, i) => (
            <div key={i} className={s.statItem}>
              <p className={s.statNumber}>{stat.number}</p>
              <p className={s.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
