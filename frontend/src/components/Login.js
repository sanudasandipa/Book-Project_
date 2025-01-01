import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import '../CSS/Login.css';
import Footer from "./Footer";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://mybackend-production.up.railway.app/api/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.userId);
            alert("Login successful!");
            navigate("/UserHome");
        } catch (err) {
            console.error(err);
            alert("Invalid login credentials!");
        }
    };

    return (
        <div>

        <div>
           <Navbar />
           <br />
           <br />
        <div className="loginbody">
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleLogin}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="email"
                                    className="login__input"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input
                                    type="password"
                                    className="login__input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                className="button login__submit"
                                type="submit"
                            >
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div className="social-login">
                            
                            <button
                                className="login__submit"
                                onClick={() => navigate("/register")}
                            >
                                   Signup here
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

export default Login;
