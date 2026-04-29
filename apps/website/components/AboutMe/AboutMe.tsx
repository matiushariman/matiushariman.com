import {
  GOJEK_URL,
  BAMBU_URL,
  BAMBU_GO_NEWS_URL,
  YOUTRIP_URL,
} from '../../constants/URL';

export function AboutMe() {
  return (
    <>
      <div className="section-label">About</div>
      <h1 className="about-hero">
        Building great products,<br /><em>one component at a time.</em>
      </h1>

      <div className="story-block">
        <div className="story-chapter">The Humble Beginning</div>
        <p className="story-text">
          My tech journey began in 2016 when I had the privilege of co-founding the award-winning team at{' '}
          <a href={BAMBU_URL} target="_blank" rel="noreferrer">BAMBU (ceased operations in 2023)</a>,
          a startup on a mission to revolutionize wealth management for financial institutions around the world.
        </p>
      </div>

      <div className="story-block">
        <div className="story-chapter">Weathering The Storm</div>
        <p className="story-text">
          After nearly six rewarding years in the startup world, I joined{' '}
          <a href={GOJEK_URL} target="_blank" rel="noreferrer">Gojek</a>{' '}
          to help shape the digital economy in one of the world&apos;s largest markets.
          Unfortunately, my time there ended—alongside 1,299 others—due to macroeconomic headwinds.
          During that transformative period I stayed busy learning new technologies, building side projects,
          and enjoying every Celtics game I could get.
        </p>
      </div>

      <div className="story-block">
        <div className="story-chapter">Returning To The Roots</div>
        <p className="story-text">
          In a full-circle moment, I reunited with my former BAMBU colleagues and leaders.
          This time, I stepped up as Lead Engineer for{' '}
          <a href={BAMBU_GO_NEWS_URL} target="_blank" rel="noreferrer">BAMBU GO</a>—our flagship
          SaaS robo-advisor platform. Although it didn&apos;t go the way I envisioned, the experience was invaluable.
        </p>
      </div>

      <div className="story-block">
        <div className="story-chapter">The Story Continues</div>
        <p className="story-text">
          Today, I&apos;m a Senior Software Engineer at{' '}
          <a href={YOUTRIP_URL} target="_blank" rel="noreferrer">YouTrip</a>,
          working as part of the Web team. I&apos;m currently leading the development of an
          enterprise-grade, multi-currency expense management platform for businesses.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
