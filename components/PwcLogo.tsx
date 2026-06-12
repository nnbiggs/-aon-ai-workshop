type PwcLogoProps = {
  className?: string;
  height?: number;
};

/**
 * PwC wordmark rendered as text to match the brand lockup
 * (lowercase "pwc" with the signature orange/red accent marks above).
 * Trademark belongs to PricewaterhouseCoopers — review usage guidelines.
 */
export default function PwcLogo({ className, height = 40 }: PwcLogoProps) {
  return (
    <div
      className={className}
      style={{ height }}
      aria-label="PwC"
      role="img"
    >
      <svg
        viewBox="0 0 120 56"
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        {/* Stacked accent marks above the wordmark */}
        <g>
          <path d="M6 18 C 18 8, 34 8, 46 16 C 34 12, 20 13, 10 20 Z" fill="#E87722" />
          <path d="M26 14 C 40 5, 58 6, 70 14 C 56 9, 40 9, 30 16 Z" fill="#FD5108" />
          <path d="M50 16 C 66 7, 86 8, 100 17 C 84 11, 66 11, 54 18 Z" fill="#E87722" />
          <path d="M76 18 C 92 10, 110 11, 118 19 C 106 14, 90 14, 80 20 Z" fill="#FD5108" />
        </g>
        {/* Wordmark */}
        <text
          x="2"
          y="50"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="30"
          fontWeight="700"
          fill="#FFFFFF"
          letterSpacing="-1"
        >
          pwc
        </text>
      </svg>
    </div>
  );
}
