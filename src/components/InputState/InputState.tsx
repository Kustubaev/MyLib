import { Input as NextInput } from "@nextui-org/react"
import { FC } from "react"
import { Control, useController } from "react-hook-form"

type InputStateProps = {
  name?: string
  label: string
  placeholder?: string
  type?: string
  value?: string
  control?: Control<any>
  required?: string
  endContent?: JSX.Element
  isInvalid?: boolean
  errorMessage?: string
  onChange?: (value: string) => void
  variant?: "flat" | "bordered" | "faded" | "underlined"
}

export const InputState: FC<InputStateProps> = ({
  name,
  label,
  placeholder,
  type,
  control,
  value,
  errorMessage,
  endContent,
  onChange,
  isInvalid,
  variant = "bordered",
}) => {
  return (
    <NextInput
      id={name}
      label={label}
      type={type}
      placeholder={placeholder}
      variant={variant}
      value={value}
      name={name}
      isInvalid={isInvalid}
      onChange={(e) => onChange && onChange(e.target.value)}
      endContent={endContent}
      errorMessage={`${errorMessage ?? ""}`}
    />
  )
}
