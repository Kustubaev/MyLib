import React from 'react';
import { Link } from 'react-router-dom';
import { NavButton } from 'src/shared/ui/NavButton/NavButton';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavButton href='/'>Главная</NavButton>
        </li>
        <li>
          <NavButton href='books'>Книги</NavButton>
        </li>
        <li>
          <NavButton href='book'>Книга</NavButton>
        </li>
        <li>
          <NavButton href='history'>История</NavButton>
        </li>
        <li>
          <NavButton href='login'>Вход</NavButton>
        </li>
      </ul>
    </nav>
  );
};
