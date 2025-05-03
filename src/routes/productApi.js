import axios from "axios";




// let baseUrl = "http://localhost:5000/domain/api/product";

let baseUrl= "https://fitnet-qclc.onrender.com/domain/api/product";



export const getAllProduct = (page, perPage, serch) => {
    return axios.get(`${baseUrl}?page=${page}&txt=${serch}`);
}

// export const getAllProduct = () => {
//     return axios.get(baseUrl);
// }

export const getProductById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
}

export const deleteProduct = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export const addProduct = (product) => {
    return axios.post(baseUrl, product);
}

export const updateProduct = (product) => {
    return axios.put(`${baseUrl}/${product.id}`, product);
}