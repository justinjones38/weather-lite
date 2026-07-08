import styles from "./Navbar.module.css";
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const [isHamburgerMenuShown, setIsHamburgerMenuShown] = useState(false);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weather Nav</h2>
      <div className={styles.hamburgerMenu}>
        <GiHamburgerMenu
          className={styles.hamburgerButton}
          onClick={() => setIsHamburgerMenuShown(true)}
        />
      </div>
      {isHamburgerMenuShown ? (
        <div className={styles.navContainer}>
          <IoMdClose className={styles.closeBtn} onClick={() => setIsHamburgerMenuShown(false)} />
          <ul className={styles.navbar}>
            <li className={styles.listItem}>
              <NavLink to="." className={styles.linkItem}>
                Search
              </NavLink>
            </li>
            <NavLink to="#" className={styles.linkItem}>
              Dashboard
            </NavLink>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
