import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { BookPage } from './pages/feed/ui/BookPage/BookPage';
import { BooksPage } from './pages/feed/ui/BooksPage/BooksPage';
import { ErrorPage } from './pages/feed/ui/ErrorPage/ErrorPage';
import { MainPage } from './pages/feed/ui/MainPage/MainPage';
import { store } from './shared/services/store';
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider';
import { LoginPage } from './pages/feed/ui/LoginPage/LoginPage';
import { HistoryPage } from './pages/feed/ui/HistoryPage/HistoryPage';
import { App } from './app/App';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
        path: 'books',
        element: <BooksPage />
      },
      {
        path: 'book',
        // path: 'book/:id',
        element: <BookPage />
      },
      {
        path: 'history',
        element: <HistoryPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
