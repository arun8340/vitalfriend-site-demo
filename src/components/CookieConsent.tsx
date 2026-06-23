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
            notice_banner_type: "simple",
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

          const observer = new MutationObserver(() => {
            const textEl = document.querySelector(".cc-nb-text") as HTMLElement | null;
            if (!textEl || textEl.dataset.readMoreInit) return;
            textEl.dataset.readMoreInit = "true";
            observer.disconnect();

            const textContent = textEl.querySelector(".cc-nb-text-content") as HTMLElement | null;
            const target = textContent ?? textEl;

            target.style.cssText +=
              "display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;";

            const readMoreLink = document.createElement("a");
            readMoreLink.textContent = "Read more";
            readMoreLink.href = "#";
            readMoreLink.className = "cc-nb-read-more";
            readMoreLink.addEventListener("click", (e) => {
              e.preventDefault();
              target.style.webkitLineClamp = "unset";
              target.style.overflow = "visible";
              readMoreLink.remove();
            });

            target.insertAdjacentElement("afterend", readMoreLink);
          });

          observer.observe(document.body, { childList: true, subtree: true });
        }}
      />
      <noscript>
        Free cookie consent management tool by{" "}
        <a href="https://www.termsfeed.com/">TermsFeed Generator</a>
      </noscript>
    </>
  );
}
