import { NavLink, useNavigate } from 'react-router-dom';
import { login } from './userApi';
import React, { useState, useContext } from 'react';
import './loginPage.css';
import { Context } from '../../contexts';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();
  
  // const { updateRole } = useContext(Context); // גישה לפונקציה של עדכון התפקיד

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
    const data = { email, password };

    try {
      let res = await login(data);
      alert("You login successfully!");
      const userRole = res.data.role;
      // setUserRole(userRole); // עדכון ה-state המקומי
      // updateRole(userRole); // עדכון התפקיד בקונטקסט

      navigate("/List");
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    // <MyProvider userRole={userRole} />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handlesetEmailChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />

          <button type="submit">Login</button>
          <NavLink to={"/reset_pass"}><p className='reg'>Forgot password?</p></NavLink>
          <NavLink to={"/sign_in"}><p id='reg1' className='reg'>Don't have an account?</p></NavLink>
        </form>
      </div>
  );
}

export default LoginForm;
