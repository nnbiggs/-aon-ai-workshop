import Image from "next/image";

type PwcLogoProps = {
  className?: string;
  height?: number;
};

/**
 * Official PwC logo image.
 * Trademark belongs to PricewaterhouseCoopers — review usage guidelines.
 */
export default function PwcLogo({ className, height = 40 }: PwcLogoProps) {
  return (
    <Image
      src="/pwc-logo.png"
      alt="PwC"
      width={Math.round(height * 3.5)}
      height={height}
      priority
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
