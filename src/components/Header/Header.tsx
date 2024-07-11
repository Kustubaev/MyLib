import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"
import { FC, useContext } from "react"
import { CiLogin, CiLogout } from "react-icons/ci"
import { FaRegMoon } from "react-icons/fa"
import { LuSunMedium } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout, selectIsAuthenticated } from "../../features/user/userSlice"
import { Button } from "../Button/Button"
import { ThemeContext } from "../ThemeProvider/ThemeProvider"
import cls from "./Header.module.scss"

export const Header: FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const hadleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("token")
    navigate("/auth")
  }

  console.log("cls.container", cls.container)

  return (
    <Navbar className={cls.container}>
      <NavbarBrand>
        <Button
          variant="ghost"
          color="default"
          onClick={() => {
            navigate("/")
          }}
        >
          <span>MyLib</span>
        </Button>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Button
            onClick={() => {
              navigate("/")
            }}
          >
            <span>Главная</span>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            onClick={() => {
              navigate("/books")
            }}
          >
            <span>Все книги</span>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            onClick={() => {
              navigate("/admin")
            }}
          >
            <span>Админка</span>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="lg:flex text-3xl cursor-pointer">
          <Button isIconOnly onClick={() => toggleTheme()}>
            {theme === "light" ? (
              <FaRegMoon className={cls.icon} />
            ) : (
              <LuSunMedium className={cls.icon} />
            )}
          </Button>
        </NavbarItem>

        <NavbarItem>
          {isAuthenticated ? (
            <Button color="default" onClick={hadleLogout}>
              <CiLogout /> <span>Выйти</span>
            </Button>
          ) : (
            <Button
              color="default"
              onClick={() => {
                navigate("/auth")
              }}
            >
              <CiLogin /> <span>Войти</span>
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
