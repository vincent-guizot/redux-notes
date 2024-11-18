import React, { createContext, useContext, useState } from "react";

const BasicContext = createContext();

export function BasicContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <BasicContext.Provider value={{ count, setCount }}>
      {children}
    </BasicContext.Provider>
  );
}

export default BasicContext;
