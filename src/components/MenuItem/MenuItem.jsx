import React from 'react';
import styles from "./MenuItem.module.css";

const MenuItem = ({ name, size, components, backgroundImage }) => {
  return (
    <div className={styles.wrapper} style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className={styles.content}>
            <h4 className={styles.title}>{name}</h4>
            <p className={styles.size}>{size}</p>
            <p className={styles.components}>{components}</p>
            <button className={styles.btn}>Добавить в корзину</button>
        </div>
    </div>
  )
}

export default MenuItem