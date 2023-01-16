import { useThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import Sun from '../Icons/Sun/Sun';
import Moon from '../Icons/Moon/Moon';

export function ThemeSwitch() {
  const { toggleMode, mode } = useThemeContext();
  const isLightMode = mode === 'light';

  return (
    <button
      onClick={toggleMode}
      aria-label={
        isLightMode
          ? 'So bright! I want to switch to dark mode'
          : 'So dark! I want to switch to light mode'
      }
    >
      {isLightMode ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeSwitch;
