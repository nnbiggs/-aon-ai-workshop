import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";

const metrics = [
  { value: "~6 weeks", label: "Acceleration per Meridian release" },
  { value: "40–60%", label: "Requirements cycle time reduction" },
  { value: "2–3x", label: "Faster test scaffolding per sprint" },
  { value: "$2–4M", label: "Cost savings per delayed release avoided" },
  { value: "75 days", label: "Target E2E delivery (from ~150 today)" },
];

const meridianItems = [
  {
    label: "Summer (Jun 30):",
    text: "QA automation from Sprint 1. UAT prep: 3 weeks → ~1 week.",
  },
  {
    label: "Fall (Sep 30):",
    text: "AI requirements + localization. SME review compressed 50%.",
  },
  {
    label: "Winter (Dec 11):",
    text: "Full agentic pipeline. Target: 4–6 week pull-forward.",
  },
];

const bcopItems = [
  {
    label: "US Casualty (Q4 2026):",
    text: "Planning phase 6 weeks → 2 weeks. QA cycle −60%.",
  },
  {
    label: "Mid-Market (Q1 2027):",
    text: "Per-pod activation cost −40% from compounding learnings.",
  },
  {
    label: "Cyber (Q2 2027):",
    text: "Pod onboarding 8 weeks → 2–3 weeks.",
  },
];

function BulletItem({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-2 h-full w-0.5 shrink-0 self-stretch bg-orange" />
      <p className="text-sm leading-relaxed text-body">
        <span className="font-medium text-white">{label}</span> {text}
      </p>
    </div>
  );
}

export default function ProgramImpact() {
  return (
    <section id="impact" className="section-anchor relative bg-canvas">
      <div className="glow-divider" />
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[640px]">
          <Image
            src={images.city}
            alt="Futuristic city at night"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="image-overlay absolute inset-0" aria-hidden />
          <div className="dot-grid absolute inset-0" aria-hidden />

          <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-8 lg:p-10">
            <Reveal>
              <div>
                <p className="section-label">Program Impact</p>
                <h2 className="section-h2 mt-3 sm:mt-4">
                  How This Accelerates Meridian &amp; Broker Co-Pilot
                </h2>
              </div>
            </Reveal>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-3 sm:gap-3 lg:grid-cols-2 xl:grid-cols-3">
              {metrics.map((m, index) => (
                <Reveal key={m.label} delay={index * 0.08}>
                  <div className="border border-border bg-surface/80 p-3 text-center backdrop-blur-sm sm:p-4">
                    <p className="font-serif text-xl font-semibold text-orange sm:text-2xl lg:text-3xl">
                      {m.value}
                    </p>
                    <p className="mt-1 font-mono text-[9px] uppercase leading-snug tracking-wider text-white-50 sm:mt-2 sm:text-[10px]">
                      {m.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-5 sm:gap-6 sm:p-8 lg:justify-center lg:p-10">
          <Reveal delay={0.08}>
            <article className="border border-border bg-surface">
              <header className="bg-orange-deep px-4 py-3 sm:px-5">
                <h3 className="text-base font-medium text-white sm:text-lg">
                  Meridian — 3 Releases Remaining
                </h3>
              </header>
              <div className="space-y-4 p-4 sm:p-5">
                {meridianItems.map((item) => (
                  <BulletItem
                    key={item.label}
                    label={item.label}
                    text={item.text}
                  />
                ))}
                <p className="border-t border-border pt-4 font-mono text-[12px] text-orange sm:text-[13px]">
                  Savings: Each month of delay costs ~$1.5–2M. Embedding
                  recovers this multiple times over.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <article className="border border-border bg-surface">
              <header className="bg-orange px-4 py-3 sm:px-5">
                <h3 className="text-base font-medium text-white sm:text-lg">
                  Broker Co-Pilot — 3 Go-Lives Remaining
                </h3>
              </header>
              <div className="space-y-4 p-4 sm:p-5">
                {bcopItems.map((item) => (
                  <BulletItem
                    key={item.label}
                    label={item.label}
                    text={item.text}
                  />
                ))}
                <p className="border-t border-border pt-4 font-mono text-[12px] text-orange sm:text-[13px]">
                  Savings: Each quarter of BCoP delay costs ~$3–5M. Embedding
                  can recapture 1–2 quarters per go-live.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
      <div className="glow-divider" />
    </section>
  );
}
