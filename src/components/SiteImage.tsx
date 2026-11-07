import Image, { type ImageProps } from "next/image";
import { isPlaceholder } from "@/lib/images";

/** next/image wrapper: demo SVGs skip optimization, real photos (JPG/WebP/PNG) get full optimization. */
export function SiteImage({ alt, ...props }: ImageProps) {
  const src = typeof props.src === "string" ? props.src : "";
  return <Image alt={alt} {...props} unoptimized={props.unoptimized ?? isPlaceholder(src)} />;
}
