import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { Spine } from "@/components/spine";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
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
      <Spine />
      <main id="main">
        <Hero />

        <Section
          id="work"
          index="01"
          label="Selected work"
          title="Proof, not promises."
          intro="Twenty-four systems, ordered by what a research or security team should care about first — forensics at the top, edge-aware inference and privacy-preserving training in the middle, the systems underneath included."
          accent="#ff6b4a"
        >
          <Work />
        </Section>

        <Section
          id="experience"
          index="02"
          label="Experience"
          title="Research, shipped."
          intro="Payment-scale research, independent product work and a master's at IIIT Hyderabad — after Infosys, GATE and PGEE."
          accent="#c8f751"
        >
          <Experience />
        </Section>

        <Section
          id="skills"
          index="03"
          label="Capabilities"
          title="The stack behind the systems."
          intro="Grouped by the problems I solve, not a wall of logos."
          accent="#5eead4"
        >
          <Skills />
        </Section>

        <Section
          id="about"
          index="04"
          label="About"
          title="Research that survives production."
          intro="The short version of a longer story."
          accent="#a78bfa"
        >
          <About />
        </Section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
