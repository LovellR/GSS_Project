import React, {useState} from 'react';
import axios from 'axios';
import "./css/Search.css";
import Detect from './Detect';

//병용금지페이지
const Search = () => {
    const [visible, setVisible] = useState(false);
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
            
            
            <div className="search-pic"
            style={{ 
                backgroundColor: '#deedf77e', 
                borderRadius: '10px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                padding: '20px', 
                display: 'inline-block',
                maxWidth: '90%',
                marginTop: '20px'
            }}>
            <span onClick={() => {
                    setVisible(!visible);
                }}>{visible ? "닫기" : "무슨 약인지모르겠나요? 여길 클릭해주세요!"}</span>
            </div> 
            <div className='uploadImager'>
                {visible && <Detect />}
            </div>
            

            <div className="result">
            <h2 className='no-border'>병용금지여부 </h2>
            <p>아직 검색 결과가 없습니다</p>

            </div> 
        </div>
    );
};

export default Search;