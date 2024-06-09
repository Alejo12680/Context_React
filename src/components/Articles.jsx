import React, { useContext } from 'react'
import { Context1 } from '../context/Context1';

export const Articles = () => {

  const nameContextArt = useContext(Context1);

  return (
    <div>
      <h1>Pagina de Articulos</h1>
      <p>Comprador: <b>{nameContextArt.user.name} </b></p>
    </div>
  )
}
