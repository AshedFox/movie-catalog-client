import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = 'dark' | 'light';

type ContextType = {
  theme: Theme;
  setTheme: (value: Theme) => void;
  switchTheme: () => void;
};

const ThemeContext = createContext<ContextType>(null!);

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      handleChange('dark');
    } else {
      handleChange('light');
    }
  }, []);

  const handleChange = (value: Theme) => {
    localStorage.setItem('theme', value);
    setTheme(value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleChange,
        switchTheme: () => handleChange(theme === 'dark' ? 'light' : 'dark'),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
