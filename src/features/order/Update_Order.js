import "./Update_Order.css";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getOrderById, updateOrder } from './orderApi';

export function UpdateOrder() {
    const [order, setOrder] = useState(null);
    const { orderId } = useParams();


    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const res = await getOrderById(orderId);
                console.log("Fetched Order Data:", res.data);
                setOrder(res.data);
            } catch (error) {
                console.error('Error fetching order:', error);
                alert("There is no order with such a code");
            }
        };
        if (orderId) {
            fetchOrder();
        }
    }, [orderId]);


    const updateIsSentStatus = async () => {
        if (!order || !orderId) {
            alert("Order not found!");
            return;
        }
        try {
            const updatedOrder = { ...order, isSent: true };
            console.log("Updated Order Data:", updatedOrder);  // Debugging to see what data is sent
            const res = await updateOrder(updatedOrder);
            console.log("Server Response:", res.data);  // Verify if the response data is correct
            setOrder(res.data); // עדכון ה-State לאחר הצלחה
            alert("The order status has been updated to 'sent'.");
        } catch (err) {
            console.error("Error updating order:", err);
            alert("Failed to update the order.");
        }
    };

    return (
        <div className="update_order_form">
            {order ? (
                <div className="body2">
                    {/* <p><strong>Order ID:</strong> {orderId}</p> */}
                    {/* <p className="sent">Has the invitation been sent?</p> */}
                    <p className="sent">Has the order been confirmed for delivery?</p>
                    <button
                        type="button"
                        className="ok_b"
                        onClick={updateIsSentStatus}
                    >
                        Yes
                    </button>
                </div>
            ) : (
                <p>Loading order details...</p>
            )}
        </div>
    );
}
