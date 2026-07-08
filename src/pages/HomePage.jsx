import styles from "./Homepage.module.css"

export default function HomePage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Enter a location" id="name" />
        <button className={styles.btn}>Search</button>
      </form>
    </div>
  )
}