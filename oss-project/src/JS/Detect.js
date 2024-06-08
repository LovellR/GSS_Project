import React, { useState } from 'react';
import WithoutImage from './WithoutImage';

const Detect = () => {
    const [visible, setVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [detected, setDetected] = useState(false);

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
        // 여기서 이미지를 분석하고 감지된 결과를 처리하는 로직을 구현할 수 있습니다.
        // 예를 들어, 감지된 결과를 상태에 저장하거나 결과를 표시할 수 있습니다.
        setDetected(true);
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
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div>
                {!imageSrc && (
                    
                )}
                <div className='withoutimage'>
                    {visible && <WithoutImage />}
                </div>
            </div>
        </div>
    );
};

export default Detect;
