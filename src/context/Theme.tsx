import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';

import { type ThemeType } from '@customTypes';

type ThemeContextDefinition = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const THEME_DEFAULT_VALUES: ThemeContextDefinition = {
  theme: 'light',
  toggleTheme: () => {}
};

// -- Singleton Object, globally accessible -- //
const ThemeContext = createContext<ThemeContextDefinition>(THEME_DEFAULT_VALUES);

// -- Context Provider -- //

type ThemeProviderProps = {
  children: React.ReactNode;
  initialTheme?: ThemeType;
};

export const ThemeProvider = ({ children, initialTheme = 'dark' }: ThemeProviderProps): ReactNode => {
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = useCallback(() => {
    setTheme((previousThemeValue) => (previousThemeValue === 'dark' ? 'light' : 'dark'));
  }, []);

  const ThemeValues = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={ThemeValues}>{children}</ThemeContext.Provider>;
};

ThemeProvider.defaultProps = {
  initialTheme: 'dark'
};

export function useTheme() {
  return useContext(ThemeContext);
}
