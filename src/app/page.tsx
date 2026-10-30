import {
  Compass,
  Fingerprint,
  Layers,
  Route,
  Wrench,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { JourneyRail } from "@/components/journey-rail";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { WhyHire } from "@/components/why-hire";
import { Work } from "@/components/work";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Research AI Engineer",
  description: site.description,
  worksFor: {
    "@type": "Organization",
    name: "National Payments Corporation of India (NPCI)",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "IIIT Hyderabad",
    },
    {
      "@type": "Organization",
      name: "Infosys",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  sameAs: [site.github, site.linkedin, site.codolio],
  knowsAbout: [
    "Applied AI",
    "AI Systems",
    "Machine Learning",
    "Edge AI",
    "Privacy-Preserving Machine Learning",
    "Federated Learning",
    "Model Efficiency",
    "Document Forensics",
    "Fraud Detection",
    "Anti-Money Laundering",
    "LLM Evaluation",
    "LLM Inference",
    "Computer Vision",
    "Information Retrieval",
    "Data Engineering",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <ScrollProgress />
      <div aria-hidden className="ambient">
        <span className="ambient-glow ambient-a" />
        <span className="ambient-glow ambient-b" />
        <span className="ambient-glow ambient-c" />
      </div>
      <div aria-hidden className="grain" />
      <Nav />
      <JourneyRail />
      <main id="main">
        <Hero />

        <Section
          id="why"
          index="01"
          label="Why hire"
          title="What you get when you hire me."
          intro="Four signals, each backed by a project you can inspect. The short version: research depth, a trust mindset, systems judgment and product instinct."
          accent="#c8f751"
          icon={Compass}
          next={{ label: "See the proof", href: "#work" }}
        >
          <WhyHire />
        </Section>

        <Section
          id="work"
          index="02"
          label="Selected work"
          title="Proof, not promises."
          intro="Twenty-four systems in seven categories. Each category opens with a lead case study; every project has its own visual language, build notes and public repository links."
          accent="#ff6b4a"
          icon={Layers}
          next={{ label: "How I got here", href: "#experience" }}
        >
          <Work />
        </Section>

        <Section
          id="experience"
          index="03"
          label="Experience"
          title="Research, shipped."
          intro="Payment-scale research, independent product work and a master's at IIIT Hyderabad — after Infosys, GATE and PGEE."
          accent="#c8f751"
          icon={Route}
          next={{ label: "See the stack", href: "#skills" }}
        >
          <Experience />
        </Section>

        <Section
          id="skills"
          index="04"
          label="Capabilities"
          title="The stack behind the systems."
          intro="Grouped by the problems I solve, not a wall of logos. The tools change; the judgment is the point."
          accent="#5eead4"
          icon={Wrench}
          next={{ label: "The person behind it", href: "#about" }}
        >
          <Skills />
        </Section>

        <Section
          id="about"
          index="05"
          label="About"
          title="Research that survives production."
          intro="The short version of a longer story."
          accent="#a78bfa"
          icon={Fingerprint}
          next={{ label: "Start a conversation", href: "#contact" }}
        >
          <About />
        </Section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
