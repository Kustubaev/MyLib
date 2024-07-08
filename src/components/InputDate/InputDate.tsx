import { DateInput, DateValue } from "@nextui-org/react"
import { FC } from "react"
import { Control, useController } from "react-hook-form"

type InputDateProps = {
  name: string
  label: string
  control: Control<any>
  required?: string
  endContent?: JSX.Element
  placeholderValue?: DateValue
  variant?: "flat" | "bordered" | "faded" | "underlined"
}

export const InputDate: FC<InputDateProps> = ({
  name,
  label,
  control,
  required = "",
  endContent,
  placeholderValue,
  variant = "bordered",
}) => {
  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name,
    control,
    rules: { required },
  })

  return (
    <DateInput
      id={name}
      label={label}
      placeholderValue={placeholderValue}
      variant={variant}
      value={field.value}
      name={field.name}
      isInvalid={invalid}
      onChange={field.onChange}
      onBlur={field.onBlur}
      errorMessage={`${errors[name]?.message ?? ""}`}
      endContent={endContent}
    />
  )
}
