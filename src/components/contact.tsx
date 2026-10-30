import { ArrowUpRight, Mail } from "lucide-react";
import { contact, site } from "@/content/site";
import { ContactActions } from "@/components/contact-actions";

export function Contact() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="contact-shell relative z-10 scroll-mt-16 overflow-hidden border-t border-line"
    >
      <div className="container-x relative py-20 sm:py-24 lg:py-28">
        <div data-reveal className="contact-panel">
          <span aria-hidden className="contact-orb contact-orb-a" />
          <span aria-hidden className="contact-orb contact-orb-b" />

          <div className="contact-top">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.1em] text-alert">06</span>
              <span className="h-px w-7 bg-line-2" />
              <span className="eyebrow">Contact</span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/25 bg-mint/[0.06] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-mint">
              <span className="relative flex size-1.5">
                <span className="dot-pulse absolute inline-flex size-full rounded-full bg-mint" />
                <span className="relative inline-flex size-1.5 rounded-full bg-mint" />
              </span>
              {site.availability}
            </span>
          </div>

          <div className="contact-grid">
            <div>
              <h2 className="contact-title">
                Let&apos;s make{" "}
                <span className="relative whitespace-nowrap text-alert">
                  fraud
                  <svg
                    aria-hidden
                    viewBox="0 0 200 12"
                    className="draw-line absolute -bottom-1 left-0 h-2 w-full text-alert/35"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8C40 3 80 2 120 5c30 2 55 3 78 1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                harder.
              </h2>
              <p className="mt-6 max-w-md text-[14px] leading-[1.8] text-dim">{contact.body}</p>
              <a
                href={`mailto:${site.email}`}
                className="contact-email mt-7 inline-flex items-center gap-2 rounded-full border border-line-2 bg-panel/55 px-4 py-2.5 font-mono text-[11px] tracking-[0.04em] text-chalk transition-colors hover:border-faint hover:bg-panel"
              >
                <Mail className="size-4 text-lime" strokeWidth={1.6} />
                {site.email}
                <ArrowUpRight className="size-3.5 text-faint" strokeWidth={1.6} />
              </a>
            </div>

            <div className="contact-side">
              <div className="contact-card">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                    Start here
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
                    {site.timezone}
                  </span>
                </div>
                <ContactActions
                  email={site.email}
                  github={site.github}
                  linkedin={site.linkedin}
                  codolio={site.codolio}
                />
                <p className="mt-5 border-t border-line pt-4 font-mono text-[8px] uppercase leading-relaxed tracking-[0.1em] text-faint">
                  {contact.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
