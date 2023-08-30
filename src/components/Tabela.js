import React, { useEffect, useState } from "react";
import Dados from "./Dados";

import '../css/tabela.css'
import { useDataContext } from "../provider/dataProvider";

const Tabela = () => {
  const {arrayData} = useDataContext();

  return (
    <table className="tabela-container">
      <thead className="tabela-title">
        <tr>
          <th>Data</th>
          <th>Categoria</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Operação</th>
        </tr>
      </thead>
      <tbody className="tabela-colums">
        {arrayData &&  arrayData.map(data => <Dados data={data.data} category={data.category} description={data.description} value={data.value} operation={data.operation}/>)}
      </tbody>
    </table>
  );
};

export default Tabela;
