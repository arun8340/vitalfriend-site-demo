import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import s from "./support.module.css";
import FaqGrid from "./FaqGrid";

function CheckIcon() {
  return (
    <span className={s.chargingPointIcon}>
      <svg
        className={s.chargingPointIconSvg}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6.5L4.5 9L10 3.5"
          stroke="#6E70FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export const metadata: Metadata = {
  title: "Support",
  description:
    "VitalFriend support resources. Get help with your account, devices, and app.",
  alternates: { canonical: "https://vitalfriend.com/support" },
  openGraph: { url: "https://vitalfriend.com/support" },
};

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className={s.heroSection}>
        <div className={s.heroBlobGreen} />
        <div className={s.heroBlobBlue} />
        <div className={s.heroBlobPurple} />
        <div className={s.heroInner}>
          <div className={s.heroLeft}>
            <div className={s.heroTextGroup}>
              <h1 className={s.heroTitle}>Vital Buddy Support</h1>
              <p className={s.heroSubtitle}>
                Get help with your Vital Buddy device: setup, care, and common
                questions answered.
              </p>
            </div>
            <div className={s.heroButtons}>
              <Link href="#how-to-use" className={s.heroBtnWatch}>
                <svg
                  className={s.heroBtnWatchIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="white"
                    fillOpacity="0.3"
                  />
                  <path d="M9.5 7.5L17 12L9.5 16.5V7.5Z" fill="white" />
                </svg>
                Watch How to Use
              </Link>
              <Link href="#get-started" className={s.heroBtnGetStarted}>
                Get Started
              </Link>
            </div>
          </div>
          <div className={s.heroImageWrapper}>
            <Image
              src="/images/support/hero-family.png"
              alt="Family supported by Vital Buddy"
              width={406}
              height={535}
              className={s.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section className={s.helpSection}>
        <div className={s.helpInner}>
          <div className={s.helpHeadingGroup}>
            <h2 className={s.helpTitle}>How Can We Help?</h2>
            <p className={s.helpSubtitle}>
              Find answers, fix issues, and get the most out of Vital Buddy.
            </p>
          </div>
          <div className={s.helpSearchBox}>
            <Image
              src="/images/support/Help%20SVGs/search.svg"
              alt="Search"
              width={24}
              height={24}
              className={s.helpSearchIcon}
            />
            <input
              className={s.helpSearchInput}
              type="text"
              placeholder='Search for a topic like "charging," "not syncing," or "fit"'
            />
          </div>
          <div className={s.helpBadgesWrapper}>
            <div className={s.helpBadgesRow}>
              <Link href="#getting-started" className={s.helpBadge}>
                Getting Started
              </Link>
              <Link href="#common-issues" className={s.helpBadge}>
                Common Issues
              </Link>
              <Link href="#charging-care" className={s.helpBadge}>
                How Vital Buddy works
              </Link>
            </div>
            <div className={s.helpBadgesRow}>
              <Link href="#charging-care" className={s.helpBadge}>
                Charging & Care
              </Link>
              <Link href="#faq" className={s.helpBadge}>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started in 3 Simple Steps */}
      <section id="getting-started" className={s.stepsSection}>
        <div className={s.stepsInner}>
          <div className={s.stepsHeadingGroup}>
            <span className={s.stepsBadge}>
              <Image
                src="/images/support/Help%20SVGs/Quick%20Start%20Guide.svg"
                alt="Quick Start Guide"
                width={24}
                height={24}
                className={s.stepsBadgeIcon}
              />
              Quick Start Guide
            </span>
            <h2 className={s.stepsTitle}>Getting Started in 3 Simple Steps</h2>
            <p className={s.stepsSubtitle}>
              Once you receive your Vital Buddy, follow these easy steps to get
              up and running
            </p>
          </div>
          <div className={s.stepsCards}>
            {/* Card 1 */}
            <div className={s.stepCard}>
              <div className={s.stepIconCircle}>
                <div className={s.stepIconCircleBg} />
                <Image
                  src="/images/support/Help%20SVGs/Fitting%20Your%20Vital%20Buddy.svg"
                  alt="Fitting Your Vital Buddy"
                  width={44}
                  height={44}
                  className={s.stepIconSvg}
                />
              </div>
              <div className={s.stepNumRow}>
                <span className={s.stepNum}>1</span>
                <h3 className={s.stepCardTitle}>Fitting Your Vital Buddy</h3>
              </div>
              <p className={s.stepCardDesc}>
                Position the watch snugly on your wrist, about one finger-width
                above your wrist bone.
              </p>
              <Link href="#fitting" className={s.stepLearnBtn}>
                Learn More
                <svg
                  className={s.stepLearnArrow}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            {/* Card 2 */}
            <div className={s.stepCard}>
              <div className={s.stepIconCircle}>
                <div className={s.stepIconCircleBg} />
                <Image
                  src="/images/support/Help%20SVGs/Setting%20Up.svg"
                  alt="Setting Up"
                  width={44}
                  height={44}
                  className={s.stepIconSvg}
                />
              </div>
              <div className={s.stepNumRow}>
                <span className={s.stepNum}>2</span>
                <h3 className={s.stepCardTitle}>Setting Up</h3>
              </div>
              <p className={s.stepCardDesc}>
                Press and hold the power button for 3 seconds. Follow the
                on-screen instructions.
              </p>
              <Link href="#setup" className={s.stepLearnBtn}>
                Learn More
                <svg
                  className={s.stepLearnArrow}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            {/* Card 3 */}
            <div className={s.stepCard}>
              <div className={s.stepIconCircle}>
                <div className={s.stepIconCircleBg} />
                <Image
                  src="/images/support/Help%20SVGs/Your%20First%20Reading.svg"
                  alt="Your First Reading"
                  width={44}
                  height={44}
                  className={s.stepIconSvg}
                />
              </div>
              <div className={s.stepNumRow}>
                <span className={s.stepNum}>3</span>
                <h3 className={s.stepCardTitle}>Your First Reading</h3>
              </div>
              <p className={s.stepCardDesc}>
                Sit comfortably, keep your wrist at heart level, and tap the
                heart icon to begin.
              </p>
              <Link href="#reading" className={s.stepLearnBtn}>
                Learn More
                <svg
                  className={s.stepLearnArrow}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Charging & Care */}
      <section id="charging-care" className={s.chargingSection}>
        <div className={s.chargingInner}>
          <div className={s.chargingHeadingGroup}>
            <span className={s.chargingBadge}>
              <Image
                src="/images/support/Help%20SVGs/Device%20Maintenance.svg"
                alt="Device Maintenance"
                width={24}
                height={24}
                className={s.chargingBadgeIcon}
              />
              Device Maintenance
            </span>
            <h2 className={s.chargingTitle}>Charging &amp; Care</h2>
            <p className={s.chargingSubtitle}>
              Simple steps to keep Vital Buddy working smoothly every day
            </p>
          </div>

          <div className={s.chargingCards}>
            {/* Card 1 — Magnetic Cable */}
            <div className={s.chargingCard}>
              <div className={s.chargingCardHeader}>
                <div className={s.chargingCardTitleRow}>
                  <Image
                    src="/images/support/Help%20SVGs/Version%201-%20Magnetic%20Cable.svg"
                    alt="Magnetic Cable"
                    width={32}
                    height={32}
                    className={s.chargingCardIcon}
                  />
                  <h3 className={s.chargingCardTitle}>
                    Version 1: Magnetic Cable
                  </h3>
                </div>
                <p className={s.chargingCardSubtitle}>
                  If your charger snaps directly onto the back of the watch:
                </p>
              </div>
              <Image
                src="/images/support/Magnetic-Cable.png"
                alt="Magnetic cable charging"
                width={612}
                height={413}
                className={s.chargingCardImage}
              />
              <div className={s.chargingPoints}>
                {[
                  "Attach the magnetic charging cable to the back of the device",
                  "Make sure it clicks into place and feels secure",
                  "Plug into a standard 5V / 1A adapter",
                ].map((text) => (
                  <div key={text} className={s.chargingPoint}>
                    <CheckIcon />
                    <p className={s.chargingPointText}>{text}</p>
                  </div>
                ))}
              </div>
              <hr className={s.chargingDivider} />
              <div className={s.chargingSubSection}>
                <h4 className={s.chargingSubTitle}>What to Expect</h4>
                {[
                  "Full charge takes about 3–4 hours",
                  "Vital Buddy cannot be worn or used while charging",
                ].map((text) => (
                  <div key={text} className={s.chargingPoint}>
                    <CheckIcon />
                    <p className={s.chargingPointText}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 — Charging Dock */}
            <div className={s.chargingCard}>
              <div className={s.chargingCardHeader}>
                <div className={s.chargingCardTitleRow}>
                  <Image
                    src="/images/support/Help%20SVGs/Version%202-%20Charging%20Dock.svg"
                    alt="Charging Dock"
                    width={32}
                    height={32}
                    className={s.chargingCardIcon2}
                  />
                  <h3 className={s.chargingCardTitle}>
                    Version 2: Charging Dock
                  </h3>
                </div>
                <p className={s.chargingCardSubtitle}>
                  If your watch came with a small charging dock:
                </p>
              </div>
              <Image
                src="/images/support/Charging-Dock.png"
                alt="Charging dock"
                width={612}
                height={413}
                className={s.chargingCardImage}
              />
              <div className={s.chargingPoints}>
                {[
                  "Place the watch into the charging dock",
                  "Make sure it is fully seated and aligned",
                  "Plug the dock into a standard 5V / 1A adapter",
                ].map((text) => (
                  <div key={text} className={s.chargingPoint}>
                    <CheckIcon />
                    <p className={s.chargingPointText}>{text}</p>
                  </div>
                ))}
              </div>
              <hr className={s.chargingDivider} />
              <div className={s.chargingSubSection}>
                <h4 className={s.chargingSubTitle}>
                  If It&apos;s Not Charging
                </h4>
                <div className={s.chargingPoint}>
                  <CheckIcon />
                  <p className={s.chargingPointText}>
                    Check charger alignment and ensure cables are connected
                  </p>
                </div>
                <div className={s.chargingPoint}>
                  <CheckIcon />
                  <p className={s.chargingPointText}>
                    Try a different outlet →{" "}
                    <Link href="#common-issues" className={s.chargingLink}>
                      Common Issues
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proper Care */}
      <section className={s.careSection}>
        <div className={s.careInner}>
          <div className={s.careLeft}>
            <h2 className={s.careTitle}>
              Proper care helps ensure accurate readings
            </h2>
            <div className={s.carePoints}>
              {[
                "Charge Vital Buddy every 2 days, or as instructed",
                "Clean the cuff at least once per week",
                "Keep Vital Buddy dry",
                "Excess moisture or sweat can cause white spots on the cuff",
                "If irritation occurs, remove and notify care team",
              ].map((text) => (
                <div key={text} className={s.carePoint}>
                  <span className={s.carePointIcon}>
                    <svg
                      className={s.carePointIconSvg}
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7L5 10L11 3.5"
                        stroke="#6E70FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className={s.carePointText}>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={s.careRight}>
            <Image
              src="/images/support/buddy-chargin.png"
              alt="Vital Buddy charging"
              width={370}
              height={387}
              className={s.careImage}
            />
            <div className={s.careShadow} />
          </div>
        </div>
      </section>

      {/* Care & Maintenance */}
      <section className={s.watchCareSection}>
        <div className={s.watchCareInner}>
          <div className={s.watchCareLeft}>
            <h2 className={s.watchCareTitle}>Care &amp; Maintenance</h2>
            <p className={s.watchCareSubtitle}>
              Simple care helps keep your Vital Buddy working properly
            </p>
            <div className={s.watchCarePoints}>
              {[
                "Wipe with a soft, damp cloth",
                "Keep Vital Buddy dry",
                "Do not submerge in water",
                "Clean regularly to avoid buildup",
              ].map((text) => (
                <div key={text} className={s.watchCarePoint}>
                  <span className={s.watchCarePointIcon}>
                    <svg
                      className={s.watchCarePointIconSvg}
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7L5 10L11 3.5"
                        stroke="#6E70FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className={s.watchCarePointText}>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/support/cloth-watch.png"
            alt="Cleaning Vital Buddy with a cloth"
            width={607}
            height={477}
            className={s.watchCareImage}
          />
        </div>
      </section>

      {/* Fitting Your Vital Buddy */}
      <section className={s.fittingSection}>
        <div className={s.fittingInner}>
          <div className={s.fittingHeadingGroup}>
            <span className={s.fittingBadge}>
              <Image
                src="/images/support/Help%20SVGs/Fitting%20Your%20Vital%20Buddy.svg"
                alt="Fitting"
                width={24}
                height={24}
                className={s.fittingBadgeIcon}
              />
              Proper Fit Guide
            </span>
            <h2 className={s.fittingTitle}>Fitting Your Vital Buddy</h2>
            <p className={s.fittingSubtitle}>
              A proper fit helps ensure comfort and accurate readings
            </p>
          </div>

          <div className={s.fittingCards}>
            {/* Card 1 — Try it On */}
            <div className={s.fittingCard}>
              <h3 className={s.fittingCardTitle}>Try it On</h3>
              <Image
                src="/images/support/fitting1.png"
                alt="Wearing Vital Buddy"
                width={393}
                height={292}
                className={s.fittingCardImg}
              />
              <div className={s.fittingPoints}>
                {[
                  "Wear on bare skin, top of wrist",
                  "Position above wrist joint",
                  "Keep band snug, not tight",
                ].map((text) => (
                  <div key={text} className={s.fittingPoint}>
                    <span className={s.fittingPointIcon}>
                      <svg
                        className={s.fittingPointIconSvg}
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 7L5 10L11 3.5"
                          stroke="#6E70FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className={s.fittingPointText}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 — Leave a Gap */}
            <div className={s.fittingCard}>
              <h3 className={s.fittingCardTitle}>Leave a Gap</h3>
              <div className={s.fittingCardImgPlaceholder} />
              <div className={s.fittingPoints}>
                {[
                  "Fit one finger under the band",
                  "Not too loose or too tight",
                  "Air bag connected at both ends",
                ].map((text) => (
                  <div key={text} className={s.fittingPoint}>
                    <span className={s.fittingPointIcon}>
                      <svg
                        className={s.fittingPointIconSvg}
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 7L5 10L11 3.5"
                          stroke="#6E70FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className={s.fittingPointText}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3 — Adjust the Fit */}
            <div className={s.fittingCard}>
              <h3 className={s.fittingCardTitle}>Adjust the Fit</h3>
              <Image
                src="/images/support/fitting3.png"
                alt="Adjusting Vital Buddy fit"
                width={393}
                height={292}
                className={s.fittingCardImg}
              />
              <Link href="#fitting" className={s.fittingLearnBtn}>
                Learn More &raquo;
              </Link>
            </div>
          </div>

          {/* Alert banner */}
          <div className={s.fittingAlert}>
            <span className={s.fittingAlertIcon}>
              <svg
                className={s.fittingAlertIconSvg}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 4v4M7 10v.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div className={s.fittingAlertBody}>
              <p className={s.fittingAlertTitle}>If It Feels Uncomfortable</p>
              <p className={s.fittingAlertDesc}>
                Adjust the band slightly • Check positioning • If irritation
                occurs, remove and notify your care team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setting Up Your Vital Buddy */}
      <section className={s.setupSection}>
        <div className={s.setupInner}>
          <div className={s.setupHeadingGroup}>
            <span className={s.setupBadge}>
              <Image
                src="/images/support/Help%20SVGs/Device%20Setup-badge.svg"
                alt="Device Setup"
                width={24}
                height={24}
                className={s.setupBadgeIcon}
              />
              Device Setup
            </span>
            <h2 className={s.setupTitle}>Setting Up Your Vital Buddy</h2>
            <p className={s.setupSubtitle}>
              Learn how to turn on your device, navigate the screen, and access
              key features
            </p>
          </div>

          <div className={s.setupCards}>
            {/* Card 1 — On/Off Button */}
            <div className={s.setupCard}>
              <div className={s.setupCardHeader}>
                <h3 className={s.setupCardTitle}>On / Off Button</h3>
                <p className={s.setupCardSubtitle}>Right side button</p>
              </div>
              <Image
                src="/images/support/on-off-button.png"
                alt="On/Off button location"
                width={612}
                height={413}
                className={s.setupCardImg}
              />
              <div className={s.setupActions}>
                {[
                  {
                    label: "Press & hold 3 sec",
                    desc: "Turn on device",
                    badge: "3s",
                    style: s.setupRowGreen,
                    iconSrc:
                      "/images/support/Help%20SVGs/On/press%20%26%20hold.svg",
                  },
                  {
                    label: "Press & hold + slide",
                    desc: "Power off",
                    badge: "3s",
                    style: s.setupRowRed,
                    iconSrc:
                      "/images/support/Help%20SVGs/On/press%20%26%20hold%20%2B%20slide.svg",
                  },
                  {
                    label: "Press once",
                    desc: "Return to home",
                    badge: "1x",
                    style: s.setupRowBlue,
                    iconSrc: "/images/support/Help%20SVGs/On/press%20once.svg",
                  },
                  {
                    label: "Press again",
                    desc: "Display off",
                    badge: "1x",
                    style: s.setupRowPurple,
                    iconSrc: "/images/support/Help%20SVGs/On/press%20again.png",
                  },
                  {
                    label: "Hold 10 seconds",
                    desc: "Force restart",
                    badge: "10s",
                    style: s.setupRowYellow,
                    iconSrc:
                      "/images/support/Help%20SVGs/On/hold%2010%20seconds.svg",
                  },
                ].map(({ label, desc, badge, style, iconSrc }) => (
                  <div key={label} className={`${s.setupRow} ${style}`}>
                    <span className={s.setupRowIconBg}>
                      <Image
                        src={iconSrc}
                        alt={label}
                        width={22}
                        height={22}
                        className={s.setupRowIcon}
                      />
                    </span>
                    <div className={s.setupRowText}>
                      <p className={s.setupRowLabel}>{label}</p>
                      <p className={s.setupRowDesc}>{desc}</p>
                    </div>
                    <span className={s.setupRowBadge}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 — Menu Button */}
            <div className={s.setupCard}>
              <div className={s.setupCardHeader}>
                <h3 className={s.setupCardTitle}>Menu Button</h3>
                <p className={s.setupCardSubtitle}>Left side button</p>
              </div>
              <Image
                src="/images/support/menu-button.png"
                alt="Menu button location"
                width={612}
                height={413}
                className={s.setupCardImg}
              />
              <div className={s.setupActions}>
                {[
                  {
                    label: "Press once",
                    desc: "Open main menu",
                    badge: "1x",
                    style: s.setupRowGreen,
                    iconSrc:
                      "/images/support/Help%20SVGs/menu%20button/press%20once.svg",
                  },
                  {
                    label: "Press again",
                    desc: "View features",
                    badge: "1x",
                    style: s.setupRowRed,
                    iconSrc:
                      "/images/support/Help%20SVGs/menu%20button/press%20again.svg",
                  },
                ].map(({ label, desc, badge, style, iconSrc }) => (
                  <div key={label} className={`${s.setupRow} ${style}`}>
                    <span className={s.setupRowIconBg}>
                      <Image
                        src={iconSrc}
                        alt={label}
                        width={22}
                        height={22}
                        className={s.setupRowIcon}
                      />
                    </span>
                    <div className={s.setupRowText}>
                      <p className={s.setupRowLabel}>{label}</p>
                      <p className={s.setupRowDesc}>{desc}</p>
                    </div>
                    <span className={s.setupRowBadge}>{badge}</span>
                  </div>
                ))}
              </div>

              {/* Touchscreen Navigation */}
              <div className={s.setupTouchCard}>
                <h4 className={s.setupTouchTitle}>
                  <span className={s.setupTouchTitleIconBg}>
                    <Image
                      src="/images/support/Help%20SVGs/menu%20button/touchscreen.png"
                      alt="Touchscreen"
                      width={24}
                      height={24}
                      className={s.setupTouchTitleIcon}
                    />
                  </span>
                  Touchscreen Navigation
                </h4>
                <div className={s.setupSwipeGrid}>
                  {[
                    {
                      dir: "← Swipe left",
                      action: "Blood pressure",
                      iconSrc:
                        "/images/support/Help%20SVGs/menu%20button/bp.svg",
                    },
                    {
                      dir: "→ Swipe right",
                      action: "Sidebar",
                      iconSrc:
                        "/images/support/Help%20SVGs/menu%20button/sidebar.svg",
                    },
                    {
                      dir: "↑ Swipe up",
                      action: "Messages",
                      iconSrc: "/images/support/Help%20SVGs/bubble-chat.svg",
                    },
                    {
                      dir: "↓ Swipe down",
                      action: "Settings",
                      iconSrc:
                        "/images/support/Help%20SVGs/menu%20button/settings.svg",
                    },
                  ].map(({ dir, action, iconSrc }) => (
                    <div key={action} className={s.setupSwipeCard}>
                      <p className={s.setupSwipeDir}>
                        <Image
                          src={iconSrc}
                          alt={action}
                          width={24}
                          height={24}
                          className={s.setupSwipeDirIcon}
                        />
                        {dir}
                      </p>
                      <p className={s.setupSwipeAction}>{action}</p>
                    </div>
                  ))}
                  <div
                    className={`${s.setupSwipeCard} ${s.setupSwipeCardFull}`}
                  >
                    <p className={s.setupSwipeDir}>
                      <Image
                        src="/images/support/Help%20SVGs/menu%20button/change%20watch%20face.svg"
                        alt="Change watch face"
                        width={24}
                        height={24}
                        className={s.setupSwipeDirIcon}
                      />
                      Press &amp; hold screen
                    </p>
                    <p className={s.setupSwipeAction}>Change watch face</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taking a Blood Pressure Reading */}
      <section className={s.bpSection}>
        <div className={s.bpInner}>
          {/* Heading */}
          <div className={s.bpHeadingGroup}>
            <span className={s.bpBadge}>
              <Image
                src="/images/support/Help%20SVGs/Blood%20Pressure%20Monitoring-badge.svg"
                alt="Blood Pressure"
                width={24}
                height={24}
                className={s.bpBadgeIcon}
              />
              Blood Pressure Reading
            </span>
            <h2 className={s.bpTitle}>Taking a Blood Pressure Reading</h2>
            <p className={s.bpSubtitle}>
              Follow these simple steps for accurate measurements
            </p>
          </div>

          {/* Quick Swipe */}
          <div className={s.bpSubSection}>
            <div className={s.bpSubHeadingLeft}>
              <h3 className={s.bpSubTitle}>Quick Swipe</h3>
              <p className={s.bpSubDesc}>Fastest method from home screen</p>
            </div>

            <div className={`${s.bpStepCards} ${s.bpQuickSwipeCards}`}>
              {[
                {
                  num: "1",
                  img: "/images/support/card1.png",
                  text: "Swipe left from the home screen",
                },
                {
                  num: "2",
                  img: "/images/support/card2.png",
                  text: "Tap Blood Pressure",
                },
                {
                  num: "3",
                  img: "/images/support/card3.png",
                  text: "Tap Start",
                },
              ].map(({ num, img, text }) => (
                <div key={num} className={s.bpStepCard}>
                  <div className={s.bpStepImgBg}>
                    <Image
                      src={img}
                      alt={`Step ${num}`}
                      width={193}
                      height={256}
                      className={s.bpStepImg}
                    />
                  </div>
                  <div className={s.bpStepNumRow}>
                    <span className={s.bpStepNum}>{num}</span>
                    <p className={s.bpStepText}>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={s.bpInfoRows}>
              {["Fastest method - Just 3 taps!"].map((text) => (
                <div key={text} className={s.bpInfoRow}>
                  <span className={s.bpInfoIconBg}>
                    <Image
                      src="/images/support/Help%20SVGs/fatest%20method%20icon%20badge1.svg"
                      alt="Fastest method"
                      width={24}
                      height={24}
                      className={s.bpInfoIcon}
                    />
                  </span>
                  <p className={s.bpInfoText}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Navigation */}
          <div className={s.bpSubSection}>
            <div className={s.bpSubHeadingLeft}>
              <h3 className={s.bpSubTitle}>Menu Navigation</h3>
              <p className={s.bpSubDesc}>Navigate through menu</p>
            </div>

            <div className={s.bpStepCards}>
              {[
                {
                  num: "1",
                  img: "/images/support/card4.png",
                  text: "Press Menu button",
                },
                {
                  num: "2",
                  img: "/images/support/card5.png",
                  text: "Select Blood Pressure",
                },
                {
                  num: "3",
                  img: "/images/support/card6.png",
                  text: "Tap Start",
                },
              ].map(({ num, img, text }) => (
                <div key={`menu-${num}`} className={s.bpStepCard}>
                  <div className={s.bpStepImgBg}>
                    <Image
                      src={img}
                      alt={`Menu step ${num}`}
                      width={193}
                      height={256}
                      className={s.bpStepImg}
                    />
                  </div>
                  <div className={s.bpStepNumRow}>
                    <span className={s.bpStepNum}>{num}</span>
                    <p className={s.bpStepText}>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={s.bpInfoRows}>
              {["Fastest method - Just 3 taps!"].map((text) => (
                <div key={text} className={s.bpInfoRow}>
                  <span className={s.bpInfoIconBg}>
                    <Image
                      src="/images/support/Help%20SVGs/fatest%20method%20icon%20badge1.svg"
                      alt="Fastest method"
                      width={24}
                      height={24}
                      className={s.bpInfoIcon}
                    />
                  </span>
                  <p className={s.bpInfoText}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* During Measurement */}
          <div className={s.bpMeasureCard}>
            <div className={s.bpMeasureLeft}>
              <Image
                src="/images/support/bp-buddy.png"
                alt="Vital Buddy watch"
                width={478}
                height={652}
                className={s.bpMeasureBuddyImg}
              />
            </div>
            <div className={s.bpMeasureRight}>
              <h3 className={s.bpMeasureTitle}>During Measurement</h3>
              <Image
                src="/images/support/During-Measurement.png"
                alt="During measurement positions"
                width={756}
                height={339}
                className={s.bpMeasureImg}
              />
              <p className={s.bpMeasureDesc}>
                The Vital Buddy device and VitalFriend service may be eligible
                for reimbursement through most major insurance providers,
                helping make continuous vital signs monitoring more accessible
                for your facility, subject to plan eligibility.
              </p>
              <Link href="#get-started" className={s.bpMeasureBtn}>
                Measurement takes 30–60 seconds
              </Link>
            </div>
          </div>

          {/* Bottom cards */}
          <div className={s.bpBottomCards}>
            {/* Stop Anytime */}
            <div className={s.bpBottomCard}>
              <div className={s.bpBottomCardTitleRow}>
                <svg
                  className={s.bpBottomCardIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="9"
                    y="9"
                    width="6"
                    height="6"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
                <h4 className={s.bpBottomCardTitle}>Stop Anytime</h4>
              </div>
              <div className={s.bpBottomCardPoints}>
                {[
                  'Tap "Stop" button',
                  "Press On/Off button",
                  "Loosen the band",
                ].map((text) => (
                  <div key={text} className={s.bpBottomCardPoint}>
                    <svg
                      className={s.bpBottomCardPointIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#6E70FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className={s.bpBottomCardPointText}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Accuracy */}
            <div className={s.bpBottomCard}>
              <div className={s.bpBottomCardTitleRow}>
                <svg
                  className={s.bpBottomCardIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h4 className={s.bpBottomCardTitle}>For Accuracy</h4>
              </div>
              <div className={s.bpBottomCardPoints}>
                {[
                  "Bare skin contact",
                  "Band snug, not tight",
                  "Stay completely still",
                  "Wrist at heart level",
                  "Wait 2 min between",
                ].map((text) => (
                  <div key={text} className={s.bpBottomCardPoint}>
                    <svg
                      className={s.bpBottomCardPointIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#6E70FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className={s.bpBottomCardPointText}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Understanding */}
            <div className={s.bpBottomCard}>
              <div className={s.bpBottomCardTitleRow}>
                <svg
                  className={s.bpBottomCardIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 8v4M12 16v.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <h4 className={s.bpBottomCardTitle}>Understanding</h4>
              </div>
              <div className={s.bpReadingItems}>
                {[
                  {
                    label: "SYS (Systolic)",
                    value: "Top number - pressure when heart beats",
                  },
                  {
                    label: "DIA (Diastolic)",
                    value: "Bottom number - pressure between beats",
                  },
                  { label: "Storage", value: "Stores up to 50 readings" },
                ].map(({ label, value }) => (
                  <div key={label} className={s.bpReadingItem}>
                    <p className={s.bpReadingLabel}>{label}</p>
                    <p className={s.bpReadingValue}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section id="common-issues" className={s.issuesSection}>
        <div className={s.issuesInner}>
          <div className={s.issuesHeadingGroup}>
            <span className={s.issuesBadge}>
              <Image
                src="/images/support/Help%20SVGs/Common%20Issues/troubleshooting-badge.svg"
                alt="Troubleshooting"
                width={24}
                height={24}
                className={s.issuesBadgeIcon}
              />
              Troubleshooting
            </span>
            <h2 className={s.issuesTitle}>Common Issues</h2>
            <p className={s.issuesSubtitle}>
              Quick fixes for the most common problems
            </p>
          </div>

          <div className={s.issuesGrid}>
            {[
              {
                title: "Not Charging",
                happening: "Charger may not be properly connected",
                todo: "Check alignment • Ensure cables connected • Try different outlet",
                iconSrc:
                  "/images/support/Help%20SVGs/Common%20Issues/not%20charging.png",
              },
              {
                title: "Feels Uncomfortable",
                happening: "The fit may not be correct",
                todo: "Adjust band (snug, not tight) • Wear on bare skin",
                iconSrc:
                  "/images/support/Help%20SVGs/Common%20Issues/feels%20uncomfortable%20card2.svg",
              },
              {
                title: "Screen Frozen",
                happening: "Device needs to be restarted",
                todo: "Press and hold button for 10 seconds",
                iconSrc:
                  "/images/support/Help%20SVGs/Common%20Issues/screen%20frozen%20card3.svg",
              },
              {
                title: "Got Wet",
                happening: "Vital Buddy is not waterproof",
                todo: "Remove immediately • Dry completely • Report to care team",
                iconSrc:
                  "/images/support/Help%20SVGs/Common%20Issues/got%20wet.svg",
              },
              {
                title: "Wrong Language",
                happening: "Settings changed accidentally",
                todo: "Swipe down → Tap globe icon → Select correct language",
                iconSrc:
                  "/images/support/Help%20SVGs/Common%20Issues/feels%20uncomfortable%20card5.svg",
              },
              {
                title: "Not Syncing",
                happening: "Sync delays due to connectivity",
                todo: "Wait a few minutes • Check Wi-Fi • Restart app",
                iconSrc:
                  "/images/support/Help%20SVGs/Common%20Issues/screen%20frozen%20card6.svg",
              },
            ].map(({ title, happening, todo, iconSrc }) => (
              <div key={title + happening} className={s.issueCard}>
                <div className={s.issueIconCircle}>
                  <div className={s.issueIconCircleBg} />
                  <Image
                    src={iconSrc}
                    alt={title}
                    width={48}
                    height={48}
                    className={s.issueIconSvg}
                  />
                </div>
                <h3 className={s.issueCardTitle}>{title}</h3>
                <div className={s.issueCardBody}>
                  <p className={s.issueCardLabel}>What&apos;s Happening</p>
                  <p className={s.issueCardText}>{happening}</p>
                </div>
                <div className={s.issueCardBody}>
                  <p className={s.issueCardLabel}>What To Do</p>
                  <p className={s.issueCardText}>{todo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Screen Warning Messages */}
      <section className={s.warningSection}>
        <div className={s.warningInner}>
          <div className={s.warningHeadingGroup}>
            <h2 className={s.warningTitle}>On-Screen Warning Messages</h2>
            <p className={s.warningSubtitle}>
              These messages appear on your Vital Buddy screen. Each links to
              helpful support.
            </p>
          </div>
          <table className={s.warningTable}>
            <thead>
              <tr>
                <th>Message</th>
                <th>What It Means</th>
                <th>What To Do</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  message: "Wearing too loose",
                  means: "Band not snug",
                  todo: "Adjust band → Fit section",
                },
                {
                  message: "Wearing too tight",
                  means: "Too tight",
                  todo: "Loosen band slightly",
                },
                {
                  message: "Body Motion",
                  means: "Movement detected",
                  todo: "Stay still during reading",
                },
                {
                  message: "Measurement Timeout",
                  means: "Reading failed",
                  todo: "Reposition and try again",
                },
                {
                  message: "Low Battery",
                  means: "Needs charging",
                  todo: "Charge device now",
                },
              ].map(({ message, means, todo }) => (
                <tr key={message}>
                  <td>{message}</td>
                  <td>{means}</td>
                  <td>{todo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Taking Your Vitals */}
      <section className={s.vitalsSection}>
        <div className={s.vitalsInner}>
          <div className={s.vitalsLeft}>
            <Image
              src="/images/support/health-monitoring.png"
              alt="Health monitoring"
              width={642}
              height={854}
              className={s.vitalsImg}
            />
          </div>
          <div className={s.vitalsRight}>
            <div className={s.vitalsTop}>
              <div className={s.vitalsBadge}>
                <Image
                  src="/images/support/Help%20SVGs/Health%20Monitoring/Health%20Monitoring-badge.svg"
                  alt="Health Monitoring"
                  width={24}
                  height={24}
                />
                <span className={s.vitalsBadgeText}>Health Monitoring</span>
              </div>
              <h2 className={s.vitalsTitle}>Taking Your Vitals</h2>
            </div>
            <div className={s.vitalsList}>
              {[
                {
                  iconSrc:
                    "/images/support/Help%20SVGs/Health%20Monitoring/Blood%20Pressure.svg",
                  title: "Blood Pressure",
                  text: "Navigate to BP screen • Tap to begin • Keep wrist still at heart level",
                },
                {
                  iconSrc:
                    "/images/support/Help%20SVGs/Health%20Monitoring/Blood%20Oxygen.svg",
                  title: "Blood Oxygen",
                  text: "Navigate to Blood Oxygen • Tap to begin\nKeep wrist still, avoid movement/talking\nEnsure band is fitted properly",
                },
                {
                  iconSrc:
                    "/images/support/Help%20SVGs/Health%20Monitoring/Heart%20Rate.svg",
                  title: "Heart Rate",
                  text: "Navigate to Heart Rate • Tap to start\nStay still during measurement\nCan be manual or automatic",
                },
                {
                  iconSrc:
                    "/images/support/Help%20SVGs/Health%20Monitoring/Activity.svg",
                  title: "Activity",
                  text: "Tracked automatically throughout the day\nNo action required\nView daily steps on device",
                },
                {
                  iconSrc:
                    "/images/support/Help%20SVGs/Health%20Monitoring/Sleep.svg",
                  title: "Sleep",
                  text: "Tracked automatically when worn overnight\nNo setup required\nView data on device or connected app",
                },
              ].map(({ iconSrc, title, text }) => (
                <div key={title} className={s.vitalsItem}>
                  <div className={s.vitalsItemHeader}>
                    <Image
                      src={iconSrc}
                      alt={title}
                      width={24}
                      height={24}
                      className={s.vitalsItemIcon}
                    />
                    <span className={s.vitalsItemTitle}>{title}</span>
                  </div>
                  <p className={s.vitalsItemText}>{text}</p>
                </div>
              ))}
            </div>
            <button className={s.vitalsWatchBtn}>Watch How to Use</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={s.faqSection}>
        <div className={s.faqInner}>
          <div className={s.faqHeadingBlock}>
            <div className={s.faqBadge}>
              <Image
                src="/images/support/Help%20SVGs/Knowledge%20Base-badge.svg"
                alt="Knowledge Base"
                width={24}
                height={24}
              />
              <span className={s.faqBadgeText}>Knowledge Base</span>
            </div>
            <h2 className={s.faqTitle}>Frequently Asked Questions</h2>
            <p className={s.faqSubtitle}>
              Find quick answers to common questions about your Vital Buddy
              device
            </p>
          </div>
          <FaqGrid />
        </div>
      </section>

      {/* Watch How To Use */}
      <section className={s.watchSection}>
        <div className={s.watchInner}>
          <div className={s.watchHeadingBlock}>
            <h2 className={s.watchTitle}>Watch How To Use</h2>
            <p className={s.watchSubtitle}>Video tutorials coming soon</p>
          </div>
          <div className={s.watchVideoContainer}>
            <Image
              src="/images/support/tutorial-placeholder.png"
              alt="Tutorial placeholder"
              width={849}
              height={566}
              className={s.watchVideoImg}
            />
            <div className={s.watchPlayBtn}>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path
                  d="M20.83 18.75L20.83 81.25L79.16 50Z"
                  fill="#8CC6F8"
                  stroke="#8CC6F8"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className={s.advSection}>
        <div className={s.advInner}>
          <div className={s.advHeadingBlock}>
            <div className={s.advBadge}>
              <Image
                src="/images/support/Help%20SVGs/Advanced%20Settings/adv-badge.svg"
                alt="Advanced Settings"
                width={24}
                height={24}
              />
              <span className={s.advBadgeText}>Advanced Settings</span>
            </div>
            <h2 className={s.advTitle}>Advanced Features</h2>
            <p className={s.advSubtitle}>
              Additional settings and customization options
            </p>
          </div>
          <div className={s.advGrid}>
            {(
              [
                {
                  title: "Language Settings",
                  text: "Swipe down from home screen → Tap globe icon → Select preferred language",
                  iconSrc:
                    "/images/support/Help%20SVGs/Advanced%20Settings/Language%20Settings.svg",
                },
                {
                  title: "Time Settings",
                  text: "Set manually, OR sync automatically when connected to the app",
                  iconSrc:
                    "/images/support/Help%20SVGs/Advanced%20Settings/Time%20Settings.svg",
                },
                {
                  title: "Reboot & Reset",
                  text: "Reboot: Restarts the watch • Restore Factory Settings: Resets all settings • Found under: Settings → General",
                  iconSrc:
                    "/images/support/Help%20SVGs/Advanced%20Settings/Reboot%20%26%20Reset.svg",
                },
                {
                  title: "Bluetooth & Connectivity",
                  text: "Vital Buddy connects to tablet or app via Bluetooth to sync data.\n• Keep device within range\n• Ensure Bluetooth is enabled on connected device",
                  iconSrc:
                    "/images/support/Help%20SVGs/Advanced%20Settings/Bluetooth%20%26%20Connectivity.svg",
                },
              ] as { title: string; text: string; iconSrc: string }[]
            ).map(({ title, text, iconSrc }) => (
              <div key={title} className={s.advCard}>
                <div className={s.advCardIconWrapper}>
                  <div className={s.advCardIconBg} />
                  <div className={s.advCardIconInner}>
                    <Image src={iconSrc} alt={title} width={36} height={36} />
                  </div>
                </div>
                <h3 className={s.advCardTitle}>{title}</h3>
                <p className={s.advCardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
