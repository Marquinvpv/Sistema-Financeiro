import React, { useState } from "react";
import "../css/addData.css";

const AddData = () => {
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [operation, setOperation] = useState('entrada');
  const [entrada, setEntrada] = useState(true);
  const [saida, setSaida] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, category, description, value, operation);
  };

  const handleChangeOperation = () => {
    setEntrada(!entrada); 
    setSaida(!saida);
    operation === "entrada" ? setOperation("saida") : setOperation("entrada");
    }

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
          <label for="entrada">Entrada</label>
          <input
            type="checkbox"
            name="entrada"
            checked={entrada}
            onChange={(e) => handleChangeOperation()}
          />
        </div>
        <div className="add-children">
          <label for="saida">Saida</label>
          <input
            type="checkbox"
            name="saida"
            checked={saida}
            onChange={(e) => handleChangeOperation()}
          />
        </div>
      </div>
      <button className="button">Aplicar</button>
    </form>
  );
};

export default AddData;
