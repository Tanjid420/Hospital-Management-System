const express=require("express");
const router=express.Router();
const createDatabase=require("../controllers/CreateDatabase")
const signup=require("../controllers/Signup")
const signin = require("../controllers/Signin")
const appointmentInfo = require("../controllers/AppointmentInfo")
router.get("/createDB",createDatabase);
router.post("/signup",signup)
router.post("/signin",signin)
router.get("/signin",signin)
router.post("/appointmentInfo",appointmentInfo)
module.exports=router;
