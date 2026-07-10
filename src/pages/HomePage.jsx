import styles from "./Homepage.module.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useLocation, useOutletContext } from "react-router";

export default function HomePage() {
  const { city, setCity, handleSubmit } = useOutletContext();
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.container}>
      {location?.state?.message ? (
        <p className={styles.errorMessage}>{location.state.message}</p>
      ) : null}
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
            required
          />
          <button className={styles.btn}>
            <CiSearch />
          </button>
        </div>
      </form>
    </div>
  );
}
