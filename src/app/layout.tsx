import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { RevealObserver } from "@/components/reveal-observer";
import { SmoothAnchors } from "@/components/smooth-anchors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {
    default: `${site.name} — Research AI Engineer | AI Systems, Applied AI & ML`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Research AI Engineer",
    "applied AI",
    "AI systems",
    "edge AI",
    "privacy-preserving ML",
    "AI researcher",
    "machine learning systems",
    "ML scientist",
    "ML engineer",
    "LLM evaluation",
    "LLM inference",
    "data engineer",
    "fraud detection",
    "AML",
    "document forensics",
    "forgery detection",
    "computer vision",
    "federated learning",
    "model efficiency",
    "information retrieval",
    "RAG",
    "NPCI",
    "IIIT Hyderabad",
    "remote AI jobs",
    "hybrid AI jobs",
    "Codolio",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${site.url}/`,
    siteName: site.name,
    title: `${site.name} — Research AI Engineer, AI Systems & Applied ML`,
    description: site.description,
    images: [
      {
        url: `${site.url}/og.png`,
        width: 1200,
        height: 630,
        alt: `${site.name} — Research AI Engineer in AI systems, edge AI and privacy-preserving ML`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Research AI Engineer, AI Systems & Applied ML`,
    description: site.description,
    images: [`${site.url}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07080b",
};

const bootScript = `document.documentElement.classList.add('js');`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <RevealObserver />
        <SmoothAnchors />
      </body>
    </html>
  );
}
