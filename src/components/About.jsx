import React, { useContext } from 'react'
import { Context1 } from '../context/Context1';

export const About = () => {

  const objectContext = useContext(Context1);

  return (
    <div>
      <h1>Pagina de Acerca de Nosotros</h1>
      <p>Datos del Cliente:</p>
      <pre>{JSON.stringify(objectContext.user)} </pre>
    </div>
  )
}
