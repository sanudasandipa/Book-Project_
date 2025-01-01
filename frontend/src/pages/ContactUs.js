import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../CSS/ContactUs.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zic07a9", // Your Service ID
        "template_c4bfbjc", // Your Template ID
        formData,
        "EOyimLEYMG1XkVPDE" // Your Public Key
      )
      .then(
        (result) => {
          setSuccessMessage("Thank you! Your message has been sent.");
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setErrorMessage("Oops! Something went wrong. Please try again.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <div>
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>

    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Have Any Questions?</h2>
          <p className="contact-description">
            We’re here to help. Feel free to reach out to us with any inquiries
            or concerns.
          </p>
          <ul className="contact-details">
            <li>
              <strong>Phone:</strong> +94759003806
            </li>
            <li>
              <strong>Email:</strong> wordplay@gmail.com
            </li>
            <li>
              <strong>Address:</strong> 12/50, Malabe, Kaduwela
            </li>
          </ul>
        </div>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="form-title">Send Us a Message</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="form-input"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="form-textarea"
              required
            />
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>

  );
};

export default ContactUs;
