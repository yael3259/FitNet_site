import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getProductById, deleteProduct } from '../../routes/productApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faildAlert, successAlert, warningAlert } from "../../components/alerts/All_Alerts";
import '../../styles/product/DeleteProduct.css';





export function DeleteProductForm() {
    const [product, setProduct] = useState(null);
    const [productId, setProductId] = useState(null);

    const { register, handleSubmit } = useForm();


    const onSubmit = async (data, event) => {
        event.preventDefault();

        try {
            const res = await getProductById(data.productId);
            setProduct(res.data);
            setProductId(data.productId);

        } catch (error) {
            console.error('Error fetching product:', error);
            faildAlert("There is no product with such a code");
        }
    };


    const onDeleteSubmit = async () => {
        try {
            let res = await deleteProduct(productId);
            successAlert("This product has been successfully deleted");
            console.log(res);

        } catch (err) {
            faildAlert("Could not delete this product");
            console.log(err);
        }
    };

    return (
        <div className='del_div'>
            <div className="body_delete">
                <form onSubmit={handleSubmit(onSubmit)} className="search-form">
                    <div className="body1" id='deleteSearchSaction'>
                        <div className="bb">
                            <br></br>

                            <label className="title">DELETE PRODUCT</label>
                            <br></br><br></br><br></br>
                            <input type="text" className="search_input" placeholder="Enter product code" {...register('productId', { required: true })} />
                            <button type="submit" className="search_button">Search</button>
                            <br></br>
                            <button type="reset" className="reset_button">Reset</button>
                        </div>
                    </div>
                </form>

                {product && (
                    <form onSubmit={handleSubmit(onDeleteSubmit)} className="update-form">
                        <div className="body">
                            <p>Click OK to delete this product</p><br></br>
                            <button type="submit" className="ok">OK</button>
                        </div>
                    </form>
                )}
            </div>
            <ToastContainer position="bottom-center" />
        </div>
    );
}