import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    num: "01",
    title: "Identify AI Opportunities",
    body: "Map the highest-impact AI use cases across planning, requirements, design, build, and test — specifically for Meridian and Broker Co-Pilot.",
  },
  {
    num: "02",
    title: "Operationalize AI Ways of Working",
    body: "Move beyond tool access. Define prompt standards, role shifts, human review gates, and the adoption practices required to sustain AI gains.",
  },
  {
    num: "03",
    title: "Accelerate Delivery Timelines",
    body: "Evaluate how embedding PwC AI engineers into AON pods compresses the 150-day E2E delivery cycle to 75 days across both programs.",
  },
];

export default function Purpose() {
  return (
    <section id="purpose" className="section-anchor relative bg-canvas dot-grid">
      <div className="glow-divider" />
      <div className="content-wrap py-12 sm:py-16 md:py-20">
        <Reveal>
          <p className="section-label">Purpose</p>
          <h2 className="section-h2 mt-3 sm:mt-4">Why We&apos;re Here</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.num} delay={index * 0.08}>
              <article className="hover-glow h-full border border-border bg-surface">
                <div className="h-0.5 bg-orange" />
                <div className="p-5 sm:p-6">
                  <p className="font-mono text-[13px] text-orange">{card.num}</p>
                  <h3 className="mt-2 text-base font-medium text-white sm:mt-3 sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body sm:mt-3 sm:text-base">
                    {card.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="glow-divider" />
    </section>
  );
}
