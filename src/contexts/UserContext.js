import { createContext, useState, useEffect } from "react";


export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: localStorage.getItem("userId") || null,
    role: localStorage.getItem("userRole") || null,
    name: localStorage.getItem("userName") || "GUEST",
    url: localStorage.getItem("url") || "https://cdn-icons-png.freepik.com/256/12259/12259393.png",
  });

  useEffect(() => {
    localStorage.setItem("userId", user.id);
    localStorage.setItem("userRole", user.role);
    localStorage.setItem("userName", user.name);
    localStorage.setItem("url", user.url);
  }, [user]);

  const loginUser = (userData) => {
    setUser({
      id: userData._id,
      role: userData.role,
      name: userData.userName,
      url: userData.url || "https://cdn-icons-png.freepik.com/256/12259/12259393.png",
    });
  };

  const logoutUser = () => {
    setUser({
      id: null,
      role: null,
      name: "GUEST",
      url: "https://cdn-icons-png.freepik.com/256/12259/12259393.png",
    });
    localStorage.clear();
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
