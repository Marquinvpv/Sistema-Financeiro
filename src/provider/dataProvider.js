import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [operation, setOperation] = useState("entrada");
  const [entrada, setEntrada] = useState(true);
  const [saida, setSaida] = useState(false);
  const [arrayData, setArrayData] = useState([]);
  const [userBalance, setUserBalance] = useState({
    receita: 0,
    despesa: 0,
    balanco: 0
  });

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        category,
        setCategory,
        description,
        setDescription,
        value,
        setValue,
        operation,
        setOperation,
        entrada,
        setEntrada,
        saida,
        setSaida,
        arrayData,
        setArrayData,
        userBalance,
        setUserBalance
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
