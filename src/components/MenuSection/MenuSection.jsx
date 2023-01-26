import React from 'react';
import MenuCategories from '../MenuCategories/MenuCategories';
import MenuList from '../MenuList/MenuList';
import Button from '../ui/Button/Button';

import styles from "./MenuSection.module.css";

const MenuSection = () => {
  return (
    <section className={styles.main}>
        <h2 className={styles.title}>Наше Меню</h2>
        <MenuCategories />
        <MenuList />
        <Button path={"#"} type="secondary">Показать ещё</Button>
    </section>
  )
}

export default MenuSection