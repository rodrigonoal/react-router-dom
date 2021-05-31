import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import useAuth from './hooks/useAuth';
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import Perfil from "./componentes/Perfil";
import AuthProvider from "./contexto/AuthProvider";
import "./App.css";

function App() {

  function RotasProtegidas (props) {
    const auth = useAuth();

    return (
      <Route render={() => auth.token === 200 ? props.children : <Redirect to="/login"/>}/>
    )
  }

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <RotasProtegidas>
              <Route path="/perfil/:nome" component={Perfil} />
            </RotasProtegidas>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
