import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
	<div className={styles.container}>
	  <div className={styles.logo}>Rhed Dev</div>
	  <div className={styles.text}>Copyright 2023 All rights reserved.</div>
	</div>
  )
}

export default Footer