import React, {useState} from 'react';
import axios from 'axios';

//병용금지페이지
const Search = () => {
    const [firstMedicine, setFisrsMedicine] = useState('');

    const handleSubmit = async() =>{
        const data = {
            firstMedicine
        }
    };

    try{
        const response = await axios.post('server', data,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('server res: ', response.data);
    }catch (errror){
        console.error('error with the axios oper:', error);
    }
};

    return (
        <div>
            <h2>
                병용금지약물페이지
            </h2>
  
            <div className="medicine">
                <div className="medicine-info">
                    <span>첫번째 약 :</span>
                    <input type="text" placeholder="검색창" value={firstMedicine} onChange={(e)=> setFisrsMedicine(e.target.value)}/>
                    <button onClick={handleSubmit}>저장</button>
                </div>
                <div className="medicine-info">
                    <span>두번째 약 :</span>
                    <input type="text" placeholder="검색창" />
                    <button>저장</button>
                </div>
                <div className="medicine-info">
                    <span>세번째 약 :</span>
                    <input type="text" placeholder="검색창" />
                    <button>저장</button>
                </div>
                <div className="search-pic">
                    <span>무슨 약인지모르겠나요? 여길 클릭해주세요! </span>
                </div> 
            </div>
            <button className="result-btn">병용금지약물 확인하기</button>
            <div className="result">
                    <span>병용금지여부 </span>
            </div> 
        </div>
    );
};

export default Search;