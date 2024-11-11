// NavBar.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar({ linkColor, gradientBackground = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const getLinkStyle = (path) => {
    return location.pathname === path
      ? { color: "#f16643" }
      : { color: linkColor };
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logoLink}>
        <img src={logo} alt="viaCollab" className={styles.logo} />
      </a>
      <div className={styles.burgerIcon1}>
        <AiOutlineMenu className={styles.burgerIcon} onClick={toggleNav} />
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <div className={styles.burgerIcon1}>
          <AiOutlineClose className={styles.closeIcon} onClick={toggleNav} />
        </div>
        <li>
          <a href="/" style={getLinkStyle("/")}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" style={getLinkStyle("/about")}>
            About us
          </a>
        </li>
        <li>
          <a href="/contact" style={getLinkStyle("/contact")}>
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}
