import { GOJEK_URL, BAMBU_URL, LAYOFF_NEWS_URL } from '../../constants/URL';

export function AboutMe() {
  return (
    <div className="space-y-3 p-4">
      <h2 className="text-gold-dark dark:text-gold text-xl font-bold">
        About Me
      </h2>
      <div className="space-y-2">
        <p className="text-sm md:text-justify">
          I started my web development journey in 2016 with{' '}
          <a
            href={BAMBU_URL}
            className="text-primary font-bold underline"
            target="_blank"
            rel="noreferrer"
          >
            BAMBU
          </a>
          , where I was fortunate enough to be part of the co-founding members
          of the awards winning team on a mission to provide next-gen wealth
          management solutions for financial institutions worldwide.
        </p>
        <p className="text-sm md:text-justify">
          After almost 6 years worth of rewarding adventure in the startup
          world, I moved onto my next journey to build digital economy of the
          future in one of the world's largest economies with{' '}
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
          projects, and of course, catching the Celtics game whenever I can. Go
          C's!
        </p>
        <div className="space-y-2">
          <p className="text-sm md:text-justify">
            Some of the technologies that I've truly enjoyed working with
            recently:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <ul className="list-inside list-disc text-sm">
              <li>Typescript</li>
              <li>NextJS</li>
              <li>NX</li>
            </ul>
            <ul className="list-inside list-disc text-sm">
              <li>ReactJS</li>
              <li>Tailwind</li>
              <li>Playwright</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
