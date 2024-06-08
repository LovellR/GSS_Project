const express = require("express");
const app = express();
const PORT =  process.env.PORT || 4000;
//const db = require('./config/db.js');
const db = require('./config/pharmacy_db.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
/*const request = require('request');
const { parseString } = require('xml2js');

const openApiUrl = 'http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyFullDown';
const serviceKey = 'pLUk2%2FJBsn3lLvQyMUoW3L%2B%2FEoLW4bEUpOUNA56KVE3Z%2BtX9%2F8PYvUGEvkCNUY%2BYcoU74Xy0Kl39R9A7Ud3CbA%3D%3D';
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


app.get("/", (req, res) => {
    console.log('root');
});

app.post("/Search", (req, res) => {
    const firstMedicine = req.body.firstMedicine;
    const secondMedicine = req.body.secondMedicine;
    //const thirdMedicine = req.body.thirdMedicine;

    console.log('Received data:');
    console.log('First Medicine:', firstMedicine);
    console.log('Second Medicine:', secondMedicine);
    //console.log('Third Medicine:', thirdMedicine);

    const query = `
    SELECT 제품명A, 업소명A, 제품명B, 업소명B, 금기사유 
    FROM 병용금기약물 
    WHERE 제품명A = ? AND 제품명B = ?`;

    const firstM = `%${firstMedicine}%`;
    const secondM = `%${secondMedicine}%`;
});

/*
const fetchData = (pageNo) => {
    return new Promise((resolve, reject) => {
        const queryParams = `?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=10`;

        request({
            url: openApiUrl + queryParams,
            method: 'GET'
        }, (error, response, body) => {
            if (error) {
                return reject(error);
            }

            parseString(body, (err, result) => {
                if (err) {
                    return reject(err);
                }

                const totalPages = Math.ceil(result.response.body[0].totalCount[0] / 10);

                const pharmacies = result.response.body[0].items[0].item.map(pharmacy => ({
                    name: pharmacy.dutyName[0],
                    address: pharmacy.dutyAddr[0],
                    latitude: parseFloat(pharmacy.wgs84Lat[0]),
                    longitude: parseFloat(pharmacy.wgs84Lon[0])
                }));

                resolve({ pharmacies, totalPages });
            });
        });
    });
};

const savePharmacyData = (pharmacies) => {
    pharmacies.forEach(pharmacy => {
        const { name, address, latitude, longitude } = pharmacy;
        db.query('INSERT INTO pharmacies (name, address, latitude, longitude) VALUES (?, ?, ?, ?)', 
            [name, address, latitude, longitude], 
            (err) => {
                if (err) {
                    console.error('Database insert error:', err);
                }
            }
        );
    });
};
*/

app.get("/api/pharmacies", async (req, res) => {
    const region = req.query.region;

    // 데이터베이스에서 지역에 따라 약국 정보를 검색하는 쿼리
    const query = 'SELECT * FROM pharmacies WHERE address LIKE ?';
    const likeRegion = `%${region}%`;

    db.query(query, [likeRegion], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        // console.log('Database query results:', results); // 디버깅을 위해 추가
        res.json(results);
    });
});


    
app.listen(PORT, ()=> {
    console.log(`server on: http://localhost:${PORT}`);
})