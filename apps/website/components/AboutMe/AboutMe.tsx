import {
  GOJEK_URL,
  BAMBU_URL,
  BAMBU_GO_NEWS_URL,
  YOUTRIP_URL,
} from '../../constants/URL';

const linkClass =
  'text-[var(--fg)] underline decoration-[var(--border)] underline-offset-[3px] transition-[text-decoration-color] duration-150 hover:decoration-[var(--accent)]';

export function AboutMe() {
  return (
    <>
      <div className="mb-6 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
        About
      </div>
      <h1 className="mb-7 text-[24px] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--fg)] md:text-[36px]">
        Building great products,
        <br />
        <em className="font-light italic">one component at a time.</em>
      </h1>

      <div className="mb-7">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
          The Humble Beginning
        </div>
        <p className="text-[15px] leading-[1.75] text-[var(--fg2)]">
          My tech journey began in 2016 when I had the privilege of co-founding
          the award-winning team at{' '}
          <a
            href={BAMBU_URL}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            BAMBU (ceased operations in 2023)
          </a>
          , a startup on a mission to revolutionize wealth management for
          financial institutions around the world.
        </p>
      </div>

      <div className="mb-7">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
          Weathering The Storm
        </div>
        <p className="text-[15px] leading-[1.75] text-[var(--fg2)]">
          After nearly six rewarding years in the startup world, I joined{' '}
          <a
            href={GOJEK_URL}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            Gojek
          </a>{' '}
          to help shape the digital economy in one of the world&apos;s largest
          markets. Unfortunately, my time there ended—alongside 1,299 others—due
          to macroeconomic headwinds. During that transformative period I stayed
          busy learning new technologies, building side projects, and enjoying
          every Celtics game I could get.
        </p>
      </div>

      <div className="mb-7">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
          Returning To The Roots
        </div>
        <p className="text-[15px] leading-[1.75] text-[var(--fg2)]">
          In a full-circle moment, I reunited with my former BAMBU colleagues
          and leaders. This time, I stepped up as Lead Engineer for{' '}
          <a
            href={BAMBU_GO_NEWS_URL}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            BAMBU GO
          </a>
          —our flagship SaaS robo-advisor platform. Although it didn&apos;t go
          the way I envisioned, the experience was invaluable.
        </p>
      </div>

      <div className="mb-7">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
          The Story Continues
        </div>
        <p className="text-[15px] leading-[1.75] text-[var(--fg2)]">
          Today, I&apos;m a Senior Software Engineer at{' '}
          <a
            href={YOUTRIP_URL}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            YouTrip
          </a>
          , working as part of the YouBiz team. I&apos;m currently leading the
          development of an enterprise-grade, multi-currency expense management
          platform for businesses.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
