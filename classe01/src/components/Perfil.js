import React from 'react'

import { NavLink, Redirect } from 'react-router-dom'

function Perfil(props) {
    if(!props.isAuth){
        return (
            <Redirect to={'/login'}/>
        )
    }

    return (
        <div>
            <h1>Perfil</h1>
            <nav>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'/login'}>LOGIN</NavLink>
            </nav>
        </div>
    )
}

export default Perfil
