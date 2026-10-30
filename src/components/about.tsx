import { ArrowUpRight, Fingerprint } from "lucide-react";
import type { CSSProperties } from "react";
import { about, codolioStats, site } from "@/content/site";

const barcode = [
  1, 3, 1, 1, 4, 1, 2, 1, 3, 2, 1, 1, 4, 1, 2, 3, 1, 1, 2, 4, 1, 3, 2, 1,
];

const principles = [
  {
    title: "Measure the failure mode.",
    body: "A good average can hide the one case that matters. I look for the false alarm, the missed fraud, the p95 tail.",
  },
  {
    title: "Ship inside the constraint.",
    body: "Latency, model size, privacy and cost are part of the problem, not an afterthought once the notebook runs.",
  },
  {
    title: "Keep the data where it belongs.",
    body: "Federated training, encrypted channels and privacy budgets are design decisions, not compliance theatre.",
  },
];

export function About() {
  return (
    <div className="about-grid">
      <div className="about-left" data-reveal>
        <div className="about-card">
          <span aria-hidden className="about-card-glow" />
          <div className="scanline" />

          <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-faint">
            <span>subject / profile</span>
            <span>id {about.card.id}</span>
          </div>

          <div className="about-identity">
            <div>
              <div className="about-monogram">{site.initials}</div>
              <div className="mt-5 text-[17px] font-medium tracking-[-0.01em] text-chalk">{site.name}</div>
              <div className="mt-1 text-[11px] text-dim">Research AI Engineer · IIIT Hyderabad</div>
            </div>
            <span className="about-mark">
              <span className="dot-pulse absolute size-14 rounded-full border border-lime/20" />
              <Fingerprint className="size-6 text-faint" strokeWidth={1.3} />
            </span>
          </div>

          <dl className="about-facts">
            {[
              ["Focus", about.card.focus],
              ["Stack", about.card.stack],
              ["Base", "Hyderabad, IN"],
            ].map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="about-code">
            <div className="flex h-7 items-end gap-[2px]" aria-hidden>
              {barcode.map((width, index) => (
                <span key={index} className="block bg-faint/60" style={{ width: `${width}px`, height: "100%" }} />
              ))}
            </div>
            <span className="about-status">
              <span className="size-1 rounded-full bg-mint" />
              {about.card.status}
            </span>
          </div>
        </div>

        <div className="about-practice">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-faint">Practice / Codolio</span>
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
              <span className="text-[26px] leading-none font-medium tracking-[-0.04em] text-chalk">{codolioStats.solved}</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-faint">solved</span>
            </div>
            <span className="text-right font-mono text-[8px] leading-relaxed text-faint">
              {codolioStats.submissions} submissions
              <br />
              {codolioStats.maxStreak}-day max streak
            </span>
          </div>

          <div aria-hidden className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-line">
            <span className="bg-mint" style={{ width: `${(codolioStats.easy / codolioStats.solved) * 100}%` }} />
            <span className="bg-lime" style={{ width: `${(codolioStats.medium / codolioStats.solved) * 100}%` }} />
            <span className="bg-alert" style={{ width: `${(codolioStats.hard / codolioStats.solved) * 100}%` }} />
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
          className="about-gh"
        >
          More experiments on GitHub
          <ArrowUpRight className="size-3" strokeWidth={1.6} />
        </a>
      </div>

      <div className="about-right" data-reveal style={{ "--reveal-delay": "80ms" } as CSSProperties}>
        <p className="about-lead">{about.paragraphs[0]}</p>
        <div className="about-copy">
          {about.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about-principles">
          {principles.map((item, index) => (
            <div key={item.title} className="about-principle">
              <span className="about-principle-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-currently">
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-faint">Currently</div>
          <ul>
            {about.currently.map((item) => (
              <li key={item}>
                <span className="mt-[7px] size-1 shrink-0 rounded-full bg-mint" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-looking">
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-faint">What I&apos;m looking for</div>
          <p>{about.looking}</p>
        </div>
      </div>
    </div>
  );
}
