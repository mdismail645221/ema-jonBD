import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className='header'>
                <nav className='manuBar'>
                    <img src={logo} alt="" />
                    <ul className='manu-items'>
                        <li><Link to="shop">Shop</Link></li>
                        <li><Link to="order">Order Review</Link></li>
                        <li><Link to="\inventory">Manage Inventory</Link></li>
                        <li><Link to="\login">Login</Link></li>
                    </ul>
                </nav>
           </header>
        </div>
    );
};

export default Header;