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
    responsibilities: [
      'Migrated legacy YouBiz web codebase to Typescript to improve DX, maintainability, and long term scalability.',
      'Established testing strategy (unit & integration) and pull-request workflow for frontend web applications across YouTrip & YouBiz.',
      'Led the implementation of a continuous refactoring process, reducing technical debts by upgrading outdated dependencies and removing deprecated code, resulting in a higher maintainability and security vulnerability rating.',
    ],
  },
  {
    src: '/bambu.png',
    alt: 'bambu logo',
    title: 'Lead Software Engineer (Frontend)',
    startingDate: 'Jan 2023',
    endDate: 'Sep 2023',
    companyUrl: BAMBU_URL,
    responsibilities: [
      'Led the adoption of Component-driven Development with Storybook & Chromatic for developing BAMBU’s in-house design system and accessible next-gen frontend experience.',
      'Established best practices in pursuit of engineering excellence: trunk-based development with feature flags, CODEOWNERS, Architecture Decision Record (ADR).',
      'Liaised with designers, product owners, and C-suite stakeholders to define requirements and build a consistent user experience across the applications.',
      'Conducted weekly engineering grooming sessions to review and plan engineering efforts required to deliver the product or feature.',
    ],
  },
  {
    src: '/gojek.png',
    alt: 'gojek logo',
    title: 'Senior Frontend Engineer',
    startingDate: 'Aug 2022',
    endDate: 'Nov 2022',
    companyUrl: GOJEK_URL,
    responsibilities: [
      'Worked on a singleSPA based micro-frontend application as part of a 3-man frontend development team that achieved 100% burndown chart in consecutive sprints',
      'Improved application test coverage to 90%, the best mark among Moka Backoffice micro frontend applications.',
      'Spearheaded the implementation of behaviour-driven development (BDD) with Playwright.',
      "Actively participated in the commerce enablement FE guild to improve overall FE workflow across feature & product teams. Introduced react testing library's best practice to improve unit/integration tests' confidence level and minimize false positive test results.",
    ],
  },
  {
    src: '/bambu.png',
    alt: 'bambu logo',
    title: 'Frontend Engineer',
    startingDate: 'Dec 2016',
    endDate: 'July 2022',
    companyUrl: BAMBU_URL,
    responsibilities: [
      'Managed a team of 3 front-end engineers to develop the world’s first robo advisory SaaS platform (BAMBU GO 2.0) with ReactJS v16.x.x and Redux, the platform won “Best of Show” award at the 2021 FinovateFall event held in NYC.',
      'Introduced integration test using @testing-library/react and MSW and E2E test using cypress to encourage developers to write more “meaningful” tests. Code coverage of 70% or more is successfully maintained while reducing the number of meaningless tests by more than 50% at the same time.',
      'Successfully delivered up to 3 POCs and MVPs per week written in AngularJS v1.x.x as part of a 5-man team that led to multiple business deals and Series-A and Series-B round fundings.',
      'Revolutionized deployment strategy from the slower, more error-prone manual deployment to automated CI/CD process using bitbucket-pipeline.',
      'Helped to grow the engineering team from 3 in early 2017 to 15+ by the end of 2020 by acting as one of the lead interviewers for technical roles.',
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
                <p className="text-sm font-bold">{work.title}</p>
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
