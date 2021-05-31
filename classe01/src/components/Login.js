import React from 'react'

import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div>
            <h1>LOGIN</h1>
            <nav>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'/perfil'}>PERFIL</NavLink>
            </nav>
        </div>
    )
}

export default Login
