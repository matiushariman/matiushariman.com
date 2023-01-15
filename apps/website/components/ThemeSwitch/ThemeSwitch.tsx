import { useThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import Sun from '../Icons/Sun/Sun';
import Moon from '../Icons/Moon/Moon';

export function ThemeSwitch() {
  const { toggleMode, mode } = useThemeContext();

  return (
    <button onClick={toggleMode}>
      {mode === 'light' ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeSwitch;
