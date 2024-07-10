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
<<<<<<< HEAD
import { AddUser } from "../../components/AddUser/AddUser"
=======
import { PageTitle } from "../../components/PageTitle/PageTitle"
>>>>>>> 4f2a5b1d3d4fb8e5b72f446b62df1b46d9c8a65c

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
    <div className={cls.ReserveBook}>
      <div className={cls.ReserveBook__right}>
        <PageTitle title={'Зарезервировать книгу'}/>
        <form className={cls.ReserveBook__right__form} onSubmit={onSubmit}>
          <div className={cls.ReserveBook__right__form__inputBlock} >
            <div className={cls.ReserveBook__right__form__inputBlock__input}>
              <div className={cls.ReserveBook__right__form__inputBlock__input__block}>
                <InputSelect
                  type="text"
                  control={control}
                  label="Книга:"
                  name="bookSelect"
                  required="Обязательное поле"
                  options={bookOptions}
                />
                <div className={cls.ReserveBook__right__form__inputBlock__input__info}>
                <div className=""><b>Подробнее:</b></div>
                  <div>Автор: {authorsOptions[bookValue?.authorId]?.name}</div>
                  <div>Название: {bookValue?.title}</div>
                  <div>Дата выхода: {bookValue?.publishDate}</div>
                </div>
              </div>
            </div>

            <div className={cls.ReserveBook__right__form__inputBlock__input}>
              <div className={cls.ReserveBook__right__form__inputBlock__input__block}>
                <InputSelect
                  type="text"
                  control={control}
                  label="Читатель:"
                  name="userSelect"
                  required="Обязательное поле"
                  options={userOptions}
                />
                <div className={cls.ReserveBook__right__form__inputBlock__input__info}>
                  <div className=""><b>Подробнее:</b></div>
                  <div>ФИО: {userValue?.fullName}</div>
                  <div>Почта: {userValue?.email}</div>
                  <div>Номер телефона: {userValue?.phoneNumber}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={cls.ReserveBook__right__form__inputBlock}>
            <div className={cls.ReserveBook__right__form__inputBlock__input}>
              <Input
                control={control}
                label="Состояние книги при выдаче:"
                name="condition"
                type="text"
                required="Обязательное поле"
              />
              </div>
            <div className={cls.ReserveBook__right__form__inputBlock__input}>
              <Input
                control={control}
                label="Комментарий к выдаче:"
                name="comment"
                type="text"
              />
            </div>
          </div>

<<<<<<< HEAD
          <Button className="flex-end" type="button" onClick={onOpen}>
            Добавить читателя
          </Button>
          <Button className="flex-end" type="submit" onClick={onSubmit}>
            Добавить Книгу
          </Button>
          <p>Правила резервирования книг:</p>
=======
          <div className={cls.ReserveBook__right__form__btns}>
            <Button
              type="button"
              onClick={() => navigate("/reader/add")}
            >
              Добавить читателя
            </Button>
            <Button type="submit" onClick={onSubmit}>
              Добавить Книгу
            </Button>
          </div>
        </form>

        <div className={cls.ReserveBook__right__form__rules}>
          <div className={cls.ReserveBook__right__form__rules__title}>
            <PageTitle title={'Правила резервирования книг:'}/>
          </div>
>>>>>>> 4f2a5b1d3d4fb8e5b72f446b62df1b46d9c8a65c
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
        </div>
        
      </div>
      <div className={cls.ReserveBook__left}>
        <div className={cls.ReserveBook__left__info}>
          <h3 className={cls.ReserveBook__left__info__title}><b>Общая информация:</b></h3>
          {bookValue ? (
            <div className={cls.ReserveBook__left__info__block}>
              <div><b>Книга:</b></div>
              <div>Название: {bookValue?.title}</div>
              <div>Дата выпуска: {bookValue?.publishDate}</div>
            </div>
          ) : null}
          {userValue ? (
            <div className={cls.ReserveBook__left__info__block}>
              <div><b>Читатель:</b></div>
              <div>ФИО: {userValue?.fullName}</div>
              <div>Адресс: {userValue?.address}</div>
              <div>Почта: {userValue?.email}</div>
              <div>Номер телефона: {userValue?.phoneNumber}</div>
            </div>
          ) : null}
          {conditionValue ? (
            <div className={cls.ReserveBook__left__info__block}> 
              <div ><b>Состояние книги при выдаче:</b></div>
              <div className={cls.ReserveBook__left__info__block__text}>{conditionValue}</div>
            </div>
          ) : null}
          {commentValue ? (
          <div className={cls.ReserveBook__left__info__block}> 
            <div><b>Комментарий:</b></div>
            <div className={cls.ReserveBook__left__info__block__text}>{commentValue}</div>
          </div>
          ) : null}
        </div>
        <div className={cls.ReserveBook__left__modal}>
          <Button onClick={() => onOpen()}>Всплывающее окно</Button>
          <Modal headerTitle="Тут название окна" isOpen={isOpen} onClose={onClose}>
            <InputSelect
              control={control}
              label="Тестовое поле:"
              name="bookSelect"
              type="text"
              required="Обязательное поле"
              options={bookOptions}
            />
          </Modal>
        </div>
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
