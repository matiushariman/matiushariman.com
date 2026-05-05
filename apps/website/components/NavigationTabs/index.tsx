import { useEffect, useState } from 'react';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function NavigationTabs() {
  const [activeSection, setActiveSection] = useState(NAV[0].id);

  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll('.section').forEach((s) => {
      fadeObserver.observe(s);
      navObserver.observe(s);
    });

    setTimeout(() => {
      const first = document.querySelector('.section');
      if (first) first.classList.add('visible');
    }, 50);

    window.scrollTo({
      top: 0,
    });

    return () => {
      fadeObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  return (
    <nav className="flex flex-row flex-wrap gap-1 md:flex-1 md:flex-col md:flex-nowrap md:gap-0.5">
      {NAV.map(({ id, label }) => (
        <a
          key={id}
          className={`flex cursor-pointer items-center gap-[10px] rounded-lg px-[10px] py-1.5 text-xs font-medium no-underline transition-[background,color] duration-150 hover:bg-[var(--bg2)] hover:text-[var(--fg)] md:py-2 md:text-[13px] ${
            activeSection === id
              ? 'bg-[var(--bg2)] text-[var(--accent)]'
              : 'text-[var(--fg2)]'
          }`}
          href={`#${id}`}
          onClick={() => setActiveSection(id)}
        >
          <span
            className={`h-[5px] w-[5px] shrink-0 rounded-full transition-[background] duration-150 ${
              activeSection === id ? 'bg-[var(--accent)]' : 'bg-[var(--fg3)]'
            }`}
          />
          {label}
        </a>
      ))}
    </nav>
  );
}
