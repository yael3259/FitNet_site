import "./Update_Order.css";
import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { updateOrder } from './orderApi';



export function UpdateOrder() {
    const { orderId } = useParams();
    const [isSent, setIsSent] = useState("");
    const navigate = useNavigate();


    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (value === "yes") setIsSent(true);
        else if (value === "no") setIsSent(false);
        else setIsSent("");
    };

    const updateSubmit = async (e) => {
        e.preventDefault();
        if (isSent === "") {
            alert("Please select Yes or No.");
            return;
        }

        try {
            await updateOrder(orderId, { isSent });
            alert("The order status has been successfully updated.");
            navigate("/showOrders");
        } catch (err) {
            alert("Failed to update the order.");
            console.error(err);
        }
    };

    return (
        <div className="update_order_form">
            <form onSubmit={updateSubmit} className="bodyUpdateOrder">
                <p className="sent">Has the order been confirmed for delivery?</p>
                <select className="yes_No" value={isSent === "" ? "" : isSent ? "yes" : "no"} onChange={handleSelectChange}>
                    <option value="" disabled hidden>Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <button type="submit" className="ok_b">UPDATE</button>
            </form>
        </div>
    );
}
