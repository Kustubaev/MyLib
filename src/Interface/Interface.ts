export interface Book {
  id: number
  title: string
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
}
