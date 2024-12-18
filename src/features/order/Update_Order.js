import "./Update_Order.css";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAllorders, getOrderById, Update_Order } from './orderApi';



export function UpdateOrder() {
    const [order, setorder] = useState(null);
    const { register, handleSubmit } = useForm();


    const onSubmit = async (data, event) => {
        event.preventDefault();

        try {
            const res = await getOrderById(data.orderId);
            setorder(res.data);
        } catch (error) {
            console.error('Error fetching order:', error);
            alert("There is no order with such a code");
        }
    };

    const onUpdateSubmit = async (data) => {
        try {
            let res = await UpdateOrder(data);
            alert("This order has been successfully edited");
            console.log(res);
        } catch (err) {
            alert("cannot edit this order");
            console.log(err);
        }
    };

    window.addEventListener('resize', () => {
        const elements = document.querySelectorAll('.body1, .body2, .update-form, .label-container');
        elements.forEach(el => {
            el.style.border = 'none';
            el.style.outline = 'none';
        });
    });

    return (
            <div className="update_order_form">
            <form onSubmit={handleSubmit(onSubmit)} className="search-form">
                    <div className="body1">
                        <div className="bb">
                            <br></br>

                            <label className="title">UPDATE ORDER</label>
                            <br></br><br></br><br></br>
                            <input type="text" className="search_input" placeholder="Enter order code" {...register('productId', { required: true })} />
                            <button type="submit" className="search_button">Search</button>
                            <br></br>
                            <button type="reset" className="reset_button">Reset</button>
                        </div>
                    </div>
                </form>

                {order && (
                    <form onSubmit={handleSubmit(onUpdateSubmit)} className="update-form">
                        <div className="body2">
                            <p className='tt' id='tt'></p>

                            <input type="hidden" id="id" value={order._id} {...register('id')} />
                            <br></br><br></br>

                                <p className="sent">Has the invitation been sent?</p>
                                <button className="ok">Yes</button>
                            </div>
                    </form>
                )}
            </div>
    );
}
