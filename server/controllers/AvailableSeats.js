const Database = require("../config/CreateConnection");
const express = require("express");
const app = express();
const cors = require("cors");
const db=require("../config/CreateConnection")
const availableSeats=require("../models/AvailableSeats");
const mysql=require("mysql")


    module.exports=availableseats=(req,res)=>{
        const condition='Yes';
        const sql=`SELECT availableseats.BuildingName,availableseats.RoomNo,availableseats.BedNo,availableseats.Price
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