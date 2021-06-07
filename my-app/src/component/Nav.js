import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" to="/">home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/news">New</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
        </ul>
    )
}

export default Nav
