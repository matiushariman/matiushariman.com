import {
  createContext,
  useState,
  useMemo,
  type ReactNode,
  useContext,
} from 'react';

export type Theme = 'day' | 'night';

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

export const THEMES: { value: Theme; label: string }[] = [
  { value: 'day', label: 'Day' },
  { value: 'night', label: 'Night' },
];

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(THEMES[1].value);

  const value: ThemeContextProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () =>
  useContext<ThemeContextProps>(ThemeContext);

export default ThemeProvider;
