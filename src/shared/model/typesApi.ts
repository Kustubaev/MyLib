export type User = {
  id: string;
  userName: string;
  password: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  roleId?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type Book = {
  id: string;
  title: string;
  isBn: boolean;
  authorId: string;
  categoryId: string;
  publicYear: Date;
  totalCopies: number;
  createdAt: Date;
  updatedAt: Date;
};
