import axios from "axios";




let baseUrl = "http://localhost:5000/domain/api/order";


export const getAllorders = (page, perPage, serch) => {
    return axios.get(`${baseUrl}?page=${page}&txt=${serch}`);
}

export const getOrderById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
}

// export const updateOrder = (order) => {
//     console.log(order._id);
//     return axios.put(`${baseUrl}/${order.id}`, order);
// }
export const updateOrder = (order) => {
    return axios.put(`${baseUrl}/${order.id}`, order);
};

export const deleteOrder = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export const AddOrder = (order) => {
    return axios.post(baseUrl, order);
}

// export const AddOrder = (order) => {
//     // לוג הנתונים שנשלחים לשרת
//     console.log("Sending order data:", order);
    
//     // שליחת הבקשה לשרת
//     return axios.post(baseUrl, order)
//         .then(response => {
//             // לוג התשובה שהתקבלה מהשרת
//             console.log("Server response:", response.data);
//             return response;
//         })
//         .catch(error => {
//             // לוג במקרה של שגיאה בתשובה מהשרת
//             console.error("Order error:", error.response ? error.response.data : error.message);
            
//             // אם יש תשובת שגיאה מהשרת, נדפיס את המידע שלה
//             if (error.response) {
//                 console.log("Error response data:", error.response.data);
//                 console.log("Error response status:", error.response.status);
//                 console.log("Error response headers:", error.response.headers);
//             }
            
//             throw error;
//         });
// };

