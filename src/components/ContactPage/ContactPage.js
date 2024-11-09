import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Lottie from "react-lottie";
import contactus from "../../assets/latti.json";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactus,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send to an API or display an alert)
    console.log("Form Data:", formData);
  };
  return (
    <div>
      <NavBar />
      <div className={styles.containercontact}>
        <div>
          <Lottie
            options={defaultOptions}
            loop={false}
            style={{ color: "red" }}
          />
        </div>
        <div className={styles.container}>
          <h2 className={styles.heading}>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Name"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Email"
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                rows="5"
                placeholder="Message"
              />
            </div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
