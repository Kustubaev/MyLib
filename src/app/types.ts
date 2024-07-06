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

export interface Book {
  id: string
  content: string
  author: User
  authorId: string
  createdAt: Date
  updatedAt: Date
}
