import { contact, site } from "@/content/site";
import { ContactActions } from "@/components/contact-actions";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-16 overflow-hidden border-t border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-alert/[0.06] blur-[100px]"
      />

      <div className="container-x relative py-20 sm:py-24 lg:py-28">
        <div
          data-reveal
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.1em] text-alert">
                05
              </span>
              <span className="h-px w-7 bg-line-2" />
              <span className="eyebrow">Contact</span>
            </div>

            <h2 className="display mt-6 text-[clamp(2.75rem,7vw,5.1rem)]">
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
          </div>

          <div>
            <p className="max-w-md text-[14px] leading-[1.8] text-dim">
              {contact.body}
            </p>

            <ContactActions
              email={site.email}
              github={site.github}
              linkedin={site.linkedin}
              codolio={site.codolio}
            />

            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
              {contact.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
