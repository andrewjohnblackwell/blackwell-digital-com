---
phase: development
status: draft
project: "blackwell-digital-website"
agent: "development"
generatedBy: orion-development
generatedAt: "2026-02-21"
date: "2026-02-21"
---

# Development Plan — Blackwell Digital Website

**Document Version:** 1.0
**Project:** blackwell-digital-website
**Agent:** ORION Development Planning
**Generated:** 2026-02-21
**Status:** Ready for Implementation

---

## Technical Architecture

### Framework and Platform Decisions

#### Frontend — Next.js 14+ (App Router)

The frontend is built on **Next.js 14+** using the App Router exclusively. This decision is driven by:

- Server Components by default — critical for SEO requirements (Lighthouse SEO ≥95) and initial page load performance (LCP <2.5s)
- Native TypeScript strict mode support
- Vercel deployment with automatic preview environments
- Built-in `next/image`, `next/font`, and `next/link` optimizations required by ORION Coding Standards
- React Server Components eliminate unnecessary client-side hydration across static marketing pages

**TypeScript:** Strict mode. No `any`. Zod for all API boundary validation.

**Rendering Strategy by Route:**

| Route Pattern | Strategy | Rationale |
|---|---|---|
| `/`, `/about`, `/contact`, `/framework`, `/services/*` | SSG (Static Site Generation) | Pure content; revalidate on CMS publish |
| `/insights`, `/insights/[slug]` | ISR (Incremental Static Regen) | Blog content changes frequently; 60s revalidation |
| `/results`, `/results/[slug]` | ISR | Case studies added over time; 60s revalidation |
| `/quickscan` | SSG | Static landing page |
| `/quickscan/assessment` | Client Component tree | Multi-step interactive form |
| `/quickscan/results/[token]` | SSR | Token-based, personalized, noindex |
| `/framework/[stage]` | SSG | Static educational content |
| `/insights/category/[slug]` | ISR | Category views |

---

#### Backend CMS — Headless WordPress (Bedrock + WPGraphQL + ACF Pro)

Per requirements, WordPress runs headless using the Bedrock Composer-managed stack. The frontend communicates exclusively via **WPGraphQL** — no REST API.

**WordPress Stack:**
- **Bedrock** — Composer-managed WordPress, environment variable configuration, `.env` secrets management
- **WPGraphQL** — All content queries
- **WPGraphQL for ACF** — Exposes ACF Pro fields to GraphQL
- **ACF Pro** — All custom content modeling (field groups, CPTs)
- **Yoast SEO + WPGraphQL Yoast** — SEO metadata served to Next.js via GraphQL
- **WP Mail SMTP** — Transactional email reliability

**Content Types in WordPress:**

| CPT | Slug | ACF Fields |
|---|---|---|
| Post (native) | `post` | Category, author, read_time, featured_image, excerpt |
| Case Study | `case_study` | industry, service_tier, challenge_type, headline_result, challenge_body, approach_body, metrics (repeater), client_quote, client_attribution, related_studies |
| Team Member | `team_member` | headshot, title, bio, linkedin_url, order |
| Testimonial | `testimonial` | quote_text, attribution_name, attribution_role, attribution_company, service_tier |

**ACF Options Pages:**
- Site Settings (NAP, social URLs, global CTA text)
- Homepage (hero copy override, metrics strip, featured posts/results selections)
- Services Overview (comparison table data, offer ladder)

---

#### QuickScan Assessment Architecture

The QuickScan is the most complex feature. It operates as a client-side React application within the Next.js shell.

**State Management:** React `useReducer` + `useContext` (no external state library — bundle budget)

**Question/Scoring Logic:** Stored as a TypeScript constant (`QUICKSCAN_QUESTIONS`) with Zod validation at the API boundary. Branching logic is evaluated client-side based on previous answers.

**Data Flow:**

```
User answers → Client state (useReducer)
                    ↓
          Lead capture form submission
                    ↓
          POST /api/quickscan/submit
                    ↓
          Zod validation → Score calculation
                    ↓
          ┌─────────────────────────────────┐
          │  Store results in DB (token)    │
          │  CRM webhook (background)       │
          │  Email trigger (background)     │
          └─────────────────────────────────┘
                    ↓
          Redirect → /quickscan/results/[token]
```

**Persistence:** Results stored server-side with a UUID token. The results page fetches by token via API route (`/api/quickscan/results/[token]`). Tokens do not expire (persistent for email link sharing). Results page is `noindex`.

**Scoring Engine:** TypeScript module (`/lib/quickscan/scoring.ts`) — pure function, fully unit-tested, returns `{ overallStage, operationsScore, marketingScore, digitalScore, recommendations }`.

---

#### API Routes (Next.js Route Handlers)

| Route | Method | Purpose |
|---|---|---|
| `/api/quickscan/submit` | POST | Receive assessment answers + lead data, score, store token, trigger CRM/email |
| `/api/quickscan/results/[token]` | GET | Fetch stored results by token |
| `/api/contact` | POST | Contact form submission → CRM + notification email |
| `/api/newsletter` | POST | Newsletter signup → email platform |
| `/api/revalidate` | POST | WordPress publish webhook → ISR revalidation (secret-protected) |

---

### Key Dependencies and Integrations

#### Production Dependencies

```json
{
  "next": "14.x",
  "react": "18.x",
  "react-dom": "18.x",
  "typescript": "5.x",
  "zod": "3.x",
  "@apollo/client": "3.x",
  "graphql": "16.x",
  "tailwindcss": "3.x",
  "@tailwindcss/typography": "0.5.x",
  "framer-motion": "11.x",
  "lucide-react": "0.x",
  "@radix-ui/react-accordion": "1.x",
  "@radix-ui/react-dialog": "1.x",
  "@radix-ui/react-tabs": "1.x",
  "@radix-ui/react-select": "2.x",
  "@radix-ui/react-progress": "1.x",
  "react-hook-form": "7.x",
  "uuid": "9.x",
  "class-variance-authority": "0.x",
  "clsx": "2.x",
  "tailwind-merge": "2.x"
}
```

**Dependency Rationale:**
- **Apollo Client** — WPGraphQL queries (SSR-compatible, cache on server)
- **Framer Motion** — Scroll reveals, interactive framework diagram, QuickScan transitions (dynamic imported to protect bundle budget; `prefers-reduced-motion` respected)
- **Radix UI primitives** — Accessible accordion (FAQ), dialog (modals), tabs (category filters), select (form), progress (QuickScan bar) — unstyled, Tailwind-composed
- **react-hook-form** — QuickScan lead capture and contact form with Zod resolver
- **CVA + clsx + tailwind-merge** — Component variant management per design system

#### External Integrations

| Service | Purpose | Integration Method |
|---|---|---|
| **Vercel** | Frontend hosting, Edge Network, preview deployments | Git-based CI/CD |
| **Managed WordPress Host** | CMS hosting (WP Engine or Kinsta recommended) | Server-side GraphQL from Next.js |
| **CRM (HubSpot or equivalent)** | QuickScan lead capture, contact form leads | REST API via Next.js API route (server-side, key never exposed to client) |
| **Email Platform (MailerLite or ConvertKit)** | Newsletter signups, QuickScan results email | API route server-side |
| **Calendly** | Strategy call booking | Embed via `PopupWidget` (lazy loaded on interaction) |
| **Google Analytics 4** | Traffic and conversion tracking | `next/script` with `afterInteractive` strategy |
| **Google Tag Manager** | Tag management (async) | `next/script` afterInteractive |
| **UptimeRobot** | Uptime monitoring | External ping — no code |
| **Lighthouse CI** | Per-PR performance testing | GitHub Actions |
| **Vercel KV or PlanetScale** | QuickScan result token storage | Server-side via Vercel SDK or Prisma |

> **Database Decision:** Vercel KV (Redis) is preferred for QuickScan token storage due to simplicity and Vercel-native integration. Tokens store serialized JSON (score + lead data). If relational reporting on assessment data is needed, migrate to PlanetScale (MySQL) with Prisma.

---

### Data Flow Overview

#### Content Delivery Flow (Static Pages)

```
WordPress CMS (ACF + Yoast)
        ↓ WPGraphQL
Next.js Build / ISR Revalidation
        ↓ getStaticProps equivalent (generateStaticParams + fetch)
Static HTML + RSC Payload
        ↓ Vercel Edge Network
        User Browser
```

#### QuickScan Flow

```
/quickscan (SSG landing) → User initiates
        ↓
/quickscan/assessment (Client Component)
  → useReducer manages answers per question
  → Progress bar, back/forward navigation
  → Session storage for resume capability
        ↓
Lead capture gate (react-hook-form + Zod)
        ↓
POST /api/quickscan/submit
  → Zod validates payload
  → scoring.ts computes scores
  → UUID token generated
  → Vercel KV: store { token, scores, leadData, createdAt }
  → CRM API: create/update contact (async, non-blocking)
  → Email API: trigger results email (async)
  → Return { token }
        ↓
Client redirects → /quickscan/results/[token]
        ↓
GET /api/quickscan/results/[token]
  → KV lookup → return results JSON
  → SSR renders personalized page
  → noindex meta
```

#### Contact Form Flow

```
/contact form submission
        ↓
POST /api/contact
  → Zod validates
  → CRM: create contact + deal
  → Email: notification to Blackwell team
  → Return { success }
        ↓
Client renders success state
```

---

### Hosting and Deployment Architecture

#### Frontend — Vercel

- **Production:** `main` branch → auto-deploy → `blackwelldigital.com`
- **Preview:** Every PR → unique preview URL (auto-comment on PR)
- **Staging:** `staging` branch → `staging.blackwelldigital.com` with `X-Robots-Tag: noindex`
- **Environment Variables:** Vercel dashboard — separated by environment (production / preview / development)
- **Edge Network:** Vercel CDN for static assets; ISR cached at edge
- **Vercel KV:** Token storage for QuickScan results
- **Lighthouse CI:** GitHub Actions runs on every PR against preview URL

#### CMS — WordPress (Headless)

- **Host:** WP Engine or Kinsta (managed WordPress)
- **Access:** Admin panel only — no public WordPress frontend
- **WPGraphQL endpoint:** `https://cms.blackwelldigital.com/graphql` (not exposed publicly — Next.js fetches server-side)
- **Security:** XML-RPC disabled, REST user enumeration disabled, login attempts limited, `.env` for all secrets
- **Revalidation:** WordPress publish webhook → `POST /api/revalidate` with shared secret → Next.js ISR revalidation of affected routes

#### CI/CD Pipeline

```
Developer pushes branch
        ↓
GitHub PR opened
        ↓
GitHub Actions:
  1. TypeScript type check (tsc --noEmit)
  2. ESLint (zero warnings policy)
  3. Unit tests (Vitest)
  4. Build check (next build)
        ↓
Vercel creates preview deployment
        ↓
GitHub Actions:
  5. Lighthouse CI against preview URL
  6. axe-core accessibility scan
        ↓
PR review + merge to main
        ↓
Vercel auto-deploys to production
        ↓
Post-deploy: smoke tests (Playwright)
```

---

## Implementation Plan

### Milestone 0: Project Setup (Days 1–2)

**Goal:** Repository, tooling, and environment configuration complete. Team can begin feature development immediately.

| # | Task | Estimate | Notes |
|---|---|---|---|
| 0.1 | Initialize Next.js 14 App Router project with TypeScript strict mode | 1h | `create-next-app` with TypeScript template |
| 0.2 | Configure Tailwind CSS with design token config (`tailwind.config.ts`) | 2h | Full color palette, typography scale, spacing, border radius per UI spec |
| 0.3 | Install and configure all dependencies (Radix UI, CVA, Framer Motion, Zod, Apollo, react-hook-form) | 1h | |
| 0.4 | Set up `next/font` — Plus Jakarta Sans + Inter + JetBrains Mono | 1h | Self-hosted, font-display: swap, max 4 weights each |
| 0.5 | Configure ESLint (Next.js recommended + custom rules), Prettier | 1h | Zero-warning policy enforced |
| 0.6 | Set up Vitest for unit testing; configure test utilities | 1h | |
| 0.7 | Set up Playwright for E2E and smoke testing | 1h | |
| 0.8 | Configure GitHub Actions: typecheck, lint, test, build, Lighthouse CI, axe scan | 2h | |
| 0.9 | Create Vercel project; configure production + staging environments and env vars | 1h | |
| 0.10 | Establish file/folder structure per ORION conventions | 1h | |
| 0.11 | Create global CSS variables from design tokens; verify contrast ratios programmatically | 1h | |

**Milestone 0 Total:** ~13 hours

---

### Milestone 1: WordPress CMS Setup (Days 2–4)

**Goal:** Headless WordPress fully configured. All content types modeled. WPGraphQL returning correct data.

| # | Task | Estimate | Notes |
|---|---|---|---|
| 1.1 | Install Bedrock on managed host; configure `.env` | 2h | |
| 1.2 | Install required plugins via Composer: WPGraphQL, WPGraphQL for ACF, ACF Pro, Yoast + WPGraphQL Yoast, WP Mail SMTP | 1h | |
| 1.3 | Register `case_study` CPT in `mu-plugins` with `show_in_graphql: true` | 1h | |
| 1.4 | Register `team_member` CPT in `mu-plugins` with `show_in_graphql: true` | 30m | |
| 1.5 | Register `testimonial` CPT in `mu-plugins` with `show_in_graphql: true` | 30m | |
| 1.6 | Create ACF field groups: Case Study fields (per content matrix spec) | 2h | |
| 1.7 | Create ACF field groups: Team Member fields | 1h | |
| 1.8 | Create ACF field groups: Testimonial fields | 30m | |
| 1.9 | Create ACF Options Pages: Site Settings, Homepage, Services Overview | 1h | |
| 1.10 | Disable XML-RPC, disable REST user enumeration, configure login attempt limits | 30m | |
| 1.11 | Write and validate GraphQL fragment library for all content types | 3h | Fragments reused across queries |
| 1.12 | Configure Apollo Client for server-side use in Next.js (`/lib/apollo-client.ts`) | 1h | |
| 1.13 | Test all GraphQL queries return expected data | 1h | |
| 1.14 | Configure revalidation webhook in WordPress (publish action → Next.js endpoint) | 1h | |

**Milestone 1 Total:** ~16 hours

---

### Milestone 2: Design System and Core Components (Days 3–7)

**Goal:** Every primitive and layout component built, tested, and documented. No page build begins without a complete component library.

| # | Task | Estimate | Notes |
|---|---|---|---|
| 2.1 | `Button` component — all variants (Primary, Secondary, Accent, Ghost), all sizes, all states | 3h | CVA variants, focus ring, WCAG AA contrast |
| 2.2 | `Input` component — with label, error, helper text; accessible | 2h | `<label>` always visible |
| 2.3 | `Textarea` component | 1h | |
| 2.4 | `Select` component (Radix UI) — accessible, styled | 2h | |
| 2.5 | `Card` component — default + elevated variants | 1h | |
| 2.6 | `Badge` component — category labels, industry labels | 1h | |
| 2.7 | `Skeleton` loading state components | 1h | For ISR loading states |
| 2.8 | `Separator` component | 30m | |
| 2.9 | `Avatar` component — for team member photos | 1h | `next/image` with square crop |
| 2.10 | `ProgressBar` component — Radix UI base; QuickScan usage | 1h | ARIA: `role="progressbar"`, `aria-valuenow`, `aria-valuemax` |
| 2.11 | `Accordion` component (Radix UI) — for FAQ sections | 2h | Keyboard navigable, animated |
| 2.12 | `Tabs` component (Radix UI) — for category filters | 2h | |
| 2.13 | `Dialog` / Modal component (Radix UI) — focus trap, Escape closes | 2h | Per ORION accessibility standards |
| 2.14 | `Header` component — sticky, with nav + CTA; logo left, centered nav, right CTA | 4h | Transparent on hero, solid on scroll |
| 2.15 | `MobileNav` component — hamburger drawer; persistent QuickScan CTA at bottom | 3h | Focus management per IA spec |
| 2.16 | `Footer` component — 4 columns + legal row | 3h | Nav consistency, social links with aria-labels |
| 2.17 | `Breadcrumbs` component — with JSON-LD structured data | 2h | `<nav aria-label="Breadcrumb">` |
| 2.18 | `SkipLink` component — first focusable element on every page | 30m | "Skip to main content" |
| 2.19 | `PageContainer` layout wrapper — max-width, safe padding, responsive | 1h | |
| 2.20 | `SectionContainer` — section vertical rhythm, responsive spacing | 30m | |
| 2.21 | `MetricCard` — stat display with large number, label | 1h | JetBrains Mono for number |
| 2.22 | `ServiceCard` — service tier card with headline, body, detail, CTA | 2h | Homepage and services overview |
| 2.23 | `InsightCard` — blog post card with badge, title, excerpt, read time, CTA | 2h | |
| 2.24 | `CaseStudyCard` — with industry badge, service tier, headline, key metric, CTA | 2h | |
| 2.25 | `CategoryFilter` — tab-based filter for insights and results hubs | 2h | Accessible tab interface |
| 2.26 | `NewsletterSignup` — inline signup block; duplicate email handling | 2h | |
| 2.27 | `InlineQuickScanCTA` — mid-content QuickScan callout block | 1h | Used in blog posts and framework |
| 2.28 | `MaturityGauge` — visual score display (SVG or CSS, animated) | 3h | QuickScan results; ARIA labeled |
| 2.29 | `DimensionScoreBar` — operations/marketing/digital score bars | 2h | Animated on scroll reveal |
| 2.30 | `CookieConsent` banner — GDPR/CCPA compliant | 3h | Persisted preference, keyboard accessible |
| 2.31 | Scroll reveal animation wrapper — respects `prefers-reduced-motion` | 1h | Framer Motion, dynamic import |
| 2.32 | Unit tests for all primitive components (Button, Input, Select, etc.) | 4h | Vitest + Testing Library |

**Milestone 2 Total:** ~57 hours

---

### Milestone 3: Global Layout and SEO Infrastructure (Days 5–7)

**Goal:** Root layout, metadata system, structured data, and sitemap operational.

| # | Task | Estimate | Notes |
|---|---|---|---|
| 3.1 | Root `layout.tsx` — `<html lang="en">`, font variables, global styles, SkipLink, CookieConsent | 2h | |
| 3.2 | `Metadata` utility — generates title, description, OG, Twitter card per page | 2h | Yoast data from WPGraphQL for CMS pages |
| 3.3 | JSON-LD structured data components: `OrganizationSchema`, `LocalBusinessSchema`, `BreadcrumbSchema`, `FAQSchema` | 3h | Injected via `<Script type="application/ld+json">` |
| 3.4 | `sitemap.ts` (App Router) — auto-generated, includes all static + dynamic routes | 2h | Excludes `/quickscan/results/*`, staging noindex |
| 3.5 | `robots.ts` — environment-aware (block staging, allow production) | 1h | |
| 3.6 | Canonical URL injection — every page | 1h | |
| 3.7 | `next/script` setup — GTM (afterInteractive), GA4 (afterInteractive), Calendly (lazy on interaction) | 2h | No render-blocking scripts |
| 3.8 | `opengraph-image.tsx` — dynamic OG images via Next.js ImageResponse | 3h | |
| 3.9 | 404 page (`not-found.tsx`) — with navigation options per content matrix | 2h | |
| 3.10 | Error boundary (`error.tsx`) — friendly error state | 1h | |
| 3.11 | Loading states (`loading.tsx`) — skeleton screens for ISR routes | 1h | |

**Milestone 3 Total:** ~20 hours

---

### Milestone 4: QuickScan Feature (Days 8–14)

**Goal:** End-to-end QuickScan flow functional — landing → assessment → results — with CRM integration, email trigger, and full accessibility.

| # | Task | Estimate | Notes |
|---|---|---|---|
| 4.1 | Define `QUICKSCAN_QUESTIONS` TypeScript constant with Zod schema for all question types | 3h | Branching logic, answer options, scoring weights |
| 4.2 | `scoring.ts` — pure scoring function: answers → { overallStage, operationsScore, marketingScore, digitalScore, stageLabel, recommendations } | 4h | Fully unit tested |
| 4.3 | `QuickScanProvider` — `useReducer` context for assessment state | 2h | |
| 4.4 | `QuestionScreen` component — renders single question with options | 3h | One question per screen, animated transition |
| 4.5 | `AssessmentProgress` — progress bar ("Step X of N — XX% complete") | 1h | Accessible ARIA labels per content matrix |
| 4.6 | `AnswerOption` component — radio-style option with keyboard support | 2h | Full keyboard navigation, focus visible |
| 4.7 | `BackButton` / navigation — preserves answers, back button active from Q2 | 1h | |
| 4.8 | Session storage persistence — resume if browser refreshes | 2h | Client-side only |
| 4.9 | Branching logic engine — evaluates question visibility based on prior answers | 3h | Pure function, unit tested |
| 4.10 | `LeadCaptureGate` component — react-hook-form + Zod, all fields per content matrix | 4h | Name, Work Email, Company, Role (select), Company Size (select) |
| 4.11 | `POST /api/quickscan/submit` route handler — validate, score, store KV, trigger CRM + email async | 4h | Zod validation; CRM/email failures don't block user |
| 4.12 | Vercel KV integration — token storage, retrieval, error handling | 2h | |
| 4.13 | CRM integration (HubSpot or equivalent) — server-side contact creation | 3h | API key never exposed to client |
| 4.14 | Email trigger integration — results email with personalized content | 2h | |
| 4.15 | `GET /api/quickscan/results/[token]` route handler — KV lookup, 404 on invalid token | 1h | |
| 4.16 | `/quickscan` landing page — all blocks per content matrix | 3h | SSG; all trust signals, how-it-works steps, who-it's-for |
| 4.17 | `/quickscan/assessment` page — orchestrates QuickScan provider + screens | 2h | Client Component tree; `noindex` during assessment |
| 4.18 | `/quickscan/results/[token]` page — SSR; `MaturityGauge`, `DimensionScoreBar`, recommendations, related insights, share/PDF CTAs | 5h | noindex; invalid token → friendly error + retake option |
| 4.19 | QuickScan analytics events — question answered, lead captured, results viewed, CTA clicked | 2h | GA4 custom events |
| 4.20 | Unit tests: scoring.ts, branching logic, LeadCaptureGate validation | 3h | |
| 4.21 | E2E test: Full QuickScan flow (Playwright) | 3h | |
| 4.22 | Accessibility audit: QuickScan flow keyboard-only + screen reader | 2h | axe-core scan per step |

**Milestone 4 Total:** ~57 hours

---

### Milestone 5: Core Marketing Pages (Days 12–18)

**Goal:** Homepage, About, Contact, and all static marketing pages built and content-complete.

#### 5A: Homepage (`/`)

| # | Task | Estimate | Notes |
|---|---|---|---|
| 5A.1 | Hero block — H1, subheadline, dual CTA, background treatment | 3h | Preloaded hero image or CSS gradient fallback |
| 5A.2 | Positioning statement block | 1h | |
| 5A.3 | Social proof / metrics strip — 4 KPI stats | 2h | Animated count-up on scroll reveal |
| 5A.4 | Service overview cards — 3 tier cards | 2h | |
| 5A.5 | AI Maturity Framework teaser block | 1h | |
| 5A.6 | QuickScan feature callout block | 2h | |
| 5A.7 | Featured results — 3 case study cards (fallback copy if no case studies) | 2h | |
| 5A.8 | Featured insights — 3 blog cards (WPGraphQL query, ISR) | 2h | |
| 5A.9 | Final CTA block — dual CTA | 1h | |
| 5A.10 | Homepage JSON-LD — Organization schema | 1h | |
| 5A.11 | Homepage metadata — title, description, OG | 30m | |

**5A Total:** ~17.5 hours

#### 5B: About Page (`/about`)

| # | Task | Estimate | Notes |
|---|---|---|---|
| 5B.1 | Hero block | 1h | |
| 5B.2 | Company story block | 1h | |
| 5B.3 | Positioning / philosophy — 4 callout cards | 2h | |
| 5B.4 | Team section — dynamic from `team_member` CPT via WPGraphQL | 3h | `Avatar` + bio + LinkedIn with aria-label |
| 5B.5 | Values — 5 value cards | 2h | |
| 5B.6 | Trust signals block (conditional — hide if no data) | 1h | |
| 5B.7 | CTA block | 30m | |
| 5B.8 | Metadata + Organization JSON-LD | 30m | |

**5B Total:** ~11 hours

#### 5C: Contact Page (`/contact`)

| # | Task | Estimate | Notes |
|---|---|---|---|
| 5C.1 | Hero block | 1h | |
| 5C.2 | Strategy call booking — Calendly embed (lazy loaded on interaction) with text link fallback | 3h | |
| 5C.3 | Contact form — react-hook-form + Zod, all fields per content matrix | 3h | Inline validation, success/error states |
| 5C.4 | `POST /api/contact` route handler | 2h | Zod, CRM + email notification |
| 5C.5 | NAP block — structured address | 1h | |
| 5C.6 | Google Maps embed — lazy loaded | 1h | |
| 5C.7 | Alternative paths block | 1h | |
| 5C.8 | Social links — LinkedIn, X with aria-labels | 30m | |
| 5C.9 | LocalBusiness JSON-LD schema | 1h | |
| 5C.10 | Metadata | 30m | |

**5C Total:** ~14 hours

**Milestone 5 Total:** ~42.5 hours

---

### Milestone 6: Services Pages (Days 16–22)

**Goal:** All four service pages (overview + 3 tiers) built, with comparison table, engagement process, and FAQ sections.

| # | Task | Estimate | Notes |
|---|---|---|---|
| 6.1 | Services overview (`/services`) — hero, offer ladder visual, 3 tier cards, comparison table, engagement process, CTA | 5h | Comparison table responsive (horizontal scroll on mobile) |
| 6.2 | Foundation Sprint (`/services/foundation-sprint`) — all 10 blocks per content matrix | 4h | FAQ uses `Accordion` component with `FAQSchema` JSON-LD |
| 6.3 | AI Growth System (`/services/ai-growth-system`) — all 10 blocks per content matrix | 4h | |
| 6.4 | AI-First Operating System (`/services/ai-first-operating-system`) — all 10 blocks per content matrix | 4h | |
| 6.5 | Service page `ServiceNav` dropdown — populated from route structure | 1h | |
| 6.6 | Timeline component — visual week-by-week / month-by-month breakdown | 3h | Used across all 3 tier pages |
| 6.7 | `DeliverablesList` component — styled deliverable bullets | 1h | |
| 6.8 | `KPICallout` component — metric + description cards | 1h | |
| 6.9 | `IdealClientProfile` — two-column yes/no format | 1h | |
| 6.10 | Metadata for all 4 pages | 1h | |
| 6.11 | FAQSchema JSON-LD for each service page | 2h | |
| 6.12 | Breadcrumbs on all service pages | 30m | |

**Milestone 6 Total:** ~27.5 hours

---

### Milestone 7: Framework Pillar Page (Days 20–24)

**Goal:** AI Maturity Framework pillar page and 4 stage sub-pages built. Interactive stage diagram functional.

| # | Task | Estimate | Notes |
|---|---|---|---|
| 7.1 | `/framework` pillar page — hero,