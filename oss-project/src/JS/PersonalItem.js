import "./css/PersonalItem.css";

const PersonalItem = () => {
    return (
        <div className="personal-item">
            <div className="title_col">약품명: </div>
            <div className="possible_col">복용가능여부: </div>
            <div className="btn_col">
                <button className="delete-btn">삭제</button>
            </div>
        </div>
    );
};

export default PersonalItem;