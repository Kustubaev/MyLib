import { Books } from "../../components/Books/Books"
import cls from "./BooksPage.module.scss"

export const BooksPage = () => {
  return (
    <div className={cls.container}>
      <Books />
    </div>
  )
}
