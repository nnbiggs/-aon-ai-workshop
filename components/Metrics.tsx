import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "4x", label: "Efficiency gain vs. baseline" },
  { value: "98%", label: "Faster discovery synthesis" },
  { value: "85%", label: "Faster backlog creation" },
  { value: "90%", label: "Faster design iteration" },
  { value: "80%", label: "First-pass QA success rate" },
];

export default function Metrics() {
  return (
    <section className="relative bg-canvas">
      <div className="glow-divider" />
      <div className="content-wrap py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.value}
              delay={index * 0.08}
              className="bg-canvas px-4 py-6 text-center sm:px-5"
            >
              <p className="font-serif text-3xl font-semibold text-orange sm:text-4xl lg:text-stat">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase leading-snug tracking-wider text-white-50 sm:mt-3 sm:text-[11px]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-6 text-center font-mono text-xs italic text-white-30 sm:mt-8 sm:text-[13px]">
            Based on PwC pilot and enterprise rollout data. Illustrative for
            AON.
          </p>
        </Reveal>
      </div>
      <div className="glow-divider" />
    </section>
  );
}
