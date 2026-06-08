import Image from "next/image";
import type { ReactNode } from "react";

type SectionImageProps = {
  src: string;
  alt: string;
  children: ReactNode;
  id?: string;
  className?: string;
  priority?: boolean;
};

export default function SectionImage({
  src,
  alt,
  children,
  id,
  className = "",
  priority = false,
}: SectionImageProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
        <div className="image-overlay absolute inset-0" aria-hidden />
        <div className="dot-grid absolute inset-0" aria-hidden />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
