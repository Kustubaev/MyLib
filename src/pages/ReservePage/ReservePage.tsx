import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Book, User } from "../../Interface/Interface"
import { Button } from "../../components/Button/Button"
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage"
import { Input } from "../../components/Input/Input"
import { SelectForm } from "../../components/SelectForm/SelectForm"
import { BooksMock } from "../../data/Books"
import { UsersMock } from "../../data/Users"
import { useNavigate } from "react-router-dom"
import cls from "./ReservePage.module.scss"
import { useDisclosure } from "@nextui-org/react"
import { Modal } from "../../components/Modal/Modal"
import { InputSelect } from "../../components/InputSelect/InputSelect"
import { Authors, AuthorsMock } from "../../data/Authors"
import { AddUser } from "../../components/AddUser/AddUser"

interface SelectProps {
  value: number
  name: string
}

export const ReservePage = () => {
  const navigate = useNavigate()
  const books: Book[] = [...BooksMock]
  const users: User[] = [...UsersMock]
  const authors: Authors[] = [...AuthorsMock]

  const [bookOptions, setBookOptions] = useState<SelectProps[]>([])
  const [userOptions, setUserOptions] = useState<SelectProps[]>([])
  const [authorsOptions, setAuthorsOptionss] = useState<SelectProps[]>([])

  const [bookValue, setBookValue] = useState<Book>()
  const [userValue, setUserValue] = useState<User>()
  const [conditionValue, setConditionValue] = useState<string>()
  const [commentValue, setCommentValue] = useState<string>()

  // Для отрисовки выбранных данных используем bookValue и userValue

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm()

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    authors &&
      setAuthorsOptionss(
        [...authors].map((item, index) => ({
          value: index,
          name: `${item.name}`,
        })),
      )
    books &&
      setBookOptions(
        [...books].map((item, index) => ({
          value: index,
          name: `${item.title} - ${authors[item.authorId].name} - ${
            item.publishDate
          }`,
        })),
      )
    users &&
      setUserOptions(
        [...users].map((item, index) => ({
          value: index,
          name: `${item.fullName} - ${item.address}`,
        })),
      )
  }, [])

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      setBookValue(books[parseInt(value.bookSelect)])
      setUserValue(users[parseInt(value.userSelect)])
      setConditionValue(value.condition)
      setCommentValue(value.comment)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
  })

  return (
    <div className={cls.container}>
      <div className={cls.wrapper__form}>
        <h1>Зарезервировать книгу</h1>
        <form onSubmit={onSubmit}>
          <div className="flex">
            <div className={cls.box}>
              <InputSelect
                type="text"
                control={control}
                label="Книга:"
                name="bookSelect"
                required="Обязательное поле"
                options={bookOptions}
              />
              <div>
                <div>{authorsOptions[bookValue?.authorId]?.name}</div>
                <div>{bookValue?.title}</div>
                <div>{bookValue?.content}</div>
                <div>{bookValue?.publishDate}</div>
              </div>
            </div>

            <div className={cls.box}>
              <InputSelect
                type="text"
                control={control}
                label="Читатель:"
                name="userSelect"
                required="Обязательное поле"
                options={userOptions}
              />
              <div>
                <div>{userValue?.id}</div>
                <div>{userValue?.fullName}</div>
                <div>{userValue?.description}</div>
                <div>{userValue?.address}</div>
                <div>{userValue?.email}</div>
                <div>{userValue?.phoneNumber}</div>
              </div>
            </div>
          </div>

          <div className="flex">
            <Input
              control={control}
              label="Состояние книги при выдаче:"
              name="condition"
              type="text"
              required="Обязательное поле"
            />
            <Input
              control={control}
              label="Комментарий к выдаче:"
              name="comment"
              type="text"
            />
          </div>

          <Button className="flex-end" type="button" onClick={onOpen}>
            Добавить читателя
          </Button>
          <Button className="flex-end" type="submit" onClick={onSubmit}>
            Добавить Книгу
          </Button>
          <p>Правила резервирования книг:</p>
          <ol>
            <li>
              1. Если в списке читателей нет человека, который хочет взять
              книгу, следует зарегистрировать его в базе нажав на
              соответствующую кнопку.
            </li>
            <li>
              2. Необходимо сверять информацию вносимую в базу, путем сравнения
              с документом удостоверяющим личность.
            </li>
            <li>
              3. Перед выдачей книги обязательно проводить ее осмотр для оценки
              состояния книги.
            </li>
          </ol>
        </form>
      </div>
      <div className={cls.info}>
        <h3>Итоговая информация:</h3>
        {userValue ? (
          <div>
            <div>Читатель:</div>
            <div>{userValue?.fullName}</div>
            <div>{userValue?.address}</div>
            <div>{userValue?.email}</div>
            <div>{userValue?.phoneNumber}</div>
          </div>
        ) : null}
        {bookValue ? (
          <div>
            <div>Книга:</div>
            <div>{bookValue?.title}</div>
            <div>{bookValue?.publishDate}</div>
          </div>
        ) : null}
        {conditionValue ? (
          <div>Состояние книги при выдаче: {conditionValue}</div>
        ) : null}
        {commentValue ? <div>Комментарий: {commentValue}</div> : null}
      </div>
      <Modal
        headerTitle="Внести читателя в базу"
        isOpen={isOpen}
        onClose={onClose}
      >
        <AddUser onClose={onClose} />
      </Modal>
    </div>
  )
}
