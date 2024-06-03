import React, {useState} from 'react';
import axios from 'axios';

//병용금지페이지
const Search = () => {
    const [firstMedicine, setFisrsMedicine] = useState('');
    const [secondMedicine, setSecondMedicine] = useState('');
    const [thirdMedicine, setthirdMedicine] = useState('');


    const onSubmit = (e) =>{
        e.preventDefault();
        
        let formData = new FormData();
        formData.append("firstMedicine",firstMedicine);
        formData.append("secondMedicine",secondMedicine);
        formData.append("thirdMedicine",thirdMedicine);

        axios.post('http://localhost:4000/Search', formData)
        .then(res=>{
            console.log(res.data);
        })
        .catch(function(error){
            alert('failed');
        });
    };

    return (
        <div>
            <h2>
                병용금지약물페이지
            </h2>

            <form onSubmit={onSubmit} encType="multipart/form-data">
            <div className="medicine">
                <div className="medicine-info">
                    <span>첫번째 약 :</span>
                    <input type="text" placeholder="검색창" value={firstMedicine} onChange={(e)=> setFisrsMedicine(e.target.value)}/>
                </div>
                <div className="medicine-info">
                    <span>두번째 약 :</span>
                    <input type="text" placeholder="검색창" value={secondMedicine} onChange={(e)=> setSecondMedicine(e.target.value)}/>
                </div>
                <div className="medicine-info">
                    <span>세번째 약 :</span>
                    <input type="text" placeholder="검색창" value={thirdMedicine} onChange={(e)=> setthirdMedicine(e.target.value)}/>
                </div>
                <button type="submit">전송</button>
            </div>
            </form>
            
            <div className="search-pic">
                    <span>무슨 약인지모르겠나요? 여길 클릭해주세요! </span>
            </div> 


            <button className="result-btn">병용금지약물 확인하기</button>
            <div className="result">
                    <span>병용금지여부 </span>
            </div> 
        </div>
    );
};

export default Search;