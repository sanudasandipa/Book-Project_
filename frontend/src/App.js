import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/UserHome";
import Main from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="userhome" element={<Home/>} />
                <Route path="/ContactUs" element={<ContactUs/>} /> 
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
           </Routes>
        </Router>
    );
}

export default App;
