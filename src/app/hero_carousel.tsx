"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./homepage.module.css";

const IMAGES = [
  {
    src: "/images/hero-shot.png",
    alt: "Senior wearing Vital Buddy smartwatch",
  },
  {
    src: "/images/hero-shot-2.png",
    alt: "Care professional reviewing vitals dashboard",
  },
  {
    src: "/images/hero-shot-3.png",
    alt: "Family member checking senior health data",
  },
  { src: "/images/hero-shot-4.png", alt: "Vital Buddy device close-up" },
];

const INTERVAL_MS = 4000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  // Re-runs whenever `active` changes, so a manual dot click restarts the countdown
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className={styles["hp-hero__image-col"]}>
      <div className={styles["hp-hero__image-wrap"]}>
        {IMAGES.map((img, idx) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={idx === 0}
            unoptimized
            className={styles["hp-hero__carousel-slide"]}
            style={{
              objectFit: "cover",
              opacity: idx === active ? 1 : 0,
              transition: "opacity 0.6s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* Pagination dots */}
      <div className={styles["hp-hero__dots"]} aria-label="Image navigation">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === active ? "true" : undefined}
            onClick={() => setActive(idx)}
            className={`${styles["hp-hero__dot"]}${
              idx === active ? ` ${styles["hp-hero__dot--active"]}` : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
