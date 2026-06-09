import Image from "next/image";
import AonLogo from "@/components/AonLogo";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";

const stats = [
  { value: "150 → 75 DAYS" },
  { value: "6+ PROGRAMS" },
  { value: "90-DAY ACTIVATION" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Abstract neural network visualization"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="image-overlay absolute inset-0" aria-hidden />
        <div className="dot-grid absolute inset-0" aria-hidden />
      </div>

      <div
        className="hero-left-accent absolute bottom-0 left-0 top-0 w-1"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="content-wrap flex flex-1 flex-col justify-center pb-8 pt-28 sm:pt-32 md:py-24">
          <Reveal>
            <p className="section-label text-[10px] sm:text-[11px]">
              // AI SDLC WORKSHOP · JUNE, 2026
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="hero-title mt-4 sm:mt-6">AI in the SDLC</h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="hero-subtitle mt-1 sm:mt-2">Workshop</p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-body sm:mt-6 sm:text-base md:text-lg">
              Accelerating Broker Co-Pilot &amp; Meridian Delivery for AON
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-5 flex flex-col items-start gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-3">
              <AonLogo height={16} className="text-white sm:h-[18px]" />
              <p className="font-mono text-[11px] leading-relaxed text-orange sm:text-[13px]">
                [ JUNE, 2026 ] · [ CONFIDENTIAL ]
              </p>
            </div>
          </Reveal>
        </div>

        <div className="content-wrap pb-20 sm:pb-24 md:pb-28">
          <Reveal delay={0.4}>
            <div className="flex flex-col gap-3 border-t border-border/60 pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-6">
              {stats.map((stat, i) => (
                <div key={stat.value} className="flex items-center gap-4">
                  {i > 0 && (
                    <span
                      className="hidden h-8 w-px bg-border sm:block"
                      aria-hidden
                    />
                  )}
                  <span className="font-mono text-[11px] tracking-wide text-body sm:text-[13px]">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#purpose"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white-30 sm:bottom-8"
        aria-label="Scroll to content"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="scroll-chevron"
          aria-hidden
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
