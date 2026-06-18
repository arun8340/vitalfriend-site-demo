import Image from "next/image";
import s from "./about.module.css";

interface Advisor {
  name: string;
  bio: string;
  image: string;
  linkedin?: string;
  circleBg?: boolean;
}

export default function AdvisorsGrid({ advisors }: { advisors: Advisor[] }) {
  return (
    <div className={s.advisorsGrid}>
      {advisors.map((advisor) => (
        <div key={advisor.name} className={s.advisorCard}>
          {advisor.image && !advisor.circleBg ? (
            <Image src={advisor.image} alt={advisor.name} width={232} height={232} className={s.advisorPhoto} />
          ) : (
            <div className={s.advisorPhotoCircle}>
              <Image
                src={advisor.image || "/images/about-us/default-person-image.png"}
                alt={advisor.name}
                width={190}
                height={190}
                className={s.advisorPhotoDefault}
              />
            </div>
          )}
          <div className={s.advisorInfo}>
            <p className={s.advisorName}>{advisor.name}</p>
            {advisor.bio && <p className={s.advisorRole}>{advisor.bio}</p>}
          </div>
          {advisor.linkedin && (
            <a
              href={advisor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={s.advisorLinkedin}
              aria-label={`${advisor.name} on LinkedIn`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.94 5a2 2 0 1 1-4-.002A2 2 0 0 1 6.94 5zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="#000000"/>
              </svg>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
