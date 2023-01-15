import { createContext, useState, useMemo, ReactNode, useContext } from 'react';

export interface ThemeContextProps {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export interface ThemeProviderProps {
  children?: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ mode, toggleMode }), [mode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  return useContext<ThemeContextProps>(ThemeContext);
};

export default ThemeProvider;
