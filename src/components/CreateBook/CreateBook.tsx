import { Button } from "@nextui-org/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import {
  useCreateBookMutation,
  useLazyGetAllBooksQuery,
} from "../../app/services/bookApi"
import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { Input } from "../Input/Input"
import { InputState } from "../InputState/InputState"
import { SelectForm } from "../SelectForm/SelectForm"

export const CreateBook = () => {
  const [createBook] = useCreateBookMutation()
  const [triggerGetAllBooks] = useLazyGetAllBooksQuery()

  const [genreId, setGenreId] = useState<string>("")
  // const [genreError, setGenreErrord] = useState<boolean>()

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm()

  // const onSubmitT = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setGenreErrord(!genreId)

  //   if (genreError)
  //     handleSubmit(async (data) => {
  //       const newData = {
  //         ...data,
  //         authorId: parseInt(data.authorId, 10),
  //         pageCount: parseInt(data.pageCount, 10),
  //         isPublic: Boolean(data.isPublic),
  //         publishDate: data.publishDate,
  //         publishHouse: data.publishHouse,
  //         title: data.title,
  //       }
  //       console.log("newData", newData)

  //       try {
  //         await createBook({ newData, genreId }).unwrap()
  //         setValue("post", "")
  //         await triggerGetAllBooks().unwrap()
  //       } catch (error) {
  //         console.log("err", error)
  //       }
  //     })
  // }

  const onSubmit = handleSubmit(async (data) => {
    const newData = {
      ...data,
      authorId: parseInt(data.authorId, 10),
      pageCount: parseInt(data.pageCount, 10),
      isPublic: Boolean(data.isPublic),
      publishDate: data.publishDate,
      publishHouse: data.publishHouse,
      title: data.title,
    }
    console.log("newData", newData)

    try {
      await createBook({ newData, genreId }).unwrap()
      setValue("post", "")
      await triggerGetAllBooks().unwrap()
    } catch (error) {
      console.log("err", error)
    }
  })

  // const error = errors?.post?.message as string

  return (
    <form className="flex-grow" onSubmit={onSubmit}>
      <InputState
        value={genreId}
        onChange={setGenreId}
        label="Жанр"
        name="genreId"
        type="number"
        isInvalid={!genreId}
        errorMessage="Обязательное поле"
      />
      <Input
        control={control}
        label="Название книги"
        name="title"
        type="text"
        required="Обязательное поле"
      />
      <Input
        control={control}
        label="Автор"
        name="authorId"
        type="number"
        required="Обязательное поле"
      />
      <Input
        control={control}
        label="Дата публикации 2"
        name="publishDate"
        type="date"
        required="Обязательное поле"
      />
      <Input
        control={control}
        label="Издательство"
        name="publishHouse"
        type="text"
        required="Обязательное поле"
      />
      <Input
        control={control}
        label="Количество страниц"
        name="pageCount"
        type="number"
        required="Обязательное поле"
      />
      <SelectForm
        control={control}
        name="isPublic"
        required="Обязательное поле"
        label="Доступ к книге"
        options={[
          { value: true, name: "Публичный" },
          { value: false, name: "Приватный" },
        ]}
      />

      {/* <Controller
        name="isPublic"
        control={control}
        defaultValue=""
        rules={{
          required: "Обязательное поле",
        }}
        render={({ field }) => (
          <Select
            {...field}
            label="Доступ к книге"
            options={[
              { value: true, name: "Публичный" },
              { value: false, name: "Приватный" },
            ]}
          />
        )}
      /> */}

      {/* <InputDate
        control={control}
        label="Дата публикации"
        name="publishDate"
        placeholderValue={new CalendarDate(2005, 12, 28)}
        required="Обязательное поле"
      /> */}

      {/* <Controller
        name="post"
        control={control}
        defaultValue=""
        rules={{
          required: "Обязательное поле",
        }}
        render={({ field }) => (
          <Textarea
            {...field}
            labelPlacement="outside"
            placeholder="О чем думайте?"
            className="mb-5"
          />
        )}
      /> */}

      {errors && <ErrorMessage error={errors?.post?.message as string} />}
      <Button className="flex-end" type="submit">
        Добавить Книгу
      </Button>
    </form>
  )
}