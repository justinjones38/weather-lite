import { Outlet } from "react-router";
import Navbar from "../Navbar";
import styles from "./Layout.module.css"
import { useState } from "react";

export default function Layout() {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
    }
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Outlet context={{city, setCity, handleSubmit}} />
      </div>
    </div>
  )
}