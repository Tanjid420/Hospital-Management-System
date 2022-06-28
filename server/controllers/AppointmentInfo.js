const Database = require("../config/CreateConnection");
const DB = new Database();
const db = DB.establishConnection();
const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
const cors = require("cors");
const user = require("../models/User");
const medicalHistory = require("../models/MedicalHistory");
const record = require("../models/Record");
module.exports=appointmentInfo=(req,res)=>{
const {name,email,phone,time,date,medicalhistory}=req.body;
console.log(req.body);
db.query(
    "INSERT INTO user (ID,Name,Email) VALUES(?,?,?)",[uuidv4(),name,email],
    (err,result)=>{
        console.log(err);
        res.status(200).json({
        })
    }
);
db.query(
    "INSERT INTO medicalhistory (MedicalHistory) VALUES(?)",[medicalhistory],
    (err,result)=>{
        console.log(err);
        res.status(200).json({

        })
    }
);
db.query(
    "INSERT INTO record (Time,Date) VALUES(?,?)",[time,date],
    (err,result)=>{
        console.log(err);
        res.status(200).json({

        })
    }
);


}