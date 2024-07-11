import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import auth from "../features/user/userSlice"
import books from "../features/booksSlice"
import { listenerMiddleware } from "../middleware/auth"
import { api } from "./services/api"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    books,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
