import { ReactNode } from "react";

export interface FeatureCard {
  icon: ReactNode;
  title: string;
  desc: string;
  last: boolean;
}

export const featureCards: FeatureCard[] = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#4D9AF1" strokeWidth="1.5" />
        <path d="M6 10h2l1.5-3 2 6 1.5-3H18" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17v2M8 21h8" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Continuous Vitals Visibility",
    desc: "Monitor patient vitals continuously between visits, not just during spot checks. Get a complete picture of patient health with real-time data tracking.",
    last: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.73 21a2 2 0 01-3.46 0" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Early Alerts",
    desc: "Receive intelligent alerts that support faster intervention and better outcomes. Be proactive instead of reactive with timely notifications.",
    last: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="#4D9AF1" strokeWidth="1.5" />
        <path d="M9 11h6M9 14h6M9 17h4" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Reduced Manual Work",
    desc: "Minimize reliance on manual measurements and reactive care. Automated data collection saves time and reduces errors.",
    last: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke="#4D9AF1" strokeWidth="1.5" />
        <path d="M3 20c0-3.314 2.686-5 6-5h6c3.314 0 6 1.686 6 5" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="6" r="2.5" stroke="#4D9AF1" strokeWidth="1.5" />
        <path d="M21 18c0-2-1.5-3.5-4-3.5" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Seamless Team Sharing",
    desc: "Share patient data effortlessly with care teams to support coordinated decision-making and collaborative care.",
    last: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#4D9AF1" strokeWidth="1.5" />
        <path d="M12 17v2M8 21h8" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="8.5" r="2" stroke="#4D9AF1" strokeWidth="1.4" />
        <path d="M8.5 14c0-1.933 1.567-3 3.5-3s3.5 1.067 3.5 3" stroke="#4D9AF1" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Insurance Covered",
    desc: "Both device and service are covered by insurance, making it accessible for your patients without additional financial burden.",
    last: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M2 12l5 5L17 7" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12l5 5L22 7" stroke="#4D9AF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Better Data Quality",
    desc: "Access high-quality, actionable data with reduced noise. Make confident clinical decisions based on reliable information.",
    last: true,
  },
];

export const proPoints: string[] = [
  "FDA-cleared and reimbursable under the Medicare RPM program",
  "24/7 monitoring of 10+ key vitals, automatically shared in a HIPAA-secure cloud environment",
  "VitalInsights provides AI-powered reporting and analysis for actionable insights",
  "Easy to onboard and maintain - unlike usual medical equipment Data platform integrity and integrations Device neutral",
  "Tens of thousands of data points aggregated daily to provide comprehensive patient insights",
];

export const stats: { number: string; label: string }[] = [
  { number: "10+", label: "Vital Signs Monitored" },
  { number: "24/7", label: "Continuous Monitoring" },
  { number: "100%", label: "Insurance Coverage" },
];
