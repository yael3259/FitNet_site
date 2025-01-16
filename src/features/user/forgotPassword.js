import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { resetPasswordUser } from "./userApi";
import "./forgotPassword.css";



export const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("email from user: ", email);
        console.log("password from user: ", password);
        try {
            const res = await resetPasswordUser({ email, password });
            console.log("Response from server:", res.data);
            setMessage(res.data.message || "Password reset successfully");
            setError("");
        } catch (err) {
            console.error("Error response:", err.response?.data);
            setError(err.response?.data?.message || "Something went wrong!");
            setMessage("");
        }
    };


    return (
        <div className="reset-container">
            <form className="reset-form" onSubmit={handleSubmit}>
                <h2>Reset Password</h2>

                <label htmlFor="email" className="reset-label">
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="reset-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    id="password"
                    name="password"
                    type="password"
                    className="password-input"
                    placeholder="Enter a new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="reset-button">
                    Submit
                </button>
                {message && <p className="reset-success-message">{message}</p>}
                {error && <p className="reset-error-message">{error}</p>}
                <NavLink to={"/login"} className="back_to_login">
                    <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
                    Back to login
                </NavLink>
            </form>
        </div>
    );
};
