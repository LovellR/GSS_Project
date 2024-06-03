import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <hr/>
            <ul style={{color:'gray'}}>
                <li>팀 이름: 경소소</li>
                <li>강의명: 오픈소스기초프로젝트</li>
                <li>팀원: 이준호, 동민아, 최유림</li>
            </ul>
        </div>
    );
};

export default Footer;