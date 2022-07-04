const express=require("express");
const router=express.Router();
const createDatabase=require("../controllers/CreateDatabase")
const signup=require("../controllers/Signup")
const signin = require("../controllers/Signin")
const appointmentInfo = require("../controllers/AppointmentInfo")
const autharization=require("../controllers/Autharization")
const authorizationNotification=require("../controllers/AuthorizationNotification")
const approve=require("../controllers/Approve")
const reject=require("../controllers/Reject");
const User = require("../controllers/User");
router.get("/createDB",createDatabase);
router.post("/signup",signup)
router.post("/signin",signin)
router.get("/signin",signin)
router.post("/appointmentInfo",appointmentInfo)
router.get("/autharization",autharization)
router.get("/autharization/:id",authorizationNotification)
router.post("/approve/approve",approve)
router.post("/approve/reject",reject)
router.post("/user",User)
module.exports=router;
