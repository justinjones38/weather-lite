import styles from "./Homepage.module.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useOutletContext } from "react-router";

export default function HomePage() {
  const {city, setCity, handleSubmit} = useOutletContext();
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <input
            type="text"
            placeholder="Enter a location"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
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
