import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser } from "../../firebaseConfig";
import styles from "./Login.module.scss";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            await loginUser(email, password);
            // Successful login
            alert('Log in successful!');
            console.log("Log in successful");
            // Redirecting user
            navigate('/dashboard');
        } catch (error) {
            console.error("Login error", error);
            alert('Invalid Credentials !');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>Login</div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src={email_icon} alt="" />
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.forget}>
                Don't have an account ?
                <NavLink to="/register" className={styles.forgetSpan} >
                    Register !
                </NavLink>
            </div>
            <div className={styles.submitContainer}>
                <div
                    className={styles.submit}
                    onClick={(e) => {
                        handleLogin(e)
                    }}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default Login;
