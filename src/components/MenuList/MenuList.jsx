import React from 'react';
import styles from "./MenuList.module.css";
import MenuItem from '../MenuItem/MenuItem';
import { menuListData } from './MenuList.data';

const MenuList = () => {
  return (
    <div className={styles.wrapper}>
        {menuListData && menuListData.map((menuItem, index) => (
            <MenuItem key={index} {...menuItem}/>
        ))}
    </div>
  )
}

export default MenuList