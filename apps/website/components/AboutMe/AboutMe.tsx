import {
  GOJEK_URL,
  BAMBU_URL,
  LAYOFF_NEWS_URL,
  BAMBU_GO_NEWS_URL,
  BAMBU_SHUTDOWN_URL,
  YOUTRIP_URL,
  YOUBIZ_PR_URL,
} from '../../constants/URL';

export function AboutMe() {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-gold-dark dark:text-gold text-xl font-bold">
        About Me
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <h3 className="text-gold-dark dark:text-gold text-md font-bold">
            The Humble Beginning
          </h3>
          <p className="text-sm md:text-justify">
            My journey in tech began in 2016, where I had privilege to be part
            of the co-founding members of the awards winning team at{' '}
            <a
              href={BAMBU_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              BAMBU (closed in 2023)
            </a>{' '}
            on a mission to provide next-gen wealth management solutions for
            financial institutions worldwide.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-gold-dark dark:text-gold text-md font-bold">
            The Storm
          </h3>
          <p className="text-sm md:text-justify">
            After almost 6 years worth of rewarding adventure in the startup
            world, I moved onto my next journey to build digital economy of the
            future in one of the world&apos;s largest economies with{' '}
            <a
              href={GOJEK_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              Gojek
            </a>
            . Unfortunately,{' '}
            <a
              href={LAYOFF_NEWS_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              my venture was cut short along with 1,299 others
            </a>{' '}
            due to the macroeconomic situation. While looking for the next big
            thing, I spend most of my days learning new things, building side
            projects, and of course, catching the Celtics game whenever I can.
            Go C&apos;s!
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-gold-dark dark:text-gold text-md font-bold">
            Returning To The Roots
          </h3>
          <p className="text-sm md:text-justify">
            A full-circle moment happened, it&apos;s the long (or short) awaited
            reunion with my colleagues and bosses at BAMBU (closed in 2023). Now
            wiser and renewed, I was appointed as the lead engineer of
            BAMBU&apos;s flagship product:{' '}
            <a
              href={BAMBU_GO_NEWS_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              BAMBU GO, the first ever SaaS Robo-advisor
            </a>
            . Unfortunately, it didn&apos;t get the fairytale ending that it
            deserved (
            <a
              href={BAMBU_SHUTDOWN_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              BAMBU closed down their operation in 2023
            </a>
            ).
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-gold-dark dark:text-gold text-md font-bold">
            The Story Continues
          </h3>
          <p className="text-sm md:text-justify">
            I&apos;m currently working as Senior Software Engineer at{' '}
            <a
              href={YOUTRIP_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              YouTrip
            </a>{' '}
            as part of the{' '}
            <a
              href={YOUBIZ_PR_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              YouBiz
            </a>{' '}
            team . Where I&apos;m currently tasked to develop an enterprise
            level multi-currency expense management platform: YouBiz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
