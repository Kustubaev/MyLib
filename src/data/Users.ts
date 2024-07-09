import { User } from "../Interface/Interface"

export const UsersMock: User[] = [
  {
    id: "1",
    fullName: "Иванов Пётр Сидорович",
    description: "Небольшое описание",
    address: "Ленина 87",
    email: "test1@test.ru",
    roles: ["user"],
    phoneNumber: "89547856826",
  },
  {
    id: "2",
    fullName: "Тигранович Артур Римович",
    description: "Отсутствие описания",
    address: "Легиградская 87",
    email: "test2@test.ru",
    roles: ["user"],
    phoneNumber: "89547856826",
  },
  {
    id: "3",
    fullName: "Троцкий Сергей Петрович",
    description: "Большое описание",
    address: "Ленина 78",
    email: "test3@test.ru",
    roles: ["user"],
    phoneNumber: "89547856826",
  },
]
