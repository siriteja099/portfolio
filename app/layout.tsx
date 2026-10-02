import type { Metadata, Viewport } from "next";
import "./globals.css";
import { asset, profile, site } from "@/lib/data";

const title = `${profile.name} — ${profile.title}`;
const description =
  "Python Backend Developer with 1 year of experience building scalable Django REST APIs and AWS-hosted applications. AWS Certified Cloud Practitioner and PCAP certified.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url.endsWith("/") ? site.url : `${site.url}/`),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: site.url }],
  keywords: [
    "Python Backend Developer",
    "Django",
    "Django REST Framework",
    "REST API",
    "AWS",
    "PostgreSQL",
    "MySQL",
    "Celery",
    profile.name,
  ],
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${profile.name} Portfolio`,
    title,
    description,
    locale: "en_IN",
    images: [{ url: asset("/og.png"), width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [asset("/og.png")],
  },
  icons: {
    icon: [{ url: asset("/favicon-64.png"), type: "image/png", sizes: "64x64" }],
    apple: asset("/images/siri-avatar.webp"),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0f12" },
    { media: "(prefers-color-scheme: light)", color: "#fbf8f3" },
  ],
};

// Sets the theme before first paint to avoid a flash. Defaults to dark.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="light"||t==="dark"?t:"dark"}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
