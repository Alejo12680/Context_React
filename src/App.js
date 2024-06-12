import { useEffect, useState } from 'react';
import './App.css';
import { Context1 } from './context/Context1';
import { AppRouter } from './routing/AppRouter';

function App() {

  // Variable de estado
  const [user, setUser] = useState({});

  useEffect(() => {
    // User que se guarda por primera vez useEffect() en localStorage
    let user_local = JSON.parse(localStorage.getItem("user"));
    setUser(user_local) 
  }, []);

  useEffect(() => {
    // Cada Cambio de Usuario y obtiene el usuario del localStorage
    localStorage.setItem("user", JSON.stringify(user))
  }, [user]);

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
