import React, { useState, createContext } from "react";

export const GlobalContext = createContext({});

const GlobalContextProvider = ({ children }) => {
  const [initialAmount, setInitialAmount] = useState(100000);
  const [currentAmount, setCurrentAmount] = useState(100000);

  return (
    <GlobalContext.Provider
      value={{
        initialAmount,
        setInitialAmount,
        currentAmount,
        setCurrentAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
