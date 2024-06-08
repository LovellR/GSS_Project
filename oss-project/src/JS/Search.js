import React, {useState} from 'react';
import axios from 'axios';
import "./css/Search.css";

//병용금지페이지
const Search = () => {
    const [firstMedicine, setFirstMedicine] = useState('');
    const [secondMedicine, setSecondMedicine] = useState('');
    //const [thirdMedicine, setThirdMedicine] = useState('');
    const [result, setResult] = useState(null);
    //const [searched, setSearched] = useState(false);  // 검색여부 확인

    const handleSubmit  = (e) =>{
        e.preventDefault();
        
        const data = {
            firstMedicine: firstMedicine,
            secondMedicine:secondMedicine,
            //thirdMedicine: thirdMedicine
        }

        axios.post('http://localhost:4000/Search', data)
        .then(res=>{
            setResult(res.data);
            // setSearched(true) // 검색시 true
            console.log(res.data);
        }) 
        .catch(function(error){
            setResult([]); // 이전에 조회된 경우 테이블을 감추기 위해 지정.
            alert('병용금기 약에 조회되지 않습니다');
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
                    {/* 
                    <div className="medicine-info">
                        <span>세번째 약</span>
                        <input type="text" placeholder="약 이름 입력" value={thirdMedicine} onChange={(e)=> setThirdMedicine(e.target.value)}/>
                    </div>
                     */}
                    <button className="medi_btn" onClick={handleSubmit}>검색</button>
                </div>
            </div>
            
            
            <div className="search-pic">
                    <span>무슨 약인지모르겠나요? 여길 클릭해주세요! </span>
            </div> 

            <div className="result">
                <div>
                    <h2 className='no-border'>병용금지여부</h2>
                    {result && result.length > 0 ? (
                        <div>
                            <p id ="alertMessage">같이 먹지마세요!</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>제품명A</th>
                                        <th>업소명A</th>
                                        <th>제품명B</th>
                                        <th>업소명B</th>
                                        <th>금기사유</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.제품명A}</td>
                                            <td>{item.업소명A}</td>
                                            <td>{item.제품명B}</td>
                                            <td>{item.업소명B}</td>
                                            <td>{item.금기사유}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>아직 검색 결과가 없습니다</p>
                    )}
                </div>
            </div>
                     
 
        </div>
    );
};

export default Search;