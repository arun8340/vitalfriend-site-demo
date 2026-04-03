"use client";

import { useState } from "react";

const faqs = [
  {
    q: "my readings are off",
    a: "If your readings seem off, make sure the BUDDI wearable is properly positioned on your wrist and that the sensors are clean. Ensure the device is snug but comfortable. If readings continue to be inconsistent, contact our support team.",
  },
  {
    q: "what if Buddi isn't worn?",
    a: "Yes, you can conveniently monitor the status of your order or service progress within a few hours. Your order will track.",
  },
  {
    q: "who sees the data?",
    a: "Your health data is shared only with the clinicians, care facility staff, and family members you authorize. All data is stored in a HIPAA-secure cloud environment and is never sold or shared with third parties.",
  },
  {
    q: "is my information secure?",
    a: "Absolutely. VitalFriend uses enterprise-grade encryption and is fully HIPAA compliant. All data transmissions are encrypted end-to-end and stored in secure, certified cloud infrastructure.",
  },
  {
    q: "Can I track my order or service progress?",
    a: "Yes, you can conveniently monitor the status of your order or service progress within a few hours. Your order will track.",
  },
];

export default function PlatformFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              background: isOpen ? "#EDF5FD" : "#F7F7F7",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 24px",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                textAlign: "left",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 20,
                  fontWeight: isOpen ? 600 : 500,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: isOpen ? "#3C7FC3" : "#404655",
                  flex: 1,
                }}
              >
                {faq.q}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isOpen ? "#3C7FC3" : "#9CA3AF"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                {isOpen ? (
                  <path d="M18 15l-6-6-6 6" />
                ) : (
                  <path d="M9 18l6-6-6-6" />
                )}
              </svg>
            </button>
            {isOpen && (
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "170%",
                  letterSpacing: "0%",
                  color: "#15171C",
                  padding: "0 24px 20px",
                  maxWidth: 500,
                }}
              >
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
