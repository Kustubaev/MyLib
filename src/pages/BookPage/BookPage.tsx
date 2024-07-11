import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Book } from "../../Interface/Interface"
import { PageTitle } from "../../components/PageTitle/PageTitle"
import PageSlider from "../../components/PageSlider/PageSlider"
import cls from "./BookPage.module.scss"
import { Image } from "../../components/Image/Image"
import { useSelector } from "react-redux"

export const BookPage = () => {
  const { booksStore } = useSelector((state) => state?.books)
  const params = useParams<{ id: string }>()
  const [book, setBook] = useState<Book>()
  const navigate = useNavigate()

  const concatSrc = (path: string) => {
    return "../src/img/" + path
  }

  useEffect(() => {
    console.log(params.id)

    if (params.id) {
      const bookId = parseInt(params.id)
      const foundBook: Book | undefined = booksStore.find(
        (book) => book.id === bookId,
      )
      !foundBook && navigate("/books")
      setBook(foundBook)
    } else {
      navigate("/books")
    }
  }, [params])

  return (
    <div>
      <div className={cls.BookDetailBlock}>
        <div className={cls.BookDetailBlock__left}>
          <Image
            className={cls.BookDetailBlock__left__img}
            path={concatSrc(book?.image)}
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur accusantium deserunt, id natus reprehenderit debitis
                  numquam magni ut assumenda mollitia eos eligendi ab fugit
                  explicabo aperiam doloribus voluptatibus consequatur
                  praesentium?
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
