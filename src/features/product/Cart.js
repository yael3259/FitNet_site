import { useState, useEffect } from 'react';
import { MiniBasket } from "./MiniBasket";
import './Cart.css';

export const CartShopping = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    return (
        <div>
            <p>Shopping Cart</p>
            <MiniBasket cartItems={cartItems} />
        </div>
    );
};
