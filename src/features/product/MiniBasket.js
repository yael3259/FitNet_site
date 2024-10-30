import React from "react";
import "./MiniBasket.css";
import { NavLink } from "react-router-dom";




export const MiniBasket = () => {

    return (
        <div className="basket">
            {/* <p className="h">Mini Basket</p> */}
            <NavLink to="cart">
                <button className="cart-button">Go to shopping cart</button>
            </NavLink>
        </div>
    )
}