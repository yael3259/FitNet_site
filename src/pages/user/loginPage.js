import { NavLink, useNavigate } from 'react-router-dom';
import { login, log_outUser } from '../../routes/userApi';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faildAlert, successAlert, warningAlert } from "../../components/alerts/All_Alerts";
import '../../styles/user/loginPage.css';
import { NavBar } from '../../components/NavBar';
import { useUserContext } from '../../contexts/user_context';
import { FaEnvelope, FaLock } from 'react-icons/fa';



export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      warningAlert("Please fill all the fields");
      return;
    }
    setLoading(true);
    try {
      let res = await login({ email, password });
      localStorage.setItem("userId", res.data._id);
      localStorage.setItem("userRole", res.data.role);
      localStorage.setItem("userName", res.data.userName);
      localStorage.setItem("url", res.data.url);
      localStorage.removeItem("cartItems");
      setUser({
        userId: res.data._id,
        userName: res.data.userName,
        userRole: res.data.role,
        url: res.data.url
      });
      navigate("/List");
    } catch (err) {
      faildAlert(err.response?.data?.message || "An error occurred. Please try again.")
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    try {
      const userId = localStorage.getItem("userId");
      await log_outUser(userId);
      localStorage.clear();
      setUser(null);
      successAlert("You are now logged out and in guest mode.");
      navigate("/");
    } catch (err) {
      console.error("Failed to log out user:", err.response?.data || err.message);
    }
  };

  return (
    <div className="login-container">
      <NavBar userName={user?.userName || "Guest"} />
      <form className="login-form" onSubmit={handleSubmit}>
        {user?.userName && <p onClick={logOut} className='logout'>Log out</p>}
        <h2>Login</h2>
        <div className="input-container">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Email" onChange={handleEmailChange} required />
        </div>
        <div className="input-container">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Password" onChange={handlePasswordChange} required />
        </div>
        <button type="submit" disabled={loading}>{loading ? <span className="user_spinner"></span> : "Login"}</button>
        <NavLink to="/reset_pass"><p className='reg'>Forgot password?</p></NavLink>
        <NavLink to="/sign_in"><p id='reg1' className='reg'>Don't have an account?</p></NavLink>
      </form>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default LoginForm;
