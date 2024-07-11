import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Book } from "../../Interface/Interface"
import { BooksMock } from "../../data/Books"
import { PageTitle } from "../../components/PageTitle/PageTitle"
import PageSlider from "../../components/PageSlider/PageSlider"
import cls from "./BookPage.module.scss"

export const BookPage = () => {
  const params = useParams<{ id: string }>()
  const [book, setBook] = useState<Book>()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.id) {
      const bookId = parseInt(params.id)
      const foundBook: Book | undefined = BooksMock.find(
        (book) => book.id === bookId,
      )
      !foundBook && navigate("/books")
      setBook(foundBook)
    } else {
      navigate("/books")
    }
  }, [params])

  console.log(cls.BookDetailBlock)
  return (
    <div>
      <div className={cls.BookDetailBlock}>
        <div className={cls.BookDetailBlock__left}>
          <img
            className={cls.BookDetailBlock__left__img}
            src="../src/img/ExampleOblojka1.webp"
            alt=""
          />
        </div>

        {book && (
          <>
            {/* <div>{book.title}</div>
            <div>{book.content}</div> */}

            <div className={cls.BookDetailBlock__right}>
              <div className={cls.BookDetailBlock__right__title}>
                <PageTitle title={book.title} />
              </div>

              <div className={cls.BookDetailBlock__right__info}>
                <div className={cls.BookDetailBlock__right__info__genre}>
                  Жанр: жанр
                </div>
                <div className={cls.BookDetailBlock__right__info__author}>
                  Автор: Иван Иванов
                </div>
              </div>

              <div className={cls.BookDetailBlock__right__about}>
                <div className={cls.BookDetailBlock__right__about__title}>
                  О книге
                </div>
                <div className={cls.BookDetailBlock__right__about__text}>
                  {book.content}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <PageSlider title="Лучшие книги" />
    </div>
  )
}
