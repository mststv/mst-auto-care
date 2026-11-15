export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <span className="inline-flex flex-col leading-none select-none" aria-label="MST Auto Wraps">
      <span className="flex items-end gap-1.5">
        <span
          className={`font-display font-bold italic tracking-tight text-white ${big ? "text-6xl md:text-7xl" : "text-[1.7rem]"}`}
          style={{ transform: "skewX(-8deg)", display: "inline-block" }}
        >
          MST
        </span>
        <span
          aria-hidden
          className={`bg-red ${big ? "mb-3 h-2.5 w-10" : "mb-1.5 h-1 w-4"}`}
          style={{ transform: "skewX(-24deg)" }}
        />
      </span>
      <span className={`font-display font-medium text-red ${big ? "mt-2 text-base tracking-[0.55em]" : "mt-0.5 text-[0.55rem] tracking-[0.42em]"}`}>
        AUTO WRAPS
      </span>
    </span>
  );
}
