import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../../firebaseConfig';
import styles from "./Register.module.scss";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleRegister = async (e: any) => {
        e.preventDefault();
        try {
            await registerUser(email, password, { name });
            alert('Successfully Registered! Thanks !');
            navigate('/');
        } catch (error) {
            console.error("Registration error", error);
            alert('Sorry, registration failed !');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>Register</div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                Alreay have an account?
                <NavLink to="/" >
                    Login !
                </NavLink>
            </div>
            <div className={styles.submitContainer}>
                <div
                    className={styles.submit}
                    onClick={(e) => {
                        handleRegister(e)
                    }}
                >
                    Sign Up
                </div>
            </div>
        </div>
    );
};

export default Register;
