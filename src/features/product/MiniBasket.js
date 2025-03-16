import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faildAlert, successAlert, warningAlert } from "../../alerts/All_Alerts";
import "./MiniBasket.css";



export const MiniBasket = ({ cartItems, setCartItems, quantity }) => {

    const handleRemoveItem = (itemToRemove) => {
        const updatedCart = cartItems.filter(item => item._id !== itemToRemove._id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    if (!cartItems.length) {
        return <div className="basket basket-empty">
            <img src="https://cdn-icons-png.freepik.com/256/6495/6495314.png?ga=GA1.1.9839848.1731949521&semt=ais_hybrid" height={38} width={38} />
            <p>Your cart is empty</p><br />
        </div>;
    }

    const qty_price = (item) => {
        const price = item.price || 0;
        const quantity = item.quantity || 1;
        if (quantity > 1) {
            return price * quantity;
        } else {
            return price;
        }
    };


    return (
        <div className="basket">
            <NavLink to="/cart">
                <button className="cart-button">Go to shopping cart</button>
            </NavLink>

            <div className="top1">
                <p className="total-price">Total <span id="t">${totalPrice.toFixed(2)}</span></p>
            </div>
            <div id="mini-basket-container" className="item-container">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <div className="img_qty">
                            <p className="quantity">x {item.quantity}</p>
                            <img
                                src={item.urlImage}
                                alt={item.name}
                                className={`mini-basket-image mini-basket-image-${index}`} />
                        </div>
                        <div className="det_del">
                            <button
                                onClick={() => handleRemoveItem(item)}
                                className="remove">
                                <img src="https://cdn-icons-png.freepik.com/256/7612/7612810.png?ga=GA1.1.9839848.1731949521&semt=ais_hybrid"
                                    height={20}
                                    width={20} />
                            </button>
                            <div className="name_price">
                                <p className="pp">${qty_price(item)}</p>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer position="bottom-center" />
        </div>
    );
};