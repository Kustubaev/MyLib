import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { NextUIProvider } from "@nextui-org/react"
import { store } from "./app/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { AuthGuard } from "./features/user/authGuard"
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider"
import { Layout } from "./components/Layout/Layout"
import { BooksPage } from "./pages/BooksPage/BooksPage"
import { MainPage } from "./pages/MainPage/MainPage"
import { CurrentBookPage } from "./pages/CurrentBookPage/CurrentBookPage"
import { AuthPage } from "./pages/AuthPage/AuthPage"
import { ErrorPage } from "./pages/ErrorPage/ErrorPage"

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
        element: <CurrentBookPage />,
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
