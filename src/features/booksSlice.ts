import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userApi } from "../app/services/userApi"
import { RootState } from "../app/store"
import { Book, User } from "../Interface/Interface"
import { BooksMock } from "../data/Books"

interface InitialState {
  booksStore: Book[] | null
}

const initialState: InitialState = {
  booksStore: BooksMock,
}

const slice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      if (state.booksStore)
        state.booksStore = [action.payload, ...state.booksStore]
    },
    fillBook: (state, action: PayloadAction<Book[]>) => {
      state.booksStore = action.payload
    },
  },
})

export const { addBook, fillBook } = slice.actions
export default slice.reducer

export const selectBooks = (state: RootState) => state.auth.booksStore
