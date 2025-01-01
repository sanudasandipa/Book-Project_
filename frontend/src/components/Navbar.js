import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSignOutAlt, FaHeart } from "react-icons/fa"; // React Icons
import "../CSS/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    alert("Logged out successfully!");
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="wrapper">
        {/* Logo */}
        <div className="logo">
          <Link to="/">Wordplay</Link>
        </div>

        {/* Menu Toggle Button for Mobile */}
        <div className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Search</Link>
          </li>
          {token ? (
            <>
              <li>
                <Link to="/favorites">
                  <FaHeart /> Favorites
                </Link>
              </li>
              <li onClick={handleLogout} className="logout">
                <FaSignOutAlt /> Logout
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                   Login
                </Link>
              </li>
              <li>
                <Link to="/register">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
