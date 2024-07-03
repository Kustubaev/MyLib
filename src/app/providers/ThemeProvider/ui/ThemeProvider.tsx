import React, { FC, useState } from 'react';
import cls from './ThemeProvider.module.scss';

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light'
}

interface ThemeProviderType {
  theme: ThemeEnum;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ThemeProviderType>({
  theme: ThemeEnum.DARK,
  toggleTheme: () => null
});

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, ...otherProps } = props;

  const storedTheme = localStorage.getItem('theme');
  const currentTheme = storedTheme ? (storedTheme as ThemeEnum) : ThemeEnum.DARK;

  const [theme, setTheme] = useState(currentTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className={theme === ThemeEnum.LIGHT ? cls.light : cls.dark}>{children}</main>
    </ThemeContext.Provider>
  );
};
