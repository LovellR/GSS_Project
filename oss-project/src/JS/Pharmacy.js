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

    const fetchPharmacies = async (region) => {
        try {
            const response = await fetch(`/api/pharmacies?region=${region}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPharmacies(data);
        } catch (error) {
            console.error('Error fetching pharmacies:', error);
        }
    };

    const handleRegion = (event) => {
        setSelectedRegion(event.target.value);
    };

    return (
        <div>     
            <h2 className='no-border'>
                약국 찾기 페이지
            </h2>

            <select onChange={handleRegion} value={selectedRegion}>
                <option value="">지역 선택</option>
                <option value="서울">서울시</option>
                <option value="청주">청주시</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>약국 이름</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    {pharmacies.map((pharmacy, index) => (
                        <tr key={index}>
                            <td>{pharmacy.name}</td>
                            <td>{pharmacy.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pharmacy;