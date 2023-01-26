import React, { useState } from 'react';
import MenuCategories from '../MenuCategories/MenuCategories';
import MenuList from '../MenuList/MenuList';
import Button from '../ui/Button/Button';

import styles from "./MenuSection.module.css";

const MenuSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(1);

    const handleChangeSelectedCategory = (categoryId) => {
        setSelectedCategory(categoryId);
    }

  return (
    <section className={styles.main}>
        <h2 className={styles.title}>Наше Меню</h2>
        <MenuCategories selectedCategory={selectedCategory} handleChangeSelectedCategory={handleChangeSelectedCategory}/>
        <MenuList />
        <Button path={"#"} type="secondary">Показать ещё</Button>
    </section>
  )
}

export default MenuSection