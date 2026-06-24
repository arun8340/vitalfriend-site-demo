import type { Metadata } from "next";
import Image from "next/image";
import s from "./cookies.module.css";

export const metadata: Metadata = {
  title: "Cookies Policy | VitalFriend",
  description:
    "Learn how VitalFriend uses cookies and similar technologies on vitalfriend.com.",
  alternates: { canonical: "https://vitalfriend.com/cookies" },
  openGraph: { url: "https://vitalfriend.com/cookies" },
};

export default function CookiesPage() {
  return (
    <div className={s.pageWrapper}>
      <div className={s.blobTopRight} />
      <div className={s.blobBottomLeft} />
      <div className={s.blobMidRight} />

      <div className={s.pageInner}>
        {/* ── Hero card ── */}
        <div className={s.heroCard}>
          <div className={s.heroContent}>
            <h1 className={s.heroHeading}>Cookies policy</h1>
            <p className={s.heroDate}>Last updated: June 21st, 2026</p>
          </div>

          <div className={s.heroImageCol}>
            <Image
              src="/images/privacy-buddy.png"
              alt="VitalFriend privacy"
              width={273}
              height={324}
              className={s.heroImage}
            />
          </div>
        </div>

        {/* ── Content ── */}
        <div className={s.contentInner}>
          <p className={s.bodyText}>
            This policy explains how VitalFriend uses cookies and similar technologies on
            vitalfriend.com. By using the Site, you agree to the use of cookies as described
            here, except where consent is required and not given.
          </p>
          <p className={s.bodyText}>
            This Cookies Policy explains how VitalFriend (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) uses cookies and similar technologies on vitalfriend.com (the
            &ldquo;Site&rdquo;). By using the Site, you agree to the use of cookies as described
            in this policy, except where consent is required and not given.
          </p>

          {/* What are cookies? */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>What are cookies?</h2>
            <p className={s.bodyText}>
              Cookies are small text files that a website places on your device when you visit. They
              are widely used to make websites work, to improve your experience, and to provide
              information to the site&apos;s owners. Similar technologies &mdash; such as web
              beacons, pixels, and local storage &mdash; perform comparable functions, and
              references to &ldquo;cookies&rdquo; in this policy include those technologies.
            </p>
          </div>

          {/* Types of cookies */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>Types of cookies we use</h2>
            <ul className={s.subList}>
              <li className={s.subItem}>
                <strong>Strictly necessary cookies.</strong> These are essential for the Site to
                function properly &mdash; for example, keeping you logged in, remembering items in
                a form, or maintaining security. The Site cannot work properly without these, so
                they cannot be switched off.
              </li>
              <li className={s.subItem}>
                <strong>Functional cookies.</strong> These remember choices you make (such as your
                language or region) to give you a more personalized experience.
              </li>
              <li className={s.subItem}>
                <strong>Analytics cookies.</strong> These help us understand how visitors use the
                Site, specifically which pages are visited, how long people stay, and whether they
                encounter errors, so we can improve it.
              </li>
              <li className={s.subItem}>
                <strong>Advertising/targeting cookies.</strong> These are used to deliver ads that
                are more relevant to you and to measure the effectiveness of advertising campaigns.
                They may be set by us or by third-party advertising partners.
              </li>
            </ul>
          </div>

          {/* Third-party cookies */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>Third-party cookies</h2>
            <p className={s.bodyText}>
              Some cookies are placed by third parties that provide services on our Site, such as
              analytics providers, embedded video players, social media buttons, and payment
              processors. These third parties may use cookies to collect information about your
              online activities across websites over time. We do not control these cookies, and you
              should review the relevant third party&apos;s own privacy and cookies policies.
            </p>
          </div>

          {/* How to manage cookies */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>How to manage cookies</h2>
            <p className={s.bodyText}>
              You can control and manage cookies in several ways:
            </p>
            <ul className={s.subList}>
              <li className={s.subItem}>
                <strong>Browser settings.</strong> Most browsers let you refuse or delete cookies.
                Look in your browser&apos;s &ldquo;Settings,&rdquo; &ldquo;Preferences,&rdquo; or
                &ldquo;Privacy&rdquo; menu. Note that blocking some cookies may affect how the
                Site works.
              </li>
              <li className={s.subItem}>
                <strong>Opt-out tools.</strong> For advertising cookies, you can use industry tools
                such as those offered by the Digital Advertising Alliance or Your Online Choices
                (EU).
              </li>
            </ul>
          </div>

          {/* Changes to this policy */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>Changes to this policy</h2>
            <p className={s.bodyText}>
              We may update this Cookies Policy from time to time to reflect changes in technology,
              law, or our practices. When we do, we will revise the &ldquo;Last updated&rdquo; date
              above. We encourage you to review this page periodically.
            </p>
          </div>

          {/* Contact us */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>Contact us</h2>
            <p className={s.bodyText}>
              If you have any questions about our use of cookies and/or would like to opt out,
              please contact us at:
            </p>
            <p className={s.bodyText}>
              <strong>VitalFriend</strong>
              <br />
              Email:{" "}
              <a href="mailto:support@vitalfriend.com" style={{ color: "#4D9AF1" }}>
                support@vitalfriend.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
