import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import Perfil from "./components/Perfil/Perfil.js";

function RouteAuth(props) {
  return (
    <Route
      render={() =>
        props.estaAutenticado ? props.children : <Redirect to="/login" />
      }
    />
  );
}

function App() {
  const estaAutenticado = false;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <RouteAuth estaAutenticado={estaAutenticado}>
            <Route path="/perfil" component={Perfil} />
          </RouteAuth>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
