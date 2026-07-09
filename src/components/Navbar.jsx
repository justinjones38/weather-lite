import styles from "./Navbar.module.css";
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Navbar() {
  const [isNavbarShown, setIsNavbarShown] = useState(false);
  const { windowWidth } = useWindowWidth();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weather Nav</h2>
      <div className={styles.hamburgerMenu}>
        <GiHamburgerMenu
          className={styles.hamburgerButton}
          onClick={() => setIsNavbarShown(true)}
        />
      </div>
      {isNavbarShown || windowWidth >= 800 ? (
        <div className={styles.navContainer}>
          <IoMdClose
            className={styles.closeBtn}
            onClick={() => setIsNavbarShown(false)}
          />
          <ul className={styles.navbar}>
            <li className={styles.listItem}>
              <NavLink
                to="."
                className={({ isActive }) =>
                  isActive
                    ? `${styles["linkItem"]} ${styles["active"]}`
                    : `${styles["linkItem"]}`
                }
                onClick={() => setIsNavbarShown(false)}
                end
              >
                Search
              </NavLink>
            </li>
            <li
              className={styles.listItem}
              onClick={() => setIsNavbarShown(false)}
            >
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["linkItem"]} ${styles["active"]}`
                    : `${styles["linkItem"]}`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li
              className={styles.listItem}
              onClick={() => setIsNavbarShown(false)}
            >
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["linkItem"]} ${styles["active"]}`
                    : `${styles["linkItem"]}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
