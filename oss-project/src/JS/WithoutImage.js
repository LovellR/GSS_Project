import React, { useState } from 'react';
import axios from "axios";
import cheerio from "cheerio";

const WithoutImage = () => {

const [identification, setIdentification] = useState('');
const [productName, setProductName] = useState('');
const [companyName, setCompanyName] = useState('');
const [selectedType, setSelectedType] = useState('');
const [selectedDivider, setSelectedDivider] = useState('');
const [selectedShape, setSelectedShape] = useState('');
const [selectedColor, setSelectedColor] = useState(''); 
const [results, setResults] = useState([]); // 결과를 저장할 state
const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 관리할 state+
const [result, setResult] = useState([]); // 결과를 저장할 state


const shapes = ['원형', '타원형', '장방형', '반원형', '삼각형', '사각형', '마름모형', '오각형', '육각형', '팔각형', '전체'];
const dividers = ['없음', '(+)형', '(-)형', '기타', '전체'];
const types = ['정제', '경질캡슐', '연질캡슐', '기타', '전체'];
const colors = ['하양', '노랑', '주황', '분홍', '빨강', '갈색', '연두', '초록', '청록', '파랑', '남색', '자주', '보라', '회색', '검정', '투명', '전체'];

const handleShapeSelection = (shape) => {
    setSelectedShape(shape === selectedShape ? '' : shape);
};

const handletypeSelection = (type) => {
    setSelectedType(type === selectedType ? '' : type);
};

const handledividerSelection = (divider) => {
    setSelectedDivider(divider === selectedDivider ? '' : divider);
};

const handleColorSelection = (color) => {
    setSelectedColor(color === selectedColor ? '' : color);
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.get("https://www.health.kr/searchIdentity/search.asp");
        const $ = cheerio.load(response.data);
        
        $(".drug_print_front").val(identification);
        $(".drug_name").val(productName);
        $(".firm_name").val(companyName);
        

        switch(selectedType) {
            case '정제':
                $("#type_01 a").click();
            break;
            case '경질캡슐':
                $("#type_02 a").click();
            break;
            case '연질캡슐':
                $("#type_03 a").click();
            break;
            case '기타':
                $("#type_etc a").click();
            break;
            case '전체':
                $("#type_all a").click();
            break;
            default:
                // 기본 처리
                break;
        }

        switch(selectedShape) {
            case '원형':
                $("#shape_01 a").click();
            break;
            case '타원형':
                $("#shape_02 a").click();
            break;
            case '장방형':
                $("#shape_07 a").click();
            break;
            case '반원형':
                $("#shape_03 a").click();
            break;
            case '삼각형':
                $("#shape_04 a").click();
            break;
            case '사각형':
                $("#shape_05 a").click();
            break;
            case '마름모형':
                $("#shape_06 a").click();
            break;
            case '오각형':
                $("#shape_10 a").click();
            break;
            case '육각형':
                $("#shape_09 a").click();
            break;
            case '팔각형':
                $("#shape_08 a").click();
            break;
            case '전체':
                $("#shape_all a").click();
            break;
            default:
                // 기본 처리
                break;
        }

        switch(selectedDivider) {
            case '없음':
                $("#line_no a").click();
            break;
            case '(+)형':
                $("#line_plus a").click();
            break;
            case '(-)형':
                $("#line_minus a").click();
            break;
            case '기타':
                $("#line_etc a").click();
            break;
            case '전체':
                $("#line_all a").click();
            break;
            default:
                // 기본 처리
                break;
        }

        switch(selectedColor) {
            case '하양':
                $("#color_white").click();
            break;
            case '노랑':
                $("#color_yellow").click();
            break;
            case '주황':
                $("#color_orange").click();
            break;
            case '분홍':
                $("#color_pink").click();
            break;
            case '빨강':
                $("#color_red").click();
            break;
            case '갈색':
                $("#color_brown").click();
            break;
            case '연두':
                $("#color_ygreen").click();
            break;
            case '초록':
                $("#color_green").click();
            break;
            case '청록':
                $("#color_bgreen").click();
            break;
            case '파랑':
                $("#color_blue").click();
            break;
            case '남색':
                $("#color_navy").click();
            break;
            case '자주':
                $("#color_wine").click();
            break;
            case '보라':
                $("#color_purple").click();
            break;
            case '회색':
                $("#color_grey").click();
            break;
            case '검정':
                $("#color_black").click();
            break;
            case '투명':
                $("#color_transp").click();
            break;
            case '전체':
                $("#color_all").click();
            break;
            default:
                // 기본 처리
                break;
        }

        console.log($.html());
        
        try {
            $("#btn_idfysearch").click();
        
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 3000); // 예: 3초 동안 기다립니다. 필요에 따라 시간을 조절하세요.
            });
        
            const results = [];
            // 결과를 파싱해서 가져오는 로직 추가
            $("article.tab2_cont table.tab3_cont tbody tr").each((index, element) => {
                if (index >= 2 && index <= 11) { // 3번째부터 12번째까지 가져옴
                    const resultItem = {};
                    $(element).find("td").each((i, el) => {
                        switch (i) {
                            case 0:
                                resultItem.image = $(el).find("img").attr("src");
                                break;
                            case 1:
                                resultItem.mark = $(el).text().trim();
                                break;
                            case 2:
                                resultItem.type = $(el).text().trim();
                                break;
                            case 3:
                                resultItem.sizeLong = $(el).text().trim();
                                break;
                            case 4:
                                resultItem.sizeShort = $(el).text().trim();
                                break;
                            case 5:
                                resultItem.thickness = $(el).text().trim();
                                break;
                            case 6:
                                resultItem.name = $(el).text().trim();
                                break;
                            case 7:
                                resultItem.company = $(el).text().trim();
                                break;
                            default:
                                break;
                        }
                    });
                    results.push(resultItem);
                }
            });
            setResult(results);
        } catch (error) {
            console.error("오류 발생:", error);
        }
        
        setIsLoading(false);

    } catch (error) {
        console.error("오류 발생:", error);
    }
};


return (
    <div style={{ 
        backgroundColor: '#deedf77e', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        padding: '20px', 
        display: 'inline-block',
        maxWidth: '90%',
        marginTop: '20px',
        whiteSpace: 'nowrap' // 줄 바꿈 허용
    }}>
        <h2>제품 정보 입력</h2>
        <form onSubmit={handleSubmit}>
        <table>
            <tbody>
            <tr>
                <td>식별문자:</td>
                <td>
                <input type="text" value={identification} onChange={(e) => setIdentification(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>제품명/성분명:</td>
                <td>
                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>회사명:</td>
                <td>
                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>제형 선택:</td>
                <td>
                <div>
                    {types.map((type, index) => (
                    <button key={index} onClick={() => handletypeSelection(type)}style={{ border: selectedType === type ? '3px solid black' : '1px solid grey' }}>
                    {type === '정제' && (
                        <img src="https://www.health.kr/images/pills/type01.jpg" alt="정제" style={{ width: '50px', height: '50px' }} />
                    )}
                    {type === '경질캡슐' && (
                        <img src="https://www.health.kr/images/pills/type02.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                    )}
                    {type === '연질캡슐' && (
                        <img src="https://www.health.kr/images/pills/type03.jpg" alt="연질" style={{ width: '50px', height: '50px' }} />
                    )}
                    {(type !== '정제' && type !== '경질캡슐' && type !== '연질캡슐') && type}
                    </button>
                    ))}
                </div>
                </td>
            </tr>
            <tr>
                <td>모양 선택:</td>
                <td>
                <div>
                    {shapes.map((shape, index) => (
                    <button key={index} onClick={() => handleShapeSelection(shape)}style={{ border: selectedShape === shape ? '3px solid black' : '1px solid grey' }}>
                        {shape === '원형' && (
                        <img src="https://www.health.kr/images/pills/shape01.jpg" alt="정제" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '타원형' && (
                        <img src="https://www.health.kr/images/pills/shape02.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '장방형' && (
                        <img src="https://www.health.kr/images/pills/shape07.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '반원형' && (
                        <img src="https://www.health.kr/images/pills/shape03.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '삼각형' && (
                        <img src="https://www.health.kr/images/pills/shape04.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '사각형' && (
                        <img src="https://www.health.kr/images/pills/shape05.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '마름모형' && (
                        <img src="https://www.health.kr/images/pills/shape06.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '오각형' && (
                        <img src="https://www.health.kr/images/pills/shape10.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '육각형' && (
                        <img src="https://www.health.kr/images/pills/shape08.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {shape === '팔각형' && (
                        <img src="https://www.health.kr/images/pills/shape09.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                    {(shape !== '원형'&& shape !== '타원형' && shape !== '장방형' && shape !== '반원형'&& shape !== '삼각형'&& shape !== '사각형'&& shape !== '마름모형'&& shape !== '오각형'&& shape !== '육각형'&& shape !== '팔각형') && shape}
                    </button>
                    ))} 
                </div>
                </td>
            </tr>
            <tr>
                <td>색상 선택:</td>
                <td>
                <div>
                    {colors.map((color, index) => (
                    <button key={index} onClick={() => handleColorSelection(color)} style={{ border: selectedColor === color ? '3px solid black' : '1px solid grey' }}>
                        {color === '하양' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'white'}}></div>
                        )}
                        {color === '파랑' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'blue'}}></div>
                        )}
                        {color === '노랑' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'yellow'}}></div>
                        )}
                        {color === '주황' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'orange'}}></div>
                        )}
                        {color === '분홍' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'pink'}}></div>
                        )}
                        {color === '빨강' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'red'}}></div>
                        )}
                        {color === '갈색' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'brown'}}></div>
                        )}
                        {color === '연두' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'#adff2f'}}></div>
                        )}
                        {color === '초록' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'green'}}></div>
                        )}
                        {color === '청록' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'#00ffff'}}></div>
                        )}
                        {color === '남색' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'navy'}}></div>
                        )}
                        {color === '자주' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'#722f37'}}></div>
                        )}
                        {color === '보라' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'purple'}}></div>
                        )}
                        {color === '회색' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'grey'}}></div>
                        )}
                        {color === '검정' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'black'}}></div>
                        )}
                        {color === '투명' && (
                        <div style={{ width: '50px', height: '50px', backgroundColor:'transp'}}></div>
                        )}
                        
                    {color}
                    </button>
                    ))}
                </div>
                </td>
            </tr>
            <tr>
                <td>분할선 선택:</td>
                <td>
                <div>
                    {dividers.map((divider, index) => (
                    <button key={index} onClick={() => handledividerSelection(divider)} style={{ border: selectedDivider === divider ? '3px solid black' : '1px solid grey' }}>
                        {divider === '없음' && (
                        <img src="https://www.health.kr/images/pills/line01.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {divider === '(+)형' && (
                        <img src="https://www.health.kr/images/pills/line02.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {divider === '(-)형' && (
                        <img src="https://www.health.kr/images/pills/line03.jpg" alt="경질" style={{ width: '50px', height: '50px' }} />
                        )}
                        {(divider !== '없음'&&divider !== '(+)형'&&divider !== '(-)형') && divider}
                    </button>
                    ))}
                </div>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                <button type="submit">제출</button>
                </td>
            </tr>
            </tbody>
        </table>
        </form>
        <div>
            {/* 결과값을 표시 */}
            {results.map((result, index) => (
                <div key={index}>
                    <img src={result.image} alt="약 이미지" />
                    <p>상표: {result.mark}</p>
                    <p>종류: {result.type}</p>
                    <p>길이: {result.sizeLong}</p>
                    <p>두께: {result.thickness}</p>
                    <p>이름: {result.name}</p>
                    <p>회사: {result.company}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default WithoutImage;
