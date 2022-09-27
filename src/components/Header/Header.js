import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className='header'>
                <nav className='manuBar'>
                    <img src={logo} alt="" />
                    <ul className='manu-items'>
                        <li><a href="\home">Order</a></li>
                        <li><a href="\home">Order Review</a></li>
                        <li><a href="\home">Manage Inventory</a></li>
                        <li><a href="\home">Login</a></li>
                    </ul>
                </nav>
           </header>
        </div>
    );
};

export default Header;