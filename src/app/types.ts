import { Book } from "../Interface/Interface"

export interface User {
  id: string
  email: string
  password: string
  name?: string
  avatarUrl?: string
  createdAt: Date
  updatedAt: Date
  book: Book[]
}
