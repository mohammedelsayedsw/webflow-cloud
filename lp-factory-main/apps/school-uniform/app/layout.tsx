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

const SITE = "https://school-uniform-commerce.vercel.app";

export const metadata: Metadata = {
  title: "School Uniform Commerce | scandiweb",
  description:
    "A pre-built commerce platform for school uniform retailers. Parent-child-school accounts, school-gated catalogs, ERP integration, fitting appointments, returns with coupon refunds, and term-aware delivery. Proven live on Canada's leading school uniform provider.",
  metadataBase: new URL(SITE),
  openGraph: {
    title: "School Uniform Commerce | scandiweb",
    description:
      "A pre-built commerce platform for school uniform retailers. Proven live on Canada's leading school uniform provider.",
    type: "website",
    siteName: "scandiweb",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Uniform Commerce | scandiweb",
    description:
      "A pre-built commerce platform for school uniform retailers. Proven live on Canada's leading school uniform provider.",
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
