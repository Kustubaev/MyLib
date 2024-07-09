import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from "./app/store"
import { Layout } from "./components/Layout/Layout"
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider"
import { AuthGuard } from "./features/user/authGuard"
import "./index.css"
import { AuthPage } from "./pages/AuthPage/AuthPage"
import { BooksPage } from "./pages/BooksPage/BooksPage"
import { CurrentBookPage } from "./pages/CurrentBookPage/CurrentBookPage"
import { ErrorPage } from "./pages/ErrorPage/ErrorPage"
import { MainPage } from "./pages/MainPage/MainPage"
import { BookPage } from "./pages/BookPage/BookPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "books/:id",
        element: <BookPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <AuthGuard>
        <RouterProvider router={router} />
      </AuthGuard>
    </ThemeProvider>
  </Provider>,
)
