import { Card as NextUiCard } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { Book } from "../../Interface/Interface"
import cls from "./Card.module.scss"

interface CardProps {
  book: Book
}

export const Card = ({ book }: CardProps) => {
  const navigate = useNavigate()

  console.log(cls.Card)
  console.log(cls.Card__right)
  console.log(cls.Card__right__header)
  console.log(cls.Card__right__header__title)
  console.log(cls.Card__right__header__button)
  console.log(cls.Card__left)
  console.log(cls.Card__right__info)
  console.log(cls.Card__right__info__block)
  console.log(cls.Card__right__info__block__title)
  console.log(cls.Card__right__info__block__title)

  return (
    <NextUiCard className={cls.Card}>
      {/* <div className={cls.Card__left}>
        <img className={cls.Card__left__img} src="" alt="" />
      </div> */}

      <div className={cls.Card__right}>
        <div className={cls.Card__right__header}>
          <div className={cls.Card__right__header__title}>{book.title}</div>
          <button
            className={cls.Card__right__header__button}
            type="button"
            onClick={() => {
              navigate(`/books/${book.id - 1}`)
            }}
          >
            Подробнее
          </button>
        </div>
        <div className={cls.Card__right__info}>
          <div className={cls.Card__right__info__block}>
            <div className={cls.Card__right__info__block__title}>Автор:</div>
            <div className={cls.Card__right__info__block__text}>
              {book.authorId}
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
