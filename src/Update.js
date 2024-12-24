import { Link } from 'react-router-dom';
import './Update.css';



export const Update = () => {
    return (
        <div className='up_form'>
            <p className='up_p'>What to update?</p>
            <div className='up_container'>
                <Link to="/update_order">
                    <button className='up_button'>UPDATE ORDER</button>
                </Link>
                <Link to="/update_product">
                    <button className='up_button'>UPDATE PRODUCT</button>
                </Link>
            </div>
        </div>
    );
};
