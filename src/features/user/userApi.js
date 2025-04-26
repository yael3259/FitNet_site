import axios from "axios";



// let baseUrl = "http://localhost:5000/domain/api/user";
// let baseUrl_login = "http://localhost:5000/domain/api/user/login";

let baseUrl = "https://fitnet-qclc.onrender.com/domain/api/user";
let baseUrl_login = "https://fitnet-qclc.onrender.com/domain/api/user/login";


export const getAllUsers = (allUsers) => {
    return axios.get(baseUrl, allUsers);
}

export const login = (user) => {
    return axios.post(baseUrl_login, user);
}

export const addUser = (userData) => {
    return axios.post(baseUrl, userData);
};

export const deleteUser = (userId) => {
    console.log("Deleting user with ID:", userId);
    return axios.delete(`${baseUrl}/${userId}`);
};

export const log_outUser = (userId) => {
    return axios.delete(`${baseUrl}/${userId}`);
}

export const resetPasswordUser = (data) => {
    console.log("axios: ", data);
    return axios.put(baseUrl, data);
}