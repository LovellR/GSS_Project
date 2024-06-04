import React, {useState} from 'react';
import axios from 'axios';
import "./css/Search.css";

//병용금지페이지
const Search = () => {
    const [firstMedicine, setFirstMedicine] = useState('');
    const [secondMedicine, setSecondMedicine] = useState('');
    const [thirdMedicine, setThirdMedicine] = useState('');


    const handleSubmit  = (e) =>{
        e.preventDefault();
        
        const data = {
            firstMedicine: firstMedicine,
            secondMedicine:secondMedicine,
            thirdMedicine: thirdMedicine
        }

        axios.post('http://localhost:4000/Search', data)
        .then(res=>{
            console.log(res.data);
        }) 
        .catch(function(error){
            alert('failed');
        });
    };

    return (
        <div>
            <h2 className='no-border'>
                병용금지약물페이지
            </h2>
            <div className="search-intro">
                    <p>이 약이랑 저 약이랑 같이 먹어도 될까?<br></br>
                        헷갈릴 땐 아래에 약 이름을 넣고 검색해주세요! </p>
            </div> 
            <div className='medi-container'>
                <div className="medicine">
                    <div className="medicine-info">
                        <span>첫번째 약</span>
                        <input type="text" placeholder="약 이름 입력" value={firstMedicine} onChange={(e)=> setFirstMedicine(e.target.value)}/>
                    </div>
                    <div className="medicine-info">
                        <span>두번째 약</span>
                        <input type="text" placeholder="약 이름 입력" value={secondMedicine} onChange={(e)=> setSecondMedicine(e.target.value)}/>
                    </div>
                    <div className="medicine-info">
                        <span>세번째 약</span>
                        <input type="text" placeholder="약 이름 입력" value={thirdMedicine} onChange={(e)=> setThirdMedicine(e.target.value)}/>
                    </div>
                    <button className="medi_btn" onClick={handleSubmit}>검색</button>
                </div>
            </div>
            
            
            <div className="search-pic">
                    <span>무슨 약인지모르겠나요? 여길 클릭해주세요! </span>
            </div> 

            <div className="result">
                    <span>병용금지여부 </span>
            </div> 
        </div>
    );
};

export default Search;