import {
  useThemeContext,
  Theme,
} from '../../Providers/ThemeProvider/ThemeProvider';
import Sun from '../Icons/Sun/Sun';
import Moon from '../Icons/Moon/Moon';

const CYCLE: Theme[] = ['night', 'day'];

export function ThemeSwitch() {
  const { theme, setTheme } = useThemeContext();
  const isDark = theme === 'night';

  const cycleTheme = () => {
    const next = CYCLE[(CYCLE.indexOf(theme) + 1) % CYCLE.length];
    setTheme(next);
  };

  return (
    <button
      onClick={cycleTheme}
      aria-label={
        isDark
          ? 'So dark! I want to switch to light mode'
          : 'So bright! I want to switch to dark mode'
      }
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeSwitch;
