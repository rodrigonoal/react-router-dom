import React from 'react'

import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>HOME</h1>
            <nav>
                <NavLink to={'/login'}>LOGIN</NavLink>
                <NavLink to={'perfil'}>PERFIL</NavLink>
            </nav>
        </div>
    )
}

export default Home
