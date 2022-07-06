const express = require("express");
require("dotenv").config();
const routes = require("./routes/Router");
const Database=require("./config/CreateConnection")
const app = express();
const cors = require("cors");
const db=require("./config/CreateConnection")
const bodyParser = require('body-parser')
db.connect();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET","POST"],
    credentials: true
  })
);
// console.log(process.env.CLOUDAPIKEY);
// app.use(express.json());
// app.use(express.bodyParser({limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:true,limit: '50mb'}));
// app.use(express.urlencoded({ extended: true }));

app.use("/", routes);
app.get("/hello", (req, res) => {
  console.log(req.body);

  res.send("fuck you shanto");
});



app.listen(4000, () => {
  console.log("server is running ");
});
