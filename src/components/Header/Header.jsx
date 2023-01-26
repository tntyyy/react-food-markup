import React from 'react';
import Logo from "../ui/Logo/Logo";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import Cart from "../Cart/Cart";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
        <Logo />
        <HeaderNavigation />
        <Cart />    
    </header>
  )
}

export default Header