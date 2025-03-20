import React from 'react'
import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <h1>Contact Project</h1>
            <p><span>Ali-Star</span> | React.js </p>
        </header>
          {children}
        <footer className={styles.footer}>
            <h1>Developed by Alireza Nayyeri</h1>
        </footer>
    </div>
  )
}

export default Layout