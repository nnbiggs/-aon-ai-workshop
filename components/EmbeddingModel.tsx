import Reveal from "@/components/ui/Reveal";
import ScrollTable from "@/components/ui/ScrollTable";

const tableRows = [
  {
    option: "Hire AI Engineers",
    time: "3–6 months",
    ramp: "High",
    coverage: "Role-limited",
    risk: "High",
    highlight: false,
  },
  {
    option: "Train Existing Teams",
    time: "2–4 months",
    ramp: "Medium",
    coverage: "Limited",
    risk: "Medium",
    highlight: false,
  },
  {
    option: "Procure Tooling Only",
    time: "4–8 weeks",
    ramp: "Low–Med",
    coverage: "Narrow",
    risk: "Medium",
    highlight: false,
  },
  {
    option: "PwC Engineers Embedded",
    time: "Sprint 1 (Day 1–14)",
    ramp: "Structured",
    coverage: "Full SDLC",
    risk: "Low",
    highlight: true,
  },
];

const practices = [
  {
    num: "01",
    title: "Embed Day 1 — No Ramp Time Wasted",
    body: "PwC AI engineers arrive with sprint readiness checklist, tool access pre-provisioned, and codebase ingestion protocol. Day 1 deliverable: mapped AI opportunity analysis.",
  },
  {
    num: "02",
    title: "Full Stack Coverage — Not Just Code",
    body: "The embedded engineer covers the full SDLC: requirements drafting, UI generation support, agentic code tasks, and automated test scaffolding.",
  },
  {
    num: "03",
    title: "Standards-First: Build Reusable Assets From Day 1",
    body: "Every prompt, agentic workflow, and AI-generated artifact is documented and added to AON's shared library.",
  },
  {
    num: "04",
    title: "Transfer Ownership on a 90-Day Clock",
    body: "By Day 30: workflows established. By Day 60: pod members run workflows autonomously. By Day 90: pod owns standard tasks.",
  },
  {
    num: "05",
    title: "Measure Everything From Sprint 1",
    body: "Velocity before vs. after, AI-assisted stories per sprint, requirements cycle time, defect escape rate — weekly dashboard for leadership.",
  },
  {
    num: "06",
    title: "Scale via the Champion Network",
    body: "After pod 1 graduates, the embedded engineer moves to pod 2. The first pod's AI champion becomes a peer coach.",
  },
];

function OptionCard({
  row,
}: {
  row: (typeof tableRows)[number];
}) {
  return (
    <article
      className={`border border-border p-4 sm:p-5 ${
        row.highlight
          ? "border-l-[3px] border-l-orange bg-orange-dim"
          : "bg-surface"
      }`}
    >
      <h3 className="text-sm font-semibold text-white sm:text-base">
        {row.option}
      </h3>
      <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-white-30">
            Time to Value
          </dt>
          <dd className="mt-1 text-body">{row.time}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-white-30">
            Ramp Cost
          </dt>
          <dd className="mt-1 text-body">{row.ramp}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-white-30">
            SDLC Coverage
          </dt>
          <dd className="mt-1 text-body">{row.coverage}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-white-30">
            Risk
          </dt>
          <dd className="mt-1 text-body">{row.risk}</dd>
        </div>
      </dl>
    </article>
  );
}

export default function EmbeddingModel() {
  return (
    <section id="embedding" className="section-anchor relative bg-canvas dot-grid">
      <div className="glow-divider" />
      <div className="content-wrap py-12 sm:py-16 md:py-20">
        <Reveal>
          <p className="section-label">The Solution</p>
          <h2 className="section-h2 mt-3 sm:mt-4">
            Embedding PwC AI Engineers — Faster Than Any Alternative
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-body sm:mt-4 sm:text-base">
            Hiring takes 3–6 months. Training takes 2–4 months. Embedded PwC AI
            engineers deliver measurable acceleration from Sprint 1.
          </p>
        </Reveal>

        <div className="mt-8 space-y-4 md:hidden">
          {tableRows.map((row, index) => (
            <Reveal key={row.option} delay={index * 0.08}>
              <OptionCard row={row} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16} className="mt-8 hidden md:block sm:mt-12">
          <ScrollTable>
            <div className="border border-border bg-surface">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-orange text-white">
                    <th className="p-3 font-semibold sm:p-4">Option</th>
                    <th className="border-l border-orange-mid p-3 font-semibold sm:p-4">
                      Time to Value
                    </th>
                    <th className="border-l border-orange-mid p-3 font-semibold sm:p-4">
                      Ramp Cost
                    </th>
                    <th className="border-l border-orange-mid p-3 font-semibold sm:p-4">
                      SDLC Coverage
                    </th>
                    <th className="border-l border-orange-mid p-3 font-semibold sm:p-4">
                      Risk
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, index) => (
                    <tr
                      key={row.option}
                      className={`border-b border-border ${
                        row.highlight
                          ? "border-l-[3px] border-l-orange bg-orange-dim"
                          : index % 2 === 0
                            ? "bg-canvas"
                            : "bg-surface"
                      }`}
                    >
                      <td className="p-3 font-medium text-white sm:p-4">
                        {row.option}
                      </td>
                      <td className="border-l border-border p-3 text-body sm:p-4">
                        {row.time}
                      </td>
                      <td className="border-l border-border p-3 text-body sm:p-4">
                        {row.ramp}
                      </td>
                      <td className="border-l border-border p-3 text-body sm:p-4">
                        {row.coverage}
                      </td>
                      <td className="border-l border-border p-3 text-body sm:p-4">
                        {row.risk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollTable>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-6 border border-orange bg-orange-dim p-4 sm:mt-8 sm:p-6">
            <p className="font-mono text-orange">❝ ❞</p>
            <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
              <strong className="text-white">Why embedded is different:</strong>{" "}
              A PwC AI engineer arrives with proven prompt libraries, agentic
              workflow templates, and change management playbooks already
              calibrated to enterprise SDLC environments. They learn your
              codebase in days — not your domain.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {practices.map((item, index) => (
            <Reveal key={item.num} delay={index * 0.08}>
              <article className="hover-glow h-full border border-border bg-surface">
                <div className="bg-orange px-3 py-2 sm:px-4">
                  <p className="font-mono text-[11px] leading-snug text-white sm:text-[13px]">
                    {item.num} · {item.title}
                  </p>
                </div>
                <p className="p-4 text-sm leading-relaxed text-body sm:p-5">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="glow-divider" />
    </section>
  );
}
