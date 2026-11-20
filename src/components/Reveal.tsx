"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades content in when it scrolls into view. CSS-only animation driven by one IntersectionObserver,
 * so it adds almost no JavaScript. Without JS (or with reduced motion) content is simply visible.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: { children: ReactNode; delay?: number; y?: number; className?: string; as?: "div" | "li" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.shown = "";
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.dataset.shown = "";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref as never} data-reveal="" className={className} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </Tag>
  );
}
