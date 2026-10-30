/**
 * Single source of truth for the site.
 *
 * Every metric here traces to a public repository, a README, or a report in
 * that repository. Items marked CONFIRM still need Shivendra's sign-off.
 */

// The GitHub Pages workflow sets this to the deployed origin + repo path.
// Override locally in .env.local if you want an exact canonical URL.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivendra.dev"
).replace(/\/+$/, "");

export const site = {
  name: "Shivendra Pratap Singh",
  firstName: "Shivendra",
  initials: "SP",
  role: "Research AI Engineer",
  focus: "AI systems · edge AI · privacy-preserving ML",
  url: siteUrl,
  email: "63hack63@gmail.com",
  location: "Hyderabad, India",
  timezone: "IST · UTC+5:30",
  availability: "Open to remote / hybrid",
  profileLine: "NPCI · IIIT Hyderabad M.Tech '26 · ex-Infosys",
  github: "https://github.com/63shivendra",
  linkedin: "https://www.linkedin.com/in/shivendra-pratap63/",
  codolio: "https://codolio.com/profile/hex/problemSolving/leetcode",
  resume: "/resume",
  description:
    "Research AI Engineer at NPCI and M.Tech (CS) student at IIIT Hyderabad. I build and evaluate ML systems for fraud, document forensics and retrieval — with a focus on edge-efficient inference and privacy-preserving training. Open to remote or hybrid roles in applied AI, AI systems, ML research and data.",
};

export const navItems = [
  { label: "Why hire", href: "#why" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "AI systems · edge AI · privacy-preserving ML · fraud detection",
  eyebrowMobile: ["AI systems · edge AI", "Privacy-preserving ML · fraud"],
  headline: "I build ML systems that scale — and catch fraud.",
  body: "At NPCI and IIIT Hyderabad, I take models from idea to production: retrieval over 100k documents, 153 FPS batched inference, federated training across hospitals, and calibration that holds when the input is adversarial.",
};

export const heroStats = [
  {
    value: "153 FPS",
    label: "batched inference",
    note: "43.4M params · 17.5 ms · 34% lighter",
    accent: "#c8f751",
  },
  {
    value: "100k",
    label: "records benchmarked",
    note: "documents · profiles · 15M tokens",
    accent: "#5eead4",
  },
  {
    value: "80.72%",
    label: "pixel F1",
    note: "DocROI · +1.52 over CVPR '23 DTD",
    accent: "#a78bfa",
  },
  {
    value: "100%",
    label: "document catch",
    note: "29,908 / 29,908 · 71 false alarms",
    accent: "#ff6b4a",
  },
];

/**
 * Role lenses for the hero selector. Each lens points at the evidence a
 * hiring manager for that role should read first. No invented claims: the
 * numbers match the project cards and the public repositories.
 */
export type RoleLens = {
  key: string;
  label: string;
  short: string;
  evidence: string;
  proofs: string[];
};

export const roleLenses: RoleLens[] = [
  {
    key: "applied",
    label: "AI Systems / Applied ML",
    short: "AI Systems",
    evidence:
      "Built three systems end to end: an AI ad agency, a job-authenticity agent and a 100k-document retrieval engine.",
    proofs: ["growth-engine", "job-authenticity", "selfindex"],
  },
  {
    key: "scientist",
    label: "ML Scientist / Researcher",
    short: "ML Scientist",
    evidence:
      "Ran the full research loop on DocROI-Former — architectural changes, ablations and calibrated thresholds — for 80.72% pixel F1.",
    proofs: ["docroi", "federated-healthcare"],
  },
  {
    key: "llm",
    label: "LLM Evaluation & Benchmarking",
    short: "LLM Eval",
    evidence:
      "Designed a five-check authenticity rubric and a single-pass Gemini judge, with an offline fallback and recorded failure modes.",
    proofs: ["job-authenticity"],
  },
  {
    key: "fraud",
    label: "Fraud & AML",
    short: "Fraud & AML",
    evidence:
      "Honeypot-resistant ranking over 100k profiles and pixel-level tamper detection — tuned for false alarms, not just averages.",
    proofs: ["candidate-ranking", "docroi"],
  },
  {
    key: "cv",
    label: "Edge AI & Computer Vision",
    short: "Edge & CV",
    evidence:
      "Latency-aware vision systems: a residual U-Net at 0.9068 mIoU, and a 43.4M-parameter forensic transformer at 17.5 ms per image / 153 FPS batched.",
    proofs: ["multitask-unet", "docroi"],
  },
  {
    key: "data",
    label: "Privacy & Data Systems",
    short: "Privacy & Data",
    evidence:
      "Federated training across two hospitals without sharing a patient record, plus a 100k-document index 74.8% smaller than Elias-Fano.",
    proofs: ["federated-healthcare", "selfindex"],
  },
];

/**
 * The recruiter narrative. Four claims, each backed by a project that is already
 * in the work grid. No new metrics: the numbers match the briefs.
 */
export type HireReason = {
  key: string;
  kicker: string;
  title: string;
  body: string;
  metric: string;
  metricLabel: string;
  project: string;
  accent: string;
  icon: "research" | "trust" | "systems" | "product";
};

export const hireReasons: HireReason[] = [
  {
    key: "research",
    kicker: "Research depth",
    title: "I can run the full loop.",
    body: "Architecture changes, ablations, threshold calibration and a result that survives deployment — not just a notebook score.",
    metric: "80.72%",
    metricLabel: "pixel F1 · +1.52 over CVPR '23 DTD",
    project: "docroi",
    accent: "#ff6b4a",
    icon: "research",
  },
  {
    key: "trust",
    kicker: "Trust & fraud",
    title: "I know the failure mode.",
    body: "Impossible CVs, forged documents and adversarial inputs. I optimise for the false alarm and the missed case, not the average.",
    metric: "0",
    metricLabel: "honeypots in the top 100",
    project: "candidate-ranking",
    accent: "#ff6b4a",
    icon: "trust",
  },
  {
    key: "systems",
    kicker: "Systems",
    title: "I build what carries the model.",
    body: "Index compression, batched inference, federated training and the latency budget around it. The model is one part of the system.",
    metric: "74.8%",
    metricLabel: "smaller 100k-document index",
    project: "selfindex",
    accent: "#c8f751",
    icon: "systems",
  },
  {
    key: "product",
    kicker: "Product",
    title: "I can take it to a user.",
    body: "A real Next.js product with LLM copy, ffmpeg renders, WhatsApp leads, billing and a database — built solo, end to end.",
    metric: "1080×1920",
    metricLabel: "real MP4 output · 19 reels",
    project: "growth-engine",
    accent: "#fbbf24",
    icon: "product",
  },
];

/** Public Codolio stats, read from codolio.com/profile/hex. */
export const codolioStats = {
  solved: 87,
  easy: 63,
  medium: 23,
  hard: 1,
  submissions: 238,
  activeDays: 33,
  maxStreak: 27,
  currentStreak: 3,
  rank: 33412,
};

/** The route into research — used by the trajectory rail. */
export const trajectory = [
  {
    period: "2022 — 24",
    title: "Infosys",
    note: "Power Programmer",
    color: "#60a5fa",
  },
  {
    period: "2024",
    title: "GATE · PGEE",
    note: "PGEE AIR 151",
    color: "#c8f751",
  },
  {
    period: "2024 — 26",
    title: "IIIT Hyderabad",
    note: "M.Tech, Computer Science",
    color: "#5eead4",
  },
  {
    period: "2025 — now",
    title: "NPCI",
    note: "Research AI Engineer",
    color: "#ff6b4a",
  },
];

export type DomainKey =
  | "security"
  | "retrieval"
  | "cv"
  | "federated"
  | "mlsystems"
  | "nlp"
  | "systems";

/**
 * Ordered by how likely a hiring manager for remote AI/ML research and
 * applied security roles is to care about the work.
 */
export type DomainIcon =
  | "shield"
  | "sparkles"
  | "search"
  | "eye"
  | "privacy"
  | "language"
  | "terminal";

export const domains: {
  key: DomainKey;
  short: string;
  label: string;
  note: string;
  color: string;
  icon: DomainIcon;
}[] = [
  {
    key: "security",
    short: "Trust",
    label: "Trust & forensics",
    note: "Fraud, identity, forensics and applied cryptography",
    color: "#ff6b4a",
    icon: "shield",
  },
  {
    key: "mlsystems",
    short: "Applied AI",
    label: "Applied AI products",
    note: "Products, forecasting and decisions that ship",
    color: "#fbbf24",
    icon: "sparkles",
  },
  {
    key: "retrieval",
    short: "Retrieval",
    label: "Retrieval & RAG",
    note: "Search, ranking and the systems under an LLM",
    color: "#c8f751",
    icon: "search",
  },
  {
    key: "cv",
    short: "Vision",
    label: "Edge & vision",
    note: "Latency-aware segmentation, 3D and document pixels",
    color: "#5eead4",
    icon: "eye",
  },
  {
    key: "federated",
    short: "Privacy",
    label: "Privacy & federated",
    note: "Learning across institutions without moving data",
    color: "#a78bfa",
    icon: "privacy",
  },
  {
    key: "nlp",
    short: "Language",
    label: "Language & signals",
    note: "Summarisation, similarity and text signals",
    color: "#60a5fa",
    icon: "language",
  },
  {
    key: "systems",
    short: "Systems",
    label: "Systems foundations",
    note: "The low-level work underneath the models",
    color: "#94a3b8",
    icon: "terminal",
  },
];

export type GlyphKind =
  | "scan"
  | "agent"
  | "rank"
  | "graph"
  | "crypto"
  | "index"
  | "mask"
  | "cloud"
  | "lines"
  | "seam"
  | "federated"
  | "render"
  | "chart"
  | "causal"
  | "cricket"
  | "text"
  | "terminal"
  | "commit"
  | "threads"
  | "syscall";

export type Project = {
  slug: string;
  hook: string;
  title: string;
  subtitle: string;
  year: string;
  domain: DomainKey;
  tags: string[];
  tagline: string;
  glyph: GlyphKind;
  details: string[];
  summary?: string;
  metric?: { value: string; label: string };
  stats?: { value: string; label: string; note: string }[];
  stack: string[];
  links: { label: string; href: string }[];
  visual?: "docroi" | "ranking" | "retrieval" | "growth" | "job" | "federated";
  wide?: boolean;
  lead?: boolean;
};

export const projects: Project[] = [
  // ── Security & trust ────────────────────────────────────────────────────
  {
    slug: "docroi",
    hook: "Tampering, localized to the pixel.",
    title: "DocROI-Former",
    subtitle:
      "Pixel-level document forgery detection, with a decision you can actually deploy.",
    year: "2026",
    domain: "security",
    tags: ["Document forensics", "Vision transformer", "Edge inference"],
    tagline: "PVTv2 + DCT/SRM signals fused into one 43.4M-parameter forgery detector.",
    glyph: "scan",
    details: [
      "A dual-task PVTv2 transformer predicts a pixel mask and one document-level verdict in a single forward pass.",
      "DCT and SRM streams expose compression and sensor noise traces that survive re-saving.",
      "The PGU decoder targets 1–3 px font strokes in bank details, dates of birth and ID numbers.",
    ],
    summary:
      "A dual-task vision transformer that localizes tampering at the pixel level and returns one calibrated document-level decision — no OCR, no post-processing dilation. Four architectural changes target the part everyone else gets wrong: 1–3 pixel font strokes in bank details, dates of birth and ID numbers.",
    stats: [
      { value: "80.72%", label: "pixel F1", note: "+1.52 over CVPR '23 DTD" },
      { value: "100%", label: "document catch", note: "29,908 / 29,908 · 71 false alarms" },
      { value: "17.5 ms", label: "single image", note: "43.4M params · 34% lighter" },
    ],
    stack: ["PyTorch", "PVTv2", "Vision Transformer", "DCT / SRM", "PGU decoder"],
    links: [
      { label: "Model", href: "https://github.com/63shivendra/final_docroi_pgu_model" },
      { label: "Training", href: "https://github.com/63shivendra/document-forgery-detection" },
      { label: "Research notes", href: "https://github.com/63shivendra/dcoroi_former" },
    ],
    visual: "docroi",
    wide: true,
    lead: true,
  },
  {
    slug: "job-authenticity",
    hook: "Five fraud checks. One LLM pass.",
    title: "Job Authenticity Agent",
    subtitle:
      "A browser extension that scores job listings for fraud signals in one LLM pass.",
    year: "2026",
    domain: "security",
    tags: ["Fraud detection", "LLM agent", "Product"],
    tagline: "Chrome MV3 + Gemini + FastAPI: five fraud checks in one pass.",
    glyph: "agent",
    details: [
      "A Chrome MV3 extension scrapes the visible job page and sends at most 10k characters to FastAPI.",
      "One Gemini pass runs five checks: language, reality, consistency, contact and pattern.",
      "A keyword-only fallback and Redis cache keep the extension useful without an API key.",
    ],
    summary:
      "Reads the visible text of a job page, decides whether it is a real listing, extracts the role metadata, and runs five authenticity checks in a single Gemini pass. Ships with an offline keyword fallback so the extension still works without an API key.",
    stats: [
      { value: "5", label: "authenticity checks", note: "one LLM pass" },
      { value: "10k", label: "chars of context", note: "per page analysed" },
      { value: "2", label: "surfaces", note: "Chrome extension + FastAPI" },
    ],
    stack: ["TypeScript", "FastAPI", "Gemini", "Chrome Extension"],
    links: [
      { label: "Repository", href: "https://github.com/63shivendra/JOB_AGENT" },
    ],
    visual: "job",
    wide: true,
  },
  {
    slug: "candidate-ranking",
    hook: "Honeypots filtered. Top 100 kept clean.",
    title: "Honeypot-Resistant Ranking",
    subtitle:
      "100,000 profiles, eight rankers, and a detector for CVs that cannot be true.",
    year: "2026",
    domain: "security",
    tags: ["Synthetic identity", "Ranking"],
    tagline: "BM25 + seven rankers + RRF, with a honeypot trap at the gate.",
    glyph: "rank",
    details: [
      "BM25 retrieves candidate profiles, then seven signal rankers score fit, availability and evidence.",
      "Reciprocal Rank Fusion combines the rankers without hand-tuning a single weighted score.",
      "A honeypot stage rejects impossible histories before the top 100 is written.",
    ],
    metric: { value: "0", label: "honeypots in top 100" },
    summary:
      "A hybrid ranking system for the Redrob candidate-discovery challenge: BM25 retrieval plus seven signal rankers, fused with Reciprocal Rank Fusion. A dedicated honeypot stage removes synthetic profiles — expert skills with zero months of use, companies founded after the candidate supposedly joined.",
    stack: ["Python", "BM25", "RRF", "NDCG / MRR"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/DATA-and-AI-challenege-Intelligent-candidate-discovery",
      },
    ],
  },
  {
    slug: "nexus-stitch",
    hook: "Five identifiers, one customer timeline.",
    title: "NexusStitch",
    subtitle:
      "Cross-channel identity resolution and journey stitching in real time.",
    year: "2026",
    domain: "security",
    tags: ["Identity resolution", "Fraud graph"],
    tagline: "Union-Find identity graph over web, app, call-center and in-store events.",
    glyph: "graph",
    details: [
      "Union-Find merges cookies, device IDs, emails, phones and loyalty cards into one identity graph.",
      "The graph resolves anonymous and offline records into a chronological customer timeline.",
      "FastAPI and React expose 24-hour windows for support escalations and churn risk.",
    ],
    metric: { value: "4", label: "channels stitched" },
    summary:
      "Links cookies, device IDs, emails, phones and loyalty cards into one chronological customer timeline. A union-find identity graph resolves anonymous and offline records; 24-hour windows surface support escalations and churn risk.",
    stack: ["Python", "FastAPI", "Union-Find", "React"],
    links: [
      { label: "Repository", href: "https://github.com/63shivendra/nexus-stitch-" },
    ],
  },
  {
    slug: "secure-doctor",
    hook: "A clinic visit sealed with ElGamal + AES.",
    title: "Secure Telemedical Channel",
    subtitle: "A doctor–patient conference with encrypted messages and signatures.",
    year: "2025",
    domain: "security",
    tags: ["Applied cryptography", "Team lab"],
    tagline: "ElGamal key agreement + AES payloads + signatures, end to end.",
    glyph: "crypto",
    details: [
      "ElGamal handles key agreement; AES encrypts the doctor–patient and conference payloads.",
      "Digital signatures bind each message to its sender and protect the group-key flow.",
      "Python clients built with PyCryptodome for a team applied-cryptography lab.",
    ],
    metric: { value: "ElGamal + AES", label: "hybrid encryption" },
    summary:
      "A team lab building a secure telemedical conference: ElGamal key agreement and AES-encrypted payloads between doctor and patient clients, with digital signatures and a group-key flow.",
    stack: ["Python", "PyCryptodome", "ElGamal", "AES", "Signatures"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/Secure-Doctor-Patient-Communication-System-Using-ElGamal-and-AES-Encryption",
      },
    ],
  },
  {
    slug: "blockchain-voting",
    hook: "Every vote hash-linked; duplicates rejected.",
    title: "Ledger-Backed Voting",
    subtitle: "A tamper-evident voting flow on a hash-linked chain.",
    year: "2025",
    domain: "security",
    tags: ["Distributed trust"],
    tagline: "SHA-256 hash chain + duplicate-voter guard in a Flask app.",
    glyph: "crypto",
    details: [
      "Each vote is SHA-256 chained to the previous block, so edits break the ledger.",
      "A duplicate-voter guard rejects repeat ballots before they are appended.",
      "Flask and Python keep the project focused on tamper evidence, not consensus.",
    ],
    metric: { value: "Hash-linked", label: "vote ledger" },
    summary:
      "A Flask app where each vote is chained to the previous block by SHA-256, with a duplicate-voter guard — built to reason about integrity without a consensus network.",
    stack: ["Python", "Flask", "Hashing"],
    links: [
      { label: "Repository", href: "https://github.com/63shivendra/blockchain_voting" },
    ],
  },
  {
    slug: "ddes-channel",
    hook: "A socket, a shared key, double DES.",
    title: "DDES Secure Channel",
    subtitle: "A distributed Double-DES client–server connection.",
    year: "2025",
    domain: "security",
    tags: ["Applied cryptography"],
    tagline: "Raw sockets + distributed key exchange + Double-DES.",
    glyph: "crypto",
    details: [
      "A client and server negotiate a distributed key over a raw socket.",
      "Messages are encrypted with Double-DES block-cipher modes.",
      "Built to study key distribution and the limits of legacy ciphers.",
    ],
    metric: { value: "DDES", label: "key exchange" },
    summary:
      "A client and server negotiate a distributed key and exchange encrypted messages over a socket, built to understand block-cipher modes and key distribution.",
    stack: ["Python", "Sockets", "DES"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/Secure-Client-Server-Connection-Using-a-Distributed-Double-DES-D-DDES-",
      },
    ],
  },

  // ── Retrieval & RAG ─────────────────────────────────────────────────────
  {
    slug: "selfindex",
    hook: "A 100k-doc index, 74.8% smaller.",
    title: "SelfIndex",
    subtitle: "A retrieval engine from scratch, benchmarked against Elasticsearch.",
    year: "2025",
    domain: "retrieval",
    tags: ["RAG infrastructure", "Index compression", "Inference systems"],
    tagline: "Elias-Fano + SQLite + Elasticsearch, benchmarked on 100k docs.",
    glyph: "index",
    details: [
      "Boolean, TF and TF-IDF indexes across JSON and SQLite stores.",
      "Elias-Fano and zlib compression cut index size by 74.8% and 59.6% respectively.",
      "Benchmarked on 100k documents and ~15M tokens with p95/p99 latency and throughput.",
    ],
    summary:
      "Five index configurations — Boolean, TF and TF-IDF, across JSON and SQLite stores, with Elias-Fano and zlib compression. Evaluated on 100,000 documents and ~15M tokens, measuring p95/p99 latency, throughput and index size instead of a single flattering accuracy number.",
    stats: [
      { value: "100k", label: "documents", note: "Wikipedia + real news" },
      { value: "74.8%", label: "smaller index", note: "Elias-Fano · 59.6% with zlib" },
      { value: "5", label: "configurations", note: "Boolean / TF / TF-IDF" },
    ],
    stack: ["Python", "NLTK", "SQLite", "Elasticsearch", "Elias-Fano"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/High-Performance-Retrieval-Engine-for-Retrieval-Augmented-Generation-RAG-",
      },
    ],
    visual: "retrieval",
    wide: true,
    lead: true,
  },

  // ── Computer vision ─────────────────────────────────────────────────────
  {
    slug: "multitask-unet",
    hook: "One encoder. Segmentation + depth.",
    title: "Multi-task U-Net",
    subtitle: "One encoder, two dense predictions: segmentation and depth.",
    year: "2026",
    domain: "cv",
    tags: ["Segmentation", "Depth"],
    tagline: "PyTorch U-Net: one encoder, segmentation + depth heads.",
    glyph: "mask",
    details: [
      "Vanilla, no-skip and residual U-Net variants share one encoder across two dense heads.",
      "Residual blocks reached 0.9068 test mIoU; removing skip connections cost about 2 mIoU.",
      "Per-task loss curves tracked in W&B across segmentation and depth.",
    ],
    metric: { value: "0.907", label: "mIoU · residual U-Net" },
    lead: true,
    summary:
      "Three U-Net variants compared on a joint segmentation + depth objective — vanilla, no-skip and residual. Residual blocks gave the best mask quality; removing skip connections cost 2 mIoU. Per-task loss curves tracked in W&B.",
    stack: ["PyTorch", "U-Net", "W&B"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/Creating-AI-Models-for-Image-Segmentation-and-Depth-Detection-",
      },
    ],
  },
  {
    slug: "point-cloud",
    hook: "3D points, invariant to rotation.",
    title: "3D Point-Cloud Classification",
    subtitle: "Robust deep learning on geometric data.",
    year: "2026",
    domain: "cv",
    tags: ["3D vision"],
    tagline: "PointNet + PyTorch, tested against rotation and density shifts.",
    glyph: "cloud",
    details: [
      "Classifies unordered point sets without imposing a fixed voxel grid.",
      "Tests invariance to rotation, density and sampling order.",
      "PyTorch and PointNet experiments on 3D geometric data.",
    ],
    metric: { value: "3D", label: "point-cloud models" },
    summary:
      "Classification experiments on unordered point sets, focused on invariance to rotation, density and sampling order.",
    stack: ["PyTorch", "PointNet", "Python"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/Deep-Learning-on-3D-Point-Clouds-Building-Robust-Classification-Models",
      },
    ],
  },
  {
    slug: "line-segmentation",
    hook: "Pixels to line boxes, every stage visible.",
    title: "Document Line Segmentation",
    subtitle: "A visual preprocessing pipeline from pixels to line boxes.",
    year: "2026",
    domain: "cv",
    tags: ["Document AI", "Classical CV"],
    tagline: "OpenCV morphology + connected components, every stage visible.",
    glyph: "lines",
    details: [
      "Grayscale, blur, adaptive threshold, morphology and connected components.",
      "Every stage renders an intermediate image so failures are easy to localize.",
      "Turns raw page pixels into individual text-line boxes with OpenCV.",
    ],
    metric: { value: "5", label: "stages, each visualised" },
    summary:
      "Grayscale, blur, adaptive threshold, morphology and connected components — every step rendered so you can see exactly where a document pipeline succeeds or falls apart.",
    stack: ["Python", "OpenCV", "NumPy"],
    links: [
      { label: "Repository", href: "https://github.com/63shivendra/linesegmentation" },
    ],
  },
  {
    slug: "seam-carving",
    hook: "Resize by removing the weakest seam.",
    title: "Seam Carving",
    subtitle: "Content-aware image resizing in C++.",
    year: "2024",
    domain: "cv",
    tags: ["Algorithms", "C++"],
    tagline: "C++ dynamic programming that removes low-energy seams, not pixels.",
    glyph: "seam",
    details: [
      "Builds an energy map and finds the lowest-cost vertical seam with dynamic programming.",
      "Removes seams iteratively to resize images without uniform scaling.",
      "Implemented from the energy map up in C++.",
    ],
    metric: { value: "C++", label: "energy-map seams" },
    summary:
      "Resizes images by removing low-energy seams instead of scaling every pixel, implemented from the energy map up.",
    stack: ["C++", "Dynamic programming"],
    links: [
      { label: "Repository", href: "https://github.com/63shivendra/Seam-Carving" },
    ],
  },

  // ── Federated learning ──────────────────────────────────────────────────
  {
    slug: "federated-healthcare",
    hook: "Two hospitals. Zero shared records.",
    title: "Federated Learning for Healthcare",
    subtitle:
      "Two hospitals training different models without sharing a single patient record.",
    year: "2025",
    domain: "federated",
    tags: ["Federated learning", "Privacy-preserving"],
    tagline: "PyTorch MLP + RBF SVM, five rounds, zero shared patient rows.",
    glyph: "federated",
    details: [
      "An MLP in PyTorch and an RBF-kernel SVM in scikit-learn train on separate hospital splits.",
      "Only predicted probabilities cross the shared communication set — no patient rows move.",
      "66,180 records, five rounds and ten local epochs, with seven tracked metrics.",
    ],
    summary:
      "A client–server simulation: an MLP in PyTorch and an RBF-kernel SVM in scikit-learn train on separate hospital splits, then exchange only predicted probabilities through a shared communication set. Five rounds, ten local epochs, seven tracked metrics.",
    stats: [
      { value: "66,180", label: "patient records", note: "46 columns · 44 features" },
      { value: "5", label: "federated rounds", note: "10 local epochs each" },
      { value: "2", label: "model families", note: "MLP + SVM · probability averaging" },
    ],
    stack: ["PyTorch", "scikit-learn", "Federated averaging"],
    links: [
      { label: "Repository", href: "https://github.com/63shivendra/FL_netwrok" },
    ],
    visual: "federated",
    wide: true,
    lead: true,
  },

  // ── ML systems & applied ML ─────────────────────────────────────────────
  {
    slug: "growth-engine",
    hook: "Hinglish copy to a real 1080x1920 MP4.",
    title: "Growth Engine",
    subtitle: "An AI ad agency that renders real video, not mockups.",
    year: "2026",
    domain: "mlsystems",
    tags: ["Applied AI product", "Video pipeline", "AI systems"],
    tagline: "Next.js 16 + Prisma + ffmpeg: Hinglish copy in, MP4s out.",
    glyph: "render",
    details: [
      "Gemini writes Hinglish ad concepts; a deterministic playbook writer runs without a key.",
      "ffmpeg renders 12-second, 1080×1920, 30 fps spots with captions, music and QR codes.",
      "WhatsApp lead capture, CRM and billing live in the same Next.js 16 app.",
    ],
    summary:
      "A production Next.js app for Kanpur businesses: Hinglish ad concepts, real 1080×1920 MP4 renders through ffmpeg, beat-synced trend reels, QR codes, a WhatsApp lead funnel, CRM and billing. Built solo, from database schema to render pipeline.",
    stats: [
      { value: "1080×1920", label: "real output", note: "30 fps · 12s spots" },
      { value: "19", label: "reels rendered", note: "five trend formats" },
      { value: "1", label: "solo build", note: "schema → UI → video" },
    ],
    stack: ["Next.js 16", "TypeScript", "Prisma", "ffmpeg", "Gemini"],
    links: [{ label: "Repository", href: "https://github.com/63shivendra/AI_AD_AGENCY" }],
    visual: "growth",
    wide: true,
    lead: true,
  },
  {
    slug: "demand-forecasting",
    hook: "Forecasts with filters, not a notebook.",
    title: "Demand Forecasting",
    subtitle: "Country- and product-level forecasts in an interactive dashboard.",
    year: "2025",
    domain: "mlsystems",
    tags: ["Forecasting", "Dashboard"],
    tagline: "Random Forest vs linear regression in a Streamlit + Plotly dashboard.",
    glyph: "chart",
    details: [
      "Compares Random Forest and linear regression on real e-commerce demand data.",
      "Evaluates with MAE, RMSE and R², then serves the better model.",
      "Streamlit and Plotly expose category, country and time filters.",
    ],
    metric: { value: "MAE · RMSE · R²", label: "model evaluation" },
    summary:
      "Compares Random Forest and linear regression on real e-commerce data, then serves the better model through a Streamlit dashboard with category, country and time filters.",
    stack: ["Python", "scikit-learn", "Streamlit", "Plotly"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/Global-E-Commerce-Demand-Forecasting-Interactive-Dashboard",
      },
    ],
  },
  {
    slug: "causal-traffic",
    hook: "Policy impact, with placebo tests.",
    title: "Causal Policy Analysis",
    subtitle: "What a traffic policy actually did to air pollution.",
    year: "2025",
    domain: "mlsystems",
    tags: ["Causal inference"],
    tagline: "Difference-in-differences + placebo tests on traffic and pollution panels.",
    glyph: "causal",
    details: [
      "Difference-in-differences estimates the policy effect on air pollution panels.",
      "Placebo tests and robustness checks probe the parallel-trends assumption.",
      "Python, Pandas and Statsmodels from data prep to result tables.",
    ],
    metric: { value: "DiD", label: "with placebo tests" },
    summary:
      "Difference-in-differences on policy and pollution panels, with placebo tests and robustness checks instead of a single regression table.",
    stack: ["Python", "Pandas", "Statsmodels"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/Causal-Analysis-of-Traffic-Policy-Impact-on-Air-Pollution",
      },
    ],
  },
  {
    slug: "cricket-deception",
    hook: "Deception vs. ordinary variation.",
    title: "Deceptive Bowling",
    subtitle: "Predicting deception from ball-by-ball cricket data.",
    year: "2025",
    domain: "mlsystems",
    tags: ["Sports analytics"],
    tagline: "Ball-by-ball features + scikit-learn to separate deception from noise.",
    glyph: "cricket",
    details: [
      "Delivery-level feature work on ball-by-ball cricket tracking data.",
      "Classifies deceptive bowling against ordinary variation.",
      "Built as an SMAI course project with scikit-learn and Pandas.",
    ],
    metric: { value: "Ball-by-ball", label: "deception model" },
    summary:
      "Feature work and classification on delivery-level cricket data to separate deceptive bowling from ordinary variation — an SMAI course project.",
    stack: ["Python", "scikit-learn", "Pandas"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/-Predicting-Deceptive-Bowling-in-Cricket-",
      },
    ],
  },

  // ── NLP & language ──────────────────────────────────────────────────────
  {
    slug: "text-summarizer",
    hook: "Long text in. bfloat16 memory out.",
    title: "Text Summariser",
    subtitle: "Long-form summarisation behind a Gradio interface.",
    year: "2025",
    domain: "nlp",
    tags: ["Transformers"],
    tagline: "distilBART in bfloat16 behind a Gradio interface.",
    glyph: "text",
    details: [
      "Loads a fine-tuned distilBART checkpoint for long-form summarization.",
      "bfloat16 keeps memory pressure down at inference.",
      "Ships with a small interactive Gradio app.",
    ],
    metric: { value: "distilBART", label: "CNN/DailyMail" },
    lead: true,
    summary:
      "Loads a fine-tuned distilBART checkpoint in bfloat16 to keep memory down, then exposes it as a small interactive app.",
    stack: ["Python", "Transformers", "Gradio"],
    links: [
      { label: "Repository", href: "https://github.com/63shivendra/TEXT_SUMMARIZER" },
    ],
  },
  {
    slug: "text-similarity",
    hook: "Top-200 words. Every pair ranked.",
    title: "Text Similarity Analyser",
    subtitle: "Ranking document pairs by normalised word-frequency overlap.",
    year: "2025",
    domain: "nlp",
    tags: ["Classical NLP"],
    tagline: "Top-200 word vectors + normalized overlap, every pair ranked.",
    glyph: "text",
    details: [
      "Tokenizes, strips stopwords and normalizes frequencies over the top 200 words.",
      "Ranks every document pair in a folder by word-frequency overlap.",
      "Classical NLP with Python and NLTK.",
    ],
    metric: { value: "Top-N", label: "similar pairs" },
    summary:
      "Tokenises, strips stopwords, normalises frequencies over the top 200 words, then ranks every pair in a folder by overlap.",
    stack: ["Python", "NLTK"],
    links: [
      { label: "Repository", href: "https://github.com/63shivendra/Text-Similarity-Analyzer" },
    ],
  },
  {
    slug: "tweet-sentiment",
    hook: "Noisy tweets, two clean classes.",
    title: "Tweet Sentiment",
    subtitle: "Classifying sentiment in short, noisy text.",
    year: "2025",
    domain: "nlp",
    tags: ["Text classification"],
    tagline: "TF-IDF + scikit-learn on noisy tweets, with ROC and PR curves.",
    glyph: "text",
    details: [
      "Cleans and vectorizes short, noisy tweets with scikit-learn.",
      "Classifies sentiment as happy or sad.",
      "Evaluates with ROC, precision-recall and a confusion matrix in a Flask UI.",
    ],
    metric: { value: "2-class", label: "happy / sad" },
    summary:
      "Cleaning, vectorising and classifying tweets as happy or sad, with a Flask UI and ROC, precision-recall and confusion-matrix evaluation.",
    stack: ["Python", "scikit-learn", "Flask", "Pandas"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/Tweets-Sentimental-Analysis",
      },
    ],
  },

  // ── Systems engineering ─────────────────────────────────────────────────
  {
    slug: "posix-shell",
    hook: "Built-ins, history, jobs, syscalls.",
    title: "POSIX Shell",
    subtitle: "A working shell: built-ins, history, background jobs and process control.",
    year: "2024",
    domain: "systems",
    tags: ["Operating systems"],
    tagline: "C++ built-ins + background jobs + process control from syscalls up.",
    glyph: "terminal",
    details: [
      "Directory built-ins, persistent history and chained commands.",
      "Background processes and a pinfo view into any PID.",
      "Implemented in C++ against POSIX/Linux primitives.",
    ],
    metric: { value: "C++", label: "from syscalls up" },
    lead: true,
    summary:
      "A custom C++ shell with directory built-ins, persistent history, background processes, chained commands and a pinfo view into any PID.",
    stack: ["C++", "POSIX", "Linux"],
    links: [
      { label: "Repository", href: "https://github.com/63shivendra/POSIX-Shell" },
    ],
  },
  {
    slug: "mini-vcs",
    hook: "Git's object model, rebuilt in C++.",
    title: "Mini Version Control",
    subtitle: "A miniature version-control system with content-addressed storage.",
    year: "2024",
    domain: "systems",
    tags: ["Storage"],
    tagline: "SHA-1 blobs, trees and commits — Git's object model in C++.",
    glyph: "commit",
    details: [
      "Content-addressed object store with SHA-1 hashing.",
      "Implements hash-object, cat-file and ls-tree.",
      "Reconstructs Git's core object model from scratch in C++.",
    ],
    metric: { value: "C++", label: "object store" },
    summary:
      "Implements Git's core object model — SHA-1 blobs, trees and commits — from scratch in C++, including hash-object, cat-file and ls-tree.",
    stack: ["C++", "SHA-1", "File I/O"],
    links: [
      { label: "Repository", href: "https://github.com/63shivendra/Mini-Version-Control-System" },
    ],
  },
  {
    slug: "threads-sim",
    hook: "Shared state, threads, and the race.",
    title: "Concurrent Simulation",
    subtitle: "A multi-threaded simulation of shared washing-machine usage.",
    year: "2024",
    domain: "systems",
    tags: ["Concurrency"],
    tagline: "pthreads + shared state + contention, measured until it breaks.",
    glyph: "threads",
    details: [
      "Models contention for a shared washing-machine resource.",
      "Uses pthreads synchronization primitives to protect shared state.",
      "Measures what happens when the primitives are wrong.",
    ],
    metric: { value: "Threads", label: "shared state" },
    summary:
      "Models contention for a shared resource with synchronisation primitives, and measures what happens when they are wrong.",
    stack: ["C++", "pthreads"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/-Multi-Threaded-Simulation-of-Washing-Machine-Usage-",
      },
    ],
  },
  {
    slug: "file-reversal",
    hook: "Whole files reversed with raw syscalls.",
    title: "Large-File Reversal",
    subtitle: "Reversing and validating large files with raw system calls.",
    year: "2024",
    domain: "systems",
    tags: ["Systems programming"],
    tagline: "Raw POSIX syscalls + buffered reversal + verified output.",
    glyph: "syscall",
    details: [
      "Reverses whole files or index ranges through a buffer.",
      "Uses raw POSIX system calls instead of stdio shortcuts.",
      "Verifies output content and file permissions after writing.",
    ],
    metric: { value: "Syscalls", label: "no stdio shortcuts" },
    summary:
      "Reverses whole files or index ranges through a buffer, then verifies the output and file permissions — using raw system calls rather than stdio shortcuts.",
    stack: ["C++", "POSIX", "File I/O"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/63shivendra/Efficient-Large-File-Reversal-and-Validation-with-System-Calls",
      },
    ],
  },
];

export const projectsByDomain = domains.map((domain) => ({
  ...domain,
  projects: projects.filter((project) => project.domain === domain.key),
}));

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  location: string;
  kind: "Current" | "Education" | "Independent" | "Industry";
  summary: string;
  bullets: string[];
  proofs?: string[];
};

// CONFIRM: Infosys start year and the exact NPCI scope.
export const experience: ExperienceItem[] = [
  {
    period: "2025 — Present",
    role: "Research AI Engineer",
    org: "NPCI · National Payments Corporation of India",
    location: "Hyderabad, India",
    kind: "Current",
    summary:
      "Applied AI/ML research on payment-scale data, with a focus on fraud, AML, risk analytics and deployable AI systems.",
    bullets: [
      "Frame ambiguous risk problems as measurable detection tasks — then evaluate them on precision at fixed recall, false-alarm rate, latency and model size.",
      "Work across research and production: failure analysis, threshold calibration, and the deployment constraints of a payments environment.",
    ],
    proofs: ["candidate-ranking", "docroi"],
  },
  {
    period: "2025 — Present",
    role: "Independent AI engineer",
    org: "Growth Engine",
    location: "Remote",
    kind: "Independent",
    summary:
      "Designed, built and shipped an AI ad agency for small businesses — solo.",
    bullets: [
      "LLM copy generation, an ffmpeg render pipeline, WhatsApp lead capture, CRM and billing in one product.",
      "Next.js 16, TypeScript and Prisma, deployed end to end.",
    ],
    proofs: ["growth-engine"],
  },
  {
    period: "2022 — 2024",
    role: "Power Programmer",
    org: "Infosys",
    location: "India",
    kind: "Industry",
    summary:
      "Enterprise software delivery before moving into AI research.",
    bullets: [
      "Worked in a large engineering organisation on production software delivery.",
      "Left to pursue full-time research; qualified GATE and PGEE (PGEE AIR 151).",
    ],
    proofs: ["posix-shell", "mini-vcs"],
  },
  {
    period: "2024 — 2026",
    role: "M.Tech, Computer Science",
    org: "IIIT Hyderabad",
    location: "Hyderabad, India",
    kind: "Education",
    summary:
      "Master's student in computer science, working on information retrieval, data systems, applied ML and privacy-preserving learning.",
    bullets: [
      "PGEE 2024 — All India Rank 151; GATE qualified.",
      "Built SelfIndex, a from-scratch retrieval engine benchmarked against Elasticsearch.",
      "DocROI-Former: a vision transformer for pixel-level tamper detection and document-level triage.",
    ],
    proofs: ["selfindex", "docroi"],
  },
];

export const skillGroups = [
  {
    label: "Detection & trust",
    icon: "shield",
    note: "The problems I want to be hired for",
    items: [
      "Document forgery localization",
      "Tamper detection",
      "Synthetic identity / honeypot detection",
      "Identity resolution",
      "Anomaly detection",
      "Fraud & AML analytics",
      "Risk scoring",
      "Threshold calibration",
    ],
  },
  {
    label: "ML & research",
    icon: "cpu",
    note: "How I build and prove a model",
    items: [
      "PyTorch",
      "Vision transformers",
      "Frequency-domain forensics",
      "Multi-task learning",
      "Federated learning",
      "Privacy-preserving ML",
      "Contrastive learning",
      "Causal inference (DiD)",
      "LLM evaluation",
      "Benchmark design",
      "Evaluation design",
      "Error analysis",
      "Ablation studies",
      "F1 / IoU / NDCG / MRR",
    ],
  },
  {
    label: "Systems & scale",
    icon: "gauge",
    note: "What happens when the model meets traffic — and the edge",
    items: [
      "Latency / throughput budgets",
      "Edge-aware inference",
      "Model-size / latency trade-offs",
      "Batched inference",
      "LLM inference",
      "Index compression",
      "Benchmarking (p95 / p99)",
      "FastAPI services",
      "Model serving",
      "Chrome extensions",
    ],
  },
  {
    label: "Retrieval & data",
    icon: "database",
    note: "Search, ranking and the data underneath",
    items: [
      "BM25",
      "TF-IDF",
      "Reciprocal Rank Fusion",
      "Vector search",
      "RAG pipelines",
      "Elasticsearch",
      "Data pipelines",
      "Postgres / SQLite",
      "Redis",
      "Pandas / NumPy",
    ],
  },
  {
    label: "Engineering",
    icon: "code",
    note: "Enough product to ship the research",
    items: [
      "Python",
      "TypeScript",
      "Next.js / React",
      "Node.js",
      "Prisma",
      "ffmpeg",
      "C++",
      "Git / Linux",
    ],
  },
  {
    label: "Product & delivery",
    icon: "layers",
    note: "What happens after the notebook",
    items: [
      "End-to-end AI products",
      "LLM integration",
      "Video pipelines",
      "Dashboards",
      "Technical writing",
    ],
  },
];

export const about = {
  paragraphs: [
    "I'm a Research AI Engineer at NPCI and an M.Tech (CS) student at IIIT Hyderabad. I build ML systems that have to survive production: adversarial inputs, latency and model-size budgets, privacy constraints, and decisions someone will be held to. The domain I know best is trust — document forgery, synthetic identities, financial fraud.",
    "Before IIIT-H I was a Power Programmer at Infosys. I qualified GATE, and PGEE with All India Rank 151, then moved into research because I wanted to measure models honestly — pixel IoU, document catch rate, p95 latency, throughput, model size — not just report a notebook accuracy.",
    "The through-line is systems. A retrieval engine that indexes 100k documents. A compact forensic transformer that fits a 17.5 ms inference budget. A federated setup where two hospitals never share a row of patient data. Research that cannot be served — or cannot be trusted with the data — is just a notebook.",
  ],
  currently: [
    "Research AI Engineer at NPCI — fraud, AML and risk analytics",
    "M.Tech (CS) at IIIT Hyderabad, 2024–2026",
    "Building retrieval, forensic and privacy-preserving ML tooling in public",
  ],
  looking:
    "I'm looking for remote or hybrid roles in applied AI, AI systems, edge AI, privacy-preserving ML, ML research, LLM evaluation, fraud/AML, computer vision or data engineering — teams where research has to survive contact with production.",
  card: {
    id: "2024202022",
    status: "Open to remote / hybrid",
    focus: "AI systems · edge AI · privacy-preserving ML",
    stack: "Python / PyTorch / TypeScript",
  },
};

/**
 * A recruiter-readable summary of the whole profile. Keep these values in
 * sync with `experience` and `about`; they are intentionally short enough to
 * scan in one pass.
 */
export const profileFacts = [
  { key: "now", label: "Now", value: "Research AI Engineer, NPCI" },
  { key: "study", label: "Study", value: "M.Tech CS, IIIT Hyderabad · 2024–26" },
  { key: "before", label: "Before", value: "Power Programmer, Infosys · 2022–24" },
  { key: "independent", label: "Also", value: "Independent AI engineer, Growth Engine" },
  { key: "credential", label: "Credential", value: "GATE · PGEE AIR 151" },
  { key: "base", label: "Base", value: "Hyderabad, India · remote / hybrid" },
] as const;

export const contact = {
  heading: "Let's make fraud harder.",
  body: "I'm open to remote or hybrid roles in applied AI, AI systems, edge AI, privacy-preserving ML, ML research, LLM evaluation, fraud/AML, computer vision and data engineering. If you're hiring, I'd like to hear what you're building.",
  note: "Hyderabad, India · IST · Remote or hybrid · Reply within a day.",
};
