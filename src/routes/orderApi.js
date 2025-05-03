import axios from "axios";




// let baseUrl = "http://localhost:5000/domain/api/order";
let baseUrl = "https://fitnet-qclc.onrender.com/domain/api/order";


export const getAllorders = (page, perPage, serch) => {
    return axios.get(`${baseUrl}?page=${page}&txt=${serch}`);
}

export const getOrderById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
}

// export const updateOrder = (data) => {
//     console.log("API: ", data);
//     return axios.post(baseUrl, data);
// };
export const updateOrder = (id, data) => {
    console.log("API: ", data);
    return axios.put(`${baseUrl}/${id}`, data);
};

export const deleteOrder = (id) => {
    console.log("Deleting order with ID:", id);
    return axios.delete(`${baseUrl}/${id}`);
}

export const AddOrder = (order) => {
    return axios.post(baseUrl, order);
}