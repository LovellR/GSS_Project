import { React, useState } from 'react';
import PersonalEditor from './PersonalEditor';
import PersonalList from './PersonalList';
import User from './User';

import "./css/Detail.css";

const mockPSearch = [
    {
        id:0,
        content: "성분0",
        isPossible: false,
    },
    {
        id:1,
        content: "성분1",
        isPossible: false,
    },
    {
        id:2,
        content: "성분2",
        isPossible: false,
    },
];

const Detail = () => {
    const [visible, setVisible] = useState(false);
    const [PSearch, setPSearch] = useState(mockPSearch);

    const onCreate = (content) => {
        const newItem = {
            id: 0,
            content,
            isPossible: false,
        };
        setPSearch([newItem, ...PSearch]);
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
                <PersonalList />
            </div>
        </div>
    );
};

export default Detail;