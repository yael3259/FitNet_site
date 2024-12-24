import { Link } from "react-router-dom";
import "./Admin.css";



export const Admin = () => {
    return (
        <div className='adminForm'>
            <p className='ad_p'>Access to the website administrators</p>
            <div className='adminContainer'>
                <Link to="/showUsers" className='AD_button'>ALL USERS</Link>
                <Link to="/showOrders" className='AD_button'>ALL ORDERS</Link>
            </div>
        </div>
    )
}