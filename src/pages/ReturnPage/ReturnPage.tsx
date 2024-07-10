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
import cls from "./ReturnPage.module.scss"

interface SelectProps {
  value: number
  name: string
}

export const ReturnPage = () => {
  const books: Book[] = [...BooksMock]
  const users: User[] = [...UsersMock]

  const [bookOptions, setBookOptions] = useState<SelectProps[]>([])
  const [userOptions, setUserOptions] = useState<SelectProps[]>([])

  const [bookValue, setBookValue] = useState<Book>()
  const [userValue, setUserValue] = useState<User>()
  const commentValueOld = "Легкие потертости на обложке."

  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm()

  console.log(control)

  useEffect(() => {
    books &&
      setBookOptions(
        [...books].map((item, index) => ({
          value: index,
          name: `${item.title} - ${item.publishDate}`,
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
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    setTimeout(() => {
      console.log(data)
      setLoading(false)
    }, 3000)
  })

  return (
    <div className={cls.container}>
      <div className={cls.wrapper__form}>
        <h1>Возврат книги</h1>
        <form onSubmit={onSubmit}>
          <SelectForm
            loading={loading}
            className={cls.select}
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

          <SelectForm
            loading={loading}
            className={cls.select}
            control={control}
            label="Книга:"
            name="bookSelect"
            required="Обязательное поле"
            options={bookOptions}
          />
          <div>
            <div>{bookValue?.id}</div>
            <div>{bookValue?.title}</div>
            <div>{bookValue?.content}</div>
            <div>{bookValue?.publishDate}</div>
          </div>

          {bookValue ? (
            <div>
              <div>Состояние книги при выдаче:</div>
              <p>{commentValueOld}</p>
            </div>
          ) : null}

          <Input
            loading={loading}
            control={control}
            label="Состояние книги при возврате:"
            name="condition"
            type="text"
            required="Обязательное поле"
          />
          <Input
            loading={loading}
            control={control}
            label="Комментарий к выдаче:"
            name="comment"
            type="text"
          />

          <Button
            loading={loading}
            className="flex-end"
            type="submit"
            onClick={onSubmit}
          >
            Оформить возврат
          </Button>
        </form>
      </div>
      <div className={cls.info}>
        <p>Правила резервирования книг:</p>
        <ol>
          <li>
            1. Если в списке читателей нет человека, который хочет взять книгу,
            следует зарегистрировать его в базе нажав на соответствующую кнопку.
          </li>
          <li>
            2. Необходимо сверять информацию вносимую в базу, путем сравнения с
            документом удостоверяющим личность.
          </li>
          <li>
            3. Перед выдачей книги обязательно проводить ее осмотр для оценки
            состояния книги.
          </li>
        </ol>
      </div>
    </div>
  )
}
