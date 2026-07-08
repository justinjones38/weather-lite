import styles from "./Homepage.module.css";
import { CiSearch } from "react-icons/ci";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.formContainer}>
          <input
            type="text"
            placeholder="Enter a location"
            id="name"
            className={styles.input}
            aria-label="Enter a location"
          />
          <button className={styles.btn}>
            <CiSearch />
          </button>
        </div>
      </form>
    </div>
  );
}
