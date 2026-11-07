"use client";

import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { SiteImage } from "./SiteImage";

type Props = {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
  dragLabel: string;
  sizes?: string;
  aspect?: string;
};

/** Accessible before/after comparison slider (mouse, touch and keyboard). */
export function BeforeAfter({ before, after, beforeLabel, afterLabel, alt, dragLabel, sizes = "(min-width:768px) 50vw, 100vw", aspect = "aspect-[16/10]" }: Props) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    update(e.clientX);
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => dragging && update(e.clientX);
  const onUp = () => setDragging(false);

  const onKey = (e: KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      className={`group relative ${aspect} w-full touch-pan-y select-none overflow-hidden bg-ink-2 ${dragging ? "cursor-grabbing" : "cursor-ew-resize"}`}
    >
      {/* After (base layer) */}
      <SiteImage src={after} alt={`${alt}: ${afterLabel}`} fill sizes={sizes} className="pointer-events-none object-cover" draggable={false} />
      {/* Before (clipped layer) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <SiteImage src={before} alt={`${alt}: ${beforeLabel}`} fill sizes={sizes} className="pointer-events-none object-cover" draggable={false} />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 bg-ink/70 px-3 py-1.5 font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/80 backdrop-blur">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 bg-red px-3 py-1.5 font-display text-[0.65rem] uppercase tracking-[0.3em] text-white">
        {afterLabel}
      </span>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-white shadow-[0_0_20px_rgba(227,24,40,0.9)]" />
        <div
          role="slider"
          tabIndex={0}
          aria-label={dragLabel}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% ${beforeLabel}`}
          onKeyDown={onKey}
          className="pointer-events-auto absolute top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center border border-white bg-red text-white shadow-[0_0_30px_rgba(227,24,40,0.6)] transition-transform duration-300 group-hover:scale-110"
        >
          <ChevronsLeftRight className="size-5" aria-hidden />
        </div>
      </div>
    </div>
  );
}
