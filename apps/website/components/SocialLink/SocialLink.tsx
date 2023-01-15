import type { ReactNode } from 'react';

export interface SocialLinkProps {
  href: string;
  label: string;
  children?: ReactNode;
}

export function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gold flex items-center transition-colors"
      aria-label={`navigate to ${label}`}
    >
      {children}
    </a>
  );
}

export default SocialLink;
