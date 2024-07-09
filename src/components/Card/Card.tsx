import { Card as NextUiCard } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { Book } from "../../Interface/Interface"

interface CardProps {
  book: Book
}

export const Card = ({ book }: CardProps) => {
  const navigate = useNavigate()

  return (
    <NextUiCard className="mb-5">
      <div>{book.id}</div>
      <div>{book.title}</div>
      <div>{book.authorId}</div>
      <div>"-------------"</div>
      <button
        type="button"
        onClick={() => {
          navigate(`/books/${book.id}`)
        }}
      >
        Подробнее
      </button>
      {/* <CardHeader className="justify-between items-center bg-transparent">
        <User
          name={name}
          className="text-small font-semibold leading-none text-default-600"
          avatarUrl={avatarUrl}
          description={createdAt && formatToClientDate(createdAt)}
        />
        {authorId === currentUser?.id && (
          <div className="cursor-pointer" onClick={handleDelete}>
            {deleteBookStatus.isLoading ? <Spinner /> : <RiDeleteBinLine />}
          </div>
        )}
      </CardHeader>
      <CardBody className="px-3 py-2 mb-5">
        <Typography>{content}</Typography>
      </CardBody>
      {cardFor !== "comment" && (
        <CardFooter className="gap-3">
          <div className="flex gap-5 items-center">
            <Link to={`/books/${id}`}>Подробнее</Link>
          </div>
          <ErrorMessage error={error} />
        </CardFooter>
      )} */}
    </NextUiCard>
  )
}
