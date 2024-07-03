import { Header } from 'src/widgets/ui/Heared/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './app/ui/Container/Container';

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
