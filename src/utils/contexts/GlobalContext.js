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
  const [chartData, setChartData] = useState({
    labels: [
      "Year 0",
      "Year 1",
      "Year 2",
      "Year 3",
      "Year 4",
      "Year 5",
      "Year 6",
      "Year 7",
      "Year 8",
      "Year 9",
      "Year 10",
    ],
    datasets: [
      {
        label: "Amount",
        data: [],
      },
    ],
  });

  React.useEffect(() => {
    localStorage.setItem("chartData-finvison", JSON.stringify(chartData));
  }, [chartData]);

  return (
    <GlobalContext.Provider
      value={{
        initialAmount,
        setInitialAmount,
        currentAmount,
        setCurrentAmount,
        chapters,
        setChapters,
        chartData,
        setChartData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
