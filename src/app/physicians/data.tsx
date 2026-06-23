import { ReactNode } from "react";

/* ─── Critical Insights Cards ─── */
export interface InsightCard {
  icon: ReactNode;
  title: string;
  desc: string;
}

export const insightCards: InsightCard[] = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="#4D9AF1"
          strokeWidth="1.5"
        />
        <path
          d="M6 10h2l1.5-3 2 6 1.5-3H18"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17v2M8 21h8"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Continuous Vitals Visibility",
    desc: "Monitor patient vitals continuously between visits, not just during spot checks. Get a complete picture of patient health with real-time data tracking.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.73 21a2 2 0 01-3.46 0"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Early Alerts",
    desc: "Receive intelligent alerts that support faster intervention and better outcomes. Be proactive instead of reactive with timely notifications.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="9"
          y="3"
          width="6"
          height="4"
          rx="1"
          stroke="#4D9AF1"
          strokeWidth="1.5"
        />
        <path
          d="M9 11h6M9 14h6M9 17h4"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Reduced Manual Work",
    desc: "Minimize reliance on manual measurements and reactive care. Automated data collection saves time and reduces errors.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke="#4D9AF1" strokeWidth="1.5" />
        <path
          d="M3 20c0-3.314 2.686-5 6-5h6c3.314 0 6 1.686 6 5"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="17" cy="6" r="2.5" stroke="#4D9AF1" strokeWidth="1.5" />
        <path
          d="M21 18c0-2-1.5-3.5-4-3.5"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Seamless Team Sharing",
    desc: "Share patient data effortlessly with care teams to support coordinated decision-making and collaborative care.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="#4D9AF1"
          strokeWidth="1.5"
        />
        <path
          d="M12 17v2M8 21h8"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="8.5" r="2" stroke="#4D9AF1" strokeWidth="1.4" />
        <path
          d="M8.5 14c0-1.933 1.567-3 3.5-3s3.5 1.067 3.5 3"
          stroke="#4D9AF1"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Insurance Covered",
    desc: "Both device and service may be eligible for reimbursement, making it accessible for your patients without additional financial burden.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 12l5 5L17 7"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12l5 5L22 7"
          stroke="#4D9AF1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Better Data Quality",
    desc: "Access high-quality, actionable data with reduced noise. Make confident clinical decisions based on reliable information.",
  },
];

/* ─── Pro Points (Healthcare Professionals Prefer VF) ─── */
export const proPoints: string[] = [
  "24/7 monitoring of key vital signs, automatically shared in a HIPAA-compliant environment",
  "Thousands of data points aggregated daily provide baselines, trends and correlations ",
  "Vital Insights, our clinician dashboard, provides real-time reporting for actionable insights to physicians",
  "Easy to onboard and maintain, unlike traditional medical equipment.Device neutral data platform provides API integrations",
  " FDA-cleared for key vitals and eligible for reimbursement under the Medicare RPM program",
];

/* ─── Stats Banner ─── */
export const stats: { number: string; label: string }[] = [
  { number: "Key", label: "Vital Signs Monitored" },
  { number: "24/7", label: "Continuous Monitoring" },
  { number: "100%", label: "Reimbursement Eligible" },
];

/* ─── Comparison Table ─── */
export interface ComparisonRow {
  feature: string;
  consumer: boolean | string;
  rpm: boolean | string;
  vf: boolean | string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Comfortable day & night wear",
    consumer: true,
    rpm: false,
    vf: true,
  },
  {
    feature: "FDA-cleared blood pressure",
    consumer: false,
    rpm: "Partial",
    vf: true,
  },
  {
    feature: "1,000+ data points/day",
    consumer: true,
    rpm: false,
    vf: true,
  },
  {
    feature: "Clinician dashboard",
    consumer: false,
    rpm: true,
    vf: true,
  },
  {
    feature: "Al-assisted notifications",
    consumer: "Limited",
    rpm: "Limited",
    vf: true,
  },
  {
    feature: "Reimbursable through CMS",
    consumer: false,
    rpm: true,
    vf: true,
  },
];

/* ─── Virtual Care Assistant Items ─── */
export interface VirtualAssistantItem {
  imageSrc: string;
  title: string;
  desc: string;
}

export const virtualAssistantItems: VirtualAssistantItem[] = [
  {
    imageSrc: "images/va-trend.svg",
    title: "Flag concerning trends",
    desc: "The platform surfaces data deviations and vital sign trends for care team review.",
  },
  {
    imageSrc: "images/va-patient.svg",
    title: "Surface deteriorating patients early",
    desc: "Track the 2:30 AM blood pressure spike for care team review.",
  },
  {
    imageSrc: "images/va-med.svg",
    title: "Support medication adherence",
    desc: "Track intake patterns and alert on missed doses.",
  },
  {
    imageSrc: "images/va-prio.svg",
    title: "Help prioritize outreach",
    desc: "Focus attention on patients who need it most.",
  },
  {
    imageSrc: "images/va-visit.svg",
    title: "Reduce unnecessary visits",
    desc: "Remote visibility reduces reactive emergency trips.",
  },
  {
    imageSrc: "images/va-chronic.svg",
    title: "Improve chronic disease management",
    desc: "Continuous data for better long-term decisions.",
  },
];

/* ─── Testimonials ─── */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Short location label rendered in blue beneath the role */
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "My mom has been wearing her Vital Buddy for almost a year now. It takes her blood pressure every 4 hours every day. She tracks her BP and records her stats. If her BP is high, she tells me and then she initiates her relaxation techniques. We retake her blood pressure in 15 mins and it is always much lower.",
    name: "Cleo",
    role: "Family member and care provider in Georgia",
    location: "Georgia",
  },
  {
    quote:
      "I'm extremely happy with my Vital Buddy! I have it set to take my blood pressure every 4 hours and track my daily steps. It's a really convenient way for me to ensure I hit my health goals.",
    name: "Steve",
    role: "Steve, independent living resident in California",
    location: "California",
  },
  {
    quote:
      "My Vital Buddy has been very helpful for me every day. I check my blood pressure and other metrics, and really like that I have accurate time/date for every reading. Vital Buddy has made me more confident about my health.",
    name: "Len",
    role: "Independent Living Resident in California",
    location: "California",
  },
];

/* ─── Reimbursement Items ─── */
export const reimbursementItems: string[] = [
  "Supports RPM + RTM workflows",
  "Enables recurring monthly reimbursement",
  "Helps practices achieve adherence targets (important for RPM economics)",
  "Real-time medication reminders support RTM",
];

/* ─── Data & Reporting Items ─── */
export const dataReportingItems: string[] = [
  "Automatic, continuous data collection",
  "Real-time reports to a clinician's desktop",
  "Automated monthly reporting",
  "Cross functional trend analysis",
  "Treatment review by a clinician",
  "Holistic view of key vitals and health data over time",
];



/* ─── Episodic List Items ─── */
export const episodicListItems: string[] = [
  "Office vitals",
  "Occasional home measurements",
  "Patient recall (“I think my BP was high”)",
];

/* ─── Gap Card Limitations ─── */
export const traditionalLimitations: string[] = [
  "Misses overnight events",
  "Misses post-medication windows",
  "Captures patient's 'best behavior'",
];

export const vitalBuddyBenefits: string[] = [
  "Catches the 2:30 AM blood pressure spike",
  "Tracks medication intake adherence",
  "Builds baseline for vital trend review",
];

/* ─── Holistic / Tab content ─── */
export interface DashboardTabRow {
  /** Left cell value (right-aligned). Omit for full-width rows. */
  left?: string;
  /** Right cell value (left-aligned). Omit for full-width rows. */
  right?: string;
  /** Single full-width cell value */
  full?: string;
}

export interface DashboardTab {
  title: string;
  /** Pink centred header inside the table panel */
  panelHeading: string;
  rows: DashboardTabRow[];
  /** Optional blue info note beneath the table */
  note?: { primary: string; secondary?: ReactNode };
}

export const dashboardTabs: DashboardTab[] = [
  {
    title: "Vital Sign",
    panelHeading: "Vital Sign",
    rows: [
      { left: "Blood pressure", right: "Temperature" },
      { left: "Resting heart rate", right: "O2Sat (Blood Oxygen)" },
      { left: "Pulse", right: "Deep Sleep Blood Pressure" },
      { left: "Blood glucose*", right: "Weight Scale*" },
      { full: "We collect 1,000+ data points per day" },
    ],
    note: {
      primary: "Requires integration with 3rd party device",
      secondary: (
        <>
          Check our{" "}
          <a href="/platform" style={{ color: "inherit", textDecoration: "underline" }}>
            Platform page
          </a>{" "}
          for details
        </>
      ),
    },
  },
  {
    title: "Health Monitoring",
    panelHeading: "Feature",
    rows: [
      { left: "Medication reminders & adherence", right: "Daily Steps" },
      { left: "Hydration Reminders", right: "Nocturnal Vitals" },
    ],
  },
  {
    title: "Notification",
    panelHeading: "Notification Type",
    rows: [
      {
        left: "Threshold-based notification models",
        right: "Non-activity notifications",
      },
    ],
  },
  {
    title: "Communication",
    panelHeading: "Communication Feature",
    rows: [
      {
        left: "Instantly trigger a patient BP anytime/anywhere",
        right: "Telehealth capable",
      },
      {
        left: "Patient voice notes in Vital Buddy",
        right: "Vital Voice for facilities",
      },
      { full: "Doctors & families can send messages to the patient" },
    ],
  },
];

export const importantTrends: string[] = [
  "Hypertension",
  "Congestive Heart Failure",
  "Cardiometabolic disease",
  "Post-discharge monitoring",
  "BP and HR medication titration",
  "Sleep and activity monitoring",
  "Concierge & functional medicine",
];
