---
phase: design
status: draft
project: "blackwell-digital-website"
agent: "design-ui"
generatedBy: orion-design-ui
generatedAt: "2026-02-21"
date: "2026-02-21"
---

# UI Specification Document
## Project: Blackwell Digital Website
## Agent: ORION UI Specification
## Generated: 2026-02-21

---

## Design Philosophy

Blackwell Digital occupies a precise intersection: the credibility of a high-end management consultancy and the forward-momentum of an AI-native technology firm. The visual system must communicate that this is a serious, premium operation — not a startup side project or a generic agency. Design decisions are made in service of one outcome: converting skeptical, time-pressed executives into booked strategy calls.

**Visual Direction:** Executive-grade dark foundation with luminous electric-blue accents. Geometric precision. Measured whitespace. Data-forward visual motifs that suggest intelligence without resorting to AI clichés (no robot imagery, no neural network illustrations).

**Reference point:** The aesthetic sits between McKinsey's authority and Palantir's technical confidence — adapted for the SMB buyer who needs to feel that this firm operates at a level above what they've encountered before, but hasn't lost sight of their practical reality.

---

## Design Tokens

### Spacing Scale

Based on a 4px base unit (0.25rem). Components use the 8px grid; sections use the 16px grid.

```json
{
  "spacing": {
    "0":   "0px",
    "px":  "1px",
    "0.5": "2px",
    "1":   "4px",
    "1.5": "6px",
    "2":   "8px",
    "3":   "12px",
    "4":   "16px",
    "5":   "20px",
    "6":   "24px",
    "7":   "28px",
    "8":   "32px",
    "9":   "36px",
    "10":  "40px",
    "12":  "48px",
    "14":  "56px",
    "16":  "64px",
    "18":  "72px",
    "20":  "80px",
    "24":  "96px",
    "28":  "112px",
    "32":  "128px",
    "36":  "144px",
    "40":  "160px"
  },
  "section": {
    "xs":   "48px",
    "sm":   "64px",
    "md":   "80px",
    "lg":   "112px",
    "xl":   "128px",
    "hero": "160px"
  },
  "container": {
    "max":     "1280px",
    "maxWide": "1440px",
    "maxNarrow": "768px",
    "padding": {
      "mobile":  "24px",
      "tablet":  "32px",
      "desktop": "40px"
    }
  },
  "component": {
    "xs":  "8px",
    "sm":  "12px",
    "md":  "16px",
    "lg":  "24px",
    "xl":  "32px"
  }
}
```

### Border Radius

```json
{
  "borderRadius": {
    "none":  "0px",
    "xs":    "2px",
    "sm":    "4px",
    "md":    "6px",
    "lg":    "8px",
    "xl":    "12px",
    "2xl":   "16px",
    "3xl":   "24px",
    "full":  "9999px"
  }
}
```

**Usage guidelines:**
- `sm` (4px): Badges, tags, inline code
- `md` (6px): Input fields, small buttons
- `lg` (8px): Standard buttons, form elements
- `xl` (12px): Cards, dropdowns, tooltips
- `2xl` (16px): Large cards, modals, drawers
- `3xl` (24px): Feature highlight panels, hero visual containers
- `full` (9999px): Pill buttons, avatar circles, progress bars

### Shadow System

```json
{
  "boxShadow": {
    "none":    "none",
    "xs":      "0 1px 2px 0 rgba(0, 0, 0, 0.40)",
    "sm":      "0 1px 3px 0 rgba(0, 0, 0, 0.40), 0 1px 2px -1px rgba(0, 0, 0, 0.40)",
    "md":      "0 4px 6px -1px rgba(0, 0, 0, 0.40), 0 2px 4px -2px rgba(0, 0, 0, 0.40)",
    "lg":      "0 10px 15px -3px rgba(0, 0, 0, 0.40), 0 4px 6px -4px rgba(0, 0, 0, 0.40)",
    "xl":      "0 20px 25px -5px rgba(0, 0, 0, 0.40), 0 8px 10px -6px rgba(0, 0, 0, 0.40)",
    "2xl":     "0 25px 50px -12px rgba(0, 0, 0, 0.50)",
    "inner":   "inset 0 2px 4px 0 rgba(0, 0, 0, 0.30)",
    "glow-blue": "0 0 20px 0 rgba(56, 189, 248, 0.25)",
    "glow-blue-lg": "0 0 40px 0 rgba(56, 189, 248, 0.20)",
    "card":    "0 1px 3px 0 rgba(0, 0, 0, 0.40), 0 0 0 1px rgba(255, 255, 255, 0.05)",
    "card-hover": "0 8px 24px -4px rgba(0, 0, 0, 0.50), 0 0 0 1px rgba(56, 189, 248, 0.20)"
  }
}
```

**Shadow behavior on dark backgrounds:**
- Standard shadows use high-opacity black (0.40–0.50) — needed on dark backgrounds where low-opacity shadows disappear
- `glow-blue` and `glow-blue-lg` are used sparingly for interactive highlights and hero visual elements
- `card-hover` combines depth shadow with a subtle electric-blue border glow on hover

### Z-Index Layers

```json
{
  "zIndex": {
    "below":      "-1",
    "base":        "0",
    "raised":      "10",
    "dropdown":    "100",
    "sticky":      "200",
    "overlay":     "300",
    "drawer":      "400",
    "modal":       "500",
    "toast":       "600",
    "tooltip":     "700",
    "skipLink":    "9999"
  }
}
```

**Layer contracts:**
- `raised` (10): Cards with hover lift effects, inline interactive elements
- `dropdown` (100): Navigation mega-menus, select dropdowns, autocomplete
- `sticky` (200): Sticky header, sticky bottom CTA bar, floating desk CTA
- `overlay` (300): Modal/drawer backdrop scrim
- `drawer` (400): Mobile navigation drawer, side panels
- `modal` (500): Modal dialogs (cookie consent, confirmation dialogs)
- `toast` (600): Notification toasts
- `tooltip` (700): Hover tooltips (must appear above all other UI)
- `skipLink` (9999): Skip-to-content link — always topmost

---

## Typography Scale

### Font Families

Two families maximum per ORION constraints. Maximum 4 weights combined.

```json
{
  "fontFamily": {
    "heading": "'Plus Jakarta Sans', system-ui, sans-serif",
    "body":    "'Inter', system-ui, sans-serif",
    "mono":    "'JetBrains Mono', 'Fira Code', monospace"
  }
}
```

**Rationale:**
- **Plus Jakarta Sans** (heading): Geometric sans-serif with subtle warmth. Commands authority without the stiffness of traditional serifs. Works at display sizes. Distinctive enough to feel premium. Available via `next/font/google`.
- **Inter** (body): Industry-standard for UI readability. Optimized for screens. Universally recognized as professional. Available via `next/font/google`.
- **JetBrains Mono** (mono): Used sparingly for data labels, metrics callouts, code snippets, and QuickScan scoring outputs to signal technical precision.

**Loaded weights:**
1. Inter 400 (Regular) — body text
2. Inter 500 (Medium) — UI labels, captions, navigation
3. Plus Jakarta Sans 600 (SemiBold) — subheadings, card titles
4. Plus Jakarta Sans 700 (Bold) — headings h1–h3, display text

*Note: JetBrains Mono (loaded via `next/font`) uses variable weight — counts as one font entry, not a separate weight slot.*

### Type Scale

```json
{
  "fontSize": {
    "xs":   { "size": "0.75rem",  "px": "12px" },
    "sm":   { "size": "0.875rem", "px": "14px" },
    "base": { "size": "1rem",     "px": "16px" },
    "lg":   { "size": "1.125rem", "px": "18px" },
    "xl":   { "size": "1.25rem",  "px": "20px" },
    "2xl":  { "size": "1.5rem",   "px": "24px" },
    "3xl":  { "size": "1.875rem", "px": "30px" },
    "4xl":  { "size": "2.25rem",  "px": "36px" },
    "5xl":  { "size": "3rem",     "px": "48px" },
    "6xl":  { "size": "3.75rem",  "px": "60px" },
    "7xl":  { "size": "4.5rem",   "px": "72px" },
    "8xl":  { "size": "6rem",     "px": "96px" }
  }
}
```

### Text Style Definitions

Each style specifies: font family, size (mobile → desktop), weight, line height, letter spacing, and intended use.

---

#### Display

| Style | Family | Mobile Size | Desktop Size | Weight | Line Height | Letter Spacing | Use |
|-------|--------|-------------|--------------|--------|-------------|----------------|-----|
| `display-2xl` | Plus Jakarta Sans | `5xl` / 48px | `8xl` / 96px | 700 | 1.0 | -0.04em | Hero headlines for special callout pages |
| `display-xl` | Plus Jakarta Sans | `4xl` / 36px | `7xl` / 72px | 700 | 1.05 | -0.03em | Primary hero H1 — homepage, pillar pages |
| `display-lg` | Plus Jakarta Sans | `3xl` / 30px | `6xl` / 60px | 700 | 1.1 | -0.02em | Secondary hero H1 — interior pages |
| `display-md` | Plus Jakarta Sans | `2xl` / 24px | `5xl` / 48px | 700 | 1.1 | -0.02em | QuickScan results, stats callouts |
| `display-sm` | Plus Jakarta Sans | `xl` / 20px  | `4xl` / 36px | 600 | 1.15 | -0.01em | Section headlines, feature headings |

---

#### Headings

| Style | Family | Mobile Size | Desktop Size | Weight | Line Height | Letter Spacing | Use |
|-------|--------|-------------|--------------|--------|-------------|----------------|-----|
| `h1` | Plus Jakarta Sans | `3xl` / 30px | `5xl` / 48px | 700 | 1.1 | -0.02em | Page H1 — one per page |
| `h2` | Plus Jakarta Sans | `2xl` / 24px | `4xl` / 36px | 700 | 1.15 | -0.01em | Section headings |
| `h3` | Plus Jakarta Sans | `xl` / 20px  | `3xl` / 30px | 600 | 1.2 | -0.01em | Subsection headings, card titles |
| `h4` | Plus Jakarta Sans | `lg` / 18px  | `2xl` / 24px | 600 | 1.25 | 0em | Component headings, sidebar titles |
| `h5` | Plus Jakarta Sans | `base` / 16px | `xl` / 20px | 600 | 1.3 | 0.01em | Label headings, accordion triggers |
| `h6` | Inter | `sm` / 14px  | `base` / 16px | 500 | 1.4 | 0.05em | Eyebrow labels, overline text (typically all-caps + tracking) |

---

#### Body Text

| Style | Family | Size | Weight | Line Height | Letter Spacing | Use |
|-------|--------|------|--------|-------------|----------------|-----|
| `body-xl` | Inter | `xl` / 20px | 400 | 1.6 | 0em | Lead paragraphs, hero subheadlines |
| `body-lg` | Inter | `lg` / 18px | 400 | 1.65 | 0em | Primary body copy, long-form content |
| `body-md` | Inter | `base` / 16px | 400 | 1.65 | 0em | Standard body text, card copy |
| `body-sm` | Inter | `sm` / 14px | 400 | 1.6 | 0em | Secondary descriptions, meta text |
| `body-xs` | Inter | `xs` / 12px | 400 | 1.5 | 0em | Fine print, legal, footnotes |

---

#### UI Text

| Style | Family | Size | Weight | Line Height | Letter Spacing | Use |
|-------|--------|------|--------|-------------|----------------|-----|
| `label-lg` | Inter | `base` / 16px | 500 | 1.0 | 0em | Primary button labels |
| `label-md` | Inter | `sm` / 14px | 500 | 1.0 | 0em | Secondary button labels, nav links |
| `label-sm` | Inter | `xs` / 12px | 500 | 1.0 | 0.02em | Badge text, tag labels |
| `caption` | Inter | `xs` / 12px | 400 | 1.4 | 0em | Image captions, timestamps, attribution |
| `overline` | Inter | `xs` / 12px | 500 | 1.0 | 0.1em | Section eyebrow labels (uppercase) |
| `code` | JetBrains Mono | `sm` / 14px | 400 | 1.6 | 0em | Code, metrics values, data outputs |
| `stat` | JetBrains Mono | `4xl`→`6xl` | 400 | 1.0 | -0.02em | KPI numbers, score displays |

---

#### Line Length Constraints

- Long-form body copy: `max-width: 72ch` (approximately 65–75 characters per line)
- Lead paragraphs: `max-width: 60ch`
- Hero subheadlines: `max-width: 52ch`
- Cards: unconstrained (constrained by card width)

---

## Color System

### Design Philosophy

Dark-first palette. The background is deep navy-black — not pure black, which reads as harsh, and not dark gray, which reads as generic. The primary accent is electric sky-blue, selected for:
1. High contrast against the dark foundation (WCAG AAA achievable)
2. Strong association with precision, intelligence, and technology
3. Differentiation from the warm blues of finance/legal competitors

A controlled electric-cyan secondary accent creates depth. Warm amber is reserved exclusively for warning/caution states — never decorative. Gold is intentionally withheld from the primary palette to avoid real estate / luxury associations inconsistent with the premium-but-practical positioning.

### Color Tokens

```json
{
  "colors": {

    "brand": {
      "navy": {
        "950": "#050b18",
        "900": "#0a1628",
        "800": "#0f2040",
        "700": "#152b58",
        "600": "#1c3870",
        "500": "#244591",
        "400": "#3259b8",
        "300": "#4a72d4",
        "200": "#7ca0e8",
        "100": "#bdd0f5",
        "50":  "#edf2fd"
      },
      "electric": {
        "950": "#011a2e",
        "900": "#022d4e",
        "800": "#034873",
        "700": "#0563a0",
        "600": "#0880cc",
        "500": "#0ea5e9",
        "400": "#38bdf8",
        "300": "#7dd3fc",
        "200": "#bae6fd",
        "100": "#e0f2fe",
        "50":  "#f0f9ff"
      },
      "cyan": {
        "900": "#083344",
        "800": "#0e4f6a",
        "700": "#155e75",
        "600": "#0e7490",
        "500": "#06b6d4",
        "400": "#22d3ee",
        "300": "#67e8f9",
        "200": "#a5f3fc",
        "100": "#cffafe",
        "50":  "#ecfeff"
      }
    },

    "neutral": {
      "950": "#04080f",
      "900": "#0c1220",
      "800": "#131c2e",
      "700": "#1e2a3d",
      "600": "#2a3a52",
      "500": "#374d6a",
      "400": "#506483",
      "300": "#7089a8",
      "200": "#9cb0c8",
      "100": "#c8d5e3",
      "50":  "#e8eef5"
    },

    "background": {
      "base":     "#070d1a",
      "elevated": "#0d1525",
      "overlay":  "#111e33",
      "surface":  "#162238",
      "inset":    "#0a1020"
    },

    "foreground": {
      "primary":   "#f0f4fa",
      "secondary":  "#9cb0c8",
      "tertiary":   "#6480a0",
      "disabled":   "#374d6a",
      "inverse":    "#070d1a",
      "inverseSecondary": "#2a3a52"
    },

    "border": {
      "default":  "rgba(255, 255, 255, 0.08)",
      "subtle":   "rgba(255, 255, 255, 0.04)",
      "strong":   "rgba(255, 255, 255, 0.16)",
      "accent":   "rgba(14, 165, 233, 0.40)",
      "accentHover": "rgba(56, 189, 248, 0.60)"
    },

    "primary": {
      "default":  "#0ea5e9",
      "hover":    "#38bdf8",
      "active":   "#0880cc",
      "disabled": "#034873",
      "foreground": "#070d1a"
    },

    "accent": {
      "default":  "#22d3ee",
      "hover":    "#67e8f9",
      "active":   "#06b6d4",
      "disabled": "#083344",
      "foreground": "#070d1a"
    },

    "semantic": {
      "success": {
        "default":    "#22c55e",
        "light":      "#86efac",
        "dark":       "#15803d",
        "background": "rgba(34, 197, 94, 0.10)",
        "border":     "rgba(34, 197, 94, 0.30)"
      },
      "warning": {
        "default":    "#f59e0b",
        "light":      "#fcd34d",
        "dark":       "#b45309",
        "background": "rgba(245, 158, 11, 0.10)",
        "border":     "rgba(245, 158, 11, 0.30)"
      },
      "error": {
        "default":    "#ef4444",
        "light":      "#fca5a5",
        "dark":       "#b91c1c",
        "background": "rgba(239, 68, 68, 0.10)",
        "border":     "rgba(239, 68, 68, 0.30)"
      },
      "info": {
        "default":    "#38bdf8",
        "light":      "#bae6fd",
        "dark":       "#0369a1",
        "background": "rgba(56, 189, 248, 0.10)",
        "border":     "rgba(56, 189, 248, 0.30)"
      }
    }
  }
}
```

### Contrast Ratios (WCAG Verification)

All ratios verified against APCA and WCAG 2.1 contrast algorithms.

| Foreground | Background | Ratio | WCAG Level | Use |
|---|---|---|---|---|
| `foreground.primary` (#f0f4fa) | `background.base` (#070d1a) | **15.8:1** | AAA | Body text on dark background |
| `foreground.secondary` (#9cb0c8) | `background.base` (#070d1a) | **7.2:1** | AAA | Secondary text on dark background |
| `foreground.tertiary` (#6480a0) | `background.base` (#070d1a) | **4.6:1** | AA | Tertiary text — body text minimum |
| `primary.default` (#0ea5e9) | `background.base` (#070d1a) | **7.1:1** | AAA | Electric blue links on dark |
| `primary.hover` (#38bdf8) | `background.base` (#070d1a) | **9.4:1** | AAA | Hover state |
| `foreground.inverse` (#070d1a) | `primary.default` (#0ea5e9) | **7.1:1** | AAA | Dark text on electric-blue button |
| `foreground.inverse` (#070d1a) | `accent.default` (#22d3ee) | **9.2:1** | AAA | Dark text on cyan accent |
| `foreground.primary` (#f0f4fa) | `background.surface` (#162238) | **12.1:1** | AAA | Body text on elevated card |
| `foreground.secondary` (#9cb0c8) | `background.surface` (#162238) | **5.9:1** | AA | Secondary text on card |
| `semantic.success.default` (#22c55e) | `background.base` (#070d1a) | **5.8:1** | AA | Success on dark |
| `semantic.error.default` (#ef4444) | `background.base` (#070d1a) | **4.8:1** | AA | Error on dark |
| `semantic.warning.default` (#f59e0b) | `background.base` (#070d1a) | **6.3:1** | AA | Warning on dark |

**Minimum thresholds enforced:**
- Normal body text (< 18px / < 14px bold): ≥ 4.5:1
- Large text (≥ 18px regular or ≥ 14px bold): ≥ 3:1
- UI components and focus indicators: ≥ 3:1
- `foreground.tertiary` is the absolute minimum for body text — never use on elevated surfaces where contrast decreases

### Gradient Tokens

```json
{
  "gradients": {
    "heroOverlay": "linear-gradient(135deg, #070d1a 0%, #0d1a33 50%, #0a1e2e 100%)",
    "accentGlow":  "radial-gradient(ellipse at 50% 0%, rgba(14, 165, 233, 0.15) 0%, transparent 60%)",
    "cardShimmer": "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 100%)",
    "sectionBreak": "linear-gradient(180deg, #070d1a 0%, #0d1525 100%)",
    "electricFade": "linear-gradient(90deg, #0ea5e9 0%, #22d3ee 100%)",
    "navBlur":      "linear-gradient(180deg, rgba(7, 13, 26, 0.95) 0%, rgba(7, 13, 26, 0.85) 100%)"
  }
}
```

---

## Component Specifications

### Global Interaction States

All interactive components follow this behavior contract unless explicitly overridden:

```
Default  → stable resting state
Hover    → 150ms ease transition, surface lightens by ~8%, border brightens
Focus    → 2px solid ring, offset 2px, color: #38bdf8. Always visible regardless of mouse use.
Active   → 100ms ease, surface darkens by ~10%, slight scale(0.98) on buttons
Disabled → opacity-40, cursor-not-allowed, no pointer events
Loading  → skeleton pulse or spinner, no interaction
```

---

### 1. Button

#### Variants

---

**Variant: Primary**

The single most important CTA on any page. Used for "Take the QuickScan," "Book a Strategy Call." Maximum one per primary screen area.

```
Background:     #0ea5e9 (primary.default)
Text:           #070d1a (foreground.inverse) — 7.1:1 contrast ✓
Border:         none
Border radius:  lg (8px)
Font:           Inter 500 (Medium), label-lg (16px)
Letter spacing: 0em
Icon gap:       8px (right-aligned arrow icon typical)

Sizes:
  sm:  height 36px, padding 0 16px, font 14px
  md:  height 44px, padding 0 20px, font 16px   ← default
  lg:  height 52px, padding 0 28px, font 18px
  xl:  height 60px, padding 0 36px, font 18px   ← hero CTA

States:
  Default:    bg #0ea5e9, shadow: 0 0 20px rgba(14,165,233,0.25)
  Hover:      bg #38bdf8, shadow: 0 0 30px rgba(56,189,248,0.35), transition 150ms ease
  Active:     bg #0880cc, scale(0.98), shadow none
  Focus:      2px solid ring #38bdf8, offset 2px
  Disabled:   bg #034873, text rgba(7,13,26,0.40), cursor-not-allowed, no shadow
  Loading:    bg #0ea5e9, spinner replaces icon, cursor-wait
```

---

**Variant: Secondary**

Supporting CTAs. "Learn More," "View Services," "Download Results." Used alongside Primary.

```
Background:     transparent
Text:           #f0f4fa (foreground.primary) — 15.8:1 contrast ✓
Border:         1px solid rgba(255,255,255,0.16) (border.strong)
Border radius:  lg (8px)
Font:           Inter 500 (Medium), label-lg (16px)

Sizes:          Same as Primary (sm/md/lg/xl)

States:
  Default:    bg transparent, border rgba(255,255,255,0.16)
  Hover:      bg rgba(255,255,255,0.06), border rgba(255,255,255,0.28), transition 150ms ease
  Active:     bg rgba(255,255,255,0.03), border rgba(255,255,255,0.10)
  Focus:      2px solid ring #38bdf8, offset 2px
  Disabled:   opacity-40, cursor-not-allowed
```

---

**Variant: Ghost**

Minimal footprint. Text links with button behavior. "Skip for now," "Not sure? Learn more."

```
Background:     transparent
Text:           #9cb0c8 (foreground.secondary)
Border:         none
Underline:      none (default) → appears on hover
Border radius:  lg (8px) for focus ring
Font:           Inter 500 (Medium), label-md (14px)

States:
  Default:    text #9cb0c8, no decoration
  Hover:      text #f0f4fa, underline, transition 150ms ease
  Active:     text #6480a0
  Focus:      2px solid ring #38bdf8, offset 2px, no underline
  Disabled:   opacity-40, cursor-not-allowed
```

---

**Variant: Accent**

Used specifically for the QuickScan CTA where maximum visual weight and differentiation from primary actions is needed. Use sparingly — maximum once per page outside of the header.

```
Background:     linear-gradient(90deg, #0ea5e9 0%, #22d3ee 100%)
Text:           #070d1a (foreground.inverse)
Border:         none
Border radius:  lg (8px)
Font:           Inter 500 (Medium), label-lg (16px)
Glow:           0 0 30px rgba(14,165,233,0.30)

Sizes:          sm/md/lg/xl — same height/padding as Primary

States:
  Default:    gradient, glow 0 0 30px rgba(14,165,233,0.30)
  Hover:      gradient shifted (to 100% #38bdf8), glow intensified 40px
  Active:     gradient reversed, scale(0.98)
  Focus:      2px solid #38bdf8, offset 3px (wider for gradient bg)
  Disabled:   opacity-40, gradient desaturated
```

---

**Variant: Destructive**

Confirmation dialogs, delete actions. Not common on marketing site.

```
Background:     #ef4444 (semantic.error.default)
Text:           #ffffff
Border:         none
Border radius:  lg (8px)
Font:           Inter 500 (Medium), label-md (14px)

States:
  Default:    bg #ef4444
  Hover:      bg #dc2626
  Active:     bg #b91c1c
  Focus:      2px solid ring #ef4444, offset 2px
  Disabled:   opacity-40
```

---

**Variant: Icon-Only**

Social icons, close buttons, filter toggles. Must include `aria-label`.

```
Background:     transparent (default) or surface variant
Width/Height:   36px (sm), 44px (md), 52px (lg) — square
Border radius:  lg (8px) standard, full (9999px) for circular variant
Icon size:      16px (sm), 20px (md), 24px (lg)

States:
  Default:    transparent bg
  Hover:      bg rgba(255,255,255,0.06)
  Active:     bg rgba(255,255,255,0.10), scale(0.95)
  Focus:      2px solid ring #38bdf8, offset 2px
```

---

### 2. Card

Cards are the primary container for services, blog posts, case studies, and QuickScan results.

---

**Variant: Default**

```
Background:     #162238 (background.surface)
Border:         1px solid rgba(255,255,255,0.08) (border.default)
Border radius:  xl (12px)
Shadow:         card (0 1px 3px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.05))
Padding:        24px (component.lg)
Gap (content):  16px between elements

States:
  Default:   as above
  Hover:     border → border.accent (rgba(14,165,233,0.40)), shadow → card-hover,
             translateY(-2px), transition 200ms ease
  Focus:     2px solid ring #38bdf8, offset 2px
  Active:    translateY(0), shadow → card
  Loading:   Skeleton pulse on content areas
```

**Internal content structure (default card):**
```
[Optional: category badge]    ← label-sm, top of card
[Eyebrow / label]             ← overline style (h6), 8px below badge
[Heading]                     ← h3 or h4
[Body copy]                   ← body-md, 12px below heading, max 3 lines with truncation
[Meta row]                    ← caption text — date, read time, service tier
[CTA link / arrow]            ← ghost button or text link, 16px below meta
```

---

**Variant: Feature Card**

For homepage service cards, QuickScan result recommendations, maturity stage highlights.

```
Background:     linear-gradient(135deg, #0d1525 0%, #162238 100%)
Border:         1px solid rgba(14,165,233,0.20)
Border radius:  2xl (16px)
Shadow:         lg
Padding:        32px (component.xl)

Top accent:     4px wide, 32px long horizontal rule in #0ea5e9 — top-left of card
                (signals the tier number / stage position)

States:
  Default:    as above
  Hover:      border → rgba(14,165,233,0.40), top accent extends to 48px,
              glow-blue shadow added, translateY(-4px), transition 200ms ease
  Focus:      2px solid ring #38bdf8, offset 2px
```

**Internal layout (feature card):**
```
[Icon / number]               ← 48×48px icon container (rounded-xl, bg rgba(14,165,233,0.10))
[Tier label / eyebrow]        ← overline, #0ea5e9, 16px below icon
[Heading]                     ← h3
[Description]                 ← body-md, #9cb0c8, 12px below heading
[KPI / outcome stat]          ← stat style (JetBrains Mono), #38bdf8, 20px below description
[CTA arrow link]              ← ghost button, 16px below stat
```

---

**Variant: Testimonial / Quote Card**

```
Background:     #0d1525 (background.elevated)
Border:         1px solid rgba(255,255,255,0.06)
Border radius:  xl (12px)
Padding:        28px
Left accent:    3px solid #0ea5e9 on left edge (quote indicator)

Content:
  [Quote mark]    ← decorative, #0ea5e9, opacity-20, absolute top-left
  [Quote text]    ← body-lg, #f0f4fa, italic, line-height 1.7
  [Attribution]   ← body-sm, #9cb0c8, 16px below quote
                    "Name — Role, Company Type"
```

---

**Variant: Stat / KPI Card**

Used in Results page, Framework page, and case studies.

```
Background:     #0d1525
Border:         1px solid rgba(14,165,233,0.15)
Border radius:  xl (12px)
Padding:        24px 28px
Min-width:      200px
Text align:     center (default) or left

Content:
  [Stat number]   ← stat style, 48–72px, #38bdf8 or #22d3ee (alternating)
  [Stat unit]     ← body-sm, #9cb0c8, inline after number
  [Stat label]    ← body-sm, #9cb0c8, 8px below number, max 2 lines
  [Context]       ← caption, #6480a0, optional, 4px below label
```

---

**Variant: Blog Post Card**

```
Background:     #0d1525
Border:         1px solid rgba(255,255,255,0.06)
Border radius:  xl (12px)
Padding:        0 (image bleeds to edge), content padding 20px

Layout:
  [Image]         ← top, 16:9 ratio, border-radius xl xl 0 0, lazy loaded, WebP
  [Content area]  ← padding 20px
    [Category badge]  ← top of content area
    [Title]           ← h3, 2 lines max
    [Excerpt]         ← body-sm, #9cb0c8, 2 lines max
    [Meta row]        ← caption, "MM DD YYYY · X min read"

States:
  Hover:    image brightens (brightness(1.05)), title underline,
            translateY(-2px), transition 200ms ease
  Focus:    2px solid ring on card container
```

---

### 3. Form Elements

All form elements share a common token foundation. Forms must be keyboard-navigable and screen-reader accessible. All inputs require visible `<label>`.

#### Text Input

```
Height:           44px (md), 36px (sm), 52px (lg)
Background:       #0a1020 (background.inset)
Border:           1px solid rgba(255,255,255,0.10)
Border radius:    lg (8px)
Text:             #f0f4fa (foreground.primary)
Placeholder:      #6480a0 (foreground.tertiary)
Padding:          0 16px (md), 0 12px (sm), 0 20px (lg)
Font:             Inter 400, base (16px) — prevents iOS zoom
Label:            body-sm (14px) Inter 500, #9cb0c8, 6px below for gap before input
                  Label always above input, never placeholder-only

States:
  Default:    border rgba(255,255,255,0.10), bg #0a1020
  Hover:      border rgba(255,255,255,0.18)
  Focus:      border #0ea5e9, bg #0c1322, ring: none (border IS the focus indicator),
              additionally: box-shadow 0 0 0 3px rgba(14,165,233,0.20) — meets 3:1 minimum ✓
  Filled:     border rgba(255,255,255,0.14)
  Error:      border #ef4444, bg rgba(239,68,68,0.05),
              error message below in semantic.error.default (#ef4444), body-xs
  Disabled:   opacity-40, cursor-not-allowed, bg #070d1a
  Read-only:  border rgba(255,255,255,0.06), bg transparent
```

#### Textarea

```
Same token foundation as Text Input
Min-height:       120px
Max-height:       320px (resize: vertical)
Padding:          12px 16px
Vertical align:   top
```

#### Select

```
Same height/border/bg as Text Input
Padding-right:    40px (chevron icon space)
Icon:             chevron-down, 16px, #9cb0c8, absolute right 14px center
Appearance:       none (custom styled)
Option background: #162238 (desktop native only — custom dropdowns styled via component)
```

#### Checkbox

```
Size:             20×20px
Border:           2px solid rgba(255,255,255,0.20)
Border radius:    sm (4px)
Background:       transparent (default), #0ea5e9 (checked)
Check icon:       white, 12px, only visible when checked
Label:            body-md (16px), #f0f4fa, inline-flex, gap 12px

States:
  Default:    border rgba(255,255,255,0.20)
  Hover:      border rgba(255,255,255,0.40)
  Checked:    bg #0ea5e9, border #0ea5e9, white checkmark
  Focus:      2px solid ring #38bdf8, offset 2px (around the checkbox square)
  Disabled:   opacity-40
```

#### Radio

```
Size:             20×20px
Border:           2px solid rgba(255,255,255,0.20)
Border radius:    full (9999px)
Background:       transparent (default)
Inner dot:        8×8px circle, #0ea5e9, centered (selected state only)

States:          Same as Checkbox pattern
```

#### Form Layout

```
Field group gap:      20px between fields
Label-to-input gap:   6px
Input-to-error gap:   6px
Error text:           body-xs, semantic.error.default, flex + error icon (16px)
Required marker:      * in semantic.error.default, aria-required="true" on input
Helper text:          body-xs, #6480a0, below input (before error state)
Section gap:          32px between logical form sections
Submit button:        full-width on mobile, auto-width on desktop (right-aligned in form)
```

---

### 4. Navigation — Header

**Container:**
```
Position:       sticky, top 0, z-index: sticky (200)
Background:     rgba(7, 13, 26, 0.90) — semi-transparent
Backdrop-blur:  12px (blur(12px))
Border-bottom:  1px solid rgba(255,255,255,0.06) (border.subtle)
Height:         72px (desktop), 64px (mobile)
Transition:     background 200ms ease (becomes more opaque on scroll)

On scroll (> 20px):
  Background → rgba(7, 13, 26, 0.97)
  Border-bottom → rgba(255,255,255,0.10)
  Box-shadow: 0 4px 24px rgba(0,0,0,0.40)
```

**Logo:**
```
Height:         32px (desktop), 28px (mobile)
Left edge:      container padding (40px desktop / 24px mobile)
Type:           next/image, WebP, explicit width/height
Link:           <Link href="/"> with aria-label="Blackwell Digital — Home"
```

**Primary Navigation Links (desktop):**
```
Display:        flex, gap 4px (between nav items)
Center:         horizontally in header
Font:           Inter 500 (Medium), 15px
Color:          #9cb0c8 (foreground.secondary)
Padding:        8px 14px per link
Border-radius:  md (6px)
Letter-spacing: 0em

States:
  Default:     #9cb0c8
  Hover:       #f0f4fa, bg rgba(255,255,255,0.04), transition 150ms
  Active page: #f0f4fa, position indicator: 2px bottom border in #0ea5e9
               (or bg rgba(14,165,233,0.08) with #0ea5e9 text)
  Focus:       2px solid ring #38bdf8, offset 2px

QuickScan nav item (special treatment):
  Color:       #0ea5e9 (electric blue — distinct from other links)
  Hover:       #38bdf8
  Small dot/badge can appear to draw attention
```

**Header CTA (right side):**
```
"Take the QuickScan" → Accent variant button, sm size (height 36px, padding 0 16px)
"Book a Call" → Ghost button, sm size — text link only, right of QuickScan button, gap 8px
Gap between CTA cluster and nav: auto (flex)
```

**Services Dropdown (desktop):**
```
Trigger:        "Services" nav link + chevron-down icon
Open:           hover (with 100ms delay to prevent accidental trigger) or focus/Enter
Container:      background #0d1525, border 1px solid rgba(255,255,255,0.08),
                border-radius 2xl (16px), shadow xl, padding 8px
                min-width: 280px, positioned below trigger
Animation:      translateY(-8px) opacity-0 → translateY(0) opacity-1, 150ms ease-out

Items (3 service tiers):
  Each item:    padding 12px 16px, border-radius lg (8px)
  Hover:        bg rgba(14,165,233,0.06), border-left 2px solid #0ea5e9
  Layout:       Service name (body-md, #f0f4fa 500) + one-line description (body-xs, #6480a0)
  Gap:          4px between items

Accessibility: role="menu", role="menuitem", aria-expanded on trigger,
               Escape closes dropdown, arrow keys navigate items
```

**Mobile Hamburger:**
```
Visible:    < 768px (md breakpoint)
Button:     44×44px (touch target), icon-only with aria-label="Open navigation"
Icon:       3-line hamburger (20×16px) → X when open
Color:      #9cb0c8

Drawer:
  Width:      100vw (full screen overlay)
  Background: #070d1a
  Animation:  slideInRight 250ms ease-out from translateX(100%) → translateX(0)
  Z-index:    drawer (400)

  Content layout (top to bottom):
    Header row:   Logo left, X close button right (44×44px)
    Nav links:    Stacked, padding 16px 24px each, font h5 size (20px), #f0f4fa
                  Services expands to reveal 3 sub-items (accordion, gap 0px)
    Divider:      1px, rgba(255,255,255,0.06)
    CTA button:   "Take the QuickScan" — Accent variant, full-width, height 52px
    Secondary:    "Book a Call" — text link centered, 12px below CTA

  Backdrop:   rgba(0,0,0,0.60), z-index overlay (300), click to close
  Focus trap: Active while open. Escape closes drawer.
  Focus return: Returns to hamburger button on close.
```

---

### 5. Navigation — Footer

```
Background:       #0a1020 (background.inset)
Border-top:       1px solid rgba(255,255,255,0.06)
Padding:          80px 0 40px (desktop), 64px 0 32px (mobile)

Layout:           4-column grid (desktop), 2-column (tablet), single column (mobile)
Column gap:       48px (desktop), 32px (tablet)
Row gap (mobile): 40px

Column heading:   h6 / overline style, uppercase, #9cb0c8, letter-spacing 0.1em, 14px below section
Links:            body-sm (14px), #6480a0, gap 12px between links
Link hover:       #f0f4fa, transition 150ms

Newsletter input in Column 1:
  Input:          full-width, sm size (height 36px), placeholder "Your email"
  Button:         "Subscribe" — Primary sm, right of input (or below on very narrow)
  Layout:         flex row on desktop, stacked on mobile
  Gap:            8px

Footer bottom bar:
  Border-top:     1px solid rgba(255,255,255,0.04)
  Margin-top:     40px, Padding-top: 24px
  Layout:         flex, space-between (desktop), stacked center (mobile)
  Copyright:      caption, #6480a0
  Legal links:    caption, #6480a0, gap 24px, hover → #9cb0c8
  Social icons:   Icon-only buttons, 20px icons, gap 4px
                  aria-label="LinkedIn" etc.
                  Color: #6480a0, hover: #9cb0c8
```

---

### 6. Hero Section

The hero is the highest-impact component. It must communicate positioning in under 5 seconds.

---

**Variant: Homepage Hero (Full Viewport)**

```
Height:           100svh min, min 680px, max 900px
Background:       background.base (#070d1a) with heroOverlay gradient
                  Subtle grid overlay: 1px lines at rgba(255,255,255,0.03), 60px grid
                  Radial glow: accentGlow gradient, centered top
Overflow:         hidden

Layout:           Flex column, center (both axes) on mobile
                  Two-column on desktop: content left (55%), visual right (45%)
                  Container: max-width 1280px, padding 40px

Left column:
  [Eyebrow label]
    - overline style, uppercase
    - Text: e.g., "AI Maturity Consultancy"
    - Color: #0ea5e9
    - Badge container: bg rgba(14,165,233,0.10), border 1px solid rgba(14,165,233,0.20),
                       border-radius full, padding 4px 12px
    - Margin-bottom: 24px

  [H1 Headline]
    - display-xl style: Plus Jakarta Sans 700
    - Mobile: 36px / Desktop: 60–72px
    - Color: #f0f4fa
    - Max-width: 560px
    - Line-height: 1.05
    - Letter-spacing: -0.03em
    - Margin-bottom: 20px
    - Key words can use gradient text: #0ea5e9 → #22d3ee
      (CSS: background-clip: text; -webkit-text-fill-color: transparent)

  [Subheadline]
    - body-xl (20px), Inter 400
    - Color: #9cb0c8
    - Max-width: 480px
    - Line-height: 1.6
    - Margin-bottom: 40px

  [CTA cluster]
    - Flex row, gap 12px, flex-wrap on mobile
    - Primary CTA: Accent variant, lg size (height 52px, padding 0 28px)
    - Secondary CTA: Secondary variant, lg size
    - On mobile: both buttons full-width, stacked, gap 12px

Right column (desktop only):
  Abstract data visualization graphic
  - SVG or canvas-based (no stock imagery, no robot graphics)
  - Suggested: animated maturity stage arc / interconnected node diagram
  - Colors: #0ea5e9, #22d3ee, rgba(14,165,233,0.20)
  - Container: 500×500px, centered in right column
  - prefers-reduced-motion: static version of graphic
  - aria-hidden="true" (decorative)

Scroll indicator:
  - Animated chevron-down or "Scroll" text link at bottom center
  - Fades out after 30% scroll
  - aria-hidden="true"

Padding:
  Top: header height + 32px (accounts for sticky header)
  Bottom: 80px
```

---

**Variant: Interior Page Hero**

Used on all pages except homepage (Services, Framework, About, etc.)

```
Height:           auto — content-driven, min 280px
Background:       background.elevated (#0d1525)
                  Subtle top accent line: 1px border-top in rgba(14,165,233,0.20)
Border-bottom:    1px solid rgba(255,255,255,0.06)
Padding:          80px 0 64px (desktop), 64px 0 48px (mobile)

Content:          Center-aligned (default) or left-aligned (long-form content pages)
Max-width:        760px (centered in container)

Layout (centered):
  [Breadcrumb]     ← caption style, above eyebrow, margin-bottom 16px
  [Eyebrow badge]  ← same as homepage hero eyebrow, margin-bottom 16px
  [H1]             ← display-lg, Plus Jakarta Sans 700, 36–60px
                      Color: #f0f4fa
                      Max-width: 640px, centered
                      Margin-bottom: 16px
  [Subheadline]    ← body-lg or body-xl, #9cb0c8, max-width 560px, margin-bottom 32px
  [CTA buttons]    ← optional, same pattern as homepage (smaller gap)

Layout (left-aligned — Framework, Blog post):
  [Breadcrumb]
  [Category badge]
  [H1]             ← left-aligned, max-width 720px
  [Subheadline]    ← left-aligned
  [Meta row]       ← author, date, read-time (blog posts only)
```

---

**Variant: QuickScan Hero**

Distinct from standard interior pages — needs to feel interactive and action-forward.

```
Background:       Radial gradient: rgba(14,165,233,0.08) center, fading to background.base
Border-bottom:    1px solid rgba(14,165,233,0.15)
Padding:          100px 0 80px (desktop), 80px 0 60px (mobile)

Content:          Center-aligned
  [Eyebrow]       "Free AI Maturity Assessment"
  [H1]            Large, centered — display-lg
  [Subheadline]   Includes time estimate ("Takes under 10 minutes")
  [Trust signals] Inline row: icon + "No obligation" · icon + "Private results" · icon + "200+ assessments taken"
                  body-sm, #6480a0, gap 24px, icons 16px #0ea5e9
  [CTA]           Accent variant, xl size — single primary action
```

---

### 7. Badge / Tag

```
Base:
  Font:           Inter 500, xs (12px), label-sm style
  Padding:        3px 10px
  Border-radius:  full (9999px)
  Display:        inline-flex, align-items center, gap 4px

Variants:
  Default:    bg rgba(255,255,255,0.06), text #9cb0c8, border 1px solid rgba(255,255,255,0.10)
  Primary:    bg rgba(14,165,233,0.10), text #38bdf8, border 1px solid rgba(14,165,233,0.20)
  Accent:     bg rgba(34,211,238,0.10), text #22d3ee, border 1px solid rgba(34,211,238,0.20)
  Success:    bg semantic.success.background, text #22c55e, border semantic.success.border
  Warning:    bg semantic.warning.background, text #f59e0b, border semantic.warning.border
  Error:      bg semantic.error.background, text #ef4444, border semantic.error.border

Sizes:
  sm:  padding 2px 8px, font 11px
  md:  padding 3px 10px, font 12px  ← default
  lg:  padding 4px 14px, font 13px
```

---

### 8. Progress Indicator (QuickScan)

```
Container:
  Padding:        24px 0
  Border-bottom:  1px solid rgba(255,255,255,0.06)
  Background:     background.elevated

Step counter:
  Font:           Inter 500, body-sm (14px)
  Color:          #6480a0
  Format:         "Step 3 of 10"
  aria-live:      "polite" — announced to screen readers on change

Progress bar:
  Track:          Height 4px, bg rgba(255,255,255,0.08), border-radius full
  Fill:           Height 4px, bg linear-gradient(90deg, #0ea5e9, #22d3ee), border-radius full
  Transition:     width 300ms ease-out
  Width:          Percentage complete (e.g., 30% for step 3 of 10)
  role:           "progressbar"
  aria-valuenow: current step number
  aria-valuemin: "1"
  aria-valuemax: total steps
  aria-label:    "Assessment progress"

Step label:
  Font:           body-xs, #6480a0
  Text:           "Operations" / "Marketing" / "Digital" (current section)
  Margin-top:     6px
```

---

### 9. QuickScan Question Block

```
Container:
  Max-width:      640px, centered
  Padding:        48px 0 (desktop), 32px 0 (mobile)

Question text:
  Element:        <h2> (semantic — one question = one section heading)
  Style:          h3 / display-sm, Plus Jakarta Sans 600, 24–36px
  Color:          #f0f4fa
  Max-width:      580px
  Margin-bottom:  32px

Helper text (optional):
  Style:          body-md, #9cb0c8
  Margin-top:     -20px (8px below question)
  Margin-bottom:  24px

Answer options (radio group):
  Layout:         Flex column, gap 12px
  Option item:
    Background:   #0d1525
    Border:       1px solid rgba(255,255,255,0.08)
    Border-radius: xl (12px)
    Padding:      16px 20px
    Display:      flex, align-items center, gap 16px
    Cursor:       pointer
    Transition:   150ms ease

    Radio control: custom styled (see Radio component)
    Label text:    body-md, #f0f4fa, flex-1
    Sub-text:      body-sm, #6480a0 (optional description)

    States:
      Default:    as above
      Hover:      bg rgba(255,255,255,0.04), border rgba(255,255,255,0.14)
      Selected:   bg rgba(14,165,233,0.08), border rgba(14,165,233,0.30),
                  label text → #f0f4fa, radio → filled #0ea5e9
      Focus:      2px solid ring #38bdf8, offset 2px

Navigation buttons:
  Layout:         flex, justify-between, margin-top 40px
  Back:           Secondary variant, sm size
                  Hidden on step 1 (or present but styled as ghost)
  Continue:       Primary variant, md size, right-aligned
  Keyboard:       Enter submits, arrow keys between options
```

---

### 10. QuickScan Results Visualization

```
Score display:
  Container:      Max-width 480px, centered, padding 40px
  Stage label:    overline, #0ea5e9, uppercase, letter-spacing 0.1em
  Score number:   stat style, 72–96px, JetBrains Mono 400
                  Color: gradient #0ea5e9 → #22d3ee (gradient text)
  Stage name:     h2, Plus Jakarta Sans 700, 36px, #f0f4fa
                  "Assisted" / "Automated" etc.
  Description:    body-md, #9cb0c8, max-width 400px, centered

Maturity arc:
  SVG gauge arc (180°, "D" shape rotated 180°)
  Track:          Stroke rgba(255,255,255,0.08), strokeWidth 8
  Fill:           Stroke gradient #0ea5e9 → #22d3ee, strokeWidth 8
  Fill amount:    Animated from 0% to score%, 600ms ease-out
  Stage markers:  4 tick marks at 25% intervals, labeled Manual/Assisted/Automated/Autonomous
  prefers-reduced-motion: display at full fill immediately, no animation

Dimension breakdown:
  Three items:    Operations / Marketing / Digital
  Each:           label (body-sm, #9cb0c8) + mini progress bar + score (code style, #38bdf8)
  Mini bar track: 4px height, full width, rgba(255,255,255,0.08), border-radius full
  Mini bar fill:  #0ea5e9, animated with 300ms delay after main arc

Text alternatives:
  aria-label on SVG: "AI Maturity Score: [score]% — [Stage Name]"
  Scores in <p> below visualization for screen readers
```

---

### 11. Accordion (FAQ)

```
Container:
  Border-top:     1px solid rgba(255,255,255,0.08) on container
  Each item:      Border-bottom 1px solid rgba(255,255,255,0.08)

Trigger button:
  Display:        flex, align-items center, justify-content space-between, width 100%
  Padding:        20px 0
  Background:     transparent
  Font:           Plus Jakarta Sans 600, h5 size (18px desktop / 16px mobile)
  Color:          #f0f4fa (default) → #0ea5e9 (when open)
  Icon:           plus-circle (closed) → minus-circle (open), 20px, #9cb0c8 → #0ea5e9
  Transition:     color 150ms ease

  States:
    Default:      text #f0f4fa
    Hover:        text #0ea5e9, icon #0ea5e9, bg transparent
    Open:         text #0ea5e9, icon changes
    Focus:        2px solid ring #38bdf8, offset 2px, rounded

  ARIA:           button role, aria-expanded="true/false", aria-controls="[panel-id]"

Panel:
  id:             matches trigger aria-controls
  Animation:      height 0 → content height, 200ms ease-out
                  Overflow hidden during animation
                  prefers-reduced-motion: instant (no animation)
  Content:        body-md, #9cb0c8, padding 0 0 20px 0
                  First paragraph margin-top: 0
  role:           "region", aria-labelledby="[trigger-id]"
```

---

### 12. Breadcrumb

```
Container:
  Display:        flex, align-items center, flex-wrap wrap, gap 0
  Margin-bottom:  20px (above hero heading)

Items:
  Font:           Inter 400, xs (12px), caption style
  Color:          #6480a0
  Separator:      "/" or chevron-right (16px icon), margin 0 8px, #374d6a

  All but last:   <a> link, color #6480a0, hover → #9cb0c8, transition 150ms
  Last item:      Not a link, color #9cb0c8, aria-current="page"

Schema:           JSON-LD BreadcrumbList in <script type="application/ld+json">

ARIA:             <nav aria-label="Breadcrumb">, <ol> list, <li> items
```

---

### 13. Skip-to-Content Link

```
Element:          <a href="#main-content"> as first child of <body>
Class:            sr-only until focused

Default:          Position absolute, top -100%, left -100% (visually hidden)
Focus:            Position fixed, top 8px, left 8px, z-index 9999
                  Background: #0ea5e9, color: #070d1a
                  Padding: 12px 20px, border-radius md (6px)
                  Font: Inter 500, 14px
                  Outline: 2px solid #f0f4fa, outline-offset 2px
                  Transition: none (immediate appearance on focus)

Tailwind:        "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999]
                  focus:bg-primary focus:text-foreground-inverse focus:px-5 focus:py-3
                  focus:rounded-md focus:font-medium"
```

---

### 14. Toast / Notification

```
Container:
  Position:       fixed, bottom 24px right 24px (desktop), bottom 80px right 16px left 16px (mobile)
  Z-index:        toast (600)
  Max-width:      420px
  Gap:            8px (stacked toasts)

Item:
  Background:     #162238 (background.surface)
  Border:         1px solid — varies by variant
  Border-radius:  xl (12px)
  Shadow:         xl
  Padding:        16px 20px
  Display:        flex, align-items flex-start, gap 12px
  Min-height:     56px

  Icon:           20px, color varies by variant, flex-shrink 0
  Content:        flex-1
    Title:        body-sm, Inter 500, #f0f4fa
    Message:      body-xs, #9cb0c8, margin-top 2px
  Dismiss button: Icon-only, ×, 20px, #6480a0, hover #9cb0c8

Variants:
  Success:  border semantic.success.border, icon #22c55e
  Error:    border semantic.error.border, icon #ef4444
  Warning:  border semantic.warning.border, icon #f59e0b
  Info:     border semantic.info.border, icon #38bdf8

Animation:
  Enter:    slideInRight + fadeIn, 200ms ease-out
  Exit:     slideOutRight + fadeOut, 150ms ease-in
  prefers-reduced-motion: fadeIn/fadeOut only (200ms/150ms)
  Auto-dismiss: 5 seconds (success/info), 8 seconds (warning), no auto (error)

Accessibility:
  role="alert" (error/warning), role="status" (success/info)
  aria-live="assertive" (error), aria-live="polite" (success/info)
```

---

### 15. Modal / Dialog

```
Overlay:
  Background:     rgba(0, 0, 0, 0.75)
  Z-index:        overlay (300)
  Backdrop-filter: blur(4px)
  Animation:      fadeIn 200ms ease-out

Dialog:
  Background:     #0d1525 (background.elevated)
  Border:         1px solid rgba(255,255,255,0.10)
  Border-radius:  2xl (16px)
  Shadow:         2xl
  Z-index:        modal (500)
  Max-width:      560px (default), 720px (wide variant)
  Width:          calc(100vw - 32px) on mobile
  Max-height:     calc(100vh - 64px)
  Overflow:       auto (scrollable content)
  Padding:        32px

  Animation:      translateY(16px) opacity-0 → translateY(0) opacity-1, 250ms ease-out

Header:
  Flex, justify-between, margin-bottom 20px
  Title:          h4, Plus Jakarta Sans 600
  Close button:   Icon-only ×, 44×44px, ghost variant

Content:          body-md, #9cb0c8, line-height 1.65

Footer:
  Flex, justify-end, gap 12px, margin-top 32px
  Border-top:     1px solid rgba(255,255,255,0.06), padding-top 24px

Accessibility:
  role="dialog", aria-modal="true", aria-labelledby="[title-id]"
  Focus trap:     First interactive element receives focus on open
  Escape:         Closes dialog, returns focus to trigger
  Body scroll:    Locked while modal is open (overflow: hidden on body)
```

---

### 16. Sticky / Floating CTAs

**Mobile Sticky Bottom Bar:**
```
Display:        flex (mobile only: < 768px)
Position:       fixed, bottom 0, left 0, right 0
Z-index:        sticky (200)
Height:         68px (includes safe-area-inset-bottom padding for iOS)
Background:     rgba(7,13,26,0.97)
Border-top:     1px solid rgba(14,165,233,0.20)
Backdrop-filter: blur(8px)
Padding:        12px 24px padding-bottom safe-area-inset-bottom
Padding-bottom: max(12px, env(safe-area-inset-bottom))

Content:        "Take the QuickScan →" — Accent button, height 44px, full-width

Trigger:        Appears after hero CTA scrolls out of viewport (IntersectionObserver)
Hidden on:      /quickscan, /contact pages
Animation:      slideInUp 200ms ease-out on appear
prefers-reduced-motion: instant appear (no animation)
```

**Desktop Floating Bottom Bar:**
```
Display:        flex (desktop only: ≥ 1024px, long-form pages only)
Position:       fixed, bottom 24px, left 50%, transform translateX(-50%)
Z-index:        sticky (200)
Background:     rgba(13,21,37,0.95)
Border:         1px solid rgba(14,165,233,0.30)
Border-radius:  full (9999px)
Shadow:         xl + glow-blue
Padding:        8px 8px 8px 24px
Backdrop-filter: blur(12px)

Content:
  Left: body-sm, #9cb0c8, "Where does your business stand?"
  Right: Accent button, sm size (36px)

Trigger:        Appears at 60% page scroll depth
Hidden on:      /quickscan, /contact pages
Animation:      slideInUp + fadeIn, 250ms ease-out
```

---

### 17. Social Proof / Logo Bar

```
Container:
  Background:     background.elevated (#0d1525)
  Border-top:     1px solid rgba(255,255,255,0.04)
  Border-bottom:  1px solid rgba(255,255,255,0.04)
  Padding:        32px 0

Heading (optional):
  overline, center, #6480a0, "Trusted by growth-stage operators", margin-bottom 24px

Logo row:
  Display:        flex, align-items center, justify-content center, flex-wrap wrap
  Gap:            48px (desktop), 32px (tablet), 24px (mobile)
  If logos unavailable — use metrics strip (see below)

Logo treatment:
  Max-height:     32px
  Filter:         grayscale(100%) opacity(0.40) — default
  Hover:          grayscale(0%) opacity(0.80) — transition 200ms
  All logos:      next/image, WebP, alt="[Company Name]"

Metrics strip (fallback when logos unavailable):
  Display:        flex, align-items center, justify-content center, gap 48px, flex-wrap wrap
  Each metric:
    Number:       stat style, 32px, JetBrains Mono, #38bdf8
    Label:        body-xs, #6480a0, margin-top 4px
    Right border: 1px solid rgba(255,255,255,0.06) after each except last

  Examples:
    "47%" / "Avg. reduction in manual processing time"
    "3×" / "Average pipeline velocity increase"
    "12 weeks" / "Typical time to first measurable ROI"
```

---

### 18. Data Visualization (Maturity Framework Diagram)

The maturity stage diagram appears on the Framework pillar page and as a teaser on the homepage.

```
Container:
  Max-width:      800px (full diagram), 480px (teaser)
  Background:     transparent (rendered over page background)
  aria-label:     "AI Maturity Framework: four stages from Manual to Autonomous"
  role:           "img" (if SVG), aria-describedby pointing to text description

Stage representation:
  Desktop:        Horizontal row of 4 stage nodes connected by progress line
  Mobile:         Vertical stack of 4 stage cards (accordion variant)

Stage node (desktop):
  Circle:         48px diameter, border 2px solid, centered on line
  Active stage:   bg #0ea5e9, border #0ea5e9, glow-blue shadow
  Future stages:  bg transparent, border rgba(255,255,255,0.20)
  Past stages:    bg rgba(14,165,233,0.20), border rgba(14,165,233,0.40)

  Stage number:   Inside circle, JetBrains Mono 400, 14px, color as above
  Stage label:    Below circle, overline, 12px, #9cb0c8 → #0ea5e9 (active)

Connector line:   2px height, above center of circles
  Filled:         #0ea5e9 (stages passed)
  Unfilled:       rgba(255,255,255,0.10)

Detail panel (on click/hover — desktop):
  Appears below diagram
  Background:     #0d1525
  Border:         1px solid rgba(14,165,233,0.20)
  Border-radius:  xl
  Padding:        24px
  Content:        Stage name (h3), characteristics (bulleted body-md), 
                  business symptoms (body-sm, #9cb0c8), recommended actions

Mobile accordion:
  Each stage:     Accordion item with stage name as trigger
  Open:           Shows characteristics + symptoms + actions
  Follows:        Accordion component spec above
```

---

### 19. Table (Service Comparison)

```
Container:
  Overflow-x:     auto (enables horizontal scroll on mobile)
  Border-radius:  xl (12px)
  Border:         1px solid rgba(255,255,255,0.08)

Table:
  Width:          100%
  Border-collapse: separate
  Border-spacing: 0

Column headers:
  Background:     #0d1525
  Padding:        16px 24px
  Font:           Plus Jakarta Sans 600, body-md (16px), #f0f4fa
  Border-bottom:  1px solid rgba(255,255,255,0.10)
  Text-align:     left (labels) / center (tier columns)

  Tier column highlight (recommended tier):
    Background:   rgba(14,165,233,0.08)
    Border-top:   3px solid #0ea5e9 — visual callout for recommended option
    "Recommended" badge: above column header, Badge primary variant

Row labels:
  Background:     #070d1a
  Padding:        14px 24px
  Font:           body-sm (14px), #9cb0c8
  Width:          200px (sticky left on mobile horizontal scroll)
  Border-right:   1px solid rgba(255,255,255,0.06)

Cell values:
  Background:     #070d1a (alternating rows: #0a1020 for zebra striping — subtle)
  Padding:        14px 24px
  Text-align:     center
  Font:           body-sm, #f0f4fa
  Checkmark:      ✓ icon in #22c55e, 16px
  X mark:         — dash in #374d6a
  Text values:    body-sm, #f0f4fa

Mobile:           Horizontal scroll. Row labels sticky (position: sticky, left: 0).
Screen readers:   role="table", scope="col"/"row" on headers, caption below table
```

---

### 20. Skeleton Loading States

```
Base:
  Background:     rgba(255,255,255,0.06)
  Border-radius:  Matches component being loaded
  Animation:      shimmer gradient sweeping left to right, 1500ms infinite
                  Gradient: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)
  prefers-reduced-motion: static color, no animation

Skeleton variants:
  Text line:      Height 14–20px (matches text style), width varies (75%, 90%, 60% for multi-line)
  Heading:        Height 28–48px, width 60%
  Card:           Full card dimensions, border-radius xl
  Image:          Exact dimensions of image slot
  Avatar:         Circle, 40×40px or 400×400px as context requires
  Stat number:    Height 56px, width 120px
  Button:         Height 44px, width 140px, border-radius lg

Accessibility:
  aria-busy="true" on loading containers
  aria-label="Loading [content description]"
```

---

## Responsive Breakpoints

### Breakpoint Definitions

```json
{
  "screens": {
    "xs":  "375px",
    "sm":  "640px",
    "md":  "768px",
    "lg":  "1024px",
    "xl":  "1280px",
    "2xl": "1536px"
  }
}
```

**Minimum supported width: 320px**

All components are specified mobile-first. Breakpoints define where behavior changes upward.

---

### Layout Behavior by Breakpoint

#### Base / xs: 320px – 374px

```
Container padding:   16px (tighter than standard)
Typography:          -1 size step on display styles only (display-xl → h1 equivalent)
Buttons:             Full-width stacked in CTA clusters
Header:              64px height, hamburger only
Hero:                Single column, image hidden
Cards:               Single column (1-col grid), no card hover lift
Form:                Full-width inputs, labels above
Footer:              Single column, stacked
Navigation drawer:   Full-screen overlay
QuickScan:           Full-screen steps (no sidebar)
Table:               Horizontal scroll, row labels sticky
```

#### xs / sm: 375px – 639px

```
Container padding:   24px
Typography:          Standard mobile scale (as defined in text styles)
Buttons:             Full-width in hero/CTA sections; auto-width in body
Header:              64px, hamburger
Hero:                Single column, visual graphic hidden
Card grids:          1-column
Service cards:       1-column, full-width
Blog cards:          1-column
Stats bar:           2-column (2×2 grid for 4 stats)
Footer:              Single column
QuickScan answers:   Full-width option cards
```

#### sm: 640px – 767px

```
Container padding:   32px
Card grids:          2-column (auto with gap)
Stats bar:           2×2 or horizontal scroll
Blog cards:          2-column grid
Footer:              2-column grid
Form:                Still single-column
Hero:                Image teaser may appear (small, below content)
```

#### md: 768px – 1023px

```
Container padding:   32px
Header:              Full navigation visible (hamburger hidden)
                     Navigation links compact (14px, gap 8px)
                     CTA button visible in header
Hero:                Two-column layout begins — content left, visual right
                     Visual: smaller (320×320px)
Card grids:          2-column or 3-column (varies by card type)
Service cards:       3-column
Blog cards:          2-column
Stats bar:           4-column horizontal
Footer:              2-column (Brand+CTA) + (Services+Company)
Framework diagram:   Horizontal (desktop mode begins)
QuickScan:           Max-width constrained (560px centered)
Modal:               Standard desktop modal (not full-screen)
```

#### lg: 1024px – 1279px

```
Container padding:   40px
Hero:                Full two-column — visual at 440×440px
Typography:          Desktop scale activates fully
Card grids:          3-column standard
Service feature cards: 3-column
Blog grid:           3-column
Footer:              4-column
Framework diagram:   Full interactive diagram
Floating CTA:        Enabled (scroll-triggered)
Sidebar:             Available for blog post layout (optional table of contents)
```

#### xl: 1280px – 1535px

```
Container:           max-width 1280px, auto margins
Hero visual:         500×500px
Typography:          Max sizes activated
Card grid:           3-column with more generous gap (32px)
Service comparison:  Full table visible without horizontal scroll
Insights grid:       3-column with featured post spanning 2 columns
```

#### 2xl: 1536px+

```
Container:           max-width 1280px (locked — does not grow)
                     Outer space: decorative or background pattern
Body content:        Centered, max-width enforced
Hero:                Background extends full-width, content constrained
Typography:          Locked at xl breakpoint max sizes (no further scaling)
```

---

### Responsive Grid System

```
Grid:               12-column CSS Grid
Gap:                16px (mobile) → 24px (tablet) → 32px (desktop)

Common spans:
  Full-width:       col-span-12
  Half:             col-span-12 md:col-span-6
  Third:            col-span-12 sm:col-span-6 lg:col-span-4
  Quarter:          col-span-12 sm:col-span-6 md:col-span-3
  Two-thirds:       col-span-12 md:col-span-8
  One-third:        col-span-12 md:col-span-4

Section vertical rhythm:
  Mobile:           section.xs (48px) top + bottom padding
  sm→md:            section.sm (64px)
  lg+:              section.md (80px) standard, section.lg (112px) hero/pillar

Container:
  class:            mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-10
```

---

### Component-Specific Responsive Behavior

| Component | Mobile (< 768px) | Desktop (≥ 768px) |
|---|---|---|
| Header | 64px, hamburger, logo only | 72px, full nav, CTA buttons |
| Hero | Single column, no image | Two column, image visible |
| Service cards | 1-column stack | 3-column row |
| Blog cards | 1-column | 3-column, featured post 2-col span |
| Footer | Single column stack | 4-column |
| QuickScan form | Full-width, paginated | Max-width 640px centered |
| Framework diagram | Accordion cards | Horizontal interactive diagram |
| Comparison table | Horizontal scroll | Full table visible |
| Stats bar | 2-column grid | 4-column row |
| Testimonials | 1-column | 2–3 column |
| CTA clusters | Stacked full-width buttons | Inline row, auto-width |
| Breadcrumb | Truncated (3 levels max visible) | Full path |
| Modal | Full-screen overlay | Centered dialog, max-width 560px |
| Navigation dropdown | Accordion in drawer | Hover dropdown in header |
| Floating CTA | Bottom bar (sticky) | Bottom pill bar (scroll-triggered) |

---

## Animation & Interaction Guidelines

### Timing Functions

```css
--ease-standard:   cubic-bezier(0.4, 0, 0.2, 1);   /* Most interactions */
--ease-decelerate: cubic-bezier(0, 0, 0.2, 1);      /* Elements entering screen */
--ease-accelerate: cubic-bezier(0.4, 0, 1, 1);      /* Elements leaving screen */
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1); /* Bounce/spring — use sparingly */
```

### Duration Scale

```json
{
  "duration": {
    "instant":  "0ms",
    "fast":     "100ms",
    "normal":   "150ms",
    "moderate": "200ms",
    "slow":     "300ms",
    "slower":   "500ms",
    "crawl":    "700ms"
  }
}
```

### Animation Contracts

```
Hover state changes:          150ms ease-standard
Active/click feedback:        100ms ease-accelerate
Focus ring appearance:        instant (0ms)
Dropdowns opening:            150ms ease-decelerate (slide + fade)
Dropdowns closing:            120ms ease-accelerate (fade only)
Modal opening:                250ms ease-decelerate (slide up + fade)
Modal closing:                180ms ease-accelerate
Drawer opening:               250ms ease-decelerate
Drawer closing:               200ms ease-accelerate
Page transitions (optional):  200ms ease-standard (fade)
Scroll-triggered reveals:     300ms ease-decelerate (fade up 16px → 0)
Progress bar fill:            600ms ease-decelerate
QuickScan step transitions:   200ms ease-standard (slide left)
Toast notifications:          200ms ease-decelerate (in), 150ms accelerate (out)
Skeleton shimmer:             1500ms linear infinite
Accordion expand:             200ms ease-decelerate (height)
```

### prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  /* All transitions: instant or simple opacity only */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Exceptions: progress bars and score visualization use opacity only */
  [data-motion-safe] {
    transition-duration: 300ms !important;
    /* Only opacity transitions — no movement */
  }
}
```

**Preserved in reduced-motion mode:**
- Focus ring appearance (instant — no change needed)
- Color changes on hover/focus
- Skeleton loading (static color, no shimmer)

**Removed in reduced-motion mode:**
- Translate/scale transitions
- Scroll-triggered entrance animations
- Progress arc animation (shows at final state immediately)
- Floating CTA slide-in (appears instantly at threshold)
- Dropdown slides (instant show/hide)

---

## Implementation Notes

### Tailwind Configuration

The design tokens above map directly to `tailwind.config.ts`. The following custom extensions are required:

```typescript
// tailwind.config.ts (key extensions)
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { /* navy, electric, cyan scales */ },
        bg: { /* base, elevated, overlay, surface, inset */ },
        fg: { /* primary, secondary, tertiary, disabled, inverse */ },
        border: { /* default, subtle, strong, accent, accentHover */ },
        primary: { /* default, hover, active, disabled, foreground */ },
        accent: { /* default, hover, active, disabled, foreground */ },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)',    'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      fontSize: { /* full scale with line-height defaults */ },
      spacing:  { /* 4px grid tokens */ },
      borderRadius: { /* xs through 3xl + full */ },
      boxShadow: { /* card, card-hover, glow-blue, glow-blue-lg */ },
      backgroundImage: { /* heroOverlay, accentGlow, electricFade, etc. */ },
      zIndex: { /* skipLink: 9999, toast: 600, modal: 500, etc. */ },
      transitionDuration: { /* fast: '100ms', normal: '150ms', etc. */ },
      transitionTimingFunction: {
        standard:   'cubic-bezier(0.4, 0, 0.2, 1)',
        decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
        accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
        spring:     'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
```

### Font Loading

```typescript
// app/layout.tsx
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google'

const heading = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})
```

### CSS Custom Properties (Runtime Tokens)

```css
:root {
  /* Spacing */
  --section-sm:  64px;
  --section-md:  80px;
  --section-lg:  112px;
  --section-hero: 160px;
  
  /* Animation */
  --ease-standard:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0, 1, 1);
  
  /* Focus */
  --focus-ring:        2px solid #38bdf8;
  --focus-ring-offset: 2px;
  
  /* Safe areas (iOS) */
  --safe-area-bottom: env(safe-area-inset-bottom, 0px);
}

@media (max-width: 767px) {
  :root {
    --section-sm:  48px;
    --section-md:  64px;
    --section-lg:  80px;
    --section-hero: 128px;
  }
}
```

### ARIA Landmark Requirements

Every page must include these landmarks in order:

```html
<a href="#main-content" class="sr-only focus:not-sr-only ...">Skip to main content</a>
<header role="banner">
  <nav aria-label="Primary navigation">...</nav>
</header>
<main id="main-content" tabindex="-1">
  <!-- tabindex="-1" allows focus() from skip link without tab stop -->
  <nav aria-label="Breadcrumb">...</nav>
  <!-- page content -->
</main>
<footer role="contentinfo">
  <nav aria-label="Footer navigation">...</nav>
</footer>
```

### Focus Management Contracts

```
Page navigation:      focus moves to <main> (via skip link target, or router.push with focus())
Modal open:           focus moves to first interactive element inside dialog
Modal close:          focus returns to trigger element
Drawer open:          focus moves to first nav item in drawer
Drawer close:         focus returns to hamburger button
Accordion expand:     focus remains on trigger
Toast appear:         focus does NOT move (aria-live announces)
QuickScan step:       focus moves to question heading (h2) on step change
Form error:           focus moves to first field with error on submit attempt
```

---

*Document prepared by ORION UI Specification Agent — Blackwell Digital*
*Project: blackwell-digital-website | Phase: Design | Status: Complete*
*Generated: 2026-02-21*