import { NavLink, useNavigate } from 'react-router-dom';
import { login } from './userApi';
import React, { useState } from 'react';
import { log_outUser } from './userApi';
import './loginPage.css';
import { NavBar } from '../../NavBar';



export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "null");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlesetEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    setLoading(true);
    const data = { email, password };

    try {
      let res = await login(data);
      localStorage.setItem("userId", res.data._id);
      localStorage.setItem("userRole", res.data.role);
      localStorage.setItem("userName", res.data.userName);
      localStorage.setItem("url", res.data.url);
      // console.log("URL:", localStorage.getItem("url"));

      setUserName(res.data.userName);
      console.log("Response from server:", res);

      navigate("/List");
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const USER_ID = localStorage.getItem("userId");

  const logOut = async () => {
    try {
      await log_outUser(USER_ID);
      localStorage.removeItem("userId");
      localStorage.removeItem("userRole");
      localStorage.removeItem("userName");

      setUserName("null");
      alert("You are now logged out and in guest mode.");
      navigate("/");
    } catch (err) {
      console.error("Failed to log out user:", err.response?.data || err.message);
    }
  };

  return (
    <div className="login-container">
      <NavBar userName={userName} />
      <form className="login-form" onSubmit={handleSubmit}>
        {userName !== "null" && (
          <p onClick={logOut} className='logout'>Log out</p>
        )}
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handlesetEmailChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? (
            <span className="user_spinner"></span>
          ) : (
            "Login"
          )}
        </button>

        <NavLink to={"/reset_pass"}><p className='reg'>Forgot password?</p></NavLink>
        <NavLink to={"/sign_in"}><p id='reg1' className='reg'>Don't have an account?</p></NavLink>
      </form>
    </div>
  );
}

export default LoginForm;
