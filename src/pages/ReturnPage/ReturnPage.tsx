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
import { PageTitle } from "../../components/PageTitle/PageTitle"

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
    reset,
    watch,
  } = useForm()

  console.log("control", control)

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
      reset({
        userSelect: {},
        bookSelect: {},
        condition: "",
        comment: "",
      })
      setLoading(false)
    }, 3000)
  })

  return (
    <div className={cls.RerurnPage}>
      <div className={cls.RerurnPage__left}>
        <div className={cls.RerurnPage__left__title}>
          <PageTitle title={'Возврат книги'} />
        </div>
        <form className={cls.RerurnPage__left__form} onSubmit={onSubmit}>
          <div className={cls.RerurnPage__left__form__block}>
            <SelectForm
              loading={loading}
              className={cls.select}
              control={control}
              label="Читатель:"
              name="userSelect"
              required="Обязательное поле"
              options={userOptions}
            />
            <div className={cls.RerurnPage__left__form__block__info}>
              <div><b>ФИО: </b>{userValue?.fullName}</div>
              <div><b>Адресс: </b>{userValue?.address}</div>
              <div><b>Номер телефона: </b>{userValue?.phoneNumber}</div>
            </div>
          </div>
          

          <div className={cls.RerurnPage__left__form__block}>
            <SelectForm
              loading={loading}
              className={cls.select}
              control={control}
              label="Книга:"
              name="bookSelect"
              required="Обязательное поле"
              options={bookOptions}
            />
            <div className={cls.RerurnPage__left__form__block__info}>
              <div><b>Название: </b>{bookValue?.title}</div>
              <div><b>Описание: </b>{bookValue?.content}</div>
              <div><b>Дата публикации: </b>{bookValue?.publishDate}</div>
            </div>
          </div>

          
          <div className={cls.RerurnPage__left__form__block}>
            <Input
              loading={loading}
              control={control}
              label="Состояние книги при возврате:"
              name="condition"
              type="text"
              required="Обязательное поле"
            />
            {bookValue ? (
              <div className={cls.RerurnPage__left__form__block__info}>
                <div><b>Состояние книги при выдаче:</b> {commentValueOld}</div>
              </div>
            ) : null}
          </div>

          <div className={cls.RerurnPage__left__form__block}>
            <Input
              loading={loading}
              control={control}
              label="Комментарий к возврату:"
              name="comment"
              type="text"
            />
          </div>
          
          
          <div className={cls.RerurnPage__left__form__btn}>
            <Button
              loading={loading}
              className="flex-end"
              type="submit"
              onClick={onSubmit}
            >
              Оформить возврат
            </Button>
          </div>
        </form>
      </div>
      <div className={cls.RerurnPage__right}>
        <div className={cls.RerurnPage__right__title}>
            <b>Правила резервирования книг:</b>
        </div>
        <ol className={cls.RerurnPage__right__rules}>
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
