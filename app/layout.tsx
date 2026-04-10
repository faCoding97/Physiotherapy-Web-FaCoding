import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header.client";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/widgets/FloatingWhatsApp.client";
import { absoluteUrl, site } from "@/lib/utils";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL(site.org.domain),
  title: {
    default: site.pageMeta.home.title,
    template: `%s | ${site.org.brandName}`
  },
  description: site.pageMeta.home.description,
  applicationName: site.org.brandName,
  manifest: "/manifest.json",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: site.pageMeta.home.title,
    description: site.pageMeta.home.description,
    url: absoluteUrl("/"),
    siteName: site.org.brandName,
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: absoluteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: site.org.brandName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: site.pageMeta.home.title,
    description: site.pageMeta.home.description,
    images: [absoluteUrl("/og-image.png")]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeStyle = {
    ["--brand" as string]: site.theme.brand,
    ["--brand-secondary" as string]: site.theme.brandSecondary,
    ["--accent" as string]: site.theme.accent,
    ["--bg" as string]: site.theme.bg,
    ["--surface" as string]: site.theme.surface,
    ["--text" as string]: site.theme.text,
    ["--highlight" as string]: site.theme.highlight,
    ["--container-max" as string]: site.layout.containerMax
  };

  return (
    <html lang="en" className={`${heading.variable} ${body.variable} scroll-smooth`}>
      <body
        style={themeStyle}
        className="bg-[var(--bg)] font-[var(--font-body)] text-[var(--text)] antialiased selection:bg-[var(--brand)] selection:text-white"
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-brand-radial" />
        <Header />
        <main className="overflow-x-clip pt-20 md:pt-24">{children}</main>
        <Footer />
        <FloatingWhatsApp phone={site.contact.whatsapp} />
      </body>
    </html>
  );
}
