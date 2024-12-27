import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from './Nav.jsx';
import logo from './assets/header/logo.png'

const Header = () => {
    return (
        <div className="h-16 w-full z-10 px-5 flex justify-between items-center bg-gray-300 overflow-hidden">
            <NavLink to="/ABC">
                <img src={logo} alt="logo" className="h-16 py-1" />
            </NavLink>
            <Nav />
        </div>
    )
}
export default Header;