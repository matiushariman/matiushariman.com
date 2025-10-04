import { GOJEK_URL, BAMBU_URL, YOUTRIP_URL } from '../../constants/URL';
import CompanyImage from '../CompanyImage/CompanyImage';

const WORK = [
  {
    src: '/youtrip.png',
    alt: 'youtrip logo',
    title: 'Senior Software Engineer, Web',
    startingDate: 'Oct 2023',
    endDate: 'Present',
    companyUrl: YOUTRIP_URL,
    companyName: 'YouTrip',
    responsibilities: [
      'Migrated YouBiz’s legacy web codebase to TypeScript, improving developer experience (DX) and code maintainability, which enabled smoother scaling of the platform.',
      'Implemented a standardized testing strategy (BDD) and automated pull-request workflows, increasing code reliability and reducing review overhead across YouTrip and YouBiz.',
      'Reduced customer-facing web application bundle size by 27%, significantly improving loading speed and performance.',
      'Optimized web application CI/CD process, reducing build and deployment times by 75% and enabling 4× faster delivery.',
    ],
  },
  {
    src: '/bambu.png',
    alt: 'bambu logo',
    title: 'Lead Software Engineer (Frontend)',
    startingDate: 'Jan 2023',
    endDate: 'Sep 2023',
    companyUrl: BAMBU_URL,
    companyName: 'BAMBU (closed in 2023)',
    responsibilities: [
      'Led the adoption of component-driven development using Storybook and Chromatic, enabling the creation of BAMBU’s in-house design system and delivering an accessible next-gen frontend experience.',
      'Established engineering best practices—including trunk-based development with feature flags, CODEOWNERS for automated PR assignment, and Architecture Decision Records (ADR)—to enhance agility, code quality, and long-term maintainability across a monorepo with 20+ packages.',
      'Collaborated with designers, product owners, and C-suite stakeholders to define requirements and deliver a unified, consistent user experience across applications.',
      'Facilitated weekly engineering grooming sessions to review, prioritize, and plan technical efforts, ensuring smooth and predictable delivery.',
    ],
  },
  {
    src: '/gojek.png',
    alt: 'gojek logo',
    title: 'Senior Frontend Engineer, Commerce Enablement',
    startingDate: 'Aug 2022',
    endDate: 'Nov 2022',
    companyUrl: GOJEK_URL,
    companyName: 'Gojek',
    responsibilities: [
      'Delivered a Single-SPA–based micro-frontend application as part of a 3-person frontend team, consistently completing sprint commitments (100% burndown), which improved delivery predictability and stakeholder confidence.',
      'Elevated application quality by driving the adoption of behavior-driven development (BDD) with Playwright and increasing test coverage to 90%—the highest among Moka Backoffice micro-frontend applications—resulting in more reliable releases',
      'Collaborated within the Commerce Enablement FE Guild to enhance frontend workflows across product teams, introducing React Testing Library best practices that improved test confidence and reduced false positives.',
    ],
  },
  {
    src: '/bambu.png',
    alt: 'bambu logo',
    title: 'Frontend Engineer',
    startingDate: 'Dec 2016',
    endDate: 'July 2022',
    companyUrl: BAMBU_URL,
    companyName: 'BAMBU (closed in 2023)',
    responsibilities: [
      'Led a 3-person frontend team to develop BAMBU GO 2.0—the world’s first robo-advisory SaaS platform using ReactJS and Redux—winning “Best of Show” at 2021 FinovateFall in New York.',
      'Boosted test reliability by introducing integration (@testing-library/react, MSW) and E2E (Cypress) testing, achieving 70%+ coverage while eliminating 50% of redundant tests.',
      'Accelerated product delivery by spearheading frontend development for multiple live projects, POCs, and MVPs (AngularJS, ReactJS), driving business deals and securing Series A/B funding.',
      'Streamlined deployment by replacing manual releases with automated Bitbucket Pipeline CI/CD, cutting errors and accelerating release cycles.',
      'Scaled engineering team from 3 to 15+ (2017–2020) by leading technical interviews, improving hiring quality and strengthening team capabilities.',
    ],
  },
];

export function WorkExperience() {
  return (
    <div className="space-y-4 p-4 md:space-y-6">
      <h2 className="text-gold-dark dark:text-gold text-xl font-bold">
        Where I&lsquo;ve worked
      </h2>
      <div className="space-y-8">
        {WORK.map((work, i) => (
          <div
            className="flex flex-col space-y-4 md:flex-row md:space-y-0"
            key={i}
          >
            <div className="mx-auto md:mr-10 md:ml-0">
              <a href={work.companyUrl} target="_blank" rel="noreferrer">
                <CompanyImage src={work.src} alt={work.alt} />
              </a>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-sm font-bold">{`${work.companyName} - ${work.title}`}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {work.startingDate} - {work.endDate}
                </p>
              </div>
              <ul className="list-inside list-disc text-sm">
                {work.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
