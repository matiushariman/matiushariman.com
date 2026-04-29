import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from '../../constants/URL';

const CONTACTS = [
  {
    href: 'mailto:matius.hariman@gmail.com',
    label: 'Email',
    sub: 'matius.hariman@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    href: LINKEDIN_PROFILE_URL,
    label: 'LinkedIn',
    sub: 'linkedin.com/in/matiushariman',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zm-1.5-12.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM19 19h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5S11 12.12 11 13.5V19H8V8h3v1.5c.88-1.3 2.3-2 3.5-2 2.76 0 4.5 1.74 4.5 4.5V19z" />
      </svg>
    ),
  },
  {
    href: GITHUB_PROFILE_URL,
    label: 'GitHub',
    sub: 'github.com/matiushariman',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export function Contact() {
  return (
    <>
      <div className="section-label">Get in touch</div>
      <div className="contact-row">
        {CONTACTS.map(({ href, label, sub, icon }) => (
          <a
            key={label}
            className="contact-item"
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
          >
            <div className="contact-icon">{icon}</div>
            <div>
              <div className="contact-label">{label}</div>
              <div className="contact-sub">{sub}</div>
            </div>
            <div className="contact-arrow"><ArrowIcon /></div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Contact;
