import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Book } from "../../Interface/Interface"
import { BooksMock } from "../../data/Books"

export const BookPage = () => {
  const params = useParams<{ id: string }>()
  const [book, setBook] = useState<Book>()

  useEffect(() => {
    if (params.id) {
      setBook(BooksMock[params.id])
    }
  }, [params])

  return (
    <div>
      {book && (
        <>
          <div>{book.id}</div>
          <div>{book.title}</div>
          <div>{book.authorId}</div>
        </>
      )}
    </div>
  )
}
