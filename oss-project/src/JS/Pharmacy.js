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

    const cities = [
        "서울특별시",
        "부산광역시",
        "대구광역시",
        "인천광역시",
        "대전광역시",
        "광주광역시",
        "울산광역시",
        "세종특별자치시",
        "수원시",
        "성남시",
        "의정부시",
        "안양시",
        "부천시",
        "광명시",
        "평택시",
        "동두천시",
        "안산시",
        "고양시",
        "과천시",
        "구리시",
        "남양주시",
        "오산시",
        "시흥시",
        "군포시",
        "의왕시",
        "하남시",
        "용인시",
        "파주시",
        "이천시",
        "안성시",
        "김포시",
        "화성시",
        "광주시",
        "양주시",
        "포천시",
        "여주시",
        "청주시",
        "충주시",
        "제천시",
        "천안시",
        "공주시",
        "보령시",
        "아산시",
        "서산시",
        "논산시",
        "계룡시",
        "당진시",
        "목포시",
        "여수시",
        "순천시",
        "나주시",
        "광양시",
        "포항시",
        "경주시",
        "김천시",
        "안동시",
        "구미시",
        "영주시",
        "영천시",
        "상주시",
        "문경시",
        "경산시",
        "창원시",
        "진주시",
        "통영시",
        "사천시",
        "김해시",
        "밀양시",
        "거제시",
        "양산시",
        "춘천시",
        "원주시",
        "강릉시",
        "동해시",
        "태백시",
        "속초시",
        "삼척시",
        "전주시",
        "군산시",
        "익산시",
        "정읍시",
        "남원시",
        "김제시",
        "제주시",
        "서귀포시"
      ];

    return (
        <div>     
            <h2 className='no-border'>
                약국 찾기
            </h2>

            <div>
            <span> 도시를 선택하세요 </span>
            <select onChange={handleRegion} value={selectedRegion}>
            <option value="">지역 선택</option>
                {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>순번</th>
                        <th>약국 이름</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    {pharmacies.map((pharmacy, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
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