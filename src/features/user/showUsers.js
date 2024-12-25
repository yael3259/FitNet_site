import { useState, useEffect } from "react";
import { getAllUsers, deleteUser } from "./userApi";
import "./showUsers.css";



export const ShowAllUsers = () => {
    const [arr, setArr] = useState([]);
    const [error, setError] = useState(null);
    const [removedUser, setRemovedUser] = useState(null);
    const [showRemoveModal, setShowRemoveModal] = useState(false);


    const fetchAllUsers = async () => {
        try {
            const response = await getAllUsers();
            setArr(response.data);
        } catch (err) {
            setError("Failed to fetch users");
        }
    };

    const handleDelete = async (userToRemove) => {
        try {
            const res = await deleteUser(userToRemove._id);
            if (res.status === 200) {
                console.log("User deleted successfully");
            } else {
                console.error("Error deleting user:", res.data);
            }
            setRemovedUser(userToRemove);
            setShowRemoveModal(true);
            fetchAllUsers();
        } catch (err) {
            console.error("Failed to delete user:", err.response?.data || err.message);
        }
    };


    const closeRemoveModal = () => {
        setShowRemoveModal(false);
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div className="users-container">
            <p className="userTytle">All Users</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="users-grid">
                {arr.map((user) => (
                    <div className={`user-card ${user.role === "ADMIN" ? "admin-user" : ""}`} key={user._id}>
                    <p><strong>User Name: </strong>{user.userName}</p>
                        <p><strong>Email: </strong>{user.email}</p>
                        <p><strong>Role: </strong>{user.role}</p>
                        <p><strong>Enter Date: </strong>{user.enterDate.split("T")[0]}</p>

                        <button className="delete-user-btn" onClick={() => handleDelete(user)}>
                            <i className="fas fa-trash-alt"></i> Delete User
                        </button>
                    </div>
                ))}
            </div>

            {showRemoveModal && removedUser && (
                <div className="remove-modal">
                    <div className="modal-content">
                        <button className="X_button" onClick={closeRemoveModal}>
                            <i className="fas fa-times"></i>
                        </button>
                        <p className="err_cart">The user "{removedUser.userName}" was deleted</p>
                    </div>
                </div>
            )}
        </div>
    );
};
