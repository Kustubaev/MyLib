import { Book } from "../Interface/Interface"
import { getPropertyByString } from "./getPropertyByString"

export const sortBooksMove = (item: Book[], path: string) => {
  if (!path) return item
  return (
    item &&
    [...item].sort((a, b) =>
      (getPropertyByString(a, path) as string).localeCompare(
        getPropertyByString(b, path) as string,
      ),
    )
  )
}

export const sortBookAuthor = (item: Book[], value: string) => {
  if (!value) return item
  return item && [...item].filter((post) => post.authorId === parseInt(value))
}
export const sortBookGenre = (item: Book[], value: string) => {
  if (!value) return item
  return item && [...item].filter((post) => post.genreId === parseInt(value))
}
export const sortBookPageCount = (item: Book[], value: string) => {
  if (!value) return item
  switch (value) {
    case "1":
      return item && [...item].filter((post) => post.pageCount < 100)
    case "2":
      return (
        item &&
        [...item].filter(
          (post) => post.pageCount >= 100 && post.pageCount <= 250,
        )
      )
    case "3":
      return item && [...item].filter((post) => post.pageCount > 250)
    default:
      return item
  }
}
