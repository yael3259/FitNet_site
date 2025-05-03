import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faildAlert, successAlert } from "../../components/alerts/All_Alerts";
import { addUser } from '../../routes/userApi';
import '../../styles/user/sign_in.css';
import { FaUser, FaLock, FaEnvelope, FaLink } from 'react-icons/fa';



export const RegistrationPage = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');
    const [userRole, setUserRole] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = {};

        if (!userName || userName.length < 3) {
            validationErrors.userName = "Username must be at least 3 characters long.";
        }

        if (!password || password.length < 5) {
            validationErrors.password = "Password must be at least 5 characters long.";
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailPattern.test(email)) {
            validationErrors.email = "Please enter a valid email address.";
        }

        if (url && !/^https?:\/\/[^\s]+$/.test(url)) {
            validationErrors.url = "Please enter a valid URL.";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);

        const data = { email, password, userName, url };
        console.log("data for submit:", data);

        try {
            const res = await addUser(data);

            successAlert("You signed up successfully!");
            console.log("Response from server:", res);

            setUserRole(res.data.role);

            navigate("/login");
        } catch (err) {
            faildAlert(err.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Sign up</h2>

                <div className="input-container">
                    <input
                        type="text"
                        name="userName"
                        placeholder="User name"
                        value={userName}
                        onChange={handleUsernameChange}
                    />
                    <FaUser className="input-icon" />
                </div>
                {errors.userName && <p className="error">{errors.userName}</p>}

                <div className="input-container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <FaLock className="input-icon" />
                </div>
                {errors.password && <p className="error">{errors.password}</p>}

                <div className="input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <FaEnvelope className="input-icon" />
                </div>
                {errors.email && <p className="error">{errors.email}</p>}

                <div className="input-container">
                    <input
                        type="url"
                        name="url"
                        placeholder="picture (optional)"
                        value={url}
                        onChange={handleUrlChange}
                    />
                    <FaLink className="input-icon" />
                </div>
                {errors.url && <p className="error">{errors.url}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? (
                        <span className="user_spinner"></span>
                    ) : (
                        "Register"
                    )}
                </button>
                <NavLink to={"/login"} className="back_to_login">
                    <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
                    Back to login
                </NavLink>
            </form>
            <ToastContainer position="bottom-center" />
        </div>
    );
};
