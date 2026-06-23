"use client";

import Script from "next/script";

export default function CookieConsent() {
  return (
    <>
      <Script
        src="https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js"
        strategy="afterInteractive"
        onLoad={() => {
          (window as any).cookieconsent.run({
            notice_banner_type: "headline",
            consent_type: "express",
            palette: "light",
            language: "en",
            page_load_consent_levels: ["strictly-necessary"],
            notice_banner_reject_button_hide: false,
            preferences_center_close_button_hide: false,
            page_refresh_confirmation_buttons: false,
            website_name: "VitalFriend.com",
            website_privacy_policy_url: "https://vitalfriend.com/privacy",
          });
        }}
      />
      <noscript>
        Free cookie consent management tool by{" "}
        <a href="https://www.termsfeed.com/">TermsFeed Generator</a>
      </noscript>
    </>
  );
}
