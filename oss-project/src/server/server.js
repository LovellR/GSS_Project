const express = require("express");
const app = express();
const PORT =  process.env.PORT || 4000;
const db = require('./config/db.js');


app.get("/", (req, res) => {
    console.log('root');
});

app.listen(PORT, ()=> {
    console.log(`server on: http://localhost:${PORT}`);
})