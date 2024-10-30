import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getProductById, updateProduct } from './productApi';
import './UpdateProduct.css';




export function UpdateProductForm() {
    const [product, setProduct] = useState(null);
    const { register, handleSubmit } = useForm();


    const onSubmit = async (data, event) => {
        event.preventDefault();

        try {
            const res = await getProductById(data.productId);
            setProduct(res.data);
        } catch (error) {
            console.error('Error fetching product:', error);
            alert("There is no product with such a code");
        }
    };

    const onUpdateSubmit = async (data) => {
        try {
            let res = await updateProduct(data);
            alert("This product has been successfully edited");
            console.log(res);
        } catch (err) {
            alert("cannot edit this product");
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

                            <label className="title">Enter a specific product code to edit</label>
                            <br></br><br></br><br></br>
                            <input type="text" id="nnn" className="custom-input-style" {...register('productId', { required: true })} />
                            <button type="submit" className="transparent-submit">Search</button>
                            <br></br>
                            <button type="reset" className="transparent-reset">Reset</button>
                        </div>
                    </div>
                </form>

                {product && (
                    <form onSubmit={handleSubmit(onUpdateSubmit)} className="update-form">
                        <div className="body2">
                            <p className='tt' id='tt'>Update product</p>

                            <input type="hidden" id="id" value={product._id} {...register('id')} />
                            <br></br><br></br>

                            <div className="label-container">
                                <label htmlFor="name" className="label transition-element">Name</label>
                                <input type="text" id="name" className="transparent-input transition-element" placeholder={product.name} {...register('name')} />
                            </div>
                            <br></br><br></br>

                            <div className="label-container">
                                <label htmlFor="price" className="label transition-element">Price</label>
                                <input type="number" id="price" className="transparent-input transition-element" placeholder={product.price} {...register('price')} />
                            </div>
                            <br></br><br></br>

                            <div className="label-container">
                                <label htmlFor="description" className="label transition-element">Description</label>
                                <textarea id="description" className="transparent-input transition-element" placeholder={product.description} {...register('description')} />
                            </div>
                            <br></br><br></br>

                            <div className="label-container">
                                <label htmlFor="color" className="label transition-element">Color</label>
                                <input type="color" id="color" className="transparent-input transition-element" placeholder={product.color} {...register('color')} />
                            </div>
                            <br></br><br></br>

                            <div className="label-container">
                                <label htmlFor="startDate" className="label transition-element">Start Date</label>
                                <input type="date" id="startDate" className="transparent-input transition-element" placeholder="" {...register('startDate')} />
                            </div>

                            <br></br><br></br>

                            <div className="label-container">
                                <label htmlFor="image" className="label transition-element">Image</label>
                                <input type="file" id="image" className="transparent-input transition-element" placeholder={"./files/pic.webp"} {...register('image')} />
                            </div>
                            
                            {/* <div>
                                <img src="https://www.misgeret.co.il/wht_Images/catalog/subject/image_content_597.jpg.webp"/>
                            </div> */}
                            <br></br><br></br><br></br>

                            <button type="submit" className="transparent-submit transition-element">Submit</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}