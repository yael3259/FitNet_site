import React, { createContext, useState } from 'react';



export const Context = createContext();


export const MyColorProvider = ({ children, userRole }) => {
    const [color, setColor] = useState('#ffffff');
    const [role, setRole] = useState(null);

    const updateColor = (newColor) => {
        setColor(newColor);
    };

    const updateRole = (newRole) => {
        setRole(newRole);
    };

    return (
        <Context.Provider value={{ color, updateColor, role, updateRole }}>
            {children}
        </Context.Provider>
    );
};
