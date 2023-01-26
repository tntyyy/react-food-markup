import React from 'react';
import styles from "./HeaderNavigation.module.css";
import { HeaderNavigationLinks } from "./HeaderNavigation.data";
import HeaderNavigationLink from "../HeaderNavigationLink/HeaderNavigationLink";

const HeaderNavigation = () => {
  return (
    <nav className={styles.menu}>
        {
            HeaderNavigationLinks && HeaderNavigationLinks.map((link) => (
                <HeaderNavigationLink 
                    key={link.text}
                    path={link.path}
                    text={link.text}
                />
            ))
        }
    </nav>
  )
}

export default HeaderNavigation