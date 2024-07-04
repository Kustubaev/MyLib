import { Post } from '../model/typesApi';
import { api } from './api';

export const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<Post, { content: string }>({
      query: (booksData) => ({
        url: '/books',
        method: 'POST',
        body: booksData
      })
    }),
    getAllPosts: builder.query<Post[], void>({
      query: () => ({
        url: '/books',
        method: 'GET'
      })
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'GET'
      })
    }),
    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useCreatePostMutation,
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useDeletePostMutation,
  useLazyGetAllPostsQuery,
  useLazyGetPostByIdQuery
} = booksApi;

export const {
  endpoints: { createPost, getAllPosts, getPostById, deletePost }
} = booksApi;
