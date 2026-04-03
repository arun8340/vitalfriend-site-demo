interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "surface" | "dark" | "gradient" | string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "white",
  id,
}: SectionProps) {
  const presets: Record<string, string> = {
    white: "bg-white",
    surface: "bg-[var(--color-surface)]",
    dark: "bg-[var(--color-dark)] text-white",
    gradient: "bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-navy)] text-white",
  };

  const isPreset = background in presets;

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${isPreset ? presets[background] : ""} ${className}`}
      style={!isPreset ? { backgroundColor: background } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">{children}</div>
    </section>
  );
}
