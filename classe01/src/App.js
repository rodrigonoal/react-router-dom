import './App.css';
import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Perfil from './components/Perfil'
import { BrowserRouter as Router,
         Route,
        } from 'react-router-dom'

const isAuth = false

function App() {
  return (
    <>
    <Router>
        <Route path='/login' exact component={Login}/>
        <Route path='/perfil' exact component={() => <Perfil isAuth={isAuth} />}/>
        <Route path='/' exact component={Home} />
    </Router>

   </>
  );
}

export default App;
