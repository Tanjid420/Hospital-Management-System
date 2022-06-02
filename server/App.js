const express=require('express');
const mysql=require('mysql');
require('dotenv').config();
const routes=require("./routes/Router")
const app=express();
const cors=require("cors")
console.log(process.env.USER)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin:"*",
    }
   
))
app.get("/abcd",(req,res)=>{
    console.log("Hello");
    res.status(200).json({x:"hsadadadad"})
})
app.get("/hello",(req,res)=>{
    console.log(req.body)

    res.send("i am bal sal form post request")
})


app.use("/",routes);

app.listen(4000,()=>{
    console.log("server is running ")
})
