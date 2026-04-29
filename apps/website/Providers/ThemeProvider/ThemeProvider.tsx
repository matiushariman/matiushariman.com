import {
  createContext,
  useState,
  useMemo,
  useEffect,
  ReactNode,
  useContext,
} from 'react';

export type Theme = 'warm' | 'slate' | 'night';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export interface ThemeProviderProps {
  children?: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('night');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored && ['warm', 'slate', 'night'].includes(stored)) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () =>
  useContext<ThemeContextProps>(ThemeContext);

export default ThemeProvider;
