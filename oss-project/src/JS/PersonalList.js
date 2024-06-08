import PersonalItem from "./PersonalItem";
import "./css/PersonalList.css";

const PersonalList = () => {
    return (
        <div className="personal-list">
            <div className="list-count">
                <div>Total Count: 검색한 약물 개수</div>
            </div>
            <div className="list-wrapper">
                <PersonalItem />
                <PersonalItem />
                <PersonalItem />
            </div>
        </div>
    );
};

export default PersonalList;