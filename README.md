# PillCheck 오픈소스기초프로젝트

**PillCheck**란? 약물의 안전성을 체크한다라는 의미를 담고있다.

### contributor
|이준호|동민아|최유림|
|------|---|---|
|dlwnsgh5648@gmail.com             |      minadong404@gmail.com         |   choi.yoo.lim.12@gmail.com |
|[LovellR](https://github.com/LovellR)        |  [mina-dong](https://github.com/mina-dong)           |    [san-sae](https://github.com/san-sae) |

### 서비스설명
**PillCheck**는 사용자에게 약에 대한 필요한 정보를 제공함으로써, 건강하고 안전하게 이용할 수 있도록 안내하고 있습니다.
아래와 같은 기능을 가지고 있는 웹 서비스 입니다.

1. 병용금기약물 조회 : 같이 먹으면 안되는 약물을 조회할 수 있으며, 금기사유와 약제조사 명을 알 수 있습니다.
2. 약물이미지 검색: 약 이름을 모를 경우, 다른 방법을 통해 검색할 수 있습니다. 약에 대한 형태를 사용자가 알려주면 그에 맞는 약이 무엇인지 정보를 제공합니다.
3. 개인정보맞춤 금기약물 조회: 임산부, 노인 등 개인에게 맞는 금기약물은 무엇이 있는지 정보를 제공하고 있습니다
4. 지역에 따른 약국위치 안내: 지역을 선택하면, 해당 지역에 맞는 약국위치를 안내하고 있습니다.
5. 문의: 사용하다가 문의사항이 생길 경우 질의를 남길 수 있는 기능을 제공하고 있습니다.

### 설치방법
#### Install dependencies
```
npm install
```
check package.json

### 사용방법
oss-project/src/server/node server.js  
oss-project/npm start  

데이터베이스파일은 크다보니 github에 업로드 하지 않았습니다. 데이터베이스 관련 문의는 연락주세요.


### 의존성
#### Node 
- node : v16.14.2  
- npm : 8.5.0  
  
── @testing-library/jest-dom@5.17.0  
├── @testing-library/react@13.4.0  
├── @testing-library/user-event@13.5.0  
├── axios@1.7.2  
├── body-parser@1.20.2  
├── cors@2.8.5  
├── express@4.19.2  
├── mysql@2.18.1  
├── react-dom@18.3.1  
├── react-router-dom@6.23.1  
├── react-scripts@5.0.1  
├── react@18.3.1  
├── request@2.88.2  
├── web-vitals@2.1.4  
└── xml2js@0.6.2  

#### CVS Loader 파이썬 패키지 버전
- chardet : 5.2.0  
- pandas : 2.2.2  
- PyMySQL : 1.1.1  
