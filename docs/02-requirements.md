---
phase: requirements
status: draft
project: "blackwell-digital-website"
agent: "requirements"
generatedBy: orion-requirements
generatedAt: "2026-02-21"
date: "2026-02-21"
---



# ORION Requirements Document
## Project: Blackwell Digital Website

---

## User Personas

### Persona 1: "Growth-Stage Owner" — The Founder/CEO

| Attribute | Detail |
|-----------|--------|
| **Name** | David Chen (archetype) |
| **Role** | Founder / CEO / Owner-Operator |
| **Company** | $3M–$15M revenue, 15–60 employees |
| **Industry** | Professional services, home services (multi-location), construction |
| **Age Range** | 38–55 |
| **Tech Comfort** | Moderate — uses business software daily but doesn't evaluate technology architecturally |
| **Goals** | Reduce operational chaos, increase revenue without proportionally increasing headcount, understand what AI can actually do for a business their size |
| **Pain Points** | Overwhelmed by AI hype; burned by agencies that over-promised; suspicious of "consulting hours" without defined deliverables; doesn't have time for long sales cycles; feels priced out by enterprise consultancies |
| **How the Site Serves Them** | Immediately communicates "we serve businesses your size." The AI Maturity QuickScan gives them a free, personalized starting point. The structured offer ladder shows exactly what they'd buy and what outcomes to expect. Premium design signals this is serious, not a side hustle. |
| **Decision Trigger** | Seeing a clear framework that makes AI feel structured and measurable — not experimental. Social proof from similar-sized companies. A fast path to a conversation (book a call, not "request a proposal"). |

### Persona 2: "Ops Leader" — The COO / VP of Operations

| Attribute | Detail |
|-----------|--------|
| **Name** | Sarah Martinez (archetype) |
| **Role** | COO / VP Operations / Operations Director |
| **Company** | $5M–$25M revenue, 30–150 employees |
| **Industry** | Manufacturing/distribution, professional services |
| **Age Range** | 35–50 |
| **Tech Comfort** | High — evaluates tools and systems, manages implementation teams |
| **Goals** | Eliminate workflow bottlenecks, automate repetitive processes, build scalable operational infrastructure, present a credible AI transformation plan to the CEO/board |
| **Pain Points** | Knows the company needs AI/automation but lacks internal expertise to evaluate options; needs a partner who understands operations (not just marketing); tired of vendors who can't articulate ROI; needs to justify the investment internally |
| **How the Site Serves Them** | Detailed service pages with defined deliverables and KPIs give them the ammunition for internal buy-in. The AI Maturity Framework content educates them on the methodology. Case studies prove operational impact. The QuickScan produces a shareable diagnostic they can present upward. |
| **Decision Trigger** | Seeing operational (not just marketing) use cases. Clear deliverable timelines. Evidence of measurable efficiency gains. Ability to share assessment results with their CEO. |

### Persona 3: "Growth Marketer" — The CMO / Marketing Director

| Attribute | Detail |
|-----------|--------|
| **Name** | Alex Rivera (archetype) |
| **Role** | CMO / VP Marketing / Head of Growth |
| **Company** | $2M–$20M revenue, 10–80 employees |
| **Industry** | Professional services, home services, B2B services |
| **Age Range** | 30–45 |
| **Tech Comfort** | High — uses marketing automation, analytics, CRM daily |
| **Goals** | Implement AI-driven marketing systems, improve lead quality and conversion rates, build growth infrastructure that doesn't depend on one person's heroics |
| **Pain Points** | Current marketing stack is fragmented; can't get accurate attribution; knows AI could improve targeting and personalization but doesn't know where to start; marketing agencies talk tactics, not systems |
| **How the Site Serves Them** | Messaging that bridges marketing and operations (not siloed). Service pages that show how AI Growth System integrates marketing automation with broader business systems. Content that demonstrates marketing-specific ROI (CAC reduction, pipeline velocity). |
| **Decision Trigger** | Seeing marketing-specific KPIs tied to services. A framework that goes beyond "we'll run your ads" to systems-level thinking. Evidence the consultancy understands both marketing tech and business operations. |

---

## User Stories

### Growth-Stage Owner (David)

| ID | Story | Priority |
|----|-------|----------|
| U1 | As a **business owner**, I want to **immediately understand what Blackwell Digital does and who it's for** so that **I can determine in 10 seconds whether this is relevant to my business**. | **Must** |
| U2 | As a **business owner**, I want to **take a quick AI maturity assessment** so that **I get a personalized view of where my business stands without committing to a sales call**. | **Must** |
| U3 | As a **business owner**, I want to **see a clear menu of services with defined outcomes and timeframes** so that **I know what I'm buying before I ever talk to someone**. | **Must** |
| U4 | As a **business owner**, I want to **book a strategy call directly from the site** so that **I can take the next step without friction**. | **Must** |
| U5 | As a **business owner**, I want to **see proof that this works for companies my size** so that **I'm not taking a blind leap of faith**. | **Should** |
| U6 | As a **business owner**, I want to **understand pricing ranges or engagement investment levels** so that **I can self-qualify before investing time in a conversation**. | **Should** |

### Ops Leader (Sarah)

| ID | Story | Priority |
|----|-------|----------|
| U7 | As a **COO**, I want to **read detailed service breakdowns with deliverables and KPIs** so that **I can build an internal business case for the engagement**. | **Must** |
| U8 | As a **COO**, I want to **download or share my QuickScan results** so that **I can present AI maturity findings to my CEO or board**. | **Should** |
| U9 | As a **COO**, I want to **read case studies filtered by industry or challenge type** so that **I can find examples relevant to my operational context**. | **Should** |
| U10 | As a **COO**, I want to **understand the AI Maturity Framework methodology** so that **I trust the diagnostic approach before engaging**. | **Should** |

### Growth Marketer (Alex)

| ID | Story | Priority |
|----|-------|----------|
| U11 | As a **CMO**, I want to **see marketing-specific outcomes and use cases** so that **I know this isn't just an ops consultancy that ignores my growth challenges**. | **Should** |
| U12 | As a **CMO**, I want to **read thought leadership content on AI-driven marketing systems** so that **I can evaluate the firm's expertise before recommending them internally**. | **Could** |
| U13 | As a **CMO**, I want to **subscribe to ongoing insights or a newsletter** so that **I stay engaged even if I'm not ready to buy today**. | **Could** |

### All Personas (Cross-Cutting)

| ID | Story | Priority |
|----|-------|----------|
| U14 | As a **visitor**, I want the site to **load fast and work flawlessly on my phone** so that **I don't bounce due to poor experience**. | **Must** |
| U15 | As a **visitor**, I want to **find answers to common questions about AI transformation** so that **I feel educated and confident before reaching out**. | **Should** |

---

## Feature Requirements

### 1. Homepage

| Feature | Description | Priority | Complexity | Dependencies |
|---------|-------------|----------|------------|--------------|
| Hero Section | Headline + subhead that communicates positioning in <10 words. Primary CTA (QuickScan) and secondary CTA (Book a Call). Abstract/premium visual treatment — no stock imagery. | **Must** | Medium | Brand identity/design system |
| Positioning Statement Block | 2–3 sentence block that answers "Who is this for?" and "Why should I care?" with explicit SMB framing. | **Must** | Low | Final copy |
| Service Overview Cards | Three cards representing the offer ladder (Foundation Sprint, AI Growth System, AI-First Operating System) with brief outcome descriptions and links to detail pages. | **Must** | Medium | Service detail content |
| Social Proof Bar | Client logos, results metrics, or testimonial snippets. | **Should** | Low | Client permission / assets |
| AI Maturity Framework Teaser | Visual summary of the maturity framework with CTA to take the QuickScan. | **Must** | Medium | QuickScan tool, framework content |
| Authority Content Preview | Featured blog posts or thought leadership pieces. 2–3 cards. | **Should** | Low | Content creation |
| Final CTA Section | Strong closing CTA — "Take the QuickScan" or "Book Your Strategy Call" with supporting copy addressing primary objection (time/risk). | **Must** | Low | Scheduling integration |

### 2. AI Maturity QuickScan (Interactive Assessment)

| Feature | Description | Priority | Complexity | Dependencies |
|---------|-------------|----------|------------|--------------|
| Multi-Step Assessment Form | 8–15 questions covering operations, marketing, and digital maturity. Branching logic based on industry and company size. Progress indicator. | **Must** | High | Question framework from SME, form/state management |
| Personalized Results Page | AI maturity score visualization, stage identification (e.g., "Manual → Assisted → Automated → Autonomous"), and tailored recommendations mapped to service tiers. | **Must** | High | Scoring logic, design system |
| Lead Capture Gate | Collect name, email, company, role, and company size before or after results display. (Recommend: show partial results free, gate detailed report.) | **Must** | Medium | CRM integration, email automation |
| Shareable Results | Generate a unique URL or PDF of results that can be shared internally. | **Should** | Medium | PDF generation or permalink system |
| CRM Integration | Push lead data + assessment results to CRM with proper tagging (maturity stage, industry, company size). | **Must** | Medium | CRM selection (see Technical Requirements) |
| Email Automation Trigger | Trigger a nurture sequence based on maturity stage after assessment completion. | **Should** | Medium | Email platform integration |
| Analytics Tracking | Track assessment starts, completion rate, drop-off points, and result distribution. | **Must** | Medium | Analytics platform |

### 3. Services Pages (×3 + Overview)

| Feature | Description | Priority | Complexity | Dependencies |
|---------|-------------|----------|------------|--------------|
| Services Overview Page | Summary of the three-tier offer ladder with visual progression (Foundation → Growth → Operating System). | **Must** | Medium | Service content |
| Individual Service Pages | One page per tier. Each includes: problem statement, deliverables list, timeline, KPIs/outcomes, ideal client profile, investment range (if approved), related case study, and CTA. | **Must** | Medium | Service documentation from client |
| Service Comparison Table | Side-by-side comparison of the three tiers (deliverables, duration, investment, outcomes). | **Should** | Low | Service content |
| Engagement Process Section | Visual timeline or step-by-step showing how an engagement works (Discovery → Assessment → Implementation → Optimization). | **Should** | Low | Process documentation |

### 4. AI Maturity Framework Page (Pillar Content)

| Feature | Description | Priority | Complexity | Dependencies |
|---------|-------------|----------|------------|--------------|
| Framework Overview | Detailed explanation of the AI Maturity model — what it is, why it matters, how it works. Long-form authoritative content optimized for pillar SEO. | **Must** | Medium | SME content interviews |
| Maturity Stage Breakdown | Individual sections (or sub-pages) for each maturity stage with characteristics, challenges, and recommended next steps. | **Should** | Medium | Framework documentation |
| Interactive Framework Visualization | Visual/animated diagram showing the maturity stages. Click/hover reveals detail per stage. | **Could** | High | Design + front-end development |
| CTA to QuickScan | Embedded CTA within the content to take the assessment. | **Must** | Low | QuickScan page |
| FAQ Section | Structured Q&A addressing common questions about AI maturity for SMBs. Schema-marked as FAQPage. | **Must** | Low | Content development |

### 5. Case Studies / Results

| Feature | Description | Priority | Complexity | Dependencies |
|---------|-------------|----------|------------|--------------|
| Case Study Listing Page | Filterable grid/list of case studies. Filter by industry, service tier, and challenge type. | **Should** | Medium | Case study content, CMS structure |
| Individual Case Study Template | Structured format: Challenge → Approach → Results (with quantified KPIs) → Client Quote. | **Should** | Medium | Client permission, results data |
| Results/Metrics Callouts | Large, visually prominent KPI numbers within case studies (e.g., "47% reduction in processing time"). | **Should** | Low | Case study content |

> **⚠️ Ambiguity Flag:** The discovery document notes uncertainty about whether case studies or client results currently exist (Assumption #5). If no case studies are available at launch, this section should launch with a "Results" page featuring aggregated metrics and a placeholder structure that can be populated post-launch. **Client clarification required.**

### 6. About Page

| Feature | Description | Priority | Complexity | Dependencies |
|---------|-------------|----------|------------|--------------|
| Company Story | Origin story, mission, and philosophy — focused on why Blackwell exists and the market gap it fills. | **Must** | Low | Copy from client |
| Team Section | Founder/principal bio with professional photography. Team members if applicable. | **Must** | Low | Photography, bios |
| Values / Approach | Core principles that reinforce positioning (measurable outcomes, practitioner-led, no hype). | **Should** | Low | Copy |
| Trust Signals | Certifications, partnerships, media mentions, speaking engagements. | **Could** | Low | Assets from client |

### 7. Blog / Insights Hub

| Feature | Description | Priority | Complexity | Dependencies |
|---------|-------------|----------|------------|--------------|
| Blog Listing Page | Paginated listing with category/tag filtering. Categories aligned to pillar/cluster model (AI Maturity, Operations, Marketing, Digital Transformation). | **Must** | Medium | CMS content model |
| Blog Post Template | Rich content template supporting: headings hierarchy, images, pull quotes, embedded CTAs, code blocks, related posts, author attribution. | **Must** | Medium | CMS + design system |
| Category/Tag Architecture | Taxonomy aligned to pillar + cluster SEO strategy. | **Must** | Low | Keyword research, content strategy |
| Newsletter Signup | Inline and sidebar CTA to subscribe to email updates. | **Should** | Low | Email platform integration |
| Related Posts | Algorithm or manually curated related articles at bottom of each post. | **Should** | Low | CMS tagging |

### 8. Contact / Book a Call

| Feature | Description | Priority | Complexity | Dependencies |
|---------|-------------|----------|------------|--------------|
| Strategy Call Booking | Embedded scheduling widget (Calendly or similar) for booking strategy calls directly. | **Must** | Medium | Scheduling tool selection |
| Contact Form | Fallback contact form with fields: name, email, company, phone (optional), message, inquiry type. | **Must** | Low | Form handler, CRM integration |
| Office Location / Map | Google Maps embed for physical location. NAP (Name, Address, Phone) clearly displayed for local SEO. | **Should** | Low | Google Maps API |
| Response Time Expectation | Clear statement of expected response time (e.g., "We respond within one business day"). | **Must** | Low | Copy |

### 9. Global Components

| Feature | Description | Priority | Complexity | Dependencies |
|---------|-------------|----------|------------|--------------|
| Header / Navigation | Sticky header with logo, primary nav (Services, Framework, QuickScan, Insights, About, Contact), and primary CTA button ("Take the QuickScan" or "Book a Call"). Mobile hamburger menu. | **Must** | Medium | Design system, IA |
| Footer | Secondary nav, contact info, social links, newsletter signup, copyright, privacy/terms links. | **Must** | Low | Design system |
| Breadcrumbs | On all interior pages for navigation and SEO (BreadcrumbList schema). | **Must** | Low | CMS/routing |
| Skip-to-Content Link | First focusable element on every page. | **Must** | Low | Accessibility standard |
| Cookie Consent Banner | GDPR/CCPA-compliant cookie consent with granular opt-in/opt-out. | **Must** | Medium | Cookie consent tool |
| 404 Page | Custom-designed 404 with helpful navigation, search, and QuickScan CTA. | **Should** | Low | Design system |
| Sticky/Floating CTA | Persistent "Take the QuickScan" or "Book a Call" CTA visible during scroll (desktop: sidebar or bottom bar; mobile: bottom sticky). | **Could** | Medium | UX testing, design |

### 10. Legal / Compliance Pages

| Feature | Description | Priority | Complexity | Dependencies |
|---------|-------------|----------|------------|--------------|
| Privacy Policy | Comprehensive privacy policy covering data collection, QuickScan data handling, analytics, and marketing communications. | **Must** | Low | Legal review |
| Terms of Service | Standard terms of service. | **Must** | Low | Legal review |
| Accessibility Statement | Public accessibility commitment with contact for accommodation requests. | **Should** | Low | Accessibility audit results |

---

## Technical Requirements

### Platform & Framework

| Requirement | Specification | Rationale |
|-------------|---------------|-----------|
| **Frontend Framework** | Next.js 14+ (App Router) | Per ORION Coding Standards. Server Components by default. Optimal for performance, SEO, and hybrid rendering. |
| **CMS** | WordPress (Headless) via WPGraphQL + ACF Pro | Per ORION WordPress Standards. Provides non-technical content management for blog, case studies, and page content while keeping the frontend decoupled for performance. |
| **Styling** | Tailwind CSS | Per ORION standards. No inline styles. Utility-first for design system consistency. |
| **Language** | TypeScript (strict mode) | Per ORION Coding Standards. |
| **Hosting (Frontend)** | Vercel | Optimized for Next.js. Edge network for global performance. Preview deployments for QA. |
| **Hosting (CMS)** | Managed WordPress hosting (e.g., WP Engine, Flywheel, or Cloudways) | Per ORION WordPress Standards. Bedrock (Composer-managed). |
| **Runtime Validation** | Zod | Per ORION standards — API boundary validation. |

### Integrations

| Integration | Tool/Platform | Purpose | Priority |
|-------------|---------------|---------|----------|
| **CRM** | HubSpot CRM (recommended) | Lead management, QuickScan result storage, pipeline tracking, contact scoring | **Must** |
| **Email Marketing** | HubSpot Email or ActiveCampaign | Nurture sequences, newsletter, QuickScan follow-up automation | **Must** |
| **Scheduling** | Calendly (Pro or Teams) | Strategy call booking embedded on Contact and service pages | **Must** |
| **Analytics** | Google Analytics 4 + Google Tag Manager | Traffic, conversion, and behavior tracking | **Must** |
| **Search Console** | Google Search Console | SEO monitoring, indexing, and search performance | **Must** |
| **Heatmaps/Session Recording** | Microsoft Clarity or Hotjar (free tier) | UX optimization, QuickScan funnel analysis | **Should** |
| **Uptime Monitoring** | UptimeRobot | 5-minute interval monitoring per ORION Performance Standards | **Must** |
| **Form Handling** | Server-side API routes (Next.js) → CRM | Contact form and QuickScan data submission | **Must** |
| **Chat (Future)** | Intercom, Drift, or AI chatbot | Lazy-loaded on interaction. Not in initial scope — structured as future enhancement. | **Won't** (v1) |

> **⚠️ Ambiguity Flag:** CRM and email platform have not been confirmed by the client. HubSpot is recommended based on the consultancy model (contact scoring, pipeline stages, email automation in one platform), but **client clarification required** on existing tool commitments.

### Performance Targets

Per ORION Performance Standards:

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| INP (Interaction to Next Paint) | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 90 |
| Lighthouse SEO | ≥ 95 |
| Total JS Bundle (gzipped) | < 150KB |
| Per-Route JS | < 50KB |
| CSS (gzipped) | < 30KB |
| Time to Interactive | < 3.5s |

### Accessibility Requirements

Per ORION Accessibility Standards — **WCAG 2.1 AA minimum**:

- All images: descriptive `alt` attributes (decorative → `alt=""`)
- Color contrast: ≥ 4.5:1 body text, ≥ 3:1 large text and UI components
- Full keyboard navigation with visible focus indicators (min 2px outline)
- Skip-to-content link on every page
- Semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`)
- Heading hierarchy maintained (h1 → h2 → h3, no skipping)
- ARIA only when native HTML is insufficient
- All form inputs with visible `<label>` elements
- Error messages: identify field + describe how to fix
- `lang` attribute on `<html>`
- Modal/overlay: Escape to close, focus trap, no keyboard traps
- `prefers-reduced-motion` respected for all animations
- axe DevTools: 0 critical/serious issues
- Screen reader: logical content flow
- 200% zoom: no content loss or horizontal scrolling

**QuickScan-specific accessibility:**
- Progress indicator announces current step to screen readers
- Form validation errors are announced via `aria-live` regions
- Results visualization has text alternative

### SEO Requirements

Per ORION SEO Standards:

**On-Page (Every Page):**
- Title tag: `{Primary Keyword} — Blackwell Digital`, 50–60 characters, unique per page
- Meta description: 150–160 characters, includes keyword + CTA, unique per page
- One `<h1>` per page, `<h2>` for sections, `<h3>` for subsections, no skipped levels
- URLs: lowercase, hyphen-separated (e.g., `/services/foundation-sprint`), max 3–4 levels
- Canonical URLs on every page
- Image filenames descriptive (e.g., `ai-maturity-framework-diagram.webp`), alt text with natural keywords

**Structured Data (JSON-LD):**
- `Organization` schema on all pages
- `LocalBusiness` schema (Central Illinois location)
- `BreadcrumbList` schema on all interior pages
- `FAQPage` schema on pages with FAQ sections
- `Service` schema on service pages
- `Article` schema on blog posts
- `HowTo` schema on process/methodology pages (where applicable)

**Technical SEO:**
- XML sitemap at `/sitemap.xml` (generated at build time)
- `robots.txt` configured (block staging environments)
- 301 redirects for all changed URLs from current site
- SSL required (HTTPS everywhere)
- Self-referencing canonical tags

**Content Architecture (Pillar + Cluster Model):**
- Pillar pages: AI Maturity Framework, AI for SMBs, each Service page
- Cluster pages: Blog posts targeting long-tail keywords linked to pillars
- Internal linking: every page links to 2–5 other pages with descriptive anchor text
- Breadcrumbs on all interior pages

**AI-Powered Search Optimization:**
- Concise, direct answers in the first 1–2 sentences of key sections (optimized for AI extraction)
- Q&A formatting with clear questions as `<h2>`/`<h3>` and structured answers
- Schema markup on all FAQ and methodology content
- Clear entity definitions (what Blackwell Digital is, what AI Maturity means)
- Structured data that AI crawlers can parse for knowledge graph inclusion

**Local SEO:**
- Google Business Profile optimization (out-of-scope for build, but schema and NAP consistency are in scope)
- NAP (Name, Address, Phone) consistent across site footer, contact page, and schema
- Google Maps embed on contact page
- Location-specific meta data and content where appropriate

### Hosting & Infrastructure

| Component | Specification |
|-----------|---------------|
| Frontend Hosting | Vercel Pro (or Enterprise) — automatic CI/CD from Git, edge CDN, preview deployments |
| CMS Hosting | Managed WordPress on WP Engine (or equivalent) — Bedrock-managed, PHP 8.2+, staging environment |
| DNS | Cloudflare (recommended) — DNS management, DDoS protection, CDN layering |
| SSL | Auto-provisioned via Vercel + Cloudflare |
| CDN | Vercel Edge Network + Cloudflare |
| Monitoring | UptimeRobot (5-min checks), Vercel Analytics, Lighthouse CI on every PR |
| Staging | Vercel preview deployments (per-branch) + WordPress staging environment |
| Backup | Daily automated backups (CMS), Git-managed frontend |

---

## Project Scope

### In-Scope Deliverables

1. **Brand Identity System** — Logo, color palette, typography selection, design tokens, brand guidelines document
2. **Design System** — Component library in Figma, responsive design specifications, animation/interaction guidelines
3. **UX/UI Design** — Wireframes and high-fidelity mockups for all pages (desktop + mobile)
4. **AI Maturity QuickScan Tool** — Interactive multi-step assessment with scoring logic, personalized results, lead capture, and CRM integration
5. **Website Development** — Next.js frontend (App Router, TypeScript, Tailwind), headless WordPress CMS, all pages and templates
6. **Content Strategy** — Pillar/cluster content architecture, SEO keyword mapping, page-level content briefs
7. **Website Copywriting** — All page copy, meta titles/descriptions, QuickScan questions and results copy, CTA copy
8. **SEO Infrastructure** — Schema markup (JSON-LD), sitemap, robots.txt, canonical tags, heading hierarchy, 301 redirect map
9. **CRM & Email Integration** — CRM setup for lead management, QuickScan → CRM pipeline, email nurture sequence setup (1 sequence for QuickScan completions)
10. **Scheduling Integration** — Calendly embed on Contact and service pages
11. **Analytics Setup** — GA4, GTM, conversion tracking, QuickScan funnel tracking
12. **Accessibility Compliance** — WCAG 2.1 AA audit and remediation
13. **Performance Optimization** — Core Web Vitals compliance, bundle optimization, image optimization
14. **QA & Testing** — Cross-browser testing, responsive testing, accessibility testing, performance testing
15. **Launch & Deployment** — DNS cutover, SSL provisioning, monitoring setup, post-launch smoke testing
16. **Documentation** — CMS content editing guide, style guide, technical architecture documentation

### Out-of-Scope Items

1. **Ongoing content production** — Blog posts, case studies, and thought leadership articles beyond the initial launch set (up to 5 pillar/cluster seed articles are in scope; ongoing content is a retainer service)
2. **Google Business Profile setup/optimization** — NAP consistency and local schema are in scope; GBP creation and management are not
3. **Paid advertising** — No Google Ads, social ads, or paid media campaigns
4. **Social media management** — No social media content, scheduling, or community management
5. **Video production** — No video shooting, editing, or production (client-provided video can be embedded)
6. **AI chatbot / live chat** — Excluded from v1. Structured as a future enhancement.
7. **E-commerce / payment processing** — Not applicable
8. **Mobile app** — Not applicable
9. **CRM migration** — If the client has an existing CRM with data, migration is a separate engagement
10. **Ongoing SEO management** — Keyword monitoring, link building, content optimization — retainer service, not project scope
11. **Legal review of privacy policy / terms** — Templates will be provided; legal review is the client's responsibility
12. **Third-party tool subscriptions** — CRM, email platform, Calendly, hosting, and analytics tool costs are the client's responsibility

### Assumptions

| # | Assumption |
|---|------------|
| A1 | No usable brand assets exist. Brand identity will be created from scratch within this project. |
| A2 | The AI Maturity QuickScan is conceptualized but not built. Design, question framework, scoring logic, and development are all within project scope. |
| A3 | Service tier documentation (deliverables, timelines, outcomes) exists or will be provided by the client within 2 weeks of project kickoff. |
| A4 | The client will provide subject matter experts for content interviews (minimum 4–6 hours of interview time across the project). |
| A5 | Case studies or quantifiable client results will be available for at least 2 engagements by launch. If not, the site will launch with a results/metrics page and case study template ready for population. |
| A6 | The competitor list (Deloitte, Accenture, etc.) represents aspirational positioning references, not direct competitors for the same deals. |
| A7 | Geographic SEO strategy is regional-first (Central Illinois, St. Louis) with national organic as secondary. |
| A8 | The $100K+ budget covers all in-scope deliverables including brand identity, QuickScan tool, content strategy/copywriting, and development. |
| A9 | The client will use HubSpot CRM (or equivalent) — a CRM decision will be finalized within the first 2 weeks. |
| A10 | Content will be authored in English only (no internationalization required). |
| A11 | The current blackwelldigital.com domain will be retained and redirected. |
| A12 | The client has domain registrar access and can update DNS records. |

### Constraints

| # | Constraint |
|---|------------|
| C1 | All development must follow ORION Coding Standards (TypeScript strict, App Router, Server Components default). |
| C2 | CMS must be headless WordPress per ORION WordPress Standards (Bedrock, WPGraphQL, ACF Pro). |
| C3 | WCAG 2.1 AA compliance is non-negotiable — all features must pass accessibility testing. |
| C4 | Core Web Vitals targets must be met before launch (LCP < 2.5s, CLS < 0.1, INP < 200ms). |
| C5 | No third-party render-blocking scripts. All third-party integrations must be async or lazy-loaded. |
| C6 | Design must be mobile-first and functional at 320px minimum viewport. |
| C7 | All fonts loaded via `next/font` — no external CDN font loading. |
| C8 | Maximum 2 font families, 4 weights total. |

---

## Acceptance Criteria

### Project-Level Acceptance Criteria

| # | Criterion | Measurement |
|---|-----------|-------------|
| PA1 | All pages listed in scope are live, functional, and content-complete. | Manual review against page inventory checklist. |
| PA2 | Lighthouse scores meet minimums: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 95. | Lighthouse audit on all primary pages (Home, Services ×4, Framework, QuickScan, About, Contact, Blog listing, Blog post). |
| PA3 | Core Web Vitals pass on all pages: LCP < 2.5s, CLS < 0.1, INP < 200ms. | Measured via PageSpeed Insights and/or Web Vitals extension on production. |
| PA4 | axe DevTools reports 0 critical or serious accessibility issues on all pages. | Automated accessibility scan on all pages. |
| PA5 | Full keyboard navigation works across all pages and interactive components (including QuickScan). | Manual keyboard-only testing. |
| PA6 | Site renders correctly on Chrome, Firefox, Safari, and Edge (latest 2 versions) on desktop and mobile. | Cross-browser testing. |
| PA7 | Site is fully responsive from 320px to 2560px without content loss or horizontal scrolling. | Responsive testing across breakpoints. |
| PA8 | All structured data validates without errors in Google Rich Results Test. | Validation on all pages with schema. |
| PA9 | XML sitemap is generated, accessible at `/sitemap.xml`, and includes all indexable pages. | Manual verification + Google Search Console submission. |
| PA10 | 301 redirects are in place for all changed URLs from the current site. | Redirect map testing. |
| PA11 | CRM receives lead data from both the QuickScan and contact form with correct field mapping. | End-to-end form submission testing. |
| PA12 | Email automation triggers correctly after QuickScan completion. | End-to-end automation testing. |
| PA13 | Calendly scheduling embed works on Contact page and service pages. | Functional testing. |
| PA14 | GA4 and GTM fire correctly on all pages. Conversion events tracked for: QuickScan start, QuickScan completion, form submission, call booking. | GTM debug mode verification. |
| PA15 | CMS allows non-technical users to create/edit blog posts and case studies without developer assistance. | Client UAT with provided documentation. |
| PA16 | Total JS bundle (gzipped) < 150KB. Per-route JS < 50KB. | Bundle analyzer report. |

### QuickScan-Specific Acceptance Criteria

| # | Criterion | Measurement |
|---|-----------|-------------|
| QS1 | Assessment renders 8–15 questions across multiple steps with a visible progress indicator. | Manual review. |
| QS2 | Branching logic correctly adjusts questions based on industry and company size inputs. | Test with at least 3 distinct input combinations. |
| QS3 | Results page displays a maturity score, stage identification, and recommendations mapped to service tiers. | Manual review of all possible result states. |
| QS4 | Lead capture form collects name, email, company, role, and company size. All fields validate correctly. | Form validation testing (valid + invalid inputs). |
| QS5 | Lead data + assessment results are pushed to CRM within 60 seconds of submission. | CRM record verification. |
| QS6 | Assessment is fully keyboard-navigable and screen-reader accessible. | Keyboard + screen reader testing. |
| QS7 | Assessment tracks start, each step transition, and completion in analytics. | GA4 event verification. |
| QS8 | Assessment drop-off point data is available for funnel analysis. | Analytics reporting verification. |
| QS9 | Shareable results (URL or PDF) are generated after completion. | Functional testing of share mechanism. |

### Content Acceptance Criteria

| # | Criterion | Measurement |
|---|-----------|-------------|
| CA1 | Every page has a unique title tag (50–60 characters) and meta description (150–160 characters). | CMS/head tag audit. |
| CA2 | Every page has exactly one `<h1>` with proper heading hierarchy below it. | Automated heading structure audit. |
| CA3 | All images have descriptive alt text. Decorative images have `alt=""`. | axe DevTools + manual review. |
| CA4 | All copy follows the brand voice guidelines: direct, confident, outcomes-focused, no buzzwords. | Editorial review against brand voice document. |
| CA5 | FAQ sections on relevant pages are marked up with FAQPage schema. | Rich Results Test validation. |
| CA6 | Internal linking: every page links to at least 2 other pages with descriptive anchor text. | Manual link audit. |

---

## Items Requiring Client Clarification

| # | Item | Impact | Reference |
|---|------|--------|-----------|
| 🔴 1 | **CRM selection:** Does the client have an existing CRM, or should HubSpot be provisioned as part of this project? | Affects integration architecture, email automation, and QuickScan data flow. Blocks development of lead capture features. | Technical Requirements — Integrations |
| 🔴 2 | **AI Maturity QuickScan questions and scoring logic:** Does the client have a documented question framework and scoring methodology, or does this need to be developed? | Blocks QuickScan design and development. High-complexity feature. | Feature Requirements — QuickScan |
| 🔴 3 | **Service tier documentation:** Are deliverables, timelines, outcomes, and investment ranges documented for each tier? | Blocks service page content development. | Feature Requirements — Services |
| 🟡 4 | **Case studies availability:** Are there 2+ completed engagements with quantifiable results and client permission to feature? | Affects social proof strategy. May require alternative approach at launch. | Feature Requirements — Case Studies |
| 🟡 5 | **Pricing transparency:** Should investment ranges be displayed on the website, or is pricing kept for sales conversations only? | Affects service page content and visitor self-qualification. | User Story U6 |
| 🟡 6 | **Photography:** Is professional photography of the team available, or does it need to be commissioned? | Affects About page, trust signals, and design timeline. | Feature Requirements — About |
| 🟡 7 | **Geographic SEO priority:** Confirm — regional-first (Central IL + STL) with national secondary, or national from day one? | Affects keyword targeting, local schema, and content strategy. | SEO Requirements |
| 🟡 8 | **Content production scope:** Confirm how many initial blog/pillar articles are expected at launch. | Affects content timeline and resource planning. | Scope — In-Scope #1 |
| 🟡 9 | **Newsletter / email opt-in:** Does the client want a regular newsletter, or is the email strategy limited to QuickScan nurture sequences? | Affects email integration scope and content commitments. | User Story U13 |
| 🟡 10 | **Current site analytics:** Does the client have Google Analytics or Search Console data from the existing site? | Affects redirect strategy and baseline metrics. | Discovery Assumption #1 |

---

*Document prepared by ORION Requirements Agent — Blackwell Digital*
*Project: blackwell-digital-website | Phase: Requirements | Status: Complete*
*Generated: 2026-02-21*