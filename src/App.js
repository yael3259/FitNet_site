import React from 'react';
import './app.css';
import { Routes, Route } from "react-router-dom";
import { RegistrationPage } from './pages/user/sign_in';
import LoginForm from './pages/user/loginPage';
import { ShowAllUsers } from './pages/user/showUsers';
import { ShowAllOrders } from './pages/order/showOrders';
import { useState } from 'react';
import { ResetPassword } from './pages/user/forgotPassword';
import List from './pages/product/List';
import { AddProductForm } from './pages/product/AddProduct';
import { UpdateProductForm } from './pages/product/UpdateProduct';
import { DeleteProductForm } from './pages/product/DeleteProduct';
import { Details } from './pages/product/Details';
// import { NavBar } from '.styles/NavBar';
import { NavBar } from './components/NavBar';
import { ColorContext } from "./contexts/color_context";
import { UserProvider } from "./contexts/user_context";
import { Contact } from './pages/contactPage';
import { CartShopping } from './pages/product/Cart';
import { Update } from './pages/Update';
import { UpdateOrder } from './pages/order/Update_Order';
import { Admin } from './pages/Admin';



function App() {

  // useContext-צבעים
  let [selectC, setSelectC] = useState("green");

  const cangeColor = (x) => {
    setSelectC(x);
  }

  return (
    <div className="app">
      <UserProvider>
      <ColorContext.Provider value={{ theColor: selectC, theFunc: cangeColor }}>
        <NavBar />
      </ColorContext.Provider>
  

      <Routes>
        <Route path='' element={<List />} />
        <Route path='list' element={<List />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='sign_in' element={<RegistrationPage />} />
        <Route path='showUsers' element={<ShowAllUsers />} />
        <Route path='reset_pass' element={<ResetPassword />} />
        <Route path='addProduct' element={<AddProductForm />} />
        <Route path='update' element={<Update />} />
        <Route path='update_product' element={<UpdateProductForm />} />
        <Route path='update_order/:orderId' element={<UpdateOrder />} />
        <Route path='showOrders' element={<ShowAllOrders />} />
        <Route path='adminPage' element={<Admin />} />
        <Route path='deleteProduct' element={<DeleteProductForm />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<CartShopping />} />
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
