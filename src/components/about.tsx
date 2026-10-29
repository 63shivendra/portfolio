import { ArrowUpRight, Fingerprint } from "lucide-react";
import { about, codolioStats, site } from "@/content/site";

const barcode = [
  1, 3, 1, 1, 4, 1, 2, 1, 3, 2, 1, 1, 4, 1, 2, 3, 1, 1, 2, 4, 1, 3, 2, 1,
];

export function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
      <div data-reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-panel/40 p-6">
          <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-lime/[0.06] blur-3xl" />
          <div className="scanline" />

          <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-faint">
            <span>subject / profile</span>
            <span>id {about.card.id}</span>
          </div>

          <div className="mt-8 flex items-start justify-between gap-4">
            <div>
              <div className="font-mono text-[64px] leading-none tracking-[-0.07em] text-lime">
                {site.initials}
              </div>
              <div className="mt-5 text-[17px] font-medium tracking-[-0.01em] text-chalk">
                {site.name}
              </div>
              <div className="mt-1 text-[11px] text-dim">
                Research AI Engineer · IIIT Hyderabad
              </div>
            </div>
            <span className="relative grid size-14 shrink-0 place-items-center rounded-full border border-line-2 bg-ink/40">
              <span className="dot-pulse absolute size-14 rounded-full border border-lime/20" />
              <Fingerprint className="size-6 text-faint" strokeWidth={1.3} />
            </span>
          </div>

          <dl className="mt-8 space-y-2.5 border-t border-line pt-4 font-mono text-[9px] uppercase tracking-[0.1em]">
            {[
              ["Focus", about.card.focus],
              ["Stack", about.card.stack],
              ["Base", "Hyderabad, IN"],
            ].map(([key, value]) => (
              <div key={key} className="flex items-start justify-between gap-4">
                <dt className="text-faint">{key}</dt>
                <dd className="text-right text-dim">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex items-end justify-between gap-4 border-t border-line pt-4">
            <div className="flex h-7 items-end gap-[2px]" aria-hidden>
              {barcode.map((width, index) => (
                <span
                  key={index}
                  className="block bg-faint/60"
                  style={{ width: `${width}px`, height: "100%" }}
                />
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-mint">
              <span className="size-1 rounded-full bg-mint" />
              {about.card.status}
            </span>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-line bg-panel/30 p-4">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-faint">
              Practice / Codolio
            </span>
            <a
              href={site.codolio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[8px] uppercase tracking-[0.12em] text-dim transition-colors hover:text-lime"
            >
              @hex
              <ArrowUpRight className="size-2.5" strokeWidth={1.7} />
            </a>
          </div>

          <div className="mt-3 flex items-end justify-between gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-[26px] leading-none font-medium tracking-[-0.04em] text-chalk">
                {codolioStats.solved}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
                solved
              </span>
            </div>
            <span className="text-right font-mono text-[8px] leading-relaxed text-faint">
              {codolioStats.submissions} submissions
              <br />
              {codolioStats.maxStreak}-day max streak
            </span>
          </div>

          <div
            aria-hidden
            className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-line"
          >
            <span
              className="bg-mint"
              style={{
                width: `${(codolioStats.easy / codolioStats.solved) * 100}%`,
              }}
            />
            <span
              className="bg-lime"
              style={{
                width: `${(codolioStats.medium / codolioStats.solved) * 100}%`,
              }}
            />
            <span
              className="bg-alert"
              style={{
                width: `${(codolioStats.hard / codolioStats.solved) * 100}%`,
              }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between font-mono text-[8px] text-faint">
            <span>{codolioStats.easy} easy</span>
            <span>{codolioStats.medium} medium</span>
            <span>{codolioStats.hard} hard</span>
          </div>
        </div>

        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-dim transition-colors hover:text-lime"
        >
          More experiments on GitHub
          <ArrowUpRight className="size-3" strokeWidth={1.6} />
        </a>
      </div>

      <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
        <p className="text-[17px] leading-[1.7] tracking-[-0.01em] text-chalk">
          {about.paragraphs[0]}
        </p>
        <div className="mt-5 space-y-4 text-[13px] leading-[1.85] text-dim">
          {about.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-line bg-panel/30 p-5">
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-faint">
            Currently
          </div>
          <ul className="mt-3 space-y-2">
            {about.currently.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-[12px] leading-relaxed text-dim"
              >
                <span className="mt-[7px] size-1 shrink-0 rounded-full bg-mint" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-l-2 border-lime pl-4">
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-faint">
            What I&apos;m looking for
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-dim">
            {about.looking}
          </p>
        </div>
      </div>
    </div>
  );
}
