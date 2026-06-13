import Image from 'next/image';
import AboutMe from '../components/AboutMe/AboutMe';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import { LinkedIn } from '../components/Icons/LinkedIn';
import { GitHub } from '../components/Icons/GitHub';

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
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="mb-1 text-base font-bold tracking-[-0.02em] text-[var(--fg)] md:text-[18px]">
          Matius
        </div>
        <div className="mb-1.5 text-[12.5px] font-normal leading-[1.5] text-[var(--fg2)]">
          Ships clean code.
          <br />Suffers good basketball.
        </div>
        <div className="mb-5 flex items-center gap-1 text-xs text-[var(--fg3)] md:mb-8">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5zm0 6.1A1.6 1.6 0 1 1 8 4.3a1.6 1.6 0 0 1 0 3.3z"
              fill="currentColor"
            />
          </svg>
          Little Red Dot 🇸🇬
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
              <LinkedIn width={15} height={15} />
            </a>
            <a
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg2)] text-[var(--fg2)] no-underline transition-[background,color,border-color] duration-150 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <GitHub width={15} height={15} />
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
