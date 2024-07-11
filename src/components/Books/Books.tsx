import { useEffect, useMemo, useState } from "react"
import { Book } from "../../Interface/Interface"
import { BooksMock } from "../../data/Books"
import {
  sortBookAuthor,
  sortBookGenre,
  sortBookPageCount,
  sortBooksMove,
} from "../../utils/sortBook"
import { Card } from "../Card/Card"
import { Select } from "../Select/Select"
import cls from "./Books.module.scss"
import { fillBook, selectBooks } from "../../features/booksSlice"
import { useSelector } from "react-redux"

export const Books = () => {
  const { booksStore } = useSelector((state) => state?.books)
  const data: Book[] = useMemo(() => {
    return [...booksStore]
  }, [])

  console.log(data)

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
            { value: "4", name: "Харуки Мураками" },
            { value: "5", name: "Елена Ферранте" },
            { value: "6", name: "Салман Рушди" },
            { value: "7", name: "Хан Канг" },
          ]}
        />
        <Select
          value={sortedKey.genre}
          onChange={(value) => setSortedKey({ ...sortedKey, genre: value })}
          label="Жанр"
          className={cls.select}
          options={[
            { value: "1", name: "Роман" },
            { value: "2", name: "Детектив" },
            { value: "3", name: "Фэнтези" },
            { value: "4", name: "Научная фантастика" },
            { value: "5", name: "Психологический роман" },
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
