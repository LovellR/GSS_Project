import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

const Menu = () => {
    return (
        <div className='nav-container'>     
            <img className="logo-nav-img" src ="https://www.cbnu.ac.kr/site/www/images/contents/cts596_img01.png" alt="plant_wep" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Detail">Detail</Link></li>
                <li><Link to="/Search">Search</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;