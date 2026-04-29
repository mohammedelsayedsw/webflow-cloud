"use client";

/**
 * ScandiwebFooter – 1:1 replica of scandiweb.com footer.
 *
 * Audit source: scandiweb.com homepage CSS + DOM (cdn.prod.website-files.com/.../scandiweb.shared.*.min.css).
 * Spec:
 *   - Background: linear-gradient(90deg, #10132c, #3f4aaf29 80%)
 *   - Newsletter: 2-col strip · headline #98ff98 Golos 24/36 700 · "Learn more" outline-beige button
 *     · email input bottom-bordered white · Subscribe button #3f4aaf
 *   - Link grid: 5 cols (4 link cols + 1 company description with inline "Contact us" mint link)
 *     · 3 visible links + "View more ▾" expand on cols 1-3 · all 4 links shown on Company
 *     · page_links: #dadcf1 Golos 14/20, hover underline
 *   - Bottom band: socials left + cert badges right · circular outlined social icons
 *   - Copyright row: © left, legal right · #dadcf1
 */

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Link = { label: string; href: string };

const COLUMNS: { title: string; links: Link[]; collapsible: boolean }[] = [
  {
    title: "Web Development & Design",
    collapsible: true,
    links: [
      { label: "Website Development", href: "https://scandiweb.com/services/web-development" },
      { label: "eCommerce Design Services", href: "https://scandiweb.com/services/ecommerce-design-services" },
      { label: "eCommerce integrations", href: "https://scandiweb.com/integrations" },
      { label: "PWA Development", href: "https://scandiweb.com/pwa-development-ecommerce" },
      { label: "Pimcore Support", href: "https://scandiweb.com/services/pimcore-support" },
      { label: "B2B eCommerce", href: "https://scandiweb.com/b2b-ecommerce-solutions" },
      { label: "Hyvä Theme Development", href: "https://scandiweb.com/services/hyva-themes" },
      { label: "Headless Web Development", href: "https://scandiweb.com/headless-ecommerce-solutions" },
      { label: "Adobe Commerce Services", href: "https://scandiweb.com/adobe-commerce-magento" },
      { label: "Bigcommerce Development", href: "https://scandiweb.com/services/bigcommerce-development-services" },
      { label: "Salesforce Commerce Cloud", href: "https://scandiweb.com/services/salesforce-commerce-cloud" },
      { label: "Web Hosting", href: "https://scandiweb.com/services/aws-hosting-services-readymage" },
      { label: "SAP Commerce Cloud Implementation", href: "https://scandiweb.com/services/sap-commerce-cloud" },
    ],
  },
  {
    title: "Magento Services",
    collapsible: true,
    links: [
      { label: "Magento Development", href: "https://scandiweb.com/magento-website-development" },
      { label: "Magento Support & Maintenance", href: "https://scandiweb.com/magento-support" },
      { label: "Magento Design", href: "https://scandiweb.com/magento-design-service" },
      { label: "Magento Migration", href: "https://scandiweb.com/adobe-magento-2-migration" },
      { label: "Magento Speed & Performance Optimization", href: "https://scandiweb.com/magento-performance-optimization" },
      { label: "Magento Integration", href: "https://scandiweb.com/magento-integration-services" },
      { label: "Magento SEO", href: "https://scandiweb.com/magento-seo-services" },
      { label: "Magento eCommerce Developers", href: "https://scandiweb.com/magento-commerce-developers" },
      { label: "Magento Consulting", href: "https://scandiweb.com/magento-consulting" },
      { label: "Magento Hosting", href: "https://scandiweb.com/services/magento-hosting" },
      { label: "Magento B2B", href: "https://scandiweb.com/magento-b2b" },
    ],
  },
  {
    title: "Growth Marketing",
    collapsible: true,
    links: [
      { label: "Enterprise SEO Services", href: "https://scandiweb.com/seo-services" },
      { label: "Digital Marketing", href: "https://scandiweb.com/digital-marketing-services" },
      { label: "PPC and Paid Advertising", href: "https://scandiweb.com/services/paid-search-advertising" },
      { label: "Email Marketing", href: "https://scandiweb.com/email-marketing-services" },
      { label: "AEO & AI search", href: "https://scandiweb.com/services/ai-search-optimization" },
      { label: "Website Localization Services", href: "https://scandiweb.com/services/website-localization-services" },
      { label: "CRO Services", href: "https://scandiweb.com/services/cro-ux" },
      { label: "Data Analytics Services", href: "https://scandiweb.com/ecommerce-analytics-services" },
      { label: "AI Tools for Business", href: "https://scandiweb.com/services/ai-content-strategy-for-ecommerce" },
      { label: "eCommerce Support", href: "https://scandiweb.com/ecommerce-support-services" },
    ],
  },
  {
    title: "Company",
    collapsible: false,
    links: [
      { label: "About us", href: "https://scandiweb.com/about" },
      { label: "Blog", href: "https://scandiweb.com/blog/" },
      { label: "Careers", href: "https://scandiweb.com/careers" },
    ],
  },
];

const SOCIALS: { label: string; href: string; svg: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/scandiweb/",
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/scandiweb",
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/c/Scandiwebcom",
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/scandiweb/",
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/scandiweb",
    svg: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@scandiweb",
    svg: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
      </svg>
    ),
  },
];

const CERTS = [
  { label: "ISO 9001",  src: "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/69b159f45ee7b675bf186570_ISO%209001.svg" },
  { label: "ISO 27001", src: "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/69b159f4f74db6f5d5c588f0_ISO%2027001.svg" },
  { label: "ISO 27017", src: "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/69b159f4beec80dfc273e1f0_ISO%2027017.svg" },
  { label: "PCI DSS",   src: "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/69b159f4510babc0e1b3d84a_PCI%20DSS.svg" },
];

const LEGAL = [
  { label: "Terms of Services", href: "https://scandiweb.com/terms-of-service" },
  { label: "Privacy Policy",    href: "https://scandiweb.com/privacy-policy" },
  { label: "Manage Cookies",    href: "https://scandiweb.com/cookie-policy" },
  { label: "Sitemap",           href: "https://scandiweb.com/pages" },
];

const FOOTER_BG = "linear-gradient(90deg, #10132c 0%, rgba(63, 74, 175, 0.16) 100%)";
const PAGE_LINK_COLOR = "#dadcf1";
const HEADLINE_GREEN = "#98ff98";
const FONT_GOLOS = "var(--font-golos), Golos Text, sans-serif";

function FooterColumn({ title, links, collapsible }: { title: string; links: Link[]; collapsible: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const visibleLinks = collapsible && !expanded ? links.slice(0, 3) : links;
  return (
    <div>
      <div
        style={{
          color: "#fff",
          fontFamily: FONT_GOLOS,
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "28px",
          marginBottom: "20px",
        }}
      >
        {title}
      </div>
      <ul className="flex flex-col" style={{ gap: "12px" }}>
        {visibleLinks.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              style={{
                color: PAGE_LINK_COLOR,
                fontFamily: FONT_GOLOS,
                fontSize: "14px",
                lineHeight: "20px",
                textDecoration: "none",
                textUnderlineOffset: "3px",
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      {collapsible && links.length > 3 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            color: "#fff",
            fontFamily: FONT_GOLOS,
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "20px",
            marginTop: "16px",
            background: "transparent",
            border: 0,
            padding: 0,
          }}
          aria-expanded={expanded}
        >
          {expanded ? "View less" : "View more"}
          <span style={{ marginLeft: "6px", display: "inline-flex" }}>
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>
        </button>
      )}
    </div>
  );
}

export function ScandiwebFooter() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: FOOTER_BG, color: "#fff" }}>
      {/* Newsletter strip */}
      <div className="wrap pt-16 md:pt-20 pb-10 md:pb-14 grid gap-10 md:gap-16 md:grid-cols-2 items-end">
        <div>
          <h3
            style={{
              color: HEADLINE_GREEN,
              fontFamily: FONT_GOLOS,
              fontSize: "26px",
              fontWeight: 700,
              lineHeight: "36px",
              maxWidth: "26ch",
            }}
          >
            Get our latest insights, trends, and updates read by 10,000+ eCommerce leaders
          </h3>
          <a
            href="https://newsletter.scandiweb.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center transition-colors"
            style={{
              marginTop: "20px",
              padding: "12px 32px",
              border: "2px solid #f8f4ef",
              borderRadius: "2px",
              color: "#fff",
              backgroundColor: "transparent",
              fontFamily: FONT_GOLOS,
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f8f4ef";
              e.currentTarget.style.color = "#0f132b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            Learn more
          </a>
        </div>

        <form
          action="https://newsletter.scandiweb.com/"
          method="get"
          className="flex flex-col md:flex-row items-stretch md:items-end gap-4 md:gap-6"
        >
          <label className="flex-1 flex flex-col gap-2">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address*"
              className="bg-transparent text-white placeholder-white/60 focus:outline-none"
              style={{
                borderBottom: "2px solid #fff",
                padding: "10px 0",
                fontFamily: FONT_GOLOS,
                fontSize: "16px",
                color: "#fff",
              }}
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center cursor-pointer transition-colors"
            style={{
              backgroundColor: "#3f4aaf",
              border: "2px solid #3f4aaf",
              borderRadius: "2px",
              padding: "12px 32px",
              color: "#fff",
              fontFamily: FONT_GOLOS,
              fontSize: "17px",
              fontWeight: 600,
              letterSpacing: "0.4px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#3f4aaf";
            }}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* 5-column grid: 4 link columns + scandiweb description */}
      <div className="wrap pt-10 md:pt-14 pb-12 md:pb-16 grid gap-12 md:gap-10 md:grid-cols-2 lg:grid-cols-5">
        {COLUMNS.map((col) => (
          <FooterColumn key={col.title} {...col} />
        ))}
        <div>
          <div
            style={{
              color: "#fff",
              fontFamily: FONT_GOLOS,
              fontSize: "22px",
              fontWeight: 700,
              lineHeight: "28px",
              marginBottom: "16px",
            }}
          >
            scandiweb
          </div>
          <p
            style={{
              color: PAGE_LINK_COLOR,
              fontFamily: FONT_GOLOS,
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            scandiweb is a full-service eCommerce agency providing expert development and digital marketing solutions.
          </p>
          <p
            style={{
              color: PAGE_LINK_COLOR,
              fontFamily: FONT_GOLOS,
              fontSize: "14px",
              lineHeight: "22px",
              marginTop: "12px",
            }}
          >
            <a
              href="https://scandiweb.com/contact"
              target="_blank"
              rel="noreferrer"
              style={{ color: HEADLINE_GREEN, textDecoration: "none", fontWeight: 600 }}
              onMouseEnter={(e) => { e.currentTarget.style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { e.currentTarget.style.textDecoration = "none"; }}
            >
              Contact us
            </a>{" "}
            for a tailored growth plan.
          </p>
        </div>
      </div>

      {/* Socials + certs row */}
      <div className="wrap pb-8 md:pb-10 flex flex-col md:flex-row gap-6 md:gap-10 md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="inline-flex items-center justify-center transition-colors hover:bg-white/10"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "9999px",
                border: "1.5px solid rgba(255,255,255,0.55)",
                color: "#fff",
              }}
            >
              {s.svg}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {CERTS.map((c) => (
            <img
              key={c.label}
              src={c.src}
              alt={c.label}
              title={c.label}
              style={{ height: "44px", width: "auto", display: "block" }}
            />
          ))}
        </div>
      </div>

      {/* Copyright + legal row */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
        <div className="wrap py-6 flex flex-col md:flex-row gap-3 md:gap-6 md:items-center md:justify-between">
          <span style={{ color: PAGE_LINK_COLOR, fontFamily: FONT_GOLOS, fontSize: "13px" }}>
            © {year} scandiweb. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  style={{
                    color: PAGE_LINK_COLOR,
                    fontFamily: FONT_GOLOS,
                    fontSize: "13px",
                    textDecoration: "none",
                    textUnderlineOffset: "3px",
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
