import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Compass,
  FileText,
  Layers,
  Mail,
  MapPin,
  Route,
  UserRoundSearch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { hero, heroStats, site } from "@/content/site";
import { AskMyWork } from "@/components/ask-my-work";
import { InferenceCard } from "@/components/inference-card";
import { CountUp } from "@/components/count-up";
import { Ticker } from "@/components/ticker";
import { HeroField } from "@/components/hero-field";
import { HeroAtmosphere } from "@/components/hero-atmosphere";

const quickLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
  color: string;
}[] = [
  { label: "Why hire", href: "#why", icon: Compass, color: "#c8f751" },
  { label: "Projects", href: "#work", icon: BriefcaseBusiness, color: "#5eead4" },
  { label: "Skills", href: "#skills", icon: Layers, color: "#a78bfa" },
  { label: "Path", href: "#experience", icon: Route, color: "#fbbf24" },
  { label: "Contact", href: "#contact", icon: UserRoundSearch, color: "#ff6b4a" },
];

function HeroPortrait() {
  return (
    <span
      aria-hidden="true"
      className="hero-portrait relative grid size-14 shrink-0 place-items-center rounded-full border border-line-2 bg-panel/70 sm:size-16"
    >
      <span className="font-mono text-[15px] font-medium tracking-[-0.08em] text-chalk">
        SP
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" data-section="top" className="relative z-10 overflow-hidden">
      <HeroAtmosphere />
      <div className="relative">
        <HeroField />
        <div className="container-x relative z-10 pt-32 pb-14 sm:pt-36 lg:pt-40 lg:pb-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-20">
            <div>
              <div className="flex items-center gap-3.5">
                <HeroPortrait />
                <div>
                  <p className="eyebrow">
                    Hey, I&apos;m Shivendra{" "}
                    <span aria-hidden="true">👋</span>
                  </p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                    {site.focus}
                  </p>
                  <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-dim/80">
                    {site.profileLine}
                  </p>
                </div>
              </div>

              <h1 className="display mt-7 text-[clamp(2.8rem,6.2vw,5.2rem)]">
                Research <span className="text-lime">AI Engineer</span>
              </h1>

              <p className="mt-5 max-w-[32rem] text-[clamp(1.05rem,2.2vw,1.4rem)] font-medium leading-snug tracking-[-0.02em] text-chalk">
                I build ML systems that{" "}
                <span className="text-lime">scale</span> — and{" "}
                <span className="text-alert">catch fraud.</span>
              </p>

              <p className="mt-5 max-w-[34rem] text-[14px] leading-[1.75] text-dim">
                {hero.body}
              </p>

              <AskMyWork />

              <div className="mt-4 grid max-w-[34rem] grid-cols-3 gap-2 sm:grid-cols-5">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-panel/35 px-2 py-3 text-center backdrop-blur-sm transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-line-2 hover:bg-panel/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                    >
                      <Icon
                        className="size-4 transition-transform duration-200 group-hover:scale-110"
                        style={{ color: link.color }}
                        strokeWidth={1.6}
                      />
                      <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-dim transition-colors group-hover:text-chalk">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                <Link
                  href={site.resume}
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-lime px-5 text-[13px] font-medium text-on-accent transition-colors hover:bg-lime-dim"
                >
                  <FileText className="size-4" strokeWidth={1.8} />
                  View résumé
                  <ArrowUpRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.8}
                  />
                </Link>
                <a
                  href={`mailto:${site.email}?subject=Hello%20Shivendra`}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-line-2 bg-panel/50 px-5 text-[13px] text-chalk transition-colors hover:border-faint hover:bg-panel"
                >
                  <Mail className="size-4 text-lime" strokeWidth={1.7} />
                  Email me
                </a>
                <div className="ml-1 flex items-center gap-1.5">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="grid size-11 place-items-center rounded-full border border-line text-dim transition-colors hover:border-line-2 hover:text-chalk"
                  >
                    <GithubIcon className="size-[17px]" strokeWidth={1.6} />
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="grid size-11 place-items-center rounded-full border border-line text-dim transition-colors hover:border-line-2 hover:text-chalk"
                  >
                    <LinkedinIcon className="size-[17px]" strokeWidth={1.6} />
                  </a>
                  <a
                    href={site.codolio}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Codolio coding profile"
                    className="grid size-11 place-items-center rounded-full border border-line text-dim transition-colors hover:border-line-2 hover:text-chalk"
                  >
                    <Code2 className="size-[17px]" strokeWidth={1.6} />
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3" strokeWidth={1.6} />
                  {site.location} · IST
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="relative flex size-1.5">
                    <span className="dot-pulse absolute inline-flex size-full rounded-full bg-mint" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-mint" />
                  </span>
                  {site.availability}
                </span>
              </div>
            </div>

            <div className="lg:pl-2">
              <InferenceCard />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-ink px-5 py-6 sm:px-6">
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
                  <span
                    className="size-1 rounded-full"
                    style={{ backgroundColor: stat.accent }}
                  />
                  {stat.label}
                </div>
                <div className="mt-2 text-2xl font-medium tracking-[-0.03em] text-chalk sm:text-[1.75rem]">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-1 font-mono text-[9px] tracking-[0.04em] text-dim">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}
