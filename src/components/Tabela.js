import React from 'react'
import '../css/tabela.css'

const Tabela = () => {
  return (
    <div className='tabela-container'>
      <div className='tabela-colums'>
        <ul>
          <li>Data</li>
          <li>Categoria</li>
          <li>Descrição</li>
          <li>Valor</li>
          <li>Operção</li>
        </ul>
      </div>
    </div>
  )
}

export default Tabela