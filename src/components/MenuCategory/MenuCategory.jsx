import React from 'react';
import styles from "./MenuCategory.module.css";

const MenuCategory = ({icon, text}) => {
  return (
    <div className={styles.item}>
        <img src={icon} alt={text} className={styles.icon} />
        <p>{text}</p>
    </div>
  )
}

export default MenuCategory