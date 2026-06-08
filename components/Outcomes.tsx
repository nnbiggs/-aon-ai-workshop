import Reveal from "@/components/ui/Reveal";
import SectionImage from "@/components/ui/SectionImage";
import { images } from "@/lib/images";

const outcomes = [
  {
    letter: "A",
    title: "A shared view of where AI adds the most value",
    body: "An agreed, prioritized map of AI opportunities specific to Meridian and Broker Co-Pilot timelines and phases.",
  },
  {
    letter: "B",
    title: "2–3 named problem statements with owners",
    body: "Structured problem statements: SDLC phase, business impact, how we'd measure success, and a named accountable owner for each.",
  },
  {
    letter: "C",
    title: "A 90-day activation plan",
    body: "A Phase 1–4 commitment: who embeds, which pod goes first, what KPIs are tracked, and what leadership sees by the end of the first sprint.",
  },
  {
    letter: "D",
    title: "Decision on PwC AI engineer embedding",
    body: "Agreement — or a concrete next step — on embedding PwC AI engineers into Meridian and Broker Co-Pilot pods to accelerate remaining go-lives.",
  },
];

export default function Outcomes() {
  return (
    <SectionImage
      id="outcomes"
      className="section-anchor"
      src={images.hero}
      alt="Abstract AI neural network background"
    >
      <div className="glow-divider" />
      <div className="content-wrap py-12 sm:py-16 md:py-20">
        <Reveal>
          <p className="section-label">Outcomes</p>
          <h2 className="section-h2 mt-3 sm:mt-4">
            What AON Leaves With Today
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {outcomes.map((item, index) => (
            <Reveal key={item.letter} delay={index * 0.08}>
              <article className="hover-glow glass-card h-full p-5 sm:p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center bg-orange font-mono text-sm font-bold text-white">
                  {item.letter}
                </span>
                <h3 className="mt-3 text-base font-medium text-white sm:mt-4 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body sm:mt-3 sm:text-base">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-8 w-full bg-orange px-4 py-4 sm:mt-12 sm:px-6 sm:py-5">
            <p className="text-sm leading-relaxed text-white sm:text-base">
              <span className="font-semibold text-orange">
                Today&apos;s measure of success:
              </span>{" "}
              <span>
                Leave without 2–3 named problem statements and a Phase 1
                commitment, and the session has not achieved its purpose.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
      <div className="glow-divider" />
    </SectionImage>
  );
}
