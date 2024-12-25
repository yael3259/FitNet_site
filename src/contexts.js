// import React, { createContext, useState } from 'react';


// export const Context = createContext({
//     color: '#000000',  // ערך ברירת מחדל
//     theFunc: () => {}  // פונקציה ברירת מחדל
// });

// export const ContextProvider = ({ children }) => {
//     const [color, setColor] = useState('#000000');

//     const theFunc = (newColor) => {
//         setColor(newColor);
//     };

//     return (
//         <Context.Provider value={{ color, theFunc }}>
//             {children}
//         </Context.Provider>
//     );
// };



import React, { createContext, useState } from 'react';

export const Context = createContext();

export const MyProvider = ({ children, userRole, userDeatails }) => {
    const [color, setColor] = useState('#ffffff');
    const updateColor = (newColor) => setColor(newColor);

    return (
        <Context.Provider value={{ color, updateColor, userRole, userDeatails }}>
            {children}
        </Context.Provider>
    );
};
