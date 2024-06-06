const express = require("express");
const app = express();
const PORT =  process.env.PORT || 4000;
const db = require('./config/db.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

function getData(url) {
    try{
        const res = axios.get(url);
        return res.data;
    }catch(error){
        console.error('error')
        return null
    }
}
const openApiUrl =

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


app.get("/", (req, res) => {
    console.log('root');
});

app.post("/Search", (req, res) => {
    const firstMedicine = req.body.firstMedicine;
    const secondMedicine = req.body.secondMedicine;
    const thirdMedicine = req.body.thirdMedicine;

    console.log('Received data:');
    console.log('First Medicine:', firstMedicine);
    console.log('Second Medicine:', secondMedicine);
    console.log('Third Medicine:', thirdMedicine);

    //데이터 베이스 연결필요

    res.send('Data received');
});

app.get("/Pharmacy", async (req, res) => {
    try {
        const response = await axios.get(openApiUrl, {
            params: {
                pageNo: 1,
                numOfRows: 10
            }
        });

        const pharmacyData = response.data.body.items.item; // 약국 정보를 가져온 데이터입니다.
        res.json(pharmacyData); // JSON 형식으로 데이터를 클라이언트에게 보냅니다.
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error'); // 서버 오류가 발생했을 때 처리하는 부분입니다.
    }
});

app.listen(PORT, ()=> {
    console.log(`server on: http://localhost:${PORT}`);
})

