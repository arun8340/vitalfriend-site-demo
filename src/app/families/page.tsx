import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { benefitCards, stayConnectedContent, simpleTechnologyContent } from "./data";
import s from "./families.module.css";

export const metadata: Metadata = {
  title: "For Patients & Families",
  description:
    "24/7 monitoring keeps everyone informed. Peace of mind even when you're not there. Know sooner so you can act faster.",
  alternates: { canonical: "https://vitalfriend.com/families" },
  openGraph: { url: "https://vitalfriend.com/families" },
};


export default function FamiliesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={s.heroSection}>
        <div className={s.heroInner}>
          <div className={s.heroBadge}>
            <span className={s.heroBadgeText}>For Families & Caregivers</span>
          </div>
          <h1 className={s.heroTitle}>
            <span className={s.heroTitleGradient}>Families</span>
          </h1>
          <p className={s.heroSubtitle}>
            Peace of mind for families. Continuous care for your loved ones.
            Stay connected to their health, no matter where you are.
          </p>
          <Button href="/demo" variant="pill" size="md">
            See How it Works
          </Button>
        </div>
      </section>
      <section className={s.sectionWhite}>
        <div className={s.whyInner}>
          <h2 className={s.sectionHeading}>
            Why Clinicians Choose VitalFriend
          </h2>
          <p className={s.sectionSubtitle}>
            Better data. Earlier action. Less noise.
          </p>
          <div className={s.cardsGrid}>
            {benefitCards.map((card, i) => (
              <div
                key={i}
                className={`${s.card}${card.last ? ` ${s.cardLast}` : ""}`}
              >
                <div className={s.cardIcon}>{card.icon}</div>
                <h3 className={s.cardTitle}>{card.title}</h3>
                <p className={s.cardDesc}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={s.sectionWhite}>
        <div className={s.splitSectionInner}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 className={s.splitHeading}>
              Stay Connected to What Matters Most
            </h2>
            <p className="text-lg text-[--color-muted] mb-4">
              VitalFriend gives families the peace of mind that comes from
              staying informed about their loved one&apos;s health. No more
              wondering or worrying you&apos;ll know immediately if something
              changes.
            </p>
            <ul className={s.splitList}>
              {stayConnectedContent.map((point, i) => (
                <li key={i} className={s.splitItem}>
                  <svg
                    className={s.splitCheckIcon}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id={`cg${i}`} x1="0" y1="0" x2="1" y2="1">
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
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className={s.splitImageWrapper}>
            <Image
              src="/images/stay-connected-family.png"
              alt="Stay Connected with Family"
              fill
              className={s.splitImage}
              unoptimized
            />
          </div>
        </div>
      </section>
      <section className={s.sectionWhite}>
        <div className={s.splitSectionInner}>
          <div className={s.splitImageWrapper}>
            <Image
              src="/images/simple-tech-impact.png"
              alt="Simple Technology, Profound Impact"
              fill
              className={s.splitImage}
              unoptimized
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 className={s.splitHeading}>
              Simple Technology, Profound Impact
            </h2>
            <p className="text-lg text-[--color-muted] mb-4">
              The BUDDI device is designed with seniors in mind—comfortable,
              discreet, and requiring minimal effort. Your loved one can go
              about their day while you stay informed about their well-being.
            </p>
            <ul className={s.splitList}>
              {simpleTechnologyContent.map((point, i) => (
                <li key={i} className={s.splitItem}>
                  <svg
                    className={s.splitCheckIcon}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id={`cg${i}`} x1="0" y1="0" x2="1" y2="1">
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
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section className={s.ctaSection}>
        <div className={s.ctaCard}>
          <div className={s.ctaInner}>
            <p className={s.ctaQuote}>
              &#34;VitalFriend has given our family incredible peace of mind. We
              can check on Mom anytime and get alerts if something changes.
              It&apos;s like having a guardian angel watching over her
              24/7.&#34;
            </p>
            <span className={s.ctaSubtext}>Sarah Johnson</span>
            <span className={s.ctaSubtext2}>
              Daughter and Primary Caregiver
            </span>
            <Button href="/demo" variant="pill" size="md">
              Get Started for ALFs
            </Button>
          </div>
        </div>
      </section>
      <section className={s.sectionWhite}>
        <h2 className={s.sectionHeading}>Ready to Protect Your Loved One?</h2>
        <p className={s.sectionSubtitle}>
          Join thousands of families who trust VitalFriend to keep their loved
          ones safe and healthy
        </p>
        <div className={s.ctaBtns}>
          <Button href="/contact" variant="pill" size="md">
            Get Started Today
          </Button>
          <Button href="/contact" variant="pill" size="md">
            Talk to an Expert
          </Button>
        </div>
      </section>
    </>
  );
}
