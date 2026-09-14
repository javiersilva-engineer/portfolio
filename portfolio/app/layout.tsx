import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const themeScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const hasStoredTheme = storedTheme === "light" || storedTheme === "dark";
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.dataset.theme = hasStoredTheme ? storedTheme : systemTheme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.fullName} — ${site.role}`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased bg-ink-950 text-paper-100">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
