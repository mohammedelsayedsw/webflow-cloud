"use client";

/**
 * ScandiwebHeader – top bar (mirrors scandiweb.com bar) + drawer (LP-styled).
 *
 * The drawer matches the LP's own visual language (dark navy, Golos Text, mint accent,
 * beige outline CTA) instead of mirroring scandiweb.com's white drawer. Decision:
 * brand consistency with the body of the LP beats 1:1 fidelity to the parent site for
 * the menu surface. Footer stays 1:1 with scandiweb.com.
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PRIMARY_LINKS = [
  { n: "1", label: "Home", href: "https://scandiweb.com/" },
  { n: "2", label: "Services", href: "https://scandiweb.com/services" },
  { n: "3", label: "Portfolio", href: "https://scandiweb.com/portfolio" },
  { n: "4", label: "Blog", href: "https://scandiweb.com/blog" },
  { n: "5", label: "Contact", href: "https://scandiweb.com/contact" },
];

const SECONDARY_LINKS = [
  { label: "About", href: "https://scandiweb.com/about" },
  { label: "Team", href: "https://scandiweb.com/team" },
  { label: "Careers", href: "https://scandiweb.com/careers", external: true },
];

const CTA = {
  text: "Custom enterprise software 2-10x faster at up to 90% lower cost",
  cta: "Discover what's possible",
  href: "https://scandiweb.ai/agile",
};

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M0 4H24" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M0 12H24" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M0 20H16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" aria-hidden>
    <path
      d="M16.7723 17.7723C16.4687 18.0759 15.9708 18.0759 15.6611 17.7723L9 11.1112L2.3389 17.7723C2.03529 18.0759 1.53738 18.0759 1.2277 17.7723C0.924099 17.4687 0.924099 16.9708 1.2277 16.6611L7.8888 10L1.2277 3.3389C0.924099 3.03529 0.924099 2.53738 1.2277 2.2277C1.53131 1.9241 2.02922 1.9241 2.3389 2.2277L9 8.8888L15.6611 2.2277C15.9647 1.9241 16.4626 1.9241 16.7723 2.2277C17.0759 2.53131 17.0759 3.02922 16.7723 3.3389L10.1112 10L16.7723 16.6611C17.0759 16.9708 17.0759 17.4687 16.7723 17.7723Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.7"
    />
  </svg>
);

export function ScandiwebHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = original; };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Top bar – absolute over hero */}
      <header className="absolute top-0 inset-x-0 z-[60] h-[60px] md:h-[75px]">
        <div className="wrap flex h-full items-center justify-between">
          <a
            href="https://scandiweb.com/"
            aria-label="scandiweb"
            className="block transition-opacity hover:opacity-80"
          >
            <img
              src="/logos/scandiweb.svg"
              alt="scandiweb"
              className="h-[18px] md:h-5 w-auto block"
            />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center cursor-pointer text-white transition-colors hover:text-[var(--sw-mint)]"
            style={{ fontFamily: "var(--font-golos), Golos Text, sans-serif" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "1px",
                marginRight: "16px",
                transform: "translateY(-2px)",
                lineHeight: 1,
              }}
            >
              {open ? "close" : "menu"}
            </span>
            <span className="inline-flex">
              {open ? <CloseIcon /> : <HamburgerIcon />}
            </span>
          </button>
        </div>
      </header>

      {/* Drawer – LP-styled (dark navy, mint accent, beige outline CTA) */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 z-50 h-full w-full md:w-[600px] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              style={{
                background:
                  "radial-gradient(800px 600px at 90% 0%, #1a2060 0%, transparent 55%)," +
                  "radial-gradient(700px 500px at 10% 100%, rgba(110,247,110,0.06) 0%, transparent 55%)," +
                  "linear-gradient(180deg, #10132c 0%, #0a0d24 100%)",
                boxShadow: "-4px 0 84px 20px rgba(7,10,30,0.6)",
              }}
            >
              <div
                className="flex flex-col px-8 md:px-12 pb-10"
                style={{ paddingTop: "32px", minHeight: "100%" }}
              >
                {/* Drawer top – code label + close button */}
                <div className="flex items-center justify-between mb-12 md:mb-16">
                  <span
                    className="inline-flex items-center gap-3 text-white/60"
                    style={{
                      fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>menu</span>
                    <span className="block h-px w-8 bg-[var(--sw-mint)]/60" aria-hidden />
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="inline-flex items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-colors"
                    style={{
                      fontFamily: "var(--font-golos), Golos Text, sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    <span>close</span>
                    <CloseIcon />
                  </button>
                </div>

                {/* Primary links – numbered, animated, hover mint */}
                <ul className="flex flex-col gap-2 md:gap-3 mb-10">
                  {PRIMARY_LINKS.map((l, i) => (
                    <motion.li
                      key={l.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                    >
                      <a
                        href={l.href}
                        className="group flex items-baseline gap-5 md:gap-6 transition-colors text-white hover:text-[var(--sw-mint)]"
                        style={{
                          fontFamily: "var(--font-golos), Golos Text, sans-serif",
                          fontSize: "40px",
                          fontWeight: 700,
                          lineHeight: "1.1",
                          letterSpacing: "-0.015em",
                          textDecoration: "none",
                        }}
                      >
                        <span
                          className="text-white/40 group-hover:text-[var(--sw-mint)]/80 transition-colors tabular-nums"
                          style={{
                            fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                            fontSize: "12px",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            transform: "translateY(-6px)",
                          }}
                        >
                          {l.n}
                        </span>
                        <span className="inline-flex items-center gap-3 transition-transform group-hover:translate-x-1">
                          {l.label}
                          <ArrowUpRight
                            className="h-7 w-7 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--sw-mint)]"
                            aria-hidden
                          />
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Animated divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
                  className="origin-left h-px w-full bg-white/10 mb-8"
                  aria-hidden
                />

                {/* Secondary links – smaller, muted, hover white */}
                <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
                  {SECONDARY_LINKS.map((l, i) => (
                    <motion.li
                      key={l.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.55 + i * 0.04, duration: 0.3 }}
                    >
                      <a
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noreferrer" : undefined}
                        className="text-white/65 hover:text-white transition-colors"
                        style={{
                          fontFamily: "var(--font-golos), Golos Text, sans-serif",
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "24px",
                          textDecoration: "none",
                        }}
                      >
                        {l.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA card – LP-style: dark surface, beige outline button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.45, ease: "easeOut" }}
                  className="mt-auto rounded-[4px] p-6 md:p-7"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(63,74,175,0.10) 0%, rgba(16,19,44,0.50) 100%)",
                    border: "1px solid rgba(230,231,239,0.10)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="text-white"
                    style={{
                      fontFamily: "var(--font-golos), Golos Text, sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "1.25",
                      letterSpacing: "-0.005em",
                      maxWidth: "32ch",
                    }}
                  >
                    {CTA.text}
                  </div>
                  <a
                    href={CTA.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-[2px] px-7 transition-colors"
                    style={{
                      fontFamily: "var(--font-golos), Golos Text, sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      border: "1px solid var(--sw-beige)",
                      color: "var(--sw-beige)",
                      backgroundColor: "transparent",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--sw-beige)";
                      e.currentTarget.style.color = "var(--sw-black)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "var(--sw-beige)";
                    }}
                  >
                    {CTA.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
