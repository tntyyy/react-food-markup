import React from 'react';
import styles from "./Button.module.css";
import cn from "classnames";

const Button = ({path, children, type}) => {
  return (
    <a href={path} className={cn(styles.btn, {
      [styles.secondary]: type === "secondary"
    })}>{children}</a>
  )
}

export default Button