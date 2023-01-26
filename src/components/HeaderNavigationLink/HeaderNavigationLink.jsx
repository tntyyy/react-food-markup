import React from 'react';
import styles from "./HeaderNavigationLink.module.css";

const HeaderNavigationLink = ({text, path}) => {
  return (
    <a href={path} className={styles.link}>{text}</a>
  )
}

export default HeaderNavigationLink