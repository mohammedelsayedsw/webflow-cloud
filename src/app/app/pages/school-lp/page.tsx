"use client";

import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Minus,
} from "lucide-react";

/* ------------------------------------------------------------------
   Scroll-reveal primitive — fades content in when it enters viewport.
   ------------------------------------------------------------------ */
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* Animated SVG path that draws its stroke when in view. */
type DrawnPathProps = {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  strokeOpacity?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
};

function DrawnPath({
  d,
  stroke = "currentColor",
  strokeWidth = 1.5,
  strokeDasharray,
  strokeOpacity,
  opacity,
  duration = 1.4,
  delay = 0,
}: DrawnPathProps) {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeOpacity={strokeOpacity}
      fill="none"
      pathLength={1}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: opacity ?? 1 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      viewport={{ once: true, amount: 0.3 }}
    />
  );
}

/* ==================================================================
   SCHOOL PHOTOGRAPHY COMMERCE — productized LP
   scandiweb brand: Secular One (head) + Inter (body) + JetBrains Mono (label).
   Primary accent: scandiweb Red #E04F4F. Page base: #10132C (scandiweb Black).
   ================================================================== */

/* ------------------------------------------------------------------
   Primitives
   ------------------------------------------------------------------ */

/* Buttons — outline only, per scandiweb.com Homepage v2 pattern.
   On dark bg: 1px beige stroke + beige text, transparent fill.
   On light bg: 1px blue stroke + blue text, transparent fill.
   Height 48px · padding 32×12 · radius 2px · Golos 600 17px. */
const btnPrimary =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[2px] border border-[var(--sw-beige)] bg-transparent text-[var(--sw-beige)] px-8 text-[17px] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition font-head font-semibold";
const btnSecondary =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[2px] border border-white/30 bg-transparent text-white/80 px-8 text-[17px] hover:border-white/60 hover:text-white transition font-head font-semibold";
const btnOutline = btnSecondary; // alias kept for existing usages
const btnGhost =
  "inline-flex items-center gap-2 rounded-[2px] text-white/80 px-3 py-1.5 text-[15px] hover:text-white transition font-head font-semibold";

function SectionLabel({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="label-code mb-5 inline-flex items-center gap-3">
      {index && <span className="text-white/55">{index}</span>}
      {index && <span className="h-px w-6 bg-white/15" />}
      <span>{children}</span>
    </div>
  );
}

function Stat({ value, label, accent }: { value: string; label: string; accent?: string }) {
  return (
    <div className="flex flex-col gap-2 min-w-0">
      <div
        className="font-head text-[40px] md:text-[52px] lg:text-[64px] leading-none tabular-nums"
        style={{ color: accent ?? "var(--sw-white)" }}
      >
        {value}
      </div>
      <div className="label-code text-[10px] leading-snug">{label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Header — scandiweb.com pattern · wordmark + menu hamburger
   ------------------------------------------------------------------ */

function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-40">
      <div className="wrap flex items-center justify-between h-20 md:h-24">
        <a href="#" aria-label="scandiweb" className="block">
          {/* Official scandiweb wordmark, white variant · matches scandiweb.com nav sizing */}
          <img
            src="/logos/scandiweb.svg"
            alt="scandiweb"
            className="h-[18px] md:h-5 w-auto"
          />
        </a>
        <button
          type="button"
          className="inline-flex items-center gap-2.5 text-white font-head text-[14px] font-semibold"
          aria-label="Open menu"
        >
          <span>menu</span>
          <span className="flex flex-col gap-[4px]">
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------
   Hero — blue signature background, full viewport, left-aligned
   ------------------------------------------------------------------ */

function HeroBg() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 620px at 18% 22%, #2a3380 0%, transparent 55%)," +
            "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
            "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-70 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(620px 900px at 28% 62%, rgba(7, 10, 30, 0.85), transparent 60%)," +
            "radial-gradient(540px 720px at 72% 28%, rgba(63, 74, 175, 0.22), transparent 60%)",
          filter: "blur(50px)",
        }}
      />
    </>
  );
}

/* Glass quote card · real client voice · picks up ambient light */
function HeroCaseCard() {
  return (
    <a
      href="#reference"
      className="group relative block overflow-hidden rounded-[4px] backdrop-blur"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.04) 100%), rgba(16,19,44,0.55)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.12)",
      }}
    >
      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between label-code text-white/70 mb-6">
          <span>Go-live day · Q1 2025</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--sw-mint)] pulse-green" />
        </div>

        <blockquote className="font-head text-white text-[20px] md:text-[22px] leading-[1.25] mb-5">
          “Money coming in. No phone calls. No upset customers. Smooth sailing.”
        </blockquote>

        <div className="pt-4 border-t border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="text-white text-[13px] md:text-[14px] font-medium">
              David van Gelder
            </div>
            <div className="label-code text-white/55 mt-1">
              Operations · Advanced Life
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-white/70 mt-0.5 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
        </div>

        {/* metric tiles — launch numbers */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            ["14 wk", "to live"],
            ["44,891", "students"],
            ["0", "incidents"],
          ].map(([k, l]) => (
            <div
              key={k}
              className="rounded-[2px] border border-white/10 bg-white/[0.03] px-3 py-3"
            >
              <div className="font-head text-white text-[18px] md:text-[20px] leading-none tabular-nums">
                {k}
              </div>
              <div className="label-code mt-2 text-[9px] text-white/55">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

/* Client-logo trust bar — mirrors scandiweb.com current lineup */
function TrustLogos() {
  const logos = [
    { src: "/logos/clients/puma.svg",     alt: "PUMA" },
    { src: "/logos/clients/michigan.svg", alt: "University of Michigan" },
    { src: "/logos/clients/nytimes.svg",  alt: "The New York Times" },
    { src: "/logos/clients/adobe.svg",    alt: "Adobe" },
    { src: "/logos/clients/acer.png",     alt: "Acer" },
    { src: "/logos/clients/samsung.svg",  alt: "Samsung" },
  ];
  return (
    <div
      className="relative z-10"
      style={{
        background: "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="wrap py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        <div className="font-head font-bold text-white text-[16px] md:text-[18px] leading-[1.35] max-w-[18ch] shrink-0">
          Trusted by 600+ leading brands worldwide
        </div>
        <div className="flex flex-wrap items-center gap-x-8 md:gap-x-12 gap-y-5 flex-1 md:justify-end">
          {logos.map((l, i) => (
            <img
              key={i}
              src={l.src}
              alt={l.alt}
              className="w-auto opacity-80"
              style={{
                maxHeight: "22px",
                height: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      <HeroBg />
      <Header />

      {/* Hero body — fills the viewport minus trust strip */}
      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-28 md:pt-36 pb-16 md:pb-24 w-full">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
            {/* LEFT · copy */}
            <div>
              {/* Pill eyebrow — product category */}
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8 md:mb-10">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  scandiweb industry solution
                </span>
              </div>

              {/* H1 — product name with mint accent on one word */}
              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[14ch]">
                School photography{" "}
                <span style={{ color: "var(--sw-mint)" }}>commerce</span>
              </h1>

              {/* Subhead — integrated capability line + client reveal */}
              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[54ch] leading-relaxed">
                Built for how school photography actually operates. Student
                data, self-service school portal, automated batch exports, ID
                card workflow, dual SSO, legacy integrations.
              </p>
              <p className="mt-4 text-[14px] md:text-[15px] text-white/80 max-w-[54ch] leading-relaxed">
                <span className="font-bold text-white">Live in 14 weeks</span>{" "}
                with{" "}
                <span className="font-bold text-white">Advanced Life</span>,
                Australia&apos;s national school photography operator.
              </p>

              {/* Scroll indicator — matches Figma node 31611:43342: 14x20 pill + Inter 14px lowercase */}
              <div className="mt-14 md:mt-20 flex items-center gap-3 text-white">
                <span
                  className="relative inline-flex items-center justify-center border border-white/70 rounded-full"
                  style={{ width: "14px", height: "20px" }}
                  aria-hidden
                >
                  <span className="absolute top-[4px] left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-white/80" />
                </span>
                <span className="text-[14px] leading-none">scroll to discover</span>
              </div>
            </div>

            {/* RIGHT · glass case card */}
            <div className="lg:pt-24">
              <HeroCaseCard />
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar — real client logos */}
      <TrustLogos />
    </section>
  );
}


/* ==================================================================
   SECTION · Four fires + client pullquote
   Dark · 4 problem cards + 1 big quote from David van Gelder
   ================================================================== */

function ProblemFires() {
  const fires = [
    {
      n: "01",
      title: "Legacy stack nobody wants to touch",
      body:
        "Five systems, no unified data model. GlobalJade, ImageDatabase, The Hub, CRM, eWay. Downtime risk compounds every year.",
    },
    {
      n: "02",
      title: "Student data scattered",
      body:
        "Names as single text strings. SIC codes tied to images, not students. Legacy database untouched for five years.",
    },
    {
      n: "03",
      title: "Hard Q1 seasonal peak",
      body:
        "Photography season collides with yearbooks, ID cards, and parent orders. A manual stack breaks at peak.",
    },
    {
      n: "04",
      title: "Operations in friction",
      body:
        "Ops team runs manual exports, unblocks exception-pool orders, keys the same data twice into legacy and ERP.",
    },
  ];

  return (
    <section id="fires" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      {/* top accent line draws in on scroll */}
      <svg
        className="absolute top-0 inset-x-0 h-px opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={1.8} />
      </svg>

      <div className="wrap relative">
        <div className="max-w-[64ch] mb-14 md:mb-20">
          <Reveal>
            <div className="label-code mb-6 text-white/55">The four fires</div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              What we walked into at{" "}
              <span className="text-[var(--sw-mint)]">Advanced&nbsp;Life</span>
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[56ch] leading-relaxed">
              Australia&apos;s national school photography operator. Hundreds of schools. Tens of thousands of students. One hard Q1 deadline. These are the fires any mid-market operator recognises.
            </p>
          </Reveal>
        </div>

        {/* 4 fire cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-16 md:mb-24">
          {fires.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08}>
              <div className="relative rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-7 h-full">
                <div className="label-code text-white/55 mb-5">Fire · {f.n}</div>
                <h3 className="font-head text-white text-[20px] md:text-[22px] leading-[1.15] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {f.body}
                </p>
                {/* accent tick line */}
                <span className="absolute top-0 left-6 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* client pullquote — David van Gelder, Ops */}
        <Reveal>
          <figure className="max-w-[72ch] mx-auto text-center">
            <svg aria-hidden className="mx-auto mb-6 h-8 opacity-60" viewBox="0 0 48 32" fill="none">
              <path
                d="M4 24 Q 4 4, 20 4 L 20 12 Q 14 12, 12 20 L 20 20 L 20 30 L 4 30 Z M28 24 Q 28 4, 44 4 L 44 12 Q 38 12, 36 20 L 44 20 L 44 30 L 28 30 Z"
                fill="var(--sw-mint)"
              />
            </svg>
            <blockquote className="font-head text-white text-[24px] md:text-[36px] lg:text-[44px] leading-[1.2] tracking-[-0.01em]">
              We had <span className="text-[var(--sw-mint)]">40 people doing what should take 25</span>. Burning cash from all of these client service officers.
            </blockquote>
            <figcaption className="mt-7 label-code text-white/60">
              David van Gelder · Operations · Advanced Life
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================================================================
   SECTION · Differentiator · ONE modeling decision · BEIGE
   ================================================================== */

function Differentiator() {
  const decisions = [
    {
      n: "01",
      title: "Multi-child account",
      body:
        "One parent manages many students across many schools. Each student has their own grade, school, and personalisation. The student switcher drives cart, catalog, and context.",
    },
    {
      n: "02",
      title: "School-gated catalog",
      body:
        "Products scoped to schools, campuses, and grades. Parents only see what the selected student is authorised for. Guests see limited views with prices hidden.",
    },
    {
      n: "03",
      title: "Operational integration layer",
      body:
        "Real-time bidirectional sync with the ERP. Fallback cron jobs, retry logic, and audit logs built in from day one.",
    },
  ];

  return (
    <section
      id="differentiator"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden text-[var(--sw-black)]"
    >
      {/* hairline opener */}
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />

      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-6 text-[var(--sw-black)]/55">
            What makes it different
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[60px] leading-[1.04] max-w-[24ch]">
            The{" "}
            <span className="text-[var(--sw-blue)]">parent, student, and school</span>{" "}
            are three separate entities. So is the architecture
          </h2>
          <p className="mt-6 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 leading-relaxed max-w-[62ch]">
            Every feature in this stack flows from one modeling decision. Treat
            the parent, each student, and each school as distinct, linked
            entities. Generic platforms get this wrong. It is what makes every
            downstream feature work.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid lg:grid-cols-[0.9fr_1.25fr] gap-12 lg:gap-20 items-start">
          {/* Left · numbered list of architecture decisions */}
          <div className="space-y-8">
            {decisions.map((d, i) => (
              <Reveal key={d.n} delay={i * 0.1}>
                <div className="flex gap-5 md:gap-7 border-b border-[var(--sw-black)]/10 pb-7 last:border-0">
                  <div className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--sw-black)]/25 font-head font-semibold text-[13px] text-[var(--sw-black)]">
                    {d.n}
                  </div>
                  <div>
                    <h3 className="font-head text-[var(--sw-black)] text-[20px] md:text-[22px] leading-snug mb-2">
                      {d.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed max-w-[54ch]">
                      {d.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right · schema-style entity diagram */}
          <Reveal delay={0.15}>
            <div className="relative">
              <SvgEntitySchema />
              <div className="mt-6 flex items-center gap-4">
                <span className="label-code text-[var(--sw-black)]/55">
                  FIG.02 · Data model
                </span>
                <span className="h-px flex-1 bg-[var(--sw-black)]/10" />
                <span className="label-code text-[var(--sw-black)]/45">
                  3 tables · 2 joins
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Entity schema diagram · three staggered tables with PK/FK rows +
   curved dashed FK connectors · premium DB-IDE aesthetic, original to this LP */
function SvgEntitySchema() {
  const W = 720;
  const H = 520;

  type Field = {
    name: string;
    type: string;
    key?: "pk" | "fk";
  };

  const tables: {
    id: string;
    title: string;
    count: string;
    x: number;
    y: number;
    w: number;
    accent: string;
    fields: Field[];
  }[] = [
    {
      id: "parents",
      title: "parents",
      count: "1 : many",
      x: 0,
      y: 80,
      w: 218,
      accent: "#3F4AAF",
      fields: [
        { name: "id", type: "uuid", key: "pk" },
        { name: "email", type: "text" },
        { name: "phone", type: "text" },
        { name: "created_at", type: "ts" },
      ],
    },
    {
      id: "students",
      title: "students",
      count: "pivot",
      x: 251,
      y: 32,
      w: 218,
      accent: "#10132C",
      fields: [
        { name: "id", type: "uuid", key: "pk" },
        { name: "parent_id", type: "parents", key: "fk" },
        { name: "school_id", type: "schools", key: "fk" },
        { name: "grade", type: "int" },
        { name: "sibling_of", type: "students", key: "fk" },
        { name: "sic", type: "text" },
      ],
    },
    {
      id: "schools",
      title: "schools",
      count: "1 : many",
      x: 502,
      y: 108,
      w: 218,
      accent: "#3F4AAF",
      fields: [
        { name: "id", type: "uuid", key: "pk" },
        { name: "name", type: "text" },
        { name: "sic_codes", type: "text[]" },
        { name: "region", type: "text" },
      ],
    },
  ];

  const headerH = 44;
  const rowH = 30;

  const tableH = (t: (typeof tables)[number]) => headerH + rowH * t.fields.length + 14;

  const fieldY = (t: (typeof tables)[number], i: number) =>
    t.y + headerH + 14 + i * rowH + rowH / 2;

  const parents = tables[0];
  const students = tables[1];
  const schools = tables[2];

  // join endpoints
  const parentsIdY = fieldY(parents, 0);
  const parentsIdX = parents.x + parents.w;

  const schoolsIdY = fieldY(schools, 0);
  const schoolsIdX = schools.x;

  const studentsParentY = fieldY(students, 1);
  const studentsSchoolY = fieldY(students, 2);
  const studentsLeftX = students.x;
  const studentsRightX = students.x + students.w;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label="parents, students, schools — relational schema"
    >
      <defs>
        <marker id="arrowBlue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3F4AAF" />
        </marker>
      </defs>

      {/* Tables */}
      {tables.map((t, ti) => {
        const h = tableH(t);
        return (
          <motion.g
            key={t.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + ti * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* card */}
            <rect
              x={t.x}
              y={t.y}
              width={t.w}
              height={h}
              rx={3}
              fill="#ffffff"
              stroke="rgba(16,19,44,0.12)"
              strokeWidth={1}
            />
            {/* accent strip top */}
            <rect x={t.x} y={t.y} width={t.w} height={4} rx={2} fill={t.accent} />

            {/* Header row */}
            <text
              x={t.x + 18}
              y={t.y + 27}
              fill="#10132C"
              fontFamily="JetBrains Mono"
              fontSize="13"
              fontWeight="700"
              letterSpacing="0.5"
            >
              {t.title}
            </text>
            <text
              x={t.x + t.w - 18}
              y={t.y + 27}
              fill="rgba(16,19,44,0.45)"
              fontFamily="JetBrains Mono"
              fontSize="10"
              letterSpacing="1.5"
              textAnchor="end"
            >
              {t.count.toUpperCase()}
            </text>

            {/* header separator */}
            <line
              x1={t.x}
              x2={t.x + t.w}
              y1={t.y + headerH}
              y2={t.y + headerH}
              stroke="rgba(16,19,44,0.08)"
              strokeWidth={1}
            />

            {/* Field rows */}
            {t.fields.map((f, i) => {
              const y = t.y + headerH + i * rowH;
              return (
                <g key={f.name}>
                  {/* row hover tint */}
                  {i % 2 === 1 && (
                    <rect x={t.x + 1} y={y + 1} width={t.w - 2} height={rowH - 1} fill="rgba(63,74,175,0.025)" />
                  )}
                  {/* key icon */}
                  {f.key === "pk" && (
                    <g transform={`translate(${t.x + 14}, ${y + rowH / 2 - 6})`}>
                      <rect x={0} y={0} width={16} height={12} rx={2} fill="#FF5A31" opacity={0.9} />
                      <text x={8} y={9} fontSize="8" fontFamily="JetBrains Mono" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="0.5">PK</text>
                    </g>
                  )}
                  {f.key === "fk" && (
                    <g transform={`translate(${t.x + 14}, ${y + rowH / 2 - 6})`}>
                      <rect x={0} y={0} width={16} height={12} rx={2} fill="#3F4AAF" opacity={0.92} />
                      <text x={8} y={9} fontSize="8" fontFamily="JetBrains Mono" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="0.5">FK</text>
                    </g>
                  )}
                  {!f.key && (
                    <circle cx={t.x + 22} cy={y + rowH / 2} r={2} fill="rgba(16,19,44,0.25)" />
                  )}

                  {/* field name */}
                  <text
                    x={t.x + 40}
                    y={y + rowH / 2 + 4}
                    fill="#10132C"
                    fontFamily="JetBrains Mono"
                    fontSize="12"
                  >
                    {f.name}
                  </text>
                  {/* type */}
                  <text
                    x={t.x + t.w - 16}
                    y={y + rowH / 2 + 4}
                    fill={f.key === "fk" ? "#3F4AAF" : "rgba(16,19,44,0.45)"}
                    fontFamily="JetBrains Mono"
                    fontSize="11"
                    textAnchor="end"
                  >
                    {f.type}
                  </text>

                  {/* row divider */}
                  <line
                    x1={t.x + 12}
                    x2={t.x + t.w - 12}
                    y1={y + rowH}
                    y2={y + rowH}
                    stroke="rgba(16,19,44,0.05)"
                    strokeWidth={1}
                  />
                </g>
              );
            })}
          </motion.g>
        );
      })}

      {/* FK connectors — parents.id → students.parent_id (left-hand curve) */}
      <DrawnPath
        d={`M ${parentsIdX} ${parentsIdY} C ${parentsIdX + 30} ${parentsIdY}, ${studentsLeftX - 30} ${studentsParentY}, ${studentsLeftX} ${studentsParentY}`}
        stroke="#3F4AAF"
        strokeWidth={1.3}
        strokeDasharray="4 5"
        strokeOpacity={0.85}
        duration={0.9}
        delay={0.8}
      />
      {/* arrow head */}
      <motion.path
        d={`M ${studentsLeftX - 6} ${studentsParentY - 4} L ${studentsLeftX} ${studentsParentY} L ${studentsLeftX - 6} ${studentsParentY + 4}`}
        fill="none"
        stroke="#3F4AAF"
        strokeWidth={1.3}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      {/* relationship label */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <rect
          x={(parentsIdX + studentsLeftX) / 2 - 22}
          y={(parentsIdY + studentsParentY) / 2 - 10}
          width={44}
          height={18}
          rx={2}
          fill="#ffffff"
          stroke="rgba(63,74,175,0.25)"
          strokeWidth={1}
        />
        <text
          x={(parentsIdX + studentsLeftX) / 2}
          y={(parentsIdY + studentsParentY) / 2 + 3}
          fill="#3F4AAF"
          fontFamily="JetBrains Mono"
          fontSize="10"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          1 : N
        </text>
      </motion.g>

      {/* FK connectors — schools.id → students.school_id (right-hand curve) */}
      <DrawnPath
        d={`M ${schoolsIdX} ${schoolsIdY} C ${schoolsIdX - 30} ${schoolsIdY}, ${studentsRightX + 30} ${studentsSchoolY}, ${studentsRightX} ${studentsSchoolY}`}
        stroke="#3F4AAF"
        strokeWidth={1.3}
        strokeDasharray="4 5"
        strokeOpacity={0.85}
        duration={0.9}
        delay={1.0}
      />
      <motion.path
        d={`M ${studentsRightX + 6} ${studentsSchoolY - 4} L ${studentsRightX} ${studentsSchoolY} L ${studentsRightX + 6} ${studentsSchoolY + 4}`}
        fill="none"
        stroke="#3F4AAF"
        strokeWidth={1.3}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <rect
          x={(schoolsIdX + studentsRightX) / 2 - 22}
          y={(schoolsIdY + studentsSchoolY) / 2 - 10}
          width={44}
          height={18}
          rx={2}
          fill="#ffffff"
          stroke="rgba(63,74,175,0.25)"
          strokeWidth={1}
        />
        <text
          x={(schoolsIdX + studentsRightX) / 2}
          y={(schoolsIdY + studentsSchoolY) / 2 + 3}
          fill="#3F4AAF"
          fontFamily="JetBrains Mono"
          fontSize="10"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          1 : N
        </text>
      </motion.g>

      {/* self-ref sibling_of loop on students — small arc on the right of students */}
      <DrawnPath
        d={`M ${studentsRightX} ${fieldY(students, 4)} C ${studentsRightX + 28} ${fieldY(students, 4)}, ${studentsRightX + 28} ${fieldY(students, 0)}, ${studentsRightX} ${fieldY(students, 0)}`}
        stroke="rgba(63,74,175,0.5)"
        strokeWidth={1}
        strokeDasharray="3 5"
        duration={0.8}
        delay={1.4}
      />
      <motion.text
        x={studentsRightX + 32}
        y={(fieldY(students, 4) + fieldY(students, 0)) / 2 + 3}
        fill="rgba(63,74,175,0.55)"
        fontFamily="JetBrains Mono"
        fontSize="9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        self
      </motion.text>
    </svg>
  );
}

/* ==================================================================
   SECTION · OUTCOMES · 6 alternating rows with brand-forward SVGs
   ================================================================== */

type OutcomeBlock = {
  n: string;
  kicker: string;
  title: React.ReactNode;
  lede: string;
  results: string[];
  diagram: React.ReactNode;
  theme: "dark" | "beige";
  reverse?: boolean;
  diagramDark?: boolean;
};

function SvgPortal() {
  // Support-ticket curve (before → after) over 6 time slots
  // Clean, chart-style — NOT label-lines-crossing-through-text
  const before = [78, 82, 88, 90, 94, 96]; // Before: climbing load on your team
  const after = [72, 40, 22, 12, 8, 5];     // After: portal absorbs it, team load crashes
  const w = 560;
  const h = 340;
  const ox = 60;  // origin x
  const oy = 270; // origin y (axis line)
  const cw = 420; // chart width
  const ch = 200; // chart height
  const step = cw / (before.length - 1);
  const scale = (v: number) => oy - (v / 100) * ch;

  const pathOf = (arr: number[]) =>
    arr
      .map((v, i) => {
        const x = ox + i * step;
        const y = scale(v);
        if (i === 0) return `M ${x} ${y}`;
        const prevX = ox + (i - 1) * step;
        const prevY = scale(arr[i - 1]);
        const cx1 = prevX + step / 2;
        const cx2 = x - step / 2;
        return `C ${cx1} ${prevY}, ${cx2} ${y}, ${x} ${y}`;
      })
      .join(" ");

  const areaOf = (arr: number[]) => `${pathOf(arr)} L ${ox + cw} ${oy} L ${ox} ${oy} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" role="img" aria-label="Support load before vs after">
      <defs>
        <linearGradient id="gradBefore" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E04F4F" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E04F4F" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gradAfter" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* y-axis helper label */}
      <text x={ox} y={36} fill="currentColor" opacity="0.55" fontSize="11" fontFamily="JetBrains Mono" letterSpacing="1.5">
        SUPPORT LOAD · TICKETS / WEEK
      </text>

      {/* gridlines */}
      {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
        <line
          key={i}
          x1={ox}
          x2={ox + cw}
          y1={oy - p * ch}
          y2={oy - p * ch}
          stroke="currentColor"
          strokeOpacity={0.08}
          strokeWidth={1}
        />
      ))}
      {/* baseline */}
      <line x1={ox} x2={ox + cw} y1={oy} y2={oy} stroke="currentColor" strokeOpacity={0.25} strokeWidth={1} />

      {/* Before area + line */}
      <motion.path
        d={areaOf(before)}
        fill="url(#gradBefore)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <DrawnPath d={pathOf(before)} stroke="#E04F4F" strokeWidth={2} duration={1.4} delay={0.2} />

      {/* After area + line */}
      <motion.path
        d={areaOf(after)}
        fill="url(#gradAfter)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <DrawnPath d={pathOf(after)} stroke="#6EF76E" strokeWidth={2} duration={1.6} delay={0.7} />

      {/* end-point markers + values */}
      <motion.circle
        cx={ox + cw}
        cy={scale(before[before.length - 1])}
        r={5}
        fill="#E04F4F"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <motion.circle
        cx={ox + cw}
        cy={scale(after[after.length - 1])}
        r={5}
        fill="#6EF76E"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      />

      {/* annotations */}
      <g>
        <rect x={ox + cw + 12} y={scale(before[before.length - 1]) - 14} width={70} height={28} rx={2} fill="none" stroke="#E04F4F" strokeOpacity="0.5" />
        <text x={ox + cw + 22} y={scale(before[before.length - 1]) - 1} fill="#E04F4F" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="1">BEFORE</text>
        <text x={ox + cw + 22} y={scale(before[before.length - 1]) + 10} fill="#fff" opacity="0.9" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">climbing</text>
      </g>
      <g>
        <rect x={ox + cw + 12} y={scale(after[after.length - 1]) - 14} width={70} height={28} rx={2} fill="none" stroke="#6EF76E" strokeOpacity="0.7" />
        <text x={ox + cw + 22} y={scale(after[after.length - 1]) - 1} fill="#6EF76E" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="1">AFTER</text>
        <text x={ox + cw + 22} y={scale(after[after.length - 1]) + 10} fill="#fff" opacity="0.9" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">−95%</text>
      </g>

      {/* x-axis labels */}
      {["T0", "T+1 mo", "T+2 mo", "T+3 mo", "T+4 mo", "T+6 mo"].map((t, i) => (
        <text
          key={t}
          x={ox + i * step}
          y={oy + 22}
          fill="currentColor"
          opacity="0.55"
          fontSize="10"
          fontFamily="JetBrains Mono"
          textAnchor="middle"
        >
          {t}
        </text>
      ))}
    </svg>
  );
}

function SvgCron() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <svg viewBox="0 0 560 340" className="w-full h-auto" role="img" aria-label="Cron batch export schedule">
      {/* header label */}
      <text x={30} y={34} fill="#6EF76E" fontSize="11" fontFamily="JetBrains Mono" letterSpacing="2">
        CRON · 03:00 · OFF-PEAK
      </text>
      <DrawnPath d="M30 48 H530" stroke="rgba(255,255,255,0.12)" strokeWidth={1} />

      {days.map((d, i) => {
        const y = 80 + i * 34;
        return (
          <g key={d}>
            <text x={30} y={y + 10} fill="currentColor" opacity="0.55" fontSize="11" fontFamily="JetBrains Mono" letterSpacing="1.5">
              {d}
            </text>
            {/* timeline bar */}
            <motion.rect
              x={90}
              y={y}
              width={420}
              height={14}
              rx={2}
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={1}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ transformOrigin: "90px" }}
            />
            {/* scheduled slot */}
            <motion.rect
              x={90 + (i * 10) + 20}
              y={y}
              width={26}
              height={14}
              rx={2}
              fill="#6EF76E"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ transformOrigin: `${90 + (i * 10) + 20 + 13}px ${y + 7}px` }}
            />
            <text x={520} y={y + 10} fill="currentColor" opacity="0.55" fontSize="9" fontFamily="JetBrains Mono" textAnchor="end">
              03:00 · auto
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function SvgDataGraph() {
  // Five legacy sources → normalization lane → one clean entity graph
  const W = 720;
  const H = 420;
  const legacy = ["GlobalJade", "ImageDB", "The Hub", "CRM", "eWay"];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Five legacy systems collapse into one normalized graph">
      <defs>
        <linearGradient id="dgLegacy" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#E04F4F" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E04F4F" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="dgClean" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* LEFT column — legacy stack */}
      <text x={20} y={28} fill="rgba(224,79,79,0.9)" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2">
        BEFORE · 5 LEGACY SYSTEMS
      </text>
      {legacy.map((n, i) => {
        const y = 56 + i * 58;
        return (
          <motion.g
            key={n}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.45 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* cylinder body */}
            <rect x={20} y={y + 6} width={170} height={34} fill="rgba(224,79,79,0.06)" stroke="rgba(224,79,79,0.55)" strokeWidth={1} />
            <ellipse cx={105} cy={y + 6} rx={85} ry={7} fill="rgba(224,79,79,0.14)" stroke="rgba(224,79,79,0.75)" strokeWidth={1} />
            <ellipse cx={105} cy={y + 40} rx={85} ry={7} fill="rgba(224,79,79,0.06)" stroke="rgba(224,79,79,0.45)" strokeWidth={1} />
            <text x={36} y={y + 28} fill="#fff" fontSize="12" fontFamily="Inter" fontWeight="500">
              {n}
            </text>
            <text x={174} y={y + 28} fill="rgba(224,79,79,0.85)" fontSize="9" fontFamily="JetBrains Mono" textAnchor="end" letterSpacing="1">
              {[".mdb", ".sql", "api", "xml", "csv"][i]}
            </text>
          </motion.g>
        );
      })}

      {/* CENTRE — normalization lane */}
      <motion.rect
        x={220}
        y={56}
        width={210}
        height={300}
        rx={3}
        fill="rgba(63,74,175,0.05)"
        stroke="rgba(63,74,175,0.35)"
        strokeWidth={1}
        strokeDasharray="3 4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        viewport={{ once: true, amount: 0.25 }}
      />
      <text x={325} y={78} fill="rgba(63,74,175,0.95)" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2" textAnchor="middle">
        NORMALIZATION LANE
      </text>
      <text x={325} y={94} fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1" textAnchor="middle">
        pimcore · mdm
      </text>

      {/* connectors: legacy → lane */}
      {legacy.map((_, i) => {
        const y1 = 56 + i * 58 + 23;
        const y2 = 170 + i * 10;
        return (
          <DrawnPath
            key={`lc${i}`}
            d={`M 190 ${y1} C 205 ${y1}, 215 ${y2}, 220 ${y2}`}
            stroke="url(#dgLegacy)"
            strokeWidth={1.2}
            strokeDasharray="3 4"
            duration={0.8}
            delay={0.8 + i * 0.05}
          />
        );
      })}

      {/* lane: flowing dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={`dot${i}`}
          cx={240 + i * 52}
          cy={210}
          r={2.5}
          fill="#3F4AAF"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], x: [0, 10, 20] }}
          transition={{
            delay: 1.2 + i * 0.25,
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 1.6,
          }}
        />
      ))}
      <line x1={230} x2={420} y1={210} y2={210} stroke="rgba(63,74,175,0.35)" strokeWidth={0.5} strokeDasharray="2 3" />

      {/* centre — transformation rules */}
      {[
        ["SIC → student_fk", 250],
        ["dedupe · sibling_of", 280],
        ["audit log · every row", 310],
        ["SCHOOL → STUDENT → ASSET", 340],
      ].map(([t, y], i) => (
        <motion.text
          key={i}
          x={325}
          y={y as number}
          fill="rgba(255,255,255,0.85)"
          fontSize="11"
          fontFamily="JetBrains Mono"
          textAnchor="middle"
          initial={{ opacity: 0, y: (y as number) + 4 }}
          whileInView={{ opacity: 1, y: y as number }}
          transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          {t}
        </motion.text>
      ))}

      {/* RIGHT — one clean entity graph */}
      <text x={W - 20} y={28} fill="#6EF76E" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2" textAnchor="end">
        AFTER · ONE CLEAN GRAPH
      </text>

      {(() => {
        const nodes = [
          { id: "school", label: "SCHOOL", x: 530, y: 80 },
          { id: "student", label: "STUDENT", x: 620, y: 160 },
          { id: "parent", label: "PARENT", x: 490, y: 240 },
          { id: "asset", label: "ASSET", x: 650, y: 290 },
          { id: "order", label: "ORDER", x: 520, y: 360 },
        ];
        const edges = [
          ["school", "student", "1 : N"],
          ["student", "asset", "1 : N"],
          ["student", "parent", "N : 1"],
          ["parent", "order", "1 : N"],
          ["asset", "order", "N : 1"],
        ];
        const find = (id: string) => nodes.find((n) => n.id === id)!;
        return (
          <g>
            {/* edges first (behind nodes) */}
            {edges.map(([a, b, label], i) => {
              const A = find(a as string);
              const B = find(b as string);
              const mx = (A.x + B.x) / 2;
              const my = (A.y + B.y) / 2;
              return (
                <g key={i}>
                  <DrawnPath
                    d={`M ${A.x} ${A.y} L ${B.x} ${B.y}`}
                    stroke="#6EF76E"
                    strokeOpacity={0.55}
                    strokeWidth={1}
                    duration={0.7}
                    delay={1.4 + i * 0.08}
                  />
                  <motion.g
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.9 + i * 0.05, duration: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <rect x={mx - 18} y={my - 7} width={36} height={14} rx={2} fill="#10132C" stroke="rgba(110,247,110,0.3)" strokeWidth={0.5} />
                    <text x={mx} y={my + 3} fill="rgba(110,247,110,0.9)" fontSize="8.5" fontFamily="JetBrains Mono" textAnchor="middle" letterSpacing="0.5">
                      {label}
                    </text>
                  </motion.g>
                </g>
              );
            })}
            {/* nodes */}
            {nodes.map((n, i) => (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, scale: 0.82 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <circle cx={n.x} cy={n.y} r={30} fill="rgba(110,247,110,0.05)" stroke="url(#dgClean)" strokeWidth={1.5} />
                <circle cx={n.x} cy={n.y} r={22} fill="rgba(16,19,44,0.55)" stroke="rgba(110,247,110,0.5)" strokeWidth={0.7} />
                <circle cx={n.x} cy={n.y} r={3} fill="#6EF76E" className="pulse-green" />
                <text x={n.x} y={n.y + 46} fill="#fff" fontSize="11" fontFamily="JetBrains Mono" fontWeight="700" textAnchor="middle" letterSpacing="0.5">
                  {n.label}
                </text>
              </motion.g>
            ))}
          </g>
        );
      })()}
    </svg>
  );
}

function SvgIdCard() {
  // CSV chaos → realistic ID card preview → audited export pipeline
  const W = 720;
  const H = 420;

  // card anchor
  const cx = 400;
  const cy = 110;
  const cw = 300;
  const ch = 180;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="ID card builder · preview, lock, export, audit">
      <defs>
        <linearGradient id="idFaceSkin" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#DADCF1" />
          <stop offset="100%" stopColor="#8d91a8" />
        </linearGradient>
        <linearGradient id="idCardBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1efe9" />
        </linearGradient>
      </defs>

      {/* LEFT · CSV email chaos, struck through */}
      <text x={20} y={28} fill="rgba(224,79,79,0.9)" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2">
        BEFORE · CSV EMAIL CHAIN
      </text>
      {[0, 1, 2, 3].map((i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 0.55 + i * 0.1, x: 0 }}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <rect
            x={20 + i * 5}
            y={50 + i * 52}
            width={300}
            height={44}
            rx={2}
            fill="rgba(224,79,79,0.04)"
            stroke="rgba(224,79,79,0.4)"
            strokeWidth={1}
          />
          <rect x={20 + i * 5} y={50 + i * 52} width={3} height={44} fill="#E04F4F" opacity={0.75} />
          <circle cx={42 + i * 5} cy={72 + i * 52} r={3} fill="#E04F4F" />
          <text x={54 + i * 5} y={70 + i * 52} fill="#fff" fontSize="11" fontFamily="JetBrains Mono">
            RE: RE: cards-v{4 - i}.csv
          </text>
          <text x={54 + i * 5} y={86 + i * 52} fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="JetBrains Mono">
            {["3 threads, 12 replies", "merge conflicts", "which version is final?", "lost in inbox"][i]}
          </text>
          {/* strike-through */}
          <motion.line
            x1={20 + i * 5}
            y1={72 + i * 52}
            x2={320 + i * 5}
            y2={72 + i * 52}
            stroke="#E04F4F"
            strokeOpacity={0.5}
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ delay: 0.9 + i * 0.08, duration: 0.45 }}
            viewport={{ once: true, amount: 0.25 }}
          />
        </motion.g>
      ))}

      {/* pipeline arrow */}
      <DrawnPath d={`M 330 210 L 370 ${cy + ch / 2}`} stroke="rgba(110,247,110,0.7)" strokeWidth={1.3} strokeDasharray="4 4" delay={1.3} duration={0.6} />
      <motion.polygon
        points={`${370} ${cy + ch / 2 - 4}, ${378} ${cy + ch / 2}, ${370} ${cy + ch / 2 + 4}`}
        fill="#6EF76E"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.85, duration: 0.3 }}
        viewport={{ once: true, amount: 0.25 }}
      />

      {/* RIGHT · after label */}
      <text x={W - 20} y={28} fill="#6EF76E" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2" textAnchor="end">
        AFTER · IN-PLATFORM BUILDER
      </text>

      {/* REALISTIC ID CARD */}
      <motion.g
        initial={{ opacity: 0, y: 10, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.55 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* card body */}
        <rect x={cx} y={cy} width={cw} height={ch} rx={4} fill="url(#idCardBg)" stroke="rgba(16,19,44,0.15)" strokeWidth={1} />
        {/* left accent bar */}
        <rect x={cx} y={cy} width={6} height={ch} fill="#3F4AAF" />
        {/* top header row */}
        <rect x={cx + 18} y={cy + 14} width={80} height={12} rx={1.5} fill="#10132C" />
        <text x={cx + 22} y={cy + 23} fill="#fff" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="1.5" fontWeight="700">
          LINCOLN HIGH
        </text>
        <text x={cx + cw - 18} y={cy + 22} fill="rgba(16,19,44,0.55)" fontSize="8" fontFamily="JetBrains Mono" textAnchor="end" letterSpacing="1.5">
          2026 / GRADE 10
        </text>

        {/* photo frame with stylized silhouette */}
        <rect x={cx + 18} y={cy + 36} width={76} height={92} rx={2} fill="#1f2346" />
        <circle cx={cx + 56} cy={cy + 70} r={16} fill="url(#idFaceSkin)" />
        <path
          d={`M ${cx + 32} ${cy + 122} Q ${cx + 56} ${cy + 94}, ${cx + 80} ${cy + 122} L ${cx + 80} ${cy + 128} L ${cx + 32} ${cy + 128} Z`}
          fill="url(#idFaceSkin)"
        />
        {/* photo frame corner ticks */}
        {[
          [cx + 18, cy + 36],
          [cx + 94, cy + 36],
          [cx + 18, cy + 128],
          [cx + 94, cy + 128],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1={x - 2} x2={x + 4} y1={y} y2={y} stroke="rgba(255,255,255,0.6)" strokeWidth={1} />
            <line x1={x} x2={x} y1={y - 2} y2={y + 4} stroke="rgba(255,255,255,0.6)" strokeWidth={1} />
          </g>
        ))}

        {/* name + meta */}
        <text x={cx + 110} y={cy + 56} fill="#10132C" fontSize="15" fontFamily="Golos Text" fontWeight="700">
          Aidan Park
        </text>
        <text x={cx + 110} y={cy + 74} fill="rgba(16,19,44,0.7)" fontSize="10" fontFamily="Inter">
          Student ID · 4452981
        </text>

        {/* field rows */}
        {[
          ["HOUSE", "Wellington"],
          ["FORM", "10-C"],
          ["SIC", "L-0442-10-C"],
          ["EXPIRES", "12 / 2026"],
        ].map(([k, v], i) => (
          <g key={i}>
            <text x={cx + 110} y={cy + 96 + i * 14} fill="rgba(16,19,44,0.45)" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="1.5">
              {k}
            </text>
            <text x={cx + 170} y={cy + 96 + i * 14} fill="#10132C" fontSize="10" fontFamily="JetBrains Mono">
              {v}
            </text>
          </g>
        ))}

        {/* barcode strip */}
        <g transform={`translate(${cx + 18}, ${cy + 148})`}>
          {Array.from({ length: 44 }).map((_, i) => (
            <rect
              key={i}
              x={i * 6.3}
              y={0}
              width={i % 3 === 0 ? 3 : i % 2 === 0 ? 1.4 : 2}
              height={14}
              fill="#10132C"
              opacity={0.85}
            />
          ))}
        </g>
        <text x={cx + cw - 18} y={cy + ch - 8} fill="rgba(16,19,44,0.55)" fontSize="8" fontFamily="JetBrains Mono" textAnchor="end" letterSpacing="1">
          v1 · LOCKED
        </text>
      </motion.g>

      {/* Pipeline strip · Preview → Lock → Export → Audit */}
      {(() => {
        const stages = [
          { label: "Preview", meta: "1,420 cards", color: "#6EF76E" },
          { label: "Lock", meta: "v1 final", color: "#3F4AAF" },
          { label: "Export", meta: "CSV · print", color: "#3F4AAF" },
          { label: "Audit log", meta: "every action", color: "#6EF76E" },
        ];
        const stripY = cy + ch + 32;
        const stripW = cw;
        const gap = 8;
        const tileW = (stripW - gap * 3) / 4;
        return (
          <g>
            {/* rail */}
            <line x1={cx + 4} x2={cx + cw - 4} y1={stripY + 22} y2={stripY + 22} stroke="rgba(110,247,110,0.2)" strokeWidth={0.8} strokeDasharray="2 3" />
            {stages.map((s, i) => {
              const x = cx + i * (tileW + gap);
              return (
                <motion.g
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.12, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <rect x={x} y={stripY} width={tileW} height={44} rx={2} fill="rgba(16,19,44,0.4)" stroke="rgba(230,231,239,0.12)" strokeWidth={1} />
                  <circle cx={x + 10} cy={stripY + 14} r={3.5} fill={s.color} />
                  <text x={x + 20} y={stripY + 18} fill="#fff" fontSize="11" fontFamily="Inter" fontWeight="600">
                    {s.label}
                  </text>
                  <text x={x + 10} y={stripY + 34} fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="JetBrains Mono">
                    {s.meta}
                  </text>
                </motion.g>
              );
            })}
          </g>
        );
      })()}
    </svg>
  );
}

function SvgSSO() {
  const W = 720;
  const H = 420;

  const providers: { name: string; sub: string; users: string; color: string; glyph: "aws" | "ms" | "g" }[] = [
    { name: "AWS Cognito", sub: "SAML · JWT", users: "School admins", color: "#FF5A31", glyph: "aws" },
    { name: "Microsoft Entra ID", sub: "OIDC · SAML", users: "Internal staff", color: "#3F4AAF", glyph: "ms" },
    { name: "Google OAuth 2.0", sub: "OIDC", users: "Parents · commerce", color: "#6EF76E", glyph: "g" },
  ];

  const logs = [
    ["09:42:11", "school.admin", "login", "OK"],
    ["09:42:58", "student.edit", "114 rows", "OK"],
    ["09:44:03", "export.start", "grade-5", "OK"],
    ["09:47:18", "order.create", "#3104", "OK"],
    ["09:49:45", "parent.login", "oauth", "OK"],
    ["09:52:02", "export.done", "4.2 MB", "OK"],
  ];

  // hub centre
  const hx = 360;
  const hy = 210;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Dual SSO with audit pipeline">
      <defs>
        <radialGradient id="ssoRing" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.0" />
          <stop offset="70%" stopColor="#6EF76E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0.0" />
        </radialGradient>
      </defs>

      <text x={20} y={28} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2">
        IDENTITY PROVIDERS
      </text>

      {/* Provider cards */}
      {providers.map((p, i) => {
        const y = 52 + i * 96;
        return (
          <motion.g
            key={p.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* card */}
            <rect x={20} y={y} width={210} height={72} rx={3} fill="rgba(230,231,239,0.03)" stroke="rgba(230,231,239,0.12)" strokeWidth={1} />
            {/* left accent bar */}
            <rect x={20} y={y} width={3} height={72} fill={p.color} />

            {/* brand glyph */}
            <g transform={`translate(${38}, ${y + 18})`}>
              {p.glyph === "aws" && (
                <g>
                  <path d="M 0 22 C 10 30, 26 30, 36 22" fill="none" stroke={p.color} strokeWidth={1.8} />
                  <path d="M 4 24 L 36 24" stroke={p.color} strokeWidth={1.3} strokeDasharray="2 2" />
                  <text x={18} y={14} fill="#fff" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700" textAnchor="middle" letterSpacing="1">AWS</text>
                </g>
              )}
              {p.glyph === "ms" && (
                <g>
                  <rect x={0} y={0} width={16} height={16} fill={p.color} opacity={0.9} />
                  <rect x={18} y={0} width={16} height={16} fill={p.color} opacity={0.6} />
                  <rect x={0} y={18} width={16} height={16} fill={p.color} opacity={0.6} />
                  <rect x={18} y={18} width={16} height={16} fill={p.color} opacity={0.9} />
                </g>
              )}
              {p.glyph === "g" && (
                <g>
                  <circle cx={17} cy={17} r={16} fill="none" stroke={p.color} strokeWidth={2} />
                  <path d={`M 17 17 L 33 17 L 33 23 L 19 23`} fill="none" stroke={p.color} strokeWidth={2} />
                  <text x={17} y={22} fill={p.color} fontSize="13" fontFamily="Golos Text" fontWeight="700" textAnchor="middle">G</text>
                </g>
              )}
            </g>

            {/* name · sub · users */}
            <text x={90} y={y + 24} fill="#fff" fontSize="13" fontFamily="Inter" fontWeight="600">
              {p.name}
            </text>
            <text x={90} y={y + 40} fill={p.color} fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1.5">
              {p.sub.toUpperCase()}
            </text>
            <text x={90} y={y + 58} fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="Inter">
              {p.users}
            </text>

            {/* packet dot traveling to hub */}
            <motion.circle
              r={3}
              fill={p.color}
              initial={{ cx: 230, cy: y + 36, opacity: 0 }}
              animate={{
                cx: [230, hx],
                cy: [y + 36, hy],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                delay: 1.4 + i * 0.4,
                duration: 1.6,
                repeat: Infinity,
                repeatDelay: 2.5,
                times: [0, 0.15, 0.85, 1],
              }}
            />

            {/* static connector path */}
            <path
              d={`M 230 ${y + 36} Q 290 ${y + 36}, ${hx} ${hy}`}
              fill="none"
              stroke={p.color}
              strokeOpacity={0.3}
              strokeWidth={1}
              strokeDasharray="2 4"
            />
          </motion.g>
        );
      })}

      {/* HUB — audit core */}
      <motion.g
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* soft green ambient */}
        <circle cx={hx} cy={hy} r={80} fill="url(#ssoRing)" />
        {/* orbit rings */}
        <motion.circle
          cx={hx}
          cy={hy}
          r={52}
          fill="none"
          stroke="rgba(110,247,110,0.35)"
          strokeWidth={1}
          strokeDasharray="2 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${hx}px ${hy}px` }}
        />
        <circle cx={hx} cy={hy} r={40} fill="rgba(16,19,44,0.8)" stroke="rgba(110,247,110,0.8)" strokeWidth={1.5} />
        {/* lock glyph */}
        <path
          d={`M ${hx - 10} ${hy - 2} h 20 v 16 h -20 z`}
          fill="rgba(110,247,110,0.12)"
          stroke="#6EF76E"
          strokeWidth={1.5}
        />
        <path
          d={`M ${hx - 6} ${hy - 2} v -8 a 6 6 0 0 1 12 0 v 8`}
          fill="none"
          stroke="#6EF76E"
          strokeWidth={1.5}
        />
        <circle cx={hx} cy={hy + 6} r={1.8} fill="#6EF76E" />
        {/* label */}
        <text x={hx} y={hy + 62} fill="#6EF76E" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2" textAnchor="middle" fontWeight="700">
          AUDIT · SYSTEM LEVEL
        </text>
        <text x={hx} y={hy + 78} fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" letterSpacing="1">
          every login · every action
        </text>
      </motion.g>

      {/* pipeline arrow hub → log */}
      <DrawnPath d={`M ${hx + 40} ${hy} H 480`} stroke="rgba(110,247,110,0.55)" strokeWidth={1} strokeDasharray="3 4" delay={1.0} duration={0.5} />
      <motion.polygon
        points={`478 ${hy - 4}, 486 ${hy}, 478 ${hy + 4}`}
        fill="#6EF76E"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        viewport={{ once: true, amount: 0.25 }}
      />

      {/* LOG stream */}
      <text x={500} y={28} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2">
        LOG · LIVE
      </text>
      {/* log card bg */}
      <rect x={500} y={42} width={200} height={348} rx={3} fill="rgba(230,231,239,0.025)" stroke="rgba(230,231,239,0.1)" strokeWidth={1} />

      {/* static table header */}
      <text x={512} y={62} fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1.5">TIME</text>
      <text x={578} y={62} fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1.5">EVENT</text>
      <line x1={508} x2={692} y1={70} y2={70} stroke="rgba(230,231,239,0.1)" strokeWidth={1} />

      {logs.map(([t, ev, meta, status], i) => {
        const y = 82 + i * 48;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 + i * 0.08, duration: 0.35 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <rect x={508} y={y - 8} width={184} height={40} fill={i === 0 ? "rgba(110,247,110,0.05)" : "transparent"} />
            <text x={512} y={y + 6} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="JetBrains Mono">{t}</text>
            <rect x={570} y={y - 6} width={2} height={14} fill="#6EF76E" opacity={0.7} />
            <text x={578} y={y + 6} fill="#fff" fontSize="11" fontFamily="JetBrains Mono" fontWeight="500">{ev}</text>
            <text x={578} y={y + 22} fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="JetBrains Mono">{meta}</text>
            <text x={686} y={y + 6} fill="#6EF76E" fontSize="9" fontFamily="JetBrains Mono" textAnchor="end" fontWeight="700" letterSpacing="1">{status}</text>
          </motion.g>
        );
      })}

      {/* live tick dot */}
      <motion.circle
        cx={686}
        cy={54}
        r={3}
        fill="#6EF76E"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <text x={678} y={58} fill="rgba(110,247,110,0.85)" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="1.5" textAnchor="end" fontWeight="700">LIVE</text>
    </svg>
  );
}

function SvgIntegration() {
  return (
    <svg viewBox="0 0 560 340" className="w-full h-auto" role="img" aria-label="Legacy integration layer">
      {/* left: legacy */}
      <text x={20} y={30} fill="#E04F4F" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2">
        LEGACY · STAYS LIVE
      </text>
      {["GlobalJade", "ImageDB", "The Hub", "CRM", "eWay"].map((n, i) => {
        const y = 56 + i * 44;
        return (
          <motion.g
            key={n}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 + i * 0.05, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <rect x={20} y={y} width={120} height={28} rx={2} fill="rgba(224,79,79,0.05)" stroke="#E04F4F" strokeOpacity={0.55} strokeWidth={1} />
            <text x={34} y={y + 18} fill="#fff" fontSize="11" fontFamily="Inter" fontWeight="500">{n}</text>
          </motion.g>
        );
      })}
      {/* connectors left → mw */}
      {[0, 1, 2, 3, 4].map((i) => (
        <DrawnPath
          key={`Ll${i}`}
          d={`M140 ${70 + i * 44} Q 180 ${70 + i * 44}, 230 ${170 + (i - 2) * 4}`}
          stroke="#E04F4F"
          strokeOpacity={0.45}
          strokeWidth={1}
          duration={0.9}
          delay={0.6 + i * 0.06}
        />
      ))}

      {/* MIDDLEWARE */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <rect x={230} y={94} width={120} height={180} rx={3} fill="rgba(110,247,110,0.04)" stroke="#6EF76E" strokeWidth={1.5} />
        <text x={290} y={120} fill="#fff" fontSize="12" fontWeight="700" fontFamily="Golos Text" textAnchor="middle">MIDDLEWARE</text>
        <text x={290} y={136} fill="#6EF76E" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1.5" textAnchor="middle">ADAPTER · .NET</text>
        <DrawnPath d="M246 148 H334" stroke="rgba(255,255,255,0.08)" strokeWidth={1} duration={0.6} delay={1.2} />
        {["REST", "GraphQL", "SOAP", "webhooks", "Kafka/SQS", "SFTP", "EDI"].map((p, i) => (
          <motion.g
            key={p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3 + i * 0.05, duration: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <circle cx={252} cy={162 + i * 14} r={2} fill="#6EF76E" opacity={0.5 + i * 0.06} />
            <text x={260} y={166 + i * 14} fill="#fff" opacity="0.85" fontSize="10" fontFamily="JetBrains Mono">{p}</text>
          </motion.g>
        ))}
      </motion.g>

      {/* connectors mw → new */}
      {[0, 1, 2, 3, 4].map((i) => (
        <DrawnPath
          key={`Rl${i}`}
          d={`M350 ${170 + (i - 2) * 4} Q 390 ${70 + i * 44}, 430 ${70 + i * 44}`}
          stroke="#6EF76E"
          strokeOpacity={0.6}
          strokeWidth={1}
          duration={0.9}
          delay={1.0 + i * 0.06}
        />
      ))}

      {/* right: new */}
      <text x={430} y={30} fill="#6EF76E" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2">
        NEW · PRODUCTION
      </text>
      {["Pimcore MDM", "Hyvä Commerce", "Portal", "Batch Engine", "ID Builder"].map((n, i) => {
        const y = 56 + i * 44;
        return (
          <motion.g
            key={n}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.05, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <rect x={430} y={y} width={120} height={28} rx={2} fill="rgba(110,247,110,0.05)" stroke="#6EF76E" strokeOpacity={0.7} strokeWidth={1} />
            <text x={444} y={y + 18} fill="#fff" fontSize="11" fontFamily="Inter" fontWeight="500">{n}</text>
          </motion.g>
        );
      })}
    </svg>
  );
}

function OutcomeBlockRow({ n, kicker, title, lede, results, diagram, theme, reverse, diagramDark }: OutcomeBlock) {
  const dark = theme === "dark";
  const diagramOnDark = diagramDark ?? dark;
  const textColor = dark ? "text-white" : "text-[var(--sw-black)]";
  const mutedColor = dark ? "text-white/75" : "text-[var(--sw-black)]/70";
  const bulletColor = dark ? "text-white/85" : "text-[var(--sw-black)]/80";
  const labelColor = dark ? "text-white/55" : "text-[var(--sw-black)]/55";
  const bg = dark ? "bg-[var(--sw-black)]" : "bg-lp-bright";
  const accentColor = dark ? "var(--sw-mint)" : "var(--sw-blue)";

  // Diagram presentation differs:
  // - dark section, dark diagram → flush on the dark bg, minimal framing
  // - light section, light diagram → flush on the gradient with bracket marks, no white card
  // - light section, dark diagram (e.g. Outcome 06) → premium dark tile
  let diagramWrapClass = "";
  let diagramWrapStyle: React.CSSProperties | undefined;
  if (diagramOnDark && !dark) {
    diagramWrapClass = "rounded-[4px] p-6 md:p-8 text-white";
    diagramWrapStyle = {
      background:
        "linear-gradient(180deg, rgba(16,19,44,1) 0%, rgba(23,26,56,1) 100%)",
      border: "1px solid rgba(230,231,239,0.08)",
    };
  } else if (dark) {
    diagramWrapClass = "p-4 md:p-6 text-white";
  } else {
    diagramWrapClass = "bracket-frame p-5 md:p-7 text-[var(--sw-black)]";
  }

  return (
    <section id={`outcome-${n}`} className={`${bg} relative overflow-hidden scroll-mt-24`}>
      {/* section hairline on light sections */}
      {!dark && <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />}
      <div className="wrap py-24 md:py-32">
        <div className={`grid gap-12 lg:gap-16 md:grid-cols-2 items-center`}>
          <Reveal className={reverse ? "md:order-2" : "md:order-1"}>
            <div className="flex items-center gap-3 mb-6">
              <span className={`label-code ${labelColor}`}>OUTCOME · {n}</span>
              <span className={`h-px w-6 ${dark ? "bg-white/15" : "bg-[var(--sw-black)]/15"}`} />
              <span className={`label-code ${labelColor}`}>{kicker}</span>
            </div>
            <h3 className={`font-head ${textColor} text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mb-5 max-w-[22ch]`}>
              {title}
            </h3>
            <p className={`${mutedColor} text-[15px] md:text-[17px] leading-relaxed max-w-[46ch] mb-7`}>
              {lede}
            </p>
            <ul className="space-y-3">
              {results.map((r, i) => (
                <li key={i} className={`flex gap-3 ${bulletColor} text-[14px] md:text-[15px] leading-relaxed`}>
                  <Check className="h-4 w-4 shrink-0 mt-1" style={{ color: accentColor }} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12} className={reverse ? "md:order-1" : "md:order-2"}>
            <div className={`relative ${diagramWrapClass}`} style={diagramWrapStyle}>
              {/* bracket corners only render on the bracket-frame variant */}
              <span className="bracket-bl" />
              <span className="bracket-br" />
              {diagram}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const items: OutcomeBlock[] = [
    {
      n: "01",
      kicker: "Self-service school portal",
      title: (
        <>
          Schools <span className="text-[var(--sw-mint)]">stop calling</span> your team
        </>
      ),
      lede:
        "Schools upload rosters, correct data, and download their images themselves. Role-based access per school, per user type. Every action audit-logged.",
      results: [
        "Support queue stops growing term on term",
        "Region-aware IP allowlist per deployment",
        "Escalations remain possible, but rare",
      ],
      diagram: <SvgPortal />,
      theme: "dark",
    },
    {
      n: "02",
      kicker: "Batch export engine",
      title: (
        <>
          Your weekly export <span className="text-[var(--sw-blue)]">stops being a job</span>
        </>
      ),
      lede:
        "Ten export formats, dynamic naming rules per school, running on a CRON schedule. Manual re-runs are one click from the portal.",
      results: [
        "CRON-scheduled off-peak, no human in the loop",
        "SchoolCode-StudentID-Grade-Year.jpg per school",
        "Every export audit-logged — who, what, when, where",
      ],
      diagram: <SvgCron />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "03",
      kicker: "Student data model · Pimcore MDM",
      title: (
        <>
          Five systems collapse into <span className="text-[var(--sw-mint)]">one clean graph</span>
        </>
      ),
      lede:
        "SCHOOL → STUDENT → ASSET → PARENT → ORDER, normalized from day one. Sibling relationships, co-parenting, returning-student flags are first-class.",
      results: [
        "One source of truth replaces five disconnected databases",
        "SIC codes attached to students, not images",
        "Audit-logged end to end, every field, every change",
      ],
      diagram: <SvgDataGraph />,
      theme: "dark",
    },
    {
      n: "04",
      kicker: "ID card & admin services",
      title: (
        <>
          No more <span className="text-[var(--sw-blue)]">CSV email chains</span>
        </>
      ),
      lede:
        "Order, preview, and export ID cards with a full audit trail. Reorders and replacements handled in-platform. No manual handoffs, no wrong versions.",
      results: [
        "Static JPG preview per card before order lock",
        "CSV export for downstream print pipelines",
        "Reorder flow for lost cards, name changes, grade transitions",
      ],
      diagram: <SvgIdCard />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "05",
      kicker: "Dual SSO + audit",
      title: (
        <>
          Compliance by design, <span className="text-[var(--sw-mint)]">not by memory</span>
        </>
      ),
      lede:
        "AWS Cognito for school admins. Microsoft Entra ID for internal staff. Google OAuth for parent commerce. Every login, every action, audit-logged at the system level.",
      results: [
        "Role-based access, scoped per user pool",
        "SAML or OIDC supported for downstream federation",
        "Admin panel on VPN, school portal IP-allowlisted",
      ],
      diagram: <SvgSSO />,
      theme: "dark",
    },
    {
      n: "06",
      kicker: "Legacy integration layer",
      title: (
        <>
          Modernize without <span className="text-[var(--sw-blue)]">ripping out</span> what works
        </>
      ),
      lede:
        "A middleware API connects new systems to your existing stack. File servers, databases, SIS, ERP, print pipelines. Legacy stays live throughout delivery.",
      results: [
        "REST, GraphQL, SOAP, webhooks, Kafka/SQS, SFTP/CSV, EDI",
        "Adapter pattern extends to SAP, Navision, Odoo, NetSuite",
        "Reference: 5 legacy systems live · 0 decommissioned mid-project",
      ],
      diagram: <SvgIntegration />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
  ];
  return (
    <>
      <section id="outcomes" className="bg-[var(--sw-black)] pt-28 md:pt-36 pb-14 md:pb-20 relative overflow-hidden">
        {/* ambient blue wash · adds depth to the intro */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1000px 600px at 85% 30%, rgba(63,74,175,0.20) 0%, transparent 60%), radial-gradient(800px 500px at 10% 100%, rgba(110,247,110,0.06) 0%, transparent 55%)",
          }}
        />
        <div className="wrap relative">
          <div className="grid gap-10 md:gap-14 lg:grid-cols-[1.1fr_0.9fr] items-end">
            <Reveal>
              <div className="label-code mb-6 text-white/55">Outcomes · six</div>
              <h2 className="font-head text-white text-[40px] md:text-[68px] lg:text-[88px] leading-[0.98] tracking-[-0.015em] max-w-[14ch]">
                Six operational problems.{" "}
                <span className="text-white/35">Gone</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[46ch]">
                Each outcome is live today on the reference operator in
                Australia. No prototypes, no roadmap. Configure against your
                schools, your tooling, your market.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-5 max-w-[420px]">
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">6</div>
                  <div className="label-code text-white/50 mt-2">Outcomes</div>
                </div>
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">14</div>
                  <div className="label-code text-white/50 mt-2">Weeks to live</div>
                </div>
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">0</div>
                  <div className="label-code text-white/50 mt-2">Peak incidents</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Horizontal index · 6 chips */}
          <div className="mt-14 md:mt-20 border-t border-white/10 pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border-l border-r border-white/10">
              {items.map((it, i) => (
                <Reveal key={it.n} delay={i * 0.05}>
                  <a
                    href={`#outcome-${it.n}`}
                    className="group flex flex-col gap-2 p-5 md:p-6 bg-[var(--sw-black)] hover:bg-white/[0.04] transition-colors h-full"
                  >
                    <span className="label-code text-white/45 group-hover:text-[var(--sw-mint)] transition-colors">
                      {it.n}
                    </span>
                    <span className="font-head text-white text-[14px] md:text-[15px] leading-[1.25]">
                      {it.kicker}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      {items.map((it) => (
        <OutcomeBlockRow key={it.n} {...it} />
      ))}
    </>
  );
}

/* ==================================================================
   SECTION · Accelerator value · 14 wk vs 12–18 mo
   Blue gradient · side-by-side timeline cards
   ================================================================== */

function AcceleratorValue() {
  return (
    <section
      id="value"
      className="relative bg-lp-bright py-28 md:py-40 overflow-hidden text-[var(--sw-black)]"
    >
      {/* strong section opener divider from the dark ReferenceCase above */}
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/15" />
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-6 text-[var(--sw-black)]/55">Why accelerator · not bespoke</div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[18ch]">
            You don’t pay us to learn{" "}
            <span className="text-[var(--sw-blue)]">school photography</span>
          </h2>
          <p className="mt-6 text-[var(--sw-black)]/75 max-w-[58ch] text-[16px] md:text-[17px] leading-relaxed">
            We already learned it, under a real Q1 deadline, against a legacy
            database nobody had touched in five years. The result is a proven
            build we adapt to you.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* WITHOUT · muted card on bright bg */}
          <Reveal>
            <div className="rounded-[4px] border border-[var(--sw-black)]/12 bg-white/60 p-8 md:p-10 h-full">
              <div className="flex items-baseline justify-between mb-8">
                <span className="label-code text-[var(--sw-black)]/55">WITHOUT ACCELERATOR</span>
                <span className="font-head text-[40px] md:text-[52px] leading-none text-[var(--sw-black)]/55 tabular-nums">
                  12–18 mo
                </span>
              </div>
              <ul className="space-y-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/75 leading-relaxed">
                {[
                  "Agency learns what SIC codes are on your budget",
                  "Data model built from first principles, school-photography structure discovered late",
                  "Batch engine edge cases discovered in your environment, during peak season",
                  "Portal architecture figured out during the build",
                  "Integration patterns invented per legacy system",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="h-px w-3 bg-[var(--sw-black)]/35 mt-3 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* WITH · premium dark tile — hero card */}
          <Reveal delay={0.1}>
            <div
              className="relative rounded-[4px] p-8 md:p-10 h-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
                border: "1px solid rgba(63,74,175,0.35)",
              }}
            >
              {/* ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(420px 260px at 110% -10%, rgba(63,74,175,0.25), transparent 60%), radial-gradient(320px 200px at -10% 100%, rgba(110,247,110,0.08), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="label-code text-[var(--sw-mint)]">WITH ACCELERATOR</span>
                  <span className="font-head text-[40px] md:text-[52px] leading-none text-white tabular-nums">
                    14 wk
                  </span>
                </div>
                <ul className="space-y-4 text-[14px] md:text-[15px] text-white/90 leading-relaxed">
                  {[
                    "Vertical knowledge built in — SIC codes, siblings, portal workflows",
                    "Production data model designed for school photography from day one",
                    "Batch engine tested through a live Q1 peak · zero incidents",
                    "Portal adapted from live production code, not a whiteboard",
                    "Integration adapters proven across 5 legacy systems, extends to SAP, Navision, NetSuite, Odoo",
                  ].map((t, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="h-4 w-4 shrink-0 mt-1 text-[var(--sw-mint)]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   SECTION · Three launch moments (testimonials)
   Dark · staggered tilt for visual interest
   ================================================================== */

/* ==================================================================
   SECTION · Three voices from launch
   Dark · mix of CEO, operator, PM · quotes sourced from transcripts
   ================================================================== */

function Testimonials() {
  const quotes = [
    {
      tag: "PRE-LAUNCH · DEMO REVIEW",
      short: "It looks great. Really slick.",
      long: "It looks great. It’s really slick. Can’t wait to get it in.",
      who: "Jon Mann",
      role: "COO · Advanced Life",
      accent: "mint",
    },
    {
      tag: "GO-LIVE · OPERATIONS DEF OF DONE",
      short: "Money coming in. No phone calls. Smooth sailing.",
      long: "Money coming in. No phone calls from anybody. No upset customers. Smooth sailing.",
      who: "David van Gelder",
      role: "Operations · Advanced Life",
      accent: "blue",
    },
    {
      tag: "T-6 DAYS · LEADERSHIP MINDSET",
      short: "If you wait for perfection, you never implement.",
      long: "You’ll never do one of these where something doesn’t fall flat on its face. What you do about it when it happens. If you wait for perfection, you never implement.",
      who: "Jon Mann",
      role: "COO · Advanced Life",
      accent: "mint",
    },
  ];
  return (
    <section id="testimonials" className="bg-[var(--sw-black)] py-28 md:py-36 relative overflow-hidden">
      {/* ambient top line */}
      <svg className="absolute inset-x-0 top-0 h-px w-full opacity-50" viewBox="0 0 1000 1" preserveAspectRatio="none">
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={2} />
      </svg>

      <div className="wrap">
        <div className="max-w-[60ch] mb-14 md:mb-20">
          <Reveal>
            <div className="label-code mb-6 text-white/55">Voices from the engagement</div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[60px] leading-[1.05] max-w-[22ch]">
              The client,{" "}
              <span className="text-white/45">in their own words.</span>
            </h2>
            <p className="mt-6 text-white/75 text-[16px] md:text-[17px] leading-relaxed">
              Quoted from 70 weekly syncs, go-live day, and monthly feedback loops across the Advanced Life engagement. COO, operations lead, delivery team.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <figure className="relative rounded-[4px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 md:p-8 h-full flex flex-col gap-6 transition-all hover:-translate-y-1 hover:border-white/20">
                {/* accent bar */}
                <span
                  className="absolute left-0 top-7 bottom-7 w-px"
                  style={{
                    background:
                      q.accent === "mint" ? "var(--sw-mint)" : "var(--sw-blue)",
                    opacity: 0.6,
                  }}
                />
                <div className="label-code flex items-center gap-2 text-white/55 pl-3">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background:
                        q.accent === "mint" ? "var(--sw-mint)" : "var(--sw-blue)",
                    }}
                  />
                  {q.tag}
                </div>
                <blockquote className="font-head text-white text-[20px] md:text-[22px] leading-[1.22] pl-3">
                  &ldquo;{q.short}&rdquo;
                </blockquote>
                <figcaption className="mt-auto pl-3">
                  <div className="text-white text-[13px] md:text-[14px] font-medium">
                    {q.who}
                  </div>
                  <div className="label-code text-white/55 mt-1">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   SECTION · Reference case study · NAMED Advanced Life
   Blue gradient · 3 fires we came with + 4 strong stats
   ================================================================== */

function ReferenceCase() {
  return (
    <section
      id="reference"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 15% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 85% 85%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 75%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-6 text-white/55">Reference implementation</div>
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-end">
            <h2 className="font-head text-white text-[36px] md:text-[52px] lg:text-[64px] leading-[1.04] max-w-[14ch]">
              <span className="text-[var(--sw-mint)]">Advanced Life.</span>{" "}
              <span className="text-white">Australia</span>
            </h2>
            <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed max-w-[60ch]">
              National school photography operator. Hundreds of schools. Tens of thousands of students. Hard Q1 peak. Strict student data residency. Five legacy systems that nobody had touched in five years.
            </p>
          </div>
        </Reveal>

        {/* 3 fires */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              n: "Fire · 01",
              title: "Five legacy systems. No unified data",
              body: "GlobalJade, ImageDatabase, The Hub, CRM, eWay. Downtime risk compounding every year.",
            },
            {
              n: "Fire · 02",
              title: "500 GB of portraits on a physical server",
              body: "On-prem file storage. Backups by hand. One hard drive away from a national incident.",
            },
            {
              n: "Fire · 03",
              title: "Legacy database, five years untouched",
              body: "Student names as single text strings. SIC codes tied to images. Structural debt blocking every change.",
            },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-[4px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 md:p-8 h-full flex flex-col">
                <div className="label-code text-white/55 mb-4">{f.n}</div>
                <h3 className="font-head text-white text-[19px] md:text-[22px] leading-[1.2] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 4 strong stats */}
        <Reveal delay={0.2}>
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pt-12 border-t border-white/10">
            {[
              ["44,891", "students on MDM · day one"],
              ["14 wk", "kickoff → MVP in production"],
              ["0", "peak-season incidents · Q1 2025"],
              ["5 / 0", "legacy integrated / decommissioned mid-project"],
            ].map(([v, l]) => (
              <div key={v} className="flex flex-col gap-3">
                <div className="font-head text-white text-[40px] md:text-[52px] lg:text-[64px] leading-none tabular-nums">
                  {v}
                </div>
                <div className="label-code text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* closing note */}
        <Reveal delay={0.3}>
          <p className="mt-14 md:mt-16 max-w-[70ch] text-white/75 text-[14px] md:text-[15px] leading-relaxed">
            These modules sit on top of the full Magento 2 + Hyv&auml; + Pimcore baseline. Not instead of it. You keep everything commerce already does well. You get the parts that school photography needs to operate.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================================================================
   SECTION · How we work · 3 phases · BEIGE/LIGHT background
   ================================================================== */

function HowWeWork() {
  const steps = [
    {
      n: "01",
      length: "2–4 weeks",
      title: "Diagnostic sprint",
      body:
        "We map your data, systems, exports, roles. Identify the single highest-cost workflow. You get a phased plan, including where the accelerator does not apply.",
    },
    {
      n: "02",
      length: "6–12 weeks",
      title: "Pilot module",
      body:
        "One contained module live in production — portal, batch engine, or ID cards. No big-bang risk. Measurable result by the end of the pilot.",
    },
    {
      n: "03",
      length: "Phased",
      title: "Scaled rollout",
      body:
        "Extend across regions, brands, or adjacent workflows. Each phase funded by what the previous proved. Legacy stays live throughout.",
    },
  ];
  return (
    <section id="how-we-work" className="relative bg-lp-bright py-28 md:py-40 text-[var(--sw-black)]">
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-6 text-[var(--sw-black)]/55">How an engagement runs</div>
          <h2 className="font-head text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[22ch] text-[var(--sw-black)]">
            Start with the one workflow{" "}
            <span className="text-[var(--sw-blue)]">that costs you the most</span>
          </h2>
        </Reveal>

        {/* Three premium dark tiles · editorial card pattern */}
        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((s, i) => {
            const accent = i === 0 ? "#3F4AAF" : i === 1 ? "#6EF76E" : "#DADCF1";
            return (
              <Reveal key={s.n} delay={i * 0.1}>
                <div
                  className="relative h-full rounded-[4px] p-7 md:p-9 text-white overflow-hidden transition-all hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
                    border: "1px solid rgba(230,231,239,0.08)",
                  }}
                >
                  {/* top accent stripe */}
                  <span
                    className="absolute top-0 left-0 h-[3px] w-12"
                    style={{ background: accent }}
                  />

                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full font-head font-semibold text-[14px]"
                      style={{
                        border: `1px solid ${accent}`,
                        color: accent,
                        background: `${accent}11`,
                      }}
                    >
                      {s.n}
                    </span>
                    <span
                      className="label-code px-2.5 py-1 rounded-[2px]"
                      style={{
                        border: "1px solid rgba(230,231,239,0.18)",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {s.length.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-head text-white text-[22px] md:text-[26px] leading-[1.12] mb-3 max-w-[18ch]">
                    {s.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed max-w-[40ch]">
                    {s.body}
                  </p>

                  {/* animated bottom rule */}
                  <svg viewBox="0 0 100 1" className="absolute left-0 right-0 bottom-0 w-full h-px" preserveAspectRatio="none">
                    <DrawnPath
                      d="M0 0.5 H100"
                      stroke={accent}
                      strokeWidth={1}
                      strokeOpacity={0.7}
                      duration={1}
                      delay={0.4 + i * 0.1}
                    />
                  </svg>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   SECTION · FAQ · Dark with scroll-reveal accordion
   ================================================================== */

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  return (
    <Reveal delay={i * 0.04}>
      <details className="group border-b border-white/10 py-5 md:py-6 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-start justify-between gap-6 font-head text-white text-[17px] md:text-[20px] leading-[1.3]">
          <span>{q}</span>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border border-white/15 bg-white/[0.02] group-open:bg-[var(--sw-mint)]/15 group-open:border-[var(--sw-mint)]/50 transition">
            <Plus className="h-4 w-4 text-white group-open:hidden" />
            <Minus className="h-4 w-4 text-[var(--sw-mint)] hidden group-open:block" />
          </span>
        </summary>
        <div className="pt-4 pr-12 text-white/75 text-[14px] md:text-[16px] leading-relaxed">{a}</div>
      </details>
    </Reveal>
  );
}

function FAQ() {
  const items = [
    {
      q: "Do we have to use Pimcore?",
      a: "No. The accelerator is a proven architecture pattern, not one stack. Reference deployment uses Pimcore for the data and portal layer, Magento 2 + Hyvä for parent commerce, .NET middleware for integration. We assess your stack in the diagnostic sprint and recommend what fits.",
    },
    {
      q: "We already have a school portal. Does that disqualify us?",
      a: "No. Many engagements start with one specific capability — batch exports, ID card flows, access controls — not a full replacement. The diagnostic sprint identifies the highest-cost workflow. We fix that first.",
    },
    {
      q: "What does a fourteen-week launch actually cover?",
      a: "Student data model redesigned from the ground up. Dual SSO wired. Batch engine with 10 export formats. ID card workflow live. Five legacy systems integrated via middleware API. Admin on VPN, portal IP-restricted. Full audit logging. 500GB images migrated off an on-prem server. Live before Q1 peak.",
    },
    {
      q: "Our legacy systems are fragile. Can we modernize without touching them?",
      a: "Yes. That is exactly the point of the middleware integration layer. New systems talk to legacy through an adapter API. No direct database access, no cutover risk. The reference engagement kept all five legacy systems live during delivery.",
    },
    {
      q: "What if our ERP is SAP, Navision, or something else?",
      a: "The adapter pattern extends naturally. Five production adapters today; SAP B1, MS Dynamics, Odoo, NetSuite, and in-house systems have been scoped. Protocol mix per integration — REST, GraphQL, SOAP, webhooks, Kafka/SQS, SFTP/CSV, EDI.",
    },
    {
      q: "We are not in Australia. Does this apply to our market?",
      a: "Yes. Australia was the reference. Core problems are consistent across the US, UK, Canada, New Zealand. Privacy and residency differ by region and are built per engagement.",
    },
    {
      q: "Who owns the code after launch?",
      a: "You do. Full repository and documentation handed over at launch. No lock-in. Ongoing support happens on request.",
    },
    {
      q: "Can we see a live demo before committing?",
      a: "Yes. We walk through the modules in a sandbox during the consultation. Book below.",
    },
  ];
  return (
    <section id="faq" className="bg-[var(--sw-black)] py-28 md:py-40">
      <div className="wrap">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
          <Reveal>
            <div className="label-code mb-6 text-white/55">FAQ</div>
            <h2 className="font-head text-white text-[34px] md:text-[44px] lg:text-[56px] leading-[1.05] max-w-[14ch]">
              The questions that actually <span className="text-[var(--sw-mint)]">come up</span>
            </h2>
          </Reveal>
          <div>
            {items.map((it, i) => (
              <FAQItem key={i} q={it.q} a={it.a} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   SECTION · CTA · Blue gradient full-width + form
   ================================================================== */

function CTA() {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 80% 80%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <div className="label-code mb-6 text-white/55">Configure, don&apos;t rebuild</div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[18ch]">
              Tell us about your operation.{" "}
              <span className="text-[var(--sw-mint)]">We will be direct.</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-[52ch] text-[16px] md:text-[17px] leading-relaxed">
              Thirty minutes is enough to map your stack, identify your highest-friction workflow, and tell you honestly whether the accelerator fits. If it does not, we will say so.
            </p>

            {/* Account-exec quote card */}
            <div className="mt-10 rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-7">
              <blockquote className="font-head text-white text-[17px] md:text-[19px] leading-[1.3]">
                &ldquo;You pay us to{" "}
                <span className="text-[var(--sw-mint)]">configure, not rebuild</span>. Advanced Life funded the first version. You get the proven one.&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-4">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gradient-to-br from-[var(--sw-mint)]/40 to-[var(--sw-blue)]/60 flex items-center justify-center">
                  <span className="font-head text-[14px] text-white font-bold">KG</span>
                </div>
                <div>
                  <div className="text-white text-[13px] font-medium">Kristaps Gailitis</div>
                  <div className="label-code text-white/55 mt-0.5">CMO · scandiweb</div>
                </div>
              </div>
            </div>

            <ul className="mt-10 space-y-2.5 text-[13px] md:text-[14px] text-white/75">
              {[
                "Response within one business day",
                "30 minutes · fit assessment, no sales pitch",
                "Full reference case study on request",
                "If we are not the right fit, we will tell you",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--sw-mint)]" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              className="rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-7 md:p-8 grid gap-3.5"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <label className="flex flex-col gap-1.5">
                <span className="label-code text-white/55">Your name</span>
                <input
                  type="text"
                  required
                  className="bg-white/[0.04] border border-white/10 rounded-[2px] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--sw-mint)]/40"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="label-code text-white/55">Work email</span>
                <input
                  type="email"
                  required
                  className="bg-white/[0.04] border border-white/10 rounded-[2px] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--sw-mint)]/40"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="label-code text-white/55">Company</span>
                <input
                  type="text"
                  className="bg-white/[0.04] border border-white/10 rounded-[2px] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--sw-mint)]/40"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="label-code text-white/55">Biggest operational challenge right now</span>
                <textarea
                  rows={3}
                  className="bg-white/[0.04] border border-white/10 rounded-[2px] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--sw-mint)]/40"
                />
              </label>
              <button type="submit" className={`${btnPrimary} w-full mt-2 justify-between`}>
                Book a walkthrough
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="label-code text-white/45 mt-1.5">
                We respond within one business day. No spam, no pressure.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   SECTION · Footer · minimal · scandiweb.com style
   ================================================================== */

function Footer() {
  return (
    <footer className="bg-[var(--sw-black)] border-t border-white/10">
      <div className="wrap py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <img src="/logos/scandiweb.svg" alt="scandiweb" className="h-[18px] md:h-5 w-auto" />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 label-code text-white/55">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <span className="text-white/30">·</span>
            <span>© 2026 scandiweb. All rights reserved.</span>
          </div>
          <div className="label-code inline-flex items-center gap-2 text-white/55">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--sw-mint)] pulse-green" />
            STATUS · ALL SYSTEMS NORMAL
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
      <ProblemFires />
      <Differentiator />
      <Outcomes />
      <ReferenceCase />
      <AcceleratorValue />
      <Testimonials />
      <HowWeWork />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
