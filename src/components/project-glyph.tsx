import type { CSSProperties } from "react";
import {
  Activity,
  AlignLeft,
  BarChart3,
  Binary,
  Boxes,
  CircleDot,
  Cpu,
  Eye,
  Film,
  GitCommit,
  LineChart,
  Lock,
  Network,
  ScanLine,
  Search,
  Share2,
  SlidersHorizontal,
  Sparkles,
  Terminal,
  Type,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { GlyphKind } from "@/content/site";

const glyphIcons: Record<GlyphKind, LucideIcon> = {
  scan: ScanLine,
  agent: Sparkles,
  rank: BarChart3,
  graph: Network,
  crypto: Lock,
  index: Search,
  mask: Eye,
  cloud: Boxes,
  lines: AlignLeft,
  seam: SlidersHorizontal,
  federated: Share2,
  render: Film,
  chart: LineChart,
  causal: Activity,
  cricket: CircleDot,
  text: Type,
  terminal: Terminal,
  commit: GitCommit,
  threads: Cpu,
  syscall: Binary,
};

function projectCode(title: string) {
  return title
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((part) => part.slice(0, 2))
    .join("")
    .slice(0, 4)
    .toUpperCase();
}

type ProjectGlyphProps = {
  kind: GlyphKind;
  accent: string;
  title: string;
  large?: boolean;
  className?: string;
};

/**
 * A lightweight, CSS-only animated plate used on every compact project card.
 * The icon identifies the project; the scan line and orbit keep the card alive
 * without pulling in another canvas or animation library.
 */
export function ProjectGlyph({
  kind,
  accent,
  title,
  large = false,
  className = "",
}: ProjectGlyphProps) {
  const Icon = glyphIcons[kind];
  const code = projectCode(title);

  return (
    <div
      aria-hidden="true"
      data-project-glyph={kind}
      className={`project-glyph relative isolate overflow-hidden rounded-xl border border-line bg-ink ${
        large ? "project-glyph--large h-48 sm:h-56" : "h-28"
      } ${className}`}
      style={{ "--glyph-accent": accent } as CSSProperties}
    >
      <div className="project-glyph-grid" />
      <div className="project-glyph-beam" />
      <div className="project-glyph-orbit" />
      <div className="project-glyph-orbit project-glyph-orbit--b" />

      <div className="absolute inset-x-3 top-2.5 z-10 flex items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
        <span className="truncate">
          {code} / {kind}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5">
          <span
            className="size-1 rounded-full"
            style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
          />
          live
        </span>
      </div>

      <div className="absolute inset-0 z-[2] flex items-center justify-center">
        <Icon
          className={`project-glyph-icon ${large ? "size-16" : "size-10"}`}
          strokeWidth={1}
          style={{ color: accent }}
        />
      </div>

      <div className="absolute inset-x-3 bottom-2.5 z-10 flex items-end justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.14em]">
        <span className="truncate text-dim">{title}</span>
        <span className="shrink-0" style={{ color: accent }}>
          sys
        </span>
      </div>

      <div className="project-glyph-scan z-[3]" />
    </div>
  );
}
