import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Textarea } from "../Textarea/Textarea"

interface AddAuthorProps {
  onClose: () => void
}

export const AddGenre: FC<AddAuthorProps> = (props) => {
  const { onClose } = props

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
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
        <IoIosCheckmarkCircleOutline color="green" size="250px" />
      ) : (
        <form onSubmit={onSubmit}>
          <div>
            <Input
              loading={loading}
              control={control}
              label="Название:"
              name="title"
              type="string"
              required="Обязательное поле"
            />
            <Textarea
              loading={loading}
              control={control}
              label="Описание:"
              name="description"
              type="string"
            />
          </div>
          <Button
            loading={loading}
            className="flex-end"
            type="submit"
            onClick={onSubmit}
          >
            Добавить жанр в базу
          </Button>
        </form>
      )}
    </>
  )
}
