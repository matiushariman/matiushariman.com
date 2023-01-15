import CompanyImage from '../CompanyImage/CompanyImage';

const WORK = [
  {
    src: '/gojek.png',
    alt: 'gojek logo',
    title: 'Senior Frontend Engineer',
    startingDate: 'Aug 2022',
    endDate: 'Nov 2022',
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
      <h2 className="text-gold text-xl font-bold">Where I've worked</h2>
      <div className="space-y-8">
        {WORK.map((work, i) => (
          <div
            className="flex flex-col space-y-4 md:flex-row md:space-y-0"
            key={work.alt}
          >
            <div className="mx-auto h-[90px] w-[152px] md:mr-10">
              <CompanyImage
                src={work.src}
                alt={work.alt}
                isCurrent={String(i) === '0'}
              />
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-sm font-bold">{work.title}</p>
                <p className="text-xs text-gray-500">
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
