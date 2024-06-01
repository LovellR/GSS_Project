import PersonalItem from "./PersonalItem";
import "./css/PersonalList.css";

const PersonalList = () => {
    return (
        <div className="personal-list">
            <h4 className="list-heading">약물 검색 리스트</h4>
            <div className="list-count">
                <div>Total Count: 검색한 약물 개수</div>
            </div>
            <div className="list-wrapper">
                <PersonalItem />
            </div>
        </div>
    );
};

export default PersonalList;