'use client';

import { useState } from 'react';
import s from './support.module.css';

const FAQ_ITEMS = [
  'Wearing & Daily Use',
  'Device Use',
  'Readings & Accuracy',
  'Charging & Power',
  'Fit & Comfort',
  'Device Issues & General',
];

export default function FaqGrid() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className={s.faqGrid}>
      {FAQ_ITEMS.map((label) => {
        const isSelected = selected === label;
        return (
          <div
            key={label}
            className={s.faqCard}
            onClick={() => setSelected(isSelected ? null : label)}
          >
            <span className={`${s.faqCardLabel} ${isSelected ? s.faqCardLabelSelected : ''}`}>
              {label}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke={isSelected ? '#3C7FC3' : '#8A9099'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
