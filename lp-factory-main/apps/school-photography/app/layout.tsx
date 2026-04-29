import type { Metadata } from "next";
import { Golos_Text, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE = "https://school-photography-commerce.vercel.app";

export const metadata: Metadata = {
  title: "School Photography Commerce | scandiweb",
  description:
    "A pre-built operations stack for school photography operators. Student data model, self-service school portal, batch exports, ID card workflow, dual SSO, legacy integrations. Proven live on Australia's national school photography operator.",
  metadataBase: new URL(SITE),
  openGraph: {
    title: "School Photography Commerce | scandiweb",
    description:
      "A pre-built operations stack for school photography operators. Proven live on Australia's national school photography operator.",
    type: "website",
    siteName: "scandiweb",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Photography Commerce | scandiweb",
    description:
      "A pre-built operations stack for school photography operators. Proven live on Australia's national school photography operator.",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "scandiweb" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${golos.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
