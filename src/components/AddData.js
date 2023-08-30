import React, { useState } from "react";
import "../css/addData.css";
import Button from "./Button";
import { useDataContext } from "../provider/dataProvider";

const AddData = () => {
  const {
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
    userBalance,
    setUserBalance,
    arrayData,
    setArrayData,
    userFinance, 
    setUserFinance
  } = useDataContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDataObject = {
      data: data,
      category: category,
      description: description,
      value: value,
      operation: operation,
    };

    setArrayData((prevArrayData) => [...prevArrayData, newDataObject]);
    switch (operation) {
      case "entrada": {
        setUserBalance({ receita: userBalance.receita + Number(value), despesa: userBalance.despesa, balanco: userBalance.balanco + Number(value) });
        break;
      }
      case "saida": {
        setUserBalance({ receita: userBalance.receita, despesa: userBalance.despesa + Number(value), balanco: userBalance.balanco - Number(value) });
        break;
      }
    }
  };

  const handleChangeOperation = () => {
    setEntrada(!entrada);
    setSaida(!saida);
    operation === "entrada" ? setOperation("saida") : setOperation("entrada");
  };

  return (
    <form onSubmit={handleSubmit} className="add-container">
      <div className="add-content">
        <span>Data</span>
        <input
          value={data}
          type="date"
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div className="add-content">
        <span>Categoria</span>
        <select
          value={category}
          name="categoria"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="salario">Salário</option>
          <option value="alimentação">Alimentação</option>
          <option value="conta">Conta</option>
          <option value="outros">Outros</option>
        </select>
      </div>
      <div className="add-content">
        <span>Descrição</span>
        <input
          value={description}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="add-content">
        <span>Valor</span>
        <input
          value={value}
          type="number"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="add-content">
        <div className="add-children">
          <label htmlFor="entrada">Entrada</label>
          <input
            type="checkbox"
            name="entrada"
            checked={entrada}
            onChange={() => handleChangeOperation()}
          />
        </div>
        <div className="add-children">
          <label htmlFor="saida">Saida</label>
          <input
            type="checkbox"
            name="saida"
            checked={saida}
            onChange={() => handleChangeOperation()}
          />
        </div>
      </div>
      <Button />
    </form>
  );
};

export default AddData;
