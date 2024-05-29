import React from 'react';
import PersonalEditor from './PersonalEditor';
import PersonalItem from './PersonalItem';

const Detail = () => {
    return (
        <div>
            <h2>개인정보 기반 약물 찾기</h2>
            <PersonalEditor />
            <PersonalItem />
        </div>
    );
};

export default Detail;