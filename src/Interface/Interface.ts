export interface Book {
  id: number
  title: string
  content: string
  authorId: number
  genreId: number
  dateCreated: Date
  dateUpdated: Date
  imageUrl: string
  publishDate: string
  publishHouse: string
  pageCount: number
  total_Copies: number
  condition: string
  image: string
}

export interface User {
  id: string
  fullName: string
  description: string
  address: string
  email: string
  roles: [string]
  phoneNumber: string
}
