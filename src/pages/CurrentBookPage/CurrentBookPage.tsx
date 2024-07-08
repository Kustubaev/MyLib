import { useParams } from "react-router-dom"
import { useGetBookByIdQuery } from "../../app/services/bookApi"
import { Card } from "../../components/Card/Card"
import { GoBack } from "../../components/GoBack/GoBack"

export const CurrentBookPage = () => {
  const params = useParams<{ id: string }>()
  const { data } = useGetBookByIdQuery(params?.id ?? "")

  if (!data) {
    return <h2>Книги не существует</h2>
  }

  const { content, id, authorId, author, createdAt } = data

  return (
    <>
      <GoBack />
      <Card
        cardFor="current-post"
        avatarUrl={author?.avatarUrl ?? ""}
        content={content}
        name={author?.name ?? ""}
        authorId={authorId}
        id={id}
        createdAt={createdAt}
      />
    </>
  )
}
