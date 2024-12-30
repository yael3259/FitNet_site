import React from 'react';
import './app.css';
import { Routes, Route } from "react-router-dom";
import { RegistrationPage } from './features/user/sign_in';
import LoginForm from './features/user/loginPage';
import { ShowAllUsers } from './features/user/showUsers';
import { ShowAllOrders } from './features/order/showOrders';
import { useState } from 'react';
import { ResetPassword } from './features/user/forgotPassword';
import List from './features/product/List';
import { addProduct, updateProduct } from './features/product/productApi';
import { AddProductForm } from './features/product/AddProduct';
import { UpdateProductForm } from './features/product/UpdateProduct';
import { DeleteProductForm } from './features/product/DeleteProduct';
import { Details } from './features/product/Details';
import { NavBar } from './NavBar';
import { Context } from "./contexts";
import { Contact } from './contactPage';
import { CartShopping } from './features/product/Cart';
import { Update } from './Update';
import { UpdateOrder } from './features/order/Update_Order';
import { Admin } from './Admin';



function App() {

  // useContext-צבעים
  let [selectC, setSelectC] = useState("green");

  const cangeColor = (x) => {
    setSelectC(x);
  }

  return (
    <div className="app">
      <Context.Provider value={{ theColor: selectC, theFunc: cangeColor }}>
        <NavBar />
      </Context.Provider>

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
    </div>
  );
}

export default App;

