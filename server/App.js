const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
const routes = require("./routes/Router");
const Database=require("./config/CreateConnection")
const app = express();
const cors = require("cors");
const DB=new Database();
const db=DB.establishConnection();
// const bodyParser = require ('body-parser');
// const express = require("express");
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET","POST"],
    credentials: true
  })
);
// app.use(cookieParser());
// app.use((bodyParser.urlencoded({ extended: true })));
// app.use(session({
//   key:'userId',
//   secret:'baalshanto',
//   resave:'false',
//   saveUninitialized:'false',
//   cookie:{
//     expires:60*60*24,
//   },

// }))
console.log(process.env.USER);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);
// app.get("/signin", 
db.query("show tables",(err,result)=>{
  console.log(result)
})
// app.get("/abcd",(req,res)=>{
//     console.log("Hello");
//     res.status(200).json({x:"hsadadadad"})
// })
app.get("/hello", (req, res) => {
  console.log(req.body);

  res.send("fuck you shanto");
});



// app.post("/signup", (req, res) => {

//   const [username, password, email, confirmPassword, sex, image] = req.body
//   db.query(
//     // "INSERT INTO user (Name,Email,Password,Sex,Image) VALUES(?,?,?,?,?,?)",
//     // [ username, password, email, confirmPassword, sex, image],
//     `INSERT INTO user (Name,Email,Password,Sex,Image) VALUES(${username}, ${password}, ${email}, ${confirmPassword}, ${sex})`,
//     (err, result) => {
//       console.log(err);
//     }
//   );
// });



app.listen(4000, () => {
  console.log("server is running ");
});
