import Image from 'next/image';
import AboutMe from '../components/AboutMe/AboutMe';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from '../constants/URL';
import ThemeSelectors from '../components/ThemeSelectors';
import NavigationTabs from '../components/NavigationTabs';

export function Index() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="flex w-full shrink-0 flex-col overflow-y-visible border-b border-[var(--border)] bg-[var(--bg)] px-5 pb-5 pt-7 transition-[border-color,background] duration-[400ms] md:sticky md:top-0 md:h-screen md:w-[280px] md:overflow-y-auto md:border-b-0 md:border-r md:px-8 md:py-12">
        <div className="relative mb-3 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--border)] bg-[var(--bg2)] transition-[background] duration-[400ms] md:mb-5 md:h-[72px] md:w-[72px]">
          <Image
            src="/avatar.png"
            alt="Matius"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="mb-1 text-base font-bold tracking-[-0.02em] text-[var(--fg)] md:text-[18px]">
          Matius
        </div>
        <div className="mb-1.5 text-[12.5px] font-normal leading-[1.5] text-[var(--fg2)]">
          Senior Frontend Engineer
          <br />& Boston Celtics Fan 🍀
        </div>
        <div className="mb-5 flex items-center gap-1 text-xs text-[var(--fg3)] md:mb-8">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5zm0 6.1A1.6 1.6 0 1 1 8 4.3a1.6 1.6 0 0 1 0 3.3z"
              fill="currentColor"
            />
          </svg>
          Singapore
        </div>
        <NavigationTabs />
        <div className="mt-4 flex flex-row flex-wrap items-center gap-3 md:mt-8 md:flex-col md:items-start md:gap-4">
          <div className="flex gap-[10px]">
            <a
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg2)] text-[var(--fg2)] no-underline transition-[background,color,border-color] duration-150 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zm-1.5-12.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM19 19h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5S11 12.12 11 13.5V19H8V8h3v1.5c.88-1.3 2.3-2 3.5-2 2.76 0 4.5 1.74 4.5 4.5V19z" />
              </svg>
            </a>
            <a
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg2)] text-[var(--fg2)] no-underline transition-[background,color,border-color] duration-150 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
          <ThemeSelectors />
        </div>
      </aside>

      <main className="min-w-0 flex-1 px-5 pb-12 pt-9 md:max-w-[820px] md:px-[72px] md:py-16">
        <section className="section" id="about">
          <AboutMe />
        </section>
        <section className="section" id="experience">
          <WorkExperience />
        </section>
        <section className="section" id="skills">
          <Skills />
        </section>
        <section className="section" id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default Index;
