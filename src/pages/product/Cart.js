import { useState, useEffect, React } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AddOrder } from "../../routes/OrderApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faildAlert, warningAlert } from "../../components/Alerts";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../../styles/product/Cart.css";



export const CartShopping = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [couponMessage, setCouponMessage] = useState("");
    const storedUserID = localStorage.getItem("userId");
    const [isCartEmpty, setIsCartEmpty] = useState(false);
    const [notification, setNotification] = useState("");


    // פונקציה ליצירת תאריך לעוד שבוע מהיום
    const defaultDate = () => {
        const today = new Date();
        const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        return nextWeek;
    }

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            cardNumber: "",
            expiryDate: "",
            cvv: "",
            cuponCode: "",
            address: "",
            targetDate: defaultDate
        }
    });

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCartItems);

        if (storedCartItems.length > 0) {
            const total = storedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotalAmount(total);
            setIsCartEmpty(false);
        } else {
            setTotalAmount(0);
            setIsCartEmpty(true);
        }
    }, []);

    const Model = ({ url }) => {
        const { scene } = useGLTF(url);
        return <primitive object={scene} scale={0.5} />;
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        const logo = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAikAAAD6CAYAAABkpte2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAEogSURBVHhe7d11nBz1/T/w12dk3c49nhAjBA1QtEiLB9dgbbEipUAF2h+UtlRov8WKVHArhKClSCBGICEJMYgn5+536zvz+fz+2LtA5mz3srs3F97Px2NLb+azm92Rz7zmM5/5DBP3HyxACCGEEGIyknECIYQQQogZUEghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQQogpUUghhBBCiClRSCGEEEKIKVFIIYQQ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";
        const pageWidth = doc.internal.pageSize.getWidth();
        const logoWidth = 30;
        const logoHeight = 18;
        const logoX = pageWidth - logoWidth - 10;
        const logoY = 10;

        doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);

        doc.text("Order Receipt", 14, logoY + logoHeight + 10);
        doc.text(`Total Amount: $${totalAmount.toFixed(2)}`, 14, logoY + logoHeight + 20);
        doc.text("Products:", 14, logoY + logoHeight + 30);

        const tableColumn = ["Name", "Price", "Quantity", "Total"];
        const tableRows = cartItems.map((item) => [
            item.name.toString(),
            `$${item.price.toFixed(2)}`,
            item.quantity.toString(),
            `$${(item.price * item.quantity).toFixed(2)}`
        ]);

        doc.autoTable({
            startY: logoY + logoHeight + 40,
            head: [tableColumn],
            body: tableRows
        });

        doc.save("order_receipt.pdf");
    };

    const handlePayment = async (data) => {
        if (data.cardNumber && data.expiryDate && data.cvv && data.address && data.targetDate) {

            if (cartItems.length === 0) {
                warningAlert("There are no products in your cart.\nAt least one product is required.");
                return;
            }
            try {
                if (!storedUserID) {
                    faildAlert("User is not logged in");
                    return;
                }
                console.log(storedUserID);

                const response = await AddOrder({
                    ...data,
                    products: cartItems,
                    userId: storedUserID
                });
                setPaymentSuccess(true);
                generatePDF();
                setCartItems([]);
                localStorage.removeItem("cartItems");
                setTimeout(() => {
                    setPaymentSuccess(false);
                    setValue("cardNumber", "");
                    setValue("expiryDate", "");
                    setValue("cvv", "");
                    setValue("cuponCode", "");
                    setValue("address", "");
                    setValue("targetDate", "");
                }, 3000);
            } catch (err) {
                console.error("Payment failed:", err);
                faildAlert("Payment failed. Please try again");
            }
        }
    };

    const handleRemoveItem = (itemToRemove) => {
        const updatedCart = cartItems.filter(item => item._id !== itemToRemove._id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));

        setNotification(
            <div className="notification-content">
                <p><span>{itemToRemove.name}</span>
                    has been removed from your cart</p>
            </div>
        );

        setTimeout(() => {
            setNotification("");
        }, 8000);
    };

    const CuponCode = (event) => {
        const code = event.target.value.trim();
        if (!code) return setCouponMessage("");

        let finalSum = totalAmount;
        let successMessage = "";

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
                    faildAlert("Purchase amount less than $80");
                    return;
                }
                break;
            case "STWD20":
                finalSum *= 0.98; // 2%
                successMessage = "Discount applied: 2% off";
                break;
            default:
                faildAlert("Invalid coupon code");
                return;
        }
        setTotalAmount(parseFloat(finalSum.toFixed(2)));
        setCouponMessage(successMessage);
        setTimeout(() => setCouponMessage(""), 5000);
    };

    return (
        <div className="all">
            {notification && (
                <div className="notification-container">
                    <div className="notification-box">
                        <button className="close-btn" onClick={() => setNotification("")} >X</button>
                        <p>{notification}</p>
                    </div>
                </div>
            )}
            <div className="top">
                <p className="txt">Shopping Cart</p>
                <NavLink to="/List">
                    <button className="back_to_list">Check out more items</button>
                </NavLink>
            </div>

            {isCartEmpty && <p className="emptyCart">Your cart is empty</p>}

            <div className="cart-container">
                <div className="items">
                    {cartItems.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.urlImage} className="picture" alt={item.name} />
                            <div className="text-container">
                                <p className="name">{item.name} <span id="q">x {item.quantity}</span></p>
                                <p className="price_item">$ {item.price}</p>
                                <div className="color_choosed" style={{ backgroundColor: item.color }}></div>
                                <p className="total_price">$ {(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveItem(item)}
                                className="delete">
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/7612/7612810.png?ga=GA1.1.9839848.1731949521&semt=ais_hybrid"
                                    height={20}
                                    width={20}
                                    alt="Delete" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="payment">
                    <p className="tot">Total: <span id="t2">${totalAmount.toFixed(2)}</span></p>
                    {couponMessage && <p className="coupon-message">{couponMessage}</p>}
                    <form onSubmit={handleSubmit(handlePayment)}>
                        <input type="text" placeholder="Card Number" {...register("cardNumber", { required: "Card number is required", pattern: /^[0-9]{16}$/ })} />
                        {errors.cardNumber && <p className="error">{errors.cardNumber.message}</p>}

                        <input type="text" placeholder="Expiry Date (MM/YY)" {...register("expiryDate", { required: "Expiry date is required", pattern: /^[0-9]{2}\/[0-9]{2}$/ })} />
                        {errors.expiryDate && <p className="error">{errors.expiryDate.message}</p>}

                        <input type="text" placeholder="CVV" {...register("cvv", { required: "CVV is required", pattern: /^[0-9]{3}$/ })} />
                        {errors.cvv && <p className="error">{errors.cvv.message}</p>}

                        <input type="text" placeholder="Coupon Code (optional)"
                            {...register("cuponCode")} onBlur={CuponCode} />

                        <div className="small_fileds">
                            <input type="text" placeholder="Address"
                                {...register("address", { required: "Address is required" })} />
                            {errors.address && <p className="error">{errors.address.message}</p>}

                            <input type="date" placeholder="Target Date"
                                {...register("targetDate")}
                            />
                        </div>

                        <button type="submit" className="pay-button">Pay Now</button>
                    </form>

                    {paymentSuccess && <p className="success-message">Payment Successful!</p>}
                </div>
            </div>

            <div className="model-container">
                <Canvas camera={{ position: [5, 0, 0], fov: 30 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1.2} />
                    <OrbitControls target={[0, 0, 0]} minDistance={2} maxDistance={10} />
                    <Model url="\models\model.glb" rotation={[0, 0, 0]} />
                </Canvas>
            </div>
            <ToastContainer position="bottom-center" />
        </div>
    );
};
