import React from 'react';
import './app.css';
import { Routes, Route } from "react-router-dom";
import RegistrationPage from './sign_in';
import LoginForm from './loginPage';
import { useState } from 'react';
import List from './features/product/List';
import { addProduct, updateProduct } from './features/product/productApi';
import { AddProductForm } from './features/product/AddProduct';
import { UpdateProductForm } from './features/product/UpdateProduct';
import { DeleteProductForm } from './features/product/DeleteProduct';
import { Ditails } from './features/product/Details';
import { NavBar } from './NavBar';
import { MyColorContext } from "./contexts";
import { Contact } from './contactPage';
import { CartShopping } from './features/product/Cart';
import { Update } from './Update';
import {UpdateOrder} from './features/order/Update_Order';



function App() {

  // useContext-צבעים
  let [selectC, setSelectC] = useState("green");

  const cangeColor = (x) => {
    setSelectC(x);
  }


  return (
    <div className="app">
      <MyColorContext.Provider value={{ theColor: selectC, theFunc: cangeColor }}>
        <NavBar />
      </MyColorContext.Provider>

      <Routes>
        <Route path='' element={<List />} />
        <Route path='list' element={<List />} />
        <Route path='details/:id' element={<Ditails />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='sign_in' element={<RegistrationPage />} />
        <Route path='addProduct' element={<AddProductForm />} />
        <Route path='update' element={<Update />} />
        <Route path='update_product' element={<UpdateProductForm />} />
        <Route path='update_order' element={<UpdateOrder />} />
        <Route path='deleteProduct' element={<DeleteProductForm />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<CartShopping />} />
      </Routes>
    </div>
  );
}

export default App;
