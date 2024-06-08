import React, { useState } from 'react';

const WithoutImage = () => {

const [identification, setIdentification] = useState('');
const [productName, setProductName] = useState('');
const [companyName, setCompanyName] = useState('');
const [selectedType, setSelectedType] = useState('');
const [selectedDivider, setSelectedDivider] = useState('');
const [selectedShape, setSelectedShape] = useState('');
const [selectedColor, setSelectedColor] = useState(''); 

const shapes = ['원형', '타원형', '장방형', '반원형', '삼각형', '사각형', '마름모형', '오각형', '육각형', '팔각형', '전체', '기타'];
const dividers = ['없음', '(+)형', '(-)형', '기타', '전체'];
const types = ['정제', '경질캡슐', '연질캡슐', '기타', '전체'];
const colors = ['하양', '노랑', '주황', '분홍', '빨강', '갈색', '연두', '초록', '청록', '파랑', '남색', '자주', '보라', '회색', '검정', '투명', '전체'];

const handleShapeSelection = (shape) => {
    setSelectedShape(shape === selectedShape ? '' : shape);
};

const handletypeSelection = (type) => {
    setSelectedType(type === selectedType ? '' : type);
};

const handledividerSelection = (divider) => {
    setSelectedDivider(divider === selectedDivider ? '' : divider);
};

const handleColorSelection = (color) => {
    setSelectedColor(color === selectedColor ? '' : color);
};

const handleSubmit = (e) => {
    e.preventDefault();
};

return (
    <div style={{ 
        backgroundColor: '#deedf77e', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        padding: '20px', 
        display: 'inline-block',
        maxWidth: '90%',
        marginTop: '20px',
        whiteSpace: 'nowrap' // 줄 바꿈 허용
    }}>
        <h2>제품 정보 입력</h2>
        <form onSubmit={handleSubmit}>
        <table>
            <tbody>
            <tr>
                <td>식별문자:</td>
                <td>
                <input type="text" value={identification} onChange={(e) => setIdentification(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>제품명/성분명:</td>
                <td>
                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>회사명:</td>
                <td>
                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>제형 선택:</td>
                <td>
                <div>
                    {types.map((type, index) => (
                    <button key={index} onClick={() => handletypeSelection(type)}style={{ border: selectedType === type ? '3px solid black' : '1px solid grey' }}>
                    {type === '정제' && (
                        <img src="https://www.health.kr/images/pills/type01.jpg" alt="정제" style={{ width: '50px', height: '50px' }} />
                    )}
                    {type === '경질캡슐' && (
                        <img src="https://www.health.kr/images/pills/type02.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                    )}
                    {type === '연질캡슐' && (
                        <img src="https://www.health.kr/images/pills/type03.jpg" alt="연질" style={{ width: '50px', height: '50px' }} />
                    )}
                    {(type !== '정제' && type !== '경질캡슐' && type !== '연질캡슐') && type}
                    </button>
                    ))}
                </div>
                </td>
            </tr>
            <tr>
                <td>모양 선택:</td>
                <td>
                <div>
                    {shapes.map((shape, index) => (
                    <button key={index} onClick={() => handleShapeSelection(shape)}style={{ border: selectedShape === shape ? '3px solid black' : '1px solid grey' }}>
                        {shape === '원형' && (
                        <img src="https://www.health.kr/images/pills/shape01.jpg" alt="정제" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '타원형' && (
                        <img src="https://www.health.kr/images/pills/shape02.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '장방형' && (
                        <img src="https://www.health.kr/images/pills/shape07.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '반원형' && (
                        <img src="https://www.health.kr/images/pills/shape03.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '삼각형' && (
                        <img src="https://www.health.kr/images/pills/shape04.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '사각형' && (
                        <img src="https://www.health.kr/images/pills/shape05.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '마름모형' && (
                        <img src="https://www.health.kr/images/pills/shape06.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '오각형' && (
                        <img src="https://www.health.kr/images/pills/shape10.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '육각형' && (
                        <img src="https://www.health.kr/images/pills/shape08.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '팔각형' && (
                        <img src="https://www.health.kr/images/pills/shape09.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                    {(shape !== '원형'&& shape !== '타원형' && shape !== '장방형' && shape !== '반원형'&& shape !== '삼각형'&& shape !== '사각형'&& shape !== '마름모형'&& shape !== '오각형'&& shape !== '육각형'&& shape !== '팔각형') && shape}
                    </button>
                    ))} 
                </div>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                <button type="submit">제출</button>
                </td>
            </tr>
            </tbody>
        </table>
        </form>
    </div>
    );
}

export default WithoutImage;