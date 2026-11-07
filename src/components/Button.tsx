import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 ease-out-expo disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-red text-white shadow-[0_0_0_rgba(227,24,40,0)] hover:shadow-[0_10px_40px_-8px_rgba(227,24,40,0.7)] hover:bg-[#f02535]",
  outline: "border border-white/25 text-white hover:border-white hover:bg-white hover:text-ink",
  ghost: "text-white/80 hover:text-white",
};

// Angled corner = a nod to automotive styling without rounded "template" cards
const clip = { clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" };

function Sheen() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 group-hover:[animation:sweep_0.9s_ease-out]"
    />
  );
}

export function ButtonLink({ variant = "primary", children, className = "", ...rest }: ComponentProps<"a"> & { variant?: Variant; children: ReactNode }) {
  return (
    <a {...rest} className={`${base} ${variants[variant]} ${className}`} style={variant === "primary" ? clip : undefined}>
      {variant === "primary" && <Sheen />}
      {children}
    </a>
  );
}

export function Button({ variant = "primary", children, className = "", ...rest }: ComponentProps<"button"> & { variant?: Variant; children: ReactNode }) {
  return (
    <button {...rest} className={`${base} ${variants[variant]} ${className}`} style={variant === "primary" ? clip : undefined}>
      {variant === "primary" && <Sheen />}
      {children}
    </button>
  );
}
