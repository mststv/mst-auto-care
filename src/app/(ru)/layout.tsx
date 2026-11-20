import { Inter, Oswald } from "next/font/google";
import { RootHtml, baseMetadata, baseViewport } from "@/lib/root-html";

export const metadata = baseMetadata;
export const viewport = baseViewport;

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin", "cyrillic"], weight: ["500", "600", "700"], variable: "--font-oswald", display: "swap" });

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="ru" fontClass={`${inter.variable} ${oswald.variable}`}>
      {children}
    </RootHtml>
  );
}
