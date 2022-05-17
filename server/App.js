const express=require('express');
const mysql=require('mysql');
require('dotenv').config();
const routes=require("./routes/Router")
const app=express();
console.log(process.env.USER)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use("/",routes);
app.listen(4000,()=>{
    console.log("server is running ")
})
