import React, { useContext } from 'react'
import { Context1 } from '../context/Context1';

export const Contact = () => {

  const nameContext = useContext(Context1);
  // Tabien se puede desestructurar
 /*  const {user} = useContext(Context1);
  <p>Nombre: <strong>{user.name} </strong> </p> */


  return (
    <div>
      <h1>Pagina de Contacto</h1>
      <p className='text-primary'>Nombre: <strong>{nameContext.user.name} </strong> </p>

      <p className='text-primary'>Telefono: <strong>{nameContext.user.phone} </strong> </p>
    </div>
  )
}
