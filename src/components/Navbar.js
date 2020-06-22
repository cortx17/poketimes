import React from 'react';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <BrowserRouter basename='/' />
                <Link className='brand-logo' to={process.env.PUBLIC_URL + '/'}>
                    Poké' Times
                </Link>
                <ul className='right'>
                    <li>
                        <NavLink exact to={process.env.PUBLIC_URL + '/'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={process.env.PUBLIC_URL + '/search'}>Search</NavLink>
                    </li>
                    <li>
                        <NavLink to={process.env.PUBLIC_URL + '/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={process.env.PUBLIC_URL + '/contact'}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default withRouter(Navbar);
