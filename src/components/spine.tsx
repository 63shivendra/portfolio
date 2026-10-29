/**
 * A small editorial spine on wide screens. It is decorative, but it gives the
 * page the feel of a bound research report rather than a stack of sections.
 */
export function Spine() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="size-1 rounded-full bg-lime/80" />
        <span className="h-12 w-px bg-line-2" />
        <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-faint [writing-mode:vertical-rl]">
          Shivendra Pratap Singh
        </span>
        <span className="h-12 w-px bg-line-2" />
        <span className="font-mono text-[7px] tracking-[0.2em] text-faint/70 [writing-mode:vertical-rl]">
          17.38° N · 78.48° E
        </span>
        <span className="h-12 w-px bg-line-2" />
        <span className="size-1 rounded-full bg-alert/80" />
      </div>
    </div>
  );
}
