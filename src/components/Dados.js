import { useContext } from "react";
import React from "react";
import { useDataContext } from "../provider/dataProvider";

import "../css/dados.css";

const Dados = ({ data, category, description, value, operation }) => {

  return (
    <tr className="dados-colums">
      <td>{data}</td>|<td>{category}</td>|<td>{description}</td>|
      <td>{value}</td>|<td>{operation}</td>
    </tr>
  );
};

export default Dados;
