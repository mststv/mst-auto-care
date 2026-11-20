import type { ComponentProps } from "react";

/**
 * Responsive WebP image. `src` is the photo path WITHOUT extension, e.g. "/images/work/ppf-install";
 * the -640.webp and -1280.webp files are made by `python3 scripts/optimize-images.py`.
 * Lazy-loaded by default; pass priority for an above-the-fold image.
 */
export function SiteImage({
  src,
  alt,
  width,
  height,
  sizes = "100vw",
  priority = false,
  className,
  ...rest
}: Omit<ComponentProps<"img">, "src" | "srcSet"> & { src: string; alt: string; width: number; height: number; priority?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${src}-1280.webp`}
      srcSet={`${src}-640.webp 640w, ${src}-1280.webp ${Math.min(width, 1280)}w`}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={className}
      {...rest}
    />
  );
}
