import React from "react";
import Dados from "./Dados";

import '../css/tabela.css'

const Tabela = () => {
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
        <Dados />
      </tbody>
    </table>
  );
};

export default Tabela;
