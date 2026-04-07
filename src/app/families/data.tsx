import { ReactNode } from "react";

export interface BenefitCards {
    icon: ReactNode,
    title: string, 
    description: string,
    last: boolean
}

export const benefitCards: BenefitCards[] = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.4" cx="18" cy="18" r="15" fill="#4D9AF1" />
        <circle cx="18" cy="18" r="15" stroke="#4D9AF1" stroke-width="1.5" />
        <path
          d="M18 12V18L21 21"
          stroke="#4D9AF1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "24/7 Monitoring",
    description:
      "Keep everyone informed with continuous monitoring that never sleeps. Stay connected to your loved one's health around the clock.",
    last: false
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M29.1938 5.99028C25.1714 3.52289 21.6606 4.51722 19.5515 6.10107C18.6868 6.75049 18.2544 7.0752 18 7.0752C17.7456 7.0752 17.3132 6.75049 16.4485 6.10107C14.3394 4.51722 10.8286 3.52289 6.80616 5.99028C1.5271 9.22845 0.332581 19.9113 12.5093 28.9241C14.8286 30.6407 15.9882 31.4991 18 31.4991C20.0118 31.4991 21.1714 30.6407 23.4907 28.9241C35.6674 19.9113 34.4729 9.22845 29.1938 5.99028Z"
          fill="#0089FF"
          stroke="#0089FF"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M29.1938 5.99028C25.1714 3.52289 21.6606 4.51722 19.5515 6.10107C18.6868 6.75049 18.2544 7.0752 18 7.0752C17.7456 7.0752 17.3132 6.75049 16.4485 6.10107C14.3394 4.51722 10.8286 3.52289 6.80616 5.99028C1.5271 9.22845 0.332579 19.9113 12.5093 28.9241C14.8286 30.6407 15.9882 31.4991 18 31.4991C20.0118 31.4991 21.1714 30.6407 23.4907 28.9241C35.6674 19.9113 34.4729 9.22845 29.1938 5.99028Z"
          stroke="#0089FF"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    ),
    title: "Easy to Wear",
    description:
      "BUDDI is designed for comfort and simplicity. Easy to wear and care for, ensuring your loved one stays protected without hassle.",
    last: false
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M3.79488 21.5911C3.4759 23.6206 4.902 25.0293 6.64808 25.7313C13.3422 28.4229 22.6578 28.4229 29.3519 25.7313C31.098 25.0293 32.5241 23.6206 32.2051 21.5911C32.0091 20.3438 31.0397 19.3052 30.3216 18.291C29.3809 16.9463 29.2875 15.4796 29.2873 13.9191C29.2873 7.88865 24.2338 3 18 3C11.7662 3 6.71269 7.88865 6.71269 13.9191C6.71255 15.4796 6.61909 16.9463 5.67841 18.291C4.96026 19.3052 3.99092 20.3438 3.79488 21.5911Z"
          fill="#0089FF"
          stroke="#0089FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.79488 21.5911C3.4759 23.6206 4.902 25.0293 6.64808 25.7313C13.3422 28.4229 22.6578 28.4229 29.3519 25.7313C31.098 25.0293 32.5241 23.6206 32.2051 21.5911C32.0091 20.3438 31.0397 19.3052 30.3216 18.291C29.3809 16.9463 29.2875 15.4796 29.2873 13.9191C29.2873 7.88866 24.2338 3 18 3C11.7662 3 6.71269 7.88866 6.71269 13.9191C6.71255 15.4796 6.61909 16.9463 5.67841 18.291C4.96026 19.3052 3.99092 20.3438 3.79488 21.5911Z"
          stroke="#0089FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.5 31.5C14.6942 32.4328 16.2712 33 18 33C19.7288 33 21.3058 32.4328 22.5 31.5"
          stroke="#0089FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Immediate Alerts",
    description:
      "Get notified the moment health changes occur. Receive real-time alerts so you can act quickly when it matters most.",
    last: false
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M3.75 18C3.75 22.2426 3.75 24.364 5.06802 25.682C6.38604 27 8.50736 27 12.75 27H23.25C27.4926 27 29.614 27 30.932 25.682C32.25 24.364 32.25 22.2426 32.25 18V12C32.25 7.75736 32.25 5.63604 30.932 4.31802C29.614 3 27.4926 3 23.25 3H12.75C8.50736 3 6.38604 3 5.06802 4.31802C3.75 5.63604 3.75 7.75736 3.75 12V18Z"
          fill="#4D9AF1"
        />
        <path
          d="M18 27V33"
          stroke="#4D9AF1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 27L7.5 33"
          stroke="#4D9AF1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 27L28.5 33"
          stroke="#4D9AF1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.75 18C3.75 22.2426 3.75 24.364 5.06802 25.682C6.38604 27 8.50736 27 12.75 27H23.25C27.4926 27 29.614 27 30.932 25.682C32.25 24.364 32.25 22.2426 32.25 18V12C32.25 7.75736 32.25 5.63604 30.932 4.31802C29.614 3 27.4926 3 23.25 3H12.75C8.50736 3 6.38604 3 5.06802 4.31802C3.75 5.63604 3.75 7.75736 3.75 12V18Z"
          fill="#8CC6F8"
          stroke="#4D9AF1"
          stroke-width="1.5"
        />
        <path
          d="M12 19.5V15M18 19.5V10.5M24 19.5V16.5"
          stroke="#4D9AF1"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    ),
    title: "View Health Trends",
    description:
      "Track blood pressure, sleep, oxygen levels, heart rate, falls, and more. Understand long-term patterns to better support your loved one.",
    last: false
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12C3 12 9.71573 4.5 18 4.5C26.2843 4.5 33 12 33 12"
          stroke="#4D9AF1"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          opacity="0.4"
          d="M32.3159 19.5675C32.772 20.207 33 20.5267 33 21C33 21.4733 32.772 21.793 32.3159 22.4325C30.2669 25.3058 25.0338 31.5 18 31.5C10.9662 31.5 5.73315 25.3058 3.68406 22.4325C3.22802 21.793 3 21.4733 3 21C3 20.5267 3.22802 20.207 3.68406 19.5675C5.73314 16.6942 10.9662 10.5 18 10.5C25.0338 10.5 30.2669 16.6942 32.3159 19.5675Z"
          fill="#4D9AF1"
        />
        <path
          d="M32.3159 19.5675C32.772 20.207 33 20.5267 33 21C33 21.4733 32.772 21.793 32.3159 22.4325C30.2669 25.3058 25.0338 31.5 18 31.5C10.9662 31.5 5.73315 25.3058 3.68406 22.4325C3.22802 21.793 3 21.4733 3 21C3 20.5267 3.22802 20.207 3.68406 19.5675C5.73314 16.6942 10.9662 10.5 18 10.5C25.0338 10.5 30.2669 16.6942 32.3159 19.5675Z"
          stroke="#4D9AF1"
          stroke-width="1.5"
        />
        <path
          d="M22.5 21C22.5 18.5147 20.4853 16.5 18 16.5C15.5147 16.5 13.5 18.5147 13.5 21C13.5 23.4853 15.5147 25.5 18 25.5C20.4853 25.5 22.5 23.4853 22.5 21Z"
          fill="white"
        />
        <path
          d="M22.5 21C22.5 18.5147 20.4853 16.5 18 16.5C15.5147 16.5 13.5 18.5147 13.5 21C13.5 23.4853 15.5147 25.5 18 25.5C20.4853 25.5 22.5 23.4853 22.5 21Z"
          stroke="#4D9AF1"
          stroke-width="1.5"
        />
      </svg>
    ),
    title: "Always Vigilant",
    description:
      "Get the confidence that comes from knowing someone is always watching over your loved one, providing an extra layer of care and security.",
    last: false
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M21 3H15C10.0812 3 7.62173 3 5.87836 4.22072C5.23336 4.67236 4.67236 5.23336 4.22072 5.87836C3 7.62173 3 10.0812 3 15C3 19.9188 3 22.3783 4.22072 24.1216C4.67236 24.7666 5.23336 25.3276 5.87836 25.7793C7.62173 27 10.0812 27 15 27H21C25.9188 27 28.3783 27 30.1216 25.7793C30.7666 25.3276 31.3276 24.7666 31.7793 24.1216C33 22.3783 33 19.9188 33 15C33 10.0812 33 7.62173 31.7793 5.87836C31.3276 5.23336 30.7666 4.67236 30.1216 4.22072C28.3783 3 25.9188 3 21 3Z"
          fill="#0089FF"
        />
        <path
          d="M15.021 3C9.35425 3 6.52087 3 4.76044 4.75736C3 6.51472 3 9.34315 3 15C3 20.6569 3 23.4853 4.76044 25.2426C6.52087 27 9.35425 27 15.021 27H21.0315C26.6983 27 29.5317 27 31.2921 25.2426C32.5065 24.0304 32.8832 22.3085 33 19.5"
          stroke="#0089FF"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path d="M18 27V33" stroke="#0089FF" stroke-width="1.5" />
        <path
          d="M12 33H24"
          stroke="#0089FF"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M16.5 22.5H19.5"
          stroke="#0089FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.2487 3C24.1116 3 22.7259 4.36282 21.0871 4.85956C20.4208 5.06154 20.0876 5.16253 19.9527 5.30489C19.8179 5.44725 19.7784 5.65528 19.6995 6.07134C18.8544 10.5235 20.7014 14.6397 25.1063 16.2418C25.5795 16.4139 25.8162 16.5 26.2511 16.5C26.6859 16.5 26.9226 16.4139 27.3958 16.2418C31.8004 14.6397 33.6456 10.5235 32.8003 6.07134C32.7213 5.65521 32.6818 5.44714 32.547 5.30478C32.4121 5.16242 32.0789 5.06148 31.4126 4.85962C29.7732 4.36292 28.3859 3 26.2487 3Z"
          fill="white"
          stroke="#0089FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.2487 3C24.1116 3 22.7259 4.36282 21.0871 4.85956C20.4208 5.06154 20.0876 5.16253 19.9527 5.30489C19.8179 5.44725 19.7784 5.65528 19.6995 6.07134C18.8544 10.5235 20.7014 14.6397 25.1063 16.2418C25.5795 16.4139 25.8162 16.5 26.2511 16.5C26.6859 16.5 26.9226 16.4139 27.3958 16.2418C31.8004 14.6397 33.6456 10.5235 32.8003 6.07133C32.7213 5.65521 32.6818 5.44714 32.547 5.30478C32.4121 5.16242 32.0789 5.06148 31.4126 4.85962C29.7732 4.36292 28.3859 3 26.2487 3Z"
          stroke="#0089FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Insurance Coverage",
    description:
      "The device and monitoring service are usually covered by insurance, making it accessible without adding financial burden to your family.",
    last: true
  },
];

export const stayConnectedContent = [
  "Real-time notifications sent directly to your phone",
  "Easy-to-understand health dashboards",
  "Share access with multiple family members",
  "HIPAA-compliant and secure",
];

export const simpleTechnologyContent = [
  "Lightweight and comfortable for all-day wear",
  "No complicated setup or maintenance",
  "Automatic data syncing—no effort required",
  "Long battery life for uninterrupted monitoring",
];