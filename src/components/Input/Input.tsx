import { Input as NextInput } from "@nextui-org/react"
import { FC } from "react"
import { Control, useController } from "react-hook-form"

type InputProps = {
  name: string
  label: string
  placeholder?: string
  type?: string
  value?: number | string | boolean
  control?: Control<any>
  required?: string
  endContent?: JSX.Element
  variant?: "flat" | "bordered" | "faded" | "underlined"
}

export const Input: FC<InputProps> = ({
  name,
  label,
  placeholder,
  type,
  control,
  value,
  required = "",
  endContent,
  variant = "bordered",
}) => {
  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name: `${name}`,
    control,
    rules: { required },
  })

  return (
    <NextInput
      id={name}
      label={label}
      type={type}
      placeholder={placeholder}
      variant={variant}
      value={field?.value}
      name={field?.name}
      isInvalid={invalid}
      onChange={field?.onChange}
      onBlur={field?.onBlur}
      errorMessage={`${errors[name]?.message ?? ""}`}
      endContent={endContent}
    />
  )
}
