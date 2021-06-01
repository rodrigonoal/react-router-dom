import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/profile'>Perfil</NavLink>
        </div>
        
        <div className='main'>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
