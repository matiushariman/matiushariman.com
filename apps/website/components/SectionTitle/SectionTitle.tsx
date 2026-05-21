interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-6 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
      {children}
    </div>
  );
}

export default SectionTitle;
