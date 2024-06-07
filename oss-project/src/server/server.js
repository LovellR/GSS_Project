const express = require("express");
const app = express();
const PORT =  process.env.PORT || 4000;
const db = require('./config/db.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');


const openApiUrl = 'https://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyFullDown?serviceKey=pLUk2%2FJBsn3lLvQyMUoW3L%2B%2FEoLW4bEUpOUNA56KVE3Z%2BtX9%2F8PYvUGEvkCNUY%2BYcoU74Xy0Kl39R9A7Ud3CbA%3D%3D&pageNo=2&numOfRows=10';

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
        const response = await axios.get(openApiUrl);
        res.send(response.data);
      } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).send('Error fetching data from the API');
      }
    });


    
app.listen(PORT, ()=> {
    console.log(`server on: http://localhost:${PORT}`);
})

