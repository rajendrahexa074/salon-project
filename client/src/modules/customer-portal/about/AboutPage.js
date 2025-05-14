// src/pages/AboutUs.jsx
import React from "react";
import "../../../css/AboutUs.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-hero">
        <h1>Welcome to Glamour Salon</h1>
        <p>Your beauty, our passion</p>
      </div>

      <motion.div
        className="about-content"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Who We Are</h2>
        <p>
          Glamour Salon has been redefining beauty for over a decade. Our
          expert stylists, makeup artists, and skincare specialists are
          dedicated to making you look and feel fabulous. Whether it’s a casual
          cut or a bridal makeover, we tailor every service to your unique
          style.
        </p>

        <h2>Our Services</h2>
        <ul>
          <li>Hair Styling & Coloring</li>
          <li>Makeup & Bridal Packages</li>
          <li>Facials & Skincare</li>
          <li>Manicure & Pedicure</li>
          <li>Spa & Relaxation</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          ✨ Skilled professionals <br />
          ✨ Hygienic and relaxing ambiance <br />
          ✨ Premium products <br />
          ✨ Personalized beauty solutions
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
