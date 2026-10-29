import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { experience, projects, site, skillGroups } from "@/content/site";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Shivendra Pratap Singh — Research AI Engineer at NPCI and M.Tech (CS) student at IIIT Hyderabad, building AI systems, applied AI, LLM evaluation and fraud detection.",
  alternates: { canonical: `${site.url}/resume/` },
};

const summary =
  "Research AI Engineer at NPCI and M.Tech (CS) student at IIIT Hyderabad (2024–2026). I build and evaluate ML systems for document forgery, synthetic identities and financial fraud — retrieval over 100k documents, 153 FPS batched inference, federated training across hospitals, and calibration that holds under adversarial input. Previously a Power Programmer at Infosys.";

const profileLinks = [
  { label: "GitHub", href: site.github, display: "github.com/63shivendra" },
  {
    label: "LinkedIn",
    href: site.linkedin,
    display: "linkedin.com/in/shivendra-pratap63",
  },
  { label: "Codolio", href: site.codolio, display: "codolio.com/profile/hex" },
];

const selectedSlugs = [
  "docroi",
  "job-authenticity",
  "candidate-ranking",
  "selfindex",
  "federated-healthcare",
];

const selectedProjects = selectedSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

const education = experience.find((item) => item.kind === "Education");

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-ink print:bg-white">
      <div className="container-x py-8 print:max-w-none print:p-0">
        <div className="mx-auto max-w-3xl">
          <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-dim transition-colors hover:text-chalk"
            >
              <ArrowLeft className="size-3.5" strokeWidth={1.7} />
              Back to portfolio
            </Link>
            <PrintButton />
          </div>

          <article className="resume-sheet rounded-xl border border-line bg-[#fbfaf7] px-7 py-8 text-[#191b20] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] sm:px-9 sm:py-9 print:rounded-none print:border-0 print:p-0 print:shadow-none">
            <header className="border-b border-[#dcd8cd] pb-4">
              <h1 className="text-[28px] leading-tight font-semibold tracking-[-0.03em] sm:text-[32px]">
                {site.name}
              </h1>
              <p className="mt-1 text-[12.5px] font-medium text-[#3f4a3a]">
                Research AI Engineer · AI systems · edge AI · privacy-preserving ML
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9.5px] text-[#5c6152]">
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
                <span>Hyderabad, India · IST</span>
                {profileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {link.display}
                  </a>
                ))}
              </div>
            </header>

            <section className="mt-4">
              <SectionTitle>Summary</SectionTitle>
              <p className="mt-2 text-[11px] leading-[1.6] text-[#353a30]">
                {summary}
              </p>
            </section>

            <div className="mt-4 grid gap-6 md:grid-cols-[200px_1fr] print:grid-cols-[200px_1fr]">
              <aside className="order-2 md:order-1 md:border-r md:border-[#e4e0d6] md:pr-5 print:order-1 print:border-r print:pr-5">
                <section>
                  <SectionTitle>Education</SectionTitle>
                  <div className="mt-2.5">
                    <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-[#7a8070]">
                      2024 — 2026
                    </div>
                    <div className="mt-1 text-[11.5px] font-semibold">
                      M.Tech, Computer Science
                    </div>
                    <div className="text-[10px] text-[#5c6152]">
                      IIIT Hyderabad · Hyderabad, India
                    </div>
                    <p className="mt-1 text-[10.2px] leading-[1.55] text-[#555b4c]">
                      Information retrieval, data systems and applied ML.
                    </p>
                    {education ? (
                      <ul className="mt-1.5 space-y-0.5">
                        {education.bullets.slice(0, 2).map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-1.5 text-[9.8px] leading-[1.5] text-[#555b4c]"
                          >
                            <span className="mt-[5px] size-[2.5px] shrink-0 rounded-full bg-[#6f7a5a]" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>

                <section className="mt-4">
                  <SectionTitle>Technical skills</SectionTitle>
                  <div className="mt-2.5 space-y-2">
                    {skillGroups.map((group) => (
                      <div key={group.label}>
                        <div className="font-mono text-[8px] uppercase tracking-[0.1em] text-[#7a8070]">
                          {group.label}
                        </div>
                        <div className="mt-0.5 text-[9.8px] leading-[1.5] text-[#454b3e]">
                          {group.items.slice(0, 5).join(" · ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </aside>

              <div className="order-1 md:order-2 print:order-2">
                <section>
                  <SectionTitle>Experience</SectionTitle>
                  <div className="mt-3 space-y-3.5">
                    {experience
                      .filter((item) => item.kind !== "Education")
                      .map((item) => (
                        <div key={`${item.org}-${item.role}`}>
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                            <div className="text-[12px] font-semibold">
                              {item.role}
                              <span className="font-normal text-[#5c6152]">
                                {" "}
                                · {item.org}
                              </span>
                            </div>
                            <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-[#7a8070]">
                              {item.period}
                            </div>
                          </div>
                          <p className="mt-1 text-[10.2px] leading-[1.55] text-[#454b3e]">
                            {item.summary}
                          </p>
                          <ul className="mt-1 space-y-0.5">
                            {item.bullets
                              .slice(0, item.kind === "Current" ? 2 : 1)
                              .map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex gap-1.5 text-[9.8px] leading-[1.5] text-[#555b4c]"
                                >
                                  <span className="mt-[5px] size-[2.5px] shrink-0 rounded-full bg-[#6f7a5a]" />
                                  {bullet}
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </section>

                <section className="mt-4">
                  <SectionTitle>Selected projects</SectionTitle>
                  <div className="mt-2.5 space-y-2.5">
                    {selectedProjects.map((project) => (
                      <div key={project.slug}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                          <span className="text-[11.5px] font-semibold">
                            <a
                              href={project.links[0]?.href}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:underline"
                            >
                              {project.title}
                            </a>
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-[#7a8070]">
                            {project.year} · {project.tags[0]}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[10.2px] leading-[1.5] text-[#454b3e]">
                          {project.subtitle}
                        </p>
                        <p className="mt-0.5 font-mono text-[8.5px] text-[#6f7a5a]">
                          {project.stats
                            ? project.stats
                                .map((stat) => `${stat.value} ${stat.label}`)
                                .join("  ·  ")
                            : project.metric
                              ? `${project.metric.value} ${project.metric.label}`
                              : project.stack.slice(0, 3).join("  ·  ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <footer className="mt-4 border-t border-[#dcd8cd] pt-3 font-mono text-[8px] uppercase tracking-[0.12em] text-[#8a8f80]">
              References available on request · {site.email}
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-[#e4e0d6] pb-1 font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#6f7a5a]">
      {children}
    </h2>
  );
}
