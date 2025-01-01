import React from "react";
import "../CSS/AboutUs.css"; // Import CSS for styling
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>Welcome to Wordplay Book Store</h1>
        <p>
          Discover a world of knowledge, stories, and imagination. At Wordplay, we help you explore books like never before with seamless integration of the Google Books API.
        </p>
      </div>
      <div className="about-us-content">
        <div className="about-us-section">
          <img
            src="https://res.cloudinary.com/dspn3cbog/image/upload/v1735740232/bookstore_ogj8x5.jpg"
            alt="Bookshelf"
            className="about-us-image"
          />
          <p>
            Our mission is to bring books closer to you. Whether you're searching for your next favorite novel or diving into academic research, Wordplay offers a user-friendly search platform powered by the Google Books API.
          </p>
        </div>
        <div className="about-us-section">
          <p>
            With categories for every reader, from bestsellers to niche genres, we aim to create a personalized experience for book lovers. Use our intuitive interface to browse, search, and even save books to your favorites!
          </p>
          <img
            src="https://res.cloudinary.com/dspn3cbog/image/upload/v1735740232/book2_vdxzlk.jpg"
            alt="Reading"
            className="about-us-image"
          />
        </div>
        <div className="about-us-team">
          <h2>Meet Our Team</h2>
          <p>
            We’re a team of passionate readers and developers who believe in making the world of books accessible to everyone. Together, we’ve created Wordplay to enhance your reading journey.
          </p>
        </div>
      </div>
    </div>
    </div>
    <br/>
    <Footer/>
    </div>
  );
};

export default AboutUs;
