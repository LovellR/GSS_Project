import React, { useState } from 'react';
import WithoutImage from './WithoutImage';

const Detect = () => {

    const onUpload = (e) => {
        const file = e.target.files[0];
        
        // 파일이 없거나 이미지 파일이 아닌 경우에 대한 유효성 검사
        if (!file || !file.type.startsWith('image/')) {
            alert('이미지 파일을 업로드해주세요.');
            return;
        }
        };
    };


export default Detect;
