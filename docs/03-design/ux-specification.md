---
phase: design
status: draft
project: "blackwell-digital-website"
agent: "design-ux"
generatedBy: orion-design-ux
generatedAt: "2026-02-21"
date: "2026-02-21"
---



---
phase: design
status: draft
project: "blackwell-digital-website"
agent: "design-ux"
generatedBy: orion-design-ux
generatedAt: "2026-02-21"
date: "2026-02-21"
---

# UX Specification Document
## Project: Blackwell Digital Website
## Agent: ORION UX Specification
## Generated: 2026-02-21

---

## User Flows

### Flow 1: QuickScan Discovery & Completion (Primary Conversion)

**Maps to:** U1, U2, U3, U4, U5, U7, U8, U10, U14

**Entry Points:**
- Homepage hero CTA ("Take the QuickScan")
- Homepage AI Maturity Framework Teaser CTA
- Homepage QuickScan Feature Callout CTA
- Header persistent CTA button
- Framework page embedded CTA
- Service page secondary CTA
- Blog post inline CTA
- Mobile sticky bottom CTA
- Desktop floating CTA
- Direct URL `/quickscan`
- 404 page CTA

**Steps:**

```
1. [Any Page] → Click "Take the QuickScan" CTA
2. /quickscan (Landing Page) → Read value proposition, how it works, who it's for
3. /quickscan → Click "Start the Assessment"
4. /quickscan/assessment (Step 1) → Answer industry/company size qualifier questions
5. /quickscan/assessment (Step 2–N) → Answer 8–12 maturity questions with progress indicator
   ↳ Branching logic adjusts questions based on Step 1 answers
   ↳ User can click "Back" to revisit previous steps
6. /quickscan/assessment (Lead Capture Gate) → Enter Name, Email, Company, Role, Company Size
7. /quickscan/assessment → Click "See My Results"
8. /quickscan/results/[token] (Results Page) → View maturity score, stage, dimension breakdown, recommendations
9. /quickscan/results/[token] → Choose next action:
   a. Click "Book Your Strategy Call" → /contact (Calendly embed) [SUCCESS: Booked Call]
   b. Click "Share These Results" → Copy permalink or download PDF [SUCCESS: Shared Results]
   c. Click recommended service link → /services/[tier] → Continue to Service Flow
   d. Click related insight → /insights/[slug] → Continue to Content Flow
```

**Success States:**
- **Primary:** User completes assessment, views results, books a strategy call
- **Secondary:** User completes assessment, views results, shares results internally
- **Tertiary:** User completes assessment, views results, navigates to a service page

**Error/Fallback States:**

| Scenario | Handling |
|---|---|
| User abandons mid-assessment | Progress state preserved in sessionStorage. If user returns within session, resume from last completed step. Analytics tracks drop-off step. |
| Form validation failure on lead capture | Inline field-level errors displayed immediately below the invalid field. Error messages identify the field and describe how to fix (e.g., "Please enter a valid email address"). Errors announced via `aria-live="polite"` region. Submit button remains disabled until all required fields validate. |
| Network error on submission | Display inline error: "Something went wrong. Your answers are saved — please try again." Retry button. Do not lose form state. |
| CRM integration failure | Submit succeeds for user (results display normally). Failed CRM push queued for retry server-side. Alert sent to ops team. |
| Invalid/expired results token | `/quickscan/results/[invalid-token]` → Friendly message: "We couldn't find these results. They may have expired." CTA: "Take a new QuickScan" + "Contact us if you need help." |
| JavaScript disabled | QuickScan requires JS. Display `<noscript>` message: "This assessment requires JavaScript. Please enable it or contact us directly." Link to `/contact`. |

---

### Flow 2: Service Exploration & Call Booking

**Maps to:** U1, U3, U4, U6, U7, U9, U11

**Entry Points:**
- Homepage service overview cards
- Header "Services" nav dropdown
- QuickScan results recommended service links
- Blog post contextual CTAs
- Footer services column links
- Internal content links throughout site

**Steps:**

```
1. [Any Page] → Click "Services" in nav or service card
2. /services (Overview) → Review offer ladder visual, three tier cards, comparison table
   a. User identifies tier of interest → Click tier card or "Learn More"
   b. User unsure of tier → Scroll to comparison table or CTA "Take the QuickScan"
3. /services/[tier] (Service Detail) → Read problem statement, deliverables, KPIs, timeline, ideal client
4. /services/[tier] → Review investment range (if displayed) for self-qualification
5. /services/[tier] → Choose next action:
   a. Click "Book Your Strategy Call" → Scrolls to embedded Calendly on same page OR navigates to /contact [SUCCESS: Booked Call]
   b. Click "Take the QuickScan First" → /quickscan [SECONDARY: QuickScan entry]
   c. Click related case study → /results/[slug] → Continue to Case Study Flow
   d. Click FAQ accordion → Expand answer (stays on page)
```

**Success States:**
- **Primary:** User reads service detail, books a strategy call
- **Secondary:** User reads service detail, enters QuickScan for self-diagnosis
- **Tertiary:** User reads service detail, explores case study for social proof

**Error/Fallback States:**

| Scenario | Handling |
|---|---|
| Calendly embed fails to load | Display fallback text: "Having trouble loading the scheduler? Email us at [email] or call [phone]." Include direct Calendly link as text. |
| Service page content incomplete (CMS empty fields) | Design system renders gracefully — empty sections are hidden, not broken. CMS preview shows warnings for missing required fields. |
| User cannot self-qualify (pricing hidden) | FAQ addresses "How much does this cost?" with framing copy. CTA invites a no-obligation strategy call. QuickScan recommended as low-commitment alternative. |

---

### Flow 3: Thought Leadership & Nurture

**Maps to:** U10, U11, U12, U13, U15

**Entry Points:**
- Homepage featured insights cards
- Header "Insights" nav link
- Related posts at bottom of blog articles
- QuickScan results related insights cards
- Framework page related insights
- Search engine organic landing
- Newsletter email click-through
- Social media link

**Steps:**

```
1. [Any Page] → Click "Insights" in nav or article card
2. /insights (Hub) → Browse featured post, filter by category, scan article grid
3. /insights → Click article card
4. /insights/[slug] (Article) → Read article. Encounter:
   a. Mid-article inline CTA (≈50% scroll) → "Take the QuickScan" → /quickscan
   b. Related posts at bottom → Click another article → /insights/[slug]
   c. Newsletter signup → Enter email → [SUCCESS: Subscribed]
   d. Article footer CTA → "Book a Strategy Call" → /contact
5. /insights → Subscribe to newsletter (inline form between article rows)
```

**Success States:**
- **Primary:** User reads article, clicks QuickScan CTA or books a call
- **Secondary:** User reads article, subscribes to newsletter
- **Tertiary:** User reads multiple articles (session depth ≥ 3 pages)

**Error/Fallback States:**

| Scenario | Handling |
|---|---|
| No articles in selected category | Display: "We're working on content for this topic. Subscribe to get notified." Show newsletter signup. Show articles from other categories below. |
| Newsletter signup with invalid email | Inline validation: "Please enter a valid email address." Field retains input. |
| Newsletter signup with duplicate email | Display: "You're already subscribed! Check your inbox for the latest." No error styling — treat as success. |
| Article page with broken images | `next/image` fallback placeholder (branded gradient). Alt text still describes intended image content. |

---

### Flow 4: Framework Education

**Maps to:** U10, U15

**Entry Points:**
- Homepage AI Maturity Framework Teaser
- Header "Framework" nav link
- Blog posts linking to pillar page
- Service pages referencing framework methodology
- QuickScan results linking to stage detail
- Search engine organic landing

**Steps:**

```
1. [Any Page] → Click "Framework" in nav or framework link
2. /framework (Pillar Page) → Read framework overview, scroll through maturity stages
3. /framework → Interact with stage diagram:
   a. Desktop: Hover/click stage → Detail panel reveals
   b. Mobile: Tap stage → Accordion expands
4. /framework → Read deep-dive sections for each stage
5. /framework → Encounter mid-content QuickScan CTA (after Stage 2 section)
   a. Click "Find Out Your Stage" → /quickscan [SUCCESS: QuickScan Entry]
6. /framework → Continue to FAQ section → Expand accordions for specific questions
7. /framework → Final CTA:
   a. "Take the QuickScan" → /quickscan
   b. "Book a Strategy Call" → /contact
8. /framework/[stage-slug] (Optional Sub-page) → Deep-dive into specific stage
   a. Click CTA → /quickscan or /contact
```

**Success States:**
- **Primary:** User reads framework, enters QuickScan
- **Secondary:** User reads framework, books a strategy call
- **Tertiary:** User reads framework, navigates to related insights or services

**Error/Fallback States:**

| Scenario | Handling |
|---|---|
| Interactive diagram fails (JS error) | Static fallback image of the four stages displays. All stage content remains accessible as text sections below. |
| User lands on stage sub-page without context | Breadcrumb provides navigation back to main framework page. Brief intro paragraph contextualizes the stage within the full model. |

---

### Flow 5: Social Proof & Case Study Review

**Maps to:** U5, U9

**Entry Points:**
- Homepage featured results cards
- Homepage social proof bar
- Service page related case study
- Header "Results" nav link
- QuickScan results page (contextual)

**Steps:**

```
1. [Any Page] → Click "Results" in nav or case study link
2. /results (Hub) → View aggregated metrics, browse case study grid
3. /results → Apply filters (Industry, Service Tier, Challenge Type)
4. /results → Click case study card
5. /results/[slug] (Case Study) → Read Challenge → Approach → Results → Client Quote
6. /results/[slug] → Choose next action:
   a. Click "Book a Strategy Call" → /contact [SUCCESS]
   b. Click related case study → /results/[other-slug]
   c. Click "Take the QuickScan" → /quickscan
```

**Success States:**
- **Primary:** User reads case study, books strategy call
- **Secondary:** User reads multiple case studies (building confidence)

**Error/Fallback States:**

| Scenario | Handling |
|---|---|
| Fewer than 2 case studies at launch | Results page displays aggregated metrics section prominently. Below: "We're documenting results from current engagements. In the meantime, here's what our clients typically experience." CTA: "Book a Call to Discuss Your Situation." Case study grid hidden until ≥ 2 entries exist. |
| All filters return empty results | Display: "No results match those filters." Show "Clear filters" button. Show aggregated metrics section as persistent context. |
| Case study page with missing client quote | Quote section gracefully hidden. Page structure remains intact with Challenge → Approach → Results flow. |

---

### Flow 6: Direct Contact / Call Booking

**Maps to:** U4

**Entry Points:**
- Any "Book a Strategy Call" CTA across the site
- Header secondary text link "Book a Call"
- Footer "Book a Strategy Call" link
- QuickScan results primary CTA
- Service page bottom CTA
- Case study page CTA

**Steps:**

```
1. [Any Page] → Click "Book a Strategy Call" or "Contact"
2. /contact → View page with two primary options:
   a. Calendly embed (preferred path) → Select date/time → Fill Calendly form → [SUCCESS: Call Booked]
   b. Contact form (fallback) → Fill fields → Submit → [SUCCESS: Form Submitted]
3. /contact → Alternatively:
   a. View map/location for local visitors
   b. Click "Take the QuickScan" for visitors not ready for a call → /quickscan
```

**Success States:**
- **Primary:** User books a strategy call via Calendly
- **Secondary:** User submits contact form

**Error/Fallback States:**

| Scenario | Handling |
|---|---|
| Calendly embed fails | Prominent fallback: direct link to Calendly page opens in new tab. Plus full contact form below. Phone number displayed. |
| Contact form validation errors | Inline errors below each invalid field. Errors appear on blur (not just submit). Error summary announced via `aria-live` at top of form on submit attempt. |
| Contact form submission network error | Preserve all field values. Display: "We couldn't send your message. Please try again, or email us directly at [email]." Retry button. |
| Contact form submission success | Replace form with confirmation: "Thank you, [Name]. We'll respond within one business day." Show next steps: "While you wait, take the QuickScan" or "Read our latest insight." Analytics fires conversion event. |

---

### Flow 7: First-Time Visitor Orientation (Homepage Journey)

**Maps to:** U1, U2, U3, U4, U5, U14

**Entry Points:**
- Direct URL `/`
- Brand search
- Referral link

**Steps:**

```
1. / (Homepage) → Land in hero
   ↳ Within 5–10 seconds: understand what Blackwell does, who it's for
2. Hero → Choose:
   a. Primary CTA "Take the QuickScan" → /quickscan [FAST PATH]
   b. Secondary CTA "Book a Strategy Call" → /contact [DIRECT PATH]
   c. Scroll to learn more [EXPLORATION PATH]
3. Scroll → Positioning statement confirms relevance ("$1M–$25M businesses")
4. Scroll → Social proof bar builds credibility (logos, metrics)
5. Scroll → Service cards show offer structure → Click tier for detail
6. Scroll → AI Maturity Framework teaser explains the diagnostic model → CTA to QuickScan
7. Scroll → QuickScan feature callout explains what you get → CTA to QuickScan
8. Scroll → Featured results prove it works → Click for case studies
9. Scroll → Featured insights demonstrate expertise → Click to read
10. Scroll → Final CTA section → "Take the QuickScan" or "Book a Strategy Call"
```

**Success States:**
- **Primary:** Visitor enters QuickScan from homepage
- **Secondary:** Visitor books a strategy call from homepage
- **Tertiary:** Visitor navigates to services or framework (deepens engagement)

**Error/Fallback States:**

| Scenario | Handling |
|---|---|
| Hero image/graphic fails to load | CSS background gradient fallback maintains visual appeal. Text content remains fully legible and CTAs functional. |
| Social proof section has no logos (launch) | Section renders aggregated metrics only. Logo bar hidden until ≥ 3 logos are available. |
| Featured results section has no case studies | Section renders aggregated stat callouts with supporting copy. "Case studies coming soon" language avoided — instead, focus on the numbers. |

---

### Flow 8: Returning Visitor / Newsletter Subscriber

**Maps to:** U12, U13

**Entry Points:**
- Newsletter email click-through to `/insights/[slug]`
- Direct URL (bookmarked pages)
- QuickScan results permalink revisit

**Steps:**

```
1. Email → Click article link
2. /insights/[slug] → Read article
3. Article inline CTA or footer CTA → /quickscan or /contact
   ↳ If already completed QuickScan, "Book a Strategy Call" is more relevant
4. OR: Return to /quickscan/results/[token] → Review previous results
5. → Click "Book Your Strategy Call" → /contact [SUCCESS]
```

**Success States:**
- **Primary:** Returning visitor books a strategy call
- **Secondary:** Returning visitor takes QuickScan (if not done previously)

**Error/Fallback States:**

| Scenario | Handling |
|---|---|
| Results token expired (>90 days) | Friendly message with option to retake. "Your results may have changed — take an updated QuickScan." |
| Newsletter unsubscribe | One-click unsubscribe per CAN-SPAM. Confirmation page: "You've been unsubscribed. You can always resubscribe on our Insights page." |

---

## Wireframe Briefs

### Homepage (`/`)

**Viewport:** Desktop 1280px / Mobile 375px

---

#### Above the Fold (Hero Section)

**Desktop Layout:**
```
┌──────────────────────────────────────────────────────────┐
│ [Sticky Header]                                          │
│ Logo (left) | Nav Links (center) | CTA Button (right)    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  [Left 55%]                    [Right 45%]               │
│                                                          │
│  H1: Positioning Headline      Abstract data             │
│  (≤12 words, 4xl–6xl)         visualization graphic      │
│                                (SVG/canvas, animated     │
│  Subheadline (1 sentence,      subtly, non-stock)        │
│  muted foreground, base–lg)                              │
│                                                          │
│  [Primary CTA Button]                                    │
│  "Take the QuickScan"                                    │
│  (accent-500, large, filled)                             │
│                                                          │
│  [Secondary CTA Text Link]                               │
│  "Book a Strategy Call →"                                │
│  (muted, underline on hover)                             │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Mobile Layout:**
```
┌─────────────────────────┐
│ [Sticky Header]         │
│ Logo | Hamburger        │
├─────────────────────────┤
│                         │
│ Abstract graphic        │
│ (reduced, 40vh max)     │
│                         │
│ H1: Headline            │
│ (2xl–4xl)               │
│                         │
│ Subheadline             │
│                         │
│ [Primary CTA - Full W]  │
│ "Take the QuickScan"    │
│                         │
│ [Secondary CTA]         │
│ "Book a Strategy Call →" │
│                         │
└─────────────────────────┘
```

**Key Interactions:**
- Hero graphic: subtle CSS/SVG animation (respects `prefers-reduced-motion`)
- Primary CTA: hover state with slight scale (1.02) and shadow increase
- Secondary CTA: underline animation on hover

---

#### Positioning Statement Block

**Desktop Layout:**
```
┌──────────────────────────────────────────────────────────┐
│  [Centered, max-width 800px]                             │
│                                                          │
│  "We help growth-stage businesses ($1M–$25M)             │
│   turn AI from a buzzword into a measurable              │
│   operating advantage."                                  │
│                                                          │
│  Brief supporting sentence about structured              │
│  methodology and defined outcomes.                       │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

- Typography: lg–xl, foreground-muted, centered
- No CTA — this is orientation text
- Section padding: 48px mobile, 80px desktop

---

#### Social Proof Bar

**Desktop Layout:**
```
┌──────────────────────────────────────────────────────────┐
│  [Full width, muted background]                          │
│                                                          │
│  [Logo] [Logo] [Logo] [Logo] [Logo]                      │
│  ─── OR ───                                              │
│  [Metric]    [Metric]    [Metric]                        │
│  "47%↓       "3.2x       "$2.4M                         │
│  manual       pipeline    revenue                        │
│  processing"  velocity"   unlocked"                      │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Mobile Layout:**
- Logo bar: horizontal scroll with fade edges
- Metrics: stacked vertically (1 per row) or 2-column grid

**Key Interactions:**
- Logos: grayscale by default, full color on hover (desktop)
- Metrics: count-up animation on scroll into view (respects `prefers-reduced-motion`)

---

#### Service Overview Cards

**Desktop Layout:**
```
┌──────────────────────────────────────────────────────────┐
│  H2: "A Structured Path to AI Maturity"                  │
│                                                          │
│  [Visual Progression Arrow: 1 → 2 → 3]                  │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │Foundation │  │AI Growth │  │AI-First  │              │
│  │Sprint     │  │System    │  │Operating │              │
│  │           │  │          │  │System    │              │
│  │ Outcome   │  │ Outcome  │  │ Outcome  │              │
│  │ sentence  │  │ sentence │  │ sentence │              │
│  │           │  │          │  │          │              │
│  │ "4–6 wks" │  │ "3–6 mo" │  │ "6–12mo" │              │
│  │           │  │          │  │          │              │
│  │ [Learn →] │  │ [Learn →]│  │ [Learn →]│              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Mobile Layout:**
- Cards stack vertically, full-width
- Progression arrow becomes vertical connector line between cards

**Key Interactions:**
- Cards: entire card is clickable (link wraps card)
- Hover: slight elevation increase (shadow), border-color change to primary
- Focus: 2px outline visible on tab navigation

---

#### AI Maturity Framework Teaser

**Desktop Layout:**
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [Left 50%]                     [Right 50%]              │
│                                                          │
│  H2: "Where Does Your           Simplified 4-stage       │
│  Business Fall on               maturity diagram          │
│  the AI Maturity                (Manual → Assisted →     │
│  Curve?"                        Automated → Autonomous)  │
│                                                          │
│  2–3 sentences about            Each stage: icon +       │
│  why maturity matters.          label. Highlighted       │
│                                 "sweet spot" area.       │
│  [CTA Button]                                            │
│  "Discover Your Stage"                                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Mobile Layout:**
- Diagram above text (reduced size)
- Text and CTA below, full-width

**Key Interactions:**
- Diagram stages: hover reveals brief tooltip (desktop); static labels on mobile
- CTA links to `/quickscan`

---

#### QuickScan Feature Callout

**Desktop Layout:**
```
┌──────────────────────────────────────────────────────────┐
│  [Accent background or bordered section]                 │
│                                                          │
│  [Right-aligned: Mock result card visual]                │
│                                                          │
│  [Left-aligned content:]                                 │
│  Badge: "Free Assessment"                                │
│  H2: "Get Your AI Maturity Score in Under 10 Minutes"    │
│                                                          │
│  • Personalized maturity stage diagnosis                 │
│  • Operations, marketing & digital sub-scores            │
│  • Tailored recommendations mapped to your business      │
│                                                          │
│  [CTA Button: "Take the Free Assessment"]                │
│                                                          │
│  Fine print: "No credit card. No obligation.             │
│  Results delivered instantly."                            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Mobile Layout:**
- Mock result card above content
- Full-width stacked layout

**Key Interactions:**
- Mock result card: subtle parallax or float animation on scroll (reduced-motion: static)
- CTA: same accent button style as hero primary

---

#### Featured Results

**Desktop Layout:**
```
┌──────────────────────────────────────────────────────────┐
│  H2: "Measurable Outcomes, Not Promises"                 │
│                                                          │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────┐ │
│  │ Industry badge  │  │ Industry badge  │  │ (Optional) │ │
│  │ Challenge       │  │ Challenge       │  │ 3rd card   │ │
│  │ headline        │  │ headline        │  │            │ │
│  │                 │  │                 │  │            │ │
│  │ "52% reduction  │  │ "3.2x pipeline  │  │            │ │
│  │  in processing" │  │  growth"        │  │            │ │
│  │                 │  │                 │  │            │ │
│  │ [Read More →]   │  │ [Read More →]   │  │            │ │
│  └────────────────┘  └────────────────┘  └────────────┘ │
│                                                          │
│  [View All Results →]                                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Mobile Layout:**
- Cards stack vertically, full-width
- If < 2 case studies: show aggregated stat callouts instead (3 large numbers in a row)

---

#### Featured Insights

**Desktop Layout:**
```
┌──────────────────────────────────────────────────────────┐
│  H2: "Latest Insights"                                   │
│                                                          │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────┐ │
│  │ Category badge  │  │ Category badge  │  │ Category   │ │
│  │ H3: Title       │  │ H3: Title       │  │ H3: Title  │ │
│  │ 1-line excerpt  │  │ 1-line excerpt  │  │ 1-line     │ │
│  │ "5 min read"    │  │ "8 min read"    │  │ "3 min"    │ │
│  └────────────────┘  └────────────────┘  └────────────┘ │
│                                                          │
│  [View All Insights →]                                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Mobile Layout:**
- Horizontal scroll carousel with snap points, or vertical stack

---

#### Final CTA Section

**Desktop Layout:**
```
┌──────────────────────────────────────────────────────────┐
│  [Full-width, dark background (primary-900)]             │
│                                                          │
│  [Centered, max-width 720px]                             │
│                                                          │
│  H2: "Stop Guessing. Start Measuring."                   │
│                                                          │
│  "Get a clear picture of your AI readiness in under      │
│  10 minutes — no obligation, no sales pitch."            │
│                                                          │
│  [Primary CTA]     [Secondary CTA]                       │
│  "Take the         "Book a Strategy                      │
│  QuickScan"         Call"                                │
│  (accent filled)    (outlined/ghost)                     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Mobile Layout:**
- CTAs stack vertically, full-width
- Primary CTA above secondary

---

### QuickScan Landing (`/quickscan`)

**Above the Fold:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → AI Maturity QuickScan                 │
│                                                          │
│ [Centered layout, max-width 800px]                       │
│                                                          │
│ Badge: "Free • 10 Minutes • No Obligation"               │
│                                                          │
│ H1: "Discover Where Your Business Stands                 │
│      on the AI Maturity Curve"                           │
│                                                          │
│ Subheadline: "Answer a few questions about your          │
│ operations, marketing, and digital systems.              │
│ Get your personalized maturity score instantly."          │
│                                                          │
│ [Primary CTA Button - Large]                             │
│ "Start the Assessment"                                   │
│                                                          │
│ Trust signal: "Taken by 200+ business leaders"           │
│ (or "Join hundreds of business leaders" at launch)       │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Below the Fold (scrolling order):**

1. **What You'll Discover** — 3–4 icon + text benefit blocks (grid: 2×2 desktop, stacked mobile)
2. **How It Works** — 3-step horizontal process (icons + short copy): Answer → Score → Roadmap
3. **Sample Results Preview** — Blurred/illustrated screenshot of result card in a bordered frame
4. **Who It's For** — Checklist-style qualifying statements with check icons
5. **Final CTA** — Full-width button "Start Your Free QuickScan" with privacy reassurance

**Key Interactions:**
- "Start the Assessment" CTA scrolls to anchor or navigates to `/quickscan/assessment`
- Page serves as a pre-sell — removing friction/anxiety before committing to the tool

---

### QuickScan Assessment (`/quickscan/assessment`)

**Layout (all viewports):**

```
┌──────────────────────────────────────────────────────────┐
│ [Minimal Header: Logo only, no nav — reduce distractions]│
├──────────────────────────────────────────────────────────┤
│                                                          │
│  [Progress Bar]                                          │
│  Step 3 of 10 ■■■□□□□□□□ 30%                            │
│  (aria-live announces: "Step 3 of 10, 30% complete")     │
│                                                          │
│  [Centered, max-width 640px]                             │
│                                                          │
│  H2: "How would you describe your current                │
│       approach to [topic]?"                              │
│                                                          │
│  ○ Option A — descriptive label                          │
│  ○ Option B — descriptive label                          │
│  ○ Option C — descriptive label                          │
│  ○ Option D — descriptive label                          │
│                                                          │
│  [← Back]              [Continue →]                      │
│  (text link)           (filled button, disabled          │
│                         until selection made)            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Lead Capture Gate (final step before results):**

```
┌──────────────────────────────────────────────────────────┐
│  [Progress Bar: 100% — "Almost there!"]                  │
│                                                          │
│  [Centered, max-width 480px]                             │
│                                                          │
│  H2: "Where should we send your results?"                │
│                                                          │
│  [Name]*         ____________________                    │
│  [Email]*        ____________________                    │
│  [Company]*      ____________________                    │
│  [Role]*         [Select dropdown ▾]                     │
│  [Company Size]* [Select dropdown ▾]                     │
│                                                          │
│  □ Send me AI transformation insights (optional)         │
│                                                          │
│  "Your results are private. We'll email you a copy."     │
│                                                          │
│  [See My Results →]                                      │
│  (filled accent button)                                  │
│                                                          │
│  Fine print: "By submitting, you agree to our            │
│  Privacy Policy." (linked)                               │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Key Interactions:**
- One question per screen — no overwhelming form walls
- Radio/select options: large clickable areas (min 44×44px touch targets)
- "Continue" button disabled until an answer is selected
- "Back" button always available (does not lose previous answers)
- Keyboard: Tab through options, Enter/Space to select, Tab to Continue
- Progress bar animates between steps (150ms ease)
- Minimal header: logo only, no full navigation (prevent exit during flow)
- If user navigates away and returns within session: resume from last step

---

### QuickScan Results (`/quickscan/results/[token]`)

**Above the Fold:**

```
┌──────────────────────────────────────────────────────────┐
│ [Full Header returns]                                    │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → QuickScan → Your Results              │
│                                                          │
│  [Centered, max-width 960px]                             │
│                                                          │
│  Badge: "Your AI Maturity Results"                       │
│                                                          │
│  ┌──────────────────────────────────────────────┐        │
│  │  [Score Visualization]                        │        │
│  │                                               │        │
│  │  ┌────┐   ┌────┐   ┌████┐   ┌────┐          │        │
│  │  │ 1  │───│ 2  │───│ 3  │───│ 4  │          │        │
│  │  │Man │   │Asst│   │Auto│   │Autn│          │        │
│  │  └────┘   └────┘   └████┘   └────┘          │        │
│  │                                               │        │
│  │  "Your Stage: Automated (Stage 3 of 4)"      │        │
│  │  Overall Score: 72/100                        │        │
│  │                                               │        │
│  └──────────────────────────────────────────────┘        │
│                                                          │
│  [Text alternative for screen readers:                   │
│   "Your AI maturity score is 72 out of 100,              │
│    placing you at Stage 3: Automated, the third          │
│    of four stages."]                                     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Below the Fold (scrolling order):**

1. **Stage Summary** — 2–3 paragraphs explaining what Stage [X] means for their business
2. **Dimension Breakdown** — Three scored bars (Operations / Marketing / Digital) with brief interpretation per dimension
3. **Personalized Recommendations** — 2–3 cards mapped to service tiers, each with recommendation headline, brief rationale, and link to service page
4. **Next Steps CTA** — Primary: "Book Your Strategy Call" (Calendly link). Secondary: "Share These Results" (copy link + download PDF buttons)
5. **Related Insights** — 2–3 blog cards relevant to user's maturity stage
6. **Footer CTA** — "Questions about your results? Let's talk." → `/contact`

**Key Interactions:**
- Score visualization: animated fill on page load (respects reduced-motion)
- Dimension bars: animated width on scroll into view
- "Share These Results" → copy permalink to clipboard (toast notification: "Link copied!")
- "Download PDF" → generates PDF server-side, triggers download
- Service recommendation cards: clickable, link to `/services/[tier]`

---

### Services Overview (`/services`)

**Above the Fold:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → Services                              │
│                                                          │
│ H1: "Three Tiers. Clear Outcomes.                        │
│      The Right Fit for Your Stage."                      │
│                                                          │
│ Subheadline: "Every business is at a different point     │
│ on the AI maturity curve. Our structured engagements     │
│ meet you where you are."                                 │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Content Blocks (scrolling order):**

1. **Offer Ladder Visual** — Horizontal 3-step progression diagram with connecting arrows
2. **Service Tier Cards (×3)** — Each card: tier name, H3, outcome statement, key deliverables (3–5 bullets), timeline, ideal client one-liner, CTA "Learn More →"
3. **Comparison Table** — Responsive table (horizontal scroll on mobile) comparing deliverables, duration, outcomes, investment range across all three tiers
4. **Engagement Process** — 4-step visual timeline: Discovery → Assessment → Implementation → Optimization. Icon + brief copy per step.
5. **CTA Section** — "Not sure which tier fits? Take the QuickScan." + "Ready to talk? Book a Strategy Call."

**Key Interactions:**
- Comparison table: sticky first column on mobile horizontal scroll
- Tier cards: hover elevation + border color
- Process steps: scroll-reveal animation (stagger 100ms per step)

---

### Service Detail Page (`/services/[tier]`)

**Template used by:** Foundation Sprint, AI Growth System, AI-First Operating System

**Above the Fold:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → Services → [Service Name]             │
│                                                          │
│ Badge: "Tier [1/2/3]"                                    │
│                                                          │
│ H1: "[Service Name]"                                     │
│ Subheadline: Outcome-driven one-sentence promise         │
│                                                          │
│ Quick-glance stats row:                                  │
│ [Duration: X weeks] [Audience: SMBs $XM–$XM]            │
│ [Investment: Starting at $XX,000]                        │
│                                                          │
│ [CTA: "Book a Strategy Call"]                            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Content Blocks (scrolling order):**

1. **Problem Statement** — 2–3 paragraphs in the buyer's language (not consultant-speak)
2. **Deliverables List** — Structured list with icons. Each deliverable: name + 1-sentence explanation
3. **KPIs & Outcomes** — 3–5 large metric callout cards (e.g., "47% reduction in manual tasks")
4. **Timeline** — Visual week-by-week or phase-by-phase engagement flow
5. **Ideal Client Profile** — "This is for you if…" checklist + "This is NOT for you if…" checklist
6. **Investment** — Range (if approved) or "Investment discussed on strategy call" with value framing
7. **Related Case Study** — Embedded case study card: challenge, approach, headline result, link
8. **FAQ Accordion** — 4–6 service-specific questions with FAQPage schema
9. **Final CTA** — Primary: "Book Your Strategy Call" (Calendly embed or link). Secondary: "Take the QuickScan First"

**Key Interactions:**
- FAQ accordion: one-at-a-time expand (clicking one closes others). Keyboard: Enter/Space toggles. `aria-expanded` state managed.
- Deliverables list: subtle stagger animation on scroll-reveal
- Metric callouts: count-up animation on scroll into view
- Calendly embed: inline on desktop, link to external on mobile if embed is too constrained

---

### AI Maturity Framework (`/framework`)

**Above the Fold:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → AI Maturity Framework                 │
│                                                          │
│ H1: "The AI Maturity Framework"                          │
│ Subheadline: "A structured model for understanding       │
│ where your business stands — and what to do next."       │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Content Blocks (scrolling order):**

1. **Framework Overview** — Long-form text (3–4 paragraphs). Sets context, establishes authority.
2. **Interactive Maturity Stage Diagram** — Desktop: 4-stage horizontal visual. Click a stage to reveal detail panel below. Mobile: vertical accordion — tap stage to expand. Each stage panel: characteristics, business symptoms, recommended actions, link to sub-page.
3. **Stage Deep Dives (×4)** — H2 per stage. 2–3 paragraphs each. Characteristics, common challenges, what good looks like, next steps.
4. **Mid-Content QuickScan CTA** — After Stage 2 section: "Where does your business fall? Find out in 10 minutes." → `/quickscan`. (Accent background to stand out from body text.)
5. **How We Use the Framework** — Bridges content to services. 2–3 paragraphs + step visual.
6. **FAQ Accordion** — 6–10 questions. FAQPage schema. Optimized for AI search extraction.
7. **Related Insights** — 3 blog post cards from AI Maturity cluster.
8. **Final CTA** — "Take the QuickScan" primary + "Book a Strategy Call" secondary.

**Key Interactions:**
- Stage diagram: interactive tab-like behavior. Active stage highlighted. Content panel transitions smoothly (300ms ease-out).
- Desktop diagram: hover shows brief tooltip; click shows full detail panel
- Mobile diagram: simple accordion pattern
- Stage navigation: keyboard accessible with arrow keys (left/right on desktop)
- FAQ: same accordion pattern as service pages

---

### Results Hub (`/results`)

**Above the Fold:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → Results                               │
│                                                          │
│ H1: "Real Results from Real Businesses"                  │
│ Subheadline: "Measurable outcomes from every engagement."│
│                                                          │
│ [Aggregated Metrics Strip]                               │
│ [47% ↓]     [3.2x]      [$2.4M]                        │
│ "Avg        "Pipeline    "Revenue                        │
│  reduction"  velocity"    unlocked"                      │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Content Blocks:**

1. **Filter Bar** — Horizontal pill/toggle filters: Industry | Service Tier | Challenge Type. "Clear all" link.
2. **Case Study Grid** — 2-column desktop, 1-column mobile. Card: industry badge, challenge headline, service tier tag, headline metric, "Read More →"
3. **No-Case-Study Fallback** — If < 2 case studies: "We're currently capturing results from client engagements. Here's what our methodology typically delivers." + Aggregated stats + "Book a call to discuss your situation."
4. **CTA** — "Ready to add your name to these results?" → Book a Call

**Key Interactions:**
- Filters: toggle on/off. Results filter in real-time (client-side). No page reload.
- Filters: keyboard accessible (Enter/Space to toggle), `aria-pressed` state
- Empty state: smooth transition when filters yield no results

---

### Individual Case Study (`/results/[case-study-slug]`)

**Above the Fold:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → Results → [Case Study Title]          │
│                                                          │
│ [Service tier badge]  [Industry badge]                   │
│                                                          │
│ H1: "How a 40-Person Distribution Company                │
│      Cut Order Processing Time by 52%"                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Content Blocks:**

1. **Challenge** — H2 + 2–3 paragraphs from client's perspective
2. **Approach** — H2 + Steps or narrative describing engagement methodology
3. **Results** — H2 + Large metric callout cards (2–4) with supporting narrative
4. **Client Quote** — Pull quote with attribution (role, company type)
5. **Related Case Studies** — 2 card links
6. **CTA** — "Explore a similar engagement for your business." → Book a Call + QuickScan

---

### Insights Hub (`/insights`)

**Above the Fold:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → Insights                              │
│                                                          │
│ H1: "AI Transformation Insights — Practical, Not         │
│      Academic"                                           │
│                                                          │
│ [Category Filter Tabs]                                   │
│ All | AI Maturity | Operations | Marketing |             │
│ Digital Transformation                                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Content Blocks:**

1. **Featured Post** — Large card spanning full width. Image (optional), category badge, H2 title, 2-line excerpt, read time, CTA "Read →"
2. **Article Grid** — 3-column desktop, 2-column tablet, 1-column mobile. 9 articles per page. Card: category badge, H3 title, 1-line excerpt, read time, date.
3. **Newsletter Signup** — Inline between grid rows (after row 2): "Get AI transformation insights delivered monthly." Email input + submit.
4. **Pagination** — Previous / Next + numbered pages. "Page X of Y" announced to screen readers.

**Key Interactions:**
- Category tabs: filter articles (client-side if < 50 articles; paginated server-side if more). Active tab highlighted with underline + accent color.
- Category tabs: keyboard navigable with arrow keys, `role="tablist"` pattern
- Article cards: hover shadow increase. Entire card clickable.
- Newsletter inline: appears once. On successful subscribe, replaced with "Thanks! Check your inbox."

---

### Blog Post (`/insights/[article-slug]`)

**Layout:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → Insights → [Category] → [Title]      │
│                                                          │
│ [Centered, max-width 720px — optimal reading width]      │
│                                                          │
│ Category badge  •  Date  •  "8 min read"                 │
│                                                          │
│ H1: Article Title                                        │
│                                                          │
│ Author: [Avatar] [Name], [Role]                          │
│                                                          │
│ ──────────────────────────────────────                   │
│                                                          │
│ [Article body — rich text]                               │
│                                                          │
│ H2 sections, H3 subsections, images with alt text,       │
│ pull quotes, inline links...                             │
│                                                          │
│ [≈50% scroll: Inline CTA block]                         │
│ "Wondering where your business falls?"                   │
│ [Take the QuickScan →]                                   │
│                                                          │
│ [Continued article body...]                              │
│                                                          │
│ ──────────────────────────────────────                   │
│                                                          │
│ [Author Block]                                           │
│ [Avatar 400×400] Name, Role, 2-sentence bio              │
│                                                          │
│ [Related Posts — 3 cards]                                │
│                                                          │
│ [Newsletter Signup]                                      │
│ "Enjoyed this? Get more like it."                        │
│ [Email input] [Subscribe]                                │
│                                                          │
│ [Article Footer CTA]                                     │
│ "Ready to put this into practice?"                       │
│ [Book a Strategy Call]                                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Key Interactions:**
- Inline CTA: visually distinct from body text (accent background, rounded corners)
- Pull quotes: styled with left border accent, larger type
- Images: lazy-loaded below fold, `next/image` with responsive `sizes`
- Scroll progress indicator (optional): thin bar at top of viewport showing read progress

---

### About (`/about`)

**Content Blocks (scrolling order):**

1. **Hero** — H1: mission statement (not generic "About Us"). Subheadline: the market gap.
2. **Company Story** — 3–4 paragraphs. Origin, why now, what's different.
3. **Positioning / Philosophy** — 3 callout cards (large icon + heading + 2 sentences): Measurable Outcomes, Practitioner-Led, No Hype.
4. **Team Section** — Grid. Card per person: professional photo (400×400, square crop), name, title, 3–4 sentence bio, LinkedIn icon link (with `aria-label`).
5. **Values** — 3–5 value cards. Each: bold heading + 2-sentence explanation grounded in how it shows up in engagements.
6. **Trust Signals** — Logo bar of certifications, partnerships, speaking engagements.
7. **CTA** — "Want to work with a team like this?" → Book a Strategy Call.

---

### Contact (`/contact`)

**Layout:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → Contact                               │
│                                                          │
│ H1: "Let's Talk About What's Possible"                   │
│ "We respond within one business day."                    │
│                                                          │
│ ┌─────────────────────┐ ┌────────────────────────┐      │
│ │ [Calendly Embed]     │ │ Contact Form            │      │
│ │                      │ │                         │      │
│ │ H2: "Book a          │ │ H2: "Send a Message"    │      │
│ │ Strategy Call"        │ │                         │      │
│ │                      │ │ Name*                    │      │
│ │ "30–45 minutes.      │ │ Email*                   │      │
│ │ No sales pitch.      │ │ Company*                 │      │
│ │ Come with your       │ │ Phone                    │      │
│ │ biggest question."   │ │ Inquiry Type* [Select]   │      │
│ │                      │ │ Message*                 │      │
│ │ [Calendly Widget]    │ │                         │      │
│ │                      │ │ [Send Message]           │      │
│ └─────────────────────┘ └────────────────────────┘      │
│                                                          │
│ ┌──────────────────────────────────────────────┐         │
│ │ [Location & NAP]          [Google Maps Embed]│         │
│ │ Blackwell Digital                            │         │
│ │ [Address]                                    │         │
│ │ [Phone]                                      │         │
│ │ [Email]                                      │         │
│ └──────────────────────────────────────────────┘         │
│                                                          │
│ "Not ready for a call? Take the QuickScan →"            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Mobile Layout:**
- Calendly embed and contact form stack vertically
- Calendly first (preferred path), form below
- Map below NAP, full-width

**Key Interactions:**
- Calendly embed: loads asynchronously (lazy-loaded on viewport entry) to not block page paint
- Contact form: real-time validation on blur. Error messages below fields. Success state replaces form.
- Google Maps: lazy-loaded on scroll into view

---

### 404 Page

**Layout:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ [Centered, max-width 640px]                              │
│                                                          │
│ H1: "This page doesn't exist —                           │
│      but a better path might."                           │
│                                                          │
│ "Here's where you probably want to go:"                  │
│                                                          │
│ ┌────────┐ ┌────────┐ ┌────────┐                        │
│ │Services│ │Frame-  │ │Quick-  │                        │
│ │        │ │work    │ │Scan    │                        │
│ └────────┘ └────────┘ └────────┘                        │
│ ┌────────┐ ┌────────┐                                   │
│ │Insights│ │Contact │                                   │
│ └────────┘ └────────┘                                   │
│                                                          │
│ "Or, take the AI Maturity QuickScan while you're here."  │
│ [Take the QuickScan →]                                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

### Legal Pages (Privacy, Terms, Accessibility)

**Shared Template Layout:**

```
┌──────────────────────────────────────────────────────────┐
│ [Header]                                                 │
├──────────────────────────────────────────────────────────┤
│ Breadcrumb: Home → [Page Title]                          │
│                                                          │
│ H1: "[Page Title]"                                       │
│ "Last updated: [Date]"                                   │
│                                                          │
│ [Rich text body, max-width 720px, centered]              │
│ Proper heading hierarchy (H2 sections, H3 subsections)   │
│ Readable typography (base size, 1.6 line-height)         │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

- No CTAs or conversion elements on legal pages
- Clean, readable layout focused on content comprehension

---

## Interaction Patterns

### Form Validation & Error Messaging

**Validation Timing:**
- **On blur:** Validate individual fields when the user tabs/clicks away. Display inline errors immediately.
- **On submit:** Re-validate all fields. If errors exist, prevent submission and scroll to first error field. Display error summary above the form via `aria-live="assertive"` region.
- **On input (after first error):** Once a field has been flagged, validate on keystroke/change to show when the error is resolved.

**Error Message Format:**
```
[Field Label]
[Input Field — red border (3px, #dc2626)]
⚠ [Specific error message]
```

**Error Message Copy Rules:**
- Always identify the field: "Email address is required"
- Always describe how to fix: "Please enter a valid email address (e.g., name@company.com)"
- Never blame the user: "Invalid email" → "Please enter a valid email address"
- Use sentence case, no exclamation marks

**Error Message Examples:**

| Field | Validation | Error Message |
|---|---|---|
| Name (required) | Empty | "Please enter your name." |
| Email (required) | Empty | "Email address is required." |
| Email (format) | Invalid format | "Please enter a valid email address (e.g., name@company.com)." |
| Company (required) | Empty | "Please enter your company name." |
| Message (required) | Empty | "Please enter a message." |
| Inquiry Type (required) | No selection | "Please select an inquiry type." |
| QuickScan question | No selection | "Please select an answer to continue." |

**Required Field Indicators:**
- Asterisk (*) after label text
- `aria-required="true"` on input
- Legend/note at top of form: "Fields marked with * are required."

**Success State (Contact Form):**
- Form fades out (150ms) and is replaced by confirmation message
- Confirmation: "Thank you, [Name]. We'll respond within one business day."
- Below: "While you wait:" + links to QuickScan and latest insight
- Green checkmark icon above the message
- `aria-live="polite"` announces the success message

---

### Loading States

**Page Navigation (Next.js App Router):**
- Instant navigation for static pages (pre-rendered)
- For dynamic routes (blog posts, case studies): Next.js loading.tsx skeleton displayed within 100ms
- Skeleton matches the page structure: gray pulsing rectangles matching expected content blocks

**QuickScan Assessment Step Transitions:**
- Transition between steps: content area fades out (150ms) and new content fades in (150ms)
- Progress bar animates fill width (300ms ease-out)
- No full-page reload — client-side state management

**QuickScan Results Calculation:**
- After lead capture submission: display "Calculating your results..." with branded spinner/animation
- Duration: 1–3 seconds (includes API calls to store data and generate results token)
- Redirect to `/quickscan/results/[token]` on completion

**Calendly Embed Loading:**
- Skeleton placeholder (branded background + "Loading scheduler..." text) while embed loads
- Lazy-loaded on viewport entry using Intersection Observer

**Image Loading:**
- Below-fold images: `next/image` with `loading="lazy"` and blur placeholder (blurDataURL)
- Hero image: `priority` flag, preloaded via `<link rel="preload">`
- Skeleton shimmer for card images while loading

**Third-Party Script Loading:**
- GTM: async, non-blocking
- Clarity/Hotjar: lazy-loaded after page interactive
- Google Maps: lazy-loaded on scroll into viewport
- Cookie consent: rendered immediately (but lightweight)

---

### Empty States

| Context | Empty State Design |
|---|---|
| **Results page — no case studies** | Aggregated metrics prominently displayed. Below: "We're capturing results from current engagements. Here's what our methodology typically delivers." + 3 stat callouts + CTA "Book a Call to Discuss Your Situation." |
| **Insights hub — no articles in category** | "We're working on content for [Category]. Subscribe to get notified." Newsletter signup inline. Display "All" category articles below as fallback. |
| **Results filters — no matches** | "No results match your filters." "Clear all filters" button. Aggregated metrics remain visible above filter area. |
| **Blog related posts — fewer than 3 matches** | Show as many as available (1–2). If 0 matches: hide the related posts section entirely. |
| **Social proof — no logos** | Section shows aggregated metrics only. Logo bar component renders nothing (no empty placeholder row). |
| **Team section — only founder** | Single card, full-width or centered. No "empty team member" slots. |

---

### Success / Confirmation States

| Action | Confirmation |
|---|---|
| **Contact form submitted** | Form replaced with: green checkmark + "Thank you, [Name]. We'll respond within one business day." + next-step links. |
| **QuickScan completed** | Redirect to results page with personalized score visualization. Email confirmation sent asynchronously. |
| **Newsletter subscribed** | Inline form replaced with: "Thanks! Check your inbox for a confirmation." Green checkmark. |
| **Calendly call booked** | Calendly handles confirmation (embedded). Below embed: "Confirmation sent to your email. Here's what to prepare." + 2–3 prep bullets. |
| **QuickScan results shared** | Toast notification (bottom center): "Link copied to clipboard!" Auto-dismiss after 3 seconds. |
| **PDF downloaded** | Browser download initiated. No additional UI confirmation needed. |

---

### Navigation Transitions

**Page Transitions:**
- No full-page fade/slide animations (respect performance and accessibility)
- Next.js App Router handles instant navigation for pre-rendered pages
- Browser scroll position: reset to top on new page navigation
- Back navigation: restore previous scroll position (browser default)

**Mobile Menu:**
- Open: slide in from right, 300ms ease-out. Background overlay fades in.
- Close: slide out to right, 200ms ease-in. Overlay fades out.
- Focus trapped within menu when open
- Escape key closes menu
- Focus returns to hamburger button on close
- Body scroll locked while menu is open

**Dropdown (Services):**
- Desktop: appears on hover after 100ms delay (prevents accidental triggering). Disappears on mouse leave with 200ms delay.
- Keyboard: opens on Enter/Space, navigable with arrow keys, Escape closes
- Mobile: inline expand (no hover — tap to expand/collapse)

**Accordion (FAQ):**
- Expand/collapse: 200ms ease-out, height auto-animated
- Only one item open at a time (optional — can be toggled per instance)
- Arrow rotation on expand (90° → 180°)
- `aria-expanded` toggled on trigger button

**Tab Navigation (Framework Stages, Insights Categories):**
- Active tab: underline accent + color change
- Content panel transition: 200ms fade (no layout shift)
- Keyboard: arrow keys navigate between tabs, Enter/Space activates tab
- `role="tablist"`, `role="tab"`, `role="tabpanel"` ARIA pattern

---

### Scroll Behaviors

**Sticky Header:**
- Always visible at top of viewport
- On scroll down (after 100px): slight shadow appears for depth
- Height: 64px desktop, 56px mobile
- Does not change size or content on scroll (no shrink behavior — maintains simplicity)

**Scroll-Reveal Animations:**
- Used on: section headings, cards, metric callouts, process steps
- Pattern: fade-in + translate-up 16px, 300ms ease-out
- Trigger: when element enters viewport (Intersection Observer, threshold 0.1)
- Stagger: 100ms between siblings in a group
- `prefers-reduced-motion`: elements render immediately, no animation

**Sticky Bottom CTA (Mobile):**
- Appears after user scrolls past the hero section's CTA (Intersection Observer)
- Fixed to bottom of viewport, 56px height, full-width
- Slight slide-up animation on appear (200ms)
- "Take the QuickScan →" button, full width
- Hidden on `/quickscan`, `/quickscan/assessment`, and `/contact` pages
- Dismiss: swipe down or close button (X) — remembers dismissal per session

**Floating CTA (Desktop):**
- Appears on long-form pages (Framework, Service detail, Blog posts)
- Triggers at 60% scroll depth
- Subtle slide-in from bottom-right corner
- Compact bar: "Take the QuickScan →" text + button
- Dismiss (X) — remembers dismissal per session
- Hidden on `/quickscan`, `/quickscan/assessment`, and `/contact`

**Smooth Scroll (Anchor Links):**
- Service overview anchor links, framework stage links
- `scroll-behavior: smooth` in CSS (or JS polyfill for Safari consistency)
- Offset for sticky header height (64px desktop, 56px mobile)
- `prefers-reduced-motion`: instant jump (no smooth scroll)

**Back to Top (Long Pages):**
- Not included in v1. Content structure and navigation should eliminate the need. Re-evaluate post-launch based on scroll depth analytics.

---

## Accessibility Plan

### Keyboard Navigation Requirements

**Global:**
- All interactive elements reachable via Tab key in logical order matching visual layout
- Tab order: Skip-to-content → Logo → Nav items (left to right) → CTA button → Page content (top to bottom) → Footer
- Visible focus indicators on ALL interactive elements: min 2px outline, primary-500 color, 3:1 contrast against background
- No keyboard traps anywhere on the site

**Skip-to-Content Link:**
- First focusable element on every page
- Visually hidden until focused (CSS: `clip` technique, revealed on `:focus`)
- Targets `<main id="main-content">` element
- Text: "Skip to main content"

**Navigation:**
- Primary nav links: Tab to focus, Enter to activate
- Services dropdown: Enter/Space to open, Arrow Down/Up to navigate items, Escape to close, focus returns to trigger
- Mobile hamburger: Enter/Space to open drawer, Tab through links, Escape to close, focus returns to hamburger button
- Breadcrumbs: Tab to each link, Enter to navigate

**Forms (Contact, QuickScan, Newsletter):**
- Tab through fields in logical order
- Labels associated via `for`/`id` or wrapping `<label>`
- Radio buttons: Arrow keys to move between options within a group
- Select dropdowns: Arrow keys to navigate options, Enter to select
- Submit button: Enter to submit from any field
- Error messages: associated with fields via `aria-describedby`

**Accordions (FAQ):**
- Enter/Space to expand/collapse
- `aria-expanded="true/false"` on trigger button
- `aria-controls` linking trigger to panel
- Panel content: focusable elements inside panel become tabbable when expanded

**Tabs (Framework Stages, Category Filters):**
- Arrow Left/Right to move between tabs
- Enter/Space to activate tab (or auto-activate on arrow)
- Tab key moves from tab list to tab panel content
- `role="tablist"`, `role="tab"`, `role="tabpanel"` with `aria-selected`

**Modal / Overlay (Mobile Menu, Cookie Consent):**
- Focus trapped within overlay when open
- Escape key closes
- Focus returns to trigger element on close
- Background content: `aria-hidden="true"` and `inert` when overlay is active

**QuickScan Assessment:**
- Tab through question options (radio buttons within a fieldset)
- Enter/Space to select option
- Tab to Back/Continue buttons
- Continue button: disabled state communicated via `aria-disabled="true"` with descriptive text
- Progress indicator: read on page load via `aria-live="polite"`

---

### Screen Reader Considerations

**Page Structure:**
- Every page: `<header>`, `<nav>`, `<main>`, `<footer>` with appropriate ARIA landmarks
- One `<h1>` per page, sequential heading hierarchy (h1 → h2 → h3)
- `<html lang="en">`
- Page title updates on navigation (Next.js `metadata` API)

**Images:**
- Content images: descriptive `alt` text conveying the image's purpose
- Decorative images: `alt=""`
- Charts/visualizations (QuickScan results): full text alternative describing the data
- Hero graphic: `alt=""` (decorative) — key information is in text

**Dynamic Content:**
- QuickScan progress updates: `aria-live="polite"` region announces step changes
- Form validation errors: `aria-live="assertive"` announces errors on submit attempt
- Toast notifications (share link copied): `aria-live="polite"` announces message
- Filter results count: `aria-live="polite"` announces "X results" after filter change
- Newsletter success: `aria-live="polite"` announces confirmation

**Links & Buttons:**
- All links: descriptive text (no "click here" or bare URLs)
- Icon-only buttons (hamburger, social links, close): `aria-label` describing the action
- External links: `aria-label` includes "opens in new tab" or visible icon with `sr-only` text
- CTA buttons: text clearly describes the action ("Take the QuickScan", not "Get Started")

**Tables (Comparison Table):**
- Use proper `<table>`, `<thead>`, `<tbody>`, `<th scope="col">`, `<th scope="row">`
- Caption via `<caption>` element or `aria-labelledby`

**Navigation Announcements:**
- Current page: `aria-current="page"` on active nav link
- Breadcrumbs: `<nav aria-label="Breadcrumb">`
- Primary nav: `<nav aria-label="Primary">`
- Footer nav: `<nav aria-label="Footer">`

---

### Focus Management

**Page Navigation:**
- On route change: focus moves to `<h1>` of new page (or `<main>` if no h1) — ensures screen readers announce new page content
- Implemented via Next.js `usePathname` + `useEffect` focus management

**Modal/Drawer Open:**
1. Store reference to trigger element
2. Move focus to first focusable element within modal (usually close button)
3. Trap focus within modal (Tab cycles through modal elements only)
4. On close: return focus to stored trigger element

**Accordion Expand:**
- Focus remains on the trigger button after expand/collapse
- Tab moves into panel content on next Tab press if expanded

**QuickScan Step Transition:**
- On step advance: focus moves to the step's H2 question heading
- On step back: focus moves to the previous step's H2 question heading
- Prevents user from being lost after content replacement

**Form Submission Error:**
- Focus moves to the first field with an error
- Error summary at top of form links to specific fields (anchor links with field IDs)

**Form Submission Success:**
- Focus moves to the success message heading/container

**Skip-to-Content Activation:**
- Moves focus to `<main id="main-content" tabindex="-1">` (tabindex allows programmatic focus without adding to tab order)

---

### ARIA Patterns for Interactive Components

| Component | ARIA Pattern | Implementation |
|---|---|---|
| **Primary Nav** | `<nav aria-label="Primary">` | Standard landmark |
| **Breadcrumbs** | `<nav aria-label="Breadcrumb">` + `<ol>` + `aria-current="page"` on last item | [WAI Breadcrumb Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/) |
| **Mobile Menu** | `role="dialog"`, `aria-modal="true"`, `aria-label="Navigation menu"` | [WAI Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) |
| **Services Dropdown** | Disclosure pattern: `aria-expanded`, `aria-controls` on trigger. Menu items as `<a>` elements. | [WAI Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) |
| **FAQ Accordion** | `aria-expanded` on trigger buttons. `aria-controls` linking to panels. `role="region"` on panels with `aria-labelledby`. | [WAI Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) |
| **Framework Stage Tabs** | `role="tablist"`, `role="tab"` + `aria-selected`, `role="tabpanel"` + `aria-labelledby` | [WAI Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) |
| **Insights Category Tabs** | Same as Framework tabs | [WAI Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) |
| **QuickScan Progress** | `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`, `aria-label="Assessment progress"` | [WAI Meter/Progressbar](https://www.w3.org/WAI/ARIA/apg/patterns/meter/) |
| **QuickScan Radio Groups** | `<fieldset>` + `<legend>` wrapping radio inputs. `role="radiogroup"` only if not using native `<fieldset>`. | Native HTML preferred |
| **Filter Toggles (Results)** | `aria-pressed="true/false"` on filter buttons. Live region announces result count changes. | [WAI Toggle Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) |
| **Toast Notifications** | `role="status"`, `aria-live="polite"` — auto-dismissed, not interactive. | [WAI Alert Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) (polite) |
| **Cookie Consent Banner** | `role="dialog"`, `aria-label="Cookie consent"`. Not modal — does not trap focus. | Non-modal dialog |
| **Sticky CTA (Mobile)** | Standard `<a>` or `<button>` — no special ARIA. Should not receive focus ahead of main content (placed at end of DOM or `tabindex` managed). | Positioned via CSS `fixed` |
| **Score Visualization** | `role="img"`, `aria-label="[Descriptive text of the visualization and score]"` on the chart container. Separate text alternative below. | Decorative chart with text alternative |
| **Comparison Table** | Native `<table>` with proper `<th scope>` — no ARIA needed. | Semantic HTML |
| **Newsletter Form** | `<form aria-label="Newsletter signup">`. Success state in `aria-live="polite"` region. | Standard form pattern |

---

### Color Contrast Requirements

Per WCAG 2.1 AA and ORION Accessibility Standards:

| Element | Minimum Ratio | Notes |
|---|---|---|
| Body text (foreground-default on background-default) | ≥ 4.5:1 | `#0f172a` on `#ffffff` = 15.4:1 ✓ |
| Muted text (foreground-muted on background-default) | ≥ 4.5:1 | `#64748b` on `#ffffff` = 4.6:1 ✓ (verify exact value) |
| Large text (≥18px bold or ≥24px) | ≥ 3:1 | H1/H2 headings |
| Interactive UI components (buttons, inputs, links) | ≥ 3:1 | Button borders, input borders, link underlines against background |
| Focus indicators | ≥ 3:1 | 2px outline against both the component background and the page background |
| Error state text (#dc2626 on white) | ≥ 4.5:1 | `#dc2626` on `#ffffff` = 4.5:1 ✓ (verify — may need darker red) |
| Accent CTA button (text on accent-500) | ≥ 4.5:1 | White or dark text on `#f59e0b` — verify. Dark text (#0f172a) on amber-500 = 8.6:1 ✓ |
| Primary CTA button (text on primary-500) | ≥ 4.5:1 | White text on `#22c55e` — verify. May need darker green or dark text. |
| Dark CTA section (text on primary-900) | ≥ 4.5:1 | White on `#14532d` = 11.1:1 ✓ |
| Placeholder text | ≥ 4.5:1 | Avoid relying on placeholder for field labels. If used, ensure contrast. |
| Disabled button text | ≥ 3:1 (best practice) | Communicate disabled state via text/opacity but maintain readability |

**Color-Independence Rules:**
- Never use color alone to convey information (e.g., error states use red border + icon + text)
- Form validation: red border + error text + ⚠ icon
- QuickScan results: stage highlighted by position/label, not just color
- Filter active states: underline + color change (not color alone)
- Chart dimensions: labeled with text, not distinguished only by color

**Verification Process:**
- All color combinations verified with contrast checker during design token finalization
- Automated checks via axe DevTools on every page
- Manual spot-checks during QA for dynamic content (QuickScan results, filtered states)

---

### Additional Accessibility Considerations

**Zoom & Reflow:**
- All content accessible and usable at 200% zoom
- No horizontal scrolling at 200% zoom on 1280px viewport (content reflows)
- Touch targets: minimum 44×44px for all interactive elements (buttons, links, radio buttons, accordion triggers)

**Motion:**
- All animations wrapped in `prefers-reduced-motion` media query check
- Reduced-motion state: elements appear immediately in final position, no transitions
- No auto-playing animations that cannot be paused
- QuickScan progress bar: static fill (no animation) under reduced-motion
- Score visualization: static render (no count-up animation) under reduced-motion

**Media:**
- No auto-playing video or audio anywhere on the site
- If video is embedded (client-provided): captions required, play/pause controls visible
- No background audio

**Text Spacing:**
- Per WCAG 1.4.12: content remains functional when user adjusts:
  - Line height to 1.5× font size
  - Paragraph spacing to 2× font size
  - Letter spacing to 0.12× font size
  - Word spacing to 0.16× font size
- Implemented via fluid Tailwind utilities that don't constrain user stylesheet overrides

**Cookie Consent Accessibility:**
- Not a modal (does not trap focus)
- Keyboard navigable (Tab to options, Enter/Space to select)
- "Accept" and "Manage preferences" buttons clearly labeled
- Preference panel: checkboxes with labels, Save button
- Does not block access to page content

---

## User Story Coverage Matrix

| User Story | Primary Flow(s) | Key Pages | Priority |
|---|---|---|---|
| U1: Understand what BD does in 10 seconds | Flow 7 (Homepage) | `/` | **Must** |
| U2: Take a quick AI maturity assessment | Flow 1 (QuickScan) | `/quickscan`, `/quickscan/assessment`, `/quickscan/results/[token]` | **Must** |
| U3: See clear menu of services with outcomes | Flow 2 (Services), Flow 7 (Homepage) | `/services`, `/services/[tier]`, `/` | **Must** |
| U4: Book a strategy call directly | Flow 6 (Contact), Flow 1 (QuickScan → Call), Flow 2 (Services → Call) | `/contact`, `/services/[tier]`, `/quickscan/results/[token]` | **Must** |
| U5: See proof for companies my size | Flow 5 (Case Studies), Flow 7 (Homepage) | `/results`, `/results/[slug]`, `/` | **Should** |
| U6: Understand pricing/investment levels | Flow 2 (Services) | `/services/[tier]` | **Should** |
| U7: Read detailed service breakdowns with KPIs | Flow 2 (Services) | `/services/[tier]` | **Must** |
| U8: Download/share QuickScan results | Flow 1 (QuickScan) | `/quickscan/results/[token]` | **Should** |
| U9: Read case studies filtered by industry | Flow 5 (Case Studies) | `/results` | **Should** |
| U10: Understand AI Maturity Framework methodology | Flow 4 (Framework) | `/framework` | **Should** |
| U11: See marketing-specific outcomes and use cases | Flow 2 (Services), Flow 5 (Case Studies) | `/services/ai-growth-system`, `/results` | **Should** |
| U12: Read thought leadership content | Flow 3 (Insights) | `/insights`, `/insights/[slug]` | **Could** |
| U13: Subscribe to newsletter | Flow 3 (Insights), Flow 8 (Returning) | `/insights`, `/insights/[slug]` | **Could** |
| U14: Fast, mobile-friendly experience | All flows | All pages | **Must** |
| U15: Find answers to common AI transformation questions | Flow 4 (Framework), Flow 2 (Services) | `/framework`, `/services/[tier]` | **Should** |

---

*Document prepared by ORION UX Specification Agent — Blackwell Digital*
*Project: blackwell-digital-website | Phase: Design | Status: Draft*
*Generated: 2026-02-21*