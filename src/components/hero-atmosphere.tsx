/**
 * The atmospheric layer behind the hero: a soft pearl, slow orbital paths and
 * three floating proof capsules. It is CSS-only so the hero stays static-export
 * friendly and the particle field can sit on top without a second canvas.
 */
export function HeroAtmosphere() {
  return (
    <div aria-hidden="true" className="hero-atmosphere">
      <span className="hero-aurora hero-aurora-a" />
      <span className="hero-aurora hero-aurora-b" />
      <span className="hero-aurora hero-aurora-c" />

      <span className="hero-orb">
        <span className="hero-orb-shade" />
        <span className="hero-orb-grid" />
        <span className="hero-orb-shine" />
        <span className="hero-orb-rim" />
      </span>

      <span className="hero-orbit hero-orbit-a">
        <span className="hero-orbit-dot" />
      </span>
      <span className="hero-orbit hero-orbit-b" />
      <span className="hero-satellite" />

      <span className="hero-float hero-float-a">
        <span className="hero-float-dot" />
        0 honeypots
      </span>
      <span className="hero-float hero-float-b">
        <span className="hero-float-dot" />
        153 FPS
      </span>
      <span className="hero-float hero-float-c">
        <span className="hero-float-dot" />
        100k docs
      </span>

      <span className="hero-scroll-cue">
        <span className="hero-scroll-line" />
        Scroll to the proof
      </span>
    </div>
  );
}
