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

const handleSubmit = (e) => {
    e.preventDefault();
};

return (
    
}

export default WithoutImage;