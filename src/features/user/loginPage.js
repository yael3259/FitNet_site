import { NavLink, useNavigate } from 'react-router-dom';
import { login } from './userApi';
import React, { useState, useContext } from 'react';
import { deleteUser } from './userApi';
import './loginPage.css';



export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    const data = { email, password };

    try {
      let res = await login(data);
      alert("You login successfully!");
      console.log(data);

      localStorage.setItem("userId", res.data._id);
      localStorage.setItem("userRole", res.data.role);
      localStorage.setItem("userName", res.data.userName);

      navigate("/List");
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  const logOut = () => {
    // פונקציית הסרת משתמש
  }


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <p onClick={logOut} className='logout'>Log out</p>
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


// import { NavLink, useNavigate } from 'react-router-dom';
// import { login, deleteUser } from './userApi';
// import React, { useState } from 'react';
// import './loginPage.css';

// export const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handlesetEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLogout = async () => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       alert("No user to log out.");
//       return;
//     }

//     try {
//       await deleteUser(userId);
//       alert("User deleted successfully!");

//       localStorage.clear();
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.message || "An error occurred. Please try again.");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!email || !password) {
//       alert("Please fill all the fields");
//       return;
//     }

//     const data = { email, password };

//     try {
//       let res = await login(data);

//       localStorage.setItem("userId", res.data._id);
//       localStorage.setItem("userRole", res.data.role);
//       localStorage.setItem("userName", res.data.userName);

//       alert("You login successfully!");
//       navigate("/List");
//     } catch (err) {
//       alert(err.response?.data?.message || "An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <p onClick={handleLogout} className='logout'>Log out</p>

//         <h2>Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handlesetEmailChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handlePasswordChange}
//         />

//         <button type="submit">Login</button>
//         <NavLink to={"/reset_pass"}><p className='reg'>Forgot password?</p></NavLink>
//         <NavLink to={"/sign_in"}><p id='reg1' className='reg'>Don't have an account?</p></NavLink>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
