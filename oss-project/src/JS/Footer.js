import React from 'react';
import { Link } from 'react-router-dom';
import "./css/footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <hr/>
            <ul>
                <li>팀 이름: 경소소</li>
                <li>강의명: 오픈소스기초프로젝트</li>
                <li>팀원: 이준호, 동민아, 최유림</li>
                <li>(최근 업데이트: 2024년 6월)</li>
            </ul>
        </div>
    );
};

export default Footer;