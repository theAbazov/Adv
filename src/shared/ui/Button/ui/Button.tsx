import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import cls from './Button.module.scss';

export const enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ThemeButton
}

const Button: FC<ButtonProps> = ({
  children, className, theme, ...other
}) => (
  <button type="button" className={classNames(cls.Button, {}, [className, cls[theme]])} {...other}>
    {children}
  </button>
);

export default Button;
