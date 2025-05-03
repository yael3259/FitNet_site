import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faildAlert, successAlert, warningAlert } from "../../components/alerts/All_Alerts";
import { MiniBasket } from './MiniBasket';
import '../../styles/product/Details.css';
import { useLocation } from 'react-router-dom';


export const Details = () => {
    const location = useLocation();
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('');
    const [closeTimeout, setCloseTimeout] = useState(null);
    const [showMiniBasket, setShowMiniBasket] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    });

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const addToCart = () => {
        if (!selectedColor) {
            warningAlert('Please select a color');
            return;
        }

        const product = {
            ...location.state,
            quantity,
            color: selectedColor,
        };

        setCartItems(prevItems => {
            const existingProduct = prevItems.find(item => item._id === product._id && item.color === product.color);
            if (existingProduct) {
                return prevItems.map(item =>
                    item._id === product._id && item.color === product.color
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevItems, product];
            }
        });

        setShowMiniBasket(true);

        if (closeTimeout) {
            clearTimeout(closeTimeout);
        }

        const newTimeout = setTimeout(() => {
            setShowMiniBasket(false);
        }, 12000);
        setCloseTimeout(newTimeout);
    };

    return (
        <div>
            {showMiniBasket && <MiniBasket cartItems={cartItems} setCartItems={setCartItems} />}
            <div className="details_page">
                <img src={location.state.urlImage} className='img_detail' width={450} height={450} alt="Product" />
                <div className="text_details">
                    <p className="d">{location.state.name}</p>
                    <p className="d1"><span className='d2'>$</span>{location.state.price}</p>
                    <br />
                    <div className="star-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span className="rating">4.8</span>
                    </div>
                    <br />
                    <div className="color">
                        <p className="c">Color</p>
                        <div className="color-options">
                            <button className='black' onClick={() => setSelectedColor('Black')}>Black</button>
                            <button className='white' onClick={() => setSelectedColor('White')}>White</button>
                            <button className='red' onClick={() => setSelectedColor('Red')}>Red</button>
                        </div>
                    </div>

                    <div className='cnt'>
                        <p className='c'>Quantity</p>
                        <div className="quantity-control">
                            <button className={quantity === 1 ? 'qty-control-min' : "qty-control_minus"} onClick={handleDecrement}>-</button>
                            <p className="qty">{quantity}</p>
                            <button className="qty-control" onClick={handleIncrement}>+</button>
                        </div>
                    </div>

                    <button className="cart_b" onClick={addToCart}>ADD TO CART</button>
                </div>
            </div>

            <div className='description'>
                <p className='des'>Product description <br /><br /></p>
                {location.state.description}
            </div>
            <ToastContainer position="bottom-center" />
        </div>
    );
};
