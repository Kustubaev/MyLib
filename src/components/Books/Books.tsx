import { useEffect, useState } from "react"
import { useGetAllBooksQuery } from "../../app/services/bookApi"
import { Book } from "../../app/types"
import { arrayToObject } from "../../utils/arrayToObject"
import { sortBooksException, sortBooksMove } from "../../utils/sortBook"
import { Card } from "../Card/Card"
import { Select } from "../Select/Select"
import cls from "./Books.module.scss"

interface SeceltProps {
  value: string
  name: string
}

export const Books = () => {
  const { data } = useGetAllBooksQuery()
  const [uniqueAuthor, setUniqueAuthor] = useState<SeceltProps[]>([])

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

      setUniqueAuthor(
        arrayToObject([...new Set([...data].map((post) => post.author.email))]),
      )
    }
    console.log(data)
  }, [data])

  useEffect(() => {
    if (data) {
      let newArray = [...data]
      newArray = sortBooksMove(newArray, sortedKey.category)
      newArray = sortBooksException(newArray, sortedKey.author)
      newArray = sortBooksException(newArray, sortedKey.genre)
      newArray = sortBooksException(newArray, sortedKey.count)
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
            { value: "content", name: "По содержанию" },
            { value: "author.name", name: "По автору" },
            { value: "createdAt", name: "Сначала старые" },
          ]}
        />
        {books && books.length > 0
          ? books.map(({ content, author, id, authorId, createdAt }) => (
              <Card
                key={id}
                avatarUrl={author.avatarUrl ?? ""}
                content={content}
                name={author.name ?? ""}
                authorId={authorId}
                id={id}
                createdAt={createdAt}
                cardFor="post"
              />
            ))
          : null}
      </div>
      <div className={cls.content__right}>
        <Select
          value={sortedKey.author}
          onChange={(value) => setSortedKey({ ...sortedKey, author: value })}
          label="Автор"
          className={cls.select}
          options={uniqueAuthor}
        />
        <Select
          value={sortedKey.genre}
          onChange={(value) => setSortedKey({ ...sortedKey, genre: value })}
          label="Жанр"
          className={cls.select}
          options={uniqueAuthor}
        />
        <Select
          value={sortedKey.count}
          onChange={(value) => setSortedKey({ ...sortedKey, count: value })}
          label="Количество страниц"
          className={cls.select}
          options={uniqueAuthor}
        />
      </div>
    </div>
  )
}
