import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { addUser } from './userApi';
import { NavBar } from '../../NavBar';
import './sign_in.css';



export const RegistrationPage = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [userRole, setUserRole] = useState('');
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!userName || !password || !email) {
            alert("Please fill all the fields");
            return;
        }
        const data = { email, password, userName };
        console.log("Submitted data:", data);

        try {
            const res = await addUser(data);
            alert("You signed up successfully!");
            console.log("Response from server:", res);

            // let userRole = res.data.role;
            // console.log("role: " + userRole);
            setUserRole(res.data.role);

            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <div className="registration-container">
            {/* <NavBar userRole={userRole} /> */}
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <input
                    type="text"
                    name="userName"
                    placeholder="User name"
                    value={userName}
                    onChange={handleUsernameChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button type="submit">Register</button>
                <NavLink to={"/login"} className="back_to_login">
                    <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
                    Back to login
                </NavLink>
            </form>
        </div>
    );
};
