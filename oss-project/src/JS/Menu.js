import React from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';
import iconMedi from './css/icon.svg';

const Menu = () => {
    return (
        <div className='nav-container'>     
            <img src={iconMedi} alt="Icon" />
            <ul className='nav-ul'>
                <li className='nav-li'><Link to="/">홈</Link></li>
                <li className='nav-li'><Link to="/Search">병용금지약물찾기</Link></li>
                <li className='nav-li'><Link to="/Detail">개인정보기반약물찾기</Link></li>
                <li className='nav-li'><Link to="/Pharmacy">약국위치찾기</Link></li>
                <li className='nav-li'><Link to="/Contact">문의</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;