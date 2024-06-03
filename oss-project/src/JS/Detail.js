import React from 'react';
import PersonalEditor from './PersonalEditor';
import PersonalList from './PersonalList';
import User from './User';

const Detail = () => {
    return (
        <div>
            <h2>개인정보 기반 약물 찾기</h2>
            <User />
            <PersonalEditor />
            <PersonalList />
        </div>
    );
};

export default Detail;