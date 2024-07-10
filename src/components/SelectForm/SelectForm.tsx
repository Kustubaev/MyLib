import { Select as NSelect, SelectItem as NSelectItem } from "@nextui-org/react"
import React, { FC } from "react"
import { Control, useController } from "react-hook-form"

interface Option {
  value: any
  name: string
}

interface SelectProps {
  loading?: boolean
  value?: string
  options?: Option[] | null
  className?: string
  onChange?: (value: string) => void

  name?: string
  control?: Control<any>
  required?: string

  variant?: "flat" | "bordered" | "faded" | "underlined"
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
  size?: "sm" | "md" | "lg"
  radius?: "none" | "sm" | "md" | "lg" | "full"
  placeholder?: string
  labelPlacement?: "inside" | "outside" | "outside-left"
  label?: React.ReactNode
  description?: React.ReactNode
  isOpen?: boolean
  defaultOpen?: boolean
  isRequired?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  classNames?: Record<
    | "base"
    | "label"
    | "trigger"
    | "mainWrapper"
    | "innerWrapper"
    | "selectorIcon"
    | "value"
    | "listboxWrapper"
    | "listbox"
    | "popoverContent"
    | "helperWrapper"
    | "description"
    | "errorMessage",
    string
  >
}

export const SelectForm: FC<SelectProps> = (props) => {
  const {
    loading,
    value,
    options,
    className,
    onChange,

    name,
    control,
    required,

    isInvalid,
    variant = "bordered",
    size = "md",
    label,
    ...otherProps
  } = props

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
    <NSelect
      isDisabled={loading}
      variant={variant}
      size={size}
      id={name}
      label={label}
      value={field.value}
      name={field.name}
      isInvalid={invalid}
      onChange={field.onChange}
      onBlur={field.onBlur}
      errorMessage={`${errors[name as string]?.message ?? ""}`}
      className={className}
      {...otherProps}
    >
      (
      {options?.map((option) => (
        <NSelectItem key={option.value} value={option.value}>
          {option.name}
        </NSelectItem>
      ))}
      )
    </NSelect>
  )
}
