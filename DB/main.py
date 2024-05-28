import pandas as pd
from sqlalchemy import create_engine

# MySQL 연결 설정
user = 'root'
password = 'root'
host = 'localhost'
port = 3306
database = 'OSBP'

# SQLAlchemy 엔진 생성
engine = create_engine(f'mysql+pymysql://{user}:{password}@{host}:{port}/{database}')

# CSV 파일 읽기
csv_file_path = '한국의약품안전관리원_노인주의약물_20230701.csv'
df = pd.read_csv(csv_file_path)

# 데이터프레임을 MySQL 테이블로 저장
table_name = '노인주의약물'  # 테이블 이름을 지정합니다
df.to_sql(table_name, con=engine, if_exists='append', index=False)

print(f"CSV 파일이 MySQL DB의 {table_name} 테이블에 성공적으로 로드되었습니다.")