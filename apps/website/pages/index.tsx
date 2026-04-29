import { useEffect, useState } from 'react';
import Image from 'next/image';
import AboutMe from '../components/AboutMe/AboutMe';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import {
  useThemeContext,
  Theme,
} from '../Providers/ThemeProvider/ThemeProvider';
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from '../constants/URL';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const THEMES: { value: Theme; label: string }[] = [
  { value: 'warm', label: 'Warm' },
  { value: 'slate', label: 'Slate' },
  { value: 'night', label: 'Night' },
];

export function Index() {
  const [activeSection, setActiveSection] = useState('about');
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll('.section').forEach((s) => {
      fadeObserver.observe(s);
      navObserver.observe(s);
    });

    setTimeout(() => {
      const first = document.querySelector('.section');
      if (first) first.classList.add('visible');
    }, 50);

    return () => {
      fadeObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="avatar-wrap">
          <Image
            src="/headshot.png"
            alt="Matius"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="sidebar-name">Matius</div>
        <div className="sidebar-title">
          Senior Frontend Engineer
          <br />& Boston Celtics Fan 🍀
        </div>
        <div className="sidebar-loc">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5zm0 6.1A1.6 1.6 0 1 1 8 4.3a1.6 1.6 0 0 1 0 3.3z"
              fill="currentColor"
            />
          </svg>
          Singapore
        </div>

        <nav className="sidebar-nav">
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              className={`nav-item${activeSection === id ? ' active' : ''}`}
              href={`#${id}`}
              onClick={() => setActiveSection(id)}
            >
              <span className="nav-dot" />
              {label}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-links">
            <a
              className="social-link"
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
              className="social-link"
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
          <div className="theme-switcher">
            {THEMES.map(({ value, label }) => (
              <button
                key={value}
                className={`theme-btn${theme === value ? ' active' : ''}`}
                onClick={() => setTheme(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="main">
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
