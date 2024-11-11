import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar({ linkColor, gradientBackground = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleContactUsClick = (event) => {
    event.preventDefault();
    closeNav(); // Close nav on link click
    if (location.pathname === "/about") {
      const contactElement = document.getElementById("ContactUs");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/about");
      setTimeout(() => {
        const contactElement = document.getElementById("ContactUs");
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  const getLinkStyle = (path) => {
    return location.pathname === path ? { color: "#f16643" } : { color: linkColor };
  };

  const getContactLinkStyle = () => {
    return location.pathname === "/about" ? { color: "#fff" } : { color: "#000" };
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
          <a href="/" style={getLinkStyle("/")} onClick={closeNav}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" style={getLinkStyle("/about")} onClick={closeNav}>
            About us
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={handleContactUsClick}
            className={styles.contactButton}
            style={getContactLinkStyle()}
          >
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}
