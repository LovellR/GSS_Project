import React from "react";
import './css/Introduce.css';

const Introduce = () => {
    return (
        <div className="intro">
            <h2>인사말</h2>
            <h3>안녕하세요. PillCheck입니다.</h3>
            <div className="img-container">
                <img src="img/intro.jpg"></img>
            </div>
            <p>
                PillCheck은 2024-1학기 오픈소스기초프로젝트에서 "건강"을 주제로 시작된 프로젝트입니다. 위 프로젝트의 주목적은 약물 복용 사고를 방지하기 위한 웹을 제작하는 것입니다. 
                <br /> <br />
                해당 웹은 병용개인정보 기반으로 복용하지 말아야 하는 약물 정보를 알려주는 기능을 가지고 제공하고 있습니다. 처방된 약품이라도 처방 받은 병원이 다를 경우, 혼용 금기 약물인지 알기 어려우며, 이미 구비한 약품이 개인의 연령대, 임신 여부 등에 따라 복용해도 약품인지에 대해 알려줍니다.
            </p>
        </div>
    );
}

export default Introduce;
