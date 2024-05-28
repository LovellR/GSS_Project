import React from 'react';

const Detail = () => {
    return (
        <div>
            <h2>개인정보 기반 약물 찾기</h2>
            <div className="search-container">
                <input type="text" placeholder="약물 이름을 입력하세요..." />
                <button type="submit">검색</button>
            </div>
        </div>
    );
};

export default Detail;