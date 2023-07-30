import React, { useState } from 'react'
import '../css/balanco.css'

const Balanco = () => {
  const[receita,setReceita] = useState(1)
  const[despesa,setDespesa] = useState(2)
  const[balanco,setBalanco] = useState(3)
 

  return (
    <div className='balanco-container'>
      <div className='balanco-content'>
        <span>Receita</span>
        {receita}
      </div>
      <div className='balanco-content'>
        <span>Despesa</span>
        {despesa}
      </div>
      <div className='balanco-content'>
        <span>Balanço</span>
        {balanco}
      </div>
    </div>
  )
}

export default Balanco