import type { LucideIcon } from "lucide-react";
import {
  AlignJustify,
  ArrowLeftRight,
  BadgeCheck,
  Box,
  Cpu,
  Database,
  FileSearch,
  Files,
  GitCommit,
  HeartPulse,
  KeyRound,
  Layers,
  ListFilter,
  Megaphone,
  MessageSquareText,
  Network,
  ScrollText,
  Shrink,
  Stethoscope,
  Target,
  Terminal,
  TrendingUp,
  Vote,
  Wind,
} from "lucide-react";

export type ProjectVisual = {
  accent: string;
  icon: LucideIcon;
};

/**
 * One identity per project: a unique accent and a unique line icon. The art
 * direction stays project-specific; this registry is what gives each card,
 * brief and search result an immediately recognisable visual signature.
 */
const projectVisuals: Record<string, ProjectVisual> = {
  docroi: { accent: "#ff6b4a", icon: FileSearch },
  "job-authenticity": { accent: "#f59e0b", icon: BadgeCheck },
  "candidate-ranking": { accent: "#f43f5e", icon: ListFilter },
  "nexus-stitch": { accent: "#fb923c", icon: Network },
  "secure-doctor": { accent: "#2dd4bf", icon: Stethoscope },
  "blockchain-voting": { accent: "#a78bfa", icon: Vote },
  "ddes-channel": { accent: "#60a5fa", icon: KeyRound },
  selfindex: { accent: "#5eead4", icon: Database },
  "multitask-unet": { accent: "#c8f751", icon: Layers },
  "point-cloud": { accent: "#22d3ee", icon: Box },
  "line-segmentation": { accent: "#a3e635", icon: AlignJustify },
  "seam-carving": { accent: "#f472b6", icon: Shrink },
  "federated-healthcare": { accent: "#34d399", icon: HeartPulse },
  "growth-engine": { accent: "#e879f9", icon: Megaphone },
  "demand-forecasting": { accent: "#38bdf8", icon: TrendingUp },
  "causal-traffic": { accent: "#84cc16", icon: Wind },
  "cricket-deception": { accent: "#facc15", icon: Target },
  "text-summarizer": { accent: "#818cf8", icon: ScrollText },
  "text-similarity": { accent: "#fbbf24", icon: Files },
  "tweet-sentiment": { accent: "#fb7185", icon: MessageSquareText },
  "posix-shell": { accent: "#94a3b8", icon: Terminal },
  "mini-vcs": { accent: "#c084fc", icon: GitCommit },
  "threads-sim": { accent: "#67e8f9", icon: Cpu },
  "file-reversal": { accent: "#fca5a5", icon: ArrowLeftRight },
};

export function getProjectVisual(slug: string): ProjectVisual {
  return projectVisuals[slug] ?? { accent: "#c8f751", icon: Box };
}
