import { Inter, Oswald } from "next/font/google";
import { RootHtml, baseMetadata, baseViewport } from "@/lib/root-html";

export const metadata = baseMetadata;
export const viewport = baseViewport;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-oswald", display: "swap" });

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="en" fontClass={`${inter.variable} ${oswald.variable}`}>
      {children}
    </RootHtml>
  );
}
