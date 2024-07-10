import { Textarea as NTextarea } from "@nextui-org/react"
import { FC } from "react"
import { Control, useController } from "react-hook-form"

type TextareaProps = {
  loading?: boolean
  name: string
  label: string
  placeholder?: string
  type?: string
  value?: number | string | boolean
  control?: Control<any>
  required?: string
  endContent?: JSX.Element
  variant?: "flat" | "bordered" | "faded" | "underlined"
  minRows?: number
  maxRows?: number
}

export const Textarea: FC<TextareaProps> = ({
  loading,
  name,
  label,
  placeholder,
  type,
  control,
  value,
  required = "",
  endContent,
  variant = "bordered",
  minRows = 3,
  maxRows = 6,
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
    <NTextarea
      isDisabled={loading}
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
      minRows={minRows}
      maxRows={maxRows}
    />
  )
}
