"use client";

import { useState } from "react";
import Image from "next/image";
import SocialIcons from "@/components/ui/SocialIcons";
import s from "./about.module.css";

interface Advisor {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const ITEMS_PER_PAGE = 5;

export default function AdvisorsPaginated({ advisors }: { advisors: Advisor[] }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(advisors.length / ITEMS_PER_PAGE);
  const visible = advisors.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <>
      <div className={s.advisorsGrid}>
        {visible.map((advisor) => (
          <div key={advisor.name} className={s.advisorCard}>
            <Image src={advisor.image} alt={advisor.name} width={160} height={160} className={s.advisorPhoto} />
            <div className={s.advisorInfo}>
              <p className={s.advisorName}>{advisor.name}</p>
              <p className={s.advisorRole}>{advisor.role}</p>
            </div>
            <SocialIcons linkedin={advisor.linkedin} twitter={advisor.twitter} />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className={s.paginationDots}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`${s.dot} ${i === page ? s.dotActive : ""}`}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
