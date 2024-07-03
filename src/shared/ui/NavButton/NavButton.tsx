import React, { FC } from 'react';
import { Button, ButtonTypeEnum } from '../Button/ui/Button';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  children: React.ReactNode;
  icon?: JSX.Element;
  href: String;
}

export const NavButton: FC<NavButtonProps> = (props) => {
  const { children, icon, href, ...otherProps } = props;
  return (
    <div>
      <Button type={ButtonTypeEnum.BUTTON}>
        <Link to={{ pathname: String(href) }}>{children}</Link>
      </Button>
    </div>
  );
};
