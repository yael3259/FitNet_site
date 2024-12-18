import { useState, useEffect } from 'react';
import './Cart.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';



export const CartShopping = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [removedItem, setRemovedItem] = useState(null);
    const [couponMessage, setCouponMessage] = useState('');

    let { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({ defaultValues: { cardNumber: '', expiryDate: '', cvv: '', cuponCode: '' } });

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);

        const total = storedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalAmount(total);
    }, []);

    const handleRemoveItem = (itemToRemove) => {
        const updatedCart = cartItems.filter(item => item._id !== itemToRemove._id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        const newTotal = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalAmount(newTotal);

        setRemovedItem(itemToRemove);
        setShowRemoveModal(true);
    };

    const CuponCode = (event) => {
        // מסיר רווחים מסביב
        const code = event.target.value.trim();
        console.log("Coupon Code:", code);

        if (!code) {
            setCouponMessage("");
            return;
        }

        let finalSum = totalAmount;
        let successMessage = "";
        console.log("Total Before Discount:", totalAmount);

        switch (code) {
            case "FIMJS16":
                finalSum *= 0.9; // 10%
                successMessage = "Discount applied: 10% off";
                break;
            case "HEFGI20":
                if (finalSum >= 80) {
                    finalSum *= 0.85; // 15%
                    successMessage = "Discount applied: 15% off";
                } else {
                    alert("Purchase amount less than $80");
                    return;
                }
                break;
            case "STWD20":
                finalSum *= 0.98; // 2%
                successMessage = "Discount applied: 2% off";
                break;
            default:
                alert("Code does not exist");
                return;
        }

        console.log("Total After Discount:", finalSum);

        setTotalAmount(finalSum);

        setCouponMessage(successMessage);
        setTimeout(() => {
            setCouponMessage("");
        }, 5000);
    };

    const handlePayment = (data) => {
        if (data.cardNumber && data.expiryDate && data.cvv) {
            setPaymentSuccess(true);
            setTimeout(() => {
                setPaymentSuccess(false);
                setValue("cardNumber", "");
                setValue("expiryDate", "");
                setValue("cvv", "");
                setValue("cuponCode", "")
            }, 3000);
        }
    };

    const closeRemoveModal = () => {
        setShowRemoveModal(false);
    };

    return (
        <div className='all'>
            <div className='top'>
                <p className='txt'>Shopping Cart</p>
                <NavLink to="/List">
                    <button className="back_to_list">Check out more items</button>
                </NavLink>
            </div>

            <div className='cart-container'>
                <div className='items'>
                    {cartItems.map((item, index) => (
                        <div className="item" key={index}>
                            <img
                                src={item.urlImage}
                                className="picture"
                                alt={item.name}
                            />
                            <div className="text-container">
                                <p className='name'>{item.name} <span id="q">x {item.quantity}</span></p>
                                <p className='price_item'>$ {item.price}</p>
                                <div className="color_choosed" style={{ backgroundColor: item.color }}></div>
                                <p className='total_price'>$ {(item.price) * (item.quantity)}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveItem(item)}
                                className="delete"
                            >
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/7612/7612810.png?ga=GA1.1.9839848.1731949521&semt=ais_hybrid"
                                    height={20}
                                    width={20}
                                    alt="Delete"
                                />
                            </button>
                        </div>
                    ))}
                </div>

                <div className='payment'>
                    <p className="tot">Total: <span id="t2">${totalAmount.toFixed(2)}</span></p>
                    {couponMessage && <p className="coupon-message">{couponMessage}</p>}
                    <form onSubmit={handleSubmit(handlePayment)}>
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            {...register("cardNumber", { required: "Card number is required", pattern: { value: /^[0-9]{16}$/, message: "Card number must contain 16 digits" } })} />
                        {errors.cardNumber && <p className="error">{errors.cardNumber.message}</p>}

                        <input
                            type="text"
                            name="expiryDate"
                            placeholder="Expiry Date (MM/YY)"
                            {...register("expiryDate", { required: "Expiry date is required", pattern: { value: /^[0-9]{2}\/[0-9]{2}$/, message: "Expiry date must be in MM/YY format" } })} />
                        {errors.expiryDate && <p className="error">{errors.expiryDate.message}</p>}

                        <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            {...register("cvv", { required: "CVV is required", pattern: { value: /^[0-9]{3}$/, message: "Cupon Code must contain 3 digits" } })} />
                        {errors.cvv && <p className="error">{errors.cvv.message}</p>}

                        <input
                            id='cupon_cartPage'
                            type="text"
                            name="cuponCode"
                            placeholder="Cupon Code (optional)"
                            {...register("cuponCode")}
                            onBlur={CuponCode}
                        />

                        <button type="submit" className="pay-button">Pay Now</button>
                    </form>

                    {paymentSuccess && <p className="success-message">Payment Successful!</p>}
                </div>
            </div>

            {showRemoveModal && removedItem && (
                <div className="remove-modal">
                    <div className="modal-content">
                        <button className='X_button' onClick={closeRemoveModal}><i className="fas fa-times"></i></button>
                        <p className='err_cart'>The item "{removedItem.name}" was deleted</p>
                    </div>
                </div>
            )}
        </div>
    );
};
