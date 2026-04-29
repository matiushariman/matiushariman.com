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

Dark mode is managed by a custom `ThemeContext` (`apps/website/Providers/ThemeProvider/ThemeProvider.tsx`) — **not** next-themes or any third-party library. `ThemeProvider` holds `mode` state and exposes `toggleMode`. In `_app.tsx`, a `ThemeContext.Consumer` applies the `dark` class to the root `<main>` via `classcat`. Tailwind is configured with `darkMode: 'class'`.

`ThemeSwitch` reads from `useThemeContext` and renders `<Sun>` or `<Moon>` icon based on current mode.

### Page layout

`index.tsx` is a two-panel layout:
- **Left panel** (fixed sidebar on desktop): `MyProfileGreeting`, `ThemeSwitch`, `MadeWithLove`
- **Right panel** (scrollable): `Socials`, `ThemeSwitch`, `AboutMe`, `WorkExperience`

`ThemeSwitch` is rendered twice — once in the mobile header, once in the desktop sidebar — and each is hidden/shown via Tailwind responsive classes.

### Icon pattern

All icons are inline SVG components in `apps/website/components/Icons/`. They extend `SVGProps<SVGSVGElement>` and merge classnames using `classcat`. They implement Tabler Icons paths directly — no icon library import.

### Content as code

Work experience entries are hardcoded in `WorkExperience.tsx` as a `WORK` array. External URLs (company sites, social profiles, news articles) live in `apps/website/constants/URL.ts`.

### Analytics

- **Vercel Analytics**: `<Analytics />` component in `_app.tsx`
- **Google Tag Manager** (`GTM-5TV3K3X`): inline script injected via `_document.tsx`

### Images

`next.config.js` sets `images.unoptimized: true`. Company logos and public assets live in `apps/website/public/`.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
