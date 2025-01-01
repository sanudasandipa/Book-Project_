import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import Footer from "./Footer";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://mybackend-production.up.railway.app/api/auth/register", { username, email, password });
            alert("Registration successful! Please log in.");
            navigate("/login");
        } catch (err) {
            console.error(err);
            alert("An error occurred during registration. Please try again.");
        }
    };

    return (
        <div>
        <div>
            <Navbar/>
            <br />
           <br />
        
        <div className="loginbody">
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleRegister}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="text"
                                    required
                                    className="login__input"
                                    placeholder="Name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    aria-label="Enter your name"
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="email"
                                    required
                                    className="login__input"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-label="Enter your email"
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input
                                    type="password"
                                    required
                                    className="login__input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    aria-label="Enter your password"
                                />
                            </div>
                            <button
                                className="button login__submit"
                                type="submit"
                            >
                                <span className="button__text">Sign up now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div className="social-login">
                            <button
                                className="login__submit"
                                onClick={() => navigate("/login")}
                            >
                                Login here
                            </button>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Register;
