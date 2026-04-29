# Copy · School Photography Commerce LP

Every word on the page, in section order. Text in **[square brackets]** is meant to be highlighted — blue on bright sections, mint green on dark sections. Do not add periods at the end of headings.

Live URL: https://lp-v2-zeta.vercel.app

---

## 1. Nav

- **Logo**: scandiweb wordmark (white, lowercase)
- **Right**: "menu" (lowercase) + two-line hamburger icon

---

## 2. Hero

**Eyebrow pill** (uppercase, tracked): `SCANDIWEB INDUSTRY SOLUTION`

**H1**: School photography **[commerce]**

**Subhead**:
> A **production-ready commerce platform** for school photography businesses. Already built. Already peak-tested. Configure it to your catalog, schools, and stack — you don't rebuild it from scratch.

**Secondary line**:
> **14 weeks** kickoff to live — not 14 months. Covers student data, parent commerce, school portal, batch exports, ID cards, dual SSO, and legacy integration.

**Scroll indicator**: `scroll to discover` (lowercase, 14 px)

### Right side — Product spec card

- **Header label**: `Accelerator · v1 · production` (+ pulsing green dot)
- **Lead stat**: `6` · `production modules`
- **Module list**:
  1. Self-service school portal
  2. Unified student data model
  3. Automated batch exports
  4. ID card & admin services
  5. Dual SSO + audit
  6. Legacy integration layer
- **Stat tile strip** (3 tiles):
  - `14 wk` · `to live`
  - `Peak` · `tested`
  - `5+` · `integrations`
- **Footer link**: `What ships` + up-right arrow → scrolls to `#at-a-glance`

---

## 3. Trust bar (below Hero)

**Left copy**: `Trusted by 600+ leading brands worldwide` (bold, two lines)

**Logos** (in order, all white silhouettes):
1. PUMA (height 30 px)
2. Olympus / OM Digital Solutions (height 24 px)
3. Boy Scouts of America (height 28 px)
4. The New York Times (height 22 px)
5. Samsung (height 22 px)
6. Acer (height 22 px)
7. Adobe (height 22 px)

Logo files in `assets/logos/`. Apply CSS filter `brightness(0) invert(1)` so they render white on the dark background.

---

## 4. Accelerator at a glance

**Eyebrow**: `THE ACCELERATOR AT A GLANCE`

**H2**: Come to us. **[The platform is already built]**

**Lede**:
> A complete commerce stack — production code, proven architecture, battle-tested at peak. You configure it against your catalog, schools, and integration stack. You don't spend 18 months discovering what school photography actually needs.

### Left panel — Module architecture stack

**Caption**: `FIG.01 · MODULE ARCHITECTURE`

| # | Module | Stack |
|---|---|---|
| 01 | Self-service school portal | Magento 2 · Hyvä |
| 02 | Unified student data model | Pimcore MDM |
| 03 | Automated batch exports | CRON · 10 formats |
| 04 | ID card & admin services | in-platform builder |
| 05 | Dual SSO + audit | Cognito · Entra · Google |
| 06 | Legacy integration layer | .NET middleware |

### Right panel — Spec sheet (dark tile)

**Header**: `Spec sheet` · (pulsing green dot) · `Live`

| Key | Value |
|---|---|
| Deployment | 14 weeks · kickoff to live |
| Team shape | 5–8 person pod · senior-led |
| Platform baseline | Magento 2 + Hyvä + Pimcore |
| Integration adapters | REST · GraphQL · SOAP · webhooks · Kafka · SFTP · EDI |
| Auth | SAML · OIDC · SAML federation · IP allowlist |
| Peak readiness | Battle-tested through a full peak season |
| Data residency | Region-pinned per deployment |
| Handover | Runbooks · architecture docs · admin training |

---

## 5. ProblemFires · "The fires this solves"

**Eyebrow**: `THE FIRES THIS SOLVES`

**H2**: Three fires common to **[school photography commerce]**

**Lede**:
> Hundreds of schools. Tens of thousands of students. A hard seasonal peak. A stack that has been patched for a decade. Any mid-market business will recognise all three.

### Fire cards (3 in a row)

**Fire · 01**
- Title: A legacy stack nobody wants to touch
- Body: Five or more systems, no unified data model. An ageing platform, an image DB, a CRM, a fulfilment tool. Downtime risk compounds every year.

**Fire · 02**
- Title: Student data scattered
- Body: Names as single text strings. SIC codes tied to images, not students. Sibling relationships and school transfers nowhere in the schema.

**Fire · 03**
- Title: Hard seasonal peak
- Body: Photography season collides with yearbooks, ID cards, and parent orders. A manual stack breaks at peak. Support queue explodes.

### Pullquote (below fire cards)

> We had **[40 people doing what should take 25]**. Burning cash from all of these client service officers.

**Attribution**: `David van Gelder · Operations · Advanced Life`

Use a large mint-green quote-marks SVG above the quote (see source HTML — it's a simple two-paragraph glyph).

---

## 6. Differentiator · "What makes it different"

**Eyebrow**: `WHAT MAKES IT DIFFERENT`

**H2**: The **[parent, student, and school]** are three separate entities. So is the architecture

**Lede**:
> Every feature in this stack flows from one modeling decision. Treat the parent, each student, and each school as distinct, linked entities. Generic platforms get this wrong. It is what makes every downstream feature work.

### Left — 3 numbered decisions

**01 · Multi-child account** (tag chip: `PARENTS`)
One parent manages many students across many schools. Each student has their own grade, school, and personalisation. The student switcher drives cart, catalog, and context.

**02 · School-gated catalog** (tag chip: `PRODUCTS`)
Products scoped to schools, campuses, and grades. Parents only see what the selected student is authorised for. Guests see limited views with prices hidden.

**03 · Operational integration layer** (tag chip: `ADAPTERS`)
Real-time bidirectional sync with the ERP. Fallback cron jobs, retry logic, and audit logs built in from day one.

### Right — Entity schema diagram

Use `svgs/entity-schema.svg`. Caption below: `FIG.02 · DATA MODEL` — hairline — `3 TABLES · 2 JOINS`

---

## 7. Outcomes · intro

**Eyebrow**: `OUTCOMES · SIX`

**H2**: Six operational problems. **[Gone]**

**Lede** (right column):
> Each module is live in production. No prototypes, no roadmap, no whiteboard architecture. Configure against your catalog, your schools, your stack.

**Stat tiles** (3, under the lede):
- `6` · `Outcomes`
- `14` · `Weeks to live`
- `0` · `Peak incidents`

### Chip strip — anchor-linked preview of the 6 outcomes

| # | Label |
|---|---|
| 01 | Self-service school portal |
| 02 | Batch export engine |
| 03 | Student data model · Pimcore MDM |
| 04 | ID card & admin services |
| 05 | Dual SSO + audit |
| 06 | Legacy integration layer |

Each chip links to `#outcome-01` through `#outcome-06`.

---

## 8. Outcome rows (6)

Each outcome row has the same structure: kicker label, H3, lede, 3-item results list, diagram. Alternating dark / bright theme.

### Outcome 01 · Self-service school portal (dark)
- Eyebrow: `OUTCOME · 01` — `SELF-SERVICE SCHOOL PORTAL`
- H3: Schools **[stop calling]** your team
- Lede: Schools upload rosters, correct data, and download their images themselves. Role-based access per school, per user type. Every action audit-logged.
- Results:
  - Support queue stops growing term on term
  - Region-aware IP allowlist per deployment
  - Escalations remain possible, but rare
- Diagram: `svgs/portal-chart.svg`

### Outcome 02 · Batch export engine (bright · dark tile)
- Eyebrow: `OUTCOME · 02` — `BATCH EXPORT ENGINE`
- H3: Your weekly export **[stops being a job]**
- Lede: Ten export formats, dynamic naming rules per school, running on a CRON schedule. Manual re-runs are one click from the portal.
- Results:
  - CRON-scheduled off-peak, no human in the loop
  - SchoolCode-StudentID-Grade-Year.jpg per school
  - Every export audit-logged — who, what, when, where
- Diagram: `svgs/cron-schedule.svg`

### Outcome 03 · Student data model (dark)
- Eyebrow: `OUTCOME · 03` — `STUDENT DATA MODEL · PIMCORE MDM`
- H3: Five systems collapse into **[one clean graph]**
- Lede: SCHOOL → STUDENT → ASSET → PARENT → ORDER, normalized from day one. Sibling relationships, co-parenting, returning-student flags are first-class.
- Results:
  - One source of truth replaces five disconnected databases
  - SIC codes attached to students, not images
  - Audit-logged end to end, every field, every change
- Diagram: `svgs/data-graph.svg`

### Outcome 04 · ID card & admin services (bright · dark tile)
- Eyebrow: `OUTCOME · 04` — `ID CARD & ADMIN SERVICES`
- H3: No more **[CSV email chains]**
- Lede: Order, preview, and export ID cards with a full audit trail. Reorders and replacements handled in-platform. No manual handoffs, no wrong versions.
- Results:
  - Static JPG preview per card before order lock
  - CSV export for downstream print pipelines
  - Reorder flow for lost cards, name changes, grade transitions
- Diagram: `svgs/id-card.svg`

### Outcome 05 · Dual SSO + audit (dark)
- Eyebrow: `OUTCOME · 05` — `DUAL SSO + AUDIT`
- H3: Compliance by design, **[not by memory]**
- Lede: AWS Cognito for school admins. Microsoft Entra ID for internal staff. Google OAuth for parent commerce. Every login, every action, audit-logged at the system level.
- Results:
  - Role-based access, scoped per user pool
  - SAML or OIDC supported for downstream federation
  - Admin panel on VPN, school portal IP-allowlisted
- Diagram: `svgs/sso-audit.svg`

### Outcome 06 · Legacy integration layer (bright · dark tile)
- Eyebrow: `OUTCOME · 06` — `LEGACY INTEGRATION LAYER`
- H3: Modernize without **[ripping out]** what works
- Lede: A middleware API connects new systems to your existing stack. File servers, databases, SIS, ERP, print pipelines. Legacy stays live throughout delivery.
- Results:
  - REST, GraphQL, SOAP, webhooks, Kafka/SQS, SFTP/CSV, EDI
  - Adapter pattern extends to SAP, Navision, Odoo, NetSuite
  - Reference: 5 legacy systems live · 0 decommissioned mid-project
- Diagram: `svgs/legacy-integration.svg`

---

## 9. ReferenceCase · Advanced Life (dark)

**Eyebrow**: `REFERENCE IMPLEMENTATION`

**H2** (two parts):
- **[Advanced Life.]** (mint green)
- Australia (white)

**Lede** (right column):
> National school photography company. Hundreds of schools. Tens of thousands of students. Hard Q1 peak. Strict student data residency. Five legacy systems that nobody had touched in five years.

(Note: "Q1" is intentional and only used in this section. Do not use Q1 anywhere else on the page.)

### Fire cards — what we walked into (3 in a row)

**Fire · 01**
- Title: Five legacy systems. No unified data
- Body: GlobalJade, ImageDatabase, The Hub, CRM, eWay. Downtime risk compounding every year.

**Fire · 02**
- Title: 500 GB of portraits on a physical server
- Body: On-prem file storage. Backups by hand. One hard drive away from a national incident.

**Fire · 03**
- Title: Legacy database, five years untouched
- Body: Student names as single text strings. SIC codes tied to images. Structural debt blocking every change.

### Stat block (4 big numbers)

| Value | Label |
|---|---|
| `44,891` | students on MDM · day one |
| `14 wk` | kickoff → MVP in production |
| `0` | peak-season incidents · Q1 2025 |
| `5 / 0` | legacy integrated / decommissioned mid-project |

### Closing note

> These modules sit on top of the full Magento 2 + Hyvä + Pimcore baseline. Not instead of it. You keep everything commerce already does well. You get the parts that school photography needs to operate.

---

## 10. AcceleratorValue · Accelerator vs building from scratch (bright)

**Eyebrow**: `ACCELERATOR VS BUILDING FROM SCRATCH`

**H2**: You don't pay us to learn **[school photography]**

**Lede**:
> The vertical knowledge is already built in — SIC codes, sibling relationships, portal workflows, peak-season behaviour. You get the proven build, configured to your operation.

### Left card — WITHOUT ACCELERATOR (muted light card)

- Badge: `WITHOUT ACCELERATOR`
- Big stat: `12–18 mo`
- Bullets:
  - Agency learns what SIC codes are on your budget
  - Data model built from first principles, school-photography structure discovered late
  - Batch engine edge cases discovered in your environment, during peak season
  - Portal architecture figured out during the build
  - Integration patterns invented per legacy system

### Right card — WITH ACCELERATOR (dark tile — visual hero)

- Badge (mint green): `WITH ACCELERATOR`
- Big stat: `14 wk`
- Bullets (with mint green checkmarks):
  - Vertical knowledge built in — SIC codes, siblings, portal workflows
  - Production data model designed for school photography from day one
  - Batch engine tested through a live peak season · zero incidents
  - Portal adapted from live production code, not a whiteboard
  - Integration adapters proven across 5 legacy systems, extends to SAP, Navision, NetSuite, Odoo

---

## 11. Testimonials (dark)

**Eyebrow**: `QUOTED FROM THE REFERENCE LAUNCH`

**H2**: The client, **[in their own words]**

**Lede**:
> Two voices from the reference launch — demo review and go-live day. Pulled from weekly syncs over the engagement.

### Quote cards (2 in a row, mint and blue accent bars)

**Card 1 (mint accent)**
- Tag: `PRE-LAUNCH · DEMO REVIEW`
- Quote: "It looks great. Really slick."
- Attribution: Jon Mann · COO · reference client

**Card 2 (blue accent)**
- Tag: `GO-LIVE · OPERATIONS DEF OF DONE`
- Quote: "Money coming in. No phone calls. Smooth sailing."
- Attribution: David van Gelder · Operations · reference client

---

## 12. HowWeWork · How an engagement runs (bright · 3 dark tiles)

**Eyebrow**: `HOW AN ENGAGEMENT RUNS`

**H2**: Start with the one workflow **[that costs you the most]**

### 3 phase tiles (dark premium tiles on bright section)

**Tile 01** (blue accent stripe)
- Number: `01` · Duration chip: `2–4 WEEKS`
- H3: Diagnostic sprint
- Body: We map your data, systems, exports, roles. Identify the single highest-cost workflow. You get a phased plan, including where the accelerator does not apply.

**Tile 02** (mint accent stripe)
- Number: `02` · Duration chip: `6–12 WEEKS`
- H3: Pilot module
- Body: One contained module live in production — portal, batch engine, or ID cards. No big-bang risk. Measurable result by the end of the pilot.

**Tile 03** (grey accent stripe)
- Number: `03` · Duration chip: `PHASED`
- H3: Scaled rollout
- Body: Extend across regions, brands, or adjacent workflows. Each phase funded by what the previous proved. Legacy stays live throughout.

---

## 13. WhatShips · Around the code (dark)

**Eyebrow**: `AROUND THE CODE`

**H2**: Not just the platform. **[Everything to run it]**

**Lede**:
> The engagement hands over the artifacts your team needs to own the stack after launch. No black box, no vendor lock-in, no post-launch silence.

### 5 deliverables (manifest list · dark)

| # | Name | Detail | Type chip |
|---|---|---|---|
| 01 | Migration plan | Scripted cutover from your legacy systems. Dry-run tested. Zero-downtime fallback. | DOC |
| 02 | Architecture documentation | System diagram, data model, integration adapters, auth flows. Versioned with the code. | DOC |
| 03 | Runbooks | Peak-season ops, recovery procedures, known-issue registry. Written for your on-call team. | DOC |
| 04 | Admin training | Three-session handover covering portal, exports, ID cards, SSO, and audit access. | SESSION |
| 05 | 30-day post-launch | Joint on-call with your team through the first peak window. Fix-forward, not hand-off-and-disappear. | SUPPORT |

**Section tail · CTA row**: small heading on left + button on right.
- Heading: "Code, docs, training, post-launch on-call. The whole package."
- Button (dark style): `Start the accelerator` → `#cta`

---

## 14. FAQ (dark · accordion)

**Eyebrow**: `FAQ`

**H2**: The questions that actually **[come up]**

### Q&A pairs (8 items, collapsed by default)

**Q: Do we have to use Pimcore?**
No. The accelerator is a proven architecture pattern, not one stack. Reference deployment uses Pimcore for the data and portal layer, Magento 2 + Hyvä for parent commerce, .NET middleware for integration. We assess your stack in the diagnostic sprint and recommend what fits.

**Q: We already have a school portal. Does that disqualify us?**
No. Many engagements start with one specific capability — batch exports, ID card flows, access controls — not a full replacement. The diagnostic sprint identifies the highest-cost workflow. We fix that first.

**Q: What does a fourteen-week launch actually cover?**
Student data model redesigned from the ground up. Dual SSO wired. Batch engine with 10 export formats. ID card workflow live. Five legacy systems integrated via middleware API. Admin on VPN, portal IP-restricted. Full audit logging. 500GB images migrated off an on-prem server. Live before Q1 peak.

**Q: Our legacy systems are fragile. Can we modernize without touching them?**
Yes. That is exactly the point of the middleware integration layer. New systems talk to legacy through an adapter API. No direct database access, no cutover risk. The reference engagement kept all five legacy systems live during delivery.

**Q: What if our ERP is SAP, Navision, or something else?**
The adapter pattern extends naturally. Five production adapters today; SAP B1, MS Dynamics, Odoo, NetSuite, and in-house systems have been scoped. Protocol mix per integration — REST, GraphQL, SOAP, webhooks, Kafka/SQS, SFTP/CSV, EDI.

**Q: We are not in Australia. Does this apply to our market?**
Yes. Australia was the reference. Core problems are consistent across the US, UK, Canada, New Zealand. Privacy and residency differ by region and are built per engagement.

**Q: Who owns the code after launch?**
You do. Full repository and documentation handed over at launch. No lock-in. Ongoing support happens on request.

**Q: Can we see a live demo before committing?**
Yes. We walk through the modules in a sandbox during the consultation. Book below.

---

## 15. CTA (dark · blue gradient + form)

**Eyebrow**: `CONFIGURE, DON'T REBUILD`

**H2**: Tell us about your operation. **[We will be direct.]**

**Lede**:
> Thirty minutes is enough to map your stack, identify your highest-friction workflow, and tell you honestly whether the accelerator fits. If it does not, we will say so.

### Quote card (inside left column)

> "You don't pay us to learn school photography. **[We already did.]** Configure the proven stack in 14 weeks, not 18 months."

**Attribution**: Kristaps Gailitis · CMO · scandiweb
**Avatar**: real headshot at `assets/team/kristaps.png` (44×44 px circle, 1 px border at `rgba(230, 231, 239, 0.2)`)
**Quote size**: 20 px mobile, 24 px desktop · Golos Text · line-height 1.25

### Commitment bullets (inside left column, mint green checkmarks)

- Response within one business day
- 30 minutes · fit assessment, no sales pitch
- Full reference case study on request
- If we are not the right fit, we will tell you

### Form (right column · glass card)

| Field | Label | Type | Required |
|---|---|---|---|
| Name | Your name | text | yes |
| Email | Work email | email | yes |
| Company | Company | text | no |
| Challenge | Biggest operational challenge right now | textarea (3 rows) | no |

**Submit button**: `Book a walkthrough` + up-right arrow

**Fine print**: `We respond within one business day. No spam, no pressure.`

---

## 16. Footer (dark)

- **Left**: scandiweb wordmark (white, lowercase)
- **Center**: Terms · Privacy · Cookies · © 2026 scandiweb. All rights reserved.
- **Right**: (pulsing green dot) `STATUS · ALL SYSTEMS NORMAL`

---

## Mid-page CTAs (4 inline rows)

Scattered through the page to give visitors a decision point at the end of each pitch arc. Each is a small horizontal row with: a short headline on the left + an outline button on the right linking to `#cta`.

| Where it lives | Theme | Headline | Button |
|---|---|---|---|
| End of `AcceleratorAtAGlance` | bright (light bg) → blue outline button | Stop building. Start configuring. | Start the accelerator → `#cta` |
| Right after the 6 outcome rows (own bright section) | bright | Six modules, all live in production. Configure them to your business — start the diagnostic. | Start the accelerator → `#cta` |
| End of `AcceleratorValue` | bright | 14 weeks vs 18 months. The math is the pitch. | Start the accelerator → `#cta` |
| End of `WhatShips` | dark → beige outline button | Code, docs, training, post-launch on-call. The whole package. | Start the accelerator → `#cta` |

Layout per row (in Webflow, build as a Symbol so all four reuse the same pattern):
- Top hairline divider
- Two-column flex row (stacks on mobile)
- Left column: headline (Golos Text · 20 px mobile / 24 px desktop · line-height 1.25 · max-width ~42 ch)
- Right column: outline button (48 px tall · 32 × 12 px padding · 2 px radius · Golos 600 · 17 px · with up-right arrow icon)
- Section padding above row: `pt-10` (40 px) + `mt-16 md:mt-20` (64–80 px from preceding content)

The button label stays consistent across all four ("Start the accelerator"). The headline copy varies — short and punchy.

---

## Voice checklist (apply everywhere)

- scandiweb is lowercase always
- eCommerce is capital-C (not Ecommerce, not ecommerce)
- No em-dashes — use en-dashes with spaces if needed
- No periods at end of headings
- Highlighted word blocks: 1–3 words max, mint on dark, blue on light
- Forbidden: "unlock", "revolutionize", "journey", "solutions" as a noun, "seamless"
