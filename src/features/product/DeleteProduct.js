import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getProductById, deleteProduct } from './productApi';
import './DeleteProduct.css';




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
            alert("There is no product with such a code");
        }
    };


    const onDeleteSubmit = async () => {
        try {
            let res = await deleteProduct(productId);
            alert("This product has been successfully deleted");
            console.log(res);

        } catch (err) {
            alert("cannot delete this product");
            console.log(err);
        }
    };

    return (
        <div>
            <div className="b2">
                <form onSubmit={handleSubmit(onSubmit)} className="search-form">
                    <div className="body1">
                        <div className="bb">
                            <br></br>
                            <label className="title">Enter a specific product code to delete</label>
                            <br></br><br></br><br></br>
                            <input type="text" id="nnn" className="custom-input-style" {...register('productId', { required: true })} />
                            <button type="submit" className="transparent-submit">Search</button>
                            <br></br>
                            <button type="reset" className="transparent-reset">Reset</button>
                        </div>
                    </div>
                </form>

                {product && (
                    <form onSubmit={handleSubmit(onDeleteSubmit)} className="update-form">
                        <div className="body">
                            <p>Click OK to delete this product</p><br></br>
                            <button type="submit" className="transparent-submit transition-element">OK</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}