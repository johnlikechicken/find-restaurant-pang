const express = require("express")
const app = express()

app.listen(3000,()=>{
    console.log("3000포트에 접속완료");
})

app.get("/",(req,res)=>{
    res.send("123")
})