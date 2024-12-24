import { getAllUsers } from "./userApi";
import { useState, useEffect } from "react";
import "./showUsers.css";




export const ShowAllUsers = () => {
    const [arr, setArr] = useState([]);
    const [error, setError] = useState(null);


    const fetchAllUsers = async () => {
        try {
            const response = await getAllUsers();
            setArr(response.data);
        } catch (err) {
            setError("Failed to fetch users");
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div className="users-container">
            <p className="userTytle">All Users</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="users-grid">
                {arr.map((user, index) => (
                    <div key={index} className="user-card">
                        <p>User Name: {user.userName}</p>
                        <p>Email: {user.email}</p>
                        <p>Role: {user.role}</p>
                        <p>Enter Date: {user.enterDate.split("T")[0]}</p>
                        </div>
                ))}
            </div>
        </div>
    );
};
