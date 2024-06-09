import { useState } from 'react';
import './App.css';
import { Context1 } from './context/Context1';
import { AppRouter } from './routing/AppRouter';

function App() {

  // Variable de estado
  const [user, setUser] = useState({
    username: '@Alejandro',
    name: 'Alejandro Ramirez',
    phone: '3206901245'
  });

  /* const clients = {
    id: 100,
    name: 'Catalina',
    last_name: 'Saavedra',
    phone: '3209652020',
    city: 'Duitama'
  } */

  return (
    <div className="App">
      {/* Todo el utilice el contexto se envuelve la etiqueta */}
      <Context1.Provider value={{user: user, setUser}}>
         <AppRouter />
      </Context1.Provider>
    </div>
  );
}

export default App;
