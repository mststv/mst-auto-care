// Generates the temporary "demo" artwork in /public/images.
// These are placeholders only. Replace them with real MST Auto Care photos
// (see /public/images/README.md). Run: node scripts/generate-placeholders.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const BODY =
  "M210,640 C198,602 204,562 226,540 L302,506 C382,472 470,456 560,450 C640,382 722,346 822,340 C902,337 962,350 1012,386 C1062,420 1122,440 1202,452 C1292,466 1362,482 1396,506 C1416,522 1421,572 1406,610 L1392,640 L1278,640 A98,98 0 0 0 1082,640 L478,640 A98,98 0 0 0 282,640 Z";
const GLASS =
  "M584,452 C660,396 734,370 822,366 C888,364 936,376 972,402 L1000,428 C1004,434 1000,440 992,441 L620,456 C596,457 584,456 584,452 Z";
const PILLAR = "M840,367 L828,452";

// Sport sedan side profile modelled on a 2019 BMW M5 (F90) proportions. Demo artwork only.
const M5 = {
  body: "M172,711 L166,640 C160,590 162,520 176,494 C190,478 210,470 240,468 L420,462 C500,420 580,378 660,366 C740,356 840,354 900,362 C960,372 1040,430 1100,480 C1200,494 1330,506 1410,528 C1440,538 1458,560 1462,590 C1466,630 1462,680 1450,711 L1291,711 A100,100 0 1 0 1121,711 L509,711 A100,100 0 1 0 339,711 Z",
  glass: "M1078,490 C1030,446 962,388 905,376 C840,366 745,368 668,378 C600,388 535,422 482,468 Q470,490 505,494 L1078,496 Z",
  pillars: ["M792,369 L782,494", "M520,452 L512,494"],
  wheels: [[424, 658], [1206, 658]],
  wheelR: 90,
  roof: "M482,470 L482,300 L1110,300 L1110,486 L1078,490 C1030,446 962,388 905,376 C840,366 745,368 668,378 C600,388 535,422 482,468 Z",
  stripeY: 600,
  groundY: 748,
  details: (trim) => `
    <path d="M190,520 C520,505 1000,505 1420,540" stroke="#000" stroke-width="3" fill="none" opacity=".35"/>
    <path d="M330,585 C600,578 1000,578 1300,590" stroke="#fff" stroke-width="2" fill="none" opacity=".10"/>
    <path d="M782,500 L778,700 M1088,505 L1096,600" stroke="#000" stroke-width="2.5" opacity=".45"/>
    <path d="M1112,560 L1162,556 L1160,568 L1110,572 Z" fill="${trim}" opacity=".9"/>
    <path d="M1052,476 C1062,462 1094,460 1104,472 L1102,492 L1056,494 Z" fill="#0b0b0b" stroke="${trim}" stroke-width="3"/>
    <rect x="900" y="512" width="44" height="7" rx="3" fill="${trim}" opacity=".85"/>
    <rect x="640" y="512" width="44" height="7" rx="3" fill="${trim}" opacity=".85"/>
    <path d="M1396,530 C1424,536 1446,548 1456,566 L1424,566 C1410,556 1400,546 1396,530 Z" fill="#eaf2ff" opacity=".95"/>
    <path d="M1452,600 L1464,600 L1464,650 L1448,650 Z" fill="#0a0a0a"/>
    <path d="M172,492 L262,484 L266,500 L176,508 Z" fill="#E31828"/>
    <path d="M172,492 L186,478 L250,472 L262,484 Z" fill="#7a0b13"/>
    <path d="M509,700 L1121,700 L1121,711 L509,711 Z" fill="#000" opacity=".55"/>
    <ellipse cx="196" cy="700" rx="15" ry="8" fill="#2a2b2d" stroke="#8d9096" stroke-width="3"/>
    <ellipse cx="232" cy="702" rx="15" ry="8" fill="#2a2b2d" stroke="#8d9096" stroke-width="3"/>`,
};

function m5wheel(cx, cy, r) {
  const spokes = Array.from({ length: 10 }, (_, i) => {
    const a = (i * Math.PI * 2) / 10 + (i % 2 ? 0.12 : -0.12);
    const x1 = cx + Math.cos(a) * r * 0.2, y1 = cy + Math.sin(a) * r * 0.2;
    const x2 = cx + Math.cos(a) * r * 0.74, y2 = cy + Math.sin(a) * r * 0.74;
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#3b3d40" stroke-width="${(r * 0.07).toFixed(1)}" stroke-linecap="round"/>`;
  }).join("");
  return `<g>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#0a0a0a"/>
    <circle cx="${cx}" cy="${cy}" r="${r * 0.78}" fill="#151618" stroke="#4a4c50" stroke-width="2"/>
    <path d="M${cx - r * 0.42},${cy - r * 0.36} A${r * 0.55},${r * 0.55} 0 0 1 ${cx + r * 0.3},${cy - r * 0.47} L${cx + r * 0.2},${cy - r * 0.3} A${r * 0.36},${r * 0.36} 0 0 0 ${cx - r * 0.3},${cy - r * 0.22} Z" fill="#E31828"/>
    ${spokes}
    <circle cx="${cx}" cy="${cy}" r="${r * 0.16}" fill="#202224" stroke="#55585c" stroke-width="2"/>
  </g>`;
}

function wheel(cx, cy) {
  const spokes = Array.from({ length: 10 }, (_, i) => {
    const a = (i * Math.PI * 2) / 10;
    const x1 = cx + Math.cos(a) * 20, y1 = cy + Math.sin(a) * 20;
    const x2 = cx + Math.cos(a) * 56, y2 = cy + Math.sin(a) * 56;
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#2a2a2a" stroke-width="7" stroke-linecap="round"/>`;
  }).join("");
  return `<g>
    <circle cx="${cx}" cy="${cy}" r="84" fill="#0b0b0b"/>
    <circle cx="${cx}" cy="${cy}" r="62" fill="#141414" stroke="#3a3a3a" stroke-width="2"/>
    ${spokes}
    <circle cx="${cx}" cy="${cy}" r="16" fill="#1d1d1d" stroke="#444" stroke-width="2"/>
    <path d="M${cx - 44},${cy - 30} A54,54 0 0 1 ${cx + 30},${cy - 46}" stroke="#E31828" stroke-width="6" fill="none" opacity=".9"/>
  </g>`;
}

/**
 * opts: id, w, h, body (wrap colour), body2 (gradient end), roof (optional colour),
 * stripe (optional colour), trim ("chrome" | "black"), glow (red glow strength 0..1),
 * label, finish ("gloss" | "satin" | "matte"), beads (bool, water beading)
 */
function car(o) {
  const w = o.w ?? 1600, h = o.h ?? 900;
  const glow = o.glow ?? 0.6;
  const trim = o.trim === "chrome" ? "#d9dde2" : "#090909";
  const spec = o.finish === "matte" ? 0.08 : o.finish === "satin" ? 0.22 : 0.45;
  const scale = Math.min(w / 1600, h / 900) * (o.carScale ?? 1);
  const tx = (w - 1600 * scale) / 2 + (o.offsetX ?? 0), ty = (h - 900 * scale) / 2 + (o.offsetY ?? 0);
  const m = o.model === "m5" ? M5 : null;
  const B = m ? m.body : BODY;
  const beads = o.beads
    ? Array.from({ length: 70 }, (_, i) => {
        const x = 330 + ((i * 137) % 1000), y = 470 + ((i * 53) % 150);
        const r = 2 + (i % 4);
        return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity="${0.25 + (i % 3) * 0.12}"/>`;
      }).join("")
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="38%" r="75%">
      <stop offset="0" stop-color="#1a1a1a"/><stop offset=".55" stop-color="#0a0a0a"/><stop offset="1" stop-color="#050505"/>
    </radialGradient>
    <radialGradient id="redglow" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#E31828" stop-opacity="${glow}"/><stop offset="1" stop-color="#E31828" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="paint" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${o.body2 ?? o.body}"/><stop offset=".55" stop-color="${o.body}"/><stop offset="1" stop-color="#050505"/>
    </linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2b3036"/><stop offset=".5" stop-color="#0c0e10"/><stop offset="1" stop-color="#1b1f24"/>
    </linearGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#111"/><stop offset="1" stop-color="#050505"/>
    </linearGradient>
    <clipPath id="bodyclip"><path d="${B}"/></clipPath>
    <filter id="blur"><feGaussianBlur stdDeviation="18"/></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect y="${h * 0.74}" width="${w}" height="${h * 0.26}" fill="url(#floor)"/>
  <ellipse cx="${w / 2 + (o.offsetX ?? 0)}" cy="${h * 0.74}" rx="${w * 0.42}" ry="${h * 0.16}" fill="url(#redglow)"/>
  <g transform="translate(${tx.toFixed(1)},${ty.toFixed(1)}) scale(${scale.toFixed(4)})">
    <ellipse cx="808" cy="${m ? m.groundY - 10 : 728}" rx="660" ry="26" fill="#000" opacity=".9" filter="url(#blur)"/>
    <path d="${B}" fill="url(#paint)"/>
    <g clip-path="url(#bodyclip)">
      ${o.roof ? (m ? `<path d="${m.roof}" fill="${o.roof}"/>` : `<path d="M540,470 L540,300 L1060,300 L1060,428 L1000,436 L620,452 L584,452 Z" fill="${o.roof}"/>`) : ""}
      ${o.stripe ? `<rect x="180" y="${m ? m.stripeY : 548}" width="1260" height="16" fill="${o.stripe}"/><rect x="180" y="572" width="1260" height="5" fill="${o.stripe}"/>` : ""}
      <path d="M226,532 C520,470 1000,458 1396,512" stroke="#fff" stroke-width="5" fill="none" opacity="${spec}"/>
      <path d="M240,560 C560,520 1000,520 1400,560" stroke="#fff" stroke-width="2" fill="none" opacity="${spec * 0.6}"/>
      ${beads}
      ${m ? `<rect x="150" y="676" width="1330" height="40" fill="#000" opacity=".55"/><rect x="150" y="640" width="1330" height="36" fill="#000" opacity=".2"/>` : `<rect x="180" y="610" width="1260" height="40" fill="#000" opacity=".45"/>`}
    </g>
    ${m ? `<path d="${m.glass}" fill="url(#glass)" stroke="${trim}" stroke-width="6" stroke-linejoin="round"/>
    ${m.pillars.map((d) => `<path d="${d}" stroke="${trim}" stroke-width="10"/>`).join("")}
    ${m.details(trim)}
    ${m.wheels.map(([x, y]) => m5wheel(x, y, m.wheelR)).join("")}
    <g opacity=".12" transform="translate(0,${m.groundY * 2}) scale(1,-1)"><path d="${B}" fill="url(#paint)"/></g>` : `    <path d="${GLASS}" fill="url(#glass)" stroke="${trim}" stroke-width="7" stroke-linejoin="round"/>
    <path d="${PILLAR}" stroke="${trim}" stroke-width="9"/>
    <path d="M1180,470 L1260,476" stroke="${trim}" stroke-width="5" stroke-linecap="round"/>
    <path d="M1360,494 C1380,498 1392,506 1398,516 L1372,520 C1362,510 1356,502 1360,494 Z" fill="#f2f2f2" opacity=".85"/>
    <path d="M214,548 L246,536 L250,560 L218,566 Z" fill="#E31828"/>
    <path d="M230,630 L1380,630" stroke="#000" stroke-width="10" opacity=".55"/>
    ${wheel(380, 640)}${wheel(1180, 640)}
    <g opacity=".14" transform="translate(0,1460) scale(1,-1)"><path d="${BODY}" fill="url(#paint)"/></g>
`}
  </g>
  ${o.label === null ? "" : `<g font-family="Arial, Helvetica, sans-serif" fill="#fff">
    <rect x="${24}" y="${h - 58}" width="${Math.max(260, (o.label?.length ?? 10) * 11 + 60)}" height="34" fill="#000" opacity=".55"/>
    <rect x="${24}" y="${h - 58}" width="4" height="34" fill="#E31828"/>
    <text x="${40}" y="${h - 36}" font-size="15" letter-spacing="2" opacity=".85">DEMO IMAGE · ${o.label ?? ""}</text>
  </g>`}
</svg>`;
}

function interior(o) {
  const w = o.w ?? 1600, h = o.h ?? 900;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="40%" r="70%"><stop offset="0" stop-color="#1c1c1c"/><stop offset="1" stop-color="#050505"/></radialGradient>
    <radialGradient id="rg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#E31828" stop-opacity=".45"/><stop offset="1" stop-color="#E31828" stop-opacity="0"/></radialGradient>
    <linearGradient id="leather" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#0d0d0d"/></linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <ellipse cx="${w / 2}" cy="${h * 0.55}" rx="${w * 0.35}" ry="${h * 0.3}" fill="url(#rg)"/>
  <path d="M0,${h * 0.42} C${w * 0.3},${h * 0.32} ${w * 0.7},${h * 0.32} ${w},${h * 0.42} L${w},${h * 0.56} C${w * 0.7},${h * 0.48} ${w * 0.3},${h * 0.48} 0,${h * 0.56} Z" fill="url(#leather)"/>
  <path d="M0,${h * 0.5} C${w * 0.3},${h * 0.42} ${w * 0.7},${h * 0.42} ${w},${h * 0.5}" stroke="#E31828" stroke-width="3" fill="none" stroke-dasharray="10 8" opacity=".8"/>
  <g transform="translate(${w * 0.5},${h * 0.62})">
    <circle r="${h * 0.27}" fill="none" stroke="#1e1e1e" stroke-width="${h * 0.055}"/>
    <circle r="${h * 0.27}" fill="none" stroke="#333" stroke-width="2"/>
    <path d="M${-h * 0.25},${-h * 0.1} A${h * 0.27},${h * 0.27} 0 0 1 ${h * 0.25},${-h * 0.1}" fill="none" stroke="#3a3a3a" stroke-width="4"/>
    <rect x="${-h * 0.012}" y="${-h * 0.3}" width="${h * 0.024}" height="${h * 0.06}" fill="#E31828"/>
    <path d="M${-h * 0.27},0 L${-h * 0.08},${h * 0.02} M${h * 0.27},0 L${h * 0.08},${h * 0.02} M0,${h * 0.09} L0,${h * 0.27}" stroke="#1e1e1e" stroke-width="${h * 0.05}" stroke-linecap="round"/>
    <circle r="${h * 0.085}" fill="#151515" stroke="#3a3a3a" stroke-width="2"/>
    <text y="${h * 0.018}" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-style="italic" font-weight="900" font-size="${h * 0.05}" fill="#fff">MST</text>
  </g>
  <g font-family="Arial, Helvetica, sans-serif" fill="#fff">
    <rect x="24" y="${h - 58}" width="${(o.label.length) * 11 + 140}" height="34" fill="#000" opacity=".55"/>
    <rect x="24" y="${h - 58}" width="4" height="34" fill="#E31828"/>
    <text x="40" y="${h - 36}" font-size="15" letter-spacing="2" opacity=".85">DEMO IMAGE · ${o.label}</text>
  </g>
</svg>`;
}

const files = {
  "hero/hero.svg": car({ w: 2400, h: 1350, body: "#121212", body2: "#3a3a3a", finish: "satin", trim: "black", glow: 0.75, label: "HERO · REPLACE WITH YOUR BEST WRAP PHOTO", carScale: 0.78, offsetX: 380, offsetY: 150 }),
  "services/color-change.svg": car({ body: "#8a0d16", body2: "#E31828", finish: "satin", trim: "black", label: "COLOR CHANGE WRAP" }),
  "services/chrome-delete.svg": car({ body: "#1c1f24", body2: "#5b6470", finish: "gloss", trim: "black", label: "CHROME DELETE" }),
  "services/roof-wrap.svg": car({ body: "#bfc3c8", body2: "#f2f3f5", roof: "#0a0a0a", finish: "gloss", trim: "black", label: "ROOF WRAP" }),
  "services/accent-wrap.svg": car({ body: "#4a4f55", body2: "#8b939c", stripe: "#E31828", finish: "matte", trim: "black", label: "ACCENT WRAP" }),
  "services/commercial-wrap.svg": car({ body: "#d9dcdf", body2: "#ffffff", stripe: "#E31828", finish: "gloss", trim: "black", label: "COMMERCIAL WRAP" }),
  "services/ppf.svg": car({ body: "#0f0f10", body2: "#6b6f75", finish: "gloss", trim: "black", glow: 0.45, beads: true, label: "PAINT PROTECTION FILM" }),
  "services/interior-detailing.svg": interior({ label: "INTERIOR DETAILING" }),
  "services/exterior-detailing.svg": car({ body: "#0e1a2b", body2: "#2b4a78", finish: "gloss", trim: "chrome", beads: true, glow: 0.4, label: "EXTERIOR DETAILING" }),
  "services/full-detailing.svg": car({ body: "#1a1a1a", body2: "#4d4d4d", finish: "gloss", trim: "chrome", glow: 0.5, label: "FULL AUTO DETAILING" }),
  "gallery/project-1-before.svg": car({ model: "m5", body: "#c9ccd0", body2: "#ffffff", finish: "gloss", trim: "black", glow: 0.12, label: null }),
  "gallery/project-1-after.svg": car({ model: "m5", body: "#121212", body2: "#3a3a3a", finish: "satin", trim: "black", glow: 0.7, label: null }),
  "gallery/project-2-before.svg": car({ model: "m5", body: "#0b2a5c", body2: "#2f63b8", finish: "gloss", trim: "chrome", glow: 0.12, label: null }),
  "gallery/project-2-after.svg": car({ model: "m5", body: "#4f565e", body2: "#9aa3ad", finish: "matte", trim: "black", glow: 0.6, label: null }),
  "gallery/project-3-before.svg": car({ model: "m5", body: "#9aa0a6", body2: "#e2e5e8", finish: "gloss", trim: "chrome", glow: 0.12, label: null }),
  "gallery/project-3-after.svg": car({ model: "m5", body: "#9aa0a6", body2: "#e2e5e8", roof: "#0a0a0a", finish: "gloss", trim: "black", glow: 0.6, label: null }),
  "gallery/project-4-before.svg": car({ model: "m5", body: "#1d1d1d", body2: "#333", finish: "matte", trim: "chrome", glow: 0.1, label: null }),
  "gallery/project-4-after.svg": car({ model: "m5", body: "#0d0d0d", body2: "#5a5a5a", finish: "gloss", trim: "chrome", glow: 0.55, beads: true, label: null }),
};

for (const [name, svg] of Object.entries(files)) {
  const p = join(root, name);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, svg);
}
console.log(`Wrote ${Object.keys(files).length} placeholder images to public/images`);
