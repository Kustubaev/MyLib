import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as NextUiCard,
  Spinner,
} from "@nextui-org/react"
import { useState } from "react"
import { RiDeleteBinLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {
  useDeleteBookMutation,
  useLazyGetAllBooksQuery,
  useLazyGetBookByIdQuery,
} from "../../app/services/bookApi"
import { selectCurrent } from "../../features/user/userSlice"
import { hasErrorField } from "../../utils/hasErrorField"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { Typography } from "../Typography/Typography"
import { formatToClientDate } from "../../utils/formatToClientDate"
import { User } from "../User/User"

interface CardProps {
  avatarUrl: string
  name: string
  authorId: string
  content: string
  commentId?: string
  likesCount?: number
  commentsCount?: number
  createdAt?: Date
  id?: string
  cardFor: "comment" | "post" | "current-post"
  likedByUser?: boolean
}

export const Card = ({
  avatarUrl = "",
  name = "",
  content = "",
  authorId = "",
  id = "",
  likesCount = 0,
  commentsCount = 0,
  cardFor = "post",
  likedByUser = false,
  createdAt,
  commentId = "",
}: CardProps) => {
  const [triggerGetAllBooks] = useLazyGetAllBooksQuery()
  const [triggerGetBookById] = useLazyGetBookByIdQuery()
  const [deleteBook, deleteBookStatus] = useDeleteBookMutation()
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const currentUser = useSelector(selectCurrent)

  const refetchBooks = async () => {
    switch (cardFor) {
      case "post":
        await triggerGetAllBooks().unwrap()
        break
      case "current-post":
        await triggerGetAllBooks().unwrap()
        break
      case "comment":
        await triggerGetBookById(id).unwrap()
        break
      default:
        throw new Error("Неверный аргумент cardFor")
    }
  }

  const handleClick = async () => {
    try {
      await refetchBooks()
    } catch (err) {
      if (hasErrorField(err)) {
        setError(err.data.error)
      } else {
        setError(err as string)
      }
    }
  }

  const handleDelete = async () => {
    try {
      switch (cardFor) {
        case "post":
          await deleteBook(id).unwrap()
          await refetchBooks()
          break
        case "current-post":
          await deleteBook(id).unwrap()
          navigate("/")
          break
        case "comment":
          await refetchBooks()
          break
        default:
          throw new Error("Неверный аргумент cardFor")
      }
    } catch (err) {
      console.log(err)
      if (hasErrorField(err)) {
        setError(err.data.error)
      } else {
        setError(err as string)
      }
    }
  }

  return (
    <NextUiCard className="mb-5">
      <CardHeader className="justify-between items-center bg-transparent">
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
      )}
    </NextUiCard>
  )
}
