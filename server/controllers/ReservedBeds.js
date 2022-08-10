const Database = require("../config/CreateConnection");
const express = require("express");
const app = express();
const cors = require("cors");
const db=require("../config/CreateConnection")
const availableSeats=require("../models/AvailableSeats");
const mysql=require("mysql")
module.exports=reservedbeds=(req,res)=>{
    console.log("Occupied");
    const condition='No';
        const sql=`SELECT availableseats.BuildingName,availableseats.RoomNo,availableseats.BedNo,availableseats.Price,availableseats.BedId 
        FROM availableseats
        WHERE Availability=`+mysql.escape(condition);
        db.query(sql, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
            res.send(result);
          });
}