import React from 'react';
import Button from "../ui/Button/Button";
import styles from "./WelcomeScreen.module.css";

import welcomeImage from "../../assets/welcome__image.jpg";

const WelcomeScreen = () => {
  return (
    <main className={styles.main}>
        <div className={styles.content}>
            <p className={styles.suptitle}>Экспресс-доставка от Яндекс.Еды</p>
            <h1 className={styles.title}>Быстро и вкусно<span>.</span></h1>
            <p className={styles.subtitle}>Сеть быстрого питания #1 в Казани</p>
            <Button path={"#"}>Сделать заказ</Button>
        </div>
        <div className={styles.imageWrapper}>
            <img src={welcomeImage} alt="FoodHouse" className={styles.image} />
        </div>
    </main>
  )
}

export default WelcomeScreen