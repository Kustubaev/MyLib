import React, { FC, ReactNode } from 'react';
import cls from './HeadTitle.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return <h1 className={cls.Title}>{children}</h1>;
};
