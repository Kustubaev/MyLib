import { Select as NSelect, SelectItem as NSelectItem } from "@nextui-org/react"
import React, { FC } from "react"
import { Control, useController } from "react-hook-form"

interface Option {
  value: string | boolean
  name: string
}

interface SelectProps {
  value?: string
  options?: Option[] | null
  className?: string
  onChange?: (value: string) => void

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

export const Select: FC<SelectProps> = (props) => {
  const {
    value,
    options,
    className,
    onChange,

    isInvalid,
    variant = "bordered",
    size = "md",
    label,
    ...otherProps
  } = props

  return (
    <NSelect
      variant={variant}
      size={size}
      label={label}
      value={value}
      isInvalid={isInvalid}
      className={className}
      onChange={(e) => onChange && onChange(e.target.value)}
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
