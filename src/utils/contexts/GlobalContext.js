import React, { useState, createContext } from "react";
import { chapters as chaptersData } from "../constants";

export const GlobalContext = createContext({});

const GlobalContextProvider = ({ children }) => {
  const [initialAmount, setInitialAmount] = useState(100000);
  const [currentAmount, setCurrentAmount] = useState(100000);
  const [chapters, setChapters] = useState(
    chaptersData.map((chapter) => {
      const modSubChapters = chapter.subChapters.map((sub) => ({
        title: sub,
        complete: false,
      }));
      return { ...chapter, subChapters: modSubChapters, complete: false };
    })
  );

  return (
    <GlobalContext.Provider
      value={{
        initialAmount,
        setInitialAmount,
        currentAmount,
        setCurrentAmount,
        chapters,
        setChapters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
