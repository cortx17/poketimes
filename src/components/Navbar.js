import React from 'react';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <BrowserRouter basename='/' />
                <Link className='brand-logo' to='/'>
                    Poké' Times
                </Link>
                <ul className='right'>
                    <li>
                        <NavLink exact to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/search'>Search</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default withRouter(Navbar);
