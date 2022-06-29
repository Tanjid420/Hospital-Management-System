const Database=require("../config/CreateConnection")
const DB=new Database();
const db=DB.establishConnection();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const user = require("../models/User");
var jwt = require('jsonwebtoken');
const JWT_secret = 'fuckShantoHard';





module.exports=signup=(req,res)=>{
    const {username, password, email, confirmPassword, sex, image} = req.body
    console.log(req.body)
    bcrypt.hash(password,saltRounds,(err,hash)=>{
      if(err){
        console.log(err);
      }
      db.query(
        "INSERT INTO User (ID,Name,Email,Password,Sex) VALUES(?,?,?,?,?)",
        [ uuidv4(),username, email, hash, sex],
        (err, result) => {
          console.log(err);
          res.status(200).json({
    
        })
        }
      );
      const data = {
        user:{
          id: user.id
        }
      }
      const authToken = jwt.sign({ data }, 'JWT_secret');
      console.log(`This is jwt ${authToken}`);
    })
  


}
