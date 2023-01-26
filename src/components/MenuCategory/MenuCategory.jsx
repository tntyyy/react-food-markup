import React from 'react';
import cn from "classnames";
import styles from "./MenuCategory.module.css";

const MenuCategory = ({id, icon, text, isSelected, handleChangeSelectedCategory}) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleChangeSelectedCategory(id);
  }

  return (
    <div className={cn(styles.item, {
      [styles.selected]: isSelected
    })}
      onClick={handleClick}
    >
        <img src={icon} alt={text} className={styles.icon} />
        <p>{text}</p>
    </div>
  )
}

export default MenuCategory