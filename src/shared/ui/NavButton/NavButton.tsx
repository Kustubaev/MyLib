import React, { FC } from 'react';
import { Button, ButtonTypeEnum } from '../Button/ui/Button';
import { Link } from 'react-router-dom';
import cls from './NavButton.module.scss';

interface NavButtonProps {
  children: React.ReactNode;
  icon?: JSX.Element;
  href: String;
}

export const NavButton: FC<NavButtonProps> = (props) => {
  const { children, icon, href, ...otherProps } = props;
  return (
    <div className={cls.box}>
      <Link className={cls.box__link} to={{ pathname: String(href) }}>
        <Button className={cls.box__link__btn} type={ButtonTypeEnum.BUTTON}>
          {children}
        </Button>
      </Link>
    </div>
  );
};
