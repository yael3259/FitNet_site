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

    window.addEventListener('resize', () => {
        const elements = document.querySelectorAll('.body1, .body2, .update-form, .label-container');
        elements.forEach(el => {
            el.style.border = 'none';
            el.style.outline = 'none';
        });
    });

    return (
        <div>
            <div className="body_update">
                <form onSubmit={handleSubmit(onSubmit)} className="search-form">
                    <div className="body1" id='searchSaction'>

                        <div className="bb">
                            <br></br>

                            <label className="title">UPDUTE PRODUCT</label>
                            <br></br><br></br><br></br>
                            <input type="text" className="search_input" placeholder="Enter product code" {...register('productId', { required: true })} />
                            <button type="submit" className="search_button">Search</button>
                            <br></br>
                            <button type="reset" className="reset_button">Reset</button>
                        </div>
                    </div>
                </form>

                {product && (
                    <form onSubmit={handleSubmit(onUpdateSubmit)} className="update-form">
                        <div className="bodyUpdate">
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
                                <label htmlFor="image" className="label transition-element">Image URL</label>
                                <input type="url" id="urlImage" className="transparent-input transition-element" {...register('urlImage')} />
                            </div>

                            {/* <div>
                                <img src="https://www.misgeret.co.il/wht_Images/catalog/subject/image_content_597.jpg.webp"/>
                            </div> */}
                            <br></br><br></br><br></br>

                            <button type="submit" className="submit_updatePage">Submit</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
