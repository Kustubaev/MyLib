import React, { FC } from 'react';
import cls from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
  const { children, ...otherProps } = props;
  return <div className={cls.container}>{children}</div>;
};
