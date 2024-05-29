const PersonalItem = () => {
    return (
        <div className="personal_item">
            <div className="title">약품명: </div>
            <div className="possible">복용가능여부: </div>
            <div className="delete_btn">
                <button>delete</button>
            </div>
        </div>
    );
};

export default PersonalItem;