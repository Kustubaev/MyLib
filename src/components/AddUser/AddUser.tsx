import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Textarea } from "../Textarea/Textarea"

interface AddAuthorProps {
  onClose: () => void
}

export const AddUser: FC<AddAuthorProps> = (props) => {
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
        <IoIosCheckmarkCircleOutline color="green" size="250px" />
      ) : (
        <form onSubmit={onSubmit}>
          <div className="flex">
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
                label="Дата рожения:"
                name="birthday"
                type="date"
                required="Обязательное поле"
              />
              <Input
                loading={loading}
                control={control}
                label="Имя пользователя:"
                name="login"
                type="string"
                required="Обязательное поле"
              />
            </div>
            <div>
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
                label="Адресс проживания:"
                name="address"
                type="string"
              />
              <Input
                loading={loading}
                control={control}
                label="Электронная почта:"
                name="email"
                type="email"
                required="Обязательное поле"
              />
            </div>
          </div>
          <Button
            loading={loading}
            className="flex-end"
            type="submit"
            onClick={onSubmit}
          >
            Добавить читателя
          </Button>
        </form>
      )}
    </>
  )
}
