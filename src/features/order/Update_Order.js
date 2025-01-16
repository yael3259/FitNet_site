import "./Update_Order.css";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getOrderById, updateOrder } from './orderApi';



export function UpdateOrder() {
    const [order, setOrder] = useState(null);
    const { orderId } = useParams();
    const [isSent, setIsSent] = useState("");


    const handleInputChange = (e) => {
        setIsSent(e.target.value);
    };

    const updateSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!isSent) {
                alert("Please provide a valid status (Yes or No).");
                return;
            }
            console.log(isSent);
            const res = await updateOrder(isSent);
            
            // setOrder(res.data);
            alert("The order status has been successfully updated.");
        } catch (err) {
            alert("Failed to update the order.");
            console.error(err);
        }
    };
    // =======================================================
    // const updateSubmit = async (data) => {
    //     // if (data == "yes")
    //     //     data == true;
    //     // if (data == "no")
    //     //     data == false;
    //     try {
    //         console.log(data)
    //         let res = await updateOrder({
    //             if (data == "yes")
    //                 isSent == true;
    //             if (data == "no")
    //                 isSent == false;
    //         });
    //         alert("This product has been successfully edited");
    //         console.log(res);
    //     } catch (err) {
    //         alert("cannot edit this product");
    //         console.log(err);
    //     }
    // };

    return (
        <div className="update_order_form">
            <form onSubmit={updateSubmit} className="bodyUpdateOrder">
                <p className="sent">Has the order been confirmed for delivery?</p>
                <input
                    type="text"
                    className="yes_No"
                    placeholder="Enter Yes or No"
                    value={isSent}
                    onChange={handleInputChange}
                />
                <button type="submit" className="ok_b">
                    UPDATE
                </button>
            </form>
        </div>
    );
}
