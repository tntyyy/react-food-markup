import React from "react";
import styles from "./MenuCategories.module.css";
import { menuCategoriesData } from "./MenuCategories.data";
import MenuCategory from "../MenuCategory/MenuCategory";

const MenuCategories = ({ selectedCategory, handleChangeSelectedCategory }) => {
  return (
    <div className={styles.wrapper}>
      {menuCategoriesData &&
        menuCategoriesData.map((category) => (
          <MenuCategory
            isSelected={selectedCategory === category.id}
            key={category.id}
            id={category.id}
            icon={category.icon}
            text={category.text}
            handleChangeSelectedCategory={handleChangeSelectedCategory}
          />
        ))}
    </div>
  );
};

export default MenuCategories;
