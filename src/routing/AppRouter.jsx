import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from '../components/Home'
import { Articles } from '../components/Articles'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Login } from '../components/Login'
import { ErrorPage } from '../components/ErrorPage'
import { Context1 } from '../context/Context1'
import { DetailArticle } from '../components/DetailArticle'
import logo from '../assets/LOGOSTORE.png'


export const AppRouter = () => {

  const { user, setUser } = useContext(Context1);

  return (
    // Gestiona la rutas
    <Router>
      {/* Menu de Navegacion NavLink da el formato de link*/}
      <header className='header-nav'>
        <nav>
          <div>
            <img src={logo} alt="logo de la marca" className='logo-img' />
          </div>
          <ul>
            <li>
              <NavLink to='/'>Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/articulos'>Articulos</NavLink>
            </li>
            <li>
              <NavLink to='/acerca-de'>Acerca De</NavLink>
            </li>
            <li>
              <NavLink to='/contacto'>Contacto</NavLink>
            </li>

            {/* hasOwnProperty('username') que verifica si existe */}
            {user.hasOwnProperty('username') && user.username !== null ?

              (
                <>
                  <li>
                    <NavLink to='/login'>{user.username} </NavLink>
                  </li>
                  <li>
                    <a href='/' onClick={e => {
                      e.preventDefault();
                      // Era para setiarlo cuando no esta hasOwnProperty('username').
                      /*setUser({
                        username: null
                      }) */
                     setUser({});
                     
                    }}>Cerrar Sesión </a>
                  </li>
                </>

              ) : (
                <li>
                  <NavLink to='/login'>Login</NavLink>
                </li>

              )}


          </ul>
        </nav>
      </header>


      {/* Configuracion de las rutas */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='inicio' element={<Home />} ></Route>
          <Route path='/articulos' element={<Articles />} ></Route>
          <Route path='/article/:id' element={<DetailArticle/>} ></Route>
          <Route path='/acerca-de' element={<About />} ></Route>
          <Route path='/contacto' element={<Contact />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='*' element={<ErrorPage />} ></Route>
        </Routes>
      </section>

    </Router>
  )
}
