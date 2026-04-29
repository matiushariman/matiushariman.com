const SKILL_GROUPS = [
  {
    title: 'Frontend',
    tags: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'CSS / SCSS', 'Tailwind'],
  },
  {
    title: 'Testing & Quality',
    tags: ['Playwright', 'Jest', 'Cypress', 'Storybook', 'Chromatic', 'MSW'],
  },
  {
    title: 'Tooling & Infra',
    tags: ['CI/CD', 'Docker', 'Datadog', 'GitHub Actions', 'Vite', 'NX'],
  },
  {
    title: 'Design & Collab',
    tags: ['Figma', 'Design Systems', 'Agile / Scrum', 'Mentoring', 'ADR'],
  },
];

export function Skills() {
  return (
    <>
      <div className="section-label">Skills &amp; Tech</div>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
