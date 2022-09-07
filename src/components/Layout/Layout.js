import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../logo.svg'

const Layout = () => {

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <Link to='/'>
                    <img src={logo} alt="Coctain DB logo" className='logo' />
                </Link>
                <ul className="nav-links">
                    <li>
                        <NavLink to='/' activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName='active'>About</NavLink>
                    </li>
                </ul>
            </div >
        </nav >
    )
}

export default Layout