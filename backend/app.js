const express = require('express')
const app = express()
require("dotenv").config()
port=process.env.PORT
app.use(express.json());

app.use(express.json()); 
app.use('/', require("./routes"));

app.get('/api/v1',(req,res)=>{
    res.send("everything is fine");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })