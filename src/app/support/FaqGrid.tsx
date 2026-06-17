"use client";

import { useState } from "react";
import s from "./support.module.css";

const FAQ_ITEMS = [
  {
    question: "How much does Vital Buddy cost?",
    answer:
      "Vital Buddy may be eligible for reimbursement through Medicare or your insurance plan, which could reduce out-of-pocket costs. Eligibility varies depending on your provider and situation. Contact us to find out what may be available for you.",
  },
  {
    question: "Is my health data private and secure?",
    answer:
      "Your health data belongs to you. Vital Buddy uses secure encryption to secure all information, and only the people you choose, like family members or caregivers, can access your health updates through the VitalInsights platform.",
  },
  {
    question: "How long does the Vital Buddy battery last?",
    answer:
      "Vital Buddy is designed to last through your day on a single charge, and up to 3 days. Charging is easy, just attach the magnetic charger and it powers up quickly. We recommend charging nightly to help keep it ready when you need it.",
  },
  {
    question: "What health stats does Vital Buddy track?",
    answer:
      "Vital Buddy monitors heart rate, blood oxygen levels (SpO2), activity, sleep, and more, all from your wrist. Your data syncs automatically to the VitalInsights platform so you and your care team can review an up-to-date picture of your health.",
  },
];

export default function FaqGrid() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className={s.faqGrid}>
      {FAQ_ITEMS.map(({ question, answer }) => {
        const isSelected = selected === question;
        return (
          <button
            key={question}
            type="button"
            className={`${s.faqCard} ${isSelected ? s.faqCardOpen : ""}`}
            onClick={() => setSelected(isSelected ? null : question)}
            aria-expanded={isSelected}
          >
            <span className={s.faqCardHeader}>
              <span
                className={`${s.faqCardLabel} ${isSelected ? s.faqCardLabelSelected : ""}`}
              >
                {question}
              </span>
              <svg
                className={s.faqCardIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d={isSelected ? "M6 9l6 6 6-6" : "M9 18l6-6-6-6"}
                  stroke={isSelected ? "#3C7FC3" : "#8A9099"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {isSelected && <span className={s.faqCardAnswer}>{answer}</span>}
          </button>
        );
      })}
    </div>
  );
}
