import React, { createContext, useState } from "react";



export const ColorContext = createContext({
  color: '#ffffff',
  theFunc: () => {},
});

export const MyProvider = ({ children }) => {
  const [color, setColor] = useState('#ffffff');

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, updateColor }}>
      {children}
    </ColorContext.Provider>
  );
};
