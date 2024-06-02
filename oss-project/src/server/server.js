const express = require("express");
const app = express();
const PORT =  process.env.PORT || 3000;


app.get("/", (req, res) => {
    console.log('root');
});

app.listen(PORT, ()=> {
    console.log(`server on: http://localhost:${PORT}`);
})