import './App.css';

import { createContext, useContext, useState } from 'react';

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Redirect,
    Switch,
} from 'react-router-dom';

const Contexto = createContext();

function Home() {
    return (
        <>
            <nav>
                <NavLink className='link' to='/login'>
                    Login
                </NavLink>
                <NavLink className='link' to='/perfil'>
                    Perfil
                </NavLink>
            </nav>

            <h1>Home</h1>
        </>
    );
}

function Login() {
    const { login, setLogin } = useContext(Contexto);

    return (
        <>
            <nav>
                <NavLink className='link' to='/'>
                    Home
                </NavLink>
                <NavLink className='link' to='/perfil'>
                    Perfil
                </NavLink>
            </nav>

            <h1>Login</h1>
            <button
                onClick={() => {
                    setLogin(true);
                    console.log(login);
                }}
            >
                Logar
            </button>
        </>
    );
}

function Perfil() {
    const { login, setLogin } = useContext(Contexto);

    return (
        <>
            <nav>
                <NavLink className='link' to='/'>
                    Home
                </NavLink>
                <NavLink className='link' to='/login'>
                    Login
                </NavLink>
            </nav>

            <h1>Perfil</h1>
            <button
                onClick={() => {
                    setLogin(false);
                    console.log(login);
                }}
            >
                Deslogar
            </button>
        </>
    );
}

function App() {
    const [login, setLogin] = useState(false);
    const valorDoContexto = { login, setLogin };

    return (
        <>
            <Contexto.Provider value={valorDoContexto}>
                <Router>
                    <main>
                        <Switch>
                            {login && <Redirect path='/login' to='/perfil' />}

                            {!login && (
                                <Route path='/login' component={Login} />
                            )}

                            {!login && <Redirect path='/perfil' to='/login' />}

                            {login && (
                                <Route path='/perfil' component={Perfil} />
                            )}

                            <Route path='/' exact component={Home} />
                        </Switch>
                    </main>
                </Router>
            </Contexto.Provider>
        </>
    );
}

export default App;
