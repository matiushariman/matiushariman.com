# Graph Report - /Users/matiushariman/Coding/matiushariman.com  (2026-05-05)

## Corpus Check
- 33 files · ~137,267 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 104 nodes · 87 edges · 33 communities detected
- Extraction: 66% EXTRACTED · 34% INFERRED · 0% AMBIGUOUS · INFERRED: 30 edges (avg confidence: 0.85)
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
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]

## God Nodes (most connected - your core abstractions)
1. `matiushariman.com` - 9 edges
2. `Matius Hariman` - 9 edges
3. `About Me Section` - 8 edges
4. `Personal Website Screenshot` - 6 edges
5. `Frontend Engineer Role` - 5 edges
6. `classcat Utility` - 4 edges
7. `Socials Component` - 4 edges
8. `YouTrip` - 4 edges
9. `Gojek` - 4 edges
10. `Website Jest Config` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Personal Website Screenshot` --references--> `Matius Hariman Avatar (Memoji)`  [INFERRED]
  assets/images/website-screenshot.png → apps/website/public/headshot.png
- `Matius Hariman` --references--> `Matius Hariman Avatar (Memoji)`  [INFERRED]
  assets/images/website-screenshot.png → apps/website/public/headshot.png
- `Root Jest Config` --references--> `Website Jest Config`  [INFERRED]
  jest.config.ts → apps/website/jest.config.ts
- `Website Jest Config` --references--> `NX Jest Preset Config`  [EXTRACTED]
  apps/website/jest.config.ts → jest.preset.js
- `Favicon 16x16` --semantically_similar_to--> `Favicon 32x32`  [INFERRED] [semantically similar]
  apps/website/public/favicon-16x16.png → apps/website/public/favicon-32x32.png

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
Cohesion: 0.23
Nodes (12): Matius Hariman Avatar (Memoji), Bombu, Boston Celtics Fan, Gojek, Matius Hariman, NextJS (Footer), Personal Website Screenshot, Robo Advisory SaaS (+4 more)

### Community 1 - "Community 1"
Cohesion: 0.24
Nodes (10): Lighthouse Accessibility Badge, Lighthouse Best Practices Badge, Lighthouse Performance Badge, Lighthouse PWA Badge, Lighthouse SEO Badge, matiushariman.com, NextJS, Second Iteration Personal Website (+2 more)

### Community 2 - "Community 2"
Cohesion: 0.27
Nodes (10): About Me Section, Bambu, Frontend Engineer Role, NextJS, NX, Playwright, ReactJS, Tailwind (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.27
Nodes (10): Bambu, Bambu Logo, Fintech, Super App, Wealthtech / Robo-advisory, Gojek, Gojek Logo, Personal Portfolio Website (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.25
Nodes (9): SocialLink Component, classcat Utility, URL Constants, Github Icon Component, Heart Icon Component, Linkedin Icon Component, MapPin Icon Component, MadeWithLove Component (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (3): ThemeSelectors(), useThemeContext(), ThemeSwitch()

### Community 6 - "Community 6"
Cohesion: 0.4
Nodes (5): Lighthouse Accessibility Badge, Lighthouse Best Practices Badge, Lighthouse Performance Badge, Lighthouse PWA Badge, Lighthouse SEO Badge

### Community 7 - "Community 7"
Cohesion: 0.5
Nodes (4): Index Page Render Test, Root Jest Config, NX Jest Preset Config, Website Jest Config

### Community 8 - "Community 8"
Cohesion: 0.67
Nodes (3): SocialLink Component, GITHUB_PROFILE_URL Constant, LINKEDIN_PROFILE_URL Constant

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (2): Website Next.js Config, Website PostCSS Config

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Community 13"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Community 14"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Community 16"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Community 17"
Cohesion: 1.0
Nodes (2): Favicon 16x16, Favicon 32x32

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (2): Android Chrome Icon 192x192, Android Chrome Icon 512x512

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (1): Prettier Config

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (1): SVG Module Declaration

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (1): URL Constants

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (1): GOJEK_URL Constant

### Community 25 - "Community 25"
Cohesion: 1.0
Nodes (1): BAMBU_URL Constant

### Community 26 - "Community 26"
Cohesion: 1.0
Nodes (1): YOUTRIP_URL Constant

### Community 27 - "Community 27"
Cohesion: 1.0
Nodes (0): 

### Community 28 - "Community 28"
Cohesion: 1.0
Nodes (1): Sun Icon Component

### Community 29 - "Community 29"
Cohesion: 1.0
Nodes (1): Moon Icon Component

### Community 30 - "Community 30"
Cohesion: 1.0
Nodes (1): CompanyImage Component

### Community 31 - "Community 31"
Cohesion: 1.0
Nodes (0): 

### Community 32 - "Community 32"
Cohesion: 1.0
Nodes (1): Apple Touch Icon

## Knowledge Gaps
- **43 isolated node(s):** `NX Jest Preset Config`, `Prettier Config`, `Root Jest Config`, `Website Next.js Config`, `SVG Module Declaration` (+38 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 9`** (2 nodes): `Website Next.js Config`, `Website PostCSS Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `ArrowIcon()`, `Contact.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (2 nodes): `AboutMe()`, `AboutMe.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (2 nodes): `NavigationTabs()`, `index.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (2 nodes): `Skills()`, `Skills.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (2 nodes): `MyProfileGreeting()`, `MyProfileGreeting.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (2 nodes): `Index()`, `index.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (2 nodes): `Document()`, `_document.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (2 nodes): `Favicon 16x16`, `Favicon 32x32`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (2 nodes): `Android Chrome Icon 192x192`, `Android Chrome Icon 512x512`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (1 nodes): `Prettier Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (1 nodes): `tailwind.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `SVG Module Declaration`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (1 nodes): `URL Constants`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `GOJEK_URL Constant`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (1 nodes): `BAMBU_URL Constant`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (1 nodes): `YOUTRIP_URL Constant`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (1 nodes): `WorkExperience.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (1 nodes): `Sun Icon Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (1 nodes): `Moon Icon Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (1 nodes): `CompanyImage Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (1 nodes): `_app.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (1 nodes): `Apple Touch Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Matius Hariman` connect `Community 0` to `Community 2`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `About Me Section` connect `Community 2` to `Community 0`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `Personal Website Screenshot` connect `Community 0` to `Community 2`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `Frontend Engineer Role` (e.g. with `TypeScript` and `ReactJS`) actually correct?**
  _`Frontend Engineer Role` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `NX Jest Preset Config`, `Prettier Config`, `Root Jest Config` to the rest of the system?**
  _43 weakly-connected nodes found - possible documentation gaps or missing edges._