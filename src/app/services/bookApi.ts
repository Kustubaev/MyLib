import { Book } from "../types"
import { api } from "./api"

export const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation<Book, { content: string }>({
      query: (bookData) => ({
        url: "/posts",
        method: "POST",
        body: bookData,
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
