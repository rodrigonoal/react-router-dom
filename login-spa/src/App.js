import React from "react";
// Páginas //
import Home from "./routers/Home";
import Login from "./routers/Login";
import Profile from "./routers/Profile";
// Roteador //
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
// Estilos //
import "./App.css"

function RotasProtegidas(props) {
  return (
    <Route 
    render={() => props.estaLogado ? (props.children) : (<Redirect to="/login" />)}
    />
  );
}

function App() {

  const estaLogado = false;

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} RotasProtegidas={RotasProtegidas} />
        <RotasProtegidas estaLogado={estaLogado}>
          <Route path="/profile" component={Profile} />
        </RotasProtegidas>
      </Router>
    </div>
  );
}

export default App;
