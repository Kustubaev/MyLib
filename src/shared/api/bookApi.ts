import { Book } from '../model/typesApi';
import { api } from './api';

export const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation<Book, { content: string }>({
      query: (booksData) => ({
        url: '/books',
        method: 'POST',
        body: booksData
      })
    }),
    getAllBooks: builder.query<Book[], void>({
      query: () => ({
        url: '/books',
        method: 'GET'
      })
    }),
    getBookById: builder.query<Book, string>({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'GET'
      })
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useCreateBookMutation,
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useDeleteBookMutation,
  useLazyGetAllBooksQuery,
  useLazyGetBookByIdQuery
} = booksApi;

export const {
  endpoints: { createBook, getAllBooks, getBookById, deleteBook }
} = booksApi;
