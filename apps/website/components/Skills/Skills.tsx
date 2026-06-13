import SectionTitle from '../SectionTitle/SectionTitle';

interface SkillGroup {
  title: string;
  tags: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Angular',
      'CSS / SCSS',
      'Tailwind',
    ],
  },
  {
    title: 'Testing & Quality',
    tags: ['Playwright', 'Jest', 'Cypress', 'Storybook', 'Chromatic', 'MSW'],
  },
  {
    title: 'Tooling & Infra',
    tags: ['CI/CD', 'Docker', 'GitHub Actions', 'Vite', 'NX', 'Buildkite'],
  },
  {
    title: 'AI & Tooling',
    tags: ['Prompt Engineering', 'MCP', 'AI Agents', 'Claude Code'],
  },
  {
    title: 'Design & Collab',
    tags: ['Figma', 'Design Systems', 'Agile / Scrum', 'Mentoring', 'ADR'],
  },
];

export function Skills() {
  return (
    <>
      <SectionTitle>Skills &amp; Tech</SectionTitle>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="rounded-[14px] border border-[var(--border)] bg-[var(--bg2)] p-5 transition-[background] duration-[400ms]"
          >
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--fg3)]">
              {group.title}
            </div>
            <div className="flex flex-wrap gap-[6px]">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-[12.5px] font-medium text-[var(--fg2)] transition-[background,border-color,color] duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
