import { Button as NextButton } from "@nextui-org/react"
import React, { FC } from "react"

interface ButtonProps {
  children: React.ReactNode
  icon?: JSX.Element
  className?: string
  type?: "button" | "submit" | "reset"
  fullWidth?: boolean
  isIconOnly?: boolean
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
  children,
  icon,
  className,
  type,
  fullWidth,
  variant = "ghost",
  color,
  isIconOnly,
  onClick,
  ...otherProps
}) => {
  return (
    <NextButton
      startContent={icon}
      size="lg"
      color={color}
      variant={variant}
      className={className}
      type={type}
      isIconOnly={isIconOnly}
      fullWidth={fullWidth}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </NextButton>
  )
}
