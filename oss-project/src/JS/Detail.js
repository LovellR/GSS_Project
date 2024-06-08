import { React, useState, useRef } from 'react';
import PersonalEditor from './PersonalEditor';
import PersonalList from './PersonalList';
import User from './User';

import "./css/Detail.css";

const mockPSearch = [
    {
        id:0,
        content: "예시 성분",
        isPossible: "O",
    },
];

const Detail = () => {
    const [visible, setVisible] = useState(false);
    const [PSearch, setPSearch] = useState(mockPSearch);
    const idRef = useRef(3); // 기존 목데이터가 인덱스 2까지 사용하기 때문에 3으로 초기화함
    
    const onCreate = (content) => {
        const newItem = {
            id: idRef.current,
            content,
            isPossible: false,
        };
        setPSearch([newItem, ...PSearch]);
        idRef.current += 1;
    };

    return (
        <div>
            <h2>개인 이력 기반 약물 찾기</h2>
            <div className='input_personal'>
                <button className='open_btn' onClick={() => {
                    setVisible(!visible);
                }}
                >
                    {visible ? "닫기" : "열기"}
                </button>
                {visible && <User />}
            </div> 
            <div className='personal_result'>
                <PersonalEditor onCreate={onCreate} />
                <PersonalList PSearch={PSearch} />
            </div>
        </div>
    );
};

export default Detail;