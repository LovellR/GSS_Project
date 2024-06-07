import React from 'react';
import { Link } from 'react-router-dom';

const Pharmacy = () => {
    return (
        <div>     
            <h2 className='no-border'>
                약국 찾기 페이지
            </h2>

            <select>
                <option value="">지역 선택</option>
                <option value="서울시">서울시</option>
                <option value="청주시">청주시</option>
            </select>

            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Pharmacy;