import styles from './header.module.css'

function Header() {
  return (
    <div className={styles.back}>
        <div className={styles.container}>
       <a href="#"> <img src="./img/Mask group.svg" alt="нет" /></a>
        <ul>
            <li className={styles.headerLi}>Vakansiyalar</li>
            <li className={styles.headerLi}>Kandidatlar</li>
            <li className={styles.headerLi}>Kompaniyalar</li>
            <li className={styles.headerLi}>Xizmatlar</li>
            <li className={styles.headerLi}>Ta`lim</li>
        </ul>
        <select>
            <option value="uzbek">O`zbek</option>
            <option value="rus">Русский</option>
            <option value="eng">English </option>
        </select>
      <button className={styles.btn}>Boshlash</button>
    </div>
    </div>
  )
}

export default Header