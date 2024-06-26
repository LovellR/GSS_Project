import React, { useState } from 'react';
import WithoutImage from './WithoutImage';
import axios from 'axios';

const Detect = () => {
    const [visible, setVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [detected, setDetected] = useState(false);
    const [detectionResult, setDetectionResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const onUpload = (e) => {
        const file = e.target.files[0];
        
        // 파일이 없거나 이미지 파일이 아닌 경우에 대한 유효성 검사
        if (!file || !file.type.startsWith('image/')) {
            alert('이미지 파일을 업로드해주세요.');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            setImageSrc(reader.result);
            setDetected(false); // 이미지가 변경되면 detect 상태를 초기화합니다.
        };
    };

    const handleDetect = () => {
        if (!imageSrc) return;

        const base64Image = imageSrc.split(',')[1];

        axios({
            method: 'POST',
            url: 'https://detect.roboflow.com/drug-classify/1',
            params: {
                api_key: 'tNmNvgeOtaGTjCjjRYHE'
            },
            data: base64Image,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((response) => {
            setDetectionResult(response.data);
            setDetected(true);
        })
        .catch((error) => {
            console.error(error.message);
            alert('감지에 실패했습니다. 다시 시도해주세요.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    const processDetectionResult = (result) => {
        if (!result || !result.predictions || result.predictions.length === 0) {
            return '감지 결과가 없습니다.';
        }

        const detection = result.predictions[0];
        let message;

        switch (detection.class) {
            case '- 250mg':
                message = '대우세파클러캡슐 250mg';
                break;
            case '- 500mg':
                message = '드로세프캡슐 500mg';
                break;
            case '- 20mcg':
                message = '삼아아토크정 20mcg';
                break;
            case '- 5mg':
                message = '프라스탄정 5mg';
                break;
            case '- 100mg-PTP':
                message = '토비콤에스연질캡슐 100mg/PTP';
                break;
            case '- 200mg':
                message = '무테린캡슐 200mg';
                break;
            case '-0-5-':
                message = '화니돌0.5마이크로그램연질캡슐';
                break;
            case '- 1mg':
                message = '트라시논정 1mg';
                break;
            case '- 25mg':
                message = '산디문뉴오랄연질캡슐 25mg';
                break;
            case '- 275mg-PTP':
                message = '에이프로젠나프록센나트륨정 275mg/PTP';
                break;
            case '-4- 10mg':
                message = '비유피-4정 10mg';
                break;
            case '-4- 20mg':
                message = '비유피-4정 20mg';
                break;
            case '- 0.2mg':
                message = '베이슨정 0.2mg';
                break;
            case '-400mg-':
                message = '이바펜400mg정';
                break;
            case '- 100mg-PTP -':
                message = '바이메틴정 100mg/PTP (수출용)';
                break;
            default:
                message = '알 수 없는 약입니다.';
        }

        return message;
    };

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                {!visible && (
                    <div className='detect'
                        style={{ 
                            backgroundColor: '#deedf77e', 
                            borderRadius: '10px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                            padding: '20px', 
                            display: 'inline-block',
                            maxWidth: '90%',
                            marginTop: '20px'
                        }}
                    >
                        <input 
                            accept="image/*" 
                            multiple 
                            type="file"
                            style={{ padding: '3%', display: 'block', margin: '0 auto' }}
                            onChange={onUpload}
                        />
                        {imageSrc && (
                            <div style={{ position: 'relative', marginTop: '20px' }}>
                                <img 
                                    style={{ display: 'inline-block', maxWidth: '100%', maxHeight: '400px' }} 
                                    src={imageSrc} 
                                />
                                {!detected && (
                                    <button 
                                        style={{ 
                                            position: 'absolute', 
                                            bottom: '10px', 
                                            right: '10px',
                                            padding: '10px'
                                        }} 
                                        onClick={handleDetect}
                                    >
                                        Detect
                                    </button>
                                )}
                                {detected && detectionResult && (
                                    <div style={{ marginTop: '20px' }}>
                                        <h3>감지 결과:</h3>
                                        <p>{processDetectionResult(detectionResult)}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div>
                {!imageSrc && (
                    <div 
                        style={{ 
                            backgroundColor: '#deedf77e', 
                            borderRadius: '10px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                            padding: '20px', 
                            display: 'inline-block',
                            maxWidth: '90%',
                            marginTop: '20px'
                        }}
                    >
                        <span onClick={() => setVisible(!visible)}>
                            {visible ? "사진으로 검색하기" : "사진 없이 검색하기"}
                        </span>
                    </div>
                )}
                <div className='withoutimage'>
                    {visible && <WithoutImage />}
                </div>
            </div>
        </div>
    );
};

export default Detect;
