import Image, { type ImageProps } from "next/image";
import { isPlaceholder } from "@/lib/images";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** next/image wrapper: demo SVGs skip optimization; adds the base path for sub-path hosting (GitHub Pages). */
export function SiteImage({ alt, src, ...props }: ImageProps) {
  const s = typeof src === "string" && src.startsWith("/") ? `${basePath}${src}` : src;
  const raw = typeof src === "string" ? src : "";
  return <Image alt={alt} src={s} {...props} unoptimized={props.unoptimized ?? isPlaceholder(raw)} />;
}
