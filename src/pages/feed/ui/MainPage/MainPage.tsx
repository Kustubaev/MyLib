import React from 'react';
import cls from './MainPage.module.scss';
import { Container } from 'src/app/ui/Container/Container';
// import { HeadTitle } from 'src/shared/ui/HeadTitle/HeadTitle';

export const MainPage = () => {
  return (
    <Container>
      <div className={cls.test}>
        <div className={cls.test}>
          <h1 className={cls.test}>Лучшие книги</h1>
        </div>
      </div>
    </Container>
  );
};
