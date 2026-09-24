import Image from 'next/image';
import { GOJEK_URL, BAMBU_URL, YOUTRIP_URL } from '../../constants/URL';
import SectionTitle from '../SectionTitle/SectionTitle';

interface WorkRole {
  role: string;
  period: string;
  bullets: string[];
}

interface WorkEntry {
  src: string;
  alt: string;
  company: string;
  companyUrl: string;
  tag: string | null;
  roles: WorkRole[];
}

const WORK: WorkEntry[] = [
  {
    src: '/youtrip.png',
    alt: 'YouTrip logo',
    company: 'YouTrip',
    companyUrl: YOUTRIP_URL,
    tag: null,
    roles: [
      {
        role: 'Staff Software Engineer',
        period: 'Apr 2026 — Present',
        bullets: [
          'Partner with backend engineers on technical solutioning, including API schema design, as part of cross-functional planning for new features.',
          'Diagnosed and modified backend logic in Golang API endpoints, including bug fixes and response-shape changes, to support production stability and new feature requirements.',
          'Work closely with QA to establish an automated testing suite, strengthening release reliability across the platform.',
          'Built a Claude Code plugin adopted by the team at YouTrip to standardize AI-assisted output, enforcing coding standards, architecture patterns, and validation of AI-generated code.',
        ],
      },
      {
        role: 'Senior Software Engineer',
        period: 'Oct 2023 — Apr 2026',
        bullets: [
          "Migrated YouBiz's legacy web codebase to TypeScript, improving developer experience (DX) and code maintainability, which enabled smoother scaling of the platform.",
          'Optimized the CI/CD pipeline end to end, including shifting test execution to affected-file-only runs (~59% faster tests) and reducing overall build and deployment times by 75%, enabling 4× faster delivery.',
          "Led the fix for the top source of server errors on the B2B platform's authentication flow, cutting weekly HTTP 500 errors by ~87% (~1,900 → ~240).",
        ],
      },
    ],
  },
  {
    src: '/bambu.png',
    alt: 'BAMBU logo',
    company: 'BAMBU',
    companyUrl: BAMBU_URL,
    tag: 'Closed in 2023',
    roles: [
      {
        role: 'Lead Software Engineer (Frontend)',
        period: 'Jan 2023 — Sep 2023',
        bullets: [
          "Led the adoption of component-driven development using Storybook and Chromatic, enabling the creation of BAMBU's in-house design system and delivering an accessible next-gen frontend experience.",
          'Established engineering best practices, including trunk-based development with feature flags, CODEOWNERS for automated PR assignment, and Architecture Decision Records (ADR), to enhance agility, code quality, and long-term maintainability across a monorepo with 20+ packages.',
          'Collaborated with designers, product owners, and C-suite stakeholders to define requirements and deliver a unified, consistent user experience across applications.',
        ],
      },
    ],
  },
  {
    src: '/gojek.png',
    alt: 'Gojek logo',
    company: 'Gojek',
    companyUrl: GOJEK_URL,
    tag: null,
    roles: [
      {
        role: 'Senior Frontend Engineer, Commerce Enablement',
        period: 'Aug 2022 — Nov 2022',
        bullets: [
          'Delivered a Single-SPA–based micro-frontend application as part of a 3-person frontend team, consistently completing sprint commitments (100% burndown), which improved delivery predictability and stakeholder confidence.',
          'Elevated application quality by driving the adoption of behavior-driven development (BDD) with Playwright and increasing test coverage to 90%, the highest among Moka Backoffice micro-frontend applications, resulting in more reliable releases.',
          'Collaborated within the Commerce Enablement FE Guild to enhance frontend workflows across product teams, introducing React Testing Library best practices that improved test confidence and reduced false positives.',
        ],
      },
    ],
  },
  {
    src: '/bambu.png',
    alt: 'BAMBU logo',
    company: 'BAMBU',
    companyUrl: BAMBU_URL,
    tag: 'Closed in 2023',
    roles: [
      {
        role: 'Senior Frontend Engineer',
        period: 'Jan 2021 — Jul 2022',
        bullets: [
          "Led a 3-person frontend team to develop BAMBU GO 2.0, the world's first robo-advisory SaaS platform using ReactJS and Redux, winning \"Best of Show\" at 2021 FinovateFall in New York.",
          'Enhanced code quality and security by integrating SonarCloud into the CI pipeline, raising legacy projects from grade B to A and reducing vulnerabilities to single digits.',
        ],
      },
      {
        role: 'Frontend Engineer',
        period: 'Jan 2017 — Dec 2020',
        bullets: [
          'Accelerated product delivery by spearheading frontend development for multiple live projects, POCs, and MVPs (AngularJS, ReactJS), driving business deals and securing Series A/B funding.',
          'Streamlined deployment by replacing manual releases with automated Bitbucket Pipeline CI/CD, cutting errors and accelerating release cycles.',
          'Scaled engineering team from 3 to 15+ (2017–2020) by leading technical interviews, improving hiring quality and strengthening team capabilities.',
        ],
      },
    ],
  },
];

export function WorkExperience() {
  return (
    <>
      <SectionTitle>Where I&apos;ve worked</SectionTitle>
      <div className="flex flex-col">
        {WORK.map((work, i) => (
          <div
            key={i}
            className="grid grid-cols-[40px_1fr] gap-[14px] border-b border-[var(--border)] py-7 transition-[border-color] duration-[400ms] first:pt-0 last:border-b-0 md:grid-cols-[56px_1fr] md:gap-5"
          >
            <div className="relative mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] transition-[background] duration-[400ms] md:h-10 md:w-10">
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="56px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div>
              <div className="mb-3 flex items-start justify-between gap-3">
                <a
                  className="text-[15px] font-bold text-[var(--fg)] no-underline transition-colors duration-150 hover:text-[var(--accent)]"
                  href={work.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {work.company}
                </a>
                {work.tag && (
                  <span className="shrink-0 rounded-[20px] border border-[var(--border)] bg-[var(--bg2)] px-2 py-0.5 text-[10.5px] font-medium text-[var(--fg3)]">
                    {work.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                {work.roles.map((r, j) => (
                  <div key={j}>
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                      <span className="text-[13px] font-semibold text-[var(--fg2)]">{r.role}</span>
                      <span className="shrink-0 whitespace-nowrap text-[11.5px] text-[var(--fg3)]">
                        {r.period}
                      </span>
                    </div>
                    {r.bullets.length > 0 && (
                      <ul className="flex list-none flex-col gap-[6px]">
                        {r.bullets.map((b, k) => (
                          <li
                            key={k}
                            className="relative pl-4 text-[13.5px] leading-[1.6] text-[var(--fg2)] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[var(--fg3)] before:content-['']"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WorkExperience;
