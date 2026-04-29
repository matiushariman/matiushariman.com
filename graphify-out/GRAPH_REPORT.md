# Graph Report - /Users/matiushariman/Coding/matiushariman.com  (2026-04-29)

## Corpus Check
- 29 files · ~132,075 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 103 nodes · 111 edges · 19 communities detected
- Extraction: 67% EXTRACTED · 33% INFERRED · 0% AMBIGUOUS · INFERRED: 37 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]

## God Nodes (most connected - your core abstractions)
1. `matiushariman.com` - 9 edges
2. `Matius Hariman` - 9 edges
3. `About Me Section` - 8 edges
4. `Index Page` - 7 edges
5. `AboutMe Component` - 6 edges
6. `Socials Component` - 6 edges
7. `Personal Website Screenshot` - 6 edges
8. `Dark Mode / Theme System` - 5 edges
9. `Frontend Engineer Role` - 5 edges
10. `classcat Utility` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Personal Website Screenshot` --references--> `Matius Hariman Avatar (Memoji)`  [INFERRED]
  assets/images/website-screenshot.png → apps/website/public/headshot.png
- `Matius Hariman` --references--> `Matius Hariman Avatar (Memoji)`  [INFERRED]
  assets/images/website-screenshot.png → apps/website/public/headshot.png
- `Prettier Config` --conceptually_related_to--> `Website Tailwind Config`  [INFERRED]
  prettier.config.js → apps/website/tailwind.config.js
- `Root Jest Config` --references--> `Website Jest Config`  [INFERRED]
  jest.config.ts → apps/website/jest.config.ts
- `ThemeSwitch Component` --conceptually_related_to--> `Dark Mode / Theme System`  [INFERRED]
  apps/website/components/ThemeSwitch/ThemeSwitch.tsx → apps/website/pages/_app.tsx

## Hyperedges (group relationships)
- **Website Build Configuration** — next_config_websiteconfig, tailwind_config_websiteconfig, postcss_config_websiteconfig, prettier_config_config [INFERRED 0.85]
- **Website Test Configuration** — website_jest_config_websiteconfig, jest_preset_nxpreset, jest_config_rootconfig, index_spec_indextest [INFERRED 0.85]
- **Theme System** — themeprovider_themeprovider, themeprovider_themecontext, themeprovider_usethemecontext, themeswitch_themeswitch [EXTRACTED 0.95]
- **Work Experience Data Flow** — url_constants_urls, workexperience_work_data, workexperience_workexperience [EXTRACTED 0.95]
- **Tabler Icon Family (Sun, Moon, Heart, Github, MapPin, Linkedin)** — icons_sun, icons_moon, icons_heart, icons_github, icons_mappin, icons_linkedin [EXTRACTED 1.00]
- **Index Page Layout Components** — pages_index, myprofilegreeting_myprofilegreetingcomponent, socials_socialscomponent, aboutme_aboutmecomponent, components_workexperience, components_themeswitch, madewithlovetsxcomponent_madewithlovetsxcomponent [EXTRACTED 1.00]
- **Icons Using classcat for className Composition** — icons_heart, icons_github, icons_mappin, icons_linkedin [EXTRACTED 1.00]
- **Theme System Participants** — providers_themeprovider, components_themeswitch, icons_sun, icons_moon, pages_app, concept_dark_mode [INFERRED 0.85]
- **Analytics and Tracking Integration** — pages_document, pages_app, concept_gtm_integration, concept_vercel_analytics [EXTRACTED 1.00]
- **Lighthouse Quality Badges** — lighthouse_performance_badge, lighthouse_accessibility_badge, lighthouse_best_practices_badge, lighthouse_seo_badge, lighthouse_pwa_badge [INFERRED 0.95]
- **PWA App Icons** — favicon_16_asset, favicon_32_asset, android_chrome_192_asset, android_chrome_512_asset, apple_touch_icon_asset [INFERRED 0.95]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (20): AboutMe Component, CompanyImage Component, SocialLink Component, ThemeSwitch Component, WorkExperience Component, classcat Utility, Personal Biography Content, Singapore Location (+12 more)

### Community 1 - "Community 1"
Cohesion: 0.23
Nodes (12): Matius Hariman Avatar (Memoji), Bombu, Boston Celtics Fan, Gojek, Matius Hariman, NextJS (Footer), Personal Website Screenshot, Robo Advisory SaaS (+4 more)

### Community 2 - "Community 2"
Cohesion: 0.24
Nodes (10): Lighthouse Accessibility Badge, Lighthouse Best Practices Badge, Lighthouse Performance Badge, Lighthouse PWA Badge, Lighthouse SEO Badge, matiushariman.com, NextJS, Second Iteration Personal Website (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.27
Nodes (10): About Me Section, Bambu, Frontend Engineer Role, NextJS, NX, Playwright, ReactJS, Tailwind (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.27
Nodes (10): Bambu, Bambu Logo, Fintech, Super App, Wealthtech / Robo-advisory, Gojek, Gojek Logo, Personal Portfolio Website (+2 more)

### Community 5 - "Community 5"
Cohesion: 0.4
Nodes (6): Dark Mode / Theme System, Vercel Analytics Integration, Moon Icon Component, Sun Icon Component, Custom App (_app), ThemeProvider

### Community 6 - "Community 6"
Cohesion: 0.6
Nodes (5): BAMBU_URL Constant, GOJEK_URL Constant, YOUTRIP_URL Constant, WORK Data Array, WorkExperience Component

### Community 7 - "Community 7"
Cohesion: 0.4
Nodes (5): Lighthouse Accessibility Badge, Lighthouse Best Practices Badge, Lighthouse Performance Badge, Lighthouse PWA Badge, Lighthouse SEO Badge

### Community 8 - "Community 8"
Cohesion: 0.67
Nodes (4): Website Next.js Config, Website PostCSS Config, Prettier Config, Website Tailwind Config

### Community 9 - "Community 9"
Cohesion: 0.5
Nodes (4): Index Page Render Test, Root Jest Config, NX Jest Preset Config, Website Jest Config

### Community 10 - "Community 10"
Cohesion: 0.67
Nodes (4): ThemeContext, ThemeProvider Component, useThemeContext Hook, ThemeSwitch Component

### Community 11 - "Community 11"
Cohesion: 0.67
Nodes (3): SocialLink Component, GITHUB_PROFILE_URL Constant, LINKEDIN_PROFILE_URL Constant

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (2): Google Tag Manager Integration, Document Page (_document)

### Community 13 - "Community 13"
Cohesion: 1.0
Nodes (2): Favicon 16x16, Favicon 32x32

### Community 14 - "Community 14"
Cohesion: 1.0
Nodes (2): Android Chrome Icon 192x192, Android Chrome Icon 512x512

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Community 16"
Cohesion: 1.0
Nodes (1): SVG Module Declaration

### Community 17 - "Community 17"
Cohesion: 1.0
Nodes (1): URL Constants

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (1): Apple Touch Icon

## Knowledge Gaps
- **43 isolated node(s):** `NX Jest Preset Config`, `Prettier Config`, `Root Jest Config`, `SVG Module Declaration`, `Index Page Render Test` (+38 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 12`** (2 nodes): `Google Tag Manager Integration`, `Document Page (_document)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (2 nodes): `Favicon 16x16`, `Favicon 32x32`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (2 nodes): `Android Chrome Icon 192x192`, `Android Chrome Icon 512x512`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (1 nodes): `SVG Module Declaration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (1 nodes): `URL Constants`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (1 nodes): `Apple Touch Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ThemeSwitch Component` connect `Community 0` to `Community 5`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `Dark Mode / Theme System` connect `Community 5` to `Community 0`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **What connects `NX Jest Preset Config`, `Prettier Config`, `Root Jest Config` to the rest of the system?**
  _43 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._