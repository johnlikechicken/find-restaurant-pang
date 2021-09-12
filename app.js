const express = require("express")
const app = express()

app.listen(3000,()=>{
    console.log("333");
})

app.get("/",(req,res)=>{
    res.send("123")
})