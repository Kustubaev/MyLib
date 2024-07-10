import React, { useState, FC } from "react"
import { useForm } from "react-hook-form"
import cls from "./AddAuthor.module.scss"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import { Textarea } from "../Textarea/Textarea"
import { Spinner } from "@nextui-org/react"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"

interface AddAuthorProps {
  onClose: () => void
}

export const AddAuthor: FC<AddAuthorProps> = (props) => {
  const { onClose } = props

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    setTimeout(() => {
      console.log(data)
      setLoading(false)
      setSent(true)
      setTimeout(() => {
        onClose()
      }, 2000)
    }, 3000)
  })
  return (
    <>
      {sent ? (
        <IoIosCheckmarkCircleOutline />
      ) : (
        <form onSubmit={onSubmit}>
          <div>
            <Input
              loading={loading}
              control={control}
              label="Имя:"
              name="firstname"
              type="string"
              required="Обязательное поле"
            />
            <Input
              loading={loading}
              control={control}
              label="Фамилия:"
              name="lastname"
              type="string"
              required="Обязательное поле"
            />
            <Input
              loading={loading}
              control={control}
              label="Дата рождения:"
              name="birthday"
              type="date"
              required="Обязательное поле"
            />
            <Textarea
              loading={loading}
              control={control}
              label="Биография:"
              name="bio"
              type="string"
              required="Обязательное поле"
            />
          </div>
          <Button
            loading={loading}
            className="flex-end"
            type="submit"
            onClick={onSubmit}
          >
            Добавить автора в базу
          </Button>
        </form>
      )}
    </>
  )
}
