import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";

export default function NavBar({ linkColor }) {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="viaCollab" />
      <ul className={styles.navLinks}>
        <li>
          <a href="/" style={{ color: linkColor }}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" style={{ color: linkColor }}>
            About us
          </a>
        </li>
        <li>
          <a href="/" style={{ color: linkColor }}>
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}
