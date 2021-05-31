import Home from "./components/Home";
import Login from "./components/Login";
import Perfil from "./components/Perfil";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import useAuth from "./hooks/useAuth";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

function RotasProtegidas(props) {
  const auth = useAuth();
  return (
    <Route
      render={() => (auth.token ? props.children : <Redirect to='/login' />)}
    />
  );
}

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <RotasProtegidas>
              <Route path='/:perfil' exact component={Perfil} />
            </RotasProtegidas>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
