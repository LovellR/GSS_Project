import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
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