import React, { useContext } from 'react';
import { ThemeContext, ThemeEnum } from 'src/app/providers/ThemeProvider/ui/ThemeProvider';
import { FaRegMoon } from 'react-icons/fa';
import { LuSunMedium } from 'react-icons/lu';
import { Button, ButtonTypeEnum } from 'src/shared/ui/Button/ui/Button';
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Navbar />
      <Button type={ButtonTypeEnum.BUTTON} onClick={() => toggleTheme()}>
        Кнопка переключения темы
      </Button>
    </div>
  );
};
