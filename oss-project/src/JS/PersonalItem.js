import "./css/PersonalItem.css";

const PersonalItem = ({ id, content, isPossible, onDelete }) => {
    const onClickDelete = () => {
        onDelete(id);
    };
    return (
        <div className="personal-item">
            <div className="title_col">약품명 : {content}</div>
            <div className="possible_col">복용가능 여부 : { isPossible }</div>
            <div className="btn_col">
                <button className="delete-btn" onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};

export default PersonalItem;