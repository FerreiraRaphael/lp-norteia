import { WHATSAPP_LINK } from "@/lib/constants";

type CTAButtonProps = {
  children: React.ReactNode;
  variant?: "red" | "cream";
  size?: "md" | "lg";
  className?: string;
};

export default function CTAButton({
  children,
  variant = "red",
  size = "md",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full text-sm font-medium tracking-wide transition-all hover:scale-105";
  const sizes = size === "lg" ? "px-10 py-5" : "px-8 py-4";
  const variants =
    variant === "cream"
      ? "bg-brand-dark text-brand-cream shadow-lg shadow-brand-dark/30 hover:shadow-xl hover:shadow-brand-dark/40"
      : "bg-brand-red text-brand-cream shadow-lg shadow-brand-red/40 hover:shadow-xl hover:shadow-brand-red/50";

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes} ${variants} ${className}`}
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
      </svg>
      {children}
    </a>
  );
}
