import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetPasswordUser } from "../../routes/UserApi";
import { FaLock } from 'react-icons/fa';
import "../../styles/user/ForgotPassword.css";


export const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("email from user: ", email);
        console.log("password from user: ", password);

        setLoading(true);

        try {
            const res = await resetPasswordUser({ email, password });
            console.log("Response from server:", res.data);
            setMessage(res.data.message || "Password reset successfully");
            setError("");
        } catch (err) {
            console.error("Error response:", err.response?.data);
            setError(err.response?.data?.message || "Could not reset user password");
            setMessage("");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="reset-container">
            <form className="reset-form" onSubmit={handleSubmit}>
                <h2>Reset Password</h2>

                <label htmlFor="email" className="reset-label">
                </label>
                <div className="input-container">
                    <FaLock className="input-icon" />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="reset-input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /></div>

                <div className="input-container">
                    <FaLock className="input-icon" />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="password-input"
                        placeholder="Enter a new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /></div>

                <button type="submit" className="reset-button" disabled={loading}>
                    {loading ? (
                        <span className="user_spinner"></span>
                    ) : (
                        "Submit"
                    )}
                </button>

                {message && <p className="reset-success-message">{message}</p>}
                {error && <p className="reset-error-message">{error}</p>}
                <NavLink to={"/login"} className="back_to_login">
                    <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
                    Back to login
                </NavLink>
            </form>
            <ToastContainer position="bottom-center" />
        </div>
    );
};
