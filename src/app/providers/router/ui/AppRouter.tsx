import React, { FC } from 'react';
import cls from './AppRouter.module.scss';

interface AppRouterProps {
  children: React.ReactNode;
}

export const AppRouter: FC<AppRouterProps> = (props) => {
  const { children, ...otherProps } = props;
  return <div className={cls.container}>{children}</div>;
};
