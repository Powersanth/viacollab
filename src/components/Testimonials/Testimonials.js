import React from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Viacollab made influencer partnerships effortless. We saw real results within weeks!",
    name: "Sarah Deschene",
    title: "Marketing Director at Luxe Beauty",
    backgroundColor: "#FFD766",
    image: "path/to/image1.jpg",
    layout: "textTop",
  },
  {
    text: "The platform is so easy to use & the influencers we worked with truly understood our brand. Highly recommend!",
    name: "Sarah Deschene",
    title: "Marketing Director at Luxe Beauty",
    backgroundColor: "#5BB47A",
    image: "path/to/image2.jpg",
    layout: "imageTop",
  },
  {
    text: "Our campaign exceeded expectations thanks to Viacollab's high-quality influencers. We'll definitely be back!",
    name: "Sarah Deschene",
    title: "Marketing Director at Luxe Beauty",
    backgroundColor: "#00AEEF",
    image: "path/to/image3.jpg",
    layout: "textTop",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div
    className={`${styles.testimonialCard} ${
      testimonial.layout === "textTop" ? styles.textTop : styles.imageTop
    }`}
    style={{ backgroundColor: testimonial.backgroundColor }}
  >
    {testimonial.layout === "textTop" ? (
      <>
        <p className={styles.testimonialText}>{testimonial.text}</p>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={styles.testimonialImage}
        />
      </>
    ) : (
      <>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={styles.testimonialImage}
        />
        <p className={styles.testimonialText}>{testimonial.text}</p>
      </>
    )}
    <p className={styles.testimonialName}>{testimonial.name}</p>
    <p className={styles.testimonialTitle}>{testimonial.title}</p>
  </div>
);

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      {testimonials.map((testimonial, index) => (
        <React.Fragment key={index}>
          <TestimonialCard testimonial={testimonial} />
          {index < testimonials.length - 1 && (
            <div className={styles.arrow}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Testimonials;
