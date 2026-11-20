import { RootHtml, baseMetadata, baseViewport } from "@/lib/root-html";
import { fontClass } from "@/lib/fonts";

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootHtml lang="ru" fontClass={fontClass}>
      {children}
    </RootHtml>
  );
}
