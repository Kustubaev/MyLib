import React from 'react';
import { Link } from 'react-router-dom';
import { NavButton } from 'src/shared/ui/NavButton/NavButton';
import cls from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <ul className={cls.navbar__ul}>
        <li className={cls.navbar__ul__li}>
          <NavButton href='/'>Главная</NavButton>
        </li>
        <li className={cls.navbar__ul__li}>
          <NavButton href='books'>Книги</NavButton>
        </li>
        <li className={cls.navbar__ul__li}>
          <NavButton href='book'>Книга</NavButton>
        </li>
        <li className={cls.navbar__ul__li}>
          <NavButton href='history'>История</NavButton>
        </li>
        <li className={cls.navbar__ul__li}>
          <NavButton href='login'>Вход</NavButton>
        </li>
      </ul>
    </nav>
  );
};
