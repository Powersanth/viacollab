import React from "react";
import styles from "./ContactPage.module.css";
import icons1 from "../../assets/phone.png";
import icons2 from "../../assets/email.png";

export default function ContactPage() {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+919736667666"; // WhatsApp phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappUrl;
  };

  const handleEmailRedirect = () => {
    const emailAddress = "hello@viacollab.com";
    const subject = "Inquiry";
    const body = "Hi, I have a question about your services.";
    const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank"); // Opens Gmail in a new tab
  };

  return (
    <div className={styles.contactcontainer} id="ContactUs">
      <div className={styles.contactcontainer1}>
        <div className={styles.contactcontainerh1}>
          <div className={styles.contactcontainerh11}>
            <h1>Got questions?</h1>
          </div>
          <div className={styles.contactcontainerh12}>
            <p>Contact us</p>
          </div>
        </div>
        <div className={styles.contactcontainer2}>
          <div>
            <button onClick={handleWhatsAppRedirect}>
              <img src={icons1} alt="phone" />
              <p>+91 9736667666</p>
            </button>
          </div>
          <div>
            <button onClick={handleEmailRedirect}>
              <img src={icons2} alt="email" />
              <p>hello@viacollab.com</p>
            </button>
          </div>
          <div className={styles.address}>
            <p>
              <span>Address: </span>
              <a
                href="https://www.google.com/maps?q=Plot+306,+Madhapur,+Hyderabad,+Talangana,+500081"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plot 306, Madhapur, Hyderabad, Talangana, 500081
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
