import { getAllorders } from "./orderApi";
import { useState, useEffect } from "react";
import { FaEdit, FaShippingFast } from 'react-icons/fa';
import "./showOrders.css";
import { Link } from "react-router-dom";



export const ShowAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const fetchAllOrders = async () => {
        try {
            const response = await getAllorders(page, 30, "");
            setOrders(response.data);
            console.log(response.data);
        } catch (err) {
            setError("Failed to fetch orders");
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, [page]);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString("en-GB");
    };

    return (
        <div className="orders-container">
            <h2>All Orders</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="orders-grid">
                {orders.map((order, index) => (
                    <div key={index} className="order-card">
                        <button className="deleteOrder_button">delete order</button>
                        <h3>Order ID: {order._id}</h3>
                        <div className="orderD">
                            <p><strong>User ID:</strong> {order.userId}</p>
                            <p><strong>Address:</strong> {order.address}</p>
                            <p><strong>Target Date:</strong> {formatDate(order.targetDate)}</p>
                            <p><strong>Status:</strong> {order.isSent ? "Sent" : "Pending"}</p>
                        </div>
                        <div className="products_list">
                            <h4>Products</h4>
                            {order.products.map((product, pIndex) => (
                                <div key={pIndex} className="product-item">
                                    <p>{product.name} <span id="sp">x {product.quantity}</span></p>
                                </div>
                            ))}
                        </div>
                        <Link to={`/update_order/${order._id}`}>
                            <button>
                                <FaEdit style={{ marginRight: "8px", paddingTop: "2px" }} /> Update Order Status
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};
