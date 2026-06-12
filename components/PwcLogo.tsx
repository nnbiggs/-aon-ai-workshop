import Image from "next/image";

type PwcLogoProps = {
  className?: string;
  height?: number;
};

const INTRINSIC_WIDTH = 615;
const INTRINSIC_HEIGHT = 638;

export default function PwcLogo({ className = "", height = 40 }: PwcLogoProps) {
  return (
    <Image
      src="/pwc-logo.png"
      alt="PwC"
      width={INTRINSIC_WIDTH}
      height={INTRINSIC_HEIGHT}
      className={className}
      style={{ height, width: "auto" }}
      priority={height >= 40}
    />
  );
}
