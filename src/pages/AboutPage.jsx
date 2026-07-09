import styles from "./AboutPage.module.css"

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About page</h2>
      <p className={styles.description}>
        Welcome to the Weather App. Enter a city and get detailed weather information.
      </p>
      <p className={styles.description}>
       This site aims to provide detailed weather information with the use of graphs and tables. Please
       search a city and take a look around.
      </p>
    </div>
  )
}