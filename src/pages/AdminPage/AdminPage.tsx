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
import cls from "./AddBookPage.module.scss"
import { Modal } from "../../components/Modal/Modal"
import { useDisclosure } from "@nextui-org/react"
import { AddAuthor } from "../../components/AddAuthor/AddAuthor"
import { AddGenre } from "../../components/AddGenre/AddGenre"
import { PageTitle } from "../../components/PageTitle/PageTitle"

interface SelectProps {
  value: number
  name: string
}

export const AdmninPage = () => {
  const genre = [
    { value: "1", name: "Рассказы" },
    { value: "2", name: "Новелла" },
    { value: "3", name: "Роман" },
  ]

  const author = [
    { value: "1", name: "Фёдор Михайлович Достоевский" },
    { value: "2", name: "Александр Сергеевич Пушкин" },
    { value: "3", name: "Лев Николаевич Толстой" },
  ]

  const authorDisclosure = useDisclosure()
  const genreDisclosure = useDisclosure()
  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    setTimeout(() => {
      console.log(data)
      reset({
        title: "",
        total_Copies: "",
        authorId: "",
        condition: "",
        content: "",
        genreId: "",
        date: "",
      })
      setLoading(false)
    }, 3000)
  })

  return (
    <div className={cls.AddBook}>
      <div className={cls.AddBook__right}>
        <PageTitle title={'Добавление новой книги'}/>
        <form onSubmit={onSubmit} className={cls.AddBook__right__form}>
          <div className={cls.AddBook__right__form__inputs}>
            <div className={cls.AddBook__right__form__inputs__block}>
              <Input
                loading={loading}
                control={control}
                label="Название книги:"
                name="title"
                type="text"
                required="Обязательное поле"
              />
              <Input
                loading={loading}
                control={control}
                label="Количество копий:"
                name="total_Copies"
                type="number"
                required="Обязательное поле"
              />
              <SelectForm
                loading={loading}
                className={cls.select}
                control={control}
                label="Автор:"
                name="authorId"
                required="Обязательное поле"
                options={author}
              />
              <Input
                loading={loading}
                control={control}
                label="Серийный номер:"
                name="condition"
                type="number"
                required="Обязательное поле"
              />
            </div>
            <div className={cls.AddBook__right__form__inputs__block}>
              <Input
                loading={loading}
                control={control}
                label="Описание книги:"
                name="content"
                type="text"
              />
              <SelectForm
                loading={loading}
                className={cls.select}
                control={control}
                label="Жанр:"
                name="genreId"
                required="Обязательное поле"
                options={genre}
              />
              <Input
                loading={loading}
                control={control}
                label="Дата публикации:"
                name="date"
                type="date"
                required="Обязательное поле"
              />
            </div>
          </div>
          <div className={cls.AddBook__right__form__addBtns}>
            <Button onClick={() => authorDisclosure.onOpen()}>
              Добавить автора
            </Button>
            <Button onClick={() => genreDisclosure.onOpen()}>
              Добавить жанр
            </Button>
          </div>
          <div className={cls.AddBook__right__form__submitBtn}>
            <Button
              loading={loading}
              className="flex-end"
              type="submit"
              onClick={onSubmit}
            >
              Добавить книгу
            </Button>
          </div>
        </form>
      </div>
      <div className={cls.AddBook__rules}>
        <p className={cls.AddBook__rules__title}><b>Правила резервирования книг:</b></p>
        <ol className={cls.AddBook__rules__list}>
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
      <Modal
        headerTitle="Внести автора в базу"
        isOpen={authorDisclosure.isOpen}
        onClose={authorDisclosure.onClose}
      >
        <AddAuthor onClose={authorDisclosure.onClose} />
      </Modal>
      <Modal
        headerTitle="Внести жанр в базу"
        isOpen={genreDisclosure.isOpen}
        onClose={genreDisclosure.onClose}
      >
        <AddGenre onClose={genreDisclosure.onClose} />
      </Modal>
    </div>
  )
}
