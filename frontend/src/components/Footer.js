import React from "react";
import '../CSS/Footer.css'; // Ensure the path matches your folder structure

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Wordplay Book Store</h2>
                <p>Explore your favorite books and discover new ones.</p>
                <div className="footer-links">
                    <a href="/AboutUs">About Us</a>
                    <a href="/ContactUs">Contact</a>
                    <a href="/PrivacyPolicy">Privacy Policy</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Book Store. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
