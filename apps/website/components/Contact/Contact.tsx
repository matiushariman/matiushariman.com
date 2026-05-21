import type { ReactNode } from 'react';
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from '../../constants/URL';
import { LinkedIn } from '../Icons/LinkedIn';
import { GitHub } from '../Icons/GitHub';
import SectionTitle from '../SectionTitle/SectionTitle';

interface ContactItem {
  href: string;
  label: string;
  sub: string;
  icon: ReactNode;
}

const CONTACTS: ContactItem[] = [
  {
    href: LINKEDIN_PROFILE_URL,
    label: 'LinkedIn',
    sub: 'linkedin.com/in/matiushariman',
    icon: <LinkedIn width={16} height={16} />,
  },
  {
    href: GITHUB_PROFILE_URL,
    label: 'GitHub',
    sub: 'github.com/matiushariman',
    icon: <GitHub width={16} height={16} />,
  },
];

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export function Contact() {
  return (
    <>
      <SectionTitle>Get in touch</SectionTitle>
      <div className="flex flex-col gap-3">
        {CONTACTS.map(({ href, label, sub, icon }) => (
          <a
            key={label}
            className="group flex items-center gap-[14px] rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-5 py-4 no-underline transition-[background,border-color,transform] duration-150 hover:translate-x-1 hover:border-[var(--accent)]"
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
            aria-label={label}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-[var(--border)] bg-[var(--bg)] text-[var(--accent)]">
              {icon}
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--fg)]">{label}</div>
              <div className="text-xs text-[var(--fg3)]">{sub}</div>
            </div>
            <div className="ml-auto text-[var(--fg3)] transition-colors duration-150 group-hover:text-[var(--accent)]">
              <ArrowIcon />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Contact;
