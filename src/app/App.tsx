import React from 'react';
import { Header } from 'src/widgets/ui/Heared/Header';
import { AppRouter } from './providers/router/ui/AppRouter';
import { Container } from './ui/Container/Container';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
