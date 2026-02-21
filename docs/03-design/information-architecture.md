---
phase: design
status: draft
project: "blackwell-digital-website"
agent: "design-ia"
generatedBy: orion-design-ia
generatedAt: "2026-02-21"
date: "2026-02-21"
---

# Information Architecture Document
## Project: Blackwell Digital Website
## Agent: ORION Information Architecture
## Generated: 2026-02-21

---

## Sitemap

```
blackwelldigital.com/
│
├── 🏠 Home (/)
│
├── 🔍 AI Maturity QuickScan (/quickscan)
│   ├── Assessment (/quickscan/assessment)
│   └── Results (/quickscan/results/[token])
│
├── 🧠 AI Maturity Framework (/framework)
│   ├── Stage 1: Manual (/framework/manual)
│   ├── Stage 2: Assisted (/framework/assisted)
│   ├── Stage 3: Automated (/framework/automated)
│   └── Stage 4: Autonomous (/framework/autonomous)
│
├── 🛠 Services (/services)
│   ├── Foundation Sprint (/services/foundation-sprint)
│   ├── AI Growth System (/services/ai-growth-system)
│   └── AI-First Operating System (/services/ai-first-operating-system)
│
├── 📊 Results (/results)
│   ├── Case Study: [Client Slug] (/results/[case-study-slug])
│   └── [Additional case studies as available]
│
├── 💡 Insights (/insights)
│   ├── Category: AI Maturity (/insights/category/ai-maturity)
│   ├── Category: Operations (/insights/category/operations)
│   ├── Category: Marketing (/insights/category/marketing)
│   ├── Category: Digital Transformation (/insights/category/digital-transformation)
│   └── Post: [Article Slug] (/insights/[article-slug])
│
├── 🏢 About (/about)
│
├── 📞 Contact (/contact)
│
└── ⚖️ Legal
    ├── Privacy Policy (/privacy-policy)
    ├── Terms of Service (/terms-of-service)
    └── Accessibility Statement (/accessibility-statement)
```

**Supporting System Pages**
```
├── /sitemap.xml          (auto-generated at build)
├── /robots.txt           (environment-aware)
└── /404                  (custom error page)
```

---

## Navigation Structure

### Primary Navigation (Header — All Pages)

Sticky header. Logo left, nav center, CTA right. Collapses to hamburger at `md` breakpoint (768px).

| Label | Destination | Notes |
|---|---|---|
| Services | `/services` | Dropdown reveals three service tiers on hover/focus |
| Framework | `/framework` | Single link — pillar page |
| QuickScan | `/quickscan` | Highlighted treatment (badge or accent color) to signal interactivity |
| Results | `/results` | Case studies and metrics proof |
| Insights | `/insights` | Blog/thought leadership hub |
| About | `/about` | Single link |

**Primary CTA Button (always visible in header):**
- Label: "Take the QuickScan"
- Destination: `/quickscan`
- Style: Filled accent button — highest visual weight in header
- Secondary fallback: "Book a Call" (links to `/contact`) — text link, appears beside CTA on desktop

**Services Dropdown (desktop hover / mobile expand):**
```
Services (/services)
├── Foundation Sprint        → /services/foundation-sprint
├── AI Growth System         → /services/ai-growth-system
└── AI-First Operating System → /services/ai-first-operating-system
```

**Mobile Navigation (Hamburger Drawer):**
- Full-screen overlay drawer, opens right-to-left
- Stacked links in order: Services (expandable), Framework, QuickScan, Results, Insights, About, Contact
- Persistent "Take the QuickScan" CTA button at bottom of drawer
- Escape key closes drawer; focus returns to hamburger button

---

### Secondary Navigation (In-Page / Contextual)

Used within section hubs to assist exploration without cluttering global nav.

**Services Hub (`/services`):**
- Anchor links to each tier within the overview page
- Cards linking to individual service detail pages

**Framework Hub (`/framework`):**
- Stage navigation bar (Manual → Assisted → Automated → Autonomous)
- Each stage links to its sub-page or jumps to the anchor on the pillar page (if implemented as a single long-form page with anchor navigation)

**Insights Hub (`/insights`):**
- Category filter tabs: All / AI Maturity / Operations / Marketing / Digital Transformation
- Tag-based filtering available within category views

**Results Hub (`/results`):**
- Filter by: Industry / Service Tier / Challenge Type (when sufficient case studies exist)

**Breadcrumbs (All Interior Pages):**

Present on every page below depth 1. Positioned below the header, above the page hero. Implements `BreadcrumbList` JSON-LD schema.

```
Examples:
Home → Services → Foundation Sprint
Home → Framework → Stage 1: Manual
Home → Insights → AI Maturity → [Article Title]
Home → Results → [Case Study Title]
```

---

### Footer Navigation

Organized in columns. Full-width across desktop; stacked on mobile.

**Column 1 — Brand**
- Logo (links to `/`)
- Positioning tagline (1 line)
- Newsletter signup (email input + submit)

**Column 2 — Services**
- Services Overview → `/services`
- Foundation Sprint → `/services/foundation-sprint`
- AI Growth System → `/services/ai-growth-system`
- AI-First Operating System → `/services/ai-first-operating-system`

**Column 3 — Company**
- About → `/about`
- AI Maturity Framework → `/framework`
- Results → `/results`
- Insights → `/insights`
- Contact → `/contact`

**Column 4 — Get Started**
- Take the QuickScan → `/quickscan` (CTA button style)
- Book a Strategy Call → `/contact` (text link)
- NAP Block: Name, Address, Phone (consistent with schema)

**Footer Bottom Bar:**
- Copyright notice
- Privacy Policy → `/privacy-policy`
- Terms of Service → `/terms-of-service`
- Accessibility Statement → `/accessibility-statement`
- Social icons (LinkedIn, X/Twitter — icon-only with `aria-label`)

---

### Utility Navigation

| Element | Behavior | Pages |
|---|---|---|
| Skip-to-Content Link | First focusable element on every page. Visually hidden until focused. Links to `#main-content`. | All pages |
| Cookie Consent Banner | Fixed bottom banner on first visit. Granular opt-in/opt-out (analytics, marketing). Persists preference to localStorage. | All pages (first visit) |
| Sticky Bottom CTA (Mobile) | Fixed bottom bar on mobile: "Take the QuickScan →". Appears after user scrolls past the hero CTA. Hidden on QuickScan and Contact pages. | All pages (mobile, scroll-triggered) |
| Floating CTA (Desktop) | After 60% page scroll depth on long-form pages (Framework, Service detail, Blog posts): subtle slide-in bar at bottom. | Framework, Services detail, Blog posts |

---

## Content Hierarchy

### Home (`/`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | Full-viewport. H1 positioning headline (≤12 words). One-sentence subheadline. Primary CTA: "Take the QuickScan" + secondary CTA: "Book a Strategy Call". Abstract data-visualization graphic (no stock AI imagery). |
| 2 | Positioning Statement | Text block | 2–3 sentences. Answers "Who is this for?" and "What's the measurable outcome?" Explicit SMB framing ($1M–$25M, 5–150 employees). |
| 3 | Social Proof Bar | Logo bar + metrics strip | Client logos (with permission) OR aggregated result metrics (e.g., "47% average reduction in manual processing time across client engagements"). Horizontal scroll on mobile. |
| 4 | Service Overview | Cards (×3) | One card per service tier. Each card: tier name, one-sentence outcome statement, timeframe, arrow-link to detail page. Visual progression indicator (Foundation → Growth → Operating System). |
| 5 | AI Maturity Framework Teaser | Visual + CTA | Simplified maturity stage diagram (Manual → Assisted → Automated → Autonomous). 2–3 sentence explanation of why maturity matters. CTA: "Discover Your Maturity Stage" → `/quickscan`. |
| 6 | QuickScan Feature Callout | Feature / interactive preview | Prominent section. Explains what the QuickScan is, what you get, and why it's free. Takes ≈5 minutes. Shows a mock result visualization. CTA: "Take the Free Assessment" → `/quickscan`. |
| 7 | Featured Results | Cards (×2–3) | Top case study snippets or results metrics. Company type, challenge, headline result. Link to `/results`. Fallback: aggregated stat callouts if case studies are unavailable at launch. |
| 8 | Featured Insights | Cards (×2–3) | Latest or curated blog posts. Card: category badge, title, 1-sentence excerpt, read-time, link. |
| 9 | Final CTA | CTA section | Strong closing section. Headline addresses primary objection (time/risk). Two buttons: "Take the QuickScan" + "Book a Strategy Call". Supporting copy: "No obligation. Results in under 10 minutes." |

---

### AI Maturity QuickScan — Landing (`/quickscan`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | H1: What the QuickScan is and what you'll get. Subheadline: time commitment + no-obligation framing. Single CTA: "Start the Assessment". Trust signals inline (e.g., "Taken by 200+ business leaders"). |
| 2 | What You'll Discover | Feature list | Three to four benefit bullets. What the results reveal. How results map to action. |
| 3 | How It Works | Steps (×3) | Step 1: Answer 8–12 questions. Step 2: Receive your maturity score. Step 3: Get your personalized roadmap. Icons + brief copy per step. |
| 4 | Sample Results Preview | Visual mockup | Blurred/anonymous screenshot or illustrated result card showing the kind of output users receive. Reduces anxiety about the unknown. |
| 5 | Who It's For | Text + icon list | Explicit audience: business owners, COOs, CMOs at $1M–$25M companies. 4–5 bullets describing qualifying situations ("You're growing but operational chaos is eating your margins"). |
| 6 | CTA | CTA section | "Start Your Free QuickScan" — full-width button. Supporting: "Your results are private. We'll send a copy to your email." |

---

### AI Maturity QuickScan — Assessment (`/quickscan/assessment`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Progress Indicator | Progress bar | Step X of N. Percentage complete. Announced via `aria-live` for screen readers. |
| 2 | Question Block | Form (multi-step) | One question per screen (or logical grouped questions). Clear H2 question text. Answer options (radio, select, or multi-select). "Back" and "Continue" navigation. |
| 3 | Lead Capture Gate | Form | Appears at completion of questions before results: Name, Email, Company, Role, Company Size. Required fields clearly marked. Privacy reassurance copy. |

---

### AI Maturity QuickScan — Results (`/quickscan/results/[token]`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Score Visualization | Data visualization | Maturity stage prominently displayed. Visual gauge or stage progress bar. Stage label (e.g., "Assisted — Stage 2 of 4"). |
| 2 | Stage Summary | Text block | What this stage means for a business like theirs. 2–3 paragraphs. Specific, direct, not generic. |
| 3 | Personalized Recommendations | Cards (×2–3) | Mapped to service tier(s). Each card: recommendation headline, brief rationale, and link to the relevant service page. |
| 4 | Next Steps CTA | CTA section | Primary: "Book Your Strategy Call" (Calendly embed or link). Secondary: "Share These Results" (copy link or download PDF). |
| 5 | Dimension Breakdown | Scored list | Operations / Marketing / Digital sub-scores. Brief interpretation per dimension. |
| 6 | Related Insights | Cards (×2–3) | Blog posts related to user's maturity stage and identified gaps. |

---

### Services Overview (`/services`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | H1 + subheadline framing the offer ladder as a progression, not just a menu. |
| 2 | Offer Ladder Visual | Visual / diagram | Three-tier progression diagram. Visual hierarchy: Foundation → Growth → Operating System. Each tier: name, one-line outcome, duration, audience. |
| 3 | Service Tier Cards | Cards (×3) | Expanded version of homepage cards. Deliverables summary, timeline, ideal client fit, CTA to detail page. |
| 4 | Comparison Table | Table | Side-by-side: deliverables, duration, outcomes, investment range (if approved). |
| 5 | Engagement Process | Steps / timeline | Discovery → Assessment → Implementation → Optimization. Visual step flow. |
| 6 | CTA | CTA section | "Not sure which tier fits? Take the QuickScan." + "Ready to talk? Book a Strategy Call." |

---

### Foundation Sprint (`/services/foundation-sprint`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | H1 with service name + outcome promise. Audience signal. Time/investment snapshot. |
| 2 | Problem Statement | Text block | The specific operational or growth pain this tier addresses. Written in the client's language — not consulting-speak. |
| 3 | Deliverables | Structured list | Itemized deliverables with brief explanations. Concrete and specific. |
| 4 | KPIs & Outcomes | Metrics callouts | 3–5 measurable outcomes. Large numbers where applicable (e.g., "Clients reduce diagnostic time by an average of X weeks"). |
| 5 | Timeline | Visual timeline | Week-by-week or phase-based engagement flow. |
| 6 | Ideal Client Profile | Text + checklist | Who this is for and who it is NOT for. Self-qualifying criteria. |
| 7 | Investment | Text block | Range (if approved) or "Investment discussed on strategy call" with framing that respects the buyer's time. |
| 8 | Related Case Study | Card | Embedded case study card with challenge, approach, headline result. Link to full case study. |
| 9 | FAQ | Accordion | 4–6 service-specific questions with FAQPage schema. |
| 10 | CTA | CTA section | "Book Your Strategy Call" (Calendly embed). Secondary: "Take the QuickScan First" for earlier-stage visitors. |

*Note: The AI Growth System (`/services/ai-growth-system`) and AI-First Operating System (`/services/ai-first-operating-system`) follow identical content hierarchy. Copy, KPIs, deliverables, and case studies differ per tier.*

---

### AI Maturity Framework (`/framework`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | H1: "The AI Maturity Framework." Subheadline: what it is and why it matters for SMBs. |
| 2 | Framework Overview | Text block | Long-form authoritative introduction. What AI maturity means, why it's the right diagnostic lens for SMBs, how Blackwell developed the framework. |
| 3 | Maturity Stage Diagram | Visual / interactive | Four-stage visual (Manual → Assisted → Automated → Autonomous). Desktop: click/hover reveals detail per stage. Mobile: tap-to-expand accordion. Each stage: characteristics, business symptoms, recommended actions. |
| 4 | Stage Deep Dives | Sections (×4) | One section per stage with H2 heading. Characteristics, common challenges, what good looks like, next steps. Links to sub-pages if needed. |
| 5 | QuickScan CTA (Embedded) | CTA | Mid-content CTA after Stage 2 description: "Where does your business fall? Find out in 10 minutes." → `/quickscan`. |
| 6 | How We Use the Framework | Text + steps | Explains how Blackwell applies the framework in client engagements. Bridges intellectual content to services. |
| 7 | FAQ | Accordion | 6–10 questions targeting common SMB AI transformation questions. FAQPage schema. Structured for AI search extraction. |
| 8 | Related Insights | Cards (×3) | Cluster blog posts linked to this pillar page. |
| 9 | Final CTA | CTA section | "Take the QuickScan" primary + "Book a Strategy Call" secondary. |

---

### Results (`/results`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | H1 + subheadline focused on measurable client outcomes. |
| 2 | Aggregated Metrics | Stats block | 3–5 headline results (averaged across engagements). Large, visually prominent numbers. Credible, defensible claims only. |
| 3 | Filter Controls | Filter bar | Filter by: Industry / Service Tier / Challenge Type. Accessible (keyboard-operable, ARIA labels on filter controls). |
| 4 | Case Study Grid | Cards (filterable) | Each card: company type (not necessarily named), industry, challenge headline, service tier used, headline result metric, link to full case study. |
| 5 | No-Case-Study Fallback | Text + CTA | If fewer than 2 case studies at launch: "We're capturing client results for publication. In the meantime, here's what to expect from an engagement." + link to Book a Call. |
| 6 | CTA | CTA section | "Ready to add your name to these results?" → Book a Call. |

---

### Individual Case Study (`/results/[case-study-slug]`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | H1: Client type + challenge headline (e.g., "How a 40-Person Distribution Company Cut Order Processing Time by 52%"). |
| 2 | Challenge | Text block | The specific operational or growth problem. Told from the client's perspective. |
| 3 | Approach | Steps / text | How Blackwell engaged: which framework stages, which service tier, methodology applied. |
| 4 | Results | Metrics callouts | Headline KPIs in large, visually prominent callout blocks. Supporting narrative below. |
| 5 | Client Quote | Testimonial | Pull quote with attribution (role, not necessarily name — per client approval). |
| 6 | Related Case Studies | Cards (×2) | Similar industry or service tier. |
| 7 | CTA | CTA section | "Explore a similar engagement for your business." → Book a Call + QuickScan. |

---

### Insights Hub (`/insights`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | H1: Hub headline. Subheadline positioning the content as practical, not academic. |
| 2 | Category Filter | Filter tabs | All / AI Maturity / Operations / Marketing / Digital Transformation. |
| 3 | Featured Post | Feature card | Large card: latest or editorially selected post. Image, category, title, excerpt, read time, CTA. |
| 4 | Article Grid | Cards (paginated) | 9–12 per page. Each: category badge, title, excerpt, read time, date, link. |
| 5 | Newsletter Signup | CTA / form | Inline CTA between rows: "Get AI transformation insights delivered monthly." Email capture. |
| 6 | Pagination | Navigation | Previous / Next + page numbers. Keyboard accessible. |

---

### Individual Blog Post (`/insights/[article-slug]`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Breadcrumb | Navigation | Home → Insights → [Category] → [Post Title] |
| 2 | Article Hero | Text hero | H1, category badge, author, date, estimated read time. |
| 3 | Article Body | Rich text | Heading hierarchy (H2/H3). Pull quotes. Inline images with alt text. Internal links. |
| 4 | Inline CTA (Mid-Article) | CTA | Appears after approximately 50% of content: contextual, related to article topic. E.g., "Wondering where your business falls on the maturity curve?" → QuickScan. |
| 5 | Author Block | Author card | Author name, role, 2-sentence bio, avatar (400×400). |
| 6 | Related Posts | Cards (×3) | Curated or tag-matched articles. |
| 7 | Newsletter Signup | Form | "Enjoyed this? Get more like it." Email capture. |
| 8 | Article Footer CTA | CTA | "Ready to put this into practice?" → Book a Strategy Call. |

---

### About (`/about`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | H1: company mission/purpose statement. No generic "About Us" headline. |
| 2 | Company Story | Text block | Origin story. The market gap Blackwell fills. Why this matters now. Honest, direct, and human. |
| 3 | Positioning / Philosophy | Text + callouts | Core principles: measurable outcomes, practitioner-led, no hype, SMB-accessible. |
| 4 | Team Section | Team cards | Founder/principal: professional photo (400×400), name, title, bio (3–4 sentences), LinkedIn link. Additional team members as applicable. |
| 5 | Values | Cards or list | 3–5 values with brief explanation each. Tied to how they show up in client engagements — not abstract platitudes. |
| 6 | Trust Signals | Logo bar / badges | Certifications, partnerships, media mentions, speaking engagements (if available). |
| 7 | CTA | CTA section | "Want to work with a team like this?" → Book a Strategy Call. |

---

### Contact (`/contact`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | H1: Direct, low-friction headline (e.g., "Let's Talk About What's Possible"). Subheadline with response time commitment. |
| 2 | Strategy Call Booking | Embed | Calendly embed, full-width on mobile, constrained on desktop. H2: "Book a Strategy Call." Brief copy: what the call covers, who should attend, how long (typically 30–45 minutes). |
| 3 | Contact Form | Form | Fallback option. Fields: Name (required), Email (required), Company (required), Phone (optional), Inquiry Type (select: General / Services / QuickScan Follow-up / Partnership), Message (required). Response time statement inline. |
| 4 | Location & NAP | Text + map | Office address (NAP-consistent with schema and footer). Google Maps embed. |
| 5 | Alternative Paths | Links | "Not ready for a call? Take the QuickScan" → `/quickscan`. Social links. |

---

### Privacy Policy (`/privacy-policy`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Text hero | H1: "Privacy Policy." Last updated date. |
| 2 | Policy Body | Rich text | Sections covering: data collection, QuickScan data handling, analytics, cookies, marketing communications, third-party services, data retention, user rights, contact for privacy requests. |

---

### Terms of Service (`/terms-of-service`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Text hero | H1: "Terms of Service." Last updated date. |
| 2 | Terms Body | Rich text | Standard terms with sections for: use of site, IP, disclaimers, limitation of liability, governing law, changes to terms. |

---

### Accessibility Statement (`/accessibility-statement`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Text hero | H1: "Accessibility Statement." |
| 2 | Statement Body | Rich text | Commitment to WCAG 2.1 AA. Known limitations (if any). Contact method for accommodation requests. Date of last audit. |

---

### 404 Page (`/404`)

| Priority | Block | Content Type | Description |
|---|---|---|---|
| 1 | Hero | Hero | H1: Human, non-technical message. (e.g., "This page doesn't exist — but a better path might.") |
| 2 | Navigation Options | Card grid | "Find what you're looking for:" — Services, Framework, QuickScan, Insights, Contact. |
| 3 | CTA | CTA section | "Or, take the AI Maturity QuickScan while you're here." → `/quickscan`. |

---

## URL Structure

### URL Design Principles

- Lowercase, hyphen-separated words only
- No trailing slashes (enforced via Next.js config)
- Maximum 3 directory levels for navigable pages
- Primary keyword present in every URL
- Canonical tags on all pages

### Full URL Map

| Page | URL | Notes |
|---|---|---|
| Home | `/` | |
| **QuickScan** | | |
| QuickScan Landing | `/quickscan` | Primary conversion URL |
| QuickScan Assessment | `/quickscan/assessment` | |
| QuickScan Results | `/quickscan/results/[token]` | Token = unique session hash (UUID). Not indexed — `noindex` canonical. |
| **Framework** | | |
| Framework Pillar | `/framework` | Primary pillar page |
| Stage: Manual | `/framework/manual` | |
| Stage: Assisted | `/framework/assisted` | |
| Stage: Automated | `/framework/automated` | |
| Stage: Autonomous | `/framework/autonomous` | |
| **Services** | | |
| Services Overview | `/services` | |
| Foundation Sprint | `/services/foundation-sprint` | |
| AI Growth System | `/services/ai-growth-system` | |
| AI-First Operating System | `/services/ai-first-operating-system` | |
| **Results** | | |
| Results Hub | `/results` | |
| Individual Case Study | `/results/[case-study-slug]` | Slug: descriptive, e.g., `/results/distribution-order-processing-52-percent` |
| **Insights** | | |
| Insights Hub | `/insights` | |
| Category View | `/insights/category/[category-slug]` | e.g., `/insights/category/ai-maturity` |
| Individual Post | `/insights/[article-slug]` | e.g., `/insights/what-is-ai-maturity` |
| **Company** | | |
| About | `/about` | |
| Contact | `/contact` | |
| **Legal** | | |
| Privacy Policy | `/privacy-policy` | |
| Terms of Service | `/terms-of-service` | |
| Accessibility Statement | `/accessibility-statement` | |
| **System** | | |
| XML Sitemap | `/sitemap.xml` | Auto-generated at build |
| Robots | `/robots.txt` | Environment-aware |
| 404 | `/404` | Next.js custom error page |

### URL Taxonomy: Insights Categories

| Category Label | URL Slug |
|---|---|
| AI Maturity | `/insights/category/ai-maturity` |
| Operations | `/insights/category/operations` |
| Marketing | `/insights/category/marketing` |
| Digital Transformation | `/insights/category/digital-transformation` |

### Redirect Mapping (From Current Site)

All existing URLs from `blackwelldigital.com` must be mapped to their new equivalents with 301 redirects. A redirect audit of the current site is required before launch. Redirect map to be maintained in `/redirects.json` and consumed by `next.config.ts`.

Pattern:
```
{ source: '/old-page-path', destination: '/new-page-path', permanent: true }
```

Staging environments: blocked in `robots.txt` with `Disallow: /`.

---

## Navigation Depth Reference

| Depth | Page Examples | Navigation Path |
|---|---|---|
| 0 | Home | Direct |
| 1 | Services, Framework, QuickScan, Results, Insights, About, Contact | Primary nav |
| 2 | Foundation Sprint, AI Growth System, AI-First OS, Framework stages, Insights categories, Case studies | Services dropdown, in-hub navigation |
| 2 | QuickScan Assessment, QuickScan Results | Funnel flow (not navigation) |
| System | Privacy, Terms, Accessibility, 404 | Footer only |

Maximum navigable depth: **2 levels** from global navigation. QuickScan funnel operates as a linear flow, not a navigation tree.

---

*Document prepared by ORION Information Architecture Agent — Blackwell Digital*
*Project: blackwell-digital-website | Phase: Design — IA | Status: Complete*
*Generated: 2026-02-21*