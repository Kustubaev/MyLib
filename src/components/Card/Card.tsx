import { Card as NextUiCard } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { Book } from "../../Interface/Interface"
import { Image } from "../Image/Image"
import cls from "./Card.module.scss"
import { Authors, AuthorsMock } from "../../data/Authors"
import { useMemo } from "react"

interface CardProps {
  book: Book
}

export const Card = ({ book }: CardProps) => {
  const authors: Authors[] = useMemo(() => {
    return [...AuthorsMock]
  }, [])

  const navigate = useNavigate()

  const concatSrc = (path: string) => {
    return "./src/img/" + path
  }

  return (
    <NextUiCard className={cls.Card}>
      <div className={cls.Card__left}>
        <Image
          className={cls.Card__left__img}
          path={concatSrc(book.image)}
          alt=""
        />
      </div>

      <div className={cls.Card__right}>
        <div className={cls.Card__right__header}>
          <div className={cls.Card__right__header__title}>{book.title}</div>
          <button
            className={cls.Card__right__header__button}
            type="button"
            onClick={() => {
              navigate(`/books/${book.id}`)
            }}
          >
            Подробнее
          </button>
        </div>
        <div className={cls.Card__right__info}>
          <div className={cls.Card__right__info__block}>
            <div className={cls.Card__right__info__block__title}>Автор:</div>
            <div className={cls.Card__right__info__block__text}>
              {authors?.[book.authorId]?.name}
            </div>
          </div>
          <div className={cls.Card__right__info__block}>
            <div className={cls.Card__right__info__block__title}>
              Дата выхода:
            </div>
            <div className={cls.Card__right__info__block__text}>
              {book.publishDate}
            </div>
          </div>
        </div>
        {/* <div>{book.id}</div> */}
        <div className={cls.Card__right__text}>{book.content}</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        accusantium deserunt, id natus reprehenderit debitis numquam magni ut
        assumenda mollitia eos eligendi ab fugit explicabo aperiam doloribus
        voluptatibus consequatur praesentium?
      </div>
    </NextUiCard>
  )
}
