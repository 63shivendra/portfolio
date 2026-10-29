"use client";

import { useEffect, useState } from "react";
import { Check, FileText } from "lucide-react";

type Signal = { label: string; value: number; flag: boolean };

type Scenario = {
  file: string;
  size: string;
  kind: string;
  verdict: "TAMPERED" | "AUTHENTIC";
  score: number;
  latency: string;
  signals: Signal[];
  region: { top: string; left: string; width: string; height: string } | null;
  action: string;
};

const scenarios: Scenario[] = [
  {
    file: "invoice_0091.pdf",
    size: "2.4 MB",
    kind: "PDF",
    verdict: "TAMPERED",
    score: 98.2,
    latency: "17.5 ms",
    signals: [
      { label: "text stroke residual", value: 0.87, flag: true },
      { label: "metadata mismatch", value: 0.96, flag: true },
      { label: "layout consistency", value: 0.12, flag: false },
    ],
    region: { top: "47%", left: "49%", width: "38%", height: "8%" },
    action: "escalate → human review",
  },
  {
    file: "id_card_front.jpg",
    size: "1.1 MB",
    kind: "JPG",
    verdict: "TAMPERED",
    score: 94.6,
    latency: "16.9 ms",
    signals: [
      { label: "font inconsistency", value: 0.91, flag: true },
      { label: "copy-move region", value: 0.72, flag: true },
      { label: "substrate noise", value: 0.21, flag: false },
    ],
    region: { top: "31%", left: "17%", width: "32%", height: "13%" },
    action: "escalate → KYC re-verification",
  },
  {
    file: "salary_slip_mar.pdf",
    size: "860 KB",
    kind: "PDF",
    verdict: "AUTHENTIC",
    score: 3.8,
    latency: "15.2 ms",
    signals: [
      { label: "text stroke residual", value: 0.06, flag: false },
      { label: "metadata mismatch", value: 0.04, flag: false },
      { label: "layout consistency", value: 0.09, flag: false },
    ],
    region: null,
    action: "auto-approve → straight-through",
  },
];

const CYCLE = 7;
const LIME = "#c8f751";
const ALERT = "#ff6b4a";
const MINT = "#5eead4";

export function InferenceCard() {
  const [tick, setTick] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync with an external media query
    setReduced(query.matches);

    if (query.matches) return;

    const id = window.setInterval(() => setTick((v) => v + 1), 340);
    return () => window.clearInterval(id);
  }, []);

  const scenario = reduced
    ? scenarios[0]
    : scenarios[Math.floor(tick / CYCLE) % scenarios.length];
  const step = reduced ? 4 : Math.min(tick % CYCLE, 4);
  const tampered = scenario.verdict === "TAMPERED";
  const accent = tampered ? ALERT : MINT;

  return (
    <div className="relative">
      <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-lime/[0.05] blur-2xl" />

      <div
        aria-hidden="true"
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#090c11] text-[#e9ecf2] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
      >
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="size-2 rounded-full bg-[#3a404c]" />
            <span className="size-2 rounded-full bg-[#3a404c]" />
            <span className="size-2 rounded-full bg-[#3a404c]" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.08em] text-white/40">
            docroi://inspect
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">
            <span className="size-1.5 rounded-full bg-[#5eead4]" />
            live
          </span>
        </div>

        <div className="p-4 sm:p-5">
          {/* file row */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="grid size-7 shrink-0 place-items-center rounded border border-white/10 bg-white/[0.04]">
                <FileText className="size-3.5 text-white/60" strokeWidth={1.6} />
              </span>
              <span className="truncate font-mono text-[11px] text-white/80">
                {scenario.file}
              </span>
            </div>
            <span className="shrink-0 font-mono text-[9px] text-white/35">
              {scenario.size} · {scenario.kind}
            </span>
          </div>

          {/* document */}
          <div className="relative mt-3 overflow-hidden rounded-lg border border-white/[0.08] bg-[#0d1118] p-3.5">
            <div className="relative mx-auto w-[86%] rounded-[2px] bg-[#e7e3d8] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="h-1.5 w-16 rounded-[1px] bg-[#7b7568]" />
                  <div className="h-1 w-24 rounded-[1px] bg-[#b7b1a3]" />
                </div>
                <div className="h-4 w-10 rounded-[1px] border border-[#c9c3b4]" />
              </div>

              <div className="mt-3 space-y-1.5">
                {[92, 78, 84, 61].map((w, i) => (
                  <div
                    key={i}
                    className="h-[3px] rounded-[1px] bg-[#bdb7a9]"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>

              <div className="mt-3 space-y-1.5 border-t border-[#c9c3b4] pt-2">
                {[
                  [64, 22],
                  [58, 26],
                  [72, 18],
                ].map(([a, b], i) => (
                  <div key={i} className="flex items-center justify-between gap-3">
                    <div
                      className="h-[3px] rounded-[1px] bg-[#c4beb0]"
                      style={{ width: `${a}%` }}
                    />
                    <div
                      className="h-[3px] rounded-[1px] bg-[#a9a294]"
                      style={{ width: `${b}%` }}
                    />
                  </div>
                ))}
              </div>

              {scenario.region ? (
                <div
                  className="absolute rounded-[1px] border transition-all duration-500"
                  style={{
                    top: scenario.region.top,
                    left: scenario.region.left,
                    width: scenario.region.width,
                    height: scenario.region.height,
                    borderColor: accent,
                    background:
                      "color-mix(in srgb, #ff6b4a 16%, transparent)",
                    boxShadow: `0 0 18px ${accent}55`,
                  }}
                >
                  <span
                    className="absolute -top-5 left-0 whitespace-nowrap rounded-[2px] px-1.5 py-0.5 font-mono text-[8px] tracking-wide"
                    style={{ background: accent, color: "#090c11" }}
                  >
                    region 03 · 0.97
                  </span>
                  <span
                    className="absolute -left-px -top-px size-1.5 border-l border-t"
                    style={{ borderColor: accent }}
                  />
                  <span
                    className="absolute -right-px -top-px size-1.5 border-r border-t"
                    style={{ borderColor: accent }}
                  />
                  <span
                    className="absolute -bottom-px -left-px size-1.5 border-b border-l"
                    style={{ borderColor: accent }}
                  />
                  <span
                    className="absolute -bottom-px -right-px size-1.5 border-b border-r"
                    style={{ borderColor: accent }}
                  />
                </div>
              ) : (
                <div className="absolute right-6 top-6 grid size-6 place-items-center rounded-full bg-[#5eead4] text-[#062b27] shadow-[0_0_20px_#5eead466]">
                  <Check className="size-3.5" strokeWidth={3} />
                </div>
              )}
            </div>

            <div className="scanline" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.035)_95%)] bg-[length:100%_5px] opacity-40" />
          </div>

          {/* verdict */}
          <div className="mt-4 flex items-end justify-between gap-3">
            <div>
              <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                document verdict
              </div>
              <div
                className="mt-1 font-mono text-[15px] font-medium tracking-[0.06em]"
                style={{ color: accent }}
              >
                {scenario.verdict}
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                tamper score
              </div>
              <div className="font-mono text-2xl tabular-nums tracking-tight">
                {scenario.score.toFixed(1)}
                <span className="ml-1 text-[11px] text-white/45">%</span>
              </div>
            </div>
          </div>

          <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className="h-full rounded-full transition-[width] duration-300 ease-out"
              style={{
                width: reduced ? `${scenario.score}%` : `${(step / 4) * scenario.score}%`,
                background: accent,
              }}
            />
          </div>

          {/* signals */}
          <div className="mt-4 space-y-2">
            {scenario.signals.map((signal, index) => (
              <div key={signal.label} className="flex items-center gap-2.5">
                <span className="w-[124px] shrink-0 truncate font-mono text-[9px] text-white/45">
                  {signal.label}
                </span>
                <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <span
                    className="block h-full rounded-full transition-[width] duration-300"
                    style={{
                      width: step > index ? `${signal.value * 100}%` : "0%",
                      background: signal.flag ? ALERT : "#7f8898",
                    }}
                  />
                </span>
                <span className="w-7 shrink-0 text-right font-mono text-[9px] tabular-nums text-white/55">
                  {signal.value.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* console */}
          <div className="mt-4 flex min-h-8 items-center gap-2 rounded border border-white/[0.07] bg-black/40 px-2.5 py-1.5">
            <span className="font-mono text-[10px]" style={{ color: LIME }}>
              ›
            </span>
            <span className="truncate font-mono text-[10px] text-white/60">
              {step >= 4 ? scenario.action : "running inference…"}
            </span>
            <span className="ml-auto shrink-0 font-mono text-[9px] text-white/30">
              {scenario.latency}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-2">
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
            DocROI-Former v3 · 43.4M params
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
            RTX 5080
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
        <span>Fig. 01 — forged-document triage</span>
        <span className="inline-flex items-center gap-1.5 text-mint">
          <span className="size-1 rounded-full bg-mint" />
          inference demo
        </span>
      </div>

      <p className="sr-only">
        Example inference: an invoice is flagged as tampered with 98.2% confidence.
        A clean salary slip is auto-approved.
      </p>
    </div>
  );
}
