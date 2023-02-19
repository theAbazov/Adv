import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to="/" className={cls.mainLink}>MainPage</AppLink>
      <AppLink to="/about">AboutPage</AppLink>
    </div>
  </div>
);

export default Navbar;
