const Database = require("../config/CreateConnection");
const express = require("express");
const app = express();
const cors = require("cors");
const db=require("../config/CreateConnection")
const availableSeats=require("../models/AvailableSeats");
const mysql=require("mysql")
module.exports=occupybeds=(req,res)=>{
    console.log("Occupied");
    const {id}=req.body
    const condition = 'Yes';
    // const sql=`UPDATE availableseats SET Availability=No WHERE=`+mysql.escape(condition);
    db.query(`UPDATE availableseats SET Availability="No" WHERE BedId=`+mysql.escape(id), (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        res.send(result);
      });
}
