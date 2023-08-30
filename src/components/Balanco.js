import { useDataContext } from '../provider/dataProvider';
import { useState } from 'react';
import '../css/balanco.css'

const Balanco = () => {
  const {
    value,
    setValue,
    operation,
    setOperation,
    entrada,
    setEntrada,
    saida,
    setSaida,
    userBalance,
    setUserBalance
  } = useDataContext();

  return (
    <form className='balanco-container'>
      <div className='balanco-content'>
        <span>Receita</span>
        {userBalance.receita}
      </div>
      <div className='balanco-content'>
        <span>Despesa</span>
        {userBalance.despesa}
      </div>
      <div className='balanco-content'>
        <span>Balanço</span>
        {userBalance.balanco}
      </div>
    </form>
  )
}

export default Balanco