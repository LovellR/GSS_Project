import "./css/PersonalItem.css";

const PersonalItem = () => {
    return (
        <div className="personal-item">
            <div className="title">약품명: </div>
            <div className="possible">복용가능여부: </div>
            <button className="delete-btn">delete</button>
        </div>
    );
};

export default PersonalItem;