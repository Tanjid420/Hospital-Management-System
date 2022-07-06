const bcrypt = require("bcrypt");
const saltRounds = 10;
const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const cors = require("cors");
const user = require("../models/User");
var jwt = require("jsonwebtoken");
const JWT_secret = "fuckShantoHard";
const { v4: uuidv4 } = require("uuid");
const db=require("../config/CreateConnection")

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:true,limit: '50mb'}));
app.use(
  session({
    genid: function (req) {
      return genuuidv4(); // use UUIDs for session IDs
    },
    secret: "baalshanto",
    resave: "false",
    saveUninitialized: "false",
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

module.exports = signin = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);

  try {
    db.query(
      "SELECT * FROM user WHERE email = ?",
      [email],
      async (error, results, fields) => {
      console.log(results[0].Email)
        if (error) {
          console.log(error);
          res.send({
            code: 400,
            failed: "error ocurred",
          });
        } else {
          if(results[0].Status!=true)
          {
            
            return res.status(204).json({error:"Not yet Approved"});
          }

          // console.log(results);
          if (results.length > 0) {
            console.log(results[0].Password);
            const comparision = await bcrypt.compare(
              password,
              results[0].Password
            );
            if (comparision) {
              // console.log(req.session);
              // req.session.user = results;
              // console.log(req.session.user);
              console.log(results)
              const data = {

                results,
              };
              const token = jwt.sign({ data }, JWT_secret);
              // console.log(`this is jwt${token}`);
              return res
                .status(200)
                .json({ success: "Login successful",res:results[0],token:token});
            } else {
              res.status(204).json({error:"wrong email or password"})
                
                
            }
          } else {
            res.status(206).json({error:"user doesn't exist"})
              
          }
        }
      }
    );
  } catch (err) {
    res.send("Something went wrong");
  }
};

//   db.query("SELECT Email FROM user WHERE Email=?",
//   [email],async(err,result)=>{
//       if(err){
//           res.json({err:err})
//       }
//       else{
//         if (result.length>0){
//           const passwordCompare = await bcrypt.compare(password,result[0].password)

//       if(passwordCompare){
//         res.send("login successfull")
//       }else{
//         res.send("login failed")
//       }
//   }
//   }
// });
