import React from "react";
import styles from "./MenuCategories.module.css";
import { menuCategoriesData } from "./MenuCategories.data";
import MenuCategory from "../MenuCategory/MenuCategory";

const MenuCategories = () => {
  return (
    <div className={styles.wrapper}>
      {menuCategoriesData &&
        menuCategoriesData.map((category) => (
          <MenuCategory
            key={category.text}
            icon={category.icon}
            text={category.text}
          />
        ))}
    </div>
  );
};

export default MenuCategories;
