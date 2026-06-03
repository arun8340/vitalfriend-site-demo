"use client";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "pill" | "pill-filled";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200";

  const variants = {
    primary:
      "rounded-xl shadow-sm hover:shadow-lg bg-[--color-primary] text-white hover:bg-[--color-primary-hover] hover:-translate-y-0.5",
    outline:
      "rounded-xl shadow-sm hover:shadow-lg border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white hover:-translate-y-0.5",
    pill: "rounded-full border bg-white hover:-translate-y-0.5",
    "pill-filled": "rounded-full border hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-7 py-2 text-base",
    lg: "px-8 py-2.5 text-lg",
  };

  const pillStyle =
    variant === "pill"
      ? { borderColor: "#E15D77", color: "#E15D77" }
      : variant === "pill-filled"
      ? { borderColor: "#E15D77", backgroundColor: "#E15D77", color: "#ffffff" }
      : {};

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const hoverHandlers =
    variant === "pill"
      ? {
          onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#E15D77";
            (e.currentTarget as HTMLElement).style.color = "white";
          },
          onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "white";
            (e.currentTarget as HTMLElement).style.color = "#E15D77";
          },
        }
      : variant === "pill-filled"
      ? {
          onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            (e.currentTarget as HTMLElement).style.opacity = "0.88";
          },
          onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            (e.currentTarget as HTMLElement).style.opacity = "1";
          },
        }
      : {};

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={pillStyle}
        {...hoverHandlers}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      style={pillStyle}
      {...hoverHandlers}
    >
      {children}
    </button>
  );
}
