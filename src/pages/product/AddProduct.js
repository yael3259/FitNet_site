import { useForm } from "react-hook-form";
import { addProduct } from "../../routes/ProductApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faildAlert, successAlert } from "../../components/Alerts";
import '../../styles/product/AddProduct.css';



export function AddProductForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            let res = await addProduct(data);
            successAlert("This product has been successfully added");
            console.log(res);
        }
        catch (err) {
            faildAlert("Could not add this product");
            console.log(err);
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="addForm">
            <div className="add_body1">
                <div className="bb">
                    <p className="p" id="addPtytle">ADD PRODUCT</p><br></br>

                    <div className="label-container">
                        <label htmlFor="name" className="label transition-element">Name</label>
                        <input type="text" id="name" className="transparent-input transition-element" {...register('name', { required: 'Name is required' })} />
                    </div>
                    {errors.name && <span>{errors.name.message}</span>}
                    <br></br><br></br>


                    <div className="label-container">
                        <label htmlFor="price" className="label transition-element">Price</label>
                        <input type="Number" id="price" className="transparent-input transition-element" {...register('price', { required: 'Price is required' })} />
                    </div>
                    {errors.price && <span>{errors.price.message}</span>}
                    <br></br><br></br>


                    <div className="label-container">
                        <label htmlFor="description" className="label transition-element">Description</label>
                        <textarea id="description" className="transparent-area transition-element" {...register('description')} />
                    </div>
                    <br></br>


                    <div className="label-container">
                        <label htmlFor="color" id="color0" className="label transition-element">Color</label>
                        <input type="color" id="color1" className="transparent-input transition-element" {...register('color')} />
                    </div>
                    <br></br><br></br>


                    <div className="label-container">
                        <label htmlFor="startDate" className="label transition-element">Start Date</label>
                        <input type="date" id="startDate" className="transparent-input transition-element" {...register('startDate')} defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                    <br></br><br></br>

                    <div className="label-container">
                        <label htmlFor="image" className="label transition-element">Image URL</label>
                        <input type="url" id="urlImage" className="transparent-input transition-element" {...register('urlImage')} />
                    </div>
                    <br></br><br></br>

                    <button type="submit" className="submit_addPage">Submit</button>
                </div>
            </div>
            <ToastContainer position="bottom-center" />
        </form >
    );
}