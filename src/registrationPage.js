import React, { useState } from 'react';
import './registrationPage.css';



const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', { username, password, email });
        // Add logic to handle registration data
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Registration</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="User name"
                    value={username}
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
            </form>
        </div>
    );
};

export default RegistrationPage;
