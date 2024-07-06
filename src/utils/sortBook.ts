import { Book } from "../app/types"
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

export const sortBooksException = (item: Book[], value: string) => {
  if (!value) return item
  return item && [...item].filter((post) => post.author.email === value)
}
