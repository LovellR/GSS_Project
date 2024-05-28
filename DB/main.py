import chardet
import pandas as pd
from sqlalchemy import create_engine

# MySQL 연결 설정
user = 'root'
password = 'root'
host = '127.0.0.1'
port = 3306
database = 'druginfos'

# SQLAlchemy 엔진 생성
engine = create_engine(f'mysql+pymysql://{user}:{password}@{host}:{port}/{database}')

# CSV 파일 경로지정
csv_file_path = '한국의약품안전관리원_노인주의약물_20230701.csv'

# 파일 UTF-8 인코딩 감지
with open(csv_file_path, 'rb') as f:
    result = chardet.detect(f.read(10000))
    file_encoding = result['encoding']

# 감지된 인코딩을 사용하여 CSV 파일 읽기
df = pd.read_csv(csv_file_path, encoding=file_encoding)

# 데이터프레임을 MySQL 테이블로 저장
table_name = '노인주의약물'  # 테이블 이름을 지정합니다
df.to_sql(table_name, con=engine, if_exists='append', index=False)

print(f"CSV 파일이 MySQL DB의 {table_name} 테이블에 성공적으로 로드되었습니다.")