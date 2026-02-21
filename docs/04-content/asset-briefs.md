---
phase: content
status: draft
project: "blackwell-digital-website"
agent: "content-asset"
generatedBy: orion-content-asset
generatedAt: "2026-02-21"
date: "2026-02-21"
---

# Asset Brief Document
## Project: Blackwell Digital Website
## Agent: ORION Asset Brief
## Generated: 2026-02-21

---

## Preliminary Notes

**Brand Assets Status:** `hasBrandAssets: false` — No existing brand assets. All visual assets must be created from scratch or sourced via stock. Logo and brand identity system should be developed before photography and icon work begins, as color palette and mark style will inform all downstream asset decisions.

**Visual Direction Summary (from UI Specification):** Dark-first, executive-grade aesthetic. Electric sky-blue (#0ea5e9) and cyan (#22d3ee) accents against deep navy-black backgrounds (#070d1a). No AI clichés — no robot imagery, no neural network illustrations, no glowing brain graphics. Geometric precision. Data-forward visual motifs. Reference aesthetic: McKinsey authority meets Palantir technical confidence, adapted for SMB buyers.

**Format Standard:** All photography and illustration delivered as WebP. All icons as SVG. Video as MP4 (H.264) with WebM fallback.

---

## Photography Briefs

### PAGE: Homepage (`/`)

---

**PHOTO-001 — Homepage Hero Background**

- **Description:** Abstract, architectural dark environment suggesting systems, precision, and intelligence. No people. Think: dark glass-and-steel architecture shot at night, or a long-exposure server room corridor with motion blur. The image serves as a textural foundation — it will sit behind a dark overlay gradient and will not be the primary visual focus.
- **Mood/Style:** Executive. Cold precision. Deep blacks and dark blues. Slight atmospheric depth — not flat. Minimal. No warm tones.
- **Dimensions:** 1920 × 1080px minimum. WebP. Aspect ratio 16:9.
- **Where Used:** Homepage hero section, background layer beneath `heroOverlay` gradient. The image will be 80–90% obscured by the overlay; subtlety is the goal.
- **Stock vs. Custom:** Stock recommended. Search terms: "dark server corridor long exposure," "glass architecture night abstract," "dark data center bokeh." Avoid anything with visible human faces, neon-colored lights, or clichéd "matrix" aesthetics. Preferred sources: Unsplash (premium), Getty Images Editorial, Adobe Stock.
- **Accessibility Note:** Image is decorative — `alt=""`. The overlay gradient must maintain sufficient contrast for all overlaid text per WCAG AA.

---

**PHOTO-002 — Homepage "Why It Works" / Social Proof Section Background**

- **Description:** Subtle textural abstract — dark material surface (brushed metal, dark concrete with fine grain, matte carbon fiber) that creates visual separation between sections without introducing a narrative image. Used as a section background tint, not a foreground image.
- **Mood/Style:** Industrial precision. Neutral. Dark. Should complement #070d1a and #0d1525 palette tones without clashing.
- **Dimensions:** 1920 × 600px. WebP.
- **Where Used:** Homepage social proof / results stats section background.
- **Stock vs. Custom:** Stock. Search terms: "dark carbon fiber texture," "brushed dark metal surface," "matte black industrial texture."
- **Accessibility Note:** Decorative. `alt=""`. Must maintain ≥ 4.5:1 contrast for any text overlaid.

---

**PHOTO-003 — Homepage "Results" / Case Study Preview Section**

- **Description:** A confident, mid-shot business environment — a well-lit modern conference room, a clean executive workspace, or a small team (2–3 people max) reviewing data on a screen. The setting should feel like a functional, real business — not a stock photo cliché of people pointing at whiteboards. Ethnically diverse subjects. Business casual attire. Genuine engagement with material, not staged laughter.
- **Mood/Style:** Controlled confidence. Professional without being sterile. Slightly warm practical light (contrasts with the dark site palette to signal "real world" impact). Sharp focus on environment; people are secondary to setting.
- **Dimensions:** 800 × 600px. WebP. Aspect ratio 4:3.
- **Where Used:** Homepage results section, case study preview card (left image panel). May be reused on `/results` page.
- **Stock vs. Custom:** Custom preferred (to match brand specificity) but high-quality stock is acceptable. If stock: avoid Getty/iStock obvious licensing watermarks in preview. Search terms: "executive team data review," "small business operations meeting real," "modern conference room candid."
- **Accessibility Note:** If people are included, `alt` must describe scene purposefully: e.g., `alt="A small executive team reviewing operational data on a large monitor in a modern conference room."`

---

### PAGE: Services Overview (`/services`)

---

**PHOTO-004 — Services Hero**

- **Description:** Abstract geometric dark image that suggests structured systems — aerial view of an organized grid (city block, circuit board top-down macro, geometric architectural overhead). Must feel ordered, systematic, intelligent. No chaotic or organic forms.
- **Mood/Style:** Precise. Ordered. Dark with electric-blue or teal tonal possibility. Top-down or isometric perspective preferred.
- **Dimensions:** 1440 × 600px. WebP.
- **Where Used:** `/services` interior page hero background.
- **Stock vs. Custom:** Stock. Search terms: "aerial city grid dark," "circuit board top down macro," "geometric overhead architecture dark."
- **Accessibility Note:** Decorative background. `alt=""`.

---

**PHOTO-005 — Foundation Sprint Service Card Image**

- **Description:** A single person (business owner type — not a corporate suit, more entrepreneur) reviewing a structured document or dashboard on a laptop. Environment: sparse, functional desk. Clean. Focused. Suggests the "diagnostic" and "clarity" outcome of the Foundation Sprint service.
- **Mood/Style:** Focused. Analytical. Slightly cool light. Individual work, not team. Early-morning or evening — suggests serious work outside normal hours.
- **Dimensions:** 800 × 500px. WebP. Aspect ratio 16:10.
- **Where Used:** Foundation Sprint service card or `/services/foundation-sprint` page.
- **Stock vs. Custom:** Stock acceptable. Search terms: "entrepreneur reviewing business report laptop," "business owner analytics focused," "small business owner laptop dark desk."
- **Accessibility Note:** `alt="A business owner reviewing operational data on a laptop at a clean, focused workspace."`

---

**PHOTO-006 — AI Growth System Service Card Image**

- **Description:** Visual metaphor for connected systems and growth — a clean dashboard UI on a large monitor showing upward trend data, automation flow diagrams, or structured marketing pipeline. The screen should be legible enough to look like real data but not contain any identifiable business information. Preferably a wide shot showing the monitor in context of a modern office.
- **Mood/Style:** Growth energy. Forward momentum. Slightly warmer than the Foundation Sprint image — suggests active systems at work.
- **Dimensions:** 800 × 500px. WebP. Aspect ratio 16:10.
- **Where Used:** AI Growth System service card or `/services/ai-growth-system` page.
- **Stock vs. Custom:** Stock acceptable. Search terms: "marketing dashboard monitor office," "business growth analytics screen," "CRM pipeline dashboard display."
- **Accessibility Note:** `alt="A monitor displaying upward-trending business analytics in a modern office environment."`

---

**PHOTO-007 — AI-First Operating System Service Card Image**

- **Description:** Operational environment at scale — a multi-location operations center, a distribution floor overview, or a leadership team reviewing an enterprise dashboard together (2–3 people). Should feel like organized complexity — systems working together. Larger scale than the previous two service images.
- **Mood/Style:** Command and control. Strategic overview. Cool and authoritative. Suggests the "operating system" metaphor.
- **Dimensions:** 800 × 500px. WebP. Aspect ratio 16:10.
- **Where Used:** AI-First Operating System service card or `/services/ai-first-operating-system` page.
- **Stock vs. Custom:** Stock acceptable. Search terms: "operations center team overview," "enterprise team dashboard review," "multi-screen operations business."
- **Accessibility Note:** `alt="A leadership team reviewing integrated operational data across multiple screens in a modern operations center."`

---

### PAGE: AI Maturity Framework (`/framework`)

---

**PHOTO-008 — Framework Page Hero**

- **Description:** Abstract visual suggesting progression through stages — a long corridor, a staircase shot from above, light painting trails showing movement from dark to light, or a data visualization rendered as physical environment. Must suggest journey, progression, and ascent without being literal.
- **Mood/Style:** Transformational. Moving from dark to light (literally or metaphorically). Controlled. Architectural.
- **Dimensions:** 1440 × 600px. WebP.
- **Where Used:** `/framework` interior hero background.
- **Stock vs. Custom:** Stock. Search terms: "dark corridor light at end architectural," "staircase overhead progression abstract," "long exposure light trail dark."
- **Accessibility Note:** Decorative. `alt=""`.

---

### PAGE: Results / Case Studies (`/results`)

---

**PHOTO-009 — Results Hero / Section Divider**

- **Description:** Data-forward image suggesting measurable outcomes — a large-format data display, a screen showing clear upward metrics, or an abstract render of structured data flowing into clear outcomes. Can be partially abstract. Should feel like evidence, not aspiration.
- **Mood/Style:** Evidence-based. Confident. Clear. Not celebratory — more like a report cover than a champagne photo.
- **Dimensions:** 1440 × 500px. WebP.
- **Where Used:** `/results` page hero section.
- **Stock vs. Custom:** Stock acceptable. Search terms: "business results dashboard evidence," "data metrics display professional," "analytics report visual dark."
- **Accessibility Note:** Decorative background. `alt=""`.

---

**PHOTO-010 — Case Study Portrait(s)**

- **Description:** Professional headshot-style portrait of a business owner or executive — the "face" behind a case study testimonial. Should feel authentic rather than stock. Diverse representation required across the case study set (plan for 3–4 portraits). Business casual. Genuine expression — not a forced smile. Neutral or slightly dark background to integrate with the site palette.
- **Mood/Style:** Authentic authority. Confident but approachable. Sharp focus. Slight vignette acceptable.
- **Dimensions:** 400 × 400px (square crop). WebP.
- **Where Used:** Testimonial cards (`/results`), homepage social proof section, quote components sitewide.
- **Stock vs. Custom:** **Custom strongly recommended** for any real client testimonials. If placeholder stock is used during development, use diverse, authentic-feeling portraits from ThisPersonDoesNotExist or licensed authentic portrait stock. Avoid obvious corporate stock photo expressions.
- **Accessibility Note:** `alt="[Name], [Title] at [Company Type]."` — always include real descriptive attribution.
- **Quantity:** Plan for 4–6 portraits minimum.

---

### PAGE: About (`/about`)

---

**PHOTO-011 — Team / Founder Portrait**

- **Description:** Professional portrait of the Blackwell Digital founder(s) and key team members. Environmental portrait style preferred — photographed in a workspace context (at a desk, by a whiteboard covered in frameworks, in a modern office). Not a plain white-backdrop headshot. Should convey expertise and approachability simultaneously.
- **Mood/Style:** Expert confidence. Warm but controlled. The person should look like someone you'd trust to architect your business systems.
- **Dimensions:** 800 × 1000px (portrait orientation, 4:5 ratio). Also crop-deliver a 400 × 400px square version for team card use. WebP.
- **Where Used:** `/about` team section, About hero (if used), potential use in footer bio section.
- **Stock vs. Custom:** **Custom required.** These must be real team photos. Schedule a photography session.
- **Accessibility Note:** `alt="[Full Name], [Role] at Blackwell Digital, photographed in their workspace."` — be specific.
- **Quantity:** 1–4 portraits depending on team size.

---

**PHOTO-012 — About Page Environment / Culture Image**

- **Description:** A workplace or process image that shows Blackwell Digital in action — a working session, a strategy whiteboard moment, a team working through a client engagement. Candid over posed. Shows how the work actually gets done.
- **Mood/Style:** Authentic process. Real work. Engaged, not performative. Slightly warmer than product photography.
- **Dimensions:** 1200 × 800px. WebP. Aspect ratio 3:2.
- **Where Used:** `/about` page body section, supporting narrative around methodology.
- **Stock vs. Custom:** **Custom required.** Real workplace photography.
- **Accessibility Note:** `alt="The Blackwell Digital team working through a client strategy session, reviewing frameworks on a whiteboard."` (adapt to actual scene).

---

### PAGE: Blog / Insights (`/insights`)

---

**PHOTO-013 — Blog Post Cover Images (Template Set)**

- **Description:** Each blog post requires a unique cover image. These should be thematically aligned to the post topic. Rather than illustrative or highly specific images, these work best as abstract-but-relevant dark-palette images — a relevant industry environment, a data visual, or a styled concept image. Example: a post about AI automation might use a macro shot of watch gears; a post about marketing ROI might use a data visualization abstract.
- **Mood/Style:** Consistent with site palette — dark, precise, professional. Light or colorful images are acceptable if they're converted to dark overlay treatment via CSS. Avoid generic "person typing on laptop" blog imagery.
- **Dimensions:** 1200 × 675px (16:9 for Open Graph compatibility). Also used at 800 × 450px in blog cards. WebP.
- **Where Used:** Blog post pages (hero), blog listing cards (`/insights`), Open Graph social previews.
- **Stock vs. Custom:** Stock acceptable for blog imagery. Maintain a consistent sourcing style across all posts.
- **Accessibility Note:** `alt` must describe the image meaningfully relative to post content. Never use the post title as alt text verbatim.
- **Quantity:** 6–10 images needed for launch content; ongoing as content is published.

---

### PAGE: QuickScan Assessment (`/quickscan`)

---

**PHOTO-014 — QuickScan Page Trust Signal / Social Proof Imagery**

- **Description:** Small icon-style or inline imagery is preferred here over large photography. However, if a background image is used for the QuickScan results section, it should be a very subtle dark abstract — data points, faint grid lines, or a radial glow treatment rendered as a WebP. Not a photograph.
- **Mood/Style:** Technical precision. Interactive. The QuickScan page is primarily UI-driven — photography should play a supporting or absent role.
- **Dimensions:** If used: 1920 × 1080px background. WebP.
- **Where Used:** QuickScan hero or results page background.
- **Stock vs. Custom:** Custom (generated/designed, not photographed).
- **Accessibility Note:** Decorative. `alt=""`.

---

### PAGE: Contact (`/contact`)

---

**PHOTO-015 — Contact Page Supporting Image**

- **Description:** Optional. A human-forward image — a single person in a productive consultation context (on a call, reviewing materials). Should signal that reaching out leads to a real conversation with a real expert. Not a call-center stock image. One person, clearly focused, professional environment.
- **Mood/Style:** Approachable authority. Warm but professional. Slightly less dark than other photography — this page is about human connection.
- **Dimensions:** 600 × 800px (portrait, displayed in a split-layout contact page). WebP.
- **Where Used:** `/contact` page right panel (if two-column layout is used).
- **Stock vs. Custom:** Custom preferred (use team photography). Stock acceptable as placeholder.
- **Accessibility Note:** `alt="A Blackwell Digital consultant in a focused consultation session, ready to discuss your business needs."`

---

## Icon Requirements

### Icon Style

- **Style:** Line icons with 1.5–2px stroke weight. No filled/solid icons as primary style.
- **Exceptions:** Small-scale icons (16px) used in badges, trust signals, and inline contexts may use a slightly heavier stroke or simplified form for legibility.
- **Special case:** The QuickScan and maturity scoring system may use duotone icons (line with a 10–15% opacity fill in the brand electric-blue) to signal interactivity and stage status.
- **Corner treatment:** Slightly rounded stroke caps and joins (consistent with the `border-radius: md / lg` design language).
- **Source:** Lucide Icons (MIT license, React-native SVG, aligns with codebase). Supplement with custom SVG for any icons not available in Lucide.
- **Format:** SVG inline (via React components) for interactive icons; static SVG file for decorative use.

---

### Sizing Specifications

| Context | Size | Stroke Weight |
|---|---|---|
| Navigation (header/footer) | 20px | 1.5px |
| Button icons (inline) | 16px (sm btn) / 20px (md btn) | 1.5px |
| Feature card icons | 24px (within 48×48px container) | 1.5px |
| Section illustrative icons | 32–40px | 2px |
| Badge / inline text icons | 14–16px | 1.5px |
| QuickScan question icons | 20px | 1.5px |
| Trust signal icons | 16px | 1.5px |
| Social media icons | 20px | 1.5px |
| Mobile nav icons | 24px | 2px |
| Close / hamburger icons | 20px | 2px |

---

### Required Icons List

**Navigation & Global UI**
- `menu` — Mobile hamburger trigger
- `x` — Close / dismiss (drawer, modal)
- `chevron-down` — Dropdown triggers, accordion closed state
- `chevron-up` — Accordion open state
- `chevron-right` — Inline CTAs, breadcrumb separators
- `arrow-right` — Primary CTA arrow (button suffix)
- `arrow-up-right` — External links
- `search` — Search (blog/insights)
- `menu-square` — Services dropdown (optional)

**Service Tier Icons (Feature Cards)**
- `compass` — Foundation Sprint (diagnostic, orientation)
- `zap` — AI Growth System (automation, acceleration)
- `cpu` — AI-First Operating System (full system, infrastructure)

**AI Maturity Framework Stage Icons**
- `hand` — Manual stage
- `wand-2` — Assisted stage
- `bot` — Automated stage *(Note: use abstract/geometric bot, not humanoid robot)*
- `infinity` — Autonomous stage

**QuickScan Assessment**
- `clipboard-list` — Assessment / questionnaire
- `activity` — Operations dimension
- `megaphone` — Marketing dimension
- `globe` — Digital dimension
- `bar-chart-2` — Results / scoring
- `check-circle` — Completion / success state
- `circle` — Unselected radio (assessment options)
- `check-circle-2` — Selected radio (assessment options)
- `arrow-left` — Back navigation (assessment)

**Trust Signals & Social Proof**
- `shield-check` — No obligation / security
- `lock` — Privacy / private results
- `users` — "200+ assessments taken" signal
- `star` — Ratings/testimonial decoration (use sparingly)
- `award` — Authority / credentialing

**Value / KPI Communication**
- `trending-up` — Revenue growth, positive KPI
- `clock` — Time savings, speed KPIs
- `target` — Measurable outcomes, goal alignment
- `layers` — System architecture, multi-layer solutions
- `git-branch` — Workflow, process branching
- `database` — Data systems, operations
- `settings-2` — Configuration, automation setup
- `repeat` — Recurring process, automation loops
- `percent` — ROI, efficiency percentages

**Contact & Forms**
- `mail` — Email contact
- `phone` — Phone contact
- `map-pin` — Location (Central Illinois / St. Louis)
- `calendar` — Book a call / scheduling
- `send` — Form submit

**Social Media**
- `linkedin` — LinkedIn (primary social channel for B2B)
- `twitter` or `x` — X/Twitter (if used)
- `youtube` — YouTube (if video content is published)

**Blog / Content**
- `book-open` — Blog, resources, insights
- `tag` — Content categories
- `clock-3` — Read time estimate
- `rss` — RSS feed (optional)
- `share-2` — Social sharing

**Feedback / Status**
- `check` — Success / complete
- `alert-triangle` — Warning
- `alert-circle` — Error
- `info` — Informational tooltip
- `loader-2` — Loading state (animated spin)
- `plus-circle` — Accordion expand
- `minus-circle` — Accordion collapse

---

## Illustration Briefs

### Overall Illustration Direction

Illustrations for Blackwell Digital are **data visualization and system diagram style** — not character-based, not isometric city illustrations, not abstract blobs. All illustrations serve a functional purpose: explaining a framework, showing a process, or visualizing a score. They use the brand color palette exclusively (#0ea5e9, #22d3ee, rgba values for depth) against dark backgrounds.

**What to avoid:** Cartoon characters. Humanoid robots. Neural network "brain" graphics. Generic gear or lightbulb metaphors. Anything that appears on every other AI company's website.

---

**ILLUS-001 — Homepage Hero Data Visualization Graphic**

- **Style:** SVG or canvas-based animated diagram. Abstract maturity progression arc with interconnected nodes. Resembles a sophisticated dashboard element or intelligence map — not clip art.
- **Subject:** Animated representation of the AI Maturity framework — four stages shown as nodes on an arc, with data flow indicators between them. Uses electric-blue (#0ea5e9) and cyan (#22d3ee) on transparent/dark background.
- **Dimensions:** 500 × 500px SVG container, displayed in hero right column (desktop only).
- **Where Used:** Homepage hero, right column, desktop breakpoint only. Hidden on mobile.
- **Animation:** Subtle — nodes pulse gently, arc draws in on page load. Must respect `prefers-reduced-motion` (static fallback).
- **Accessibility:** `aria-hidden="true"` — purely decorative. Score/stage information communicated via page text.
- **Delivery:** SVG (inline React component) with optional Framer Motion animation layer.

---

**ILLUS-002 — AI Maturity Framework Diagram**

- **Style:** Four-stage progression diagram. Clean, linear or arc-based layout. Each stage (Manual → Assisted → Automated → Autonomous) shown as a distinct node with connecting path. Should feel like a consulting deliverable — precise, professional, not a PowerPoint template.
- **Subject:** The four AI maturity stages with visual distinction between them. Stage 1 is dim/low-lit; Stage 4 is fully illuminated with peak electric-blue intensity — progression from dark to bright communicates growth visually.
- **Dimensions:** 1000 × 400px SVG (horizontal layout for desktop). Also export 400 × 800px vertical variant for mobile.
- **Where Used:** `/framework` page, primary section explaining the maturity model. Also used as a section graphic on the homepage Framework teaser section.
- **Animation:** Optional — stages can illuminate sequentially on scroll entry (Intersection Observer). Respects `prefers-reduced-motion`.
- **Accessibility:** Full text alternative required: a `<table>` or `<dl>` below the SVG with stage names and descriptions. SVG itself is `aria-hidden="true"`.
- **Delivery:** SVG file (also inline-able). Figma source file required for future editing.

---

**ILLUS-003 — Service Tier Ladder Diagram**

- **Style:** Three-step ascending diagram showing the service progression: Foundation Sprint → AI Growth System → AI-First Operating System. Resembles a structured roadmap or investment ladder. Clean geometric steps with label cards at each level.
- **Subject:** Visual communication that services are additive and progressive — each tier builds on the previous. Not optional alternatives, but a growth pathway.
- **Dimensions:** 900 × 500px SVG.
- **Where Used:** `/services` page overview section, potentially homepage services section.
- **Animation:** None required. Static SVG.
- **Accessibility:** `aria-hidden="true"` with accompanying prose description of the service ladder structure.
- **Delivery:** SVG file.

---

**ILLUS-004 — QuickScan Results Score Gauge**

- **Style:** SVG D-shape arc gauge (180° half-circle). Four zones marked: Manual (0–25%), Assisted (25–50%), Automated (50–75%), Autonomous (75–100%). Fill animates from 0 to score on results reveal. Premium, data-display aesthetic.
- **Subject:** AI Maturity Score visualization. The single most critical interactive graphic on the site — it must feel like a real diagnostic output, not a progress bar dressed up as a gauge.
- **Dimensions:** 480 × 280px SVG.
- **Where Used:** `/quickscan/results` page, score display section.
- **Animation:** Arc draws in over 600ms ease-out on results page load. Stage zones glow subtly when crossed during animation. `prefers-reduced-motion`: displays at full score immediately, no animation.
- **Accessibility:** `aria-label="AI Maturity Score: [score]% — [Stage Name]"` on SVG element. Score echoed in screen-reader-visible `<p>` below gauge.
- **Delivery:** SVG React component with props: `score` (0–100), `stage` (string), animated by Framer Motion.

---

**ILLUS-005 — Process Flow Diagram (How It Works)**

- **Style:** Horizontal flow diagram (3–5 steps). Linear left-to-right progression with connecting arrows. Each step: numbered node + label + one-line descriptor. Clean. Consulting-grade.
- **Subject:** The Blackwell Digital engagement process — from initial QuickScan to ongoing optimization. Communicates that working with Blackwell Digital is a structured, repeatable process, not a bespoke mystery.
- **Dimensions:** 1100 × 300px SVG (desktop). 400 × 700px vertical variant (mobile).
- **Where Used:** Homepage "How It Works" section. Possibly `/about` page methodology section.
- **Animation:** Steps illuminate left-to-right on scroll entry. Optional.
- **Accessibility:** `aria-hidden="true"`. Steps described in adjacent numbered list (HTML).
- **Delivery:** SVG file, Figma source.

---

**ILLUS-006 — Open Graph / Social Share Default Image**

- **Style:** Branded card design. Dark background (#070d1a), Blackwell Digital logo centered or left-aligned, site tagline, subtle electric-blue gradient accent bar at bottom. Should look polished when shared on LinkedIn or in Slack previews.
- **Subject:** Default social sharing image when no page-specific image exists.
- **Dimensions:** 1200 × 630px. PNG (for OG compatibility — not WebP for this specific use case, as some scrapers don't support WebP).
- **Where Used:** `og:image` meta tag sitewide (default fallback). Page-specific OG images can override.
- **Animation:** None — static PNG.
- **Accessibility:** N/A (OG images are not screen-reader content).
- **Delivery:** PNG file. Also provide a Figma template so future blog posts and landing pages can generate custom OG images.

---

## Video / Media Requirements

### VIDEO-001 — Homepage "How Blackwell Digital Works" Explainer

- **Subject:** A 60–90 second structured walkthrough of the Blackwell Digital engagement model: the QuickScan diagnostic → Foundation Sprint → Growth System or Full Operating System. Focus on outcomes, not process description. Should answer "What happens when I engage you?" in a confident, non-salesy way.
- **Style:** Screen-recorded dashboard walkthroughs combined with founder talking-head (camera-facing, clean background or branded environment). Professional audio required. No stock footage overlays. Subtitle track required (WCAG — captions for all video content).
- **Length:** 60–90 seconds optimal. Do not exceed 2 minutes.
- **Format:** MP4 (H.264) primary, WebM fallback. 1920 × 1080px (1080p). Compressed for web (target < 10MB).
- **Where Embedded:** Homepage, below-the-fold "How It Works" section. Not autoplay — user-initiated. Poster frame (static image at 0:00) required.
- **Thumbnail/Poster:** Custom designed poster frame (not a random video frame). Should show the founder or a branded title card. 1920 × 1080px WebP.
- **Captions:** `.vtt` subtitle file required. English. Timed to speech.
- **Accessibility:** No autoplay. Visible play controls. Captions togglable. `<video>` element with `aria-label`. Transcript available on page or linked below video.
- **Priority:** Medium — launch can proceed without this asset. Recommended for Phase 2 content rollout.

---

### VIDEO-002 — QuickScan Walkthrough / Demo (Optional)

- **Subject:** A 30–45 second screen recording of the QuickScan assessment being taken — question by question — ending at the results screen. Purpose: reduce friction for users hesitant to start by showing them exactly what the experience looks like.
- **Style:** Screen recording with light narration (or text overlays, no voice). Clean cursor. No editing artifacts. Branded intro card and outro card with CTA ("Take yours at blackwelldigital.com/quickscan").
- **Length:** 30–45 seconds.
- **Format:** MP4 / WebM. Can be delivered as an animated WebP or GIF for very short loops (< 15 seconds) if file size allows under performance budgets.
- **Where Embedded:** `/quickscan` hero section or QuickScan landing page. Could also be embedded in LinkedIn content and outbound sales emails.
- **Captions:** Not required for screen-recording-only version. Required if voice narration is added.
- **Accessibility:** If autoplay loop is used (muted, decorative screen recording only): `role="presentation"`, no controls required if < 5 seconds loop. If > 5 seconds: controls required, no autoplay.
- **Priority:** Low — optional for launch.

---

### ANIMATION-001 — Subtle Background Particle / Grid Animation

- **Subject:** Not a video file — a CSS/canvas animation. A very subtle animated grid or floating particle system on the homepage hero, reinforcing the "intelligence / systems" aesthetic. Extremely low-opacity (2–4%). Must not distract from headline.
- **Style:** Fine grid lines or sparse data-point particles drifting slowly. Colors: rgba(14, 165, 233, 0.03–0.05) only.
- **Where Used:** Homepage hero section only.
- **Performance:** Canvas-based or pure CSS. Target < 5KB JavaScript cost. Must not impact LCP. Must be disabled with `prefers-reduced-motion: reduce`.
- **Delivery:** JavaScript/TypeScript module, not a media file.

---

## Asset Delivery Checklist

| Asset ID | Description | Format | Priority | Status |
|---|---|---|---|---|
| PHOTO-001 | Homepage hero background | WebP 1920×1080 | Critical | ⬜ Needed |
| PHOTO-002 | Stats section texture | WebP 1920×600 | High | ⬜ Needed |
| PHOTO-003 | Results / case study preview | WebP 800×600 | High | ⬜ Needed |
| PHOTO-004 | Services hero | WebP 1440×600 | High | ⬜ Needed |
| PHOTO-005 | Foundation Sprint card | WebP 800×500 | Medium | ⬜ Needed |
| PHOTO-006 | AI Growth System card | WebP 800×500 | Medium | ⬜ Needed |
| PHOTO-007 | AI-First OS card | WebP 800×500 | Medium | ⬜ Needed |
| PHOTO-008 | Framework hero | WebP 1440×600 | Medium | ⬜ Needed |
| PHOTO-009 | Results hero | WebP 1440×500 | Medium | ⬜ Needed |
| PHOTO-010 | Case study portraits (×4–6) | WebP 400×400 | High | ⬜ Needed |
| PHOTO-011 | Team/Founder portrait(s) | WebP 800×1000 + 400×400 | Critical | ⬜ Custom shoot required |
| PHOTO-012 | About culture/process image | WebP 1200×800 | High | ⬜ Custom shoot required |
| PHOTO-013 | Blog cover images (×6–10) | WebP 1200×675 | Medium | ⬜ Needed |
| PHOTO-014 | QuickScan background | WebP 1920×1080 | Low | ⬜ Needed |
| PHOTO-015 | Contact page supporting image | WebP 600×800 | Low | ⬜ Needed |
| ILLUS-001 | Hero data visualization | SVG (animated React) | Critical | ⬜ Custom design required |
|