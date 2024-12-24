import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./forgotPassword.css";



export const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending email:", email);
        try {
            const response = await axios.post("http://localhost:5000/domain/api/user/reset-password", { email });
            console.log("Response from server:", response.data);
            setMessage(response.data.message);
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
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="reset-input"
                    placeholder="Enter your email"
                    required
                />
                <button type="submit" className="reset-button">
                    Send Reset Link
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
