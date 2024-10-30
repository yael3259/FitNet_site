import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MiniBasket } from "./MiniBasket";
import './Details.css';



export const Ditails = ({ one }) => {
    const [quantity, setQuantity] = useState(1);

    const [showMiniBasket, setShowMiniBasket] = useState(false);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleButtonClick = () => {
        setShowMiniBasket(true)
        setTimeout(() => { setShowMiniBasket(false) }, 12000)
    }

    // return(<>
    //     <p>jjkhvb</p>
    //     <p>{one.name}</p>
    //    </>
    // );


    return (
        <>
            {showMiniBasket && <MiniBasket />}
            <div className="details">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfQpVhmvXQ4vQT4lFCaZV1KngNFErIwkx2A&s" className='img1' width={450} height={450} />

                <div className="text">
                    <p className="d">name</p>
                    <p className="d1"><span className='d2'>$</span>50</p>
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

                    <div className='color'>
                        <p className='c'>color product</p>
                        <div className='color'>
                            <button className='black'>N</button>
                            <button className='white'>N</button>
                            <button className='red'>N</button>
                        </div>
                    </div>

                    <div className='cnt'>
                        <p className='c'>quantity</p>
                        <div className="quantity-control">
                            <button className={`qty-control-m ${quantity === 1 ? 'qty-control-min' : ''}`} onClick={handleDecrement}>-</button>
                            {/* <input type="text" value={quantity} className="qty" readOnly /> */}
                            <p className="qty" readOnly >{quantity}</p>
                            <button className="qty-control" onClick={handleIncrement}>+</button>
                        </div>
                    </div>

                    <input type="button" value="add to cart" className="cart"
                        onClick={handleButtonClick} />
                </div>
            </div>
        </>
    );
};
