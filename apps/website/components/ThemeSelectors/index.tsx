import {
  Theme,
  useThemeContext,
} from '../../Providers/ThemeProvider/ThemeProvider';

const THEMES: { value: Theme; label: string }[] = [
  { value: 'day', label: 'Day' },
  { value: 'night', label: 'Night' },
];

export default function ThemeSelectors() {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="flex gap-[6px]">
      {THEMES.map(({ value, label }) => (
        <button
          key={value}
          className={`cursor-pointer rounded-md border px-2.5 py-1 text-[11px] font-semibold transition-[background,color,border-color] duration-150 ${
            theme === value
              ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
              : 'border-[var(--border)] bg-[var(--bg2)] text-[var(--fg3)] hover:border-[var(--fg3)] hover:text-[var(--fg)]'
          }`}
          onClick={() => setTheme(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
