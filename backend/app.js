const express = require('express')
const app = express()
const cors = require("cors");
require("dotenv").config()
port=process.env.PORT
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
  }));


app.use('/', require("./routes")); 

app.get('/api/v1',(req,res)=>{
    res.send("everything is fine");
})
console.log("Starting server...");
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })