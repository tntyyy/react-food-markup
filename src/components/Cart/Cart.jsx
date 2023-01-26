import React from 'react';
import styles from "./Cart.module.css";
import cartIcon from "../../assets/cart-icon.svg";

const Cart = () => {
  return (
    <div className={styles.cart}>
        <img src={cartIcon} alt="Cart" />
    </div>
  )
}

export default Cart