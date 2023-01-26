import React from 'react';
import styles from "./Button.module.css";

const Button = ({path, children}) => {
  return (
    <a href={path} className={styles.btn}>{children}</a>
  )
}

export default Button