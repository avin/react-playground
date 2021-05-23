import React, { ButtonHTMLAttributes } from 'react';
import cn from 'clsx';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...props }: Props): JSX.Element => {
  return (
    <button type="button" className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
