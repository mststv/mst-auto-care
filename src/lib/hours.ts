import { site } from "./site";

const names = {
  en: { Mo: "Mon", Tu: "Tue", We: "Wed", Th: "Thu", Fr: "Fri", Sa: "Sat", Su: "Sun" },
  ru: { Mo: "Пн", Tu: "Вт", We: "Ср", Th: "Чт", Fr: "Пт", Sa: "Сб", Su: "Вс" },
} as const;

const time = (hhmm: string, locale: "en" | "ru") => {
  if (locale === "ru") return hhmm;
  const [h, m] = hhmm.split(":").map(Number);
  return `${((h + 11) % 12) + 1}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h < 12 ? "AM" : "PM"}`;
};

/** Human-readable hours from site.hours, e.g. "Mon–Sat 9 AM–7 PM". null when hours are not set. */
export function hoursText(locale: "en" | "ru" = "en"): string | null {
  if (!site.hours) return null;
  return site.hours
    .map(({ days, opens, closes }) => {
      const d = days.length > 2 ? `${names[locale][days[0]]}–${names[locale][days[days.length - 1]]}` : days.map((x) => names[locale][x]).join(", ");
      return `${d} ${time(opens, locale)}–${time(closes, locale)}`;
    })
    .join(" · ");
}
