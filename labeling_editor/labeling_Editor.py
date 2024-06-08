import os
import json

//약물 이름 및 위치 선언
directories_and_drug_names = [
    ('K-004562_json', '대우세파클러캡슐 250mg'),
    ('K-004563_json', '어린이용타스펜정 160mg'),
    ('K-004565_json', '드로세프캡슐 500mg'),
    ('K-004569_json', '아주세프라딘캡슐 500mg'),
    ('K-004572_json', '아주세파드록실캡슐 500mg'),
    ('K-004574_json', '삼아아토크정 20mcg'),
    ('K-004580_json', '프라스탄정 5mg'),
    ('K-004601_json', '파클캡슐'),
    ('K-004606_json', '토비콤에스연질캡슐 100mg/PTP'),
    ('K-004622_json', '베탁정'),
    ('K-004624_json', '네오세프캡슐'),
    ('K-004635_json', '지노칼정'),
    ('K-004653_json', '세카론정'),
    ('K-004664_json', '원클러캡슐 250mg'),
    ('K-004667_json', '뉴포린캡슐 250mg'),
    ('K-004668_json', '세프린캡슐 500mg'),
    ('K-004671_json', '무테린캡슐 200mg'),
    ('K-004699_json', '오스틴암브록솔염산염정'),
    ('K-004711_json', '대화세파클러캡슐'),
    ('K-004751_json', '화니돌0.5마이크로그램연질캡슐'),
    ('K-004762_json', '아프레스트정'),
    ('K-004775_json', '트라시논정 1mg'),
    ('K-004786_json', '미아론정'),
    ('K-004797_json', '플론정'),
    ('K-004837_json', '산디문뉴오랄연질캡슐 25mg'),
    ('K-004895_json', '에이프로젠나프록센나트륨정 275mg/PTP'),
    ('K-004939_json', '오논캡슐(프란루카스트수화물)'),
    ('K-004999_json', '비유피-4정 10mg'),
    ('K-005000_json', '비유피-4정 20mg'),
    ('K-005002_json', '엘도스캡슐(에르도스테인)(수출용)'),
    ('K-005003_json', '씨프러스정 250mg'),
    ('K-005033_json', '알게이트정'),
    ('K-005090_json', '베이슨정 0.2mg'),
    ('K-005108_json', '대원알마게이트정'),
    ('K-005113_json', '한국유나이티드산화마그네슘정250mg/병'),
    ('K-005118_json', '부광돔페리돈정 10mg'),
    ('K-005163_json', '세파메칠정(메틸올세팔렉신리시네이트)'),
    ('K-005165_json', '알마시드정'),
    ('K-005174_json', '플루신정'),
    ('K-005179_json', '펜넬캡슐(수출용)'),
]