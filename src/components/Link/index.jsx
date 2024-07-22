import styles from './link.module.css'
import { useState } from 'react'
function Link() {
  const [linklar , setLinklar] = useState("")
  function linklarr() {
    const linklar = setLinklar(prompt("LInkni kiriting"))
  }
  return (
    <div className={styles.flex}>
        <button onClick={linklarr} className={styles.btn}><img className={styles.img} src="./img/Google.svg" alt="" /></button>
        <button onClick={linklarr} className={styles.btn}><img className={styles.img} src="./img/Insta.svg" alt="" /></button>
        <button onClick={linklarr} className={styles.btn}><img className={styles.img} src="./img/telegram.svg" alt="" /></button>
        <button onClick={linklarr} className={styles.btn}><img className={styles.img} src="./img/facebook.svg" alt="" /></button>
        <button onClick={linklarr} className={styles.btn}><img  className={styles.img}src="./img/git.svg" alt="" /></button>
        </div>
  )
}

export default Link