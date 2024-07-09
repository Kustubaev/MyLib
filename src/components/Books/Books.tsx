import { useEffect, useState } from "react"
import { useGetAllBooksQuery } from "../../app/services/bookApi"
import { arrayToObject } from "../../utils/arrayToObject"
import {
  sortBookAuthor,
  sortBookGenre,
  sortBookPageCount,
  sortBooksException,
  sortBooksMove,
} from "../../utils/sortBook"
import { Card } from "../Card/Card"
import { Select } from "../Select/Select"
import cls from "./Books.module.scss"
import { Book } from "../../Interface/Interface"
import { BooksMock } from "../../data/Books"

interface SeceltProps {
  value: string
  name: string
}

export const Books = () => {
  const data = BooksMock

  // const { data } = useGetAllBooksQuery()

  const [books, setBooks] = useState<Book[]>([])
  const [sortedKey, setSortedKey] = useState({
    category: "",
    author: "",
    genre: "",
    count: "",
  })

  useEffect(() => {
    if (data) {
      setBooks(data)
    }
  }, [data])

  useEffect(() => {
    if (data) {
      console.log(sortedKey)

      let newArray = [...data]
      newArray = sortBooksMove(newArray, sortedKey.category)
      newArray = sortBookAuthor(newArray, sortedKey.author)
      newArray = sortBookGenre(newArray, sortedKey.genre)
      newArray = sortBookPageCount(newArray, sortedKey.count)
      setBooks(newArray)
    }
  }, [sortedKey])

  return (
    <div className={cls.container}>
      <div className={cls.content__left}>
        <Select
          value={sortedKey.category}
          onChange={(value) => setSortedKey({ ...sortedKey, category: value })}
          label="Сортировать по"
          className={cls.select}
          options={[
            { value: "title", name: "По названию" },
            { value: "content", name: "По содержанию" },
            { value: "publishDate", name: "Сначала старые" },
          ]}
        />
        {books && books.length > 0
          ? books.map((item, index) => <Card book={item} key={index} />)
          : null}
      </div>
      <div className={cls.content__right}>
        <Select
          value={sortedKey.author}
          onChange={(value) => setSortedKey({ ...sortedKey, author: value })}
          label="Автор"
          className={cls.select}
          options={[
            { value: "1", name: "Фёдор Михайлович Достоевский" },
            { value: "2", name: "Александр Сергеевич Пушкин" },
            { value: "3", name: "Лев Николаевич Толстой" },
          ]}
        />
        <Select
          value={sortedKey.genre}
          onChange={(value) => setSortedKey({ ...sortedKey, genre: value })}
          label="Жанр"
          className={cls.select}
          options={[
            { value: "1", name: "Рассказы" },
            { value: "2", name: "Новелла" },
            { value: "3", name: "Роман" },
          ]}
        />
        <Select
          value={sortedKey.count}
          onChange={(value) => setSortedKey({ ...sortedKey, count: value })}
          label="Количество страниц"
          className={cls.select}
          options={[
            { value: "1", name: "<100" },
            { value: "2", name: "100-250" },
            { value: "3", name: ">250" },
          ]}
        />
      </div>
    </div>
  )
}
