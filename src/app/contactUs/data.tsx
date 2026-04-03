import { ReactNode } from "react";

/* ── Info Blocks (Get In Touch) ── */
export interface InfoBlock {
  iconBg: string;
  icon: ReactNode;
  title: string;
  lines: string[];
  muted: string;
}

export const infoBlocks: InfoBlock[] = [
  {
    iconBg: "#EDF5FD",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="#4D9AF1" />
      </svg>
    ),
    title: "Phone",
    lines: ["1 (855) 742 7300"],
    muted: "Monday - Friday, 9am - 6pm EST",
  },
  {
    iconBg: "#EDF5FD",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#4D9AF1" />
      </svg>
    ),
    title: "Email",
    lines: ["support@vitalfriend.com"],
    muted: "We'll respond within 24 hours",
  },
  {
    iconBg: "#EDF5FD",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" fill="#4D9AF1" />
      </svg>
    ),
    title: "Address",
    lines: ["1218 Mateo Miller Cir", "San Ramon, CA 94583"],
    muted: "",
  },
  {
    iconBg: "#EDF5FD",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 11H11V7h1.5v5.26l3.5 2.08-.75 1.26L12.5 13z" fill="#4D9AF1" />
      </svg>
    ),
    title: "Business Hours",
    lines: ["Monday - Friday: 9am - 6pm EST"],
    muted: "Saturday - Sunday: Closed",
  },
];

/* ── Support Cards (Other Ways to Get Support) ── */
export interface SupportCard {
  icon: ReactNode;
  title: string;
  desc: string;
  btnLabel: string;
  href: string;
}

export const supportCards: SupportCard[] = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#4D9AF1" />
        <circle cx="8" cy="11" r="1.2" fill="#ffffff" />
        <circle cx="12" cy="11" r="1.2" fill="#ffffff" />
        <circle cx="16" cy="11" r="1.2" fill="#ffffff" />
      </svg>
    ),
    title: "Live Chat",
    desc: "Get instant answers to your questions through our live chat support.",
    btnLabel: "Start Chat",
    href: "#",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#4D9AF1" />
        <path d="M12 7a3 3 0 00-3 3h2a1 1 0 112 0c0 .55-.45.9-1 1.3-.55.4-1 .9-1 1.7h2c0-.2.1-.35.4-.55C14.3 12.1 15 11.3 15 10a3 3 0 00-3-3z" fill="#ffffff" />
        <circle cx="12" cy="17" r="1.1" fill="#ffffff" />
      </svg>
    ),
    title: "Help Center",
    desc: "Browse our comprehensive knowledge base and FAQs for quick answers.",
    btnLabel: "Visit help Center",
    href: "/support",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="#4D9AF1" />
        <path d="M15.5 5a5 5 0 015 5" stroke="#4D9AF1" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15.5 8a2 2 0 012 2" stroke="#4D9AF1" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Schedule a Call",
    desc: "Book a time to speak with one of our product specialists.",
    btnLabel: "Schedule Now",
    href: "#",
  },
];

/* ── FAQ ── */
export interface FAQ {
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
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
