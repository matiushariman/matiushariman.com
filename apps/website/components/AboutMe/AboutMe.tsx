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
            My tech journey began in 2016 when I had the privilege of
            co-founding the award-winning team at{' '}
            <a
              href={BAMBU_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              BAMBU (ceased operations in 2023)
            </a>
            , a startup on a mission to revolutionize wealth management for
            financial institutions around the world.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-gold-dark dark:text-gold text-md font-bold">
            Weathering The Storm
          </h3>
          <p className="text-sm md:text-justify">
            After nearly six rewarding years in the startup world, I joined{' '}
            <a
              href={GOJEK_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              Gojek
            </a>{' '}
            to help shape the digital economy in one of the world’s largest
            markets. Unfortunately, my time there ended—alongside 1,299
            others—due to macroeconomic headwinds. During this transitional
            period, I’ve stayed busy learning new technologies, building side
            projects, and catching every Celtics game I can. Go C’s!
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-gold-dark dark:text-gold text-md font-bold">
            Returning To The Roots
          </h3>
          <p className="text-sm md:text-justify">
            In a full-circle moment, I reunited with my former BAMBU colleagues
            and leaders. This time, I returned as Lead Engineer for{' '}
            <a
              href={BAMBU_GO_NEWS_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              BAMBU GO
            </a>
            —our flagship SaaS robo-advisor platform. Although it didn’t get the
            fairytale ending it deserved, the experience was invaluable.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-gold-dark dark:text-gold text-md font-bold">
            The Story Continues
          </h3>
          <p className="text-sm md:text-justify">
            Today, I serve as a Senior Software Engineer at{' '}
            <a
              href={YOUTRIP_URL}
              className="text-primary font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              YouTrip
            </a>
            , working as part of the YouBiz team. I’m currently leading the
            development of an enterprise-grade, multi-currency expense
            management platform for businesses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
