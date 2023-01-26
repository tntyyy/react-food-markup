import React from 'react';
import styles from "./MenuList.module.css";
import MenuItem from '../MenuItem/MenuItem';
import { menuListData } from './MenuList.data';

const MenuList = ({selectedCategory}) => {
  return (
    <div className={styles.wrapper}>
        {menuListData && menuListData.filter((item) => item.categoryId === selectedCategory).map((menuItem, index) => (
            <MenuItem key={index} {...menuItem}/>
        ))}
    </div>
  )
}

export default MenuList