import { Reveal } from "./Reveal";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.35em] text-red">
      <span aria-hidden className="h-px w-8 bg-red" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, id }: { eyebrow: string; title: string; intro?: string; id?: string }) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-5 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">{intro}</p>}
    </Reveal>
  );
}
