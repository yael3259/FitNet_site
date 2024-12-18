import axios from "axios";




let baseUrl = "http://localhost:5000/domain/api/order";


export const getAllorders = (page, perPage, serch) => {
    return axios.get(`${baseUrl}?page=${page}&txt=${serch}`);
}

export const getOrderById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
}

export const Update_Order = (product) => {
    return axios.put(`${baseUrl}/${product.id}`, product);
}