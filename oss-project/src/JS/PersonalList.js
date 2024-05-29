import PersonalItem from "./PersonalItem";

const PerosnalList = () => {
    return (
        <div className="personal-list">
            <h4>약물 검색 리스트</h4>
            <div>
                <div>Total Count: 검색한 약물 개수</div>
            </div>
            <div className="list_wrapper">
                {getSearchResult().map((it) => (
                    <PersonalItem key={it.id} {...it} />
                ))}
            </div>
        </div>
    );
};

export default PersonalList;