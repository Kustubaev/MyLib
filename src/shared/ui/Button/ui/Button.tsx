import React, { FC, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTypeEnum {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset'
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: string;
  type?: ButtonTypeEnum;
  disabled?: boolean;
  color?: string;
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    icon,
    type = ButtonTypeEnum.BUTTON,
    disabled = false,
    color,
    ...otherProps
  } = props;

  return (
    <button disabled={disabled} type={type} {...otherProps}>
      {children}
    </button>
  );
};
