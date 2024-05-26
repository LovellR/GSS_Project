import React from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';
import iconMedi from './css/icon.svg';

const Menu = () => {
    return (
        <div className='nav-container'>     
            <img src={iconMedi} alt="Icon" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Detail">Detail</Link></li>
                <li><Link to="/Search">Search</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;