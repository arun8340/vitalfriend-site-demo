import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import s from "./support.module.css";

function CheckIcon() {
  return (
    <span className={s.chargingPointIcon}>
      <svg className={s.chargingPointIconSvg} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6.5L4.5 9L10 3.5" stroke="#6E70FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I create a VitalFriend account?",
        a: "Your account is typically created by your healthcare provider or care organization. Once enrolled, you'll receive an email or SMS with instructions to download the app and log in.",
      },
      {
        q: "Which devices does VitalFriend support?",
        a: "VitalFriend supports FDA-cleared remote monitoring devices including blood pressure monitors, pulse oximeters, weight scales, and other connected health devices, depending on your care plan.",
      },
    ],
  },
  {
    category: "Using the App",
    items: [
      {
        q: "How do I add or pair a device?",
        a: "Open the VitalFriend mobile app, go to Devices, and follow the step-by-step pairing instructions. Make sure Bluetooth is enabled on your phone.",
      },
      {
        q: "What if my vitals are not syncing?",
        a: "Check that Bluetooth is turned on, your device is charged, and the app is up to date. If the issue continues, contact support.",
      },
      {
        q: "Can caregivers or family members access my data?",
        a: "Yes. With your consent, caregivers and family members can be granted limited access to view vitals and receive alerts.",
      },
    ],
  },
  {
    category: "Data, Privacy & Security",
    items: [
      {
        q: "Is my health data secure?",
        a: "Yes. VitalFriend is HIPAA-compliant and uses industry-standard encryption to protect your personal and health information.",
      },
      {
        q: "Who can see my health data?",
        a: "Only you, authorized caregivers, and your healthcare team can access your data, based on permissions you approve.",
      },
    ],
  },
];

const troubleshooting = [
  "Ensure your app is updated to the latest version",
  "Restart the app or your device",
  "Check internet or cellular connectivity",
  "Re-pair your monitoring device if needed",
];

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
                Get help with your Vital Buddy device: setup, care,
                and common questions answered.
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
                  <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.3" />
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
            <svg
              className={s.helpSearchIcon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              className={s.helpSearchInput}
              type="text"
              placeholder='Search for a topic like "charging," "not syncing," or "fit"'
            />
          </div>
          <div className={s.helpBadgesWrapper}>
            <div className={s.helpBadgesRow}>
              {["Getting Started", "Common Issues", "How Vital Buddy works"].map((label) => (
                <button key={label} className={s.helpBadge}>{label}</button>
              ))}
            </div>
            <div className={s.helpBadgesRow}>
              {["Charging & Care", "Contact Support"].map((label) => (
                <button key={label} className={s.helpBadge}>{label}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started in 3 Simple Steps */}
      <section className={s.stepsSection}>
        <div className={s.stepsInner}>
          <div className={s.stepsHeadingGroup}>
            <span className={s.stepsBadge}>
              <svg className={s.stepsBadgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Quick Start Guide
            </span>
            <h2 className={s.stepsTitle}>Getting Started in 3 Simple Steps</h2>
            <p className={s.stepsSubtitle}>
              Once you receive your Vital Buddy, follow these easy steps to get up and running
            </p>
          </div>
          <div className={s.stepsCards}>
            {/* Card 1 */}
            <div className={s.stepCard}>
              <div className={s.stepIconCircle}>
                <div className={s.stepIconCircleBg} />
                <svg className={s.stepIconSvg} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="9" y="4" width="26" height="36" rx="6" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="14" y="1" width="16" height="6" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="22" cy="26" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M22 21v-4M22 31v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className={s.stepNumRow}>
                <span className={s.stepNum}>1</span>
                <h3 className={s.stepCardTitle}>Fitting Your Vital Buddy</h3>
              </div>
              <p className={s.stepCardDesc}>
                Position the watch snugly on your wrist, about one finger-width above your wrist bone.
              </p>
              <Link href="#fitting" className={s.stepLearnBtn}>
                Learn More
                <svg className={s.stepLearnArrow} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            {/* Card 2 */}
            <div className={s.stepCard}>
              <div className={s.stepIconCircle}>
                <div className={s.stepIconCircleBg} />
                <svg className={s.stepIconSvg} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M22 2v4M22 38v4M2 22h4M38 22h4M7.05 7.05l2.83 2.83M34.12 34.12l2.83 2.83M34.12 9.88l-2.83 2.83M9.88 34.12l-2.83 2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="34" cy="34" r="6" fill="#54B589" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M31.5 34l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={s.stepNumRow}>
                <span className={s.stepNum}>2</span>
                <h3 className={s.stepCardTitle}>Setting Up</h3>
              </div>
              <p className={s.stepCardDesc}>
                Press and hold the power button for 3 seconds. Follow the on-screen instructions.
              </p>
              <Link href="#setup" className={s.stepLearnBtn}>
                Learn More
                <svg className={s.stepLearnArrow} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            {/* Card 3 */}
            <div className={s.stepCard}>
              <div className={s.stepIconCircle}>
                <div className={s.stepIconCircleBg} />
                <svg className={s.stepIconSvg} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8C6 8 10 6 22 6s16 2 16 2v28s-4-2-16-2S6 36 6 36V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M22 6v28" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className={s.stepNumRow}>
                <span className={s.stepNum}>3</span>
                <h3 className={s.stepCardTitle}>Your First Reading</h3>
              </div>
              <p className={s.stepCardDesc}>
                Sit comfortably, keep your wrist at heart level, and tap the heart icon to begin.
              </p>
              <Link href="#reading" className={s.stepLearnBtn}>
                Learn More
                <svg className={s.stepLearnArrow} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Charging & Care */}
      <section className={s.chargingSection}>
        <div className={s.chargingInner}>
          <div className={s.chargingHeadingGroup}>
            <span className={s.chargingBadge}>
              <svg className={s.chargingBadgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 10.5v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="4" y="9" width="10" height="6" rx="1" fill="currentColor" fillOpacity="0.3"/>
              </svg>
              Device Maintenance
            </span>
            <h2 className={s.chargingTitle}>Charging &amp; Care</h2>
            <p className={s.chargingSubtitle}>Simple steps to keep Vital Buddy working smoothly every day</p>
          </div>

          <div className={s.chargingCards}>
            {/* Card 1 — Magnetic Cable */}
            <div className={s.chargingCard}>
              <div className={s.chargingCardHeader}>
                <div className={s.chargingCardTitleRow}>
                  <svg className={s.chargingCardIcon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="10" width="22" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M25 14v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="5" y="12" width="14" height="8" rx="1.5" fill="currentColor" fillOpacity="0.25"/>
                  </svg>
                  <h3 className={s.chargingCardTitle}>Version 1: Magnetic Cable</h3>
                </div>
                <p className={s.chargingCardSubtitle}>If your charger snaps directly onto the back of the watch:</p>
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
                  <svg className={s.chargingCardIcon2} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6l4-4 4 4-4 4-4-4zM20 6l4-4 4 4-4 4-4-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M16 10v6M10 22h12M13 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <rect x="8" y="22" width="16" height="4" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <h3 className={s.chargingCardTitle}>Version 2: Charging Dock</h3>
                </div>
                <p className={s.chargingCardSubtitle}>If your watch came with a small charging dock:</p>
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
                <h4 className={s.chargingSubTitle}>If It&apos;s Not Charging</h4>
                <div className={s.chargingPoint}>
                  <CheckIcon />
                  <p className={s.chargingPointText}>Check charger alignment and ensure cables are connected</p>
                </div>
                <div className={s.chargingPoint}>
                  <CheckIcon />
                  <p className={s.chargingPointText}>
                    Try a different outlet →{" "}
                    <Link href="#common-issues" className={s.chargingLink}>Common Issues</Link>
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
            <h2 className={s.careTitle}>Proper care helps ensure accurate readings</h2>
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
                    <svg className={s.carePointIconSvg} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 7L5 10L11 3.5" stroke="#6E70FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            <p className={s.watchCareSubtitle}>Simple care helps keep your Vital Buddy working properly</p>
            <div className={s.watchCarePoints}>
              {[
                "Wipe with a soft, damp cloth",
                "Keep Vital Buddy dry",
                "Do not submerge in water",
                "Clean regularly to avoid buildup",
              ].map((text) => (
                <div key={text} className={s.watchCarePoint}>
                  <span className={s.watchCarePointIcon}>
                    <svg className={s.watchCarePointIconSvg} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 7L5 10L11 3.5" stroke="#6E70FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              <svg className={s.fittingBadgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="2" width="12" height="20" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Proper Fit Guide
            </span>
            <h2 className={s.fittingTitle}>Fitting Your Vital Buddy</h2>
            <p className={s.fittingSubtitle}>A proper fit helps ensure comfort and accurate readings</p>
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
                {["Wear on bare skin, top of wrist", "Position above wrist joint", "Keep band snug, not tight"].map((text) => (
                  <div key={text} className={s.fittingPoint}>
                    <span className={s.fittingPointIcon}>
                      <svg className={s.fittingPointIconSvg} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L5 10L11 3.5" stroke="#6E70FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                {["Fit one finger under the band", "Not too loose or too tight", "Air bag connected at both ends"].map((text) => (
                  <div key={text} className={s.fittingPoint}>
                    <span className={s.fittingPointIcon}>
                      <svg className={s.fittingPointIconSvg} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7L5 10L11 3.5" stroke="#6E70FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              <svg className={s.fittingAlertIconSvg} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4v4M7 10v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div className={s.fittingAlertBody}>
              <p className={s.fittingAlertTitle}>If It Feels Uncomfortable</p>
              <p className={s.fittingAlertDesc}>
                Adjust the band slightly • Check positioning • If irritation occurs, remove and notify your care team
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
              <svg className={s.setupBadgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Device Setup
            </span>
            <h2 className={s.setupTitle}>Setting Up Your Vital Buddy</h2>
            <p className={s.setupSubtitle}>Learn how to turn on your device, navigate the screen, and access key features</p>
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
                  { label: "Press & hold 3 sec", desc: "Turn on device", badge: "3s", style: s.setupRowGreen },
                  { label: "Press & hold + slide", desc: "Power off", badge: "3s", style: s.setupRowRed },
                  { label: "Press once", desc: "Return to home", badge: "1x", style: s.setupRowBlue },
                  { label: "Press again", desc: "Display off", badge: "1x", style: s.setupRowPurple },
                  { label: "Hold 10 seconds", desc: "Force restart", badge: "10s", style: s.setupRowYellow },
                ].map(({ label, desc, badge, style }) => (
                  <div key={label} className={`${s.setupRow} ${style}`}>
                    <span className={s.setupRowIconBg}>
                      <svg className={s.setupRowIcon} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="7" y="2" width="8" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M11 8v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
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
                  { label: "Press once", desc: "Open main menu", badge: "1x", style: s.setupRowGreen },
                  { label: "Press again", desc: "View features", badge: "1x", style: s.setupRowRed },
                ].map(({ label, desc, badge, style }) => (
                  <div key={label} className={`${s.setupRow} ${style}`}>
                    <span className={s.setupRowIconBg}>
                      <svg className={s.setupRowIcon} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="5" width="16" height="2" rx="1" fill="currentColor"/>
                        <rect x="3" y="10" width="16" height="2" rx="1" fill="currentColor"/>
                        <rect x="3" y="15" width="16" height="2" rx="1" fill="currentColor"/>
                      </svg>
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
                    <svg className={s.setupTouchTitleIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c1.47 0 2.865.32 4.112.892" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  Touchscreen Navigation
                </h4>
                <div className={s.setupSwipeGrid}>
                  {[
                    {
                      dir: "← Swipe left", action: "Blood pressure",
                      icon: <path d="M12 21C12 21 4 13.5 4 8.5a4 4 0 0 1 8 0 4 4 0 0 1 8 0C20 13.5 12 21 12 21z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>,
                    },
                    {
                      dir: "→ Swipe right", action: "Sidebar",
                      icon: <><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M9 3v18" stroke="currentColor" strokeWidth="1.5"/></>,
                    },
                    {
                      dir: "↑ Swipe up", action: "Messages",
                      icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></>,
                    },
                    {
                      dir: "↓ Swipe down", action: "Settings",
                      icon: <><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06-.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.5"/></>,
                    },
                  ].map(({ dir, action, icon }) => (
                    <div key={action} className={s.setupSwipeCard}>
                      <p className={s.setupSwipeDir}>
                        <svg className={s.setupSwipeDirIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">{icon}</svg>
                        {dir}
                      </p>
                      <p className={s.setupSwipeAction}>{action}</p>
                    </div>
                  ))}
                  <div className={`${s.setupSwipeCard} ${s.setupSwipeCardFull}`}>
                    <p className={s.setupSwipeDir}>
                      <svg className={s.setupSwipeDirIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="2" width="14" height="20" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="12" cy="16" r="2" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
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

      {/* Contact */}
      <Section background="surface">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
          <p className="text-[--color-muted] mb-4">
            Our support team is available to assist you with technical issues,
            account questions, and general inquiries.
          </p>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@vitalfriend.com"
                className="text-[--color-primary] hover:underline"
              >
                support@vitalfriend.com
              </a>
            </p>
            <p>
              <strong>Support Hours:</strong> Monday – Friday, 9:00 AM – 6:00
              PM (EST)
            </p>
          </div>
          <p className="text-sm text-[--color-muted] mt-4">
            For urgent clinical or device-related issues, please contact your
            healthcare provider directly.
          </p>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h3 className="text-xl font-bold text-[--color-primary] mb-4">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.q}>
                    <p className="font-semibold mb-1">{item.q}</p>
                    <p className="text-[--color-muted]">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Troubleshooting */}
      <Section background="surface">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <ul className="space-y-2">
            {troubleshooting.map((tip) => (
              <li key={tip} className="flex gap-3">
                <span className="text-[--color-primary] font-bold">•</span>
                <span className="text-[--color-muted]">{tip}</span>
              </li>
            ))}
          </ul>
          <p className="text-[--color-muted] mt-4">
            If problems persist, please contact our support team.
          </p>
        </div>
      </Section>

      {/* Feedback */}
      <Section background="white" className="text-center">
        <h2 className="text-2xl font-bold mb-3">Feedback</h2>
        <p className="text-[--color-muted]">
          We&apos;re always improving VitalFriend. If you have suggestions or
          feedback, email us at{" "}
          <a
            href="mailto:care@vitalfriend.com"
            className="text-[--color-primary] hover:underline"
          >
            care@vitalfriend.com
          </a>
          .
        </p>
        <p className="text-[--color-muted] mt-4">
          Thank you for trusting VitalFriend as your partner in proactive,
          connected care.
        </p>
      </Section>
    </>
  );
}
