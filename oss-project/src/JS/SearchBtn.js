import React from "react";
import { Link } from "react-router-dom";

const SearchBtn = () => {
    return (
        <div className="search-btn">
            <Link to="/search">병용금지 약물</Link>
            <Link to="/detail">개인정보 기반 약물</Link>            
        </div>
    );
}

export default SearchBtn;
