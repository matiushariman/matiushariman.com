# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All tasks run through NX. Use `pnpm` as the package manager.

```bash
# Dev server
pnpm nx serve website

# Production build
pnpm nx build website

# Run all tests
pnpm nx test website

# Run a single test file
pnpm nx test website --testFile=apps/website/specs/index.spec.tsx

# Lint
pnpm nx lint website
```

## Architecture

NX monorepo with a single Next.js 14 app at `apps/website`. No shared libs currently exist.

### Theme system

Theme is managed by a custom `ThemeContext` (`apps/website/Providers/ThemeProvider/ThemeProvider.tsx`) — **not** next-themes or any third-party library. `ThemeProvider` holds `theme: 'day' | 'night'` state (default `'night'`) and exposes `setTheme`. The exported `THEMES` array drives the UI. In `_app.tsx`, a `ThemeContext.Consumer` sets `data-theme={theme}` on `<div class="app">`.

Theming uses **CSS custom properties** (`--bg`, `--fg`, `--accent`, `--border`, etc.) defined per `[data-theme]` selector in `styles.css` — not Tailwind dark classes. Tailwind `darkMode: 'class'` remains in config but is unused by the current theme approach.

`ThemeSelectors` (`apps/website/components/ThemeSelectors/index.tsx`) renders Day/Night toggle buttons and is the primary theme UI. `ThemeSwitch` (Sun/Moon icon) still exists in `components/ThemeSwitch/` but is not used in the current layout.

### Page layout

`index.tsx` is a two-panel layout:
- **Left panel** (sticky sidebar on desktop, top bar on mobile): avatar (`/avatar.png`), name + role + Singapore location, `NavigationTabs`, inline social icon links (LinkedIn, GitHub), `ThemeSelectors`
- **Right panel** (scrollable): 4 `<section class="section">` divs — `#about` (`AboutMe`), `#experience` (`WorkExperience`), `#skills` (`Skills`), `#contact` (`Contact`)

Sections fade in via CSS (`.section` → `.section.visible`) triggered by `IntersectionObserver` in `NavigationTabs`.

### Navigation

`NavigationTabs` (`apps/website/components/NavigationTabs/index.tsx`) uses dual `IntersectionObserver`:
- **fade observer** (threshold 0.08): adds `.visible` class to `.section` elements
- **nav observer** (threshold 0.4): tracks `activeSection` state to highlight active nav link

### Components

| Component | Path | Purpose |
|-----------|------|---------|
| `NavigationTabs` | `components/NavigationTabs/index.tsx` | Scroll-spy nav |
| `Skills` | `components/Skills/Skills.tsx` | Skill groups grid; hardcoded `SKILL_GROUPS` array (4 groups) |
| `Contact` | `components/Contact/Contact.tsx` | LinkedIn/GitHub contact cards; inline `ArrowIcon` |
| `CompanyImage` | `components/CompanyImage/CompanyImage.tsx` | Hover-scale company logo wrapper |
| `ThemeSelectors` | `components/ThemeSelectors/index.tsx` | Day/Night theme buttons |
| `AboutMe` | `components/AboutMe/AboutMe.tsx` | About section |
| `WorkExperience` | `components/WorkExperience/WorkExperience.tsx` | Work history; hardcoded `WORK` array |

Legacy components (`ThemeSwitch`, `MyProfileGreeting`, `MadeWithLove`, `Socials`, `SocialLink`) exist in `components/` but are not rendered in `index.tsx`.

### Icon pattern

Reusable icon components live in `apps/website/components/Icons/` (Sun, Moon, Heart, Github, Linkedin, MapPin). They extend `SVGProps<SVGSVGElement>` and use `classcat` for className merging. Some newer components (`Contact`, `index.tsx`) inline SVG paths directly instead of importing these components.

### Content as code

Work experience entries are hardcoded in `WorkExperience.tsx` as a `WORK` array. External URLs (company sites, social profiles, news articles) live in `apps/website/constants/URL.ts`.

### Analytics

- **Vercel Analytics**: `<Analytics />` from `@vercel/analytics/react` in `_app.tsx`
- **Vercel Speed Insights**: `<SpeedInsights />` from `@vercel/speed-insights/next` in `_app.tsx`
- **Google Tag Manager** (`GTM-5TV3K3X`): inline script injected via `_document.tsx`

### Images

`next.config.js` sets `images.unoptimized: true`. Company logos and public assets live in `apps/website/public/`.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
