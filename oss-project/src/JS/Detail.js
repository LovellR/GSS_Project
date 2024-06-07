import { React, useState } from 'react';
import PersonalEditor from './PersonalEditor';
import PersonalList from './PersonalList';
import User from './User';

import "./css/Detail.css";

const Detail = () => {
    const [visible, setVisible] = useState(false);
    
    return (
        <div>
            <h2>개인정보 기반 약물 찾기</h2>
            <div className='input_personal'>
                <button onClick={() => {
                    setVisible(!visible);
                }}
                >
                    {visible ? "개인 이력 입력 창 닫기" : "개인 이력 입력 창 열기"}
                </button>
                {visible && <User />}
            </div> 
            <PersonalEditor />
            <PersonalList />
        </div>
    );
};

export default Detail;