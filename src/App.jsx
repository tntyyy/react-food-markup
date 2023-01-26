import React from 'react'
import styles from './App.module.css'

import Header from "./components/Header/Header";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import MenuSection from "./components/MenuSection/MenuSection";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <WelcomeScreen />
      <MenuSection />
    </div>
  )
}

export default App
