import { Outlet } from "react-router";
import Navbar from "../Navbar";
import styles from "./Layout.module.css"

export default function Layout() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  )
}