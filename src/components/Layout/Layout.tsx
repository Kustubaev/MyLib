import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import {
  selectIsAuthenticated,
  selectUser,
} from "../../features/user/userSlice"
import { Container } from "../Container/Container"
import { Header } from "../Header/Header"
import cls from "./Layout.module.scss"

export const Layout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      // navigate("/")
      // navigate("/auth") !!! Поменять
    }
  }, [])

  return (
    <div className={cls.container}>
      <Container>
        <Header />
        <div>
          <Outlet />
        </div>
      </Container>
    </div>
  )
}
