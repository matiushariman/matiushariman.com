import Github from '../Icons/Github/Github';

export function Socials() {
  return (
    <a
      href="https://github.com/matiushariman"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gold flex items-center transition-colors"
      aria-label="navigate to github"
    >
      <Github />
    </a>
  );
}

export default Socials;
