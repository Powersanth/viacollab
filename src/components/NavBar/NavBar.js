// NavBar.js
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar({ linkColor, gradientBackground = true }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={styles.navbar}
      style={{
        background: gradientBackground
          ? "linear-gradient(to right, #fefefe, #eaaa8a)"
          : "transparent",
        position: gradientBackground ? "static" : "relative",
      }}
    >
      <a href="/" className={styles.logoLink}>
        <img src={logo} alt="viaCollab" className={styles.logo} />
      </a>
      <AiOutlineMenu className={styles.burgerIcon} onClick={toggleNav} />
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <AiOutlineClose className={styles.closeIcon} onClick={toggleNav} />
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
          <a href="/contact" style={{ color: linkColor }}>
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}
