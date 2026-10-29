const items = [
  "Document forgery localization",
  "LLM evaluation & benchmarking",
  "Synthetic identity detection",
  "AML / KYC risk signals",
  "Retrieval at 100k documents",
  "Computer vision & segmentation",
  "Batched inference at 153 FPS",
  "Edge-aware inference",
  "Privacy-preserving ML",
  "Federated learning",
  "AI systems research",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-5 font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
            {item}
          </span>
          <span className="size-[3px] shrink-0 rounded-full bg-lime/70" />
        </span>
      ))}
    </div>
  );
}

/** Infinite keyword ticker. Two identical rows, translated -50%. */
export function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="group relative flex overflow-hidden border-t border-line bg-ink/60 py-3"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
