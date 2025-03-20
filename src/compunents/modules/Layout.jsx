import React from 'react'
import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    <div>
        <header className={styles.header}>
            <h1>Contact Project</h1>
            <p><span>Ali-Star</span> | React.js </p>
        </header>
          {children}
        <footer></footer>
    </div>
  )
}

export default Layout