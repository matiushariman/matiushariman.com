import Image from 'next/image';
import { GOJEK_URL, BAMBU_URL, YOUTRIP_URL } from '../../constants/URL';

const WORK = [
  {
    src: '/youtrip.png',
    alt: 'YouTrip logo',
    company: 'YouTrip',
    companyUrl: YOUTRIP_URL,
    role: 'Senior Software Engineer, Web',
    period: 'Oct 2023 — Present',
    tag: null,
    bullets: [
      "Migrated YouBiz’s legacy web codebase to TypeScript, improving developer experience (DX) and code maintainability, which enabled smoother scaling of the platform.",
      'Implemented a standardized testing strategy (BDD) and automated pull-request workflows, increasing code reliability and reducing review overhead across YouTrip and YouBiz.',
      'Reduced customer-facing web application bundle size by 27%, significantly improving loading speed and performance.',
      'Optimized web application CI/CD process, reducing build and deployment times by 75% and enabling 4× faster delivery.',
    ],
  },
  {
    src: '/bambu.png',
    alt: 'BAMBU logo',
    company: 'BAMBU',
    companyUrl: BAMBU_URL,
    role: 'Lead Software Engineer (Frontend)',
    period: 'Jan 2023 — Sep 2023',
    tag: 'Closed in 2023',
    bullets: [
      "Led the adoption of component-driven development using Storybook and Chromatic, enabling creation of BAMBU's in-house design system and delivering an accessible next-gen frontend experience.",
      'Established engineering best practices—including trunk-based development with feature flags, CODEOWNERS for automated PR assignment, and ADRs—to enhance agility, code quality, and long-term maintainability across a monorepo with 20+ packages.',
      'Collaborated with designers, product owners, and C-suite stakeholders to define requirements and deliver a unified, consistent user experience across applications.',
    ],
  },
  {
    src: '/gojek.png',
    alt: 'Gojek logo',
    company: 'Gojek',
    companyUrl: GOJEK_URL,
    role: 'Senior Frontend Engineer, Commerce Enablement',
    period: 'Aug 2022 — Nov 2022',
    tag: null,
    bullets: [
      'Delivered a Single-SPA–based micro-frontend application as part of a 3-person frontend team, consistently completing sprint commitments (100% burndown), which improved delivery predictability and stakeholder confidence.',
      'Elevated application quality by driving the adoption of BDD with Playwright and increasing test coverage to 90%—the highest among Moka Backoffice micro-frontend applications—resulting in more reliable releases.',
      'Collaborated within the Commerce Enablement FE Guild to enhance frontend workflows across product teams, introducing React Testing Library best practices that improved test confidence and reduced false positives.',
    ],
  },
  {
    src: '/bambu.png',
    alt: 'BAMBU logo',
    company: 'BAMBU',
    companyUrl: BAMBU_URL,
    role: 'Frontend Engineer',
    period: 'Dec 2016 — Jul 2022',
    tag: 'Closed in 2023',
    bullets: [
      "Led a 3-person frontend team to develop BAMBU GO 2.0—the world's first robo-advisory SaaS platform using ReactJS and Redux—winning \"Best of Show\" at 2021 FinovateFall in New York.",
      'Boosted test reliability by introducing integration (@testing-library/react, MSW) and E2E (Cypress) testing, achieving 70%+ coverage while eliminating 50% of redundant tests.',
      'Accelerated product delivery by spearheading frontend development for multiple live projects, POCs, and MVPs, driving business deals and securing Series A/B funding.',
      'Streamlined deployment by replacing manual releases with automated CI/CD, cutting errors and accelerating release cycles.',
    ],
  },
];

export function WorkExperience() {
  return (
    <>
      <div className="section-label">Where I&apos;ve worked</div>
      <div className="exp-list">
        {WORK.map((work, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-logo">
              <Image src={work.src} alt={work.alt} fill style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <div className="exp-header">
                <a className="exp-company" href={work.companyUrl} target="_blank" rel="noreferrer">
                  {work.company}
                </a>
                <span className="exp-period">{work.period}</span>
              </div>
              <div className="exp-role">{work.role}</div>
              {work.tag && <span className="exp-tag">{work.tag}</span>}
              <ul className="exp-bullets">
                {work.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkExperience;
