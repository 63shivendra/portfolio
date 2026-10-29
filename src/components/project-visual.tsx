import { Play } from "lucide-react";

const LIME = "#c8f751";
const ALERT = "#ff6b4a";
const MINT = "#5eead4";

function Frame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full min-h-[300px] w-full items-center justify-center overflow-hidden bg-[#0a0d12] p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.09)_1px,transparent_0)] bg-[length:16px_16px] opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.03] to-transparent" />
      <span className="absolute left-4 top-3.5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
        {label}
      </span>
      <div className="relative w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]">
        {children}
      </div>
    </div>
  );
}

function Specimen({ mask }: { mask: boolean }) {
  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-[3px] ${
        mask ? "bg-[#080b10]" : "bg-[#e7e3d8]"
      }`}
    >
      {mask ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:11px_11px]" />
          <div className="absolute left-[9%] top-[11%] h-[7%] w-[54%] rounded-[1px] bg-[#ff6b4a]/75 blur-[0.6px]" />
          <div className="absolute left-[9%] top-[25%] h-[2.5%] w-[66%] bg-[#ff6b4a]/25" />
          <div className="absolute left-[9%] top-[33%] h-[2.5%] w-[48%] bg-[#ff6b4a]/20" />
          <div className="absolute right-[8%] top-[38%] h-[13%] w-[27%] rounded-[1px] bg-[#ff6b4a]/45 blur-[0.8px]" />
          <div className="absolute left-[9%] top-[52%] h-[9%] w-[38%] rounded-[1px] bg-[#ff6b4a]/85 blur-[0.4px]" />
          <div className="absolute left-[9%] top-[70%] h-[2%] w-[58%] bg-[#ff6b4a]/18" />
          <div className="absolute bottom-[9%] left-[9%] h-[4%] w-[80%] bg-[#ff6b4a]/30" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.22)_3px)]" />
          <span className="absolute right-1 top-1 font-mono text-[6px] text-[#ff6b4a]/70">
            σ 0.94
          </span>
        </>
      ) : (
        <div className="absolute inset-0 p-2.5">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="h-1.5 w-9 rounded-[1px] bg-[#6f6a5e]" />
              <div className="h-[3px] w-14 rounded-[1px] bg-[#b7b1a3]" />
            </div>
            <div className="h-2.5 w-7 rounded-[1px] border border-[#c9c3b4]" />
          </div>

          <div className="mt-3 space-y-1.5">
            {[92, 74, 84, 58].map((w, i) => (
              <div
                key={i}
                className="h-[3px] rounded-[1px] bg-[#bdb7a9]"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>

          <div className="mt-3 flex gap-2">
            <div className="h-11 w-9 shrink-0 rounded-[1px] bg-[#c9c3b4]" />
            <div className="flex-1 space-y-1.5 pt-0.5">
              {[88, 64, 76].map((w, i) => (
                <div
                  key={i}
                  className="h-[3px] rounded-[1px] bg-[#c4beb0]"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-[#c9c3b4] pt-2">
            <div className="h-1.5 w-10 rounded-[1px] bg-[#8e887a]" />
            <div className="h-2 w-12 rounded-[1px] bg-[#7b7568]" />
          </div>

          <div className="mt-2 space-y-1">
            {[96, 88, 92].map((w, i) => (
              <div
                key={i}
                className="h-[2px] rounded-[1px] bg-[#cec8ba]"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>

          <div
            className="absolute border"
            style={{
              top: "51%",
              left: "8%",
              width: "39%",
              height: "10%",
              borderColor: ALERT,
              background: "rgba(255,107,74,0.14)",
              boxShadow: "0 0 16px rgba(255,107,74,0.28)",
            }}
          >
            <span
              className="absolute -top-[14px] left-0 whitespace-nowrap px-1 py-[1px] font-mono text-[6px] tracking-wide"
              style={{ background: ALERT, color: "#0a0d12" }}
            >
              0.97
            </span>
          </div>

          <div
            className="absolute border border-dashed"
            style={{
              top: "37%",
              right: "7%",
              width: "28%",
              height: "14%",
              borderColor: "rgba(255,107,74,0.5)",
              background: "rgba(255,107,74,0.07)",
            }}
          />
        </div>
      )}
    </div>
  );
}

function DocROI() {
  const f1 = [
    { label: "DocROI-Former", score: 80.72, width: 90.7, tone: LIME },
    { label: "CVPR'23 DTD", score: 79.2, width: 40, tone: "rgba(255,255,255,0.24)" },
  ];

  return (
    <Frame label="forensic mask / 384 × 384">
      <div className="mx-auto w-full max-w-[352px]">
        <div className="rounded-lg border border-white/10 bg-[#0b0e14] p-2.5 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)]">
          <div className="flex items-center justify-between px-0.5 pb-2 font-mono text-[7px] uppercase tracking-[0.16em]">
            <span className="text-white/35">invoice_0417.jpg</span>
            <span className="inline-flex items-center gap-1 text-white/30">
              <span className="size-[3px] rounded-full" style={{ background: ALERT }} />
              6 regions
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="mb-1 flex items-center justify-between font-mono text-[6.5px] uppercase tracking-[0.16em]">
                <span className="text-white/40">input</span>
                <span className="text-white/20">rgb</span>
              </div>
              <Specimen mask={false} />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between font-mono text-[6.5px] uppercase tracking-[0.16em]">
                <span style={{ color: ALERT }}>predicted mask</span>
                <span className="text-white/20">p&gt;0.5</span>
              </div>
              <Specimen mask />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between px-0.5 font-mono text-[6.5px] uppercase tracking-[0.12em] text-white/30">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-[5px] rounded-[1px]" style={{ background: ALERT }} />
              tamper
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span
                className="size-[5px] rounded-[1px] border border-dashed"
                style={{ borderColor: "rgba(255,107,74,0.6)" }}
              />
              low confidence
            </span>
            <span>384 × 384</span>
          </div>

          <div
            className="mt-2.5 flex items-center justify-between rounded-md border px-2.5 py-2"
            style={{
              borderColor: "rgba(255,107,74,0.28)",
              background: "rgba(255,107,74,0.06)",
            }}
          >
            <div>
              <div className="font-mono text-[6.5px] uppercase tracking-[0.18em] text-white/35">
                document verdict
              </div>
              <div
                className="mt-0.5 font-mono text-[12px] font-medium tracking-[0.12em]"
                style={{ color: ALERT }}
              >
                TAMPERED
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[6.5px] uppercase tracking-[0.18em] text-white/35">
                tamper score
              </div>
              <div
                className="font-mono text-[19px] leading-none tabular-nums tracking-tight"
                style={{ color: ALERT }}
              >
                94.6
                <span className="ml-0.5 text-[9px] text-white/40">%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-2">
          <div className="flex items-center justify-between font-mono text-[6.5px] uppercase tracking-[0.16em]">
            <span className="text-white/35">pixel f1 · axis 78–81</span>
            <span style={{ color: LIME }}>+1.52</span>
          </div>

          <div className="mt-2 space-y-1.5">
            {f1.map((row) => (
              <div key={row.label} className="flex items-center gap-2">
                <span className="w-[68px] shrink-0 font-mono text-[7px] text-white/45">
                  {row.label}
                </span>
                <span className="h-[5px] flex-1 overflow-hidden rounded-[1px] bg-white/[0.06]">
                  <span
                    className="block h-full rounded-[1px]"
                    style={{ width: `${row.width}%`, background: row.tone }}
                  />
                </span>
                <span className="w-9 shrink-0 text-right font-mono text-[7px] tabular-nums text-white/60">
                  {row.score.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-1.5 flex items-center gap-2 font-mono text-[6px] text-white/20">
            <span className="w-[68px] shrink-0" />
            <span className="flex flex-1 justify-between">
              <span>78</span>
              <span>79</span>
              <span>80</span>
              <span>81</span>
            </span>
            <span className="w-9 shrink-0" />
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Ranking() {
  const rows = [
    { rank: "01", width: 78, score: "0.981" },
    { rank: "02", width: 66, score: "0.964" },
    { rank: "03", width: 72, score: "0.947" },
    { rank: "04", width: 58, score: "0.112", flag: true },
    { rank: "05", width: 63, score: "0.902" },
  ];

  return (
    <Frame label="ranker / reciprocal rank fusion">
      <div className="mx-auto w-full max-w-[300px]">
        <div className="rounded-md border border-white/10 bg-[#0d1118]">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
            <span>candidate_id</span>
            <span>rrf score</span>
          </div>
          <div className="divide-y divide-white/[0.06]">
            {rows.map((row) => (
              <div
                key={row.rank}
                className={`flex items-center gap-2.5 px-3 py-2.5 ${
                  row.flag ? "bg-[#ff6b4a]/[0.06]" : ""
                }`}
              >
                <span className="w-4 font-mono text-[8px] text-white/30">
                  {row.rank}
                </span>
                <span
                  className={`grid size-5 shrink-0 place-items-center rounded-sm font-mono text-[7px] ${
                    row.flag
                      ? "bg-[#ff6b4a]/15 text-[#ff6b4a]"
                      : "bg-white/[0.06] text-white/45"
                  }`}
                >
                  {row.flag ? "!" : "ML"}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block h-[3px] rounded-full ${
                      row.flag ? "bg-[#ff6b4a]/50" : "bg-white/25"
                    }`}
                    style={{ width: `${row.width}%` }}
                  />
                  <span
                    className={`mt-1.5 block h-[3px] rounded-full ${
                      row.flag ? "bg-[#ff6b4a]/20" : "bg-white/10"
                    }`}
                    style={{ width: `${row.width * 0.6}%` }}
                  />
                </span>
                {row.flag ? (
                  <span className="rounded-sm bg-[#ff6b4a]/15 px-1 py-0.5 font-mono text-[6px] uppercase tracking-wider text-[#ff6b4a]">
                    honeypot
                  </span>
                ) : (
                  <span className="font-mono text-[8px] tabular-nums text-white/55">
                    {row.score}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.12em] text-white/35">
          <span>8 rankers → rrf</span>
          <span className="inline-flex items-center gap-1.5" style={{ color: MINT }}>
            <span className="size-1 rounded-full" style={{ background: MINT }} />
            0 leaks
          </span>
        </div>
      </div>
    </Frame>
  );
}

function Retrieval() {
  const bars = [
    { label: "raw", width: 100, note: "651 MB", tone: "rgba(255,255,255,0.18)" },
    { label: "zlib", width: 40.4, note: "−59.6%", tone: MINT },
    { label: "elias-fano", width: 25.2, note: "−74.8%", tone: LIME },
  ];

  return (
    <Frame label="selfindex / index size">
      <div className="mx-auto w-full max-w-[300px]">
        <div className="rounded-md border border-white/10 bg-[#0d1118] p-3">
          <div className="flex items-center gap-1.5 rounded bg-black/40 px-2 py-1.5 font-mono text-[8px]">
            <span style={{ color: LIME }}>›</span>
            <span className="text-white/55">AND(retrieval, fraud, document)</span>
            <span className="ml-auto text-white/25">p95</span>
          </div>

          <div className="mt-4 space-y-3">
            {bars.map((bar) => (
              <div key={bar.label}>
                <div className="mb-1.5 flex items-center justify-between font-mono text-[8px]">
                  <span className="text-white/40">{bar.label}</span>
                  <span style={{ color: bar.tone }}>{bar.note}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-sm bg-white/[0.05]">
                  <div
                    className="h-full rounded-sm transition-[width] duration-700"
                    style={{ width: `${bar.width}%`, background: bar.tone }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-white/[0.08] bg-white/[0.08]">
            {[
              ["docs", "100k"],
              ["tokens", "15M"],
              ["cfgs", "5"],
            ].map(([k, v]) => (
              <div key={k} className="bg-[#0d1118] px-2 py-2 text-center">
                <div className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/30">
                  {k}
                </div>
                <div className="mt-0.5 font-mono text-[10px]" style={{ color: LIME }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 text-center font-mono text-[8px] uppercase tracking-[0.12em] text-white/30">
          benchmarked against elasticsearch
        </div>
      </div>
    </Frame>
  );
}

function Growth() {
  return (
    <Frame label="render / 1080 × 1920 · 30 fps">
      <div className="mx-auto flex w-full max-w-[310px] items-end justify-center gap-2">
        <div className="relative h-32 w-[58px] -rotate-6 overflow-hidden rounded-md border border-white/10 bg-gradient-to-b from-[#24321a] to-[#0c1118] opacity-80">
          <div className="absolute inset-x-1.5 top-2 space-y-1">
            <div className="h-1 w-8 rounded bg-white/25" />
            <div className="h-1 w-10 rounded bg-white/10" />
          </div>
          <div className="absolute bottom-2 left-1/2 grid size-5 -translate-x-1/2 place-items-center rounded-full bg-white/15">
            <Play className="size-2 text-white/60" fill="currentColor" />
          </div>
        </div>

        <div className="relative h-44 w-[78px] overflow-hidden rounded-lg border border-white/15 bg-gradient-to-b from-[#c8f751]/25 via-[#1b2a14] to-[#0b0f14] shadow-[0_18px_40px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-2 py-1.5 font-mono text-[5px] text-white/45">
            <span>REEL 03</span>
            <span>12s</span>
          </div>
          <div className="absolute inset-x-2 top-8 space-y-1.5">
            <div className="h-[3px] w-full rounded bg-white/50" />
            <div className="h-[3px] w-3/4 rounded bg-white/30" />
            <div className="h-[3px] w-1/2 rounded bg-[#c8f751]/70" />
          </div>
          <div className="absolute bottom-7 left-1/2 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm">
            <Play className="size-3 text-white" fill="currentColor" />
          </div>
          <div className="absolute inset-x-2 bottom-2">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-2/3 rounded-full" style={{ background: LIME }} />
            </div>
          </div>
        </div>

        <div className="relative h-32 w-[58px] rotate-6 overflow-hidden rounded-md border border-white/10 bg-gradient-to-b from-[#2a1f2e] to-[#0c1118] opacity-80">
          <div className="absolute inset-x-1.5 top-2 space-y-1">
            <div className="h-1 w-9 rounded bg-white/25" />
            <div className="h-1 w-6 rounded bg-white/10" />
          </div>
          <div className="absolute bottom-2 left-1/2 grid size-5 -translate-x-1/2 place-items-center rounded-full bg-white/15">
            <Play className="size-2 text-white/60" fill="currentColor" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 w-full max-w-[300px]">
        <div className="flex items-end justify-between gap-[3px]">
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              className="w-full rounded-[1px]"
              style={{
                height: `${i % 4 === 0 ? 12 : i % 2 === 0 ? 7 : 4}px`,
                background: i % 4 === 0 ? LIME : "rgba(255,255,255,0.16)",
              }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between font-mono text-[7px] uppercase tracking-[0.14em] text-white/30">
          <span>95.7 bpm grid</span>
          <span>ffmpeg · mp4</span>
        </div>
      </div>
    </Frame>
  );
}

function Job() {
  const checks = [
    { label: "company registry match", value: "0.94", flag: false },
    { label: "salary realism", value: "0.81", flag: true },
    { label: "recruiter identity", value: "0.76", flag: true },
    { label: "description reuse", value: "0.38", flag: false },
    { label: "contact domain", value: "0.88", flag: true },
  ];

  return (
    <Frame label="job authenticity / page context">
      <div className="mx-auto w-full max-w-[336px]">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0b0e14]">
          <div className="flex items-center gap-2 border-b border-white/[0.07] px-2.5 py-2">
            <span className="flex gap-1" aria-hidden>
              <span className="size-1.5 rounded-full bg-white/15" />
              <span className="size-1.5 rounded-full bg-white/15" />
              <span className="size-1.5 rounded-full bg-white/15" />
            </span>
            <span className="ml-1 flex-1 truncate rounded-sm bg-black/40 px-2 py-1 font-mono text-[7px] text-white/35">
              jobs.example.com/role/4821
            </span>
            <span
              className="font-mono text-[6px] uppercase tracking-[0.14em]"
              style={{ color: ALERT }}
            >
              analysing
            </span>
          </div>

          <div className="p-2.5">
            <div className="rounded-md border border-white/[0.08] bg-white/[0.03] p-2.5">
              <div className="flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.14em] text-white/30">
                <span>listing extract</span>
                <span>10k chars</span>
              </div>
              <div className="mt-1.5 text-[10.5px] font-medium text-white/85">
                Senior Data Scientist
              </div>
              <div className="mt-0.5 font-mono text-[7.5px] text-white/35">
                Nova Analytics · Remote · $180k
              </div>
              <div className="mt-2 space-y-1">
                {[96, 88, 72].map((width) => (
                  <div
                    key={width}
                    className="h-[3px] rounded-[1px] bg-white/12"
                    style={{ width: `${width}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-2 space-y-1">
              {checks.map((check) => (
                <div
                  key={check.label}
                  className="flex items-center gap-2 rounded border border-white/[0.06] bg-white/[0.02] px-2 py-1.5"
                >
                  <span
                    className="grid size-3.5 shrink-0 place-items-center rounded-full font-mono text-[7px]"
                    style={{
                      background: check.flag
                        ? "rgba(255,107,74,0.16)"
                        : "rgba(200,247,81,0.14)",
                      color: check.flag ? ALERT : LIME,
                    }}
                  >
                    {check.flag ? "!" : "✓"}
                  </span>
                  <span className="flex-1 font-mono text-[7.5px] text-white/45">
                    {check.label}
                  </span>
                  <span
                    className="font-mono text-[7px] tabular-nums"
                    style={{ color: check.flag ? ALERT : "rgba(255,255,255,0.35)" }}
                  >
                    {check.value}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-2.5 flex items-center justify-between rounded-md border px-2.5 py-2"
              style={{
                borderColor: "rgba(255,107,74,0.28)",
                background: "rgba(255,107,74,0.06)",
              }}
            >
              <div>
                <div className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/35">
                  verdict
                </div>
                <div
                  className="mt-0.5 font-mono text-[11px] tracking-[0.1em]"
                  style={{ color: ALERT }}
                >
                  LIKELY FRAUDULENT
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/35">
                  risk
                </div>
                <div
                  className="font-mono text-[18px] leading-none tabular-nums"
                  style={{ color: ALERT }}
                >
                  0.82
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.12em] text-white/30">
          <span>5 checks · 1 LLM pass</span>
          <span style={{ color: MINT }}>offline fallback</span>
        </div>
      </div>
    </Frame>
  );
}

const FL = "#a78bfa";

function Federated() {
  return (
    <Frame label="federated / 5 rounds">
      <div className="mx-auto w-full max-w-[340px]">
        <div className="rounded-lg border border-white/10 bg-[#0b0e14] p-3">
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "hospital A", model: "MLP · PyTorch", bars: [78, 62, 88] },
              { name: "hospital B", model: "SVM · RBF", bars: [66, 84, 58] },
            ].map((client) => (
              <div
                key={client.name}
                className="rounded-md border border-white/10 bg-white/[0.03] p-2"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[6px] uppercase tracking-[0.14em]"
                    style={{ color: FL }}
                  >
                    {client.name}
                  </span>
                  <span className="font-mono text-[5.5px] text-white/25">
                    local
                  </span>
                </div>
                <div className="mt-1 font-mono text-[7.5px] text-white/60">
                  {client.model}
                </div>
                <div className="mt-2 space-y-1">
                  {client.bars.map((width, i) => (
                    <div
                      key={i}
                      className="h-[3px] rounded-full"
                      style={{
                        width: `${width}%`,
                        background:
                          i === 1 ? "rgba(167,139,250,0.55)" : "rgba(255,255,255,0.14)",
                      }}
                    />
                  ))}
                </div>
                <div className="mt-2 font-mono text-[5.5px] uppercase tracking-[0.1em] text-white/25">
                  raw data stays
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex h-11 items-center justify-center">
            <span
              className="absolute left-1/4 top-0 h-4 border-l border-dashed"
              style={{ borderColor: "rgba(167,139,250,0.4)" }}
            />
            <span
              className="absolute right-1/4 top-0 h-4 border-l border-dashed"
              style={{ borderColor: "rgba(167,139,250,0.4)" }}
            />
            <span
              className="absolute inset-x-1/4 top-4 h-px"
              style={{ background: "rgba(167,139,250,0.35)" }}
            />
            <span
              className="absolute left-1/2 top-4 h-4 w-px"
              style={{ background: "rgba(167,139,250,0.45)" }}
            />
            <span
              className="relative mt-3 rounded-full border px-2 py-0.5 font-mono text-[6px] uppercase tracking-[0.14em]"
              style={{
                borderColor: "rgba(167,139,250,0.35)",
                background: "#0b0e14",
                color: FL,
              }}
            >
              probabilities only
            </span>
          </div>

          <div
            className="rounded-md border px-2.5 py-2"
            style={{
              borderColor: "rgba(167,139,250,0.3)",
              background: "rgba(167,139,250,0.07)",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/35">
                  aggregator
                </div>
                <div className="mt-0.5 font-mono text-[9px] text-white/75">
                  probability averaging
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/35">
                  round
                </div>
                <div
                  className="font-mono text-[15px] leading-none tabular-nums"
                  style={{ color: FL }}
                >
                  05
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="h-[3px] flex-1 rounded-full"
                  style={{ background: i < 4 ? FL : "rgba(167,139,250,0.25)" }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-3 gap-2 font-mono text-[7px]">
          {[
            ["66,180", "records"],
            ["44", "features"],
            ["7", "metrics"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded border border-white/10 bg-white/[0.03] px-2 py-1.5"
            >
              <span className="text-white/35">{label}</span>
              <span style={{ color: FL }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function ProjectVisual({
  kind,
}: {
  kind: "docroi" | "ranking" | "retrieval" | "growth" | "job" | "federated";
}) {
  switch (kind) {
    case "docroi":
      return <DocROI />;
    case "ranking":
      return <Ranking />;
    case "retrieval":
      return <Retrieval />;
    case "growth":
      return <Growth />;
    case "job":
      return <Job />;
    case "federated":
      return <Federated />;
  }
}
