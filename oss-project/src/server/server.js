const express = require("express");
const app = express();
const PORT =  process.env.PORT || 4000;
const db = require('./config/db.js');
const bodyParser = require('body-parser');
const cors = require('cors');

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


app.listen(PORT, ()=> {
    console.log(`server on: http://localhost:${PORT}`);
})