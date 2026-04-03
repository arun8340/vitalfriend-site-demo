"use client";

import { useState } from "react";
import s from "./faq.module.css";

const faqs = [
  {
    q: "What services/products do you offer?",
    a: "VitalFriend offers AI-powered continuous vitals monitoring solutions designed for Assisted Living Facilities, physicians, and families. Our flagship product BUDDI® is a wearable device that tracks key health metrics in real time.",
  },
  {
    q: "Can I track my order or service progress?",
    a: "Yes, you can conveniently monitor the status of your order or service progress within a few hours. Your order will track.",
  },
  {
    q: "What are your customer support hours?",
    a: "Our support team is available Monday through Friday, 8am–6pm PT. For urgent matters, 24/7 support is available for enrolled facilities.",
  },
  {
    q: "What is your return/exchange policy?",
    a: "We offer a 30-day satisfaction guarantee on all hardware. Please contact our support team to initiate a return or exchange.",
  },
  {
    q: "Can I track my order or service progress?",
    a: "You can log in to your VitalFriend account dashboard at any time to view real-time updates on your service deployment or order status.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={isOpen ? s.itemExpanded : s.itemCollapsed}>
            <button
              className={s.trigger}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className={isOpen ? s.questionExpanded : s.questionCollapsed}>
                {faq.q}
              </span>
              {isOpen ? (
                <svg className={s.chevronExpanded} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              ) : (
                <svg className={s.chevron} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
            </button>
            {isOpen && <p className={s.answer}>{faq.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
