import React from "react";
import styles1 from "../styles/home.module.css";
import styles2 from "../styles/homeLight.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import NavbarProps from "../interfaces/NavbarProps";

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const styles = darkMode ? styles1 : styles2;
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.link} href="/">
          <h1 className={styles.mainTitle}>Where in the world?</h1>
        </Link>
      </div>
      <div
        onClick={() => setDarkMode(!darkMode)}
        className={styles.darkModeButton}
      >
        <FontAwesomeIcon className={styles.moon} icon={faMoon} />
        <p>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
