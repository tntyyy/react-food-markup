import React from 'react';
import styles from "./MenuItem.module.css";

const MenuItem = ({ name, size, components, backgroundImage }) => {
  return (
    <div className={styles.wrapper} style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className={styles.content}>
            {name}
        </div>
    </div>
  )
}

export default MenuItem