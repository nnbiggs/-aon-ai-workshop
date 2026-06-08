import Reveal from "@/components/ui/Reveal";
import SectionImage from "@/components/ui/SectionImage";
import { images } from "@/lib/images";

const lessons = [
  {
    num: "01",
    title: "The Silo Trap: AI Only in Dev",
    mistake:
      "We focused AI on developers first. They got faster — but projects didn't. The real delays were upstream in planning and design.",
    forAon:
      "Prioritize AI-assisted design and requirements early. The biggest gains come upstream.",
  },
  {
    num: "02",
    title: "The Artisanal AI Problem",
    mistake:
      "Early teams created brilliant but bespoke AI outputs — inconsistent and unreusable. A craft, not a scalable process.",
    forAon:
      "Establish shared prompt libraries for user stories, requirements, and test cases as Step 1.",
  },
  {
    num: "03",
    title: "The Human Bottleneck",
    mistake:
      "Initial tools failed to accelerate because we were still waiting on overloaded SMEs to approve everything.",
    forAon:
      "Use AI to pre-structure SME input and compress planning cycles from weeks to days.",
  },
  {
    num: "04",
    title: "The Ready, Set, Wait Problem",
    mistake:
      "We lost up to 25% of velocity because teams lacked sandbox access, tool permissions, or environment setups on Day 1.",
    forAon:
      "Implement a formal pre-sprint readiness checklist.",
  },
];

export default function LessonsLearned() {
  return (
    <SectionImage
      id="lessons"
      className="section-anchor"
      src={images.serverRoom}
      alt="Dark server room for lessons learned section"
    >
      <div className="glow-divider" />
      <div className="content-wrap py-12 sm:py-16 md:py-20">
        <Reveal>
          <div className="text-center">
            <p className="section-label">Lessons Learned</p>
            <h2 className="section-h2 mx-auto mt-3 max-w-3xl sm:mt-4">
              What PwC Learned the Hard Way — and What AON Should Avoid
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-body sm:mt-4 sm:text-base">
              In 8 weeks with 5.5 FTEs, PwC delivered 4x efficiency, 2.2x
              faster delivery, and 98% faster discovery synthesis. But we made
              mistakes first. Here&apos;s your shortcut.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {lessons.map((lesson, index) => (
            <Reveal key={lesson.num} delay={index * 0.08}>
              <article className="hover-glow h-full border border-border border-l-[3px] border-l-orange bg-surface">
                <div className="p-5 sm:p-6">
                  <p className="font-mono text-[13px] text-orange">
                    {lesson.num}
                  </p>
                  <h3 className="mt-2 text-base font-medium text-white sm:text-lg">
                    {lesson.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-body sm:mt-4">
                    <span className="text-white-50">PwC mistake:</span>{" "}
                    {lesson.mistake}
                  </p>

                  <div className="my-4 h-px bg-border" />

                  <p className="text-sm leading-relaxed text-white">
                    <span className="font-mono text-orange">▶ For AON:</span>{" "}
                    {lesson.forAon}
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
