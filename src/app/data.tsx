import { ReactNode } from "react";

/* ── How Vital Buddy Works (Steps) ── */
export interface WorkStep {
  step: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

export const workSteps: WorkStep[] = [
  {
    step: "STEP 1",
    title: "Vital Buddy Captures",
    description: "Key vitals and biomarkers, continuously on the wrist.",
    gradientFrom: "#2B7FFF",
    gradientTo: "#00B8DB",
  },
  {
    step: "STEP 2",
    title: "Data Transmits",
    description: "Via VitalLink, our HIPAA-compliant data layer.",
    gradientFrom: "#00B8DB",
    gradientTo: "#00BBA7",
  },
  {
    step: "STEP 3",
    title: "Clinicians Interpret",
    description: "AI-assisted tools help clinicians identify issues.",
    gradientFrom: "#AD46FF",
    gradientTo: "#F6339A",
  },
  {
    step: "STEP 4",
    title: "Caregivers Notified",
    description: "Notifications go to key players on the care team.",
    gradientFrom: "#F6339A",
    gradientTo: "#FF2056",
  },
  {
    step: "STEP 5",
    title: "Care Delivered",
    description: "Documented in EHR; CPT code billed.",
    gradientFrom: "#F6339A",
    gradientTo: "#7920FF",
  },
];

/* ── Audience Sections ── */
export interface AudienceFeature {
  text: string;
}

export interface AudienceSection {
  badge: string;
  badgeGradient: string;
  headingGradient: string;
  headingBlack: string;
  description: string;
  features: AudienceFeature[];
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
  bgColor: string;
  href: string;
}

export const audienceSections: AudienceSection[] = [
  {
    badge: "For Assisted Living & Senior Care Facilities",
    badgeGradient: "linear-gradient(90deg, #2F5FF3 0%, #14AE5C 100%)",
    headingGradient: "Deliver Better Care",
    headingBlack: "and More Efficient Operations",
    description:
      "We bring care teams, physicians, and families together on one platform, turning millions of data points into clear insights that simplify care, lighten workloads, and mitigate risks.",
    features: [
      { text: "Save hours of staff workload with automated monitoring" },
      { text: "Improve resident care with early notifications" },
      { text: "Keep families and physicians informed" },
      { text: "Vital Buddy is covered by Medicare/insurance*" },
    ],
    imageSrc: "/images/caring-patient.png",
    imageAlt: "Nurse caring for senior patient",
    imageLeft: false,
    bgColor: "#FFFFFF",
    href: "/assisted-living",
  },
  {
    badge: "For Physicians & Clinicians",
    badgeGradient: "linear-gradient(90deg, #4FC560 0%, #35976A 100%)",
    headingGradient: "Clinical Insights",
    headingBlack: "Without Clinical Overload",
    description:
      "Monitor a steady stream of key vitals data on patients at risk when they’re not in the hospital, without adding to documentation or rounding burden.",
    features: [
      { text: "Continuous visibility of vitals and biomarkers between visits" },
      { text: "Early alerts for faster intervention" },
      { text: "Reduced reliance on manual measurements" },
      { text: "Facilitates seamless care team coordination" },
    ],
    imageSrc: "/images/clinical-dashboard.png",
    imageAlt: "Physician reviewing clinical data on screen",
    imageLeft: true,
    bgColor: "#F9FEF9",
    href: "/physicians",
  },
  {
    badge: "For Patients & Family",
    badgeGradient: "linear-gradient(90deg, #A14DFB 0%, #D12779 100%)",
    headingGradient: "Get Peace of Mind",
    headingBlack: "Even When You're Not There",
    description:
      "We keep a constant eye on your loved ones' health, continuously monitoring their health, sharing important changes with caregivers and clinicians so issues are caught early.",
    features: [
      { text: "24/7 monitoring keeps everyone informed" },
      { text: "BUDDI® is easy to wear and care for" },
      {
        text: "Smart notifications for family members and the care team when health changes occur",
      },
      {
        text: "View trends for blood pressure, sleep, oxygen, heart rate and more",
      },
    ],
    imageSrc: "/images/family-visit.png",
    imageAlt: "Family visiting elderly loved one",
    imageLeft: false,
    bgColor: "#FFFFFF",
    href: "/families",
  },
];

/* ── Comparison Table ── */
export interface ComparisonRow {
  feature: string;
  vitalBuddy: string | true;
  competitors: string | false;
}

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Form factor",
    vitalBuddy: "Single wrist-worn device",
    competitors:
      "Separate instruments: BP cuff, pulse oximeter, thermometer, ECG, stethoscope and more",
  },
  {
    feature: "Metrics captured",
    vitalBuddy: "Blood pressure, SpO2, pulse/HR, steps, and more in one stream",
    competitors:
      "Each device measures 1 or 2 metrics; a full set requires stacking 4–5 tools",
  },
  {
    feature: "Measurement cadence",
    vitalBuddy: "Continuous readings — 1,000+ data points per day",
    competitors:
      "Spot-checks when a clinician or patient takes them (minutes to hours apart)",
  },
  {
    feature: "Blood pressure method",
    vitalBuddy: "Oscillometric cuff on the wrist",
    competitors: "Oscillometric or auscultatory cuff on the upper arm",
  },
  {
    feature: "Who operates it",
    vitalBuddy: "Runs automatically, with patient participation when available",
    competitors: "Trained staff or patient following protocol",
  },
  {
    feature: "Target environments",
    vitalBuddy:
      "Residential home, assisted living, medical practices, independent living",
    competitors: "Clinic, hospital room, pharmacy, or at-home spot checks",
  },
  {
    feature: "Data handling",
    vitalBuddy: "Auto-syncs to a HIPAA-compliant cloud platform",
    competitors:
      "Manual logging into charts and EHRs; no automatic trend detection",
  },
  {
    feature: "Nighttime & unattended readings",
    vitalBuddy:
      "Captures overnight events, e.g. a blood pressure spike when the wearer is asleep",
    competitors:
      "Not captured unless the patient is on an ambulatory BP monitor",
  },
  {
    feature: "Notifications",
    vitalBuddy:
      "Real-time notifications to clinicians and family based on thresholds or anomalies",
    competitors: "Only when a reading is taken and a clinician reviews it",
  },
];

/* ── VitalFriend Difference ── */
export interface DifferenceItem {
  number: string;
  description: string;
}

export const differenceItems: DifferenceItem[] = [
  {
    number: "1",
    description:
      "The ONLY integrated wearable, online, monitoring, billing, support platform designed to optimize senior care facility efficiency and patient care",
  },
  {
    number: "2",
    description:
      "Revolutionary, comfortable BUDDI® increases adherence, eliminates the need for expensive services and medical equipment",
  },
  {
    number: "3",
    description:
      "We manage support, monitoring, clinical notes and insurance billing",
  },
  {
    number: "4",
    description:
      "Monitor and manage patient data, individually and collectively, to drive better outcomes at lower costs",
  },
];

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
        <path
          d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
          fill="#4D9AF1"
        />
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
        <path
          d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
          fill="#4D9AF1"
        />
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
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"
          fill="#4D9AF1"
        />
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
        <path
          d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 11H11V7h1.5v5.26l3.5 2.08-.75 1.26L12.5 13z"
          fill="#4D9AF1"
        />
      </svg>
    ),
    title: "Business Hours",
    lines: ["Monday - Friday: 9am - 6pm EST"],
    muted: "Saturday - Sunday: Closed",
  },
];

/* ── Support Cards ── */
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
        <path
          d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
          fill="#4D9AF1"
        />
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
        <path
          d="M12 7a3 3 0 00-3 3h2a1 1 0 112 0c0 .55-.45.9-1 1.3-.55.4-1 .9-1 1.7h2c0-.2.1-.35.4-.55C14.3 12.1 15 11.3 15 10a3 3 0 00-3-3z"
          fill="#ffffff"
        />
        <circle cx="12" cy="17" r="1.1" fill="#ffffff" />
      </svg>
    ),
    title: "Help Center",
    desc: "Browse our comprehensive knowledge base and FAQs for quick answers.",
    btnLabel: "Visit Help Center",
    href: "/support",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
          fill="#4D9AF1"
        />
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
    q: "My readings are off",
    a: "If your readings seem off, make sure the BUDDI wearable is properly positioned on your wrist and that the sensors are clean. Ensure the device is snug but comfortable. If readings continue to be inconsistent, contact our support team.",
  },
  {
    q: "What if Buddi isn't worn?",
    a: "If BUDDI is not worn, the platform will notify the care team and flag the patient as non-compliant. Alerts can be configured so staff can follow up with residents to re-engage monitoring.",
  },
  {
    q: "Who sees the data?",
    a: "Your health data is shared only with the clinicians, care facility staff, and family members you authorize. All data is stored in a HIPAA-secure cloud environment and is never sold or shared with third parties.",
  },
  {
    q: "Is my information secure?",
    a: "Absolutely. VitalFriend uses enterprise-grade encryption and is fully HIPAA compliant. All data transmissions are encrypted end-to-end and stored in secure, certified cloud infrastructure.",
  },
  {
    q: "Can I track my order or service progress?",
    a: "Yes, you can conveniently monitor the status of your order or service progress within a few hours of setup. Your order will track through our patient portal.",
  },
];
