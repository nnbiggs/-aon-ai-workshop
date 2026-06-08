import Reveal from "@/components/ui/Reveal";
import SectionImage from "@/components/ui/SectionImage";
import { images } from "@/lib/images";

const items = [
  {
    num: "01",
    time: "5 min",
    title: "Welcome & Context",
    subtitle: "Who's in the room, why we're here, what we'll leave with",
  },
  {
    num: "02",
    time: "20 min",
    title: "Demo: AI Acceleration by SDLC Stage",
    subtitle:
      "Live demos across planning, requirements, design, build, and test",
  },
  {
    num: "03",
    time: "20 min",
    title: "PwC Lessons Learned — What It Means for AON",
    subtitle:
      "Mistakes to avoid, what PwC learned the hard way, your playbook",
  },
  {
    num: "04",
    time: "20 min",
    title: "How to Measure AI",
    subtitle: "Tech vs. business adoption, tooling, measuring productivity",
  },
  {
    num: "05",
    time: "15 min",
    title: "How to Train Teams & Operationalize AI",
    subtitle: "How embedding AI engineers accelerates delivery",
  },
  {
    num: "06",
    time: "20 min",
    title: "Workshop: Where Can AI Move the Needle?",
    subtitle: "Interactive canvas — you tell us where the pain is",
  },
  {
    num: "07",
    time: "10 min",
    title: "Synthesis & Prioritized Problem Statements",
    subtitle:
      "Top 2–3 problems with named owners and a 90-day commitment",
  },
];

export default function Agenda() {
  return (
    <SectionImage
      id="agenda"
      className="section-anchor"
      src={images.serverRoom}
      alt="Dark server room and data center"
    >
      <div className="glow-divider" />
      <div className="content-wrap py-12 sm:py-16 md:py-20">
        <Reveal>
          <p className="section-label">Agenda</p>
          <h2 className="section-h2 mt-3 sm:mt-4">What We Cover Today</h2>
        </Reveal>

        <div className="mt-8 sm:mt-12">
          {items.map((item, index) => (
            <Reveal key={item.num} delay={index * 0.08}>
              <article
                className={`agenda-row flex gap-3 py-4 sm:gap-4 sm:py-5 md:gap-8 ${
                  index < items.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="w-8 shrink-0 font-mono text-sm text-orange sm:w-10">
                  {item.num}
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[11px] text-white-30 sm:text-[13px]">
                    {item.time}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold leading-snug text-white sm:text-base md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="glow-divider" />
    </SectionImage>
  );
}
