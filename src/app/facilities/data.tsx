import { ReactNode } from "react";

export interface TabCard {
  icon: ReactNode;
  iconSrc?: string;
  title: string;
  desc: string;
  tag: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface TabData {
  label: string;
  cards: TabCard[];
  ctaQuote: string;
  ctaAuthor: string;
  ctaButtonText: string;
  insuranceBody: string;
  insuranceButtonText: string;
  insuranceImage: string;
  statsSubtitle: string;
  stats: StatItem[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  facility: string;
  avatar?: string;
}

export interface DeployStep {
  step: string;
  title: string;
  desc: string;
  ringGradient: string;
  circleColor: string;
  shadowColor: string;
}

const C = "#4D9AF1";
const sw = { stroke: C, strokeWidth: "1.5", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

/* ── Assisted Living icons ── */
const iconALF1 = ( // Monitor + vitals
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="14" rx="2" {...sw} />
    <path d="M5 10h2l2-4 2.5 8L14 10h3" {...sw} />
    <path d="M12 17v2M8 21h8" {...sw} />
  </svg>
);
const iconALF2 = ( // Bell alert
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" {...sw} />
    <path d="M13.73 21a2 2 0 01-3.46 0" {...sw} />
    <circle cx="18" cy="5" r="3" fill={C} />
  </svg>
);
const iconALF3 = ( // Lock / HIPAA
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="11" width="14" height="10" rx="2" {...sw} />
    <path d="M8 11V7a4 4 0 018 0v4" {...sw} />
    <circle cx="12" cy="16" r="1.5" stroke={C} strokeWidth="1.5" />
  </svg>
);
const iconALF4 = ( // Family / users
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="8" cy="7" r="3" {...sw} />
    <path d="M2 21c0-3.314 2.686-5 6-5s6 1.686 6 5" {...sw} />
    <circle cx="18" cy="8" r="2.5" {...sw} />
    <path d="M22 21c0-2.5-1.8-4-4-4" {...sw} />
  </svg>
);
const iconALF5 = ( // Clipboard / Medicare
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" {...sw} />
    <rect x="9" y="3" width="6" height="4" rx="1" {...sw} />
    <path d="M9 12h6M9 15h6M9 18h4" {...sw} />
  </svg>
);
const iconALF6 = ( // Heart / proactive
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" {...sw} />
    <path d="M12 9v3M12 15h.01" {...sw} />
  </svg>
);

/* ── Independent Living icons ── */
const iconILF1 = ( // Person standing / empowerment
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="5" r="2.5" {...sw} />
    <path d="M12 9v6M9 11l-2 4M15 11l2 4M10 15l-1 4M14 15l1 4" {...sw} />
  </svg>
);
const iconILF2 = ( // Globe / beyond walls
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" {...sw} />
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" {...sw} />
  </svg>
);
const iconILF3 = ( // Scale / lighter workload
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M12 3v18M5 21h14" {...sw} />
    <path d="M5 8l-3 6h6L5 8zM19 8l-3 6h6l-3-6z" {...sw} />
    <path d="M5 14h14" {...sw} />
  </svg>
);
const iconILF4 = ( // Phone / direct alerts
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0110 2.18C11.13 2.07 12 2.92 12 4.09v3a2 2 0 001.45 1.93l2.5.83A2 2 0 0118 11.7v1.74" {...sw} />
    <path d="M16.5 2.5C18.5 3.5 20.5 5.5 21.5 7.5" {...sw} />
    <path d="M15 5a6 6 0 013 3" {...sw} />
  </svg>
);
const iconILF5 = ( // Shield / fewer emergencies
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" {...sw} />
    <path d="M12 8v4M12 16h.01" {...sw} />
  </svg>
);
const iconILF6 = ( // Medal / certified
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="14" r="6" {...sw} />
    <path d="M9 14l2 2 4-4" {...sw} />
    <path d="M8.21 8.39L7 3h10l-1.21 5.39" {...sw} />
  </svg>
);

/* ── Skilled Nursing icons ── */
const iconSNF1 = ( // Medical bag
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" {...sw} />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" {...sw} />
    <path d="M12 12v4M10 14h4" {...sw} />
  </svg>
);
const iconSNF2 = ( // Hospital bed
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M3 9h18v7H3zM3 9V5M7 9V5" {...sw} />
    <circle cx="7" cy="5" r="1.5" {...sw} />
    <path d="M3 16v3M21 16v3" {...sw} />
  </svg>
);
const iconSNF3 = ( // Trend up / savings
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" {...sw} />
    <polyline points="17 6 23 6 23 12" {...sw} />
    <circle cx="12" cy="12" r="9" {...sw} />
  </svg>
);
const iconSNF4 = ( // Star / attract staff
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" {...sw} />
  </svg>
);
const iconSNF5 = ( // FDA target / crosshair
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" {...sw} />
    <circle cx="12" cy="12" r="4" {...sw} />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" {...sw} />
  </svg>
);
const iconSNF6 = ( // Insurance shield
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" {...sw} />
    <path d="M9 12l2 2 4-4" {...sw} />
  </svg>
);

const assistedCards: TabCard[] = [
  { icon: iconALF1, iconSrc: "/images/facilities/assisted-living/1.svg", title: "Comfortable, Continuous Monitoring", desc: "Residents can wear the Vital Buddy either a few hours each day or around the clock. No interruptions during meals, activities, or sleep, just continuous visibility into each resident's wellbeing.", tag: "24/7 Coverage" },
  { icon: iconALF2, iconSrc: "/images/facilities/assisted-living/2.svg", title: "Give Staff Their Time Back", desc: "Eliminate manual vital checks and paper logs. When your team spends less time gathering data, they spend more time with residents, building the human connections that truly define great care.", tag: "Staff Efficiency" },
  { icon: iconALF3, iconSrc: "/images/facilities/assisted-living/3.svg", title: "Catch Changes Before They Escalate", desc: "Smart alerts flag subtle vital changes at the earliest sign, giving your team the window they need to alert physicians to intervene before a concern becomes a costly emergency.", tag: "Early Intervention" },
  { icon: iconALF4, iconSrc: "/images/facilities/assisted-living/4.svg", title: "Stand Out with VitalFriend Certified", desc: "Earn a credential that families actively look for. VitalFriend Certified signals that your facility goes above and beyond, with a genuine differentiator when families are comparing options.", tag: "Marketing Edge" },
  { icon: iconALF5, iconSrc: "/images/facilities/assisted-living/5.svg", title: "Compliance on Autopilot", desc: "Automated documentation, one-click regulatory submissions, and custom reports keep your facility audit-ready every day. No scrambling, no gaps, just clean, accurate records.", tag: "Always Compliant" },
  { icon: iconALF6, iconSrc: "/images/facilities/assisted-living/6.svg", title: "Covered by Insurance", desc: "Both the Vital Buddy device and the VitalFriend monitoring service are covered by most major insurance plans, making this level of care accessible to residents with no out-of-pocket cost in most cases.", tag: "Zero Cost Barrier" },
];

const independentCards: TabCard[] = [
  { icon: iconILF1, iconSrc: "/images/facilities/independent-living/1.svg", title: "Confidence That Empowers Independence", desc: "Vital Buddy gives residents proactive visibility into their own health so they feel informed, confident, and in control of their wellbeing without sacrificing the independence they value.", tag: "Resident Empowerment" },
  { icon: iconILF2, iconSrc: "/images/facilities/independent-living/2.svg", title: "Monitoring Beyond Your Walls", desc: "Vital Buddy delivers medical-grade vitals monitoring even when residents leave the facility for errands, appointments, or visits with family so care doesn't stop at the front door.", tag: "On-the-Go Coverage" },
  { icon: iconILF3, iconSrc: "/images/facilities/independent-living/3.svg", title: "Less Burden on Your Team", desc: "Independent living staff don't need to perform all medical monitoring manually anymore. Vital Buddy automatically monitors each resident's vitals, so your team can focus on providing better care.", tag: "Lighter Workload" },
  { icon: iconILF4, iconSrc: "/images/facilities/independent-living/4.svg", title: "Families and Physicians Stay Informed", desc: "Notifications go directly to designated family members and physicians. This keeps everyone in the loop without requiring staff to relay every update. Fewer calls, less confusion, more confidence.", tag: "Direct Alerts" },
  { icon: iconILF5, iconSrc: "/images/facilities/independent-living/5.svg", title: "Fewer Disruptions, Fewer Emergencies", desc: "Proactive monitoring means potential issues are identified and addressed early, reducing the disruptive, stressful emergencies that affect residents and staff alike.", tag: "Proactive Care" },
  { icon: iconILF6, iconSrc: "/images/facilities/independent-living/6.svg", title: "Certified as Forward-Thinking", desc: "VitalFriend Certified distinguishes your facility as resident-focused and ahead of the curve. It's a powerful signal to prospective residents and families who prioritize quality and innovation.", tag: "Marketing Edge" },
];

const skilledCards: TabCard[] = [
  { icon: iconSNF1, iconSrc: "/images/facilities/residential-home/1.svg", title: "Eliminate Rounding with Bulky Equipment", desc: "Vital Buddy automatically monitors vitals, eliminating the need for rounding with carts full of medical equipment. It simplifies workflows and frees care givers from time-consuming manual checks.", tag: "Streamlined Workflow" },
  { icon: iconSNF2, iconSrc: "/images/facilities/residential-home/2.svg", title: "Less Disruptive for Post-Surgery Patients", desc: "Passive monitoring is far less disruptive than repeated check-ins. Vital Buddy reduces patient stress, supports better rest and facilitates faster, more comfortable recoveries.", tag: "Patient Comfort" },
  { icon: iconSNF3, iconSrc: "/images/facilities/residential-home/3.svg", title: "Significant Labor Savings", desc: "Automating vitals monitoring creates measurable savings in staff hours across every shift. Using Vital Buddy has a meaningful impact on operational costs for facility owners and administrators.", tag: "Cost Efficiency" },
  { icon: iconSNF4, iconSrc: "/images/facilities/residential-home/4.svg", title: "Attract and Retain Scarce Staff", desc: "In a tight recruiting market, lighter physical workloads are a real recruitment and retention advantage. Top employees increasingly seek facilities where new technologies and methods support their efforts.", tag: "Staff Retention" },
  { icon: iconSNF5, iconSrc: "/images/facilities/residential-home/5.svg", title: "Medical-Grade Vitals Monitoring", desc: "Vital Buddy delivers FDA-cleared blood pressure and heart rate monitoring, which meets the clinical standards required for clinical medical environments, including documentation.", tag: "Clinical Grade" },
  { icon: iconSNF6, iconSrc: "/images/facilities/residential-home/6.svg", title: "Covered by Insurance", desc: "Both the Vital Buddy device and the VitalFriend monitoring service are covered by Medicare and most major insurance plans, removing cost as a barrier to providing the highest standard of care.", tag: "Zero Cost Barrier" },
];

export const tabs: TabData[] = [
  {
    label: "Assisted Living",
    cards: assistedCards,
    ctaQuote:
      "My husband's in IT, so he's always pushing digital. We started with Vital Buddy last July, and it was a game-changer. No more manual blood pressure readings before and after every med because when you're doing it solo, that time really adds up.",
    ctaAuthor: "Cindy, Assisted Living Facility Owner in Florida",
    ctaButtonText: "Get Started for Assisted Living",
    insuranceBody:
      "The Vital Buddy device and VitalFriend service may be eligible for reimbursement by Medicare and other insurance coverage. In other words, advanced continuous vitals monitoring may be available to your facility at little or no out-of-pocket cost.",
    insuranceButtonText: "Get Started for ALFs",
    insuranceImage: "/images/facilites-assisted-Living-man-on-phone.png",
    statsSubtitle:
      "The benefits of VitalFriend RPM monitoring on patient outcomes are clearly demonstrated by comparable legacy clinical data",
    stats: [
      {
        number: "78%",
        label: "Emergency Room visit avoidance due to remote vitals monitoring",
      },
      {
        number: "71%",
        label:
          "Patients reporting that remote monitoring gives them greater peace of mind",
      },
      {
        number: "30 mins",
        label:
          "Average time saved per patient due to automated vitals monitoring",
      },
      {
        number: "51%",
        label:
          "Seniors living with and managing two or more chronic conditions",
      },
    ],
  },
  {
    label: "Independent Living",
    cards: independentCards,
    ctaQuote:
      "My husband's in IT, so he's always pushing digital. We started with Vital Buddy last July, and it was a game-changer. No more manual blood pressure readings before and after every med because when you're doing it solo, that time really adds up.",
    ctaAuthor: "Cindy, Assisted Living Facility Owner in Florida",
    ctaButtonText: "Get Started for Independent Living",
    insuranceBody:
      "The Vital Buddy device and VitalFriend service may be eligible for reimbursement by Medicare and other insurance coverage. In other words, advanced continuous vitals monitoring may be available to your facility at little or no out-of-pocket cost.",
    insuranceButtonText: "Get Started for ILFs",
    insuranceImage: "/images/facilites-independent-Living-person.png",
    statsSubtitle:
      "The benefits of VitalFriend RPM monitoring on patient outcomes are clearly demonstrated by the data",
    stats: [
      {
        number: "71%",
        label:
          "Patients reporting that remote monitoring gives them greater peace of mind",
      },
      {
        number: "30 mins",
        label:
          "Average time saved per patient due to automated vitals monitoring",
      },
      {
        number: "81%",
        label:
          "Reduction in 30-day mortality among high-risk heart patients who used RPM",
      },
      {
        number: "20%",
        label:
          "Increase in hypertension control among patients using RPM for blood pressure",
      },
    ],
  },
  {
    label: "Residential Home",
    cards: skilledCards,
    ctaQuote:
      "My husband's in IT, so he's always pushing digital. We started with Vital Buddy last July, and it was a game-changer. No more manual blood pressure readings before and after every med because when you're doing it solo, that time really adds up.",
    ctaAuthor: "Cindy, Assisted Living Facility Owner in Florida",
    ctaButtonText: "Get Started for Residential Home",
    insuranceBody:
      "The Vital Buddy device and VitalFriend service may be eligible for reimbursement by Medicare and other insurance coverage. In other words, advanced continuous vitals monitoring may be available to your facility at little or no out-of-pocket cost.",
    insuranceButtonText: "Get Started for Residential Home",
    insuranceImage: "/images/facilites-snf-person.png",
    statsSubtitle:
      "The benefits of VitalFriend RPM monitoring on patient outcomes are clearly demonstrated by the data",
    stats: [
      {
        number: "20%",
        label:
          "Increase in hypertension control among patients using RPM for blood pressure",
      },
      {
        number: "51%",
        label:
          "Seniors living with and managing two or more chronic conditions",
      },
      {
        number: "30 mins",
        label:
          "Average time saved per patient due to automated vitals monitoring",
      },
      {
        number: "78%",
        label: "Emergency Room visit avoidance due to remote vitals monitoring",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "My mom has been wearing her Vital Buddy for almost a year now. It takes her blood pressure every 4 hours every day. She tracks her BP and records her stats. If her BP is high, she tells me and then she initiates her relaxation techniques. We retake her blood pressure in 15 mins and it is always much lower.",
    name: "Cleo",
    role: "Family member and care provider",
    facility: "Georgia",
  },
  {
    quote: "I'm extremely happy with my Vital Buddy! I have it set to take my blood pressure every 4 hours and track my daily steps. It's a really convenient way for me to ensure I hit my health goals.",
    name: "Steve",
    role: "Independent living resident",
    facility: "California",
  },
  {
    quote: "My Vital Buddy has been very helpful for me every day. I check my blood pressure and other metrics, and really like that I have accurate time/date for every reading. Vital Buddy has made me more confident about my health.",
    name: "Len",
    role: "Independent Living Resident",
    facility: "California",
  },
];

export interface CertPoint {
  icon: ReactNode;
  text: string;
}

export const certPoints: CertPoint[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#E15D77" strokeWidth="1.5" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="#E15D77" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Listed on VitalFriend's family-facing facility search",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="#E15D77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Digital badge kit and marketing collateral included",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#E15D77" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="#E15D77" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Press release template for local media outreach",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17l-5-5" stroke="#E15D77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Displayed on your public VitalFriend facility profile",
  },
];

export const deploySteps: DeployStep[] = [
  {
    step: "1",
    title: "Discovery Call",
    desc: "We learn about your facility's size, care level, and workflow, and verify insurance coverage for your residents.",
    ringGradient: "linear-gradient(160.34deg, #E2A11A 13.16%, #D82108 95.03%)",
    circleColor: "#E4A321",
    shadowColor: "#CF9114",
  },
  {
    step: "2",
    title: "Resident Enrollment",
    desc: "Eligible residents are signed up for the VitalFriend service. Vital Buddy devices are sized and fitted comfortably for each participant.",
    ringGradient: "linear-gradient(148.34deg, #F97549 14.16%, #D82108 86.55%)",
    circleColor: "linear-gradient(140.02deg, #F6914F 15.24%, #F97549 92.51%)",
    shadowColor: "#EF4F19",
  },
  {
    step: "3",
    title: "Staff Onboarding",
    desc: "Our team trains your staff on the use, care and benefits of the Vital Buddy. Average training takes under 90 minutes.",
    ringGradient: "linear-gradient(154.02deg, #6BCDEE 12.26%, #1CC0CB 86.97%)",
    circleColor: "linear-gradient(146.23deg, #6BCDEE 14.63%, #1CC0CB 86.96%)",
    shadowColor: "#1AA8B5",
  },
  {
    step: "4",
    title: "Go Live",
    desc: "Continuous monitoring begins immediately. Your VitalFriend team checks in regularly and is available for ongoing support.",
    ringGradient: "linear-gradient(142.32deg, #EC6271 13.79%, #F04149 85.48%)",
    circleColor: "linear-gradient(134.33deg, #EC6271 13.2%, #F13F47 85.45%)",
    shadowColor: "#D42F3A",
  },
];
