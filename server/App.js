const express=require('express');
const mysql=require('mysql');
require('dotenv').config();
const app=express();
console.log(process.env.USER)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Hospital_Management_System'
})
// sudo /opt/lampp/manager-linux-x64.run

db.connect((err)=>{
    if (err){
        throw err
    } 
    console.log("Connection done");
})
db.query('SELECT *FROM user',(err,result,fields)=>{
    if(err)
    throw err;
    console.log(result)
})

// db.query('DELETE FROM user where Name=""',(err,result,fields)=>{
//     console.log(result);

// })
// db.query('INSERT INTO user VALUES("HELLO"),("WORLD")',(err,result,fields)=>{
//     console.log(result)
// })
// db.query('SELECT *FROM user',(err,result,fields)=>{
//     if(err)
//     throw err;
//     console.log(result)
// })
app.get('/createdb',(req,res)=>{
    let sql="CREATE DATABASE Hospital_Management_System";
    db.query(sql,(err,result)=>{
        if(err)
        {
            throw err;
        }
        console.log("result");
        res.send("reateed") 
    })
})
app.listen(7000,()=>{
    console.log("server is running ")
})