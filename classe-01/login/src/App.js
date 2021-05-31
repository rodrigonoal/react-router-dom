import './App.css';
import { useState } from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Link,
  Switch, 
  Redirect
} from "react-router-dom";

function Home(){
  return(
    <>
      <Link to="/login">Login</Link>
      <Link to="/perfil">Perfil</Link>
    </>
  )
}

function Login(){
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/perfil">Perfil</Link>
      
    </>
    
  )
}

function Perfil(){
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/perfil">Login</Link>
    </>
  )
}

function RotasProtegidas(props){
  return(
    <Route 
      render={() => props.estaLogado ?
        (props.children) :
        (<Redirect to="/login" />)  
      }
    />
  )
}

function App() {
  const [ estaLogado, setEstaLogado] = useState(true);
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <RotasProtegidas estaLogado={estaLogado}>
            <Route path="/perfil" component={Perfil} />
          </RotasProtegidas>
          
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
