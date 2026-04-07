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
            <div className={s.tabCardIcon}>{card.icon}</div>
            <h3 className={s.tabCardTitle}>{card.title}</h3>
            <p className={s.tabCardDesc}>{card.desc}</p>
            <div className={s.tabCardTagWrapper}>
              <span className={`${s.tabCardTag}${i === tab.cards.length - 1 ? ` ${s.tabCardTagGreen}` : ""}`}>
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
            <p className={s.ctaBannerQuote}>
              &ldquo;BUDDI enables comfortable, continuous vitals monitoring that eases staff workload, improves
              resident outcomes, keeps physicians and families informed, and is fully covered by insurance.&rdquo;
            </p>
            <p className={s.ctaBannerFinePrint}>
              *Coverage varies by plan. Contact us to verify your residents&apos; coverage.
            </p>
          </div>
          <Link href="/contact" className={s.ctaBannerBtn}>
            {tab.ctaButtonText}
          </Link>
        </div>
      </div>

      {/* Insurance Section — changes per tab */}
      <div className={s.insuranceOuter} style={{ padding: "80px 0 40px" }}>
        <div className={s.insuranceCard}>
          <div className={s.insuranceContent}>
            <div className={s.insuranceBadge}>
              <span className={s.insuranceBadgeText}>Insurance Coverage</span>
            </div>
            <h2 className={s.insuranceHeading}>
              <span className={s.insuranceHeadingGradient}>BUDDI costs your residents</span>{" "}
              nothing.
            </h2>
            <p className={s.insuranceBody}>{tab.insuranceBody}</p>
            <Link href="/contact" className={s.insuranceBtn}>
              {tab.insuranceButtonText}
            </Link>
          </div>
          <div className={s.insuranceImageWrapper}>
            <Image
              src={tab.insuranceImage}
              alt="Senior resident using VitalFriend"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
