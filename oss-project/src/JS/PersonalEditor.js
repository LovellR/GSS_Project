import { useState, useRef } from "react";
import axios from "axios";
import "./css/PersonalEditor.css";

const PersonalEditor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = async () =>{
        if(!content){
            inputRef.current.focus();
            return;
        }

        try {
            const response = await axios.get("http://localhost:4000/api/old_table");
            const data = response.data;

            onCreate(data);
        }catch (error){
            console.error("Error checking drug: ", error);
            alert("해당 약물은 조회되지 않습니다.");
        }

        onCreate(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    return (
        <div className="editor_wrapper">
            <input 
                type="text" 
                placeholder="약물 이름을 입력하세요..." 
                ref={inputRef}
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
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