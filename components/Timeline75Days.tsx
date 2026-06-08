import Reveal from "@/components/ui/Reveal";
import ScrollTable from "@/components/ui/ScrollTable";

const rows = [
  {
    phase: "Requirements & Planning",
    todayDays: 33,
    aiDays: 13,
    today: "33 days",
    withAi: "13 days",
    saved: "−20 days",
    unchanged: false,
  },
  {
    phase: "Design & UX",
    todayDays: 14,
    aiDays: 3,
    today: "14 days",
    withAi: "3 days",
    saved: "−11 days",
    unchanged: false,
  },
  {
    phase: "Build & Develop",
    todayDays: 45,
    aiDays: 20,
    today: "45 days",
    withAi: "20 days",
    saved: "−25 days",
    unchanged: false,
  },
  {
    phase: "QA & UAT",
    todayDays: 35,
    aiDays: 8,
    today: "35 days",
    withAi: "8 days",
    saved: "−27 days",
    unchanged: false,
  },
  {
    phase: "Release Prep",
    todayDays: 14,
    aiDays: 2,
    today: "14 days",
    withAi: "2 days",
    saved: "−12 days",
    unchanged: false,
  },
  {
    phase: "Governance Sign-off",
    todayDays: 9,
    aiDays: 9,
    today: "9 days",
    withAi: "9 days",
    saved: "unchanged",
    unchanged: true,
  },
];

const highlights = [
  { value: "150 → 75", label: "Days E2E delivery target" },
  { value: "95", label: "Days saved across SDLC phases" },
  { value: "50%", label: "Faster steady-state delivery" },
];

function ProgressBar({
  todayDays,
  aiDays,
  unchanged,
}: {
  todayDays: number;
  aiDays: number;
  unchanged: boolean;
}) {
  const pct = unchanged ? 100 : Math.round((aiDays / todayDays) * 100);

  return (
    <div className="mt-3 h-1 w-full bg-border" aria-hidden>
      <div
        className="h-full bg-orange transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function TimelineCard({
  row,
}: {
  row: (typeof rows)[number];
}) {
  return (
    <article className="border border-border bg-surface p-4 sm:p-5">
      <h3 className="text-sm font-semibold text-white sm:text-base">
        {row.phase}
      </h3>
      <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-white-30">
            Today
          </dt>
          <dd className="mt-1 font-mono text-[13px] text-white-30 line-through">
            {row.today}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-orange">
            With AI
          </dt>
          <dd className="mt-1 font-semibold text-orange">{row.withAi}</dd>
        </div>
      </dl>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-white-30">
          Saved
        </span>
        {row.unchanged ? (
          <span className="font-mono text-[12px] text-white-30">{row.saved}</span>
        ) : (
          <span className="rounded-sm bg-orange px-2 py-0.5 font-mono text-[11px] text-white">
            {row.saved}
          </span>
        )}
      </div>
      <ProgressBar
        todayDays={row.todayDays}
        aiDays={row.aiDays}
        unchanged={row.unchanged}
      />
    </article>
  );
}

export default function Timeline75Days() {
  return (
    <section id="75-days" className="section-anchor relative bg-canvas dot-grid">
      <div className="glow-divider" />
      <div className="content-wrap py-12 sm:py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <p className="section-label">The Opportunity</p>
              <h2 className="section-h2 mt-3 sm:mt-4">
                From 150 Days to 75 — How AI Compresses the SDLC
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body sm:mt-4 sm:text-base">
                Not a Sprint 1 promise. A steady-state target reached at months
                3–6 of AI activation across all SDLC phases.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6 lg:grid-cols-1">
              {highlights.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.08}>
                  <div className="border-l-2 border-orange pl-4 sm:pl-5">
                    <p className="font-serif text-3xl font-semibold text-orange sm:text-4xl lg:text-stat">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-white-50 sm:text-[13px]">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.32}>
              <p className="mt-8 border-l-2 border-orange pl-4 text-sm leading-relaxed text-body sm:mt-10">
                QA &amp; UAT saves the most days of any phase — because AI
                generates test cases from acceptance criteria, removing the
                3-week manual test creation cycle that sits last on the critical
                path before every release.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-4 lg:hidden">
              {rows.map((row, index) => (
                <Reveal key={row.phase} delay={index * 0.08}>
                  <TimelineCard row={row} />
                </Reveal>
              ))}
              <Reveal delay={0.48}>
                <div className="bg-orange p-4 font-semibold text-white sm:p-5">
                  <p className="text-base sm:text-lg">Total: 75 days</p>
                  <p className="mt-1 font-mono text-[13px] line-through opacity-80">
                    vs. 150 days today
                  </p>
                  <p className="mt-2 font-mono text-[13px]">50% faster</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="hidden lg:block">
              <ScrollTable label="Scroll table horizontally">
                <div className="border border-border bg-surface">
                  <table className="w-full min-w-[600px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="p-4 font-mono text-[11px] uppercase tracking-wider text-white-30">
                          Phase
                        </th>
                        <th className="border-l border-border p-4 font-mono text-[11px] uppercase tracking-wider text-white-30">
                          Today
                        </th>
                        <th className="border-l border-border p-4 font-mono text-[11px] uppercase tracking-wider text-orange">
                          With AI
                        </th>
                        <th className="border-l border-border p-4 font-mono text-[11px] uppercase tracking-wider text-white-30">
                          Saved
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr
                          key={row.phase}
                          className="border-b border-border transition-colors hover:bg-elevated"
                        >
                          <td className="p-4 text-white">{row.phase}</td>
                          <td className="border-l border-border p-4 font-mono text-[13px] text-white-30 line-through">
                            {row.today}
                          </td>
                          <td className="border-l border-border p-4 font-semibold text-orange">
                            {row.withAi}
                          </td>
                          <td className="border-l border-border p-4">
                            {row.unchanged ? (
                              <span className="font-mono text-[13px] text-white-30">
                                {row.saved}
                              </span>
                            ) : (
                              <span className="inline-block rounded-sm bg-orange px-2 py-0.5 font-mono text-[11px] text-white">
                                {row.saved}
                              </span>
                            )}
                            <ProgressBar
                              todayDays={row.todayDays}
                              aiDays={row.aiDays}
                              unchanged={row.unchanged}
                            />
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-orange font-semibold text-white">
                        <td className="p-4">Total</td>
                        <td className="border-l border-border p-4 font-mono text-[13px] line-through opacity-80">
                          150 days
                        </td>
                        <td className="border-l border-border p-4">75 days</td>
                        <td className="border-l border-border p-4 font-mono text-[13px]">
                          50% faster
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollTable>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="glow-divider" />
    </section>
  );
}
