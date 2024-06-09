import React, { useContext } from 'react'
import { Context1 } from '../context/Context1'

export const Home = () => {

  // Hooks de Conext
  const contextShare = useContext(Context1);


  return (
    <div>
      <h1>Pagina de Inicio</h1>
      <p>Hola Bienvenido <strong>{contextShare.user.username} </strong> a mi pagina de inicio</p>
    </div>
  )
}
