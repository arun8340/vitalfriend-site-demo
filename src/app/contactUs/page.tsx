import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import s from "./contact.module.css";
import ContactUsFAQ from "./contactUsFAQ";
import ContactForm from "./ContactForm";
import { infoBlocks, supportCards } from "./data";

export const metadata: Metadata = {
  title: "Contact Us | VitalFriend",
  description:
    "Have questions about VitalFriend? We're here to help. Reach out to our team and we'll get back to you as soon as possible.",
  alternates: { canonical: "https://vitalfriend.com/contact" },
  openGraph: { url: "https://vitalfriend.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={s.heroSection}>
        <div className={s.heroInner}>
          <div className={s.heroBadge}>
            <span className={s.heroBadgeText}>We&apos;re Here to Help</span>
          </div>
          <h1 className={s.heroTitle}>Contact US</h1>
          <p className={s.heroSubtitle}>
            Have questions about VitalFriend? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* ── Send Us a Message + Get In Touch ── */}
      <section className={s.contactSection}>
        <div className={s.contactInner}>
          {/* Form */}
          <div>
            <h2 className={s.formTitle}>Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Get In Touch */}
          <div>
            <h2 className={s.infoTitle}>Get In Touch</h2>
            <p className={s.infoDesc}>
              Our team is ready to assist you with any questions about
              VitalFriend. Whether you&apos;re a family member, healthcare
              professional, or facility administrator, we&apos;re here to help.
            </p>
            <div className={s.infoBlocks}>
              {infoBlocks.map((block, i) => (
                <div key={i} className={s.infoBlock}>
                  <div
                    className={s.infoIconWrap}
                    style={{ background: block.iconBg }}
                  >
                    {block.icon}
                  </div>
                  <div className={s.infoBlockBody}>
                    <p className={s.infoBlockTitle}>{block.title}</p>
                    {block.lines.map((line, j) => (
                      <p key={j} className={s.infoBlockText}>{line}</p>
                    ))}
                    {block.muted && (
                      <p className={s.infoBlockMuted}>{block.muted}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Ways to Get Support ── */}
      <section className={s.otherSection}>
        <div className={s.otherInner}>
          <h2 className={s.otherHeading}>Other Ways to Get Support</h2>
          <p className={s.otherSubtitle}>
            Choose the support option that works best for you
          </p>
          <div className={s.otherCards}>
            {supportCards.map((card, i) => (
              <div key={i} className={s.otherCard}>
                <div className={s.otherCardIcon}>{card.icon}</div>
                <h3 className={s.otherCardTitle}>{card.title}</h3>
                <p className={s.otherCardDesc}>{card.desc}</p>
                <Link href={card.href} className={s.otherCardBtn}>
                  {card.btnLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={s.faqSection}>
        <div className={s.faqInner}>
          <div className={s.faqLeft}>
            <h2 className={s.faqTitle}>FAQ</h2>
            <p className={s.faqSubtext}>HAVE A QUESTION? Ask here to get answer</p>
            <Link href="/support" className={s.faqReadMore}>
              Read More
            </Link>
            <div className={s.faqImageWrapper}>
              <Image
                src="/images/aboutUs-faqs.png"
                alt="FAQ support"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={s.faqRight}>
            <ContactUsFAQ />
          </div>
        </div>
      </section>
    </>
  );
}
