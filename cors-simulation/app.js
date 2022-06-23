const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get('/cors-test', (req,res) => {
    res.send('Hi');
})



app.listen(port, () => {
    console.log("서버가 켜졌어요!")
})

