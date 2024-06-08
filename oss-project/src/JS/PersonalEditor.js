import { useState } from "react";
import "./css/PersonalEditor.css";

const PersonalEditor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () =>{
        onCreate(content);
    };

    return (
        <div className="editor_wrapper">
            <input 
                type="text" 
                placeholder="약물 이름을 입력하세요..." 
                value={content}
                onChange={onChangeContent}
            />
            <button 
                type="submit"
                onClick={onSubmit}
            >
                검색
            </button>
        </div>
    );
};

export default PersonalEditor;