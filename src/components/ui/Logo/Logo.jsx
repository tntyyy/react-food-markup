import React from 'react';
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="https://google.com" className={styles.logo}>
        <span>Food</span>House
    </a>
  )
}

export default Logo