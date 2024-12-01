import React from 'react';
import './loginPage.css';
import {RegistrationPage} from "./sign_in";
import { NavLink } from 'react-router-dom';



export const LoginForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Submitted:', { username, password });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <input type="text" name="username" placeholder="User name" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
        <NavLink to={"/sign_in"}><p className='reg'>Forgot password?</p></NavLink>
      </form>
    </div>
  );
}

export default LoginForm;
