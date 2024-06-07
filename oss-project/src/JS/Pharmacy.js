import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Pharmacy = () => {
    const [selectedRegion, setSelectedRegion] = useState('');
    const [pharmacies, setPharmacies] = useState([]);
    
    useEffect(() => {
        if (selectedRegion !== '') {
            fetchPharmacies(selectedRegion);
        }
    }, [selectedRegion]);
    
    return (
        <div>     
            <h2 className='no-border'>
                약국 찾기 페이지
            </h2>

            <select onChange={handleRegion} value={selectedRegion}>
                <option value="">지역 선택</option>
                <option value="서울시">서울시</option>
                <option value="청주시">청주시</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>약국 이름</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    <td> 약국이름1</td>
                    <td> 약국주소1</td>
                </tbody>
            </table>
        </div>
    );
};

export default Pharmacy;