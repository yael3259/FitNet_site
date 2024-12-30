// import "./Update_Order.css";
// import { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import { getOrderById, updateOrder } from './orderApi';



// export function UpdateOrder() {
//     const [order, setOrder] = useState(null);
//     const { orderId } = useParams();

//     useEffect(() => {
//         const fetchOrder = async () => {
//             try {
//                 const res = await getOrderById(orderId);
//                 console.log("Fetched Order Data:", res.data);
//                 setOrder(res.data);
//             } catch (error) {
//                 console.error('Error fetching order:', error);
//                 alert("There is no order with such a code");
//             }
//         };
//         if (orderId) {
//             fetchOrder();
//         }
//     }, [orderId]);


//     // const updateIsSentStatus = async () => {
//     //     if (!order || !orderId) {
//     //         alert("Order not found!");
//     //         return;
//     //     }
//     //     try {
//     //         const updatedOrder = { ...order, isSent: true };
//     //         console.log("Updated Order Data:", updatedOrder);  // Debugging to see what data is sent
//     //         const res = await updateOrder(updatedOrder);
//     //         console.log("Server Response:", res.data);  // Verify if the response data is correct
//     //         setOrder(res.data); // עדכון ה-State לאחר הצלחה
//     //         alert("The order status has been updated to 'sent'.");
//     //     } catch (err) {
//     //         console.error("Error updating order:", err);
//     //         alert("Failed to update the order.");
//     //     }
//     // };

//     const updateSubmit = async (data) => {
//             try {
//                 let res = await updateOrder(data);
//                 alert("This product has been successfully edited");
//                 console.log(res);
//             } catch (err) {
//                 alert("cannot edit this product");
//                 console.log(err);
//             }
//         };

//     return (
//         <div className="update_order_form">
//             {order ? (
//                 <div onSubmit={updateSubmit} className="bodyUpdateOrder">

//                     <p className="sent">Has the order been confirmed for delivery?</p>
//                     <input type="text" className="yes_No" placeholder="Enter Yes or No"></input>
//                     <button type="submit" className="ok_b">
//                         UPDATE
//                     </button>
//                 </div>
//             )
//                 : (<p>Loading order details...</p>)
//             }
//         </div>
//     );
// }

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

            const updatedOrder = { ...order, isSent: isSent.toLowerCase() === "yes" };
            const res = await updateOrder(updatedOrder);
            setOrder(res.data);
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
