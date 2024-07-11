import { Book } from "../../Interface/Interface"
import { api } from "./api"

interface CreateBookDataProps {
  isPublic?: boolean
  authorId?: number
  pageCount?: number
  title?: string
  publishDate?: string
  publishHouse?: string
}

interface CreateBookContentProps {
  newData: CreateBookDataProps
  genreId: string
}

export const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation<Book, CreateBookContentProps>({
      query: ({ newData, genreId }) => ({
        url: `/Book/?genreId=${genreId}`,
        method: "POST",
        body: newData,
      }),
    }),
    getAllBooks: builder.query<Book[], void>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getBookById: builder.query<Book, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useCreateBookMutation,
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useDeleteBookMutation,
  useLazyGetAllBooksQuery,
  useLazyGetBookByIdQuery,
} = bookApi

export const {
  endpoints: { createBook, getAllBooks, getBookById, deleteBook },
} = bookApi
