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
