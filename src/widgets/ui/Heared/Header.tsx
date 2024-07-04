import React, { useContext } from 'react';
import { ThemeContext, ThemeEnum } from 'src/app/providers/ThemeProvider/ui/ThemeProvider';
import { FaRegMoon } from 'react-icons/fa';
import { LuSunMedium } from 'react-icons/lu';
import { Button, ButtonTypeEnum } from 'src/shared/ui/Button/ui/Button';
import { Navbar } from '../Navbar/Navbar';
import cls from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={cls.header}>
      <Navbar />
      <Button
        className={cls.header__themeBtn}
        type={ButtonTypeEnum.BUTTON}
        onClick={() => toggleTheme()}
      >
        Кнопка переключения темы
      </Button>
    </div>
  );
};
