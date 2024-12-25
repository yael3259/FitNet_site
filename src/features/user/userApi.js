import axios from "axios";



let baseUrl1 = "http://localhost:5000/domain/api/user";
let baseUrl2 = "http://localhost:5000/domain/api/user/login";


export const getAllUsers = (allUsers) => {
    return axios.get(baseUrl1, allUsers);
}

export const login = (user) => {
    return axios.post(baseUrl2, user);
}

export const addUser = (userData) => {
    return axios.post(baseUrl1, userData);
};

export const deleteUser = (id) => {
    console.log("Deleting user with ID:", id);
    return axios.delete(`${baseUrl1}/${id}`);
};

