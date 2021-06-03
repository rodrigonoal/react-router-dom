import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';


function Home() {

  return (
    <>
      <Link to="/perfil"> Perfil</Link>
      <br />
      <Link to="/login"> Login</Link>
    </>
  )
}

function Login(props) {
  const { logado, setlogado } = props

  return (
    <>
      <Link to="/"> Home</Link>
      <br />
      <Link to="/perfil"> Perfil</Link>
      <br/>
      <button 
      onClick={() => setlogado(!logado)}>{logado ? 'Logoff' : 'Login'}
      </button>
    </>
  )
}

function Perfil() {

  return (
    <>
      <Link to="/"> Home</Link>
      <br />
      <Link to="/login"> Login</Link>
    </>
  )
}


function RotasProtegidas(props) {
  return (
    <Route
      render={() => props.logado ?
        (props.children) :
        (<Redirect to="/login"></Redirect>)}
    />
  )
}




function App() {
  const [logado, setLogado] = useState(false)


  return (
    <div>

      <Router>
        <Switch>
          <Route path='/login' render={props => <Login logado = {logado} setlogado={setLogado}/>}></Route>
          <Route exact path='/' component={Home}></Route>
          <RotasProtegidas logado={logado}>
            <Route path='/perfil' component={Perfil}></Route>
          </RotasProtegidas>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
