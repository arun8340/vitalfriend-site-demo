"use client";

import React, { useState } from "react";
import s from "./physicians.module.css";
import { type DashboardTab } from "./data";

/* ─── Tab icons — exact paths from uploaded SVGs, stroke="currentColor" ─── */

/** vital-signs.svg */
function IconVitalSign() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M19 9V7.81818C19 6.12494 19 5.27832 18.7478 4.60214C18.3424 3.5151 17.4849 2.65765 16.3979 2.2522C15.7217 2 14.8751 2 13.1818 2C10.2186 2 8.73706 2 7.55375 2.44135C5.65142 3.15088 4.15088 4.65142 3.44135 6.55375C3 7.73706 3 9.21865 3 12.1818L3 14.7273C3 17.7966 3 19.3313 3.79783 20.3971C4.02643 20.7025 4.29752 20.9736 4.60289 21.2022C5.66867 22 7.20336 22 10.2727 22H11C12.1698 22 14.5 22 14.5 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 14.3333H11.8403C12.5019 14.3333 12.8326 14.3333 13.0985 14.5076C13.3643 14.6818 13.5122 14.9956 13.8081 15.6232L15.4 19L17.6 12L19.1919 15.3768C19.4878 16.0044 19.6357 16.3182 19.9015 16.4924C20.1674 16.6667 20.4981 16.6667 21.1597 16.6667H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667L7.44444 8.66667C7.9611 8.66667 8.21942 8.66667 8.43137 8.60988C9.00652 8.45577 9.45576 8.00652 9.60988 7.43137C9.66667 7.21942 9.66667 6.9611 9.66667 6.44444L9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** health-monitoring.svg */
function IconHealthMonitoring() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M19.4626 3.99352C16.7809 2.3486 14.4404 3.01148 13.0344 4.06738C12.4578 4.50033 12.1696 4.7168 12 4.7168C11.8304 4.7168 11.5422 4.50033 10.9656 4.06738C9.55962 3.01148 7.21909 2.3486 4.53744 3.99352C1.01807 6.1523 0.221719 13.2742 8.33953 19.2827C9.88572 20.4272 10.6588 20.9994 12 20.9994C13.3412 20.9994 14.1143 20.4272 15.6605 19.2827C23.7783 13.2742 22.9819 6.1523 19.4626 3.99352Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 9V15M9 12L15 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** notification.svg */
function IconNotification() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** communication.svg */
function IconCommunication() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const tabIcons = [
  <IconVitalSign key="vs" />,
  <IconHealthMonitoring key="hm" />,
  <IconNotification key="nt" />,
  <IconCommunication key="cm" />,
];

export default function HolisticTabs({ tabs }: { tabs: DashboardTab[] }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div className={s.holisticInner}>
      {/* Tab bar */}
      <div className={s.holisticTabs} role="tablist">
        {tabs.map((t, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            className={`${s.holisticTab}${i === active ? ` ${s.holisticTabActive}` : ""}`}
            onClick={() => setActive(i)}
          >
            <span className={s.holisticTabIcon}>{tabIcons[i]}</span>
            {t.title}
          </button>
        ))}
      </div>

      {/* Table panel */}
      <div className={s.holisticPanel} role="tabpanel">
        {/* Pink heading row */}
        <div className={s.holisticPanelHead}>
          <span className={s.holisticPanelHeadText}>{tab.panelHeading}</span>
        </div>

        {/* Data rows */}
        {tab.rows.map((row, ri) => {
          const isAlt = ri % 2 === 0;
          if (row.full !== undefined) {
            return (
              <div
                key={ri}
                className={`${s.holisticRow} ${isAlt ? s.holisticRowAlt : ""}`}
              >
                <div className={`${s.holisticCell} ${s.holisticCellFull}`}>
                  {row.full}
                </div>
              </div>
            );
          }
          return (
            <div
              key={ri}
              className={`${s.holisticRow} ${isAlt ? s.holisticRowAlt : ""}`}
            >
              <div className={`${s.holisticCell} ${s.holisticCellLeft}`}>
                {row.left}
              </div>
              <div className={`${s.holisticCell} ${s.holisticCellRight}`}>
                {row.right}
              </div>
            </div>
          );
        })}
      </div>

      {/* Optional blue info note */}
      {tab.note && (
        <div className={s.holisticNote}>
          <span className={s.holisticNoteIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#141B34"
                strokeWidth="1.5"
              />
              <path
                d="M12 8v.01M12 11v5"
                stroke="#141B34"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div className={s.holisticNoteText}>
            <span className={s.holisticNotePrimary}>{tab.note.primary}</span>
            {tab.note.secondary && (
              <span className={s.holisticNoteSecondary}>
                {tab.note.secondary}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
